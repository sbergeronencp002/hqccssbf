const REGLETTES = {
  "Q1": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      { pts: 1, desc: "L'élève situe correctement la période dans le temps." },
      { pts: 0, desc: "L'élève ne situe pas correctement la période dans le temps." }
    ]
  },
  "Q2": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      { pts: 2, desc: "L'élève met en relation tous les faits. (3 sur 3)" },
      { pts: 1, desc: "L'élève met en relation certains faits. (2 ou 1 sur 3)" },
      { pts: 0, desc: "L'élève ne met en relation aucun fait. (0 sur 3)" }
    ]
  },
  "Q3": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      { pts: 2, desc: "L'élève détermine correctement une conséquence." },
      { pts: 1, desc: "L'élève détermine plus ou moins correctement une conséquence." },
      { pts: 0, desc: "L'élève détermine incorrectement ou ne détermine aucune conséquence." }
    ]
  },
  "Q4": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      { pts: 2, desc: "L'élève établit correctement le point de divergence entre les points de vue." },
      { pts: 1, desc: "L'élève établit plus ou moins correctement le point de divergence ou ne présente que les deux points de vue." },
      { pts: 0, desc: "L'élève établit incorrectement le point de divergence entre les points de vue ou ne l'établit pas." }
    ]
  },
  "Q5": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      { pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité." },
      { pts: 2, desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité." },
      { pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité." },
      { pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas." }
    ]
  },
  "Q6": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      { pts: 2, desc: "L'élève met en relation tous les faits. (4 sur 4)" },
      { pts: 1, desc: "L'élève met en relation certains faits. (3 ou 2 sur 4)" },
      { pts: 0, desc: "L'élève ne met en relation aucun fait. (1 ou 0 sur 4)" }
    ]
  }
}

const IMAGE_DB = {
  "image_jacques_cartier_1534.png": { src: "images/image_jacques_cartier_1534.png" },
  "ligne_1400_1550.jpg":            { src: "images/ligne_1400_1550.jpg" },
  "mercantilisme_nf.png":           { src: "images/mercantilisme_nf.png" },
  "la_revolte_pontiac.jpg":         { src: "images/la_revolte_pontiac.jpg" },
  "village_iroquoien_1500.png":     { src: "images/village_iroquoien_1500.png" },
  "campement_algonquien_1500.png":  { src: "images/campement_algonquien_1500.png" },
  "reseaux_echanges_1500.png":      { src: "images/reseaux_echanges_1500.png" },
  "nomade_1500.png":                { src: "images/nomade_1500.png" },
  "troc_1500.png":                  { src: "images/troc_1500.png" }
}

const QUESTIONS = [
  {
    id: "Q1",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "Des origines à 1608",
    realite: "Exploration et occupation du territoire par les Français",
    points: 1,
    enonce: "Indiquez la lettre qui correspond à la période pendant laquelle se déroulent les faits présentés dans le document.",
    aspects: [{ aspect: "Exploration et occupation du territoire par les Français" }],
    documents: [
      { type: "textes", cols: [{ titre: "Document A", ref: "image_jacques_cartier_1534.png" }] }
    ],
    reponse: { type: "image_ligne", ref: "ligne_1400_1550.jpg" },
    guide: "C"
  },
  {
    id: "Q2",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "1608 - 1760",
    realite: "Monopole des compagnies",
    points: 2,
    enonce: "Pour assurer une présence française sur le territoire nord-américain, la France fait appel aux compagnies. Parmi les documents A, B et C, indiquez la lettre du document qui correspond à certains éléments associés aux monopoles des compagnies.",
    aspects: [{ aspect: "Monopole des compagnies" }],
    documents: [
      { type: "textes", cols: [{ titre: "Document A", texte: "« D'avantage, Sa Majesté accordera aux associés, pour toujours, le trafic de tous cuirs, peaux et pelleteries de la Nouvelle-France et […] tout autre commerce, soit terrestre ou naval, qui se pourra faire, tirer, traiter et trafiquer, en quelque sorte ou manière que ce soit, en l'étendue du pays, et autant qu'il se pourra étendre […] »\nCARDINAL DE RICHELIEU. Édit, ordonnances royales, déclarations et arrêts du Conseil d'État du roi concernant le Canada, 1627." }] },
      { type: "textes", cols: [{ titre: "Document B – Le commerce triangulaire", ref: "mercantilisme_nf.png" }] },
      { type: "textes", cols: [{ titre: "Document C", texte: "« C'est à savoir que [les Cent Associés] promettront de faire passer audit pays de la Nouvelle-France deux à trois cents hommes de tous les métiers dès l'année prochaine de 1628, et pendant les années suivantes en augmenter le nombre jusqu'à quatre mille de l'un et de l'autre sexe […] les y loger, nourrir et fournir toutes choses généralement nécessaires à la vie pendant trois ans […] »\nCARDINAL DE RICHELIEU. Édit, ordonnances royales, déclarations et arrêts du Conseil d'État du roi concernant le Canada, 1627." }] }
    ],
    reponse: { type: "tableau", lignes: [{ label: "Mercantilisme" }, { label: "Obligations des compagnies" }, { label: "Privilèges des compagnies" }] },
    guide: { type: "tableau", lignes: [{ label: "Mercantilisme", valeur: "B" }, { label: "Obligations des compagnies", valeur: "C" }, { label: "Privilèges des compagnies", valeur: "A" }] }
  },
  {
    id: "Q3",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "1760 - 1791",
    realite: "Statut des Indiens",
    points: 2,
    enonce: "À la suite de la mise en place de la Proclamation Royale, plusieurs groupes autochtones craignent de perdre leur territoire. Indiquez une réaction d'un groupe autochtone dans la région des Grands-Lacs.",
    aspects: [{ aspect: "Statut des Indiens" }],
    documents: [
      { type: "textes", cols: [{ titre: "Document A – Pontiac s'adressant aux chefs autochtones de la région", ref: "la_revolte_pontiac.jpg" }] }
    ],
    reponse: { type: "lignes", nombre: 2 },
    guide: "La Révolte de Pontiac ou les groupes autochtones se révoltent."
  },
  {
    id: "Q4",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "1791 - 1840",
    realite: "Soulèvements de 1837-1838",
    points: 2,
    enonce: "Le document A présente deux points de vue différents d'acteurs par rapport aux soulèvements de 1837-1838. Indiquez sur quel point précis les acteurs sont en désaccord.",
    aspects: [{ aspect: "Soulèvements de 1837-1838" }],
    documents: [
      { type: "textes", cols: [{ titre: "Document A", texte: "« Serviteurs, soyez soumis et respectueux envers vos maîtres […] Ne vous laissez pas séduire si quelqu'un voulait vous engager dans la rébellion contre le gouvernement établi. »\nMgr Lartigue, évêque de Montréal\nDION-MCKENNON, D. et al. Notre histoire, ERPI, p. 138.\n\n« Eh bien! Moi je diffère d'opinion avec monsieur Papineau. Je prétends que le temps est arrivé de fondre nos plats et nos cuillères d'étain pour en faire des balles. »\nWolfred Nelson\nFILTEAU, G. Histoire des Patriotes, Montréal, Éditions de l'Aurore, 1975, p. 277." }] }
    ],
    reponse: { type: "lignes", nombre: 2 },
    guide: "Les deux acteurs sont en désaccord sur le recours à la rébellion armée contre l'autorité en place."
  },
  {
    id: "Q5",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "Des origines à 1608",
    realite: "Premiers occupants du territoire / Réseaux d'échanges autochtones",
    points: 3,
    enonce: "Expliquez comment le mode de vie des nations algonquiennes favorise le développement du réseau d'échanges sur le territoire entre les nations autochtones. Répondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n• Le mode de vie des nations algonquiennes\n• Une activité économique\n• Le développement du réseau d'échanges entre nations autochtones",
    aspects: [{ aspect: "Premiers occupants du territoire" }, { aspect: "Réseaux d'échanges autochtones" }],
    documents: [
      { type: "textes", cols: [
        { titre: "Document A", ref: "reseaux_echanges_1500.png" },
        { titre: "Document B", ref: "nomade_1500.png" },
        { titre: "Document C", ref: "troc_1500.png" }
      ]}
    ],
    reponse: { type: "lignes", nombre: 5 },
    guide: "Les nations algonquiennes ont un mode de vie nomade (mode de vie des nations algonquiennes). Leurs déplacements saisonniers leur permettent de rencontrer d'autres nations et d'échanger des ressources par le troc (une activité économique). Ainsi, leurs déplacements et le troc favorisent le développement d'un réseau d'échanges entre les nations autochtones (le développement du réseau d'échanges entre nations autochtones)."
  },
  {
    id: "Q6",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "Des origines à 1608",
    realite: "Premiers occupants du territoire / Réseaux d'échange autochtones",
    points: 2,
    enonce: "Les documents A à D présentent des faits liés au mode de vie chez les Algonquiens et les Iroquoiens vers 1500. Indiquez à l'endroit approprié le numéro des quatre documents.",
    aspects: [{ aspect: "Premiers occupants du territoire" }, { aspect: "Réseaux d'échange autochtones" }],
    documents: [
      { type: "textes", cols: [{ titre: "Document A", ref: "village_iroquoien_1500.png" }] },
      { type: "textes", cols: [{ titre: "Document B", texte: "« Pour subvenir à leurs besoins, [les Cris, Ojibwés, Innus, Béothuks et Outaouais] suivent le gibier dans ses déplacements. Ils ont donc besoin d'un vaste territoire où abondent le gibier, le poisson et les fruits. »\nAlain DALONGEVILLE (dir.), Présences : une histoire thématique du Québec, manuel de l'élève, histoire et éducation à la citoyenneté, 2e année du 2e cycle du secondaire, Anjou, Les Éditions CEC, 2008, vol. 1, p. 28." }] },
      { type: "textes", cols: [{ titre: "Document C", texte: "« La fertilité du sol et un climat favorable à l'agriculture leur permettent de cultiver le maïs, les courges et les haricots. Ils habitent des villages constitués de maisons longues pouvant abriter plusieurs familles et toutes leurs possessions. Chaque famille y entretient un feu pour y faire cuire la nourriture de ses membres. »\nDALONGEVILLE, A. Présences, volume 1, CEC, p. 55." }] },
      { type: "textes", cols: [{ titre: "Document D", ref: "campement_algonquien_1500.png" }] }
    ],
    reponse: { type: "tableau", lignes: [{ label: "Nomade" }, { label: "Sédentaire" }] },
    guide: { type: "tableau", lignes: [{ label: "Nomade", valeur: "B et D" }, { label: "Sédentaire", valeur: "A et C" }] }
  }
]
