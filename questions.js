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
    oi: "Situer dans le temps",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève situe tous les faits dans le temps. (4 sur 4)"
      },
      {
        pts: 1,
        desc: "L'élève situe certains faits dans le temps. (3 ou 2 sur 4)"
      },
      {
        pts: 0,
        desc: "L'élève ne situe pas les faits dans le temps. (1 ou 0 sur 4)"
      }
    ]
  },
  "Q5": {
    oi: "Situer dans l'espace",
    colonnes: [
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 1,
        desc: "L'élève situe le fait dans l'espace."
      },
      {
        pts: 0,
        desc: "L'élève ne situe pas le fait dans l'espace."
      }
    ]
  },
  "Q6": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: []
  },
  "Q7": {
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
  "Q8": {
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
  "Q9": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine le facteur explicatif et la conséquence. (2 sur 2)"
      },
      {
        pts: 1,
        desc: "L'élève détermine le facteur explicatif ou la conséquence. (1 sur 2)"
      },
      {
        pts: 0,
        desc: "L'élève ne détermine pas le facteur explicatif ni la conséquence. (0 sur 2)"
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
  },
  "deportation_acadien.png": {
    src: "images/deportation_acadien.png"
  },
  "revolte_pontiact.png": {
    src: "images/revolte_pontiact.png"
  },
  "loyalistes_province_quebec": {
    src: "images/loyalistes_province_quebec"
  },
  "recensement_colonie.png": {
    src: "images/recensement_colonie.png"
  },
  "commerce_fourrures.png": {
    src: "images/commerce_fourrures.png"
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
  },
  {
    id: "Q4",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P3 — 1760 – 1791",
    points: 2,
    enonce: "Les documents A à D font référence aux rapports de force entre les empires coloniaux français et britannique. Indiquez si les faits présentés dans ces documents se déroulent avant ou après la capitulation de Montréal.",
    aspects: [
      {
        aspect: "Proclamation royale"
      },
      {
        aspect: "Régime militaire"
      },
      {
        aspect: "Statut des Indiens"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A - La déportation des Acadiens",
            ref: "deportation_acadien.png"
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Sa Majesté Britannique convient en outre, que les Habitants Français ou autres, qui auraient été Sujets du Roy Très Chrétien en Canada, pourront se retirer en toute Sûreté & Liberté, où bon leur semblera, et pourront vendre leurs Biens, pourvu que ce soit à des Sujets de Sa Majesté Britannique […] »",
            source: "Adam SHORTT et Arthur G. DOUGHTY, Documents concernant l’histoire constitutionnelle du Canada : 1759-1791, Ottawa, C. H. Parmelee, 1911, p. 60. [Texte adapté]"
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C - La révolte de Pontiac",
            ref: "revolte_pontiact.png"
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« Au moment où Québec est assiégée, les forts de l’Ouest sont abandonnés et les garnisons transportées à Québec ou dans les forts de la vallée du Richelieu […] Le chevalier de Lévis remporte une […] victoire au printemps […] à Sainte-Foy, près de Québec. Mais comme les Anglais contrôlent la navigation sur le fleuve et que des renforts arrivent de la Grande-Bretagne, il doit retraiter […] »",
            source: "Jean-Pierre CHARLAND, À l’aube du XXIe siècle, avec la collaboration de Jacques Saint-Pierre, manuel de l’élève, histoire du Québec et du Canada, 4e secondaire, Montréal, Lidec, 1997, p. 144."
          }
        ]
      }
    ],
    reponse: {
      type: "tableau_3col",
      col1: "Avant",
      col2: "La capitulation de Montréal",
      col3: "Après"
    },
    guide: "1 et 4 / 2 et 3"
  },
  {
    id: "Q5",
    niveau: 3,
    oi: "Situer dans l'espace",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "À partir du document A, indiquez la lettre qui correspond à une région de la Province de Québec où s’établissent des Loyalistes.",
    aspects: [
      {
        aspect: "Loyalistes"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "loyalistes_province_quebec"
          }
        ]
      }
    ],
    reponse: {
      type: "tableau_2col"
    },
    guide: "A"
  },
  {
    id: "Q6",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P3 — 1760 – 1791",
    points: 3,
    enonce: "Les documents A à C présentent la position de trois acteurs à l’égard de l’Acte de Québec. Nommez l’acteur qui présente une position différente et comparez sa position à celle des deux autres acteurs.",
    aspects: [
      {
        aspect: "Acte de Québec"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« […] les seigneurs, qui se voient offrir des fonctions civiles et militaires, qui […] assistent à la pleine restauration des lois traditionnelles sur la propriété (c’est-à-dire le régime seigneurial), pèseront […] de tout leur prestige en faveur de l’appui au gouvernement. »",
            source: "Jean-Pierre CHARLAND, À l’aube du XXIe siècle, avec la collaboration de Jacques Saint-Pierre, manuel de l’élève, histoire du Québec et du Canada, 4e secondaire, Montréal, Lidec, \n1997, p. 166."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« [Les] marchands britanniques de la vallée du Saint-Laurent […] ne cachent pas leur indignation devant les concessions accordées aux Canadiens. […] ils acceptent difficilement le refus de créer une chambre d’assemblée, qu’ils espéraient contrôler. Ils entreprennent aussitôt, auprès des autorités, une campagne visant le retrait de l’Acte de Québec. »",
            source: "Jean-François CARDIN et autres, Le Québec : héritages et projets, 2e éd., Laval, Éditions HRW, 1994, p.170."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« […] l’Acte de Québec confirme la tolérance accordée au catholicisme et rend obligatoire pour les catholiques le paiement de la dîme.\n\nEn contrepartie, le clergé catholique collabore avec les gouverneurs britanniques. L’évêque et les curés prêchent aux Canadiens la loyauté et la soumission envers le souverain d’Angleterre. »",
            source: "Christophe HORGUELIN et autres, Fresques, manuel de l’élève, histoire et éducation à la citoyenneté, 2e année du 2e cycle du secondaire, Montréal, Graficor, 2009, t. 2, p. 120."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "Les marchands, car ils sont insatisfaits (ou ils s’y opposent) (la différence), alors que le clergé et les seigneurs l’appuient (la similitude)."
  },
  {
    id: "Q7",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    enonce: "Les documents A et B le point de vue de deux historiens sur les Rébellions de 1837-1838. Sur quel point précis sont-ils en désaccord?",
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
            texte: "« Malgré toute l’énergie déployée par d’enthousiastes Fils de la liberté montréalais, la majeure partie de la population de la province n’était pas plus en faveur d’une action militaire que ne l’était Papineau lui-même jusqu’à la dernière minute. »\n\nElinor Kyte Senior, 1985",
            source: "« Ces soulèvements avaient […] des racines assez solides dans la masse1. Ils n’ont pas échoué  faute de motivations suffisantes dans les milieux populaires ou par pénurie de fusils. […] Le problème se situe d’abord au niveau de la qualité du leadership fourni par les élites [professionnelles] qui encadraient le mouvement insurrectionnel. »\n \nFernand Ouellet, 196"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "L’appui de la population aux Rébellions."
  },
  {
    id: "Q8",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    enonce: "À partir du document A, indiquez une cause de la rivalité entre la Nouvelle-France et les colonies britanniques à partir du 17e siècle.",
    aspects: [
      {
        aspect: "Guerres intercoloniales"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "commerce_fourrures.png",
            source: "MEES."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Le commerce des fourrures ou le contrôle du territoire ou la rivalité entre les métropoles."
  },
  {
    id: "Q9",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    enonce: "Des politiques d’immigration et de natalité ont été mises en place en Nouvelle-France dans la deuxième moitié du 17e siècle. Inscrivez la lettre du document qui présente une cause de ces politiques et la lettre de celui qui en présente une conséquence.",
    aspects: [
      {
        aspect: "Croissance de la population"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Après avoir visité avec soin presque toutes les habitations du Canada […], j’ai trouvé partout des familles très nombreuses. Les pères et mères ont d’ordinaire 10 ou 12 enfants et, assez souvent, 15, 16, 17, et les ayant interrogés bien des fois combien il en était mort, la plupart ont répondu aucun […] »",
            source: "Jacques de Meulles, intendant"
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B - Données sur les célibataires lors d’un recensement dans la colonie",
            ref: "recensement_colonie.png",
            source: "MEES."
          }
        ]
      }
    ],
    reponse: {
      type: "tableau",
      lignes: [
        {
          label: "Cause"
        },
        {
          label: "Conséquence"
        }
      ]
    },
    guide: {
      type: "tableau",
      lignes: [
        {
          label: "Cause",
          valeur: "B"
        },
        {
          label: "Conséquence",
          valeur: "1"
        }
      ]
    }
  }
]
