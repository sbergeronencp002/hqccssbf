// ─────────────────────────────────────────────────────────────────────────────
// Générateur d'examens — algorithme de sélection + numérotation des documents.
// Fonctions pures (aucune dépendance au DOM) : chargé par examen.html, et
// testable directement via node (voir tools/test-examen-gen.mjs).
//
// Contraintes de sélection (pour une période donnée) :
//   - chaque aspect du programme (ASPECTS_PAR_PERIODE) est couvert par exactement une
//     question dédiée, jamais deux fois, jamais partagée avec un autre aspect (une
//     question à aspects multiples ne peut être retenue que pour un seul d'entre eux :
//     le nombre de questions finales est donc toujours égal au nombre d'aspects) ;
//   - total des points ≤ maxPoints ;
//   - les 8 OI sont toutes représentées au moins une fois (variété) ;
//   - jamais deux questions de la même OI avec le même sous-tag (soustag) — si une OI
//     revient plusieurs fois, chaque occurrence doit couvrir un sous-type différent ;
//   - l'OI « favorite » choisie par l'enseignant reçoit un quota renforcé
//     (environ la moitié des questions) sans écraser les autres.
// ─────────────────────────────────────────────────────────────────────────────

const EX_ATTEMPTS_PER_LEVEL = 150;
// Paliers de renforcement du quota de l'OI favorite, du plus marqué au plus
// neutre : si le budget de points (serré : 20 max, souvent ~18 de minimum
// incompressible) rend un palier trop contraignant pour être satisfait en
// EX_ATTEMPTS_PER_LEVEL essais, on redescend d'un cran plutôt que d'échouer —
// mieux vaut un quota renforcé plus modeste qu'aucun examen valide.
const EX_BIAS_LEVELS = [0.8, 0.6, 0.4, 0.2, 0];

// Répartition cible du nombre de questions par OI : 1 de base pour chacune
// (garantit la variété), puis une partie du reste pour l'OI favorite (quota
// renforcé, module par `biasFraction`) et le reliquat réparti entre les autres OI.
function exComputeOiQuota(oiList, favoriOi, totalSlots, biasFraction) {
  const quota = {};
  oiList.forEach(oi => { quota[oi] = 1; });
  let remaining = totalSlots - oiList.length;
  if (remaining < 0) remaining = 0;

  if (favoriOi && oiList.includes(favoriOi) && biasFraction > 0) {
    const bonus = Math.min(remaining, Math.ceil(remaining * biasFraction));
    quota[favoriOi] += bonus;
    remaining -= bonus;
    const others = oiList.filter(oi => oi !== favoriOi);
    let i = 0;
    while (remaining > 0 && others.length) { quota[others[i % others.length]]++; remaining--; i++; }
  } else {
    let i = 0;
    while (remaining > 0) { quota[oiList[i % oiList.length]]++; remaining--; i++; }
  }
  return quota;
}

function exShuffle(arr, rng) {
  const rand = rng || Math.random;
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Estime la « richesse documentaire » d'une question (nombre/qualité des
// documents), utilisée pour préférer les questions à documents substantiels
// lors de la sélection (maximiser l'espace du dossier documentaire).
function exDocRichness(q) {
  let score = 0;
  (q.documents || []).forEach(d => {
    (d.cols || [d]).forEach(col => {
      if (col.ref) score += 3;
      if (col.texte) score += Math.min(3, col.texte.length / 120);
    });
  });
  return score;
}

function exAspectsOf(q) {
  return (q.aspects || []).map(x => x.aspect);
}

// Coût minimal (en points) pour couvrir chaque aspect, tous candidats confondus.
// Utilisé pour vérifier qu'il reste assez de budget de points pour couvrir
// les aspects encore non traités avant de valider un choix.
function exMinCostByAspect(byAspect) {
  const minCost = {};
  for (const [aspect, cands] of byAspect) {
    minCost[aspect] = cands.reduce((m, q) => Math.min(m, q.points), Infinity);
  }
  return minCost;
}

function exOtherMinCost(aspects, covered, candidateAspects, minCostByAspect) {
  let sum = 0;
  for (const a of aspects) {
    if (covered.has(a) || candidateAspects.includes(a)) continue;
    sum += minCostByAspect[a];
  }
  return sum;
}

function exTryBuild(questions, aspects, oiList, favoriOi, maxPoints, rng, biasFraction) {
  const byAspect = new Map(aspects.map(a => [a, questions.filter(q => exAspectsOf(q).includes(a))]));
  for (const a of aspects) {
    if (!byAspect.get(a).length) return null; // aspect sans aucun candidat : impossible
  }
  const minCostByAspect = exMinCostByAspect(byAspect);

  // MRV (Minimum Remaining Values) : traiter en premier les aspects les plus
  // rares réduit le risque d'échec en fin de construction ; léger mélange
  // pour varier les examens générés d'une fois à l'autre.
  const order = exShuffle(aspects, rng).sort((a, b) => byAspect.get(a).length - byAspect.get(b).length);

  const oiRemaining = exComputeOiQuota(oiList, favoriOi, aspects.length, biasFraction);
  const covered = new Set();
  const usedIds = new Set();
  const usedOiTag = new Set(); // "OI||soustag" déjà pris — jamais deux fois le même sous-tag pour une OI
  const selected = [];
  let points = 0;

  for (const aspect of order) {
    if (covered.has(aspect)) continue;

    let candidates = byAspect.get(aspect).filter(q => {
      if (usedIds.has(q.id)) return false;
      const qAspects = exAspectsOf(q);
      if (!qAspects.every(a => !covered.has(a))) return false; // conflit : un des aspects du candidat est déjà couvert
      // Une question ne doit couvrir qu'un seul aspect du programme à la fois (jamais
      // deux d'un coup) : sinon le nombre de questions finales tomberait sous le nombre
      // d'aspects, ce qui n'est pas ce qui est attendu (une question par aspect).
      if (qAspects.filter(a => aspects.includes(a)).length > 1) return false;
      if (q.soustag && usedOiTag.has(q.oi + '||' + q.soustag)) return false;
      const otherMin = exOtherMinCost(aspects, covered, qAspects, minCostByAspect);
      return points + q.points + otherMin <= maxPoints;
    });
    if (!candidates.length) return null;

    const scored = candidates.map(q => ({
      q,
      // Le bonus est proportionnel au déficit de quota de l'OI du candidat (et non
      // un simple drapeau « encore du quota ? ») : au début, l'OI favorite a un
      // déficit bien plus élevé que les autres (quota renforcé) et tire donc
      // fortement la sélection tant qu'elle n'a pas été assez utilisée.
      score: Math.max(0, oiRemaining[q.oi]) * 4 + exDocRichness(q) + (rng || Math.random)() * 3
    }));
    scored.sort((a, b) => b.score - a.score);
    const topN = scored.slice(0, Math.min(3, scored.length));
    const picked = topN[Math.floor((rng || Math.random)() * topN.length)].q;

    selected.push(picked);
    usedIds.add(picked.id);
    exAspectsOf(picked).forEach(a => covered.add(a));
    if (picked.soustag) usedOiTag.add(picked.oi + '||' + picked.soustag);
    points += picked.points;
    oiRemaining[picked.oi]--;
  }

  if (covered.size !== aspects.length) return null;
  if (selected.length !== aspects.length) return null; // une question par aspect, jamais moins
  if (points > maxPoints) return null;
  if (new Set(selected.map(q => q.oi)).size < oiList.length) return null; // variété OI non atteinte

  return { selected, points };
}

// Génère un examen pour une période donnée.
//   questions   : QUESTIONS filtrées (ou non — le filtre par période est fait ici)
//   aspects     : liste des aspects du programme à couvrir (ASPECTS_PAR_PERIODE[periode])
//   oiList      : liste canonique des OI (OI_LIST)
//   favoriOi    : OI à privilégier (ou null/undefined)
//   maxPoints   : budget de points maximum (25 par défaut)
//   rng         : générateur pseudo-aléatoire optionnel (tests reproductibles)
function exGenererExamen({ questions, periode, aspects, oiList, favoriOi, maxPoints = 25, rng }) {
  const pool = questions.filter(q => q.periode === periode);
  const levels = favoriOi ? EX_BIAS_LEVELS : [0];
  let attemptsTotal = 0;
  let appliedBias = 0;
  for (const biasFraction of levels) {
    appliedBias = biasFraction;
    for (let attempt = 0; attempt < EX_ATTEMPTS_PER_LEVEL; attempt++) {
      attemptsTotal++;
      const result = exTryBuild(pool, aspects, oiList, favoriOi, maxPoints, rng, biasFraction);
      if (result) {
        // Ordonne les questions selon l'ordre canonique des aspects (ordre du programme)
        const selected = result.selected.slice().sort((a, b) => {
          const ia = Math.min(...exAspectsOf(a).map(x => aspects.indexOf(x)).filter(i => i >= 0));
          const ib = Math.min(...exAspectsOf(b).map(x => aspects.indexOf(x)).filter(i => i >= 0));
          return ia - ib;
        });
        return { ok: true, selected, points: result.points, attempts: attemptsTotal, biasApplied: appliedBias };
      }
    }
  }
  return {
    ok: false,
    reason: "Impossible de générer un examen respectant toutes les contraintes (aspects du programme, budget de points, variété des OI) après " + attemptsTotal + " tentatives. Réessayez, ou réduisez les contraintes."
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Numérotation globale des documents (lettres locales → chiffres globaux)
// ─────────────────────────────────────────────────────────────────────────────

// Aplati les documents d'une question en une liste de « cols » avec leur lettre
// locale d'origine (A, B, C… dans l'ordre d'apparition, comme saisi dans admin.html).
function exFlattenDocs(q) {
  const flat = [];
  (q.documents || []).forEach(d => {
    (d.cols || [d]).forEach(col => {
      flat.push({ col, letter: String.fromCharCode(65 + flat.length) });
    });
  });
  return flat;
}

// Construit la numérotation globale (1, 2, 3…) dans l'ordre des questions
// sélectionnées, et retourne :
//   - docItems  : liste plate { qId, qIndex, col, num, titre } pour le dossier
//   - byQuestion: Map qId → { letterToNum: {A:1,B:2,...}, items:[...] }
function exBuildDocMap(selection) {
  const docItems = [];
  const byQuestion = new Map();
  let num = 0;
  selection.forEach((q, qIndex) => {
    const flat = exFlattenDocs(q);
    const letterToNum = {};
    const items = [];
    flat.forEach(({ col, letter }) => {
      num += 1;
      letterToNum[letter] = num;
      const item = { qId: q.id, qIndex, col, num, titre: exRemapTitre(col.titre, num) };
      items.push(item);
      docItems.push(item);
    });
    byQuestion.set(q.id, { letterToNum, items });
  });
  return { docItems, byQuestion };
}

// Remplace « Document X » par « Document N » dans un titre ; conserve tout
// texte additionnel après la lettre (ex. « Document A — Une lettre de… »).
// Si le titre ne suit pas ce format (donnée exotique), préfixe simplement le
// numéro pour rester cohérent avec la numérotation globale du dossier.
function exRemapTitre(titre, num) {
  const t = titre || '';
  const m = t.match(/^Document\s+[A-Z]\b(.*)$/);
  if (m) return 'Document ' + num + m[1];
  return t ? ('Document ' + num + ' — ' + t) : ('Document ' + num);
}

// Remplace les mentions « document(s) A », « documents A et B », « documents A à C »…
// dans un texte (énoncé, guide) par les numéros globaux correspondants, via la
// table de correspondance locale de la question (letterToNum). Ne touche à
// rien d'autre (ex. « la lettre » qui désigne un repère interne à une image
// reste inchangé, car il n'est jamais précédé du mot « document »).
function exRemapTexte(text, letterToNum) {
  if (!text) return text;
  return text.replace(/(documents?\s+)([A-Z](?:\s*(?:et|à|,)\s*[A-Z])*)/gi, (m, prefix, letters) => {
    const replaced = letters.replace(/[A-Z]/g, ch => (letterToNum[ch] != null ? String(letterToNum[ch]) : ch));
    return prefix + replaced;
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    exComputeOiQuota, exGenererExamen, exBuildDocMap, exRemapTexte, exRemapTitre,
    exFlattenDocs, exDocRichness, exAspectsOf
  };
}
