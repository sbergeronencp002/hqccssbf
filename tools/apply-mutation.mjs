// Script exécuté par la GitHub Action "publish-question".
// Lit questions.js, applique la mutation depuis PAYLOAD, réécrit le fichier.

import { readFileSync, writeFileSync } from 'fs';

const payload = JSON.parse(process.env.PAYLOAD);
const { action, question, reglette, editingId } = payload;

if (!question?.id) { console.error('question.id manquant'); process.exit(1); }

// ── Lire et parser questions.js ──────────────────────────────────────────────
const content = readFileSync('questions.js', 'utf-8');
let QUESTIONS, REGLETTES, IMAGE_DB;
try {
  const fn = new Function(content + '\nreturn { QUESTIONS, REGLETTES, IMAGE_DB };');
  ({ QUESTIONS, REGLETTES, IMAGE_DB } = fn());
} catch(e) { console.error('Parse error:', e.message); process.exit(1); }

// ── Appliquer la mutation ────────────────────────────────────────────────────
if (action === 'delete') {
  const idx = QUESTIONS.findIndex(q => q.id === question.id);
  if (idx !== -1) QUESTIONS.splice(idx, 1);
  delete REGLETTES[question.id];
} else {
  if (editingId) {
    const idx = QUESTIONS.findIndex(q => q.id === editingId);
    if (idx !== -1) QUESTIONS[idx] = question; else QUESTIONS.push(question);
    if (editingId !== question.id) delete REGLETTES[editingId];
  } else {
    if (QUESTIONS.find(q => q.id === question.id)) {
      console.error(`ID ${question.id} existe déjà`); process.exit(1);
    }
    QUESTIONS.push(question);
  }
  REGLETTES[question.id] = reglette || {};
}

// ── Compléter IMAGE_DB ───────────────────────────────────────────────────────
QUESTIONS.forEach(q => {
  q.documents?.forEach(d => d.cols?.forEach(c => {
    if (c.ref && !IMAGE_DB[c.ref]) IMAGE_DB[c.ref] = { src: 'images/' + c.ref };
  }));
  if (q.reponse?.ref && !IMAGE_DB[q.reponse.ref]) IMAGE_DB[q.reponse.ref] = { src: 'images/' + q.reponse.ref };
});

// ── Sérialiseur (copie exacte de questions-io.js) ────────────────────────────
function _isScalar(v) {
  return v === null || v === undefined || v === false || v === true || typeof v === 'number' || typeof v === 'string';
}
function _isFlat(v) {
  if (_isScalar(v)) return true;
  if (Array.isArray(v) || typeof v !== 'object' || v === null) return false;
  return Object.values(v).every(_isScalar);
}
function serializeValue(v, indent = 0) {
  const pad = '  '.repeat(indent), pad1 = '  '.repeat(indent + 1);
  if (_isScalar(v)) return v === null || v === undefined ? 'null' : typeof v === 'string' ? JSON.stringify(v) : String(v);
  if (Array.isArray(v)) {
    if (!v.length) return '[]';
    if (v.every(_isFlat)) {
      const oneLine = '[' + v.map(i => serializeValue(i, 0)).join(', ') + ']';
      if (oneLine.length <= 120) return oneLine;
    }
    return '[\n' + v.map(i => pad1 + serializeValue(i, indent + 1)).join(',\n') + '\n' + pad + ']';
  }
  const entries = Object.entries(v);
  if (!entries.length) return '{}';
  const fmtKey = k => /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : JSON.stringify(k);
  if (entries.every(([, val]) => _isScalar(val))) {
    const oneLine = '{' + entries.map(([k, val]) => fmtKey(k) + ': ' + serializeValue(val, 0)).join(', ') + '}';
    if (oneLine.length <= 120) return oneLine;
  }
  return '{\n' + entries.map(([k, val]) => pad1 + fmtKey(k) + ': ' + serializeValue(val, indent + 1)).join(',\n') + '\n' + pad + '}';
}

let out = 'const REGLETTES = {\n';
out += Object.entries(REGLETTES).map(([k, v]) => `  ${JSON.stringify(k)}: ${serializeValue(v, 1)}`).join(',\n');
out += '\n}\n\nconst IMAGE_DB = {\n';
out += Object.entries(IMAGE_DB).map(([k, v]) => `  ${JSON.stringify(k)}: ${serializeValue(v, 1)}`).join(',\n');
out += '\n}\n\nconst QUESTIONS = [\n';
out += QUESTIONS.map(q => '  ' + serializeValue(q, 1)).join(',\n');
out += '\n]\n';

writeFileSync('questions.js', out, 'utf-8');
console.log(`✓ ${action} ${question.id} appliqué — questions.js mis à jour`);
