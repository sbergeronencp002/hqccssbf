// ─────────────────────────────────────────────────────────────────────
// Sérialiseur partagé de questions.js — source UNIQUE.
//
// Chargé par admin.html ET documents.html : les deux pages réécrivent
// questions.js sur GitHub et DOIVENT produire exactement le même format
// (sinon, divergences de diff / conflits de données). Auparavant ce code
// était dupliqué dans chaque page ; il vit désormais ici uniquement.
//
// Expose en global : serializeValue, ensureImageDbComplete, generateQuestionsJs.
// ─────────────────────────────────────────────────────────────────────

function _isScalar(v) {
  return v === null || v === false || v === true || typeof v === 'number' || typeof v === 'string';
}

// Objet plat = toutes les valeurs sont scalaires (pas d'imbrication)
function _isFlat(v) {
  if(_isScalar(v)) return true;
  if(Array.isArray(v) || typeof v !== 'object' || v === null) return false;
  return Object.values(v).every(_isScalar);
}

// Sérialise récursivement une valeur JS en code source lisible.
// Les objets plats (valeurs toutes scalaires) et les tableaux d'objets
// plats courts sont mis sur une seule ligne pour réduire la taille du fichier.
function serializeValue(v, indent=0) {
  const pad = '  '.repeat(indent);
  const pad1 = '  '.repeat(indent+1);
  if(_isScalar(v)) return v === null ? 'null' : typeof v === 'string' ? JSON.stringify(v) : String(v);
  if(Array.isArray(v)) {
    if(!v.length) return '[]';
    // Tableau d'éléments plats → essayer une ligne
    if(v.every(_isFlat)) {
      const items = v.map(i => serializeValue(i, 0));
      const oneLine = '[' + items.join(', ') + ']';
      if(oneLine.length <= 120) return oneLine;
    }
    const items = v.map(i => pad1 + serializeValue(i, indent+1));
    return '[\n' + items.join(',\n') + '\n' + pad + ']';
  }
  // Objet
  const entries = Object.entries(v);
  if(!entries.length) return '{}';
  const fmtKey = k => /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : JSON.stringify(k);
  // Objet plat → une ligne
  if(entries.every(([,val]) => _isScalar(val))) {
    const pairs = entries.map(([k,val]) => fmtKey(k) + ': ' + serializeValue(val, 0));
    const oneLine = '{' + pairs.join(', ') + '}';
    if(oneLine.length <= 120) return oneLine;
  }
  const pairs = entries.map(([k,val]) => pad1 + fmtKey(k) + ': ' + serializeValue(val, indent+1));
  return '{\n' + pairs.join(',\n') + '\n' + pad + '}';
}

// Garantit que toute image référencée par une question possède une entrée IMAGE_DB.
function ensureImageDbComplete(questions, imageDb) {
  questions.forEach(q => {
    q.documents?.forEach(d => d.cols?.forEach(c => {
      if(c.ref && !imageDb[c.ref]) imageDb[c.ref] = { src: 'images/' + c.ref };
    }));
    if(q.reponse?.ref && !imageDb[q.reponse.ref]) imageDb[q.reponse.ref] = { src: 'images/' + q.reponse.ref };
  });
}

// Reconstruit le fichier questions.js complet (REGLETTES + IMAGE_DB + QUESTIONS).
function generateQuestionsJs(questions, reglettes, imageDb) {
  ensureImageDbComplete(questions, imageDb);
  let out = 'const REGLETTES = {\n';
  out += Object.entries(reglettes).map(([k,v]) => `  ${JSON.stringify(k)}: ${serializeValue(v,1)}`).join(',\n');
  out += '\n}\n\nconst IMAGE_DB = {\n';
  out += Object.entries(imageDb).map(([k,v]) => `  ${JSON.stringify(k)}: ${serializeValue(v,1)}`).join(',\n');
  out += '\n}\n\nconst QUESTIONS = [\n';
  out += questions.map(q => '  ' + serializeValue(q,1)).join(',\n');
  out += '\n]\n';
  return out;
}
