const REGLETTES = {
  "Q1": {
    oi: "Établir des faits",
    colonnes: [
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 1,
        desc: "L'élève établit correctement le fait."
      },
      {
        pts: 0,
        desc: "L'élève établit incorrectement le fait ou ne l'établit pas."
      }
    ]
  },
  "Q2": {
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
  },
  "Q3": {
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
  },
  "Q10": {
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
  }
}

const IMAGE_DB = {
  "fondation_quebec_1608": {
    src: "images/fondation_quebec_1608"
  },
  "ligne_acBd.png": {
    src: "images/ligne_acBd.png"
  },
  "bataille_lac_champlain.png": {
    src: "images/bataille_lac_champlain.png"
  },
  "ligne_1550-1750.png": {
    src: "images/ligne_1550-1750.png"
  }
}

const QUESTIONS = [
  {
    id: "Q1",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "À partir du document ci-dessous, nommez une nation autochtone qui conclut une alliance avec Champlain et François Gravé du Pont en 1603.",
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
            texte: "« La rencontre diplomatique de 1603 […] contribue à jeter les bases d’un réseau d’alliance franco-amérindien. Cette rencontre ouvre aussi la voie à l’établissement d’une colonie française en Amérique du Nord […] Champlain […] renouvellera à deux reprises sa participation à des expéditions contre les Iroquois […] »",
            source: "Raymonde LITALIEN (dir.) et Denis VAUGEOIS (dir.), Champlain : la naissance de l’Amérique française, Québec, Les éditions du Septentrion, 2004, p. 160."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Les Montagnais ou les Etchemins (ou les Malécites) ou les Algonquins ou les Hurons ou les Micmacs ou les Abénaquis."
  },
  {
    id: "Q2",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P1 — Des origines à 1608",
    points: 2,
    enonce: "Les documents A à D présentent des faits relatifs aux premières tentatives d’établissement d’Européens en Amérique du Nord. Placez-les par ordre chronologique.",
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
            titre: "Document A - Fondation de Québec",
            ref: "fondation_quebec_1608",
            source: "Samuel de Champlain/Bibliothèque et Archives Canada/MIKAN 3919911."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Pierre Chauvin se fait concéder par Henri IV un monopole de commerce pour la région de Tadoussac. […] Il veut établir à l’embouchure du Saguenay une colonie de 500 habitants. Au cours de l’été […], il vient faire la traite et laisse à Tadoussac 16 hommes qui doivent hiverner à cet endroit. Au printemps suivant, il ne reste plus que 5 survivants qui devaient la vie à la générosité amérindienne. »",
            source: "Jacques LACOURSIÈRE, Jean PROVENCHER et Denis VAUGEOIS, Canada Québec, 1534-2010, nouvelle édition mise à jour, Québec, Les éditions du Septentrion, 2011, p. 32."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« […] Giovanni Caboto, navigateur d’origine italienne, entreprend pour le compte de marchands anglais de Bristol un voyage d’exploration. Muni d’une autorisation du roi d’Angleterre, il cherche à découvrir un chemin [vers l’Asie] situé plus au nord que celui que Colomb avait pris. »",
            source: "Jean-François CARDIN et autres, Le Québec : héritages et projets, 2e éd., Laval, Éditions HRW, 1994, p. 26."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« [Cartier] choisit […] l’embouchure de la rivière Cap-Rouge, où il établit la colonie de Charlesbourg-Royal. Il y fait construire deux forts. En explorant les lieux, les Français croient découvrir des feuilles d’or et des diamants. Devant l’hostilité grandissante des Amérindiens, Cartier décide de rentrer en France […] »",
            source: "Jean-Pierre CHARLAND, À l’aube du XXIe siècle, avec la collaboration de Jacques  \nSaint-Pierre, manuel de l’élève, histoire du Québec et du Canada, 4e secondaire, \nMontréal, Lidec, 1997, p. 17."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_acBd.png"
    },
    guide: "C - D - B - A"
  },
  {
    id: "Q3",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document ci-dessous.",
    aspects: [
      {
        aspect: "Guerre et diplomatie chez les Premières Nations"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A - Champlain et ses alliés combattant les Iroquois",
            ref: "bataille_lac_champlain.png",
            source: "Bibliothèque et Archives Canada/C-005750."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_1550-1750.png"
    },
    guide: "B"
  }
]
