// ─────────────────────────────────────────────────────────────────────────────
// Générateur d'examens — algorithme de sélection + numérotation des documents.
// Fonctions pures (aucune dépendance au DOM) : chargé par examen.html, et
// testable directement via node (voir tools/test-examen-gen.mjs).
//
// Contraintes de sélection (pour une période donnée) :
//   - chaque aspect du programme (ASPECTS_PAR_PERIODE) est couvert par exactement une
//     question dédiée, jamais deux fois, jamais partagée avec un autre aspect (une
//     question à aspects multiples ne peut être retenue que pour un seul d'entre eux :
//     le nombre de questions finales est donc toujours égal au nombre d'aspects) — SAUF
//     exception rare et forcée par le contenu : si un aspect n'a AUCUN candidat qui lui
//     soit dédié exclusivement, il est fusionné avec l'aspect qu'il partage avec ses seuls
//     candidats (voir exBuildAspectSlots, ex. P3 : « Église catholique ») — une question
//     couvre alors les deux à la fois, et le nombre de questions descend d'autant ;
//   - total des points ≤ maxPoints ;
//   - les 8 OI sont toutes représentées au moins une fois (variété), réduit aux OI
//     réellement atteignables dans la période (voir effectiveOiList dans exGenererExamen —
//     ex. P1, la toute première période, n'a aucune question « Déterminer des changements
//     et des continuités ») ;
//   - jamais deux questions de la même OI avec le même sous-tag (soustag) — si une OI
//     revient plusieurs fois, chaque occurrence doit couvrir un sous-type différent ;
//   - certaines OI ont un plafond dur, indépendant de l'OI favorite (voir EX_OI_HARD_CAP,
//     assoupli pour un favori précis via EX_OI_HARD_CAP_RELAX) ;
//   - l'OI « favorite » choisie par l'enseignant apparaît un nombre de fois exact
//     (voir EX_FAVORI_BASE_TARGET), pas juste « au moins une fois de plus » ;
//   - jamais deux questions consécutives de la même OI dans l'ordre final de l'examen.
// ─────────────────────────────────────────────────────────────────────────────

const EX_ATTEMPTS_PER_LEVEL = 150;

// Nombre de questions visé pour chaque OI sélectionnable comme favorite — certaines OI
// se prêtent à davantage de répétitions (sous-tags plus nombreux) que d'autres.
const EX_FAVORI_BASE_TARGET = {
  'Dégager des différences et des similitudes': 3,
  'Déterminer des causes et des conséquences': 3,
  'Établir des liens de causalité': 2
};

// Paliers de la cible pour l'OI favorite, du plus ambitieux au plus permissif : si le
// nombre exact n'est pas atteignable (budget de points, sous-tags disponibles…) en
// EX_ATTEMPTS_PER_LEVEL essais, on redescend d'un cran plutôt que d'échouer — mieux vaut
// un favori plus modeste qu'aucun examen valide. 0 = pas de ciblage particulier (l'OI
// reste garantie au moins une fois par la règle de variété générale).
function exFavoriTargetLevels(favoriOi) {
  const base = EX_FAVORI_BASE_TARGET[favoriOi] != null ? EX_FAVORI_BASE_TARGET[favoriOi] : 2;
  const levels = [];
  for (let t = base; t >= 0; t--) levels.push(t);
  return levels;
}

// Plafond dur du nombre d'occurrences pour certaines OI, indépendant de l'OI favorite —
// certains types de questions ne doivent jamais apparaître plus de N fois dans un même
// examen (ex. « Mettre en relation des faits » jongle avec plusieurs documents ; son
// sous-tag encode déjà le nombre de documents, donc la règle « jamais deux fois le même
// sous-tag pour une OI » garantit déjà la variété du nombre de documents entre les
// occurrences — ce plafond limite juste combien de fois le format revient).
const EX_OI_HARD_CAP = {
  'Mettre en relation des faits': 2,
  'Établir des faits': 2,
  'Situer dans le temps': 2,
  "Situer dans l'espace": 1
};

// Assouplissement de plafond scopé STRICTEMENT à un favori précis — jamais un relâchement
// global du plafond. Analyse par recherche exhaustive (branch-and-bound, voir historique) :
// avec les 4 plafonds ci-dessus, le budget de 25 points est déjà utilisé à 100 % sans marge,
// rendant la cible de 2 pour l'OI favorite « Établir des liens de causalité » (dont tous les
// candidats coûtent 3 points) mathématiquement inatteignable. Faire passer « Établir des
// faits » de ≤2 à ≤3 UNIQUEMENT quand la causalité est la favorite choisie par l'enseignant
// libère juste assez de marge — le plafond ≤2 reste inchangé pour tous les autres examens
// (aucune favorite, ou une autre favorite).
const EX_OI_HARD_CAP_RELAX = {
  'Établir des liens de causalité': { 'Établir des faits': 3 }
};

function exEffectiveHardCap(oi, favoriOi) {
  const relax = EX_OI_HARD_CAP_RELAX[favoriOi];
  if (relax && relax[oi] != null) return relax[oi];
  return EX_OI_HARD_CAP[oi];
}

// OI dont le nombre d'occurrences est fixé une fois pour toutes (pas juste un plafond,
// une cible exacte), indépendamment de l'OI favorite choisie par l'enseignant. Reste
// active par défaut, mais peut dégrader (voir exFixedTargetLevels) si elle entre en
// conflit de budget avec la cible de l'OI favorite — l'OI favorite est le choix explicite
// de l'enseignant pour CET examen, elle passe donc avant cette préférence de fond.
const EX_OI_FIXED_TARGET = { 'Déterminer des changements et des continuités': 2 };

// Cibles exactes par OI propres à une période précise, EN PLUS de EX_OI_FIXED_TARGET
// (fusionnées dans exGenererExamen). Cas d'usage : une période trop courte pour la variété
// générale habituelle (voir EX_OI_VARIETY_EXCLUDE_BY_PERIODE) où l'enseignant préfère une
// distribution d'OI précise à la place — ex. P1 (seulement 7 aspects du programme).
const EX_OI_FIXED_TARGET_BY_PERIODE = {
  'P1 — Des origines à 1608': {
    'Déterminer des causes et des conséquences': 2,
    'Établir des liens de causalité': 2,
    'Mettre en relation des faits': 2,
    'Dégager des différences et des similitudes': 2,
    'Établir des faits': 3
  }
};

// OI à exclure de l'exigence de variété générale pour une période précise (ex. P1 : Situer
// dans le temps / dans l'espace laissés de côté par choix de l'enseignant, au profit d'une
// distribution d'OI ciblée sur les 7 aspects disponibles — voir EX_OI_FIXED_TARGET_BY_PERIODE).
const EX_OI_VARIETY_EXCLUDE_BY_PERIODE = {
  'P1 — Des origines à 1608': ['Situer dans le temps', "Situer dans l'espace"]
};

// Aspects pouvant être couverts par PLUSIEURS questions distinctes (au lieu d'une seule),
// quand le contenu de cet aspect précis a assez d'OI/sous-tags différents pour le
// supporter — ex. P1 où l'enseignant a choisi de doubler (ou tripler) 3 aspects précis
// pour atteindre le total de questions correspondant à EX_OI_FIXED_TARGET_BY_PERIODE.
// Absent de la config = comportement par défaut (1 question par aspect, comme partout
// ailleurs).
const EX_ASPECT_REPEAT_BY_PERIODE = {
  'P1 — Des origines à 1608': {
    'Rapports sociaux chez les Autochtones': 3,
    'Premiers occupants du territoire': 2,
    'Premiers contacts': 2
  }
};

// Scénarios propres à une période ET à l'OI favorite choisie par l'enseignant : ajustent
// la distribution de base (cibles fixes et/ou nombre de slots) pour cette combinaison
// précise, essayés AVANT la dégradation générique habituelle (du plus ambitieux au repli
// explicite sur la base, dans l'ordre du tableau). `extraSlots` ajoute des occurrences
// supplémentaires à un aspect déjà répétable (voir EX_ASPECT_REPEAT_BY_PERIODE) quand la
// cible visée dépasse le nombre de slots de base.
//
// P1 : Causes et Différences n'ont chacune que 2 sous-tags distincts dans les données de
// cette période (« Cause »/« Conséquence » pour l'une, « Convergence – 2 acteurs »/
// « Position – 3 acteurs » pour l'autre) — un 3e niveau y est donc mathématiquement
// impossible tant que ces sous-tags ne sont pas enrichis (admin.html), quel que soit le
// budget. Le niveau ambitieux reste listé ci-dessous : il échoue proprement et retombe
// sur la base (repli explicite `{}`) plutôt que d'être retiré — si un 3e sous-tag est
// ajouté un jour, il se met à fonctionner sans aucun changement de code.
const EX_FAVORI_SCENARIOS_BY_PERIODE = {
  'P1 — Des origines à 1608': {
    'Déterminer des causes et des conséquences': [
      { targets: { 'Déterminer des causes et des conséquences': 3, 'Établir des faits': 4 } },
      { targets: {} }
    ],
    'Dégager des différences et des similitudes': [
      { targets: { 'Dégager des différences et des similitudes': 3, 'Établir des faits': 4 } },
      { targets: {} }
    ],
    'Établir des liens de causalité': [
      { targets: { 'Établir des liens de causalité': 3 }, extraSlots: { 'Rapports sociaux chez les Autochtones': 1 } }
    ]
  }
};

// Paliers de dégradation des cibles fixes, du plus ambitieux (valeurs de `targetMap`
// telles quelles) au plus permissif (1 pour chacune — en dessous, la variété générale
// garantit déjà au moins une occurrence, donc 1 est le plancher utile).
function exFixedTargetLevels(targetMap) {
  const keys = Object.keys(targetMap);
  if (!keys.length) return [{}];
  const maxTarget = Math.max(...keys.map(k => targetMap[k]));
  const levels = [];
  for (let t = maxTarget; t >= 1; t--) {
    const level = {};
    keys.forEach(k => { level[k] = Math.min(targetMap[k], t); });
    levels.push(level);
  }
  return levels;
}

// Répartition cible du nombre de questions par OI : 1 de base pour chacune (garantit la
// variété), les cibles fixes (`fixedTargets`), et exactement `favoriTarget` pour l'OI
// favorite si celle-ci dépasse 1.
function exComputeOiQuota(oiList, favoriOi, favoriTarget, fixedTargets) {
  const quota = {};
  oiList.forEach(oi => { quota[oi] = 1; });
  Object.keys(fixedTargets).forEach(oi => { quota[oi] = fixedTargets[oi]; });
  if (favoriOi && oiList.includes(favoriOi) && favoriTarget > 1) {
    quota[favoriOi] = favoriTarget;
  }
  return quota;
}

// Plafond effectif pour une OI donnée dans cette tentative : sa cible fixe (`fixedTargets`)
// si elle en a une — une cible fixe est un choix délibéré qui prime sur EX_OI_HARD_CAP,
// même si celui-ci est normalement plus bas pour cette OI (ex. « Établir des faits » ≤2 en
// temps normal, mais cible fixe à 3 pour P1 — voir EX_OI_FIXED_TARGET_BY_PERIODE) — sinon
// le plus contraignant entre EX_OI_HARD_CAP (assoupli via EX_OI_HARD_CAP_RELAX si
// applicable à ce favori) et la cible de l'OI favorite (si `oi` est l'OI favorite).
function exOiCap(oi, favoriOi, favoriTarget, fixedTargets) {
  const fixed = fixedTargets[oi];
  const hard = fixed != null ? Infinity : exEffectiveHardCap(oi, favoriOi);
  const favori = (oi === favoriOi && favoriTarget > 0) ? favoriTarget : Infinity;
  return Math.min(hard != null ? hard : Infinity, fixed != null ? fixed : Infinity, favori);
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

// Clé de diversité au sein d'une même OI (jamais deux fois la même pour une OI donnée) :
// le sous-tag habituellement, sauf pour « Mettre en relation des faits » où le sous-tag
// est parfois absent en données (Q593/Q624/…) alors que le nombre de documents, lui, est
// toujours dérivable directement de `q.documents` — plus fiable que le sous-tag ici.
function exDiversityKey(q) {
  if (q.oi === 'Mettre en relation des faits') {
    const nDocs = (q.documents || []).reduce((s, d) => s + (d.cols || [d]).length, 0);
    return String(nDocs);
  }
  return q.soustag || '';
}

// Regroupe les aspects du programme qui doivent être couverts ENSEMBLE par une seule
// question, dans le cas — exceptionnel — où un aspect n'a AUCUN candidat qui lui soit
// dédié exclusivement (tous ses candidats partagent aussi un autre aspect du programme).
// Ex. P3 : « Église catholique » n'a que 3 questions, toutes aussi taguées « Église
// anglicane » — impossible de respecter « un aspect, une question » pour ce cas précis,
// donc on fusionne les deux en un seul « slot » qui sera couvert par une seule question
// (choisie parmi les 3, selon les critères habituels). Union-find : chaque aspect sans
// candidat dédié est fusionné avec tous les aspects que touchent SES candidats — le
// nombre de questions final descend d'autant que d'aspects fusionnés (1 par groupe au
// lieu d'1 par aspect). N'affecte aucun aspect qui a par ailleurs un candidat dédié.
function exBuildAspectSlots(pool, aspects, aspectRepeat) {
  const repeat = aspectRepeat || {};
  const parent = new Map(aspects.map(a => [a, a]));
  function find(a) { let r = a; while (parent.get(r) !== r) r = parent.get(r); return r; }
  function union(a, b) { const ra = find(a), rb = find(b); if (ra !== rb) parent.set(ra, rb); }

  const hasDedicated = new Set();
  pool.forEach(q => {
    const qa = exAspectsOf(q).filter(a => aspects.includes(a));
    if (qa.length === 1) hasDedicated.add(qa[0]);
  });

  aspects.forEach(a => {
    if (hasDedicated.has(a)) return;
    pool.forEach(q => {
      const qa = exAspectsOf(q).filter(a2 => aspects.includes(a2));
      if (qa.includes(a)) qa.forEach(other => union(a, other));
    });
  });

  const groups = new Map();
  aspects.forEach(a => {
    const root = find(a);
    if (!groups.has(root)) groups.set(root, []);
    groups.get(root).push(a);
  });

  const slots = [];
  groups.forEach(list => {
    const key = list.slice().sort().join(' + ');
    // Une répétition n'est permise que sur un aspect seul (pas un groupe déjà fusionné) —
    // chaque instance devient un slot distinct exigeant sa propre question.
    const n = (list.length === 1 && repeat[list[0]]) ? repeat[list[0]] : 1;
    for (let i = 1; i <= n; i++) {
      slots.push({ key: n > 1 ? key + ' #' + i : key, aspects: list });
    }
  });
  return slots;
}

// Coût minimal (en points) pour couvrir chaque slot, tous candidats confondus.
// Utilisé pour vérifier qu'il reste assez de budget de points pour couvrir
// les slots encore non traités avant de valider un choix.
function exMinCostBySlot(bySlot) {
  const minCost = {};
  for (const [key, cands] of bySlot) {
    minCost[key] = cands.reduce((m, q) => Math.min(m, q.points), Infinity);
  }
  return minCost;
}

function exOtherMinCost(slots, coveredSlots, candidateSlotKey, minCostBySlot) {
  let sum = 0;
  for (const s of slots) {
    if (coveredSlots.has(s.key) || s.key === candidateSlotKey) continue;
    sum += minCostBySlot[s.key];
  }
  return sum;
}

// Construction en deux phases :
//   1) satisfaire d'abord les OI à cible exacte (fixes + favorite, l'OI la plus
//      contrainte — le moins de slots disponibles — en premier), en choisissant leurs
//      candidats au coût marginal le plus bas (le plus proche du plancher du slot) ;
//   2) glouton MRV habituel (variété/plafonds/richesse documentaire) pour le reste.
// Sans cette réservation préalable, deux OI à cible coûteuse peuvent se marcher dessus
// sur leurs slots communs lors d'un glouton à une seule passe et manquer chacune leur
// cible alors qu'une combinaison à budget suffisant existe (slots propres à chacune,
// moins chers) — observé en pratique en combinant une OI à cible fixe et une OI favorite
// dont tous les candidats coûtent 3 points.
function exTryBuild(questions, slots, oiList, favoriOi, favoriTarget, fixedTargets, maxPoints, rng) {
  const aspects = slots.flatMap(s => s.aspects);
  const bySlot = new Map(slots.map(s => {
    const key = s.aspects.slice().sort().join('|');
    const cands = questions.filter(q => {
      const qa = exAspectsOf(q).filter(a => aspects.includes(a));
      return qa.length && qa.slice().sort().join('|') === key;
    });
    return [s.key, cands];
  }));
  for (const s of slots) {
    if (!bySlot.get(s.key).length) return null; // slot sans aucun candidat exact : impossible
  }
  const minCostBySlot = exMinCostBySlot(bySlot);

  const coveredSlots = new Set();
  const usedIds = new Set();
  const usedOiTag = new Set(); // "OI||clé de diversité" déjà pris — jamais deux fois la même pour une OI
  const oiCounts = {};
  const selected = [];
  let points = 0;

  function baseFilterOk(q) {
    if (usedIds.has(q.id)) return false;
    const qKey = exDiversityKey(q);
    if (qKey && usedOiTag.has(q.oi + '||' + qKey)) return false;
    return true;
  }

  const slotKeyOf = new Map(); // q.id -> slot occupé, pour la phase 3 (maximisation du budget)
  function commit(q, slotKey) {
    selected.push(q);
    usedIds.add(q.id);
    coveredSlots.add(slotKey);
    const key = exDiversityKey(q);
    if (key) usedOiTag.add(q.oi + '||' + key);
    oiCounts[q.oi] = (oiCounts[q.oi] || 0) + 1;
    points += q.points;
    slotKeyOf.set(q.id, slotKey);
  }

  // ── PHASE 1 : cibles exactes (fixes + favorite) ──────────────────────────────
  const targets = { ...fixedTargets };
  if (favoriOi && favoriTarget > 0) targets[favoriOi] = favoriTarget;
  const availCount = oi => slots.filter(s => bySlot.get(s.key).some(q => q.oi === oi)).length;
  const targetOis = Object.keys(targets).sort((a, b) => availCount(a) - availCount(b));

  for (const oi of targetOis) {
    while ((oiCounts[oi] || 0) < targets[oi]) {
      const eligibleSlots = slots.filter(s => !coveredSlots.has(s.key) && bySlot.get(s.key).some(q => q.oi === oi));
      const scored = [];
      for (const s of eligibleSlots) {
        for (const q of bySlot.get(s.key)) {
          if (q.oi !== oi || !baseFilterOk(q)) continue;
          const otherMin = exOtherMinCost(slots, coveredSlots, s.key, minCostBySlot);
          if (points + q.points + otherMin > maxPoints) continue;
          scored.push({ q, slotKey: s.key, marginal: q.points - minCostBySlot[s.key], jitter: (rng || Math.random)() });
        }
      }
      if (!scored.length) return null; // cible infaisable pour cette OI dans ce budget
      scored.sort((a, b) => (a.marginal - b.marginal) || (a.jitter - b.jitter));
      commit(scored[0].q, scored[0].slotKey);
    }
  }

  // ── PHASE 2 : glouton MRV habituel pour les slots restants ─────────────────
  const oiRemaining = exComputeOiQuota(oiList, favoriOi, favoriTarget, fixedTargets);
  Object.keys(oiCounts).forEach(oi => { oiRemaining[oi] = (oiRemaining[oi] || 0) - oiCounts[oi]; });

  const remainingSlots = slots.filter(s => !coveredSlots.has(s.key));
  const order = exShuffle(remainingSlots, rng).sort((a, b) => bySlot.get(a.key).length - bySlot.get(b.key).length);

  for (const slot of order) {
    if (coveredSlots.has(slot.key)) continue;

    const candidates = bySlot.get(slot.key).filter(q => {
      if (!baseFilterOk(q)) return false;
      if ((oiCounts[q.oi] || 0) >= exOiCap(q.oi, favoriOi, favoriTarget, fixedTargets)) return false; // plafond OI atteint
      const otherMin = exOtherMinCost(slots, coveredSlots, slot.key, minCostBySlot);
      return points + q.points + otherMin <= maxPoints;
    });
    if (!candidates.length) return null;

    const scored = candidates.map(q => ({
      q,
      // Le bonus est proportionnel au déficit de quota de l'OI du candidat (et non un
      // simple drapeau « encore du quota ? ») : les OI déjà comblées en phase 1 ont un
      // déficit nul ou négatif ici et ne sont donc plus artificiellement favorisées.
      // Léger malus au coût en points : à budget serré (cibles fixes/favorite déjà
      // engagées en phase 1), préférer le candidat le moins cher entre deux slots
      // équivalents laisse plus de marge pour les slots encore à traiter plus loin
      // dans la boucle — sans ce malus, un candidat plus cher mais mieux noté sur la
      // richesse documentaire pouvait grignoter la marge nécessaire à un slot ultérieur.
      score: Math.max(0, oiRemaining[q.oi] || 0) * 4 + exDocRichness(q) - q.points * 3 + (rng || Math.random)() * 3
    }));
    scored.sort((a, b) => b.score - a.score);
    const topN = scored.slice(0, Math.min(3, scored.length));
    const picked = topN[Math.floor((rng || Math.random)() * topN.length)].q;

    commit(picked, slot.key);
    if (oiRemaining[picked.oi] != null) oiRemaining[picked.oi]--;
  }

  // ── PHASE 3 : maximiser le budget utilisé (viser maxPoints, jamais le dépasser) ──────
  // La phase 1 privilégie le coût marginal le plus bas pour chaque cible — quand les
  // aspects/OI sont presque tous « ciblés » (ex. distribution d'OI dédiée à une période,
  // voir EX_OI_FIXED_TARGET_BY_PERIODE), il reste peu ou pas de slots libres en phase 2
  // pour absorber le budget restant, et le total peut finir bien en dessous de maxPoints.
  // On tente alors de remplacer chaque question par une alternative plus chère de la
  // MÊME OI sur le MÊME slot (jamais un changement d'OI : les comptes par OI restent
  // exacts), en respectant toujours la règle de diversité (clé déjà prise ailleurs pour
  // cette OI). Plusieurs passes, au cas où un remplacement en libère un autre.
  let boosted = true;
  let guard = 0;
  while (points < maxPoints && boosted && guard < slots.length * 4) {
    boosted = false;
    guard++;
    for (const q of selected.slice()) {
      if (points >= maxPoints) break;
      const slotKey = slotKeyOf.get(q.id);
      const qKeyOld = exDiversityKey(q);
      const alternatives = bySlot.get(slotKey)
        .filter(c => c.id !== q.id && c.oi === q.oi && !usedIds.has(c.id) && c.points > q.points)
        .filter(c => {
          const cKey = exDiversityKey(c);
          if (!cKey) return true;
          return cKey === qKeyOld || !usedOiTag.has(c.oi + '||' + cKey);
        })
        .sort((a, b) => b.points - a.points);
      const alt = alternatives.find(c => points - q.points + c.points <= maxPoints);
      if (!alt) continue;
      const idx = selected.indexOf(q);
      selected[idx] = alt;
      usedIds.delete(q.id); usedIds.add(alt.id);
      if (qKeyOld) usedOiTag.delete(q.oi + '||' + qKeyOld);
      const altKey = exDiversityKey(alt);
      if (altKey) usedOiTag.add(alt.oi + '||' + altKey);
      slotKeyOf.delete(q.id); slotKeyOf.set(alt.id, slotKey);
      points += alt.points - q.points;
      boosted = true;
    }
  }

  if (coveredSlots.size !== slots.length) return null;
  if (selected.length !== slots.length) return null; // une question par slot, jamais moins
  if (points > maxPoints) return null;
  if (new Set(selected.map(q => q.oi)).size < oiList.length) return null; // variété OI non atteinte
  // L'OI favorite doit apparaître exactement `favoriTarget` fois (pas juste « au moins »).
  if (favoriOi && favoriTarget > 0 && oiCounts[favoriOi] !== favoriTarget) return null;
  // Les OI à cible fixe doivent apparaître exactement ce nombre de fois, toujours.
  for (const oi of Object.keys(fixedTargets)) {
    if ((oiCounts[oi] || 0) !== fixedTargets[oi]) return null;
  }

  return { selected, points };
}

// Écarts d'indices visés entre deux occurrences d'une même OI, du plus confortable
// (4 = 3 questions différentes entre les deux) au strict minimum (2 = jamais adjacentes,
// dernier filet de sécurité si les comptes par OI rendent un espacement plus large
// impossible sur cette liste précise).
const EX_OI_SPACING_GAPS = [4, 3, 2];

// Place gloutonnement les questions en respectant (si possible) l'écart minGap entre
// deux occurrences d'une même OI : à chaque position, choisit parmi les OI dont le
// dernier placement remonte à au moins minGap celle qui a le plus de questions encore
// en attente (pour éviter de la coincer plus tard) ; si aucune OI n'est éligible (écart
// infaisable ici), relâche au minimum en prenant la moins récemment placée. Algorithme
// classique de réarrangement à distance minimale (cf. « Rearrange String k Distance
// Apart ») — l'ordre relatif d'origine (ordre des aspects) est conservé au sein de
// chaque groupe.
function exSpreadOi(list, minGap) {
  const groups = new Map();
  list.forEach(item => {
    if (!groups.has(item.oi)) groups.set(item.oi, []);
    groups.get(item.oi).push(item);
  });
  const queues = [...groups.values()].map(items => ({ items: items.slice(), lastIdx: -Infinity }));
  const result = [];
  for (let i = 0; i < list.length; i++) {
    const eligible = queues.filter(g => g.items.length && (i - g.lastIdx) >= minGap);
    const pool = eligible.length ? eligible : queues.filter(g => g.items.length);
    pool.sort((a, b) => (eligible.length ? b.items.length - a.items.length : 0) || a.lastIdx - b.lastIdx);
    const picked = pool[0];
    picked.lastIdx = i;
    result.push(picked.items.shift());
  }
  return result;
}

function exSpacingOk(list, minGap) {
  const lastIdx = new Map();
  for (let i = 0; i < list.length; i++) {
    const oi = list[i].oi;
    if (lastIdx.has(oi) && (i - lastIdx.get(oi)) < minGap) return false;
    lastIdx.set(oi, i);
  }
  return true;
}

// Réordonne une liste triée (ordre des aspects du programme) pour espacer au mieux les
// répétitions d'une même OI : essaie l'écart le plus confortable de EX_OI_SPACING_GAPS
// en premier, retient le premier qui respecte réellement cet écart sur cette liste
// précise, et se rabat sur un écart plus court sinon — la seule garantie absolue est de
// ne jamais placer deux questions de la même OI l'une juste après l'autre.
function exReorderNoAdjacentOi(list) {
  for (const gap of EX_OI_SPACING_GAPS) {
    const candidate = exSpreadOi(list, gap);
    if (exSpacingOk(candidate, gap)) return candidate;
  }
  return exSpreadOi(list, 2);
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
  const baseAspectRepeat = EX_ASPECT_REPEAT_BY_PERIODE[periode] || {};
  const varietyExclude = new Set(EX_OI_VARIETY_EXCLUDE_BY_PERIODE[periode] || []);
  // Cibles fixes globales (EX_OI_FIXED_TARGET) + cibles propres à cette période
  // (EX_OI_FIXED_TARGET_BY_PERIODE) — ex. P1 où l'enseignant a choisi une distribution
  // d'OI précise à la place de la variété générale habituelle.
  const baseFixedTarget = { ...EX_OI_FIXED_TARGET, ...(EX_OI_FIXED_TARGET_BY_PERIODE[periode] || {}) };

  let attemptsTotal = 0;
  let appliedTarget = 0;
  let appliedFixedTargets = baseFixedTarget;

  // Construit les slots + l'OI atteignable pour un jeu (aspectRepeat, fixedTargetsRaw)
  // donné, puis tente exTryBuild jusqu'à EX_ATTEMPTS_PER_LEVEL fois.
  function tryLevel(aspectRepeat, fixedTargetsRaw, favoriOiForBuild, favoriTargetForBuild) {
    const slots = exBuildAspectSlots(pool, aspects, aspectRepeat);
    const availableOis = new Set();
    slots.forEach(s => {
      const slotKey = s.aspects.slice().sort().join('|');
      pool.forEach(q => {
        const qa = exAspectsOf(q).filter(a => aspects.includes(a));
        if (qa.length && qa.slice().sort().join('|') === slotKey) availableOis.add(q.oi);
      });
    });
    const effectiveOiList = oiList.filter(oi => availableOis.has(oi) && !varietyExclude.has(oi));
    const fixedTargets = {};
    Object.keys(fixedTargetsRaw).forEach(oi => { if (availableOis.has(oi)) fixedTargets[oi] = fixedTargetsRaw[oi]; });

    for (let attempt = 0; attempt < EX_ATTEMPTS_PER_LEVEL; attempt++) {
      attemptsTotal++;
      const result = exTryBuild(pool, slots, effectiveOiList, favoriOiForBuild, favoriTargetForBuild, fixedTargets, maxPoints, rng);
      if (result) return result;
    }
    return null;
  }

  function finalize(result) {
    // Ordonne les questions selon l'ordre canonique des aspects (ordre du programme),
    // puis corrige les OI consécutives identiques (voir exReorderNoAdjacentOi).
    const byAspectOrder = result.selected.slice().sort((a, b) => {
      const ia = Math.min(...exAspectsOf(a).map(x => aspects.indexOf(x)).filter(i => i >= 0));
      const ib = Math.min(...exAspectsOf(b).map(x => aspects.indexOf(x)).filter(i => i >= 0));
      return ia - ib;
    });
    const selected = exReorderNoAdjacentOi(byAspectOrder);
    return {
      ok: true, selected, points: result.points, attempts: attemptsTotal,
      favoriTargetApplied: appliedTarget, fixedTargetsApplied: appliedFixedTargets
    };
  }

  // 1) Scénarios propres à (période, favori) — voir EX_FAVORI_SCENARIOS_BY_PERIODE.
  // Traités comme des cibles fixes pures (favoriOi/favoriTarget désactivés pour la
  // construction elle-même : la cible de l'OI favorite est déjà encodée dans `targets`).
  const favoriScenarios = ((EX_FAVORI_SCENARIOS_BY_PERIODE[periode] || {})[favoriOi]) || [];
  for (const scenario of favoriScenarios) {
    const aspectRepeat = { ...baseAspectRepeat };
    Object.keys(scenario.extraSlots || {}).forEach(a => {
      aspectRepeat[a] = (aspectRepeat[a] || 1) + scenario.extraSlots[a];
    });
    const fixedTargetsRaw = { ...baseFixedTarget, ...(scenario.targets || {}) };
    appliedFixedTargets = fixedTargetsRaw;
    const result = tryLevel(aspectRepeat, fixedTargetsRaw, null, 0);
    if (result) return finalize(result);
  }

  // 2) Repli générique habituel : dégradation des cibles fixes de base + de l'OI
  // favorite (préférence de fond, indépendante des scénarios ci-dessus).
  const favoriLevels = favoriOi ? exFavoriTargetLevels(favoriOi) : [0];
  const fixedLevels = exFixedTargetLevels(baseFixedTarget);
  // L'OI favorite est le choix explicite de l'enseignant pour CET examen ; les cibles
  // fixes sont une préférence de fond. En cas de conflit de budget entre les deux
  // (ex. une OI favorite dont tous les candidats coûtent 3 points + une cible fixe à 2),
  // on assouplit d'abord les cibles fixes avant de sacrifier davantage l'OI favorite —
  // d'où la boucle favori à l'extérieur, cibles fixes à l'intérieur.
  for (const favoriTarget of favoriLevels) {
    for (const fixedTargetsRaw of fixedLevels) {
      appliedTarget = favoriTarget;
      appliedFixedTargets = fixedTargetsRaw;
      const result = tryLevel(baseAspectRepeat, fixedTargetsRaw, favoriOi, favoriTarget);
      if (result) return finalize(result);
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

// Détecte si l'énoncé cite explicitement des documents par lettre (« document(s) A »,
// « A et B », « A à C »…) — même regex que exRemapTexte, sans capturer les numéros.
function exHasDocCitation(enonce) {
  return /documents?\s+[A-Z]/i.test(enonce || '');
}

// Construit l'ordre final des documents pour le dossier documentaire. Les documents
// d'une question dont l'énoncé cite des lettres précises (ex. « les documents A à C »)
// restent groupés et dans leur ordre d'origine — le texte s'y réfère comme une séquence,
// ils doivent donc rester consécutifs — mais ce bloc peut être placé n'importe où dans
// le dossier. Les documents des questions SANS citation explicite sont traités
// individuellement et mélangés dans tout le dossier (jamais forcément groupés par
// question), pour davantage de mélange là où rien n'impose de les garder ensemble.
function exOrderDocItems(selection, rng) {
  const blocks = [];
  selection.forEach(q => {
    const flat = exFlattenDocs(q).map(({ col, letter }) => ({ qId: q.id, col, letter }));
    if (!flat.length) return;
    if (exHasDocCitation(q.enonce) && flat.length > 1) {
      blocks.push(flat);
    } else {
      flat.forEach(item => blocks.push([item]));
    }
  });
  return exShuffle(blocks, rng).flat();
}

// Construit la numérotation globale (1, 2, 3…) selon l'ordre mélangé de exOrderDocItems,
// et retourne :
//   - docItems  : liste plate { qId, qIndex, col, num, titre } pour le dossier
//   - byQuestion: Map qId → { letterToNum: {A:1,B:2,...}, items:[...] }
function exBuildDocMap(selection, rng) {
  const byQuestion = new Map(selection.map((q, qIndex) => [q.id, { letterToNum: {}, items: [], qIndex }]));
  const docItems = [];
  let num = 0;
  exOrderDocItems(selection, rng).forEach(({ qId, col, letter }) => {
    num += 1;
    const entry = byQuestion.get(qId);
    entry.letterToNum[letter] = num;
    const item = { qId, qIndex: entry.qIndex, col, num, titre: exRemapTitre(col.titre, num) };
    entry.items.push(item);
    docItems.push(item);
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
    exFlattenDocs, exDocRichness, exAspectsOf, exDiversityKey, exOiCap,
    exReorderNoAdjacentOi, exHasDocCitation, exOrderDocItems, exFixedTargetLevels,
    exFavoriTargetLevels, exTryBuild, exEffectiveHardCap, EX_OI_HARD_CAP_RELAX,
    exBuildAspectSlots, EX_OI_FIXED_TARGET_BY_PERIODE, EX_OI_VARIETY_EXCLUDE_BY_PERIODE,
    EX_ASPECT_REPEAT_BY_PERIODE, EX_FAVORI_SCENARIOS_BY_PERIODE
  };
}
