// ─────────────────────────────────────────────────────────────────────
// Source unique de vérité pour les opérations intellectuelles (OI).
// Chargé par index.html (site public) ET admin.html (gestion).
//
// Pour ajouter / renommer / réordonner une OI : modifier UNIQUEMENT ce fichier.
//   - L'ordre des clés ci-dessous = l'ordre du menu déroulant de l'admin.
//   - cls / color / bg : style des pastilles (couleurs définies dans style.css).
//   - soustags  : pills « sous-tag » proposées dans l'admin (optionnel).
//   - autoReponse : type de réponse pré-sélectionné quand on choisit l'OI (optionnel).
//
// Les réglettes prémémorisées restent dans reglettes.js (REGLETTES_PRESET).
// ─────────────────────────────────────────────────────────────────────
const OI_CONFIG = {
  "Dégager des différences et des similitudes": {
    cls: "b-oi-dif", color: "var(--c-dif)", bg: "var(--c-dif-bg)",
    soustags: ['Convergence – 2 acteurs', 'Différence', 'Divergence – 2 acteurs', 'Similitude', 'Position – 3 acteurs']
  },
  "Déterminer des causes et des conséquences": {
    cls: "b-oi-rel", color: "var(--c-rel)", bg: "var(--c-rel-bg)",
    soustags: ['Cause', 'Conséquence', 'Cause et conséquence'],
    autoReponse: { type: 'cause-consequence' }
  },
  "Déterminer des changements et des continuités": {
    cls: "b-oi-chg", color: "var(--c-chg)", bg: "var(--c-chg-bg)",
    soustags: ['Changement', 'Continuité', 'Changement ou continuité']
  },
  "Établir des faits": {
    cls: "b-oi-fai", color: "var(--c-fai)", bg: "var(--c-fai-bg)",
    autoReponse: { type: 'lignes', nombre: 1 }
  },
  "Établir des liens de causalité": {
    cls: "b-oi-cau", color: "var(--c-cau)", bg: "var(--c-cau-bg)"
  },
  "Mettre en relation des faits": {
    cls: "b-oi-mr", color: "var(--c-mr)", bg: "var(--c-mr-bg)",
    soustags: ['2 documents', '3 documents', '4 documents']
  },
  "Situer dans l'espace": {
    cls: "b-oi-esp", color: "var(--c-esp)", bg: "var(--c-esp-bg)",
    soustags: ['Situer 1 élément', 'Situer 2 éléments']
  },
  "Situer dans le temps": {
    cls: "b-oi-sit", color: "var(--c-sit)", bg: "var(--c-sit-bg)",
    soustags: ['Avant et après', 'Ligne du temps', 'Ordre chronologique']
  }
};

// Ordre canonique des OI (= ordre du menu admin).
const OI_LIST = Object.keys(OI_CONFIG);
