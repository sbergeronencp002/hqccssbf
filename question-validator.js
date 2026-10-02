// Validation pure, partagée et testable sans DOM. Aucune écriture ni requête réseau.
function validateQuestionData(q, context) {
  const { oiConfig, periodsByLevel, aspectsByPeriod, questions = [], questionsKnown = true, editingId = null,
    reglette, imageFiles = null, imageDb = {}, expectedPreset, selectedPreset } = context;
  const results = [];
  const check = (label, messages, severity = 'error') => results.push({ label,
    status: messages.length ? severity : 'ok', messages });
  const text = value => typeof value === 'string' && value.trim().length > 0;
  const hasContent = value => {
    if (typeof value === 'string') return text(value);
    if (!value || typeof value !== 'object') return false;
    return (value.rangees || value.lignes || []).some(row =>
      Array.isArray(row) ? row.some(text) : typeof row === 'string' ? text(row) : Object.values(row).some(text));
  };
  check('Identifiant', /^Q[1-9]\d*$/.test(q.id || '') ? [] : ['L’identifiant doit être de la forme Q123.']);
  check('Unicité de l’identifiant', questions.some(other => other.id === q.id && other.id !== editingId)
    ? ['Cet identifiant est déjà utilisé. Dupliquez la question pour obtenir un nouvel identifiant.']
    : editingId && editingId !== q.id ? ['L’identifiant diffère de la question en cours de modification.']
    : !questionsKnown ? ['La banque n’est pas chargée : l’unicité de l’identifiant reste à vérifier.'] : [],
    questionsKnown ? 'error' : 'warning');
  check('Énoncé', text(q.enonce) ? [] : ['Rédigez l’énoncé de la question.']);
  const oi = oiConfig[q.oi];
  check('Opération intellectuelle', oi ? [] : ['Sélectionnez une OI reconnue.']);
  check('Niveau et période', (periodsByLevel[String(q.niveau)] || []).includes(q.periode)
    ? [] : ['Sélectionnez une période compatible avec le niveau.']);
  const aspects = q.aspects || [];
  check('Aspects de la période', !aspects.length ? ['Sélectionnez au moins un aspect.'] :
    aspects.filter(a => !(aspectsByPeriod[q.periode] || []).includes(a.aspect))
      .map(a => `L’aspect « ${a.aspect || '(vide)'} » n’appartient pas à cette période.`));
  check('Sous-tag de l’OI', !q.soustag || (oi && (oi.soustags || []).includes(q.soustag))
    ? [] : ['Le sous-tag ne correspond pas à l’OI sélectionnée.']);
  const maxPoints = reglette && (reglette.niveaux || []).length
    ? Math.max(...reglette.niveaux.map(n => n.pts))
    : reglette && reglette.variante ? 3 : NaN;
  check('Points et réglette', !reglette ? ['Sélectionnez une réglette.'] :
    reglette.oi !== q.oi ? ['La réglette ne correspond pas à l’OI.'] :
    !Number.isInteger(q.points) || q.points <= 0 || q.points !== maxPoints
      ? ['Le nombre de points doit correspondre au maximum de la réglette.'] : []);
  check('Réglette et sous-tag', expectedPreset && selectedPreset !== expectedPreset
    ? [`La réglette habituelle pour ce sous-tag est « ${expectedPreset} ». Vérifiez votre choix.`] : [], 'warning');
  const columns = (q.documents || []).flatMap(doc => doc.cols || []);
  check('Contenu des documents', columns.filter(col => !text(col.ref) && !text(col.texte))
    .map((col) => `Document ${col.titre || '(sans titre)'} : ajoutez un texte ou une image.`));
  const refs = columns.filter(col => text(col.ref)).map(col => col.ref);
  if (q.reponse && q.reponse.ref) refs.push(q.reponse.ref);
  check('Fichiers images', imageFiles === null && refs.length
    ? ['Liste des fichiers indisponible : l’existence des images n’a pas pu être vérifiée.']
    : refs.filter(ref => imageFiles !== null && !imageFiles.has(ref))
      .map(ref => `Image introuvable dans le dépôt : ${ref}.`), imageFiles === null ? 'warning' : 'error');
  check('Sources des documents', columns.filter(col => !text(col.source) && !text((imageDb[col.ref] || {}).source))
    .map(col => `Document ${col.titre || '(sans titre)'} : source à compléter.`), 'warning');
  // « Aucune » est un choix existant (ex. réponse directement sur un document).
  check('Espace de réponse', q.reponse ? [] : ['Aucun espace de réponse : vérifiez que ce choix convient à la tâche.'], 'warning');
  check('Guide de correction', hasContent(q.guide) ? [] : ['Ajoutez les réponses attendues au guide de correction.'], 'warning');
  check('Date de modification', text(q.updatedAt) && Number.isFinite(Date.parse(q.updatedAt))
    ? [] : ['La date de modification est absente ou invalide.']);
  return results;
}
