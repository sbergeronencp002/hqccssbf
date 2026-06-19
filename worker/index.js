// ─────────────────────────────────────────────────────────────────────────────
// Cloudflare Worker — hqccssbf-admin
//
// Reçoit une mutation (ajout / modification / suppression de question) depuis
// admin.html, l'applique sur questions.js via l'API GitHub, et renvoie le
// nouveau SHA + le prochain ID libre.
//
// Avantage : le client n'envoie que ~2 Ko (la mutation) au lieu de ~1,25 Mo
// (questions.js complet en base64). Le Worker lit et écrit GitHub en
// server-to-server (rapide) — publication en ~1-2 s au lieu de 30-35 s.
//
// Secrets Cloudflare (wrangler secret put) :
//   GITHUB_PAT    — Personal Access Token GitHub (scope repo)
//   WORKER_SECRET — Clé partagée avec admin.html pour authentifier les appels
// ─────────────────────────────────────────────────────────────────────────────

const OWNER  = 'sbergeronencp002';
const REPO   = 'hqccssbf';
const BRANCH = 'main';
const QUESTIONS_PATH = 'questions.js';
const BACKUPS_PATH   = 'backups';
const BACKUPS_KEEP   = 20;

// ── Sérialiseur (copie exacte de questions-io.js) ─────────────────────────────

function _isScalar(v) {
  return v === null || v === false || v === true || typeof v === 'number' || typeof v === 'string';
}

function _isFlat(v) {
  if (_isScalar(v)) return true;
  if (Array.isArray(v) || typeof v !== 'object' || v === null) return false;
  return Object.values(v).every(_isScalar);
}

function serializeValue(v, indent = 0) {
  const pad  = '  '.repeat(indent);
  const pad1 = '  '.repeat(indent + 1);
  if (_isScalar(v)) return v === null ? 'null' : typeof v === 'string' ? JSON.stringify(v) : String(v);
  if (Array.isArray(v)) {
    if (!v.length) return '[]';
    if (v.every(_isFlat)) {
      const items  = v.map(i => serializeValue(i, 0));
      const oneLine = '[' + items.join(', ') + ']';
      if (oneLine.length <= 120) return oneLine;
    }
    const items = v.map(i => pad1 + serializeValue(i, indent + 1));
    return '[\n' + items.join(',\n') + '\n' + pad + ']';
  }
  const entries = Object.entries(v);
  if (!entries.length) return '{}';
  const fmtKey = k => /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : JSON.stringify(k);
  if (entries.every(([, val]) => _isScalar(val))) {
    const pairs  = entries.map(([k, val]) => fmtKey(k) + ': ' + serializeValue(val, 0));
    const oneLine = '{' + pairs.join(', ') + '}';
    if (oneLine.length <= 120) return oneLine;
  }
  const pairs = entries.map(([k, val]) => pad1 + fmtKey(k) + ': ' + serializeValue(val, indent + 1));
  return '{\n' + pairs.join(',\n') + '\n' + pad + '}';
}

function ensureImageDbComplete(questions, imageDb) {
  questions.forEach(q => {
    q.documents?.forEach(d => d.cols?.forEach(c => {
      if (c.ref && !imageDb[c.ref]) imageDb[c.ref] = { src: 'images/' + c.ref };
    }));
    if (q.reponse?.ref && !imageDb[q.reponse.ref]) imageDb[q.reponse.ref] = { src: 'images/' + q.reponse.ref };
  });
}

function generateQuestionsJs(questions, reglettes, imageDb) {
  ensureImageDbComplete(questions, imageDb);
  let out = 'const REGLETTES = {\n';
  out += Object.entries(reglettes).map(([k, v]) => `  ${JSON.stringify(k)}: ${serializeValue(v, 1)}`).join(',\n');
  out += '\n}\n\nconst IMAGE_DB = {\n';
  out += Object.entries(imageDb).map(([k, v]) => `  ${JSON.stringify(k)}: ${serializeValue(v, 1)}`).join(',\n');
  out += '\n}\n\nconst QUESTIONS = [\n';
  out += questions.map(q => '  ' + serializeValue(q, 1)).join(',\n');
  out += '\n]\n';
  return out;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function utf8b64(str) {
  const bytes = new TextEncoder().encode(str);
  let binary = '';
  bytes.forEach(b => binary += String.fromCharCode(b));
  return btoa(binary);
}

function b64utf8(b64) {
  const binary = atob(b64.replace(/\n/g, ''));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new TextDecoder('utf-8').decode(bytes);
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function jsonResp(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
  });
}

function errResp(msg, status = 400) {
  return jsonResp({ ok: false, error: msg }, status);
}

// ── Fetch questions.js depuis GitHub ─────────────────────────────────────────

async function fetchQuestionsRaw(token) {
  const resp = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/contents/${QUESTIONS_PATH}`,
    { headers: { Authorization: `token ${token}`, 'User-Agent': 'hqccssbf-worker' }, cache: 'no-store' }
  );
  if (!resp.ok) throw new Error('GitHub fetch ' + resp.status);
  const data = await resp.json();
  const sha = data.sha;
  let content;
  if (data.content) {
    content = b64utf8(data.content);
  } else if (data.download_url) {
    const raw = await fetch(data.download_url + '?t=' + Date.now(), { cache: 'no-store' });
    if (!raw.ok) throw new Error('GitHub download ' + raw.status);
    content = await raw.text();
  } else {
    throw new Error('Réponse inattendue de GitHub');
  }
  return { sha, content };
}

// ── Backup + élagage (fire-and-forget via ctx.waitUntil) ─────────────────────

async function doBackupAndPrune(token, content) {
  const ts = new Date().toISOString().slice(0, 19).replace('T', '_').replace(/:/g, '-');
  const backupName = `questions-${ts}.js`;

  // Écrire le backup
  await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/contents/${BACKUPS_PATH}/${backupName}`,
    {
      method: 'PUT',
      headers: { Authorization: `token ${token}`, 'Content-Type': 'application/json', 'User-Agent': 'hqccssbf-worker' },
      body: JSON.stringify({ message: `Backup auto ${ts}`, content: utf8b64(content), branch: BRANCH }),
    }
  ).catch(() => {});

  // Élaguer les anciens backups
  try {
    const listResp = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/contents/${BACKUPS_PATH}?ref=${BRANCH}&t=${Date.now()}`,
      { headers: { Authorization: `token ${token}`, 'User-Agent': 'hqccssbf-worker' }, cache: 'no-store' }
    );
    if (!listResp.ok) return;
    const files = await listResp.json();
    const backups = files
      .filter(f => f.name.startsWith('questions-') && f.name.endsWith('.js'))
      .sort((a, b) => b.name.localeCompare(a.name));
    const toDelete = backups.slice(BACKUPS_KEEP);
    for (const f of toDelete) {
      await fetch(
        `https://api.github.com/repos/${OWNER}/${REPO}/contents/${BACKUPS_PATH}/${encodeURIComponent(f.name)}`,
        {
          method: 'DELETE',
          headers: { Authorization: `token ${token}`, 'Content-Type': 'application/json', 'User-Agent': 'hqccssbf-worker' },
          body: JSON.stringify({ message: `Élaguer backup ${f.name}`, sha: f.sha, branch: BRANCH }),
        }
      ).catch(() => {});
    }
  } catch (_) {}
}

// ── Handler principal ─────────────────────────────────────────────────────────

async function handlePublish(request, env, ctx) {
  let body;
  try { body = await request.json(); } catch { return errResp('JSON invalide'); }

  const { secret, action, question, reglette, editingId } = body;

  if (!secret || secret !== env.WORKER_SECRET) return errResp('Non autorisé', 401);
  if (!action || !['upsert', 'delete'].includes(action)) return errResp('action invalide');
  if (!question?.id) return errResp('question.id manquant');

  const token = env.GITHUB_PAT;

  // 1. Récupérer l'état actuel
  let sha, content, QUESTIONS, REGLETTES, IMAGE_DB;
  try {
    ({ sha, content } = await fetchQuestionsRaw(token));
    const fn = new Function(content + '\nreturn { QUESTIONS, REGLETTES, IMAGE_DB };');
    ({ QUESTIONS, REGLETTES, IMAGE_DB } = fn());
  } catch (e) {
    return errResp('Lecture GitHub échouée : ' + e.message, 502);
  }

  // 2. Backup fire-and-forget (contenu avant mutation)
  ctx.waitUntil(doBackupAndPrune(token, content));

  // 3. Appliquer la mutation
  if (action === 'delete') {
    const idx = QUESTIONS.findIndex(q => q.id === question.id);
    if (idx !== -1) QUESTIONS.splice(idx, 1);
    delete REGLETTES[question.id];
  } else {
    // upsert
    if (editingId) {
      const idx = QUESTIONS.findIndex(q => q.id === editingId);
      if (idx !== -1) QUESTIONS[idx] = question; else QUESTIONS.push(question);
      if (editingId !== question.id) delete REGLETTES[editingId];
    } else {
      if (QUESTIONS.find(q => q.id === question.id)) {
        return errResp(`L'identifiant ${question.id} existe déjà`, 409);
      }
      QUESTIONS.push(question);
    }
    REGLETTES[question.id] = reglette || {};
  }

  // 4. Régénérer questions.js
  const newContent = generateQuestionsJs(QUESTIONS, REGLETTES, IMAGE_DB);
  const commitMsg = action === 'delete'
    ? `Supprimer ${question.id}`
    : (editingId ? `Modifier ${question.id} — ${question.oi}` : `Ajouter ${question.id} — ${question.oi} (${question.periode})`);

  // 5. PUT vers GitHub (jusqu'à 2 tentatives sur conflit SHA)
  let newSha;
  for (let attempt = 0; attempt < 2; attempt++) {
    if (attempt > 0) {
      // Le SHA a changé depuis qu'on a lu : on relit et on réapplique
      try {
        let freshContent;
        ({ sha, content: freshContent } = await fetchQuestionsRaw(token));
        const fn2 = new Function(freshContent + '\nreturn { QUESTIONS, REGLETTES, IMAGE_DB };');
        const fresh = fn2();
        // Réappliquer la même mutation sur l'état frais
        if (action === 'delete') {
          const idx = fresh.QUESTIONS.findIndex(q => q.id === question.id);
          if (idx !== -1) fresh.QUESTIONS.splice(idx, 1);
          delete fresh.REGLETTES[question.id];
          QUESTIONS = fresh.QUESTIONS; REGLETTES = fresh.REGLETTES; IMAGE_DB = fresh.IMAGE_DB;
        } else {
          if (editingId) {
            const idx = fresh.QUESTIONS.findIndex(q => q.id === editingId);
            if (idx !== -1) fresh.QUESTIONS[idx] = question; else fresh.QUESTIONS.push(question);
            if (editingId !== question.id) delete fresh.REGLETTES[editingId];
          } else if (!fresh.QUESTIONS.find(q => q.id === question.id)) {
            fresh.QUESTIONS.push(question);
          }
          fresh.REGLETTES[question.id] = reglette || {};
          QUESTIONS = fresh.QUESTIONS; REGLETTES = fresh.REGLETTES; IMAGE_DB = fresh.IMAGE_DB;
        }
      } catch (e) {
        return errResp('Rechargement GitHub échoué : ' + e.message, 502);
      }
      await new Promise(r => setTimeout(r, 1000));
    }

    const putResp = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/contents/${QUESTIONS_PATH}`,
      {
        method: 'PUT',
        headers: { Authorization: `token ${token}`, 'Content-Type': 'application/json', 'User-Agent': 'hqccssbf-worker' },
        body: JSON.stringify({ message: commitMsg, content: utf8b64(generateQuestionsJs(QUESTIONS, REGLETTES, IMAGE_DB)), sha, branch: BRANCH }),
      }
    );

    if (putResp.ok) {
      const putData = await putResp.json();
      newSha = putData.content.sha;
      break;
    }

    const errData = await putResp.json().catch(() => ({}));
    const errMsg  = errData.message || String(putResp.status);
    const isConflict = putResp.status === 409 || errMsg.toLowerCase().includes('fast forward') || errMsg.toLowerCase().includes('conflict');
    if (!isConflict || attempt === 1) {
      return errResp(isConflict ? 'Conflit persistant. Rechargez la page (F5) et réessayez.' : errMsg, putResp.status);
    }
  }

  const nums  = QUESTIONS.map(q => parseInt(q.id.replace(/\D/g, ''))).filter(n => !isNaN(n));
  const nextId = 'Q' + (nums.length ? Math.max(...nums) + 1 : 1);

  return jsonResp({ ok: true, sha: newSha, nextId });
}

// ── Point d'entrée ────────────────────────────────────────────────────────────

export default {
  async fetch(request, env, ctx) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    const url = new URL(request.url);

    if (url.pathname === '/publish' && request.method === 'POST') {
      return handlePublish(request, env, ctx);
    }

    return new Response('HQC CSSBF Worker — OK', { status: 200 });
  },
};
