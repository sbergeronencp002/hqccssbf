// Test round-trip : sérialise questions.js puis le reparse et compare chaque champ.
// Lance : node tools/test-roundtrip.mjs
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

// ── Chargement de questions.js ────────────────────────────────────────────────
const src = readFileSync(join(root, 'questions.js'), 'utf8');
let QUESTIONS, REGLETTES, IMAGE_DB;
try {
  ({ QUESTIONS, REGLETTES, IMAGE_DB } = new Function(src + '\nreturn { QUESTIONS, REGLETTES, IMAGE_DB };')());
} catch(e) {
  console.error('✗ questions.js illisible :', e.message);
  process.exit(1);
}

// ── Chargement de questions-io.js ────────────────────────────────────────────
const ioSrc = readFileSync(join(root, 'questions-io.js'), 'utf8');
const ioExports = {};
new Function('exports', ioSrc + `
  exports.serializeValue      = serializeValue;
  exports.ensureImageDbComplete = ensureImageDbComplete;
  exports.generateQuestionsJs = generateQuestionsJs;
`)(ioExports);
const { generateQuestionsJs } = ioExports;

// ── Sérialisation → re-parse ──────────────────────────────────────────────────
let src2;
try {
  src2 = generateQuestionsJs(QUESTIONS, REGLETTES, IMAGE_DB);
} catch(e) {
  console.error('✗ generateQuestionsJs a lancé une exception :', e.message);
  process.exit(1);
}

let Q2, R2, IDB2;
try {
  ({ QUESTIONS: Q2, REGLETTES: R2, IMAGE_DB: IDB2 } = new Function(src2 + '\nreturn { QUESTIONS, REGLETTES, IMAGE_DB };')());
} catch(e) {
  console.error('✗ Le résultat sérialisé ne se reparse pas :', e.message);
  process.exit(1);
}

// ── Comparaisons ──────────────────────────────────────────────────────────────
let errors = 0;
let warns  = 0;

function fail(msg) { console.error('  ✗', msg); errors++; }
function warn(msg) { console.warn ('  ⚠', msg); warns++;  }

// Compte
if (Q2.length !== QUESTIONS.length)
  fail(`Nombre de questions : attendu ${QUESTIONS.length}, obtenu ${Q2.length}`);
else
  console.log(`  ✓ ${QUESTIONS.length} questions`);

const rKeys1 = Object.keys(REGLETTES).sort();
const rKeys2 = Object.keys(R2).sort();
if (JSON.stringify(rKeys1) !== JSON.stringify(rKeys2))
  fail(`Clés REGLETTES divergent : ${rKeys1.length} vs ${rKeys2.length}`);
else
  console.log(`  ✓ ${rKeys1.length} réglettes`);

const iKeys1 = Object.keys(IMAGE_DB).sort();
const iKeys2 = Object.keys(IDB2).sort();
if (JSON.stringify(iKeys1) !== JSON.stringify(iKeys2))
  fail(`Clés IMAGE_DB divergent : ${iKeys1.length} vs ${iKeys2.length}`);
else
  console.log(`  ✓ ${iKeys1.length} entrées IMAGE_DB`);

// Champs de chaque question
for (let i = 0; i < QUESTIONS.length; i++) {
  const q1 = QUESTIONS[i];
  const q2 = Q2[i];
  if (!q2) { fail(`Question index ${i} absente après re-parse`); continue; }
  if (q1.id !== q2.id) fail(`Q[${i}].id : "${q1.id}" → "${q2.id}"`);

  const SCALAR_FIELDS = ['niveau','oi','periode','points','soustag','enonce','guide','updatedAt'];
  for (const f of SCALAR_FIELDS) {
    const v1 = q1[f] === undefined ? undefined : q1[f];
    const v2 = q2[f] === undefined ? undefined : q2[f];
    if (JSON.stringify(v1) !== JSON.stringify(v2))
      fail(`Q[${i}] (${q1.id}).${f} : ${JSON.stringify(v1)} → ${JSON.stringify(v2)}`);
  }

  // reponse
  if (JSON.stringify(q1.reponse) !== JSON.stringify(q2.reponse))
    fail(`Q[${i}] (${q1.id}).reponse diverge : ${JSON.stringify(q1.reponse)} → ${JSON.stringify(q2.reponse)}`);

  // aspects
  if (JSON.stringify(q1.aspects) !== JSON.stringify(q2.aspects))
    fail(`Q[${i}] (${q1.id}).aspects diverge`);

  // documents (structure profonde)
  if (JSON.stringify(q1.documents) !== JSON.stringify(q2.documents))
    fail(`Q[${i}] (${q1.id}).documents diverge`);
}

// Taille du fichier produit vs original
const ratio = ((src2.length / src.length) * 100).toFixed(1);
if (Math.abs(src2.length - src.length) > src.length * 0.05)
  warn(`Taille du fichier produit très différente (${ratio}% de l'original) — vérifier la sérialisation`);
else
  console.log(`  ✓ Taille sérialisée : ${Math.round(src2.length/1024)} Ko (${ratio}% de l'original)`);

// ── Résultat ──────────────────────────────────────────────────────────────────
console.log('');
if (errors) {
  console.error(`✗ ${errors} erreur(s) de round-trip${warns ? `, ${warns} avertissement(s)` : ''}.`);
  process.exit(1);
} else if (warns) {
  console.warn(`⚠ Round-trip OK avec ${warns} avertissement(s).`);
} else {
  console.log('✓ Round-trip parfait — aucune perte de données.');
}
