const REGLETTES = {
  "Q1": {
    oi: "Situer dans le temps",
    colonnes: [
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 1,
        desc: "L'élève situe les faits dans le temps."
      },
      {
        pts: 0,
        desc: "L'élève ne situe pas les faits dans le temps."
      }
    ]
  },
  "Q2": {
    oi: "Mettre en relation des faits",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève met en relation tous les faits. (3 sur 3)"
      },
      {
        pts: 1,
        desc: "L'élève met en relation certains faits. (2 sur 3)"
      },
      {
        pts: 0,
        desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 3)"
      }
    ]
  },
  "Q3": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement une conséquence."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement une conséquence."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement ou ne détermine aucune conséquence."
      }
    ]
  },
  "Q4": {
    oi: "Dégager des différences et des similitudes",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève établit correctement le point de divergence entre les points de vue."
      },
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de divergence ou ne présente que les deux points de vue."
      },
      {
        pts: 0,
        desc: "L'élève établit incorrectement le point de divergence entre les points de vue ou ne l'établit pas."
      }
    ]
  },
  "Q5": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 3,
        desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."
      },
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {
        pts: 1,
        desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."
      },
      {
        pts: 0,
        desc: "L'élève précise un seul élément ou n'en précise pas."
      }
    ]
  },
  "Q6": {
    oi: "Mettre en relation des faits",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève met en relation tous les faits. (4 sur 4)"
      },
      {
        pts: 1,
        desc: "L'élève met en relation certains faits. (3 ou 2 sur 4)"
      },
      {
        pts: 0,
        desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"
      }
    ]
  },
  "Q7": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement le facteur explicatif."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement le facteur explicatif."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."
      }
    ]
  },
  "Q8": {
    oi: "Déterminer des changements et des continuités",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement le changement."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement le changement."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."
      }
    ]
  },
  "Q9": {
    oi: "Situer dans le temps",
    colonnes: [
      "2 points",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève situe tous les faits dans le temps."
      },
      {
        pts: 0,
        desc: "L'élève ne situe pas tous les faits dans le temps."
      }
    ]
  }
}

const IMAGE_DB = {
  "image_jacques_cartier_1534.png": {
    src: "images/image_jacques_cartier_1534.png"
  },
  "ligne_1400_1550.jpg": {
    src: "images/ligne_1400_1550.jpg"
  },
  "mercantilisme_nf.png": {
    src: "images/mercantilisme_nf.png"
  },
  "la_revolte_pontiac.jpg": {
    src: "images/la_revolte_pontiac.jpg"
  },
  "village_iroquoien_1500.png": {
    src: "images/village_iroquoien_1500.png"
  },
  "campement_algonquien_1500.png": {
    src: "images/campement_algonquien_1500.png"
  },
  "reseaux_echanges_1500.png": {
    src: "images/reseaux_echanges_1500.png"
  },
  "nomade_1500.png": {
    src: "images/nomade_1500.png"
  },
  "troc_1500.png": {
    src: "images/troc_1500.png"
  },
  "Population_autochtone_au_17e_siecle.png": {
    src: "images/Population_autochtone_au_17e_siecle.png"
  },
  "cartier_gaspe.png": {
    src: "images/cartier_gaspe.png"
  },
  "chrono_acBd.png": {
    src: "images/chrono_acBd.png"
  },
  "ligne_temps_1400-1600.png": {
    src: "images/ligne_temps_1400-1600.png"
  }
}

const QUESTIONS = [
  {
    id: "Q1",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez la lettre qui correspond à la période pendant laquelle se déroulent les faits présentés dans le document.",
    aspects: [
      {
        aspect: "Exploration et occupation du territoire par les Français"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "image_jacques_cartier_1534.png"
          }
        ]
      }
    ],
    reponse: {
      type: "image_ligne",
      ref: "ligne_temps_1400-1600.png"
    },
    guide: "C"
  },
  {
    id: "Q2",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P2 — 1608 – 1760",
    points: 2,
    enonce: "Pour assurer une présence française sur le territoire nord-américain, la France fait appel aux compagnies. Parmi les documents A, B et C, indiquez la lettre du document qui correspond à certains éléments associés aux monopoles des compagnies.",
    aspects: [
      {
        aspect: "Monopole des compagnies"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« D'avantage, Sa Majesté accordera aux associés, pour toujours, le trafic de tous cuirs, peaux et pelleteries de la Nouvelle-France et […] tout autre commerce, soit terrestre ou naval, qui se pourra faire, tirer, traiter et trafiquer, en quelque sorte ou manière que ce soit, en l'étendue du pays, et autant qu'il se pourra étendre […] »",
            citation: "CARDINAL DE RICHELIEU. Édit, ordonnances royales, déclarations et arrêts du Conseil d'État du roi concernant le Canada, 1627."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B – Le commerce triangulaire",
            ref: "mercantilisme_nf.png"
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« C'est à savoir que [les Cent Associés] promettront de faire passer audit pays de la Nouvelle-France deux à trois cents hommes de tous les métiers dès l'année prochaine de 1628, et pendant les années suivantes en augmenter le nombre jusqu'à quatre mille de l'un et de l'autre sexe […] les y loger, nourrir et fournir toutes choses généralement nécessaires à la vie pendant trois ans […] »",
            citation: "CARDINAL DE RICHELIEU. Édit, ordonnances royales, déclarations et arrêts du Conseil d'État du roi concernant le Canada, 1627."
          }
        ]
      }
    ],
    reponse: {
      type: "tableau",
      lignes: [
        {
          label: "Mercantilisme"
        },
        {
          label: "Obligations des compagnies"
        },
        {
          label: "Privilèges des compagnies"
        }
      ]
    },
    guide: {
      type: "tableau",
      lignes: [
        {
          label: "Mercantilisme",
          valeur: "B"
        },
        {
          label: "Obligations des compagnies",
          valeur: "C"
        },
        {
          label: "Privilèges des compagnies",
          valeur: "A"
        }
      ]
    }
  },
  {
    id: "Q3",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P3 — 1760 – 1791",
    points: 2,
    enonce: "À la suite de la mise en place de la Proclamation Royale, plusieurs groupes autochtones craignent de perdre leur territoire. Indiquez une réaction d'un groupe autochtone dans la région des Grands-Lacs.",
    aspects: [
      {
        aspect: "Statut des Indiens"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A – Pontiac s'adressant aux chefs autochtones de la région",
            ref: "la_revolte_pontiac.jpg"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "La Révolte de Pontiac ou les groupes autochtones se révoltent."
  },
  {
    id: "Q4",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    enonce: "Le documents A et B présentent deux points de vue différents d'acteurs par rapport aux soulèvements de 1837-1838. Indiquez sur quel point précis les acteurs sont en désaccord.",
    aspects: [
      {
        aspect: "Soulèvements de 1837-1838"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Serviteurs, soyez soumis et respectueux envers vos maîtres […] Ne vous laissez pas séduire si quelqu'un voulait vous engager dans la rébellion contre le gouvernement établi. »\n\nMgr Lartigue, évêque de Montréal.",
            citation: "DION-MCKENNON, D. et al. Notre histoire, ERPI, p. 138."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Eh bien! Moi je diffère d'opinion avec monsieur Papineau. Je prétends que le temps est arrivé de fondre nos plats et nos cuillères d'étain pour en faire des balles. »\n\nWolfred Nelson",
            citation: "FILTEAU, G. Histoire des Patriotes, Montréal, Éditions de l'Aurore, 1975, p. 277."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les deux acteurs sont en désaccord sur le recours à la rébellion armée contre l'autorité en place."
  },
  {
    id: "Q5",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P1 — Des origines à 1608",
    points: 3,
    enonce: "Expliquez comment le mode de vie des nations algonquiennes favorise le développement du réseau d'échanges sur le territoire entre les nations autochtones. Répondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n• Le mode de vie des nations algonquiennes\n• Une activité économique\n• Le développement du réseau d'échanges entre nations autochtones",
    aspects: [
      {
        aspect: "Premiers occupants du territoire"
      },
      {
        aspect: "Réseaux d'échange autochtones"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "reseaux_echanges_1500.png"
          },
          {
            titre: "Document B",
            ref: "nomade_1500.png"
          },
          {
            titre: "Document C",
            ref: "troc_1500.png"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 5
    },
    guide: "Les nations algonquiennes ont un mode de vie nomade (mode de vie des nations algonquiennes). Leurs déplacements saisonniers leur permettent de rencontrer d'autres nations et d'échanger des ressources par le troc (une activité économique). Ainsi, leurs déplacements et le troc favorisent le développement d'un réseau d'échanges entre les nations autochtones (le développement du réseau d'échanges entre nations autochtones)."
  },
  {
    id: "Q6",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P1 — Des origines à 1608",
    points: 2,
    enonce: "Les documents A à D présentent des faits liés au mode de vie chez les Algonquiens et les Iroquoiens vers 1500. Indiquez à l'endroit approprié le numéro des quatre documents.",
    aspects: [
      {
        aspect: "Premiers occupants du territoire"
      },
      {
        aspect: "Réseaux d'échange autochtones"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "village_iroquoien_1500.png"
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Pour subvenir à leurs besoins, [les Cris, Ojibwés, Innus, Béothuks et Outaouais] suivent le gibier dans ses déplacements. Ils ont donc besoin d'un vaste territoire où abondent le gibier, le poisson et les fruits. »",
            citation: "Alain DALONGEVILLE (dir.), Présences : une histoire thématique du Québec, manuel de l'élève, histoire et éducation à la citoyenneté, 2e année du 2e cycle du secondaire, Anjou, Les Éditions CEC, 2008, vol. 1, p. 28."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« La fertilité du sol et un climat favorable à l'agriculture leur permettent de cultiver le maïs, les courges et les haricots. Ils habitent des villages constitués de maisons longues pouvant abriter plusieurs familles et toutes leurs possessions. Chaque famille y entretient un feu pour y faire cuire la nourriture de ses membres. »",
            citation: "DALONGEVILLE, A. Présences, volume 1, CEC, p. 55."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            ref: "campement_algonquien_1500.png"
          }
        ]
      }
    ],
    reponse: {
      type: "tableau",
      lignes: [
        {
          label: "Nomade"
        },
        {
          label: "Sédentaire"
        }
      ]
    },
    guide: {
      type: "tableau",
      lignes: [
        {
          label: "Nomade",
          valeur: "B et D"
        },
        {
          label: "Sédentaire",
          valeur: "A et C"
        }
      ]
    }
  },
  {
    id: "Q7",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P1 — Des origines à 1608",
    points: 2,
    enonce: "Pour quelle raison les Montagnais concluent-ils une alliance avec les représentants du roi de France Henri IV?",
    aspects: [
      {
        aspect: "Alliances et rivalités au sein des Premières Nations"
      },
      {
        aspect: "Exploration et occupation du territoire par les Français"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "",
            texte: "« […] François Gravé du Pont, commandant d’une expédition de traite et d’exploration le long du \nfleuve, […] est accompagné des deux ambassadeurs montagnais qui ont rencontré Henri IV et de Champlain […] [Ils visitent] un groupe de Montagnais […] [qui] célèbrent une victoire récente sur les Iroquois […] La rencontre diplomatique est brève. […] Gravé du Pont pétune en compagnie des Montagnais et de Champlain […] pour confirmer l’alliance. »",
            citation: "Mathieu D’AVIGNON, « L’alliance franco-montagnaise […] », Argument – Politique, société, histoire, vol. 16, no 2, printemps-été 2014, p. 31."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Obtenir une assistance militaire contre les Iroquois (ou leurs ennemis) ou s'assurer un approvisionnement en produits européens. \n\nDes réponses telles que Recevoir de l’aide de leur part ou Faire le commerce des \nfourrures sont plus ou moins correctes, car elles sont vagues."
  },
  {
    id: "Q8",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P2 — 1608 – 1760",
    points: 2,
    enonce: "La présence des Européens en Amérique amène un changement démographique chez les peuples autochtones. Quel est ce changement?",
    aspects: [
      {
        aspect: "Populations autochtones"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "Population_autochtone_au_17e_siecle.png"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "La population diminue ou Il y a une hausse de la mortalité (ou une forte mortalité) ou Les Amérindiens meurent en grand nombre.\n \nRemarques.  —  Une réponse telle que Les Autochtones meurent est plus ou moins correcte, car elle est \nvague. —  Des réponses telles que Ils attrapent des maladies européennes ou Le choc microbien sont incorrectes, car il s’agit de causes de ce changement."
  },
  {
    id: "Q9",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P1 — Des origines à 1608",
    points: 2,
    enonce: "Les documents A à D présentent des événements liés à des tentatives de colonisation par la France en Amérique du Nord. Placez ces documents par ordre chronologique.",
    aspects: [
      {
        aspect: "Exploration et occupation du territoire par les Français"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« […] accompagné d’une centaine d’hommes, [Du Gua de Monts] s’installe sur l’île Sainte-Croix. Après un hiver éprouvant, les colons trouvent un emplacement […] où ils construisent l’habitation de Port-Royal. »",
            source: "Christophe HORGUELIN et autres, Fresques, manuel de l’élève, histoire et éducation à la citoyenneté, 2e année du 2e cycle du secondaire, Montréal, Graficor, 2008, t. 1, p. 24."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« […] François Gravé du Pont, commandant d’une expédition de traite et d’exploration le long du \nfleuve, […] est accompagné des deux ambassadeurs montagnais qui ont rencontré Henri IV et de \nChamplain […] [Ils visitent] un groupe de Montagnais […] [qui] célèbrent une victoire récente sur les Iroquois […] La rencontre diplomatique est brève. […] Gravé du Pont partage un banquet en compagnie des Montagnais et de Champlain […] pour confirmer l’alliance. »",
            source: "Mathieu D’AVIGNON, « L’alliance franco-montagnaise […] », Argument – Politique, société, histoire, vol. 16, no 2, printemps-été 2014, p. 31."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C - Jacques Cartier à Gaspé",
            ref: "cartier_gaspe.png",
            source: "Bibliothèque et Archives Canada/C-003278."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« Roberval arrive […] à Cap-Rouge, en compagnie de 250 personnes, hommes et femmes. Il  renomme le fort abandonné […] “France-Roy” et s’y installe pour passer l’hiver. Toutefois, son  expérience est désastreuse et une grande partie des colons qui l’accompagnent meurent du scorbut.  Roberval retourne en France à la fin de l’hiver. »",
            source: "Ève BERNIER CORMIER et autres, Chroniques du Québec et du Canada – Des origines à 1840, manuel de l’élève, histoire du Québec et du Canada, 3e secondaire, Montréal, ERPI, 2016, p. 55."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "chrono_acBd.png"
    },
    guide: "C - D - B - A"
  }
]
