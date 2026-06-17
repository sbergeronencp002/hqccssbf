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

// Sérialise récursivement une valeur JS en code source lisible (indentation 2 espaces).
function serializeValue(v, indent=0) {
  const pad = '  '.repeat(indent);
  const pad1 = '  '.repeat(indent+1);
  if(v === null || v === false || v === true) return String(v);
  if(typeof v === 'number') return String(v);
  if(typeof v === 'string') return JSON.stringify(v);
  if(Array.isArray(v)) {
    if(!v.length) return '[]';
    const items = v.map(i => pad1 + serializeValue(i, indent+1));
    return '[\n' + items.join(',\n') + '\n' + pad + ']';
  }
  const pairs = Object.entries(v).map(([k,val]) => {
    const key = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : JSON.stringify(k);
    return pad1 + key + ': ' + serializeValue(val, indent+1);
  });
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
