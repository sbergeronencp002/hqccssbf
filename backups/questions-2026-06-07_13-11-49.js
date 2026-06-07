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
  "Q11": {
    oi: "Déterminer des changements et des continuités",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la continuité."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la continuité."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la continuité ou ne la détermine pas."
      }
    ]
  },
  "Q12": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: []
  },
  "Q13": {
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
  "Q14": {
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
  "Q15": {
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
  "Q16": {
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
  "Q17": {
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
  "Q18": {
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
  "Q19": {
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
  "Q20": {
    oi: "Dégager des différences et des similitudes",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève dégage correctement la différence."
      },
      {
        pts: 1,
        desc: "L'élève dégage plus ou moins correctement la différence."
      },
      {
        pts: 0,
        desc: "L'élève dégage incorrectement la différence ou ne la dégage pas."
      }
    ]
  },
  "Q21": {
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
  "Q22": {
    oi: "Dégager des différences et des similitudes",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève établit correctement le point de convergence entre les points de vue."
      },
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."
      },
      {
        pts: 0,
        desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."
      }
    ]
  },
  "Q33": {
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
  "Q37": {
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
  "Q29": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: []
  },
  "Q28": {
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
  "Q27": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: []
  },
  "Q23": {
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
  "Q24": {
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
  "Q25": {
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
  "Q26": {
    oi: "Déterminer des changements et des continuités",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la continuité."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la continuité."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la continuité ou ne la détermine pas."
      }
    ]
  },
  "Q30": {
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
  "Q31": {
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
  "Q32": {
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
  "Q34": {
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
  "Q35": {
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
  "Q36": {
    oi: "Mettre en relation des faits",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève met en relation tous les faits. (2 sur 2)"
      },
      {
        pts: 1,
        desc: "L'élève met en relation certains faits. (1 sur 2)"
      },
      {
        pts: 0,
        desc: "L'élève ne met pas en relation les faits. (0 sur 2)"
      }
    ]
  },
  "Q38": {
    oi: "Dégager des différences et des similitudes",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève établit correctement le point de convergence entre les points de vue."
      },
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."
      },
      {
        pts: 0,
        desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."
      }
    ]
  },
  "Q39": {
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
  "Q40": {
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
  "Q41": {
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
  "Q42": {
    oi: "Dégager des différences et des similitudes",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève établit correctement le point de convergence entre les points de vue."
      },
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."
      },
      {
        pts: 0,
        desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."
      }
    ]
  },
  "Q43": {
    oi: "Dégager des différences et des similitudes",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève établit correctement le point de convergence entre les points de vue."
      },
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."
      },
      {
        pts: 0,
        desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."
      }
    ]
  },
  "Q44": {
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
  "Q45": {
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
  "Q46": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la conséquence."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la conséquence."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."
      }
    ]
  },
  "Q47": {
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
  "Q48": {
    oi: "Dégager des différences et des similitudes",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève établit correctement le point de convergence entre les points de vue."
      },
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."
      },
      {
        pts: 0,
        desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."
      }
    ]
  },
  "Q49": {
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
  "Q50": {
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
  "Q51": {
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
  "Q52": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la conséquence."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la conséquence."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."
      }
    ]
  },
  "Q53": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la conséquence."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la conséquence."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."
      }
    ]
  },
  "Q54": {
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
  "Q55": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la conséquence."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la conséquence."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."
      }
    ]
  },
  "Q56": {
    oi: "Dégager des différences et des similitudes",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève établit correctement le point de convergence entre les points de vue."
      },
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."
      },
      {
        pts: 0,
        desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."
      }
    ]
  },
  "Q57": {
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
  "Q58": {
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
  "Q59": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la conséquence."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la conséquence."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."
      }
    ]
  },
  "Q60": {
    oi: "Dégager des différences et des similitudes",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève établit correctement le point de convergence entre les points de vue."
      },
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."
      },
      {
        pts: 0,
        desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."
      }
    ]
  },
  "Q61": {
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
  "Q62": {
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
  "Q63": {
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
  "Q64": {
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
  "Q65": {
    oi: "Dégager des différences et des similitudes",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève établit correctement le point de convergence entre les points de vue."
      },
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."
      },
      {
        pts: 0,
        desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."
      }
    ]
  },
  "Q66": {
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
  "Q67": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: []
  },
  "Q68": {
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
  "Q69": {
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
  "Q70": {
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
  "Q71": {
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
  "Q72": {
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
  "Q73": {
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
  "Q74": {
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
  "Q75": {
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
  "Q76": {
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
  "Q77": {
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
  "Q78": {
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
  "Q79": {
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
  "Q80": {
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
  "Q81": {
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
  "Q82": {
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
  "Q83": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la conséquence."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la conséquence."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."
      }
    ]
  },
  "Q84": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la conséquence."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la conséquence."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."
      }
    ]
  },
  "Q85": {
    oi: "Situer dans l'espace",
    colonnes: [
      "2 points",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève situe les faits dans l'espace."
      },
      {
        pts: 0,
        desc: "L'élève ne situe pas les faits dans l'espace."
      }
    ]
  },
  "Q86": {
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
  "Q87": {
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
  "Q88": {
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
  "Q89": {
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
  "Q90": {
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
  "Q91": {
    oi: "Dégager des différences et des similitudes",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève établit correctement le point de convergence entre les points de vue."
      },
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."
      },
      {
        pts: 0,
        desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."
      }
    ]
  },
  "Q92": {
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
  "Q93": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 3,
        desc: "L'élève nomme correctement l'acteur qui présente une position différente ET présente correctement les deux positions."
      },
      {
        pts: 2,
        desc: "L'élève nomme correctement l'acteur ET présente correctement une position et plus ou moins correctement l'autre."
      },
      {
        pts: 1,
        desc: "L'élève nomme correctement l'acteur ET présente plus ou moins correctement les deux positions, OU présente correctement une position et incorrectement l'autre ou ne la présente pas."
      },
      {
        pts: 0,
        desc: "L'élève présente au mieux une position plus ou moins correctement, OU nomme incorrectement l'acteur ou ne le nomme pas."
      }
    ]
  },
  "Q94": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: []
  },
  "Q95": {
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
  "Q96": {
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
  "Q97": {
    oi: "Déterminer des changements et des continuités",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la continuité."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la continuité."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la continuité ou ne la détermine pas."
      }
    ]
  },
  "Q98": {
    oi: "Déterminer des changements et des continuités",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la continuité."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la continuité."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la continuité ou ne la détermine pas."
      }
    ]
  },
  "Q99": {
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
  "Q100": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 3,
        desc: "L'élève nomme correctement l'acteur qui présente une position différente ET présente correctement les deux positions."
      },
      {
        pts: 2,
        desc: "L'élève nomme correctement l'acteur ET présente correctement une position et plus ou moins correctement l'autre."
      },
      {
        pts: 1,
        desc: "L'élève nomme correctement l'acteur ET présente plus ou moins correctement les deux positions, OU présente correctement une position et incorrectement l'autre ou ne la présente pas."
      },
      {
        pts: 0,
        desc: "L'élève présente au mieux une position plus ou moins correctement, OU nomme incorrectement l'acteur ou ne le nomme pas."
      }
    ]
  },
  "Q101": {
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
  "Q102": {
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
  "Q103": {
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
  "Q104": {
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
  "Q105": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la conséquence."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la conséquence."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."
      }
    ]
  },
  "Q106": {
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
  "Q107": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la conséquence."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la conséquence."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."
      }
    ]
  },
  "Q108": {
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
  "Q109": {
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
  "Q110": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: []
  },
  "Q111": {
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
  "Q112": {
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
  "Q113": {
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
  "Q114": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la conséquence."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la conséquence."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."
      }
    ]
  },
  "Q115": {
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
  "Q116": {
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
  "Q117": {
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
  "Q118": {
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
  "Q119": {
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
  "Q120": {
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
  "Q121": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la conséquence."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la conséquence."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."
      }
    ]
  },
  "Q122": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la conséquence."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la conséquence."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."
      }
    ]
  },
  "Q123": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: []
  },
  "Q124": {
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
  "Q125": {
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
  "Q126": {
    oi: "Mettre en relation des faits",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève met en relation tous les faits. (2 sur 2)"
      },
      {
        pts: 1,
        desc: "L'élève met en relation certains faits. (1 sur 2)"
      },
      {
        pts: 0,
        desc: "L'élève ne met pas en relation les faits. (0 sur 2)"
      }
    ]
  },
  "Q127": {
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
  "Q128": {
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
  "Q129": {
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
  "Q130": {
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
  "Q131": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: []
  },
  "Q132": {
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
  "Q133": {
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
  "Q134": {
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
  "Q135": {
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
  "Q136": {
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
  "Q137": {
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
  "Q138": {
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
  "Q139": {
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
  "Q140": {
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
  "Q141": {
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
  "Q142": {
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
  "Q143": {
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
  "Q144": {
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
  "Q145": {
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
  "Q146": {
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
  "Q147": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la conséquence."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la conséquence."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."
      }
    ]
  },
  "Q148": {
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
  "Q149": {
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
  "Q150": {
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
  "Q151": {
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
  "Q152": {
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
  "Q153": {
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
  "Q154": {
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
  "Q155": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la conséquence."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la conséquence."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."
      }
    ]
  },
  "Q156": {
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
  "Q157": {
    oi: "Dégager des différences et des similitudes",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève dégage correctement la différence."
      },
      {
        pts: 1,
        desc: "L'élève dégage plus ou moins correctement la différence."
      },
      {
        pts: 0,
        desc: "L'élève dégage incorrectement la différence ou ne la dégage pas."
      }
    ]
  },
  "Q158": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la conséquence."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la conséquence."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."
      }
    ]
  },
  "Q159": {
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
  "Q160": {
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
  "Q161": {
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
  "Q162": {
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
  "Q163": {
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
  "Q164": {
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
  "Q165": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 3,
        desc: "L'élève nomme correctement l'acteur qui présente une position différente ET présente correctement les deux positions."
      },
      {
        pts: 2,
        desc: "L'élève nomme correctement l'acteur ET présente correctement une position et plus ou moins correctement l'autre."
      },
      {
        pts: 1,
        desc: "L'élève nomme correctement l'acteur ET présente plus ou moins correctement les deux positions, OU présente correctement une position et incorrectement l'autre ou ne la présente pas."
      },
      {
        pts: 0,
        desc: "L'élève présente au mieux une position plus ou moins correctement, OU nomme incorrectement l'acteur ou ne le nomme pas."
      }
    ]
  },
  "Q166": {
    oi: "Dégager des différences et des similitudes",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève établit correctement le point de convergence entre les points de vue."
      },
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."
      },
      {
        pts: 0,
        desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."
      }
    ]
  },
  "Q167": {
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
  "Q168": {
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
  "Q169": {
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
  "Q170": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: []
  },
  "Q171": {
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
  "Q172": {
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
  "Q173": {
    oi: "Situer dans l'espace",
    colonnes: [
      "2 points",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève situe les faits dans l'espace."
      },
      {
        pts: 0,
        desc: "L'élève ne situe pas les faits dans l'espace."
      }
    ]
  },
  "Q174": {
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
  "Q175": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: []
  },
  "Q176": {
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
  "Q177": {
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
  "Q178": {
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
  "Q179": {
    oi: "Dégager des différences et des similitudes",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève établit correctement le point de convergence entre les points de vue."
      },
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."
      },
      {
        pts: 0,
        desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."
      }
    ]
  },
  "Q180": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: []
  },
  "Q181": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la conséquence."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la conséquence."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."
      }
    ]
  },
  "Q182": {
    oi: "Déterminer des changements et des continuités",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la continuité."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la continuité."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la continuité ou ne la détermine pas."
      }
    ]
  },
  "Q183": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: []
  },
  "Q184": {
    oi: "Dégager des différences et des similitudes",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève établit correctement le point de convergence entre les points de vue."
      },
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."
      },
      {
        pts: 0,
        desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."
      }
    ]
  },
  "Q185": {
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
  "Q186": {
    oi: "Dégager des différences et des similitudes",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève dégage correctement la similitude."
      },
      {
        pts: 1,
        desc: "L'élève dégage plus ou moins correctement la similitude."
      },
      {
        pts: 0,
        desc: "L'élève dégage incorrectement la similitude ou ne la dégage pas."
      }
    ]
  },
  "Q187": {
    oi: "Dégager des différences et des similitudes",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève dégage correctement la similitude."
      },
      {
        pts: 1,
        desc: "L'élève dégage plus ou moins correctement la similitude."
      },
      {
        pts: 0,
        desc: "L'élève dégage incorrectement la similitude ou ne la dégage pas."
      }
    ]
  },
  "Q188": {
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
  "Q189": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 3,
        desc: "L'élève nomme correctement l'acteur qui présente une position différente ET présente correctement les deux positions."
      },
      {
        pts: 2,
        desc: "L'élève nomme correctement l'acteur ET présente correctement une position et plus ou moins correctement l'autre."
      },
      {
        pts: 1,
        desc: "L'élève nomme correctement l'acteur ET présente plus ou moins correctement les deux positions, OU présente correctement une position et incorrectement l'autre ou ne la présente pas."
      },
      {
        pts: 0,
        desc: "L'élève présente au mieux une position plus ou moins correctement, OU nomme incorrectement l'acteur ou ne le nomme pas."
      }
    ]
  },
  "Q190": {
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
  "Q191": {
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
  "Q192": {
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
  "Q193": {
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
  "Q194": {
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
  "Q195": {
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
  "Q196": {
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
  "Q197": {
    oi: "Déterminer des changements et des continuités",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la continuité."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la continuité."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la continuité ou ne la détermine pas."
      }
    ]
  },
  "Q198": {
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
  "Q199": {
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
  "Q200": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la conséquence."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la conséquence."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."
      }
    ]
  },
  "Q201": {
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
  "Q202": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: []
  },
  "Q203": {
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
  "Q204": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la conséquence."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la conséquence."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."
      }
    ]
  },
  "Q205": {
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
  "Q206": {
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
  "Q207": {
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
  "Q208": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la conséquence."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la conséquence."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."
      }
    ]
  },
  "Q209": {
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
  "Q210": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la conséquence."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la conséquence."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."
      }
    ]
  },
  "Q211": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la conséquence."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la conséquence."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."
      }
    ]
  },
  "Q212": {
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
  "Q213": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 3,
        desc: "L'élève nomme correctement l'acteur qui présente une position différente ET présente correctement les deux positions."
      },
      {
        pts: 2,
        desc: "L'élève nomme correctement l'acteur ET présente correctement une position et plus ou moins correctement l'autre."
      },
      {
        pts: 1,
        desc: "L'élève nomme correctement l'acteur ET présente plus ou moins correctement les deux positions, OU présente correctement une position et incorrectement l'autre ou ne la présente pas."
      },
      {
        pts: 0,
        desc: "L'élève présente au mieux une position plus ou moins correctement, OU nomme incorrectement l'acteur ou ne le nomme pas."
      }
    ]
  },
  "Q214": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 3,
        desc: "L'élève nomme correctement l'acteur qui présente une position différente ET présente correctement les deux positions."
      },
      {
        pts: 2,
        desc: "L'élève nomme correctement l'acteur ET présente correctement une position et plus ou moins correctement l'autre."
      },
      {
        pts: 1,
        desc: "L'élève nomme correctement l'acteur ET présente plus ou moins correctement les deux positions, OU présente correctement une position et incorrectement l'autre ou ne la présente pas."
      },
      {
        pts: 0,
        desc: "L'élève présente au mieux une position plus ou moins correctement, OU nomme incorrectement l'acteur ou ne le nomme pas."
      }
    ]
  },
  "Q215": {
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
  "Q216": {
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
  "Q217": {
    oi: "Dégager des différences et des similitudes",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève établit correctement le point de convergence entre les points de vue."
      },
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."
      },
      {
        pts: 0,
        desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."
      }
    ]
  },
  "Q218": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 3,
        desc: "L'élève nomme correctement l'acteur qui présente une position différente ET présente correctement les deux positions."
      },
      {
        pts: 2,
        desc: "L'élève nomme correctement l'acteur ET présente correctement une position et plus ou moins correctement l'autre."
      },
      {
        pts: 1,
        desc: "L'élève nomme correctement l'acteur ET présente plus ou moins correctement les deux positions, OU présente correctement une position et incorrectement l'autre ou ne la présente pas."
      },
      {
        pts: 0,
        desc: "L'élève présente au mieux une position plus ou moins correctement, OU nomme incorrectement l'acteur ou ne le nomme pas."
      }
    ]
  },
  "Q219": {
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
  "Q220": {
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
  "Q221": {
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
  "Q222": {
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
  "Q223": {
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
  "Q224": {
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
  "Q225": {
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
  "Q226": {
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
  "Q227": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la conséquence."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la conséquence."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."
      }
    ]
  },
  "Q228": {
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
  "Q229": {
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
  "Q230": {
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
  "Q231": {
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
  "Q232": {
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
  "Q233": {
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
  "Q234": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: []
  },
  "Q235": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève détermine correctement la conséquence."
      },
      {
        pts: 1,
        desc: "L'élève détermine plus ou moins correctement la conséquence."
      },
      {
        pts: 0,
        desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."
      }
    ]
  },
  "Q236": {
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
  "Q237": {
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
  "Q238": {
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
  "Q239": {
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
  "Q240": {
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
  "Q241": {
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
  "Q242": {
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
  "Q243": {
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
  "Q244": {
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
  "Q245": {
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
  "Q246": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: []
  },
  "Q247": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: []
  },
  "Q248": {
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
  "Q249": {
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
  "Q250": {
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
  "Q251": {
    oi: "Dégager des différences et des similitudes",
    colonnes: [
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: [
      {
        pts: 2,
        desc: "L'élève établit correctement le point de convergence entre les points de vue."
      },
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."
      },
      {
        pts: 0,
        desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."
      }
    ]
  },
  "Q252": {
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
  "Q253": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: [
      "3 points",
      "2 points",
      "1 point",
      "0 point"
    ],
    niveaux: []
  },
  "Q254": {
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
  }
}

const IMAGE_DB = {
  "fondation_quebec_1608.png": {
    src: "images/fondation_quebec_1608.png"
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
  "loyalistes_province_quebec.png": {
    src: "images/loyalistes_province_quebec.png"
  },
  "territoire_acte_const.png": {
    src: "images/territoire_acte_const.png"
  },
  "troc_1700.png": {
    src: "images/troc_1700.png"
  },
  "troc_1600.png": {
    src: "images/troc_1600.png"
  },
  "papineau_foule.png": {
    src: "images/papineau_foule.png"
  },
  "camp_oui_1995.png": {
    src: "images/camp_oui_1995.png"
  },
  "rapatriment_constitution.png": {
    src: "images/rapatriment_constitution.png"
  },
  "chrono_dbAc.png": {
    src: "images/chrono_dbAc.png"
  },
  "crise_oka.png": {
    src: "images/crise_oka.png"
  },
  "ligne_1950-2010.png": {
    src: "images/ligne_1950-2010.png"
  },
  "logos_societe_etat.png": {
    src: "images/logos_societe_etat.png"
  },
  "barrages_hydro_baie_james.png": {
    src: "images/barrages_hydro_baie_james.png"
  },
  "territoire_exploite_minerai_fer.png": {
    src: "images/territoire_exploite_minerai_fer.png"
  },
  "org_pol_acte_union.png": {
    src: "images/org_pol_acte_union.png"
  },
  "org_pol_acte_const.png": {
    src: "images/org_pol_acte_const.png"
  },
  "familles_linguistiques_autochtones.png": {
    src: "images/familles_linguistiques_autochtones.png"
  },
  "familles_linguistiques_autochtones_lettres.png": {
    src: "images/familles_linguistiques_autochtones_lettres.png"
  },
  "campement_algonquien.png": {
    src: "images/campement_algonquien.png"
  },
  "victoire_pq_1976.png": {
    src: "images/victoire_pq_1976.png"
  },
  "tradition_orale.jpg": {
    src: "images/tradition_orale.jpg"
  },
  "1500_chaman.jpg": {
    src: "images/1500_chaman.jpg"
  },
  "1500_reseau_echanges.png": {
    src: "images/1500_reseau_echanges.png"
  },
  "cause_rivalites_coloniales.png": {
    src: "images/cause_rivalites_coloniales.png"
  },
  "recensement_colonie_n-f.png": {
    src: "images/recensement_colonie_n-f.png"
  },
  "echanges_canada_etats-unis_1850-1860.png": {
    src: "images/echanges_canada_etats-unis_1850-1860.png"
  },
  "portrait_guy_carleton.png": {
    src: "images/portrait_guy_carleton.png"
  },
  "james_murray.png": {
    src: "images/james_murray.png"
  },
  "ligne_1475-1575.png": {
    src: "images/ligne_1475-1575.png"
  },
  "carte_seigneurie_n-f.png": {
    src: "images/carte_seigneurie_n-f.png"
  },
  "graphique_pop_autochtone_n-f.png": {
    src: "images/graphique_pop_autochtone_n-f.png"
  },
  "carte_amerique_nord_1700.png": {
    src: "images/carte_amerique_nord_1700.png"
  },
  "carte_amerique_nord_1700_lettres.png": {
    src: "images/carte_amerique_nord_1700_lettres.png"
  },
  "evangelisation_n-f.jpg": {
    src: "images/evangelisation_n-f.jpg"
  },
  "education_n-f.jpg": {
    src: "images/education_n-f.jpg"
  },
  "debarquement_plaines_abraham.png": {
    src: "images/debarquement_plaines_abraham.png"
  },
  "ligne_1600-1800.png": {
    src: "images/ligne_1600-1800.png"
  },
  "jacques_cartier_1534.png": {
    src: "images/jacques_cartier_1534.png"
  },
  "ligne_abDc.png": {
    src: "images/ligne_abDc.png"
  },
  "commence_fourrure_n-f.png": {
    src: "images/commence_fourrure_n-f.png"
  },
  "carte_terr_acte_quebec.png": {
    src: "images/carte_terr_acte_quebec.png"
  },
  "carte_terr_proclamation_royale.png": {
    src: "images/carte_terr_proclamation_royale.png"
  },
  "exportations_nouvelle_france_1755.png": {
    src: "images/exportations_nouvelle_france_1755.png"
  },
  "exportations_province_quebec_1770.png": {
    src: "images/exportations_province_quebec_1770.png"
  },
  "1760-1840_accroissement_naturel.png": {
    src: "images/1760-1840_accroissement_naturel.png"
  },
  "1791-1840_grosse_ile.png": {
    src: "images/1791-1840_grosse_ile.png"
  },
  "1820_immigration_irlandaise.png": {
    src: "images/1820_immigration_irlandaise.png"
  },
  "execution_patriotes.png": {
    src: "images/execution_patriotes.png"
  },
  "bataille_st-eustache.png": {
    src: "images/bataille_st-eustache.png"
  },
  "exportations_bois_1800_1840.png": {
    src: "images/exportations_bois_1800_1840.png"
  },
  "1763.png": {
    src: "images/1763.png"
  },
  "1783.png": {
    src: "images/1783.png"
  },
  "loyalistes.png": {
    src: "images/loyalistes.png"
  },
  "voyages_exploration.png": {
    src: "images/voyages_exploration.png"
  },
  "premiers_contacts": {
    src: "images/premiers_contacts"
  },
  "graphique_poste_de_traite_1780.png": {
    src: "images/graphique_poste_de_traite_1780.png"
  },
  "mercantilisme_fourrures_n-f.png": {
    src: "images/mercantilisme_fourrures_n-f.png"
  },
  "destruction_huronie.png": {
    src: "images/destruction_huronie.png"
  },
  "ligne_bcAd.png": {
    src: "images/ligne_bcAd.png"
  },
  "gravure_destruction_huronie.png": {
    src: "images/gravure_destruction_huronie.png"
  },
  "exportations_fourrures_huronie.png": {
    src: "images/exportations_fourrures_huronie.png"
  },
  "ligne_1575-1775.png": {
    src: "images/ligne_1575-1775.png"
  },
  "grahique_b_exportations_fourrures_huronie.png": {
    src: "images/grahique_b_exportations_fourrures_huronie.png"
  },
  "village_domicilie_autochtone.png": {
    src: "images/village_domicilie_autochtone.png"
  },
  "filles_du_roy.png": {
    src: "images/filles_du_roy.png"
  },
  "ligne_1600-1700.png": {
    src: "images/ligne_1600-1700.png"
  },
  "quebec_frere_kirke.png": {
    src: "images/quebec_frere_kirke.png"
  },
  "siege_quebec_1690.png": {
    src: "images/siege_quebec_1690.png"
  },
  "fondation_tadoussac.png": {
    src: "images/fondation_tadoussac.png"
  },
  "fondation_quebec.png": {
    src: "images/fondation_quebec.png"
  },
  "fondation_mtl.png": {
    src: "images/fondation_mtl.png"
  },
  "fondation_t-r.png": {
    src: "images/fondation_t-r.png"
  },
  "colon_louis_hebert.png": {
    src: "images/colon_louis_hebert.png"
  },
  "regiment_car-salieres.png": {
    src: "images/regiment_car-salieres.png"
  },
  "fondation_qubec_1608.png": {
    src: "images/fondation_qubec_1608.png"
  },
  "grande_paix_mtl.png": {
    src: "images/grande_paix_mtl.png"
  },
  "chantier_naval.png": {
    src: "images/chantier_naval.png"
  },
  "mercantilisme_nf.png": {
    src: "images/mercantilisme_nf.png"
  },
  "conseil_souverain.png": {
    src: "images/conseil_souverain.png"
  },
  "territoire_occupe_1650.png": {
    src: "images/territoire_occupe_1650.png"
  },
  "territoire_revendique_france_1700.png": {
    src: "images/territoire_revendique_france_1700.png"
  },
  "territoire_occupe_1700.png": {
    src: "images/territoire_occupe_1700.png"
  },
  "carte_premiers_occ_peuplement.png": {
    src: "images/carte_premiers_occ_peuplement.png"
  },
  "territoire_revendique_1713.png": {
    src: "images/territoire_revendique_1713.png"
  },
  "territoire_revendique_1700.png": {
    src: "images/territoire_revendique_1700.png"
  },
  "exploration_territoire_1700.png": {
    src: "images/exploration_territoire_1700.png"
  },
  "territoires_perdus_1713.png": {
    src: "images/territoires_perdus_1713.png"
  },
  "org_pol_apres_1663.png": {
    src: "images/org_pol_apres_1663.png"
  },
  "graphique_population_nouvelle_france_1627-1663.png": {
    src: "images/graphique_population_nouvelle_france_1627-1663.png"
  },
  "paroisse_n-f.png": {
    src: "images/paroisse_n-f.png"
  },
  "org_pol_avant_1663.png": {
    src: "images/org_pol_avant_1663.png"
  },
  "regime_seigneurial_n-f.png": {
    src: "images/regime_seigneurial_n-f.png"
  },
  "origines_geo_1670.png": {
    src: "images/origines_geo_1670.png"
  },
  "origines_geo_1740.png": {
    src: "images/origines_geo_1740.png"
  },
  "origines_sociale_1670.png": {
    src: "images/origines_sociale_1670.png"
  },
  "origines_sociale_1740.png": {
    src: "images/origines_sociale_1740.png"
  },
  "place_publique_qc.png": {
    src: "images/place_publique_qc.png"
  },
  "place_publique_mtl.png": {
    src: "images/place_publique_mtl.png"
  },
  "huron_1600.png": {
    src: "images/huron_1600.png"
  },
  "huron_1700.png": {
    src: "images/huron_1700.png"
  },
  "agriculture_1670.png": {
    src: "images/agriculture_1670.png"
  },
  "agriculture_1750.png": {
    src: "images/agriculture_1750.png"
  },
  "commerce_triangulaire.png": {
    src: "images/commerce_triangulaire.png"
  },
  "activites_eco_1670.png": {
    src: "images/activites_eco_1670.png"
  },
  "activites_eco_1750.png": {
    src: "images/activites_eco_1750.png"
  },
  "activites_habitants_n-f_1740.png": {
    src: "images/activites_habitants_n-f_1740.png"
  },
  "activies_econiques_1663_1740.png": {
    src: "images/activies_econiques_1663_1740.png"
  },
  "eglise_catholique_n-f_1700.png": {
    src: "images/eglise_catholique_n-f_1700.png"
  },
  "traversee_atlantique_1700.png": {
    src: "images/traversee_atlantique_1700.png"
  },
  "maison_1650.png": {
    src: "images/maison_1650.png"
  },
  "maison_1700.png": {
    src: "images/maison_1700.png"
  },
  "coureur_bois_n-f.png": {
    src: "images/coureur_bois_n-f.png"
  },
  "canot_ecorce.png": {
    src: "images/canot_ecorce.png"
  },
  "invasion_americaine.png": {
    src: "images/invasion_americaine.png"
  },
  "ligne_1760-1800.png": {
    src: "images/ligne_1760-1800.png"
  },
  "capitulation_mtl_1760.png": {
    src: "images/capitulation_mtl_1760.png"
  },
  "ligne_1755-1795.png": {
    src: "images/ligne_1755-1795.png"
  },
  "revolte_pontiac.png": {
    src: "images/revolte_pontiac.png"
  },
  "arrivee_loyalistes.png": {
    src: "images/arrivee_loyalistes.png"
  },
  "regime_militaire_org_pol.png": {
    src: "images/regime_militaire_org_pol.png"
  },
  "carte_proclamation_royale_territoire.png": {
    src: "images/carte_proclamation_royale_territoire.png"
  },
  "org_pol_apres_1763.png": {
    src: "images/org_pol_apres_1763.png"
  },
  "org_pol_apres_1784.png": {
    src: "images/org_pol_apres_1784.png"
  }
}

const QUESTIONS = [
  {
    id: "Q1",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Nommez une nation autochtone qui conclut une alliance avec Champlain et François Gravé du Pont en 1603.",
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
    soustag: "Ordre chronologique",
    enonce: "Les documents A à D présentent des faits relatifs aux premières tentatives d’établissement d’Européens en Amérique du Nord. Placez-les par ordre chronologique.",
    aspects: [
      {
        aspect: "Exploration et occupation du territoire par les Français"
      },
      {
        aspect: "Premiers contacts"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "fondation_quebec_1608.png",
            soustitre: "Fondation de Québec et construction de l’Habitation"
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
            source: "Jean-Pierre CHARLAND, À l’aube du XXIe siècle, avec la collaboration de Jacques  Saint-Pierre, manuel de l’élève, histoire du Québec et du Canada, 4e secondaire, Montréal, Lidec, 1997, p. 17."
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
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
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
            titre: "Document A",
            ref: "bataille_lac_champlain.png",
            soustitre: "Bataille du lac Champlain",
            source: "Bibliothèque et Archives nationales du Québec (BAnQ)."
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
    soustag: "Avant et après",
    enonce: "Les documents A à D présentent des événements marquants de l'histoire de la Province de Québec. Indiquez si chacun de ces événements se déroule avant ou après l'Acte de Québec (1774).",
    aspects: [
      {
        aspect: "Invasion américaine"
      },
      {
        aspect: "Proclamation royale"
      },
      {
        aspect: "Régime militaire"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les représentants des Treize Colonies en viennent à la conclusion que leurs droits ne peuvent plus être protégés au sein de l'Empire britannique. Ils choisissent alors de rompre leurs liens politiques avec la métropole et d'affirmer leur droit de se gouverner eux-mêmes. »",
            soustitre: "Déclaration d'indépendance des États-Unis",
            source: "Texte adapté de Alan Taylor, American Revolutions: A Continental History, 1750-1804, W. W. Norton & Company, 2016."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "invasion_americaine.png",
            soustitre: "Combats dans les rue de Québec lors de l'invasion américaine",
            source: "Reconstitution historique réalisée à l'aide de ChatGPT/OpenAI, inspirée de représentations de l'invasion américaine, 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "capitulation_mtl_1760.png",
            soustitre: "Capitulation de Montréal",
            source: "Reconstitution historique réalisée à l'aide de ChatGPT/OpenAI, inspirée de représentations de la capitulation de Montréal, 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« Les autorités britanniques souhaitent transformer la nouvelle colonie en introduisant les institutions politiques et juridiques anglaises. Elles espèrent ainsi intégrer progressivement les Canadiens au modèle britannique et favoriser l'arrivée d'immigrants anglophones. »",
            soustitre: "Proclamation royale",
            source: "Texte adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 2 : De 1760 à 1791, Québec Amérique, 1995."
          }
        ]
      }
    ],
    reponse: {
      type: "avant-apres",
      label: "Acte de Québec (1774)"
    },
    guide: {
      type: "grille",
      entetes: [
        "Avant",
        "Acte de Québec",
        "Après"
      ],
      rangees: [
        [
          "C et D",
          "",
          "A et B"
        ]
      ]
    },
    updatedAt: "2026-06-03T11:31:34.474Z"
  },
  {
    id: "Q5",
    niveau: 3,
    oi: "Situer dans l'espace",
    periode: "P3 — 1760 – 1791",
    points: 1,
    soustag: "Situer 1 élément",
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
            ref: "loyalistes_province_quebec.png",
            source: "MEES."
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
    soustag: "Position – 3 acteurs",
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
            source: "Jean-Pierre CHARLAND, À l’aube du XXIe siècle, avec la collaboration de Jacques Saint-Pierre, manuel de l’élève, histoire du Québec et du Canada, 4e secondaire, Montréal, Lidec, 1997, p. 166."
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
    soustag: "Divergence – 2 acteurs",
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
            texte: "« Malgré toute l’énergie déployée par d’enthousiastes Fils de la liberté montréalais, la majeure partie de la population de la province n’était pas plus en faveur d’une action militaire que ne l’était Papineau lui-même jusqu’à la dernière minute. »",
            source: "Greer, Allan. Habitants et Patriotes : la Rébellion de 1837 dans les campagnes du Bas-Canada. Montréal, Boréal, 1997."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Ces soulèvements avaient […] des racines assez solides dans la masse1. Ils n’ont pas échoué  faute de motivations suffisantes dans les milieux populaires ou par pénurie de fusils. […] Le problème se situe d’abord au niveau de la qualité du leadership fourni par les élites [professionnelles] qui encadraient le mouvement insurrectionnel. »",
            source: "Ouellet, Fernand. Le Bas-Canada, 1791-1840 : changements structuraux et crise. Ottawa, Les Presses de l’Université d’Ottawa, 1976."
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
    soustag: "Cause",
    enonce: "Indiquez une cause de la rivalité entre la Nouvelle-France et les colonies britanniques à partir du 17e siècle.",
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
            ref: "cause_rivalites_coloniales.png",
            source: "Adaptation contemporaine d’une caricature historique, réalisée avec l’aide de l’intelligence artificielle (ChatGPT, 2026)."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Le commerce des fourrures ou le contrôle du territoire ou la rivalité entre les métropoles."
  },
  {
    id: "Q9",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Cause et conséquence",
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
            auteur: "Jacques de Meulles, intendant de la Nouvelle-France.",
            source: "Kalm, Pehr. Voyage de Pehr Kalm au Canada en 1749. Traduction française publiée par Pierre-Georges Roy, Québec, 1880."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "recensement_colonie_n-f.png",
            soustitre: "Recensement des célibataires de la Nouvelle-France en 1666"
          }
        ]
      }
    ],
    reponse: {
      type: "cause-consequence"
    },
    guide: {
      type: "grille",
      entetes: [
        "Élément",
        "Document"
      ],
      rangees: [
        [
          "Cause",
          "B"
        ],
        [
          "Conséquence",
          "A"
        ]
      ]
    }
  },
  {
    id: "Q10",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Changement",
    enonce: "Indiquez le changement territorial qui survient avec l’adoption de l’Acte constitutionnel en 1791.",
    aspects: [
      {
        aspect: "Acte constitutionnel"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "territoire_acte_const.png",
            source: "MEES."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Le territoire est divisé en Haut-Canada et Bas-Canada."
  },
  {
    id: "Q11",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Continuité",
    enonce: "Indiquez un élément de continuité dans la façon de faire du commerce en Amérique du Nord durant les périodes présentées dans les documents A et B.",
    aspects: [
      {
        aspect: "Commerce des fourrures"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "troc_1600.png",
            soustitre: "Vers 1600",
            source: "MEES."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "troc_1700.png",
            soustitre: "Vers 1700",
            source: "MEES."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Le troc ou l’échange de fourrures contre d’autres produits."
  },
  {
    id: "Q12",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P4 — 1791 – 1840",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des document A et B, indiquez s’il y a changement ou continuité dans l’exercice du pouvoir politique dans la colonie. Justifiez votre choix par des faits et un repère de temps.",
    aspects: [
      {
        aspect: "Acte constitutionnel"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« […] le gouverneur [est] le personnage politique le plus important dans la colonie britannique. Il a le pouvoir de promulguer des lois et des règlements et le devoir d’assurer la sécurité des sujets dans la \ncolonie. »",
            soustitre: "De 1763 à 1791",
            source: "Alain DALONGEVILLE (dir.), Présences : une histoire thématique du Québec, manuel de l’élève, histoire et éducation à la citoyenneté, 2e année du 2e cycle du secondaire, Anjou, Les Éditions CEC, 2008, vol. 2, p. 96."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "org_pol_acte_const.png",
            soustitre: "De 1791 à 1840",
            source: "Récitus."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 4
    },
    guide: "Il y a changement, car il y a une Assemblée législative à partir de 1791 (ou car il y a mise en place d’une chambre d’assemblée durant cette période). \nou \nIl y a continuité, car le gouverneur détient tous les pouvoirs de 1763 à 1840 (ou car le gouverneur a toujours les pleins pouvoirs durant cette période)."
  },
  {
    id: "Q13",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "3 documents",
    enonce: "Les documents A à C présentent la position de différents groupes sociaux lors de la crise politique qui secoue le Bas-Canada durant les années 1830. Inscrivez à l’endroit approprié la lettre du document correspondant à chacune des positions des groupes sociaux.",
    aspects: [
      {
        aspect: "Idées libérales et républicaines"
      },
      {
        aspect: "Population"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« [...] ce groupe est composé principalement d’avocats, de notaires, de médecins et de journalistes prend une place croissante dans la vie politique du Bas-Canada et revendique une plus grande influence au sein des institutions. »",
            source: "Ouellet, Fernand. Le Bas-Canada, 1791-1840 : changements structuraux et crise. Ottawa, Presses de l’Université d’Ottawa, 1976."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« [...] ce groupe est composé principalement d'évêques et de prêtres invitent les fidèles à demeurer soumis aux autorités civiles. Ils présentent l’obéissance au gouvernement et le respect de l’ordre établi comme des devoirs essentiels du bon chrétien. »",
            source: "Trudel, Marcel. Initiation à la Nouvelle-France. Montréal, Holt, Rinehart et Winston, 1968."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« « [...] au Bas-Canada ce groupe est composé principalement  de marchands, de négociants, de banquiers et d’armateurs. Elle tire sa richesse du commerce, du transport maritime et des activités financières. »",
            source: "Dickinson, John A., et Brian Young. Brève histoire socio-économique du Québec. Québec, Septentrion, 2003."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Bourgeoisie professionnelle",
        "Bourgeoisie d'affaires",
        "Clergé catholique"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Élément",
        "Document"
      ],
      rangees: [
        [
          "Bourgeoisie professionnelle",
          "1"
        ],
        [
          "Bourgeoisie d'affaires",
          "3"
        ],
        [
          "Clergé catholique",
          "2"
        ]
      ]
    }
  },
  {
    id: "Q14",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P4 — 1791 – 1840",
    points: 3,
    enonce: "Expliquez comment la réponse de Londres aux revendications des Patriotes entraîne des actions de protestation populaire au Bas-Canada dans la première moitié du 19e siècle.\n  \nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux. \n\n• Une revendication des Patriotes \n• La réponse de Londres \n• Une action de protestation populaire",
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
            ref: "papineau_foule.png",
            soustitre: "Louis-Joseph Papineau  s’adressant à la foule"
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« 4. – Dans la situation actuelle du Bas-Canada, on ne saurait recommander que le Conseil législatif de cette province devienne électif […]\n\n5. – S’il est bon de réformer la composition du Conseil exécutif dans le Bas-Canada, il n’est pas à conseiller de lui donner la responsabilité que réclame pour lui la Chambre d’Assemblée de cette province. […]\n\n8. – […] que le gouverneur de la province ait le pouvoir de prendre sur les autres revenus de Sa Majesté telle somme […] qui devra être versée entre les mains du receveur général de la province pour le paiement des comptes […] »",
            source: "Extraits des résolutions présentées par  le gouvernement britannique, 1837"
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« [...] les demandes constituent un long exposé des griefs formulés par les députés patriotes. Elles dénoncent les abus du pouvoir colonial et réclament des réformes politiques destinées à accorder davantage de pouvoir aux représentants élus du Bas-Canada. »",
            source: "Ouellet, Fernand. Le Bas-Canada, 1791-1840 : changements structuraux et crise. Ottawa, Presses de l’Université d’Ottawa, 1976."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 4
    },
    guide: "Les Patriotes revendiquent l’obtention de la responsabilité ministérielle ou le contrôle du budget par l’Assemblée ou l’élection des membres du conseil législatif (ene revendication des Patriotes). \nCes revendications sont refusées par Londres (la réponse de Londres). Devant le refus de Londres, les Patriotes invitent la population à boycotter les produits britanniques ou organisent des assemblées populaires ou se soulèvent (une action de protestation populaire)."
  },
  {
    id: "Q15",
    niveau: 4,
    oi: "Établir des faits",
    periode: "P7 — 1945 – 1980",
    points: 1,
    enonce: "Le document A fait référence à un type d’établissements mis en place au Québec par le gouvernement fédéral au cours du 20e siècle. Nommez ce type d’établissements.",
    aspects: [
      {
        aspect: "Pensionnats indiens au Québec"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« […] le gouvernement fédéral paie pour la construction [des établissements], tandis que les Églises […] voient à [leur] bonne marche quotidienne […] [Ces établissements] accélèrent le processus d’assimilation, en sortant les enfants de leurs familles et de leurs villages durant de longues périodes de temps. »",
            source: "Olive Patricia DICKASON, Les Premières Nations du Canada, Québec, Les Éditions du Septentrion, 1996, p. 330."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Les pensionnats indiens (ou autochtones) ou les écoles résidentielles."
  },
  {
    id: "Q16",
    niveau: 4,
    oi: "Situer dans le temps",
    periode: "P8 — De 1980 à nos jours",
    points: 2,
    soustag: "Ordre chronologique",
    enonce: "Les documents A à D présentent des événements liés au statut politique du Québec à partir de 1982. Placez-les par ordre chronologique.",
    aspects: [
      {
        aspect: "Statut politique du Québec"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "camp_oui_1995.png",
            source: "Bibliothèque et Archives nationales du Québec (BAnQ)."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« […] le premier ministre du Québec, Robert Bourassa, s’entend avec le premier ministre fédéral Brian Mulroney pour reprendre les négociations dans le but de réintégrer le Québec dans la Constitution. […] L’Assemblée nationale du Québec et la Chambre des communes du Parlement fédéral approuvent l’entente. Cependant, au terme du délai, les provinces du Manitoba et de Terre-Neuve refusent de la ratifier. […] L’accord du lac Meech se solde donc par un échec. »",
            source: "Sylvain FORTIN et autres, Fresques, manuel de l’élève B, histoire et éducation à la  citoyenneté, 1re année du 2e cycle du secondaire, Montréal, Graficor, 2007, p. 228."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Que cette Chambre reconnaisse que les Québécoises et les Québécois forment une nation au sein d’un Canada uni. »",
            auteur: "Motion déposée par Stephen Harper",
            source: "Isidore NDAYWEL NZIEM et Elisabeth MUDIMBE-BOYI, Images, mémoires et  savoirs : une histoire en partage avec Bogumil Koss Jewsiewicki, Paris, Éditions  Karthala, 2009, p. 62."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            ref: "rapatriment_constitution.png",
            source: "Bibliothèque et Archives Canada."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "chrono_dbAc.png"
    },
    guide: "D - B - A - C"
  },
  {
    id: "Q17",
    niveau: 4,
    oi: "Situer dans le temps",
    periode: "P8 — De 1980 à nos jours",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
    aspects: [
      {
        aspect: "Droits des Autochtones"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "crise_oka.png",
            source: "Bibliothèque et Archives nationales du Québec (BAnQ)."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_1950-2010.png"
    },
    guide: "C"
  },
  {
    id: "Q18",
    niveau: 4,
    oi: "Situer dans le temps",
    periode: "P7 — 1945 – 1980",
    points: 2,
    soustag: "Avant et après",
    enonce: "Les documents A à D font référence à la modernisation de l’économie du Québec. Indiquez si les faits présentés dans ces documents se déroulent avant ou après 1960.",
    aspects: [
      {
        aspect: "Développement régional"
      },
      {
        aspect: "Révolution tranquille"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "logos_societe_etat.png",
            source: "MEES."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« […] l’Office de l’électrification rurale est créé. Cette initiative entraîne la création de coopératives qui ont pour tâche de construire des réseaux de distribution dans les milieux ruraux. L’arrivée de l’électricité permet aux fermiers de […] développer de nouvelles techniques de conservation, dont la réfrigération. Leur productivité s’accroît […] »",
            source: "Michel SARRA-BOURNET et autres, Repères, manuel de l’élève, histoire et éducation à la  citoyenneté, 2e année du 2e cycle du secondaire, Saint-Laurent, ERPI, 2008, p. 138."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "barrages_hydro_baie_james.png",
            source: "MEES."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« Le fer de la Côte-Nord devient un centre d’attrait. […] [La compagnie] Quebec North Shore fonde la ville de Schefferville. Certains reprocheront [au gouvernement] d’avoir “vendu” la Côte-Nord à des entreprises minières [américaines] pour la modique somme d’un cent la tonne de minerai. On oublie alors les autres clauses de la cession du droit d’exploitation qui représentaient d’importants revenus pour le gouvernement. »",
            source: "Jacques LACOURSIÈRE, Une histoire du Québec, Sillery, Les Éditions du Septentrion, 2002,  p. 161."
          }
        ]
      }
    ],
    reponse: {
      type: "avant-apres",
      label: "1960"
    },
    guide: {
      type: "grille",
      entetes: [
        "Avant",
        "1960",
        "Après"
      ],
      rangees: [
        [
          "B et D",
          "",
          "A et C"
        ]
      ]
    }
  },
  {
    id: "Q19",
    niveau: 4,
    oi: "Situer dans l'espace",
    periode: "P7 — 1945 – 1980",
    points: 1,
    soustag: "Situer 1 élément",
    enonce: "Selon le document A, quelle lettre correspond à un territoire exploité pour son minerai de fer dans la deuxième moitié du 20e siècle?",
    aspects: [
      {
        aspect: "Développement régional"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "territoire_exploite_minerai_fer.png",
            source: "MEES."
          }
        ]
      }
    ],
    reponse: {
      type: "tableau_2col"
    },
    guide: "C"
  },
  {
    id: "Q20",
    niveau: 4,
    oi: "Dégager des différences et des similitudes",
    periode: "P7 — 1945 – 1980",
    points: 2,
    soustag: "Différence",
    enonce: "À partir des documents A et B, indiquez la différence entre le moyen utilisé par le Front de libération du Québec et celui utilisé par le Parti québécois pour obtenir l’indépendance du Québec.",
    aspects: [
      {
        aspect: "Néonationalisme"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« […] les agissements du FLQ [Front de libération du Québec] aboutissent [en 1970] à la crise d’Octobre […] le premier ministre du Québec, Robert Bourassa, demande l’aide d’Ottawa. Pierre Elliott Trudeau fait alors intervenir l’armée […] »",
            source: "Christophe HORGUELIN et autres, Fresques, manuel de l’élève, histoire  et éducation à la citoyenneté, 2e année du 2e cycle du secondaire,  Montréal, Graficor, 2009, t. 2, p. 161."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "victoire_pq_1976.png"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Le Front de libération du Québec recourt à la violence (ex. : enlèvements, attentats à la bombe), alors que le Parti québécois recourt à l’exercice de la démocratie (ex. : élections, référendum)."
  },
  {
    id: "Q21",
    niveau: 4,
    oi: "Dégager des différences et des similitudes",
    periode: "P6 — 1896 – 1945",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A à C présentent la position de trois acteurs sur la conscription en 1917. Nommez l’acteur qui présente une position différente et comparez sa position à celle des deux autres acteurs.",
    aspects: [
      {
        aspect: "Première Guerre mondiale"
      },
      {
        aspect: "Statut du Canada dans l'Empire britannique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Je ne reconnais à aucun gouvernement le droit de nous imposer le service obligatoire pour prendre part aux guerres impériales. […] Je serai pendu ou fusillé, mais je demanderai toujours, avant la conscription, des élections et un référendum. »",
            auteur: "Armand Lavergne.",
            source: "Levitt, Joseph (dir.). Henri Bourassa on Imperialism and Biculturalism, 1900–1918. Toronto, Macmillan of Canada, 1970."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Que l’on pèse bien ces paroles : la conscription marquerait, pour les Canadiens français, le commencement d’une évolution qui ne tarderait pas à transformer en un peuple révolutionnaire la population la plus paisible […] des deux Amériques. Une fois déchaîné, cet esprit révolutionnaire ne s’arrêterait pas en route; il ne s’attaquerait pas qu’au régime militaire : il se manifesterait à l’usine, dans les champs, partout, dans toutes les sphères de la vie industrielle, sociale et politique. »",
            auteur: "Henri Bourassa.",
            source: "Bourassa, Henri. « La conscription ». Le Devoir, 1917."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Il faut obtenir des renforts ou les divisions vont s’émietter. Les renforts actuellement disponibles ne dureront que quelques mois […] [La] question qui se pose est celle-ci : le Canada accepte-t-il de diminuer son effort dans la période la plus critique de la guerre […]? Je suis sûr que la réponse de la Chambre et du pays sera la même, à savoir que le Canada ne peut et ne doit lâcher prise. […] Cette loi s’appuie sur un principe […] c’est que si l’État a des devoirs envers ses sujets, ces derniers ont de leur côté des devoirs à remplir envers l’État. »",
            auteur: "Robert L. Borden, premier ministre du Canada.",
            source: "Borden, Robert. Discours sur la Loi du service militaire, Débats de la Chambre des communes du Canada, 18 mai 1917."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "Borden (ou Le premier ministre du Canada) appuie la conscription (la différence), alors que Lavergne et Bourassa s’y opposent (la similitude)."
  },
  {
    id: "Q22",
    niveau: 4,
    oi: "Dégager des différences et des similitudes",
    periode: "P5 — 1840 – 1896",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs à la fin du 19e siècle. Sur quel point précis ces deux personnages sont-ils d’accord?",
    aspects: [
      {
        aspect: "Migrations"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Chaque pas fait dans la forêt par le défrichement est une conquête qui fortifie nos droits, nos institutions et nos lois. “Emparons-nous du sol” est un motto qui devrait être écrit en lettres d’or au-dessus de la porte de chaque maison. Négliger [cela], c’est porter un coup fatal au pays et détruire l’œuvre glorieuse de nos ancêtres. »",
            auteur: "Curé Antoine LABELLE, 1888.",
            source: "Labelle, Antoine. Discours et écrits sur la colonisation, vers 1870-1890."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Le Canada n’a rien à envier aux autres pays, et nous avons un vaste champ à exploiter. Que de millions de colons pourraient s’établir dans les belles vallées du lac Saint-Jean, du lac Témiscamingue, du lac Nipissing et de la rivière Matapédia […] \n\n[…] emparons-nous du sol si nous voulons être un peuple fort, grand, heureux et prospère. »",
            auteur: "Charles-Edmond ROULEAU, 1896.",
            source: "Rouleau, Charles-Edmond. Nos lointaines campagnes. Québec, 1896."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "L’importance de coloniser les régions (ou la colonisation des régions)."
  },
  {
    id: "Q23",
    niveau: 4,
    oi: "Déterminer des causes et des conséquences",
    periode: "P5 — 1840 – 1896",
    points: 2,
    soustag: "Cause",
    enonce: "Dans quel but les Réformistes de la Province du Canada forment-ils une alliance en 1841?",
    aspects: [
      {
        aspect: "Gouvernement responsable"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "org_pol_acte_union.png",
            source: "Récitus."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Obtenir la responsabilité ministérielle (ou le gouvernement responsable) ou obtenir que les membres du Conseil exécutif soient désormais choisis parmi les membres de l’Assemblée législative ou former la majorité à la Chambre d’assemblée."
  },
  {
    id: "Q24",
    niveau: 4,
    oi: "Déterminer des causes et des conséquences",
    periode: "P5 — 1840 – 1896",
    points: 2,
    soustag: "Cause et conséquence",
    enonce: "Au milieu du 19e siècle, la Grande-Bretagne adopte une politique de libre-échange. Inscrivez la lettre du document qui présente une cause de l’adoption de cette politique et la lettre de celui qui en présente une conséquence pour la Province du Canada.",
    aspects: [
      {
        aspect: "Économie coloniale"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« […] la Grande-Bretagne […] est alors la première puissance industrielle. Ses usines nécessitent d’importantes quantités de matières premières et produisent un grand nombre de produits manufacturés. […] [Les hommes d’affaires anglais] croient que les matières premières coûteraient moins cher s’il n’y avait pas de tarifs douaniers et que les produits manufacturés s’écouleraient mieux sur le marché international. »",
            source: "Sébastien BRODEUR-GIRARD et autres, Le Québec, une histoire à construire, manuel de l’élève, histoire et éducation à la citoyenneté, 2e année du 2e cycle du secondaire, Laval,  Éditions Grand Duc, 2008, vol. 1, p. 149."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "echanges_canada_etats-unis_1850-1860.png"
          }
        ]
      }
    ],
    reponse: {
      type: "cause-consequence"
    },
    guide: {
      type: "grille",
      entetes: [
        "Élément",
        "Document"
      ],
      rangees: [
        [
          "Cause",
          "A"
        ],
        [
          "Conséquence",
          "B"
        ]
      ]
    }
  },
  {
    id: "Q25",
    niveau: 4,
    oi: "Déterminer des changements et des continuités",
    periode: "P6 — 1896 – 1945",
    points: 2,
    soustag: "Changement",
    enonce: "Indiquez un changement survenu dans l’économie du Québec durant les années 1930.",
    aspects: [
      {
        aspect: "Grande dépression"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les “Années folles” prennent fin subitement quand, le 24 octobre 1929, la Bourse de New York s’effondre. [...] Tous les pays du monde capitaliste sont touchés. »",
            source: "Danielle DION-McKINNON et Pierre LALONGÉ, Notre histoire, Montréal, ERPI, 1984, p. 228."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "L’économie du Québec passe d’une période de prospérité à une période de dépression (ou de crise) ou le Québec est touché par une crise économique."
  },
  {
    id: "Q26",
    niveau: 4,
    oi: "Déterminer des changements et des continuités",
    periode: "P5 — 1840 – 1896",
    points: 2,
    soustag: "Continuité",
    enonce: "Les documents A et B présentent la structure politique de la colonie à deux périodes différentes. Quel pouvoir le gouverneur conserve-t-il d’une période à l’autre?",
    aspects: [
      {
        aspect: "Acte d'Union"
      },
      {
        aspect: "Gouvernement responsable"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "org_pol_acte_const.png"
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "org_pol_acte_union.png"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Le droit de veto (ou Le droit de rejeter des projets de loi soumis par la Chambre d’assemblée) ou le pouvoir exécutif (ou Le pouvoir de nommer les membres des conseils exécutif et législatif) ou le pouvoir de dissoudre la Chambre d’assemblée."
  },
  {
    id: "Q27",
    niveau: 4,
    oi: "Déterminer des changements et des continuités",
    periode: "P7 — 1945 – 1980",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A et B, indiquez s’il y a changement ou continuité dans l’implication des femmes en politique au Québec. Justifiez votre choix par des faits et un repère de temps.",
    aspects: [
      {
        aspect: "Féminisme"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« […] c’est seulement en juillet 1947, dans une élection partielle, qu’une première femme, Mae O’Connor, s'est présentée devant l’électorat. On comptait trois candidates aux élections générales de 1952, sept en 1956, mais aucune en 1960. Marie-Claire Kirkland-Casgrain s’est présentée dans la circonscription de Jacques-Cartier à l’élection partielle du 14 décembre 1961 pour remplacer son père, décédé quatre mois plus tôt. Elle est devenue la première femme élue au Parlement de Québec. »",
            source: "«Les femmes parlementaires depuis 1961 », Assemblée nationale du Québec, [En ligne].  [http://www.assnat.qc.ca/fr/patrimoine/femmes.html] (Consulté le 18 juin 2017)."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Vingt-trois femmes siégeront à l’Assemblée nationale comparativement à 102 hommes. Cinq de plus qu’à la dissolution de la Chambre, elles représentent environ un cinquième de la députation. \n \nC’est ce qu’indiquent les derniers résultats de l’élection de lundi. […] \n \nDevenir parlementaire [est] difficile pour les femmes et la progression se fait lentement. »",
            auteur: "Le Devoir, 27 septembre 1989",
            source: "Cité dans Louise CHARPENTIER et autres, Nouvelle histoire du Québec et du  Canada, 2e éd., Anjou, CEC, 1990, p. 407."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 4
    },
    guide: "Il y a changement, car pour la première fois en 1961, une femme siège comme députée ou car une femme se présente pour la première fois comme candidate aux élections en 1947. \nou\nIl y a continuité, car des femmes sont élues députées depuis 1961 ou car les femmes sont toujours minoritaires comme députées à l’Assemblée nationale entre 1961 et 1989."
  },
  {
    id: "Q28",
    niveau: 4,
    oi: "Mettre en relation des faits",
    periode: "P6 — 1896 – 1945",
    points: 2,
    soustag: "3 documents",
    enonce: "Les documents A à C font référence à différents nationalismes au Québec au 20e siècle. Indiquez à l’endroit approprié la lettre du document correspondant à chacun des nationalismes.",
    aspects: [
      {
        aspect: "Clérico-nationalisme"
      },
      {
        aspect: "Politique intérieure canadienne"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Lorsque la Grande-Bretagne est en guerre, le Canada est en guerre. »",
            auteur: "Wilfrid Laurier"
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Laissons de côté nos divergences de partis, de races et de religions; unissons-nous et soyons fidèles à notre devise : notre religion, notre langue, nos institutions. »",
            auteur: "Honoré Mercier"
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Nous ne serons de bons Canadiens qu’en étant d’abord de bons Canadiens français catholiques. »",
            auteur: "Lionel Groulx"
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Clérico-nationalisme",
        "Impérialisme",
        "Nationalisme canadien-français"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Élément",
        "Document"
      ],
      rangees: [
        [
          "Clérico-nationalisme",
          "C"
        ],
        [
          "Impérialisme",
          "A"
        ],
        [
          "Nationalisme canadien-français",
          "B"
        ]
      ]
    }
  },
  {
    id: "Q29",
    niveau: 4,
    oi: "Établir des liens de causalité",
    periode: "P8 — De 1980 à nos jours",
    points: 3,
    enonce: "Expliquez comment la réponse du gouvernement américain aux accusations de l’industrie américaine du bois d’œuvre au début du 21e siècle entraîne une action de la part du gouvernement canadien.\n \nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux. \n \n• Une accusation portée contre le Canada par l’industrie américaine du bois d’œuvre \n• La réponse du gouvernement américain  \n• Une action du gouvernement canadien",
    aspects: [
      {
        aspect: "Mondialisation de l'économie"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les décisions du [gouvernement américain] sont punitives […] et dénuées de tout fondement. Elles ont été prises pour apaiser les milieux protectionnistes américains. J’ai entièrement confiance dans les causes que nous avons présentées en vertu de l’ALENA et de l’OMC [Organisation mondiale du commerce] et j’engage [des] procédures aujourd’hui […] »",
            auteur: "Pierre Pettigrew, ministre canadien du Commerce international, 2002",
            source: "Gilles TOUPIN, « Le désaccord est terminé, la guerre commence... », La Presse, 23 mars 2002, cahier La Presse Affaires, p. E2."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les producteurs canadiens de bois d’œuvre devront […] payer dès le 23 mai [2002] des droits de plus de 27 % sur leurs exportations vers les États-Unis […] La décision a provoqué un tollé à Ottawa et dans les capitales provinciales, où on a accusé les États-Unis de se livrer à “un protectionnisme grossier” et d’“oublier qui sont leurs vrais amis”. »",
            source: "« Bois d'œuvre - Ottawa accuse Washington de se livrer à \"un protectionnisme grossier\" », Le Devoir, [En ligne], 19 mai 2002. [http://www.ledevoir.com/economie/actualites economiques/1451/bois-d-oeuvre-ottawa-accuse-washington-de-se-livrer-a-un-protectionnisme-grossier] (Consulté le 18 juin 2017)."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« L’industrie américaine du bois d’œuvre […] a maintes fois soutenu que les droits de coupe pratiqués au Canada sont […] préjudiciables à l’industrie américaine sur le marché américain. »",
            source: "« Bois d’œuvre I à IV : historique du différend canado-américain sur le bois d’œuvre résineux », Parlement du Canada, Bibliothèque du Parlement, [En ligne], 19 septembre 2005.  [http://www.bdp.parl.gc.ca/content/lop/ResearchPublications/tips/tip134-f.htm] (Consulté le 18 juin 2017)."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 4
    },
    guide: "L’industrie américaine accuse le Canada de subventionner son industrie ou de vendre son bois d’œuvre à un prix inférieur à celui du bois américain ou de faire du dumping sur le marché américain (Une accusation portée contre le Canada par l’industrie américaine du bois d’œuvre). Ces critiques amènent le gouvernement américain à imposer une taxe (ou une surtaxe) sur le bois d’œuvre canadien ou des droits \nantidumping sur les exportations canadiennes (La réponse du gouvernement américain). Cette décision pousse le gouvernement canadien à protester auprès de l’OMC et du tribunal de l’ALENA (Une action du gouvernement canadien)."
  },
  {
    id: "Q30",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez le nom du passage emprunté par les premiers occupants pour migrer de l’Asie vers l’Amérique.",
    aspects: [
      {
        aspect: "Premiers occupants du territoire"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "carte_premiers_occ_peuplement.png",
            source: "Adaptation pédagogique inspirée de cartes historiques du peuplement de l'Amérique par la Béringie."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Le détroit de Béring (ou la Béringie)."
  },
  {
    id: "Q31",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Nommez la famille linguistique autochtone qui occupe la vallée du fleuve Saint-Laurent vers 1500.",
    aspects: [
      {
        aspect: "Premiers occupants du territoire"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "familles_linguistiques_autochtones.png"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Les Iroquoiens."
  },
  {
    id: "Q32",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Nommez la famille linguistique autochtone qui occupe le Bouclier canadien et les Appalaches vers 1500.",
    aspects: [
      {
        aspect: "Premiers occupants du territoire"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "familles_linguistiques_autochtones.png"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Les Algonquiens."
  },
  {
    id: "Q33",
    niveau: 3,
    oi: "Situer dans l'espace",
    periode: "P1 — Des origines à 1608",
    points: 1,
    soustag: "Situer 1 élément",
    enonce: "À partir du document A, indiquez la lettre du territoire occupé par la famille linguistique algonquienne vers 1500.",
    aspects: [
      {
        aspect: "Premiers occupants du territoire"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "familles_linguistiques_autochtones_lettres.png"
          }
        ]
      }
    ],
    reponse: {
      type: "tableau_2col"
    },
    guide: "C"
  },
  {
    id: "Q34",
    niveau: 3,
    oi: "Situer dans l'espace",
    periode: "P1 — Des origines à 1608",
    points: 1,
    soustag: "Situer 1 élément",
    enonce: "À partir du document A, indiquez la lettre du territoire occupé par la famille linguistique iroquoienne vers 1500.",
    aspects: [
      {
        aspect: "Premiers occupants du territoire"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "familles_linguistiques_autochtones_lettres.png"
          }
        ]
      }
    ],
    reponse: {
      type: "tableau_2col"
    },
    guide: "B"
  },
  {
    id: "Q35",
    niveau: 3,
    oi: "Situer dans l'espace",
    periode: "P1 — Des origines à 1608",
    points: 1,
    soustag: "Situer 1 élément",
    enonce: "À partir du document A, indiquez la lettre du territoire occupé par la nation inuite vers 1500.",
    aspects: [
      {
        aspect: "Premiers occupants du territoire"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "familles_linguistiques_autochtones_lettres.png"
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
    id: "Q36",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "2 documents",
    enonce: "À partir des documents A et B, indiquez la lettre du document qui fait références aux activités économiques pratiquées les groupes autochtones.",
    aspects: [
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
            texte: "« Pour subvenir à leurs besoins, [les Cris, Ojibwés, Innus, Béothuks et Outaouais] suivent le gibier dans ses déplacements. Ils ont donc besoin d’un vaste territoire où abondent le gibier, le poisson et les fruits. »",
            source: "lain DALONGEVILLE (dir.), Présences : une histoire thématique du Québec, manuel de l’élève, histoire et éducation à la citoyenneté, 2e année du 2e cycle du secondaire, Anjou, Les  Éditions CEC, 2008, vol. 1, p. 28."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« D’immenses champs potagers sont entretenus à l’extérieur des [palissades]; c’est là qu’on trouve, entre autres légumes, les maïs, fèves et courges de plusieurs variétés qui constituent pour eux une alimentation complète. »",
            source: "Micheline BLANCHETTE, La vie traditionnelle des Premières Nations du Québec, Sherbrooke, Les Éditions G.G.C., 2011, p. 102.  (Patrimoine)."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Algonquiens",
        "Iroquoiens"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Algonquiens",
        "Iroquoiens"
      ],
      rangees: [
        [
          "A",
          "B"
        ]
      ]
    }
  },
  {
    id: "Q37",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "4 documents",
    enonce: "À partir des documents A à D, indiquez la lettre du document qui fait références à l'organisation territoriale des groupes autochtones.",
    aspects: [
      {
        aspect: "Premiers occupants du territoire"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« [Ils] vivaient dans des villages palissadés, reliés entre eux par un réseau de sentiers. Les maisons […] mesuraient de vingt à trente mètres de long sur six ou sept de large. […] Chacune contenait cinq ou six foyers autour desquels plusieurs familles apparentées travaillaient, jouaient, mangeaient et dormaient. »",
            source: "John A. DICKINSON et Brian YOUNG, Brève histoire socio-économique du Québec, 4e éd., Québec, Les éditions du Septentrion, 2009, p. 23."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Ils n’ont point de demeure arrêtée, mais vont de lieu en lieu selon les saisons, transportant leurs cabanes et vivant de la chasse, de la pêche et de ce que le pays leur fournit pour subsister. »",
            auteur: "Marc Lescarbot",
            source: "Histoire de la Nouvelle-France (1609)."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« [Ils] habitent la vallée du Saint-Laurent et les berges des Grands Lacs. [Ils] ont adopté un mode de vie sédentaire axé sur la culture des “trois sœurs” […] Comme ils vivent essentiellement de l’agriculture, [ils] ont besoin d’un territoire relativement petit mais fertile. »",
            source: "Alain DALONGEVILLE (dir.), Présences : une histoire thématique du Québec, manuel de l’élève, histoire et éducation à la  citoyenneté, 2e année du 2e cycle du secondaire, Anjou, Les Éditions CEC, 2008, vol. 1, p. 28."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            ref: "campement_algonquien.png"
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Algonquiens",
        "Iroquoiens"
      ],
      double: true
    },
    guide: {
      type: "grille",
      entetes: [
        "Algonquiens",
        "Iroquoiens"
      ],
      rangees: [
        [
          "B et D",
          "A et C"
        ]
      ]
    }
  },
  {
    id: "Q38",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux auteurs sur l’organisation sociale des Iroquoiens. Sur quel point précis ces deux auteurs sont-ils d’accord?",
    aspects: [
      {
        aspect: "Rapports sociaux chez les Autochtones"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Chez les Iroquoiens, les enfants appartiennent au clan de leur mère et les femmes les plus âgées jouent un rôle important dans la désignation des chefs. »",
            auteur: "Bruce G. Trigger",
            source: "The Children of Aataentsic (McGill-Queen’s University Press)."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Dans les sociétés iroquoiennes, l’appartenance au clan se transmet par la mère, ce qui confère aux femmes une influence importante dans la famille et dans la communauté. »",
            auteur: "Olive Patricia Dickason",
            source: "Canada’s First Nations."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les deux auteurs s’entendent pour dire que la société iroquoienne est matrilinéaire ou que l’appartenance au clan se transmet par la mère ou que les femmes occupent une place importante dans la communauté."
  },
  {
    id: "Q39",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P1 — Des origines à 1608",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A à C présentent la position de trois acteurs sur les alliances entre les Premières Nations. Nommez l’auteur qui présente un point de vue différent et comparez ce point de vue à celui des deux autres acteurs.",
    aspects: [
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
            texte: "« Les alliances entre nations autochtones visent souvent à préserver le contrôle des réseaux d’échange. Elles permettent d’assurer l’accès aux ressources, de sécuriser les routes commerciales et de maintenir des relations économiques avantageuses entre partenaires. »",
            auteur: "Bruce G. Trigger"
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Plusieurs alliances entre peuples autochtones servent à protéger les territoires de chasse et les routes commerciales. Elles favorisent l’échange de biens et garantissent l’accès aux ressources nécessaires à la subsistance des communautés. »",
            auteur: "Olive Patricia Dickason"
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Les alliances entre nations autochtones répondent surtout à des besoins politiques et militaires. Elles permettent de se défendre contre des ennemis, de renforcer des relations diplomatiques et d’assurer la sécurité des communautés alliées. »",
            auteur: "Denys Delâge"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "Delâge soutient que les alliances entre les Premières Nations sont principalement motivées par des considérations politiques ou militaires (différence), tandis que Trigger et Dickason estiment qu’elles reposent surtout sur des intérêts économiques ou commerciaux (similitude)."
  },
  {
    id: "Q40",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "4 documents",
    enonce: "Les documents A à D présentent des faits sur la prise de décision chez les Algonquiens et les Iroquoiens vers 1500. Indiquez les lettres des documents qui correspondent à chacun des groupes.",
    aspects: [
      {
        aspect: "Prise de décision chez les Autochtones"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Chez les Hurons, les femmes aînées de chaque clan désignent les chefs et peuvent les remplacer si elles jugent qu’ils ne remplissent pas adéquatement leurs responsabilités. Les décisions importantes sont prises en conseil, où les chefs recherchent l’accord des membres de la communauté. »",
            auteur: "Bruce G. Trigger"
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Chez les [nations nomades], les chefs exercent une autorité limitée. Ils dirigent par persuasion et leur influence dépend de leur expérience, de leurs talents de chasseurs et de la confiance du groupe. »",
            auteur: "Denys Delâge"
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Chez les Montagnais et les Malécites, le chef possède une autorité limitée. Il dirige grâce à son expérience, à son courage et à sa générosité. Ses décisions ne s’imposent pas par la force, mais reposent sur la confiance et l’adhésion volontaire des membres du groupe. »",
            auteur: "Marc Lescarbot"
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« Dans les sociétés autochtone, les mères de clan choisissent les chefs et exercent une influence importante sur la vie politique. Les chefs ne décident pas seuls : ils consultent les autres membres du village et cherchent à obtenir un consensus avant d’agir. »",
            auteur: "Olive Patricia Dickason"
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Algonquiens",
        "Iroquoiens"
      ],
      double: true
    },
    guide: {
      type: "grille",
      entetes: [
        "Algonquiens",
        "Iroquoiens"
      ],
      rangees: [
        [
          "B et D",
          "A et C"
        ]
      ]
    }
  },
  {
    id: "Q41",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Nommez un rôle joué par le chaman chez les sociétés autochtones.",
    aspects: [
      {
        aspect: "Rapports sociaux chez les Autochtones"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "1500_chaman.jpg"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Il soigne les malades ou dirige des cérémonies ou interprète les rêves ou communique avec les esprits."
  },
  {
    id: "Q42",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux historiens sur le rôle du chaman. Sur quel point précis ces deux auteurs sont-ils d’accord?",
    aspects: [
      {
        aspect: "Rapports sociaux chez les Autochtones"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Le chaman joue un rôle important dans plusieurs sociétés autochtones. Il dirige des cérémonies, interprète les rêves, communique avec les esprits et intervient pour soigner les malades ou favoriser le succès de la chasse. »",
            auteur: "Olive Patricia Dickason"
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les chamans occupent une place particulière dans la communauté. On leur attribue des pouvoirs spirituels qui leur permettent de guérir, de protéger le groupe et de maintenir des relations avec le monde surnaturel. »",
            auteur: "Bruce G. Trigger"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les deux auteurs s’entendent pour dire que le chaman occupe un rôle spirituel important dans la communauté."
  },
  {
    id: "Q43",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue deux auteurs sur l’éducation des enfants chez les Autochtones. Sur quel point précis ces deux auteurs sont-ils d’accord?",
    aspects: [
      {
        aspect: "Rapports sociaux chez les Autochtones"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« L’éducation des enfants autochtones repose sur l’observation, l’imitation et la participation aux activités quotidiennes. Les adultes transmettent les savoirs nécessaires à la survie et à l’intégration dans la communauté. »",
            auteur: "Denys Delâge"
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Chez les peuples autochtones, les enfants apprennent très tôt en accompagnant les adultes. Ils acquièrent progressivement les connaissances, les techniques et les valeurs qui assurent la continuité de la culture. »",
            auteur: "José Mailhot"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les deux auteurs s’entendent pour dire que les enfants apprennent par l’observation ou par la participation aux activités quotidiennes de la communauté."
  },
  {
    id: "Q44",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Nommez une façon dont les enfants autochtones acquièrent les connaissances nécessaires à la vie en communauté.",
    aspects: [
      {
        aspect: "Rapports sociaux chez les Autochtones"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Très tôt, les jeunes sont intégrés à la vie quotidienne de leur groupe. En accompagnant les adultes dans leurs déplacements et leurs activités, ils développent progressivement les habiletés et les comportements attendus des membres de leur communauté. »",
            auteur: "John A. Dickinson"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "En accompagnant les adultes ou en participant à la vie quotidienne du groupe ou en prenant part aux déplacements et aux activités de la communauté."
  },
  {
    id: "Q45",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Nommez une pratique qui favorise la solidarité au sein des sociétés autochtones.",
    aspects: [
      {
        aspect: "Rapports sociaux chez les Autochtones"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Dans plusieurs sociétés autochtones, les ressources obtenues par la chasse, la pêche ou la cueillette sont redistribuées entre les membres du groupe. Le partage des biens contribue à assurer la subsistance de chacun et à renforcer les liens de solidarité. »",
            auteur: "Denys Delâge"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Le partage des biens."
  },
  {
    id: "Q46",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence du partage des biens au sein des sociétés autochtones.",
    aspects: [
      {
        aspect: "Rapports sociaux chez les Autochtones"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Le partage des biens constitue une valeur importante dans plusieurs sociétés autochtones. Les produits de la chasse, de la pêche et de la cueillette sont répartis entre les membres du groupe selon leurs besoins et les circonstances. »",
            auteur: "Cornelius J. Jaenen."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "La subsistance de tous est favorisée ou les membres du groupe peuvent répondre à leurs besoins."
  },
  {
    id: "Q47",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Nommez une façon dont les connaissances sont transmises chez les Autochtones.",
    aspects: [
      {
        aspect: "Rapports sociaux chez les Autochtones"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "tradition_orale.jpg",
            source: "Récitus."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Par la tradition orale ou par les récits et les légendes."
  },
  {
    id: "Q48",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux auteurs sur le don et le contre-don. Sur quel point précis ces deux auteurs sont-ils d’accord?",
    aspects: [
      {
        aspect: "Rapports sociaux chez les Autochtones"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« L’échange de présents ne constitue pas un geste gratuit. Celui qui reçoit un don a l’obligation de rendre à son tour, ce qui entretient les relations et crée des engagements durables entre les groupes. »",
            auteur: "Marcel Mauss"
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Chez plusieurs peuples autochtones, les présents échangés entre alliés appellent une réciprocité. Le groupe qui reçoit doit offrir un contre-don, ce qui permet de maintenir les alliances et de renforcer les liens entre les communautés. »",
            auteur: "Denys Delâge"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les deux auteurs s’entendent pour dire que le don appelle un contre-don."
  },
  {
    id: "Q49",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Nommez une obligation liée à l’échange de présents entre les groupes autochtones.",
    aspects: [
      {
        aspect: "Rapports sociaux chez les Autochtones"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Lorsqu’un groupe reçoit un présent, il contracte une obligation envers celui qui l’a offert. Cette obligation consiste à répondre ultérieurement par un autre présent afin de préserver les relations entre les partenaires d’échange. »",
            auteur: "Marcel Mauss"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Offrir un présent à son tour ou rendre un contre-don."
  },
  {
    id: "Q50",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Nommez le groupe de personnes qui désignent les chefs dans les sociétés iroquoiennes.",
    aspects: [
      {
        aspect: "Prise de décision chez les Autochtones"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Dans les sociétés iroquoiennes, les femmes aînées de chaque clan choisissent les chefs. Elles peuvent également les remplacer lorsqu’elles estiment qu’ils n’assument plus correctement les responsabilités qui leur ont été confiées. »",
            auteur: "Bruce G. Trigger"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Les femmes aînées du clan ou les mères de clan."
  },
  {
    id: "Q51",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Nommez la pratique utilisée par les groupes autochtones pour échanger des biens.",
    aspects: [
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
            texte: "« Les réseaux d’échange relient les nations autochtones sur de vastes territoires. Les Iroquoiens et les Algonquiens y obtiennent des ressources complémentaires et entretiennent des relations régulières fondées sur la réciprocité et les obligations mutuelles. »",
            auteur: "Olive Patricia Dickason"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Le troc."
  },
  {
    id: "Q52",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence des réseaux d’échange sur l’accès des nations autochtones aux ressources.",
    aspects: [
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
            ref: "1500_reseau_echanges.png"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les nations autochtones ont accès à des ressources qu’elles ne trouvent pas sur leur propre territoire ou elles obtiennent des ressources provenant de régions éloignées ou des biens circulent sur de vastes territoires."
  },
  {
    id: "Q53",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de l’utilisation des voies d’eau sur les échanges entre les nations autochtones.",
    aspects: [
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
            ref: "1500_reseau_echanges.png"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les ressources peuvent être transportées sur de longues distances ou les échanges entre les nations sont facilités ou les réseaux d’échange s’étendent sur de vastes territoires."
  },
  {
    id: "Q54",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "À partir du document A, nommez un moyen utilisé par les nations autochtones pour transporter des ressources sur les voies d’eau.",
    aspects: [
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
            texte: "« Les Algonquiens utilisent de longues embarcations faites d’écorce de bouleau. Très légères, elles peuvent être transportées à la main lors des portages et permettent de circuler rapidement sur les rivières et les lacs avec des marchandises. »",
            auteur: "Samuel de Champlain.",
            source: "Champlain, Samuel de. Les Voyages de la Nouvelle-France occidentale, dite Canada. Paris, 1613."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Le canot d’écorce."
  },
  {
    id: "Q55",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Conséquence",
    enonce: "Au début du 17e siècle, Samuel de Champlain conclut une alliance avec les Hurons. Indiquez une conséquence de cette alliance sur les relations entre les Iroquois et les Français.",
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
            texte: "« Nous conclûmes alliance avec les Hurons et leurs alliés afin d’entretenir le commerce et de fortifier notre établissement. En retour, nous nous engageâmes à les soutenir contre les Iroquois, leurs ennemis, ce qui nous fit désormais prendre part à leurs guerres et à leurs querelles. »",
            auteur: "Samuel de Champlain",
            source: "Champlain, Samuel de. Les Voyages de la Nouvelle-France occidentale, dite Canada. Paris, 1632."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les Iroquois deviennent des ennemis des Français ou les relations entre les Iroquois et les Français se détériorent ou les Iroquois entrent en conflit avec les Français."
  },
  {
    id: "Q56",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux auteurs sur l’alliance entre les Français et les Hurons-Wendats. Sur quel point précis ces deux auteurs sont-ils d’accord?",
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
            texte: "« L’alliance entre les Français et les Hurons-Wendats répond à des intérêts commerciaux et militaires. Elle donne aux Français accès au commerce des fourrures et les engage dans les rivalités opposant les Hurons-Wendats aux Iroquois. »",
            auteur: "Bruce G. Trigger.",
            source: "The Children of Aataentsic: A History of the Huron People to 1660 Montréal et Kingston, McGill-Queen’s University Press, 1976."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« En s’alliant aux Hurons-Wendats, les Français obtiennent des partenaires essentiels pour le commerce des fourrures. Cette alliance les entraîne aussi dans les conflits avec les Iroquois et modifie durablement les relations entre les peuples. »",
            auteur: "Denys Delâge.",
            source: "Le pays renversé : Amérindiens et Européens en Amérique du Nord-Est, 1600-1664 Montréal, Boréal Express, 1985."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les deux auteurs s’entendent pour dire que l’alliance entre les Français et les Hurons-Wendats favorise le commerce des fourrures ou entraîne les Français dans les conflits avec les Iroquois."
  },
  {
    id: "Q57",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Quel gouverneur est rappelé en Angleterre à la suite de pressions exercées par les marchands \nanglophones?",
    aspects: [
      {
        aspect: "Mouvements de revendication"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "james_murray.png"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "James Murray.",
    updatedAt: "2026-06-07T00:44:24.446Z"
  },
  {
    id: "Q58",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une cause du rappel de James Murray en Angleterre au début du Régime britannique.",
    aspects: [
      {
        aspect: "Mouvements de revendication"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les habitants britanniques de cette province demandent qu’une assemblée soit établie et que les lois anglaises soient pleinement appliquées, afin d’assurer à ses sujets les mêmes droits et privilèges que ceux dont jouissent les autres colonies de Sa Majesté. »",
            source: "Pétition des marchands britanniques de la Province de Québec au gouvernement britannique, 1764."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les marchands anglophones s’opposent aux politiques de James Murray ou ils demandent des changements à l’administration de la colonie."
  },
  {
    id: "Q59",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence des demandes des marchands anglophones de la Province de Québec sur l’administration de la colonie.",
    aspects: [
      {
        aspect: "Mouvements de revendication"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les habitants britanniques de cette province demandent qu’une assemblée soit établie et que les lois anglaises soient pleinement appliquées, afin d’assurer à ses sujets les mêmes droits et privilèges que ceux dont jouissent les autres colonies de Sa Majesté. »",
            source: "Pétition des marchands britanniques de la Province de Québec au gouvernement britannique, 1764."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Le rappel de James Murray en Angleterre ou l'administration britannique remplace James Murray par Guy Carleton."
  },
  {
    id: "Q60",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux groupes de marchands britanniques sur l’administration de la Province de Québec. Sur quel point précis ces deux groupes sont-ils d’accord?",
    aspects: [
      {
        aspect: "Mouvements de revendication"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les habitants britanniques de cette province demandent qu’une assemblée représentative soit établie et que les lois anglaises soient appliquées, afin de garantir dans cette colonie les mêmes droits et privilèges que ceux dont jouissent les autres sujets de Sa Majesté. »",
            source: "Pétition des marchands britanniques de Québec au gouvernement britannique, 1764."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Plusieurs commerçants britanniques dénoncent une administration trop favorable aux Canadiens et réclament des changements au gouvernement de la colonie, notamment l’établissement d’institutions politiques qui permettraient aux sujets britanniques de mieux défendre leurs intérêts. »",
            source: "Pétition des marchands britanniques de Montréal au gouvernement britannique, 1770."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les deux groupes de marchands britanniques s’opposent aux politiques de Guy Carleton ou demandent des changements dans l’administration de la colonie."
  },
  {
    id: "Q61",
    niveau: 4,
    oi: "Dégager des différences et des similitudes",
    periode: "P7 — 1945 – 1980",
    points: 2,
    soustag: "Divergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue d’Antonio Barrette et de Lionel Groulx sur la Grève de l'amiante de 1949. Sur quel point précis ces deux auteurs sont-ils en désaccord?",
    aspects: [
      {
        aspect: "Période duplessiste"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les revendications relatives à la poussière d’amiante ne justifient pas l’arrêt de travail. Rien ne permet de considérer cette question comme un motif valable pour déclencher une grève aussi importante. »",
            auteur: "Antonio Barrette.",
            source: "Déclaration d’Antonio Barrette au sujet de la Grève de l'amiante de 1949."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les travailleurs ont raison de dénoncer les effets de la poussière d’amiante sur leur santé. Cette situation constitue un motif légitime pour réclamer de meilleures conditions de travail. »",
            auteur: "Lionel Groulx.",
            source: "Commentaire de Lionel Groulx sur la Grève de l'amiante de 1949."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Le motif de la grève ou la légitimité de la grève ou l’utilisation de la poussière d’amiante comme motif de la grève."
  },
  {
    id: "Q62",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Nommez le gouverneur qui succède à James Murray.",
    aspects: [
      {
        aspect: "Mouvements de revendication"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "portrait_guy_carleton.png",
            source: "Bibliothèque et Archives Canada, portrait des premiers gouverneurs (1724-1808)."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Guy Carleton."
  },
  {
    id: "Q63",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Nommez un objet de rivalité entre les nations autochtones vers 1500.",
    aspects: [
      {
        aspect: "Alliances et rivalités au sein des Premières Nations"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les conflits entre les nations autochtones portent souvent sur le contrôle des territoires de chasse, des zones de pêche et des routes commerciales. La maîtrise de ces espaces assure l’accès aux ressources nécessaires à la subsistance et permet de maintenir des réseaux d’échanges entre les peuples. »",
            source: "Olive Patricia Dickason, Les Premières Nations du Canada. Québec, Les Éditions du Septentrion, 1996. Les Éditions du Septentrion."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Le contrôle des territoires de chasse ou le contrôle des routes commerciales ou l’accès aux ressources naturelles."
  },
  {
    id: "Q64",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une cause des rivalités entre certaines nations autochtones pour le contrôle de certains territoires.",
    aspects: [
      {
        aspect: "Alliances et rivalités au sein des Premières Nations"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les rivalités entre les nations iroquoiennes et algonquiennes portent notamment sur le contrôle des territoires et des réseaux d’échanges. Ces affrontements permettent aux groupes de préserver leur influence et de sécuriser leur approvisionnement en ressources. »",
            source: "Bruce G. Trigger, Les Enfants d’Aataentsic. Montréal, Les Éditions Libre Expression."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Certaines nations autochtones se disputent le contrôle de certains territoires afin de protéger leurs ressources ou de contrôler les routes commerciales."
  },
  {
    id: "Q65",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux historiens sur les relations entre les nations autochtones vers 1500. Sur quel point précis sont-ils d’accord?",
    aspects: [
      {
        aspect: "Alliances et rivalités au sein des Premières Nations"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les peuples autochtones se livrent fréquemment à des guerres pour défendre leur territoire ou pour contrôler des routes de commerce. Ces rivalités visent à protéger l’accès aux ressources essentielles et à maintenir une influence sur les échanges entre les nations. »",
            source: "Olive Patricia Dickason, Les Premières Nations du Canada. Québec, Les Éditions du Septentrion, 1996."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les conflits entre nations autochtones découlent souvent de la volonté de contrôler des territoires de chasse et des voies d’échange. La maîtrise de ces espaces assure l’accès aux ressources et renforce les alliances commerciales et politiques. »",
            source: "Denys Delâge, Le pays renversé. Montréal, Les Éditions du Boréal, 2004."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Le contrôle des territoires ou des routes commerciales par les nations autochtones."
  },
  {
    id: "Q66",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une cause des alliances entre certaines nations autochtones.",
    aspects: [
      {
        aspect: "Alliances et rivalités au sein des Premières Nations"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les alliances entre nations autochtones reposent sur des intérêts communs. Elles permettent de faire face à des ennemis, de sécuriser les routes d’échange et de maintenir des relations politiques et commerciales avantageuses entre les peuples. »",
            source: "Denys Delâge, Le pays renversé. Montréal, Les Éditions du Boréal, 2005."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Certaines nations autochtones concluent des alliances afin de se protéger contre des ennemis communs ou afin de faciliter les échanges commerciaux."
  },
  {
    id: "Q67",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P1 — Des origines à 1608",
    points: 3,
    enonce: "Expliquez comment les objets de rivalité entre les nations autochtones entraînent la formation d’alliances.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• Un objet de rivalité entre les nations autochtones\n• L’objectif des alliances entre les nations autochtones\n• Le sort des prisonniers",
    aspects: [
      {
        aspect: "Alliances et rivalités au sein des Premières Nations"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les peuples autochtones se livrent fréquemment à des guerres pour défendre leur territoire ou pour contrôler des routes de commerce. Ces rivalités opposent des nations qui cherchent à protéger leurs ressources et à maintenir leur influence sur les échanges. »",
            source: "Olive Patricia Dickason, Les Premières Nations du Canada. Québec, Les Éditions du Septentrion, 1996."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les alliances entre nations autochtones reposent sur des intérêts communs. Elles permettent de faire face à des ennemis, de sécuriser les routes d’échange et de maintenir des relations politiques et commerciales avantageuses entre les peuples. »",
            source: "Denys Delâge, Le pays renversé. Montréal, Les Éditions du Boréal, 2005."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Les prisonniers capturés lors des guerres entre nations autochtones peuvent être adoptés pour remplacer des membres disparus, réduits en esclavage ou exécutés. Leur sort dépend des besoins du groupe vainqueur et des coutumes qu’il applique. »",
            source: "Bruce G. Trigger, Les Enfants d’Aataentsic. Montréal, Libre Expression, 2008."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 5
    },
    guide: "Les nations autochtones se disputent le contrôle des territoires de chasse, des ressources et des routes commerciales. (les objets de rivalités entre nations autochtones) Pour renforcer leur position, elles concluent des alliances avec d’autres nations. (systèmes d'alliances) Lors des conflits entraînent la capture de prisonniers qui peuvent être adoptés ou réduits en esclavage ou torturés ou exécutés. (le sort des prisonniers)"
  },
  {
    id: "Q68",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une cause de l’adoption de prisonniers par certaines nations autochtones.",
    aspects: [
      {
        aspect: "Alliances et rivalités au sein des Premières Nations"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Après les affrontements, les captifs ne connaissent pas tous le même destin. Les décisions prises à leur égard dépendent des coutumes du groupe victorieux ainsi que des besoins de la communauté au moment du retour des guerriers. »",
            source: "Olive Patricia Dickason, Les Premières Nations du Canada. Québec, Les Éditions du Septentrion, 1996"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Pour remplacer des membres de la communauté morts lors de conflits ou de maladies."
  },
  {
    id: "Q69",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une cause de l’alliance conclue entre certaines nations autochtones et Samuel de Champlain en 1603.",
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
            texte: "« La rencontre diplomatique de 1603 marque le début d’une relation durable entre les Français et plusieurs nations autochtones. Cette entente repose sur des intérêts communs et sur la volonté de maintenir des relations avantageuses dans un contexte de rivalités entre différents peuples. »",
            source: "Raymonde Litalien (dir.) et Denis Vaugeois (dir.), Champlain : la naissance de l’Amérique française. Québec, Les Éditions du Septentrion, 2004."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les nations autochtones concluent une alliance avec les Français afin d’obtenir un appui militaire contre leurs ennemis ou pour développer les échanges commerciaux."
  },
  {
    id: "Q70",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P1 — Des origines à 1608",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
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
            texte: "« La rencontre diplomatique [...] jette les bases de l’alliance franco-amérindienne. Cette entente permet aux nations autochtones alliées aux Français de renforcer leur position face à leurs adversaires et de développer des relations commerciales avantageuses. »",
            source: "Raymonde Litalien (dir.) et Denis Vaugeois (dir.), Champlain : la naissance de l’Amérique française. Québec, Les Éditions du Septentrion, 2004."
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
    id: "Q71",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "3 documents",
    enonce: "Les documents A à C présentent des faits relatifs aux voyages de Jacques Cartier. Inscrivez à l’endroit approprié la lettre du document correspondant à chacun de ses trois voyages.",
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
            texte: "« Durant l’hiver, les Iroquoiens enseignent aux Français un remède contre le scorbut préparé à partir de l’écorce et des aiguilles de cèdre. »",
            source: "Jacques Mathieu, La Nouvelle-France. Québec, Les Presses de l’Université Laval."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Cartier fonde Charlesbourg-Royal près de Cap-Rouge dans le but d’établir une colonie permanente en Amérique du Nord. »",
            source: "Marcel Trudel, Histoire de la Nouvelle-France. Montréal, Fides."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Cartier explore le golfe du Saint-Laurent et prend possession du territoire à Gaspé au nom du roi de France en y faisant ériger une croix. »",
            source: "Jacques Lacoursière, Canada-Québec, 1534-2010. Québec, Les Éditions du Septentrion, 2011."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Premier voyage",
        "Deuxième voyage",
        "Troisième voyage"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Premier voyage",
        "Deuxième voyage",
        "Troisième voyage"
      ],
      rangees: [
        [
          "C",
          "A",
          "B"
        ]
      ]
    }
  },
  {
    id: "Q72",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "3 documents",
    enonce: "Les documents A à C présentent des faits relatifs aux voyages de Jacques Cartier. Inscrivez à l’endroit approprié la lettre du document correspondant à chacun de ses trois voyages.",
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
            texte: "« En explorant les environs de Charlesbourg-Royal, les Français croient avoir découvert de l’or et des diamants. De retour en France, ils constatent toutefois qu’il s’agit plutôt de pyrite de fer et de quartz, des minéraux sans grande valeur. »",
            source: "Jacques Lacoursière, Canada-Québec, 1534-2010. Québec, Les Éditions du Septentrion, 2011"
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« À Gaspé, Cartier revendique le territoire pour la France et entre en contact avec des Iroquoiens du Saint-Laurent. »",
            source: "Jean-François Cardin et autres, Le Québec : héritages et projets. Laval, Éditions HRW."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Cartier remonte le fleuve Saint-Laurent jusqu’à Stadaconé et Hochelaga, révélant l’importance de cette voie de navigation pour l’exploration du continent. »",
            source: "Jean-Pierre Charland, À l’aube du XXIe siècle. Montréal, Lidec."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Premier voyage",
        "Deuxième voyage",
        "Troisième voyage"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Premier voyage",
        "Deuxième voyage",
        "Troisième voyage"
      ],
      rangees: [
        [
          "B",
          "C",
          "A"
        ]
      ]
    }
  },
  {
    id: "Q73",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "4 documents",
    enonce: "Les documents A à D présentent des faits relatifs aux tentatives de colonisation françaises en Amérique du Nord. Inscrivez à l’endroit approprié la lettre du document correspondant à chacune de ces tentatives.",
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
            texte: "« [En Acadie], les Français déplacent leur établissement vers un lieu mieux protégé, où les terres sont plus fertiles et les conditions de vie plus favorables au maintien d’une colonie durable. »",
            source: "Samuel de Champlain, Les Voyages de la Nouvelle-France occidentale, dicte Canada. Paris, 1613."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« [...], des marchands français tentent d’établir un poste permanent à l’embouchure du Saguenay afin de soutenir le commerce des fourrures et d’assurer une présence durable sur le territoire. »",
            source: "Jacques Lacoursière, Canada-Québec, 1534-2010. Québec, Les Éditions du Septentrion, 2011."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« [...] Troilus de La Roche de Mesgouez tente, au nom du roi Henri IV, d’établir une colonie sur une île sablonneuse située au large de l’Acadie afin d’assurer une présence française permanente en Amérique du Nord. »",
            source: "Marcel Trudel, Histoire de la Nouvelle-France. Montréal, Fides."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« [...] Jacques Cartier établit une colonie près de Cap-Rouge dans l’espoir de fonder un établissement permanent et d’exploiter les richesses qu’il croit avoir découvertes dans la région. »",
            source: "Jacques Lacoursière, Canada-Québec, 1534-2010. Québec, Les Éditions du Septentrion, 2011."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Charlesbourg-Royal",
        "Île de Sable",
        "Port-Royal",
        "Tadoussac"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Charlesbourg-Royal",
        "Île de Sable",
        "Port-Royal",
        "Tadoussac"
      ],
      rangees: [
        [
          "D",
          "C",
          "A",
          "B"
        ]
      ]
    }
  },
  {
    id: "Q74",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "4 documents",
    enonce: "Les documents A à D présentent des faits relatifs aux tentatives de colonisation françaises en Amérique du Nord. Inscrivez à l’endroit approprié la lettre du document correspondant à chacune de ces tentatives.",
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
            texte: "« [...], en Acadie, Pierre Dugua de Mons et Samuel de Champlain fondent, au nom du roi Henri IV, une colonie dans un lieu mieux protégé et plus favorable à l’agriculture. »",
            source: "Raymonde Litalien (dir.) et Denis Vaugeois (dir.), Champlain : la naissance de l’Amérique française. Québec, Les Éditions du Septentrion, 2004."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les colons installés à la colonie, près de Cap-Rouge, affrontent un hiver difficile, des tensions avec les Iroquoiens et découvrent que les prétendus diamants et pépites d’or sont en réalité du quartz et de la pyrite de fer. »",
            source: "Jacques Lacoursière, Canada-Québec, 1534-2010. Québec, Les Éditions du Septentrion, 2011."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Cartier[...] au nom du roi François Ier, fonde un établissement à Cap-Rouge [...]. Cette tentative de colonisation vise à établir une présence française permanente et à exploiter les richesses que les Français croient avoir découvertes sur le territoire. »",
            source: "Jacques Lacoursière, Canada-Québec, 1534-2010. Québec, Les Éditions du Septentrion, 2011."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« Une trentaine de colons sont abandonnés sur cette île sablonneuse, où les tempêtes, l’isolement et le manque de ressources rendent les conditions de vie extrêmement difficiles. »",
            source: "Marcel Trudel, Histoire de la Nouvelle-France. Montréal, Fides."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Charlesbourg-Royal",
        "Île de Sable",
        "Port-Royal",
        "Tadoussac"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Charlesbourg-Royal",
        "Île de Sable",
        "Port-Royal",
        "Tadoussac"
      ],
      rangees: [
        [
          "B",
          "D",
          "C",
          "A"
        ]
      ]
    }
  },
  {
    id: "Q75",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P1 — Des origines à 1608",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
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
            ref: "jacques_cartier_1534.png",
            source: "C. W. Jefferys, Jacques Cartier at Gaspé, 1534, domaine public."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_1475-1575.png"
    },
    guide: "C."
  },
  {
    id: "Q76",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P1 — Des origines à 1608",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
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
            texte: "« [...] Jacques Cartier explore le golfe du Saint-Laurent au nom du roi François Ier. À Gaspé, il fait ériger une croix et prend possession du territoire pour la France après avoir rencontré des Iroquoiens venus de la région de Stadaconé. »",
            source: "Jacques Lacoursière, Canada-Québec, 1534-2010. Québec, Les Éditions du Septentrion, 2011."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_1475-1575.png"
    },
    guide: "C."
  },
  {
    id: "Q77",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Ordre chronologique",
    enonce: "Les documents A à D présentent des faits relatifs aux voyages de Jacques Cartier. Placez-les par ordre chronologique.",
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
            texte: "« Lors de son voyage, [...] Jacques Cartier remonte le fleuve Saint-Laurent jusqu’aux villages iroquoiens de Stadaconé et d’Hochelaga, démontrant que cette voie navigable permet d’explorer l’intérieur du continent nord-américain. »",
            source: "Jacques Lacoursière, Canada-Québec, 1534-2010. Québec, Les Éditions du Septentrion, 2011"
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« [...] Jacques Cartier ramène en France le chef Donnacona, espérant que son témoignage sur les territoires explorés et sur les richesses du continent convaincra François Ier de soutenir de nouvelles expéditions. »",
            source: "Jacques Mathieu, La Nouvelle-France. Québec, Les Presses de l’Université Laval."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« À Gaspé, en juillet [...], Jacques Cartier fait ériger une grande croix portant les armes du roi François Ier et prend officiellement possession du territoire au nom de la France. »",
            source: "Jacques Cartier, Relations; cité notamment par Jacques Lacoursière dans Canada-Québec, 1534-2010. Québec, Les Éditions du Septentrion, 2011."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« [...] Jacques Cartier établit à Cap-Rouge la colonie de Charlesbourg-Royal, première tentative française de peuplement dans la vallée du Saint-Laurent. L’entreprise vise à fonder un établissement permanent et à exploiter les ressources que l’on croit précieuses. »",
            source: "Marcel Trudel, Histoire de la Nouvelle-France. Montréal, Fides."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_acBd.png"
    },
    guide: "C - A - B - D"
  },
  {
    id: "Q78",
    niveau: 3,
    oi: "Situer dans l'espace",
    periode: "P2 — 1608 – 1760",
    points: 1,
    soustag: "Situer 1 élément",
    enonce: "À partir du document A, indiquez la lettre qui correspond au territoire sur lequel les seigneuries ont été concédées avant 1663.",
    aspects: [
      {
        aspect: "Régime seigneurial"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "carte_seigneurie_n-f.png",
            source: "MEES."
          }
        ]
      }
    ],
    reponse: {
      type: "tableau_2col"
    },
    guide: "B."
  },
  {
    id: "Q79",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Changement",
    enonce: "Indiquez un changement de la population autochtone à la suite de la présence européenne dans la vallée du Saint-Laurent.",
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
            ref: "graphique_pop_autochtone_n-f.png",
            source: "Serge COURVILLE (dir.), Population et territoire,  Québec, PUL, 1996, p. 19. (Coll. Atlas historique du Québec)."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Une diminution importante de la population autochtone."
  },
  {
    id: "Q80",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une cause de la diminution de la population autochtone dans la première moitié du 17e siècle.",
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
            texte: "« Les Amérindiens n’avaient aucune immunité contre les maladies infectieuses introduites par les Européens, comme la variole, la rougeole et la grippe. [...] »",
            source: "Denys Delâge, « Épidémies et colonisation. Un aperçu historique des premiers explorateurs au XVIIIe siècle », 2022."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les maladies infectieuses apportées par les Européens (variole, rougeole, grippe)."
  },
  {
    id: "Q81",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de la présence européenne sur la population autochtone dans la vallée du Saint-Laurent au cours de la première moitié du 17e siècle.",
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
            texte: "« Les maladies apportées par les Européens eurent des effets catastrophiques sur les peuples autochtones, dont les populations furent décimées en quelques décennies seulement. »",
            source: "Olive Patricia Dickason, Les Premières Nations du Canada, Québec, Septentrion, 1996, p. 135."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "La population autochtone diminue fortement."
  },
  {
    id: "Q82",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez la cause de l’adoption d’une politique d’immigration par les autorités françaises dans les années 1660.",
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
            texte: "« Malgré les privilèges accordés par la métropole, les compagnies de commerce ne parviennent pas à remplir leurs obligations de peuplement. En 1663, la Nouvelle-France ne compte qu’environ 3 000 habitants, un nombre jugé insuffisant pour assurer le développement et la défense de la colonie. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 1, Québec, Septentrion, 1995."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les compagnies de fourrures ont peu contribué au peuplement de la colonie. \nou \nLa colonie a une faible population (ou présente un faible taux de croissance naturelle). \nou \nIl y a moins de femmes que d’hommes (ou un déséquilibre démographique) dans la colonie."
  },
  {
    id: "Q83",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de l’échec des compagnies à peupler la Nouvelle-France.",
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
            texte: "« Au début des années 1660, la population de la Nouvelle-France demeure très faible. Pour assurer le développement et la défense de la colonie, le roi met en place des mesures visant à augmenter rapidement le nombre de colons [...]. »",
            source: "Marcel Trudel, Histoire de la Nouvelle-France, tome 3, Montréal, Fides."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les autorités françaises adoptent une politique d’immigration afin d’augmenter la population de la Nouvelle-France."
  },
  {
    id: "Q84",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indique une conséquence de l'occupation française en Amérique du Nord sur le territoire des Treize colonies.",
    aspects: [
      {
        aspect: "Guerres intercoloniales"
      },
      {
        aspect: "Territoire français en Amérique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "carte_amerique_nord_1700.png",
            soustitre: "Carte de l'Amérique du Nord vers 1700"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les Treize colonies ne peuvent prendre de l’expansion ou l’occupation française limite leur expansion ou leur territoire est limité."
  },
  {
    id: "Q85",
    niveau: 3,
    oi: "Situer dans l'espace",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Situer 2 éléments",
    enonce: "À partir du document A, indique les deux lettres correspondant à la Nouvelle-France et aux Treize colonies.",
    aspects: [
      {
        aspect: "Territoire français en Amérique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "carte_amerique_nord_1700_lettres.png",
            source: "Récitus."
          }
        ]
      }
    ],
    reponse: {
      type: "situer-dans-lespace",
      elements: [
        "Nouvelle-France",
        "Treize colonies"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Nouvelle-France",
        "Treize colonies"
      ],
      rangees: [
        [
          "B",
          "C"
        ]
      ]
    }
  },
  {
    id: "Q86",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "4 documents",
    enonce: "Les documents A à D présentent des faits liés aux missions et aux villages domiciliés en Nouvelle-France. Indiquez à l’endroit approprié la lettre de chacun des documents.",
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
            texte: "« Les missionnaires jésuites établissent [des postes religieux] dans les territoires autochtones afin d’y annoncer l’Évangile et de convertir les Amérindiens au catholicisme. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 1, Québec, Septentrion, 1995."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Kahnawake, Odanak et Wendake [...] où vivent des Autochtones alliés aux Français tout en conservant plusieurs de leurs traditions. »",
            source: "acques Lacoursière, Histoire populaire du Québec, tome 1, Québec, Septentrion, 1995."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« En Huronie, les Jésuites fondent des [...] permanentes pour évangéliser les Wendats et renforcer l’influence française auprès de leurs alliés. »",
            source: "Allan Greer, Brève histoire des peuples de la Nouvelle-France, Montréal, Boréal, 1998."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« Ces communautés établies près de Montréal, Québec ou Trois-Rivières permettent aux autorités françaises de consolider leurs alliances militaires et commerciales avec les Premières Nations. »",
            source: "Denys Delâge, Le pays renversé, Montréal, Boréal, 1991."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Missions",
        "Villages domiciliés"
      ],
      double: true
    },
    guide: {
      type: "grille",
      entetes: [
        "Missions",
        "Villages domiciliés"
      ],
      rangees: [
        [
          "A et C",
          "B et D"
        ]
      ]
    }
  },
  {
    id: "Q87",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "3 documents",
    enonce: "Les documents A à D présentent des faits liés aux différents rôles de l’Église catholique en Nouvelle-France. Indiquez à l’endroit approprié la lettre correspondant à chacun des faits.",
    aspects: [
      {
        aspect: "Église catholique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "evangelisation_n-f.jpg",
            source: "C. W. Jefferys, Jesuit missionary preaching to Indigenous people, domaine public."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Arrivées à Québec en 1639, les Hospitalières fondent l’Hôtel-Dieu, où elles accueillent et soignent les colons, les soldats et les Autochtones [...]. Elles jouent ainsi un rôle essentiel [...] en Nouvelle-France. »",
            source: "Augustines de la Miséricorde de Jésus. Histoire des Augustines. Monastère des Augustines, Québec."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "education_n-f.jpg",
            source: "C. W. Jefferys, The Ursulines Teaching Indian Girls, domaine public."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Éducation",
        "Évangélisation",
        "Soins et santé"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Éducation",
        "Évangélisation",
        "Soins et santé"
      ],
      rangees: [
        [
          "C",
          "A",
          "B"
        ]
      ]
    }
  },
  {
    id: "Q88",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P2 — 1608 – 1760",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
    aspects: [
      {
        aspect: "Guerre de la Conquête"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "debarquement_plaines_abraham.png",
            soustitre: "La bataille des plaines d’Abraham à Québec",
            source: "Hervey Smyth, A View of the Taking of Quebec, September 13, 1759, vers 1760, Library and Archives Canada, C-000342."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_1600-1800.png"
    },
    guide: "D"
  },
  {
    id: "Q89",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "4 documents",
    enonce: "Les documents A à D présentent des événements survenus durant le Régime britannique. Indiquez à l’endroit approprié la lettre correspondant à chacun de ces événements.",
    aspects: [
      {
        aspect: "Instructions au gouverneur Murray"
      },
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
            titre: "Document A",
            texte: "« Frères! […] Quand les Anglais vous ont offensés, ils nous ont offensés aussi. Je sais qu’ils vous ont désarmés et vous ont contraints de signer un traité […] Je ne vous demande pas votre concours direct, car vous ne pouvez me l’apporter : je ne demande que des provisions pour mes combattants. »",
            auteur: "Un chef amérindien s’adressant aux Canadiens  établis dans la région de Détroit",
            source: "Noël VALLERAND et Robert LAHAISE, L’Amérique du Nord britannique, 1760-1867 : les Canadiens  français, la colonisation britannique et la formation du Canada continental, Montréal, Kébékédit, 1974,  p. 11."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« […] sous la haute autorité du général en chef Amherst […], tout le pays sera sous la surveillance de l’armée anglaise […] \n\nComme le Canada n’est que provisoirement possession britannique, […] [on] va respecter autant que possible les structures du régime français. »",
            source: "Marcel TRUDEL, Initiation à la Nouvelle-France : histoire et  institutions, Montréal, Éditions HRW, 1971, p. 111 et 113."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Le 8 septembre 1760, le gouverneur Pierre de Rigaud de Vaudreuil signe [...]. Par cet acte, toute la Nouvelle-France passe sous le contrôle de la Grande-Bretagne, mettant fin au Régime français en Amérique du Nord. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 1, Éditions du Septentrion, 1995."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« Après la Conquête, les Britanniques réorganisent la colonie selon leurs institutions politiques et juridiques, ce qui transforme le gouvernement et réduit les droits politiques des Canadiens catholiques. »",
            source: "Beaulieu, Alain, et al. Les Autochtones du Québec : des premières alliances aux revendications contemporaines. Montréal : Boréal, 2013."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Capitulation de Montréal",
        "Proclamation royale",
        "Régime militaire",
        "Révolte de Pontiac"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Capitulation de Montréal",
        "Proclamation royale",
        "Régime militaire",
        "Révolte de Pontiac"
      ],
      rangees: [
        [
          "C",
          "D",
          "B",
          "A"
        ]
      ]
    }
  },
  {
    id: "Q90",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Ordre chronologique",
    enonce: "Les documents A à D présentent des événements survenus durant le Régime britannique. Placez ces documents par ordre chronologique.",
    aspects: [
      {
        aspect: "Instructions au gouverneur Murray"
      },
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
            titre: "Document A",
            texte: "« Frères! […] Quand les Anglais vous ont offensés, ils nous ont offensés aussi. Je sais qu’ils vous ont désarmés et vous ont contraints de signer un traité […] Je ne vous demande pas votre concours direct, car vous ne pouvez me l’apporter : je ne demande que des provisions pour mes combattants. »",
            auteur: "Un chef amérindien s’adressant aux Canadiens  établis dans la région de Détroit",
            source: "Noël VALLERAND et Robert LAHAISE, L’Amérique du Nord britannique, 1760-1867 : les Canadiens  français, la colonisation britannique et la formation du Canada continental, Montréal, Kébékédit, 1974,  p. 11."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« […] sous la haute autorité du général en chef Amherst […], tout le pays sera sous la surveillance de l’armée anglaise […] \n\nComme le Canada n’est que provisoirement possession britannique, […] [on] va respecter autant que possible les structures du régime français. »",
            source: "Marcel TRUDEL, Initiation à la Nouvelle-France : histoire et  institutions, Montréal, Éditions HRW, 1971, p. 111 et 113."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Le 8 septembre 1760, le gouverneur Pierre de Rigaud de Vaudreuil signe [...]. Par cet acte, toute la Nouvelle-France passe sous le contrôle de la Grande-Bretagne, mettant fin au Régime français en Amérique du Nord. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 1, Éditions du Septentrion, 1995."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« Après la Conquête, les Britanniques réorganisent la colonie selon leurs institutions politiques et juridiques, ce qui transforme le gouvernement et réduit les droits politiques des Canadiens catholiques. »",
            source: "Beaulieu, Alain, et al. Les Autochtones du Québec : des premières alliances aux revendications contemporaines. Montréal : Boréal, 2013."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_abDc.png"
    },
    guide: "C – B – D – A."
  },
  {
    id: "Q91",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux historiens. Sur quel point précis sont-ils d’accord?",
    aspects: [
      {
        aspect: "Régime militaire"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« À l’exception d’un petit nombre d’administrateurs, de militaires et de marchands, la population canadienne demeure sur place après la Conquête et poursuit ses activités dans la colonie désormais administrée par les Britanniques. »",
            auteur: "Jacques Mathieu",
            source: "Mathieu, Jacques. La Nouvelle-France : Les Français en Amérique du Nord, XVIe-XVIIIe siècle. Québec : Les Presses de l’Université Laval, 1991."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« On calcule qu’au moins deux mille Canadiens quittèrent leur pays natal durant les dix années qui suivirent la capitulation de Montréal. […] Pour la masse de la population canadienne, il n’était pas question d’émigrer. »",
            auteur: "Marcel Trudel",
            source: "Marcel Trudel, Initiation à la Nouvelle-France : histoire et institutions, Holt, Rinehart et Winston, 1968."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Le départ de Canadiens après la Conquête ou la majorité de la population canadienne demeure dans la colonie après la Conquête ou peu de Canadiens quittent après la Conquête."
  },
  {
    id: "Q92",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Divergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux historiens. Sur quel point précis sont-ils en désaccord ?",
    aspects: [
      {
        aspect: "Régime militaire"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Si quelques officiers, administrateurs et marchands retournent en France après 1760, la société canadienne conserve l’essentiel de ses structures locales et de ses élites seigneuriales, religieuses et professionnelles. »",
            auteur: "Jean Hamelin",
            source: "Jean Hamelin, Histoire du Québec, Édisem, 1976."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« La Conquête provoque le départ d’une partie importante des élites françaises : officiers, administrateurs, marchands et membres du clergé. Cette émigration prive la colonie de plusieurs de ses cadres les plus influents. »",
            auteur: "Gilles Havard",
            source: "Gilles Havard et Cécile Vidal, Histoire de l’Amérique française, Flammarion, 2003."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "L’ampleur du départ des élites après la Conquête ou l’importance des conséquences de cette émigration ou le maintien ou non des élites dans la colonie."
  },
  {
    id: "Q93",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P3 — 1760 – 1791",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A à C présentent la position de trois acteurs concernant l’émigration des Canadiens à la suite de la Conquête. Nommez l’acteur qui présente une position différente et comparez sa position à celle des deux autres acteurs.",
    aspects: [
      {
        aspect: "Régime militaire"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« On calcule qu’au moins deux mille Canadiens quittèrent leur pays natal durant les dix années qui suivirent la capitulation de Montréal. […] Pour la masse de la population canadienne, il n’était pas question d’émigrer. »",
            auteur: "Marcel Trudel",
            source: "Marcel Trudel, Initiation à la Nouvelle-France : histoire et institutions, Montréal, Holt, Rinehart et Winston, 1968."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« La Conquête provoque le départ d’une partie importante des élites françaises : officiers, administrateurs, marchands et membres du clergé. Cette émigration prive la colonie de plusieurs de ses cadres les plus influents. »",
            auteur: "Gilles Havard",
            source: "Gilles Havard et Cécile Vidal, Histoire de l’Amérique française, Paris, Flammarion, 2003."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Si quelques officiers, administrateurs et marchands retournent en France après 1760, la société canadienne conserve l’essentiel de ses structures locales et de ses élites seigneuriales, religieuses et professionnelles. »",
            auteur: "Jean Hamelin",
            source: "Jean Hamelin, Histoire du Québec, Montréal, Édisem, 1976."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "Gilles Havard soutient que le départ des élites françaises est important, tandis que Marcel Trudel et Jean Hamelin estiment qu’il est limité."
  },
  {
    id: "Q94",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P3 — 1760 – 1791",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A à C, indiquez s’il y a changement ou continuité dans le commerce des fourrures dans la colonie. Justifiez votre choix par des faits et un repère de temps.",
    aspects: [
      {
        aspect: "Économie coloniale"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "commence_fourrure_n-f.png",
            soustitre: "1713 à 1760",
            source: "Illustration générée par ChatGPT (OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« La traite des fourrures [est] une activité économique importante après la Conquête. La nouvelle \nbourgeoisie marchande d’origine britannique, déjà très active dans le commerce transatlantique, \nparticipe de plus en plus au commerce [des fourrures]. Toutefois, ce sont les Canadiens qui \ntravaillent sur le terrain, car ils connaissent le territoire et possèdent l’expertise nécessaire pour \nfaire la traite avec les Autochtones. »",
            soustitre: "1760 à 1783",
            source: "Christophe HORGUELIN et autres, Fresques, manuel de l’élève, histoire et éducation à la citoyenneté, 2e année du 2e cycle du secondaire, Montréal, Graficor, 2008, t. 1, p. 177."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "Il y a changement, car après la Conquête, des marchands britanniques prennent part au commerce des fourrures. OU Il y a continuité, car entre 1713 et 1783, les Amérindiens (ou les Canadiens) sont des acteurs importants dans le commerce des fourrures. OU Il y a continuité, car après la Conquête, la fourrure est toujours le principal produit d’exportation dans la colonie."
  },
  {
    id: "Q95",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "4 documents",
    enonce: "Les documents A à D font référence à la Proclamation royale et à l’Acte de Québec. Indiquez à l’endroit approprié la lettre correspondant à chacun des documents.",
    aspects: [
      {
        aspect: "Acte de Québec"
      },
      {
        aspect: "Proclamation royale"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« [...] les autorités britanniques réservent aux Premières Nations les territoires situés à l’ouest des Appalaches afin de limiter l’expansion des Treize colonies et de maintenir la paix sur la frontière. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 2, Québec, Septentrion, 1995."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "carte_terr_acte_quebec.png",
            source: "Récitus."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "carte_terr_proclamation_royale.png",
            source: "Récitus."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« [...] les limites de la Province de Québec sont étendues jusqu’aux Grands Lacs et à la vallée de l’Ohio, ce qui agrandit considérablement le territoire administré depuis Québec. »",
            source: "Marcel Trudel, Initiation à la Nouvelle-France, Montréal, Holt, Rinehart et Winston, 1968."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Proclamation royale",
        "Acte de Québec"
      ],
      double: true
    },
    guide: {
      type: "grille",
      entetes: [
        "Proclamation royale",
        "Acte de Québec"
      ],
      rangees: [
        [
          "A et C",
          "B et D"
        ]
      ]
    }
  },
  {
    id: "Q96",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Changement",
    enonce: "Indiquez un changement dans le commerce des fourrures dans la colonie à la suite de la guerre de la Conquête.",
    aspects: [
      {
        aspect: "Économie coloniale"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Après 1760, les négociants britanniques prennent rapidement le contrôle du commerce des fourrures, activité jusque-là dominée par les marchands canadiens et français. »",
            source: "Marcel Trudel, Initiation à la Nouvelle-France, Montréal, Holt, Rinehart et Winston, 1968."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« À la suite de la Conquête, des marchands venus de Grande-Bretagne s’imposent dans les réseaux commerciaux de la colonie et prennent une place importante dans la traite des fourrures. »",
            source: "Jacques Mathieu, La Nouvelle-France : Les Français en Amérique du Nord, Québec, Les Presses de l'Université Laval, 1991."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Après la Conquête, des marchands britanniques remplacent progressivement les marchands français dans le commerce des fourrures."
  },
  {
    id: "Q97",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Continuité",
    enonce: "Indiquez une continuité dans le commerce des fourrures dans la colonie à la suite de la guerre de la Conquête.",
    aspects: [
      {
        aspect: "Économie coloniale"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "exportations_nouvelle_france_1755.png",
            soustitre: "Les exportations de la Nouvelle-France vers 1755",
            source: "Fernand Ouellet, Histoire économique et sociale du Québec."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "exportations_province_quebec_1770.png",
            soustitre: "Les exportations de la Province de Québec vers 1770",
            source: "Alain Laberge, Le Québec sous le régime britannique."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "La traite des fourrures demeure une activité économique importante dans la colonie ou la fourrure demeure un important produit d’exportation ou le commerce des fourrures se poursuit après la Conquête."
  },
  {
    id: "Q98",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Continuité",
    enonce: "Indiquez un élément de continuité lié à la croissance de la population canadienne entre \n1760 et 1840.",
    aspects: [
      {
        aspect: "Population"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "1760-1840_accroissement_naturel.png",
            soustitre: "Naissances et décès dans la population canadienne entre 1760 et 1840",
            source: "Données approximatives inspirées de Jean Hamelin, Marcel Trudel et Fernand Ouellet; graphique réalisé par Sébastien Bergeron, 2026."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Le nombre de naissances demeure supérieur au nombre de décès ou le taux de natalité demeure élevé ou l’accroissement naturel demeure la principale cause de la croissance de la population."
  },
  {
    id: "Q99",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P4 — 1791 – 1840",
    points: 3,
    enonce: "Expliquez comment l’état de santé des immigrants des îles Britanniques à leur arrivée dans la colonie amène les autorités à agir au cours de la première moitié du 19e siècle. \n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux. \n\n• L’état de santé des immigrants des îles Britanniques à leur arrivée dans la colonie\n• Un problème de santé publique dans la colonie\n• Une action des autorités coloniales à Grosse-Île",
    aspects: [
      {
        aspect: "Mouvements migratoires"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "1791-1840_grosse_ile.png",
            soustitre: "Grosse-Île et l’accueil des immigrants",
            source: "Bibliothèque et Archives Canada, C-013656; image modifiée par Sébastien Bergeron, 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Depuis lundi matin, Montréal est dans la consternation et l’alarme croît à chaque instant. Il n’y a plus de doute sur l’existence du choléra, et nous recommandons au public la stricte observation des Règlements du Bureau sanitaire. »",
            source: "Extrait du journal La Minerve, 14 juin 1832."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "1820_immigration_irlandaise.png",
            source: "The Illustrated London News/Bibliothèque et Archives Canada/C-006556; image modifiée par Sébastien Bergeron, 2026."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 5
    },
    guide: "Les immigrants sont malades (ou affaiblis) à leur arrivée dans la colonie (L’état de santé des immigrants des îles Britanniques à leur arrivée dans la colonie), ce qui contribue à propager des épidémies (ou le choléra) dans la population (Un problème de santé publique dans la colonie). Cette situation amène les autorités coloniales à mettre en place une station de quarantaine (ou un hôpital) à Grosse-Île ou à isoler les immigrants à Grosse-Île (Une action des autorités coloniales à Grosse-Île)."
  },
  {
    id: "Q100",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A à C présentent la position de trois groupes à l’égard de l’union des deux Canadas recommandée dans le Rapport Durham. Nommez le groupe qui présente une position différente et comparez sa position à celle des deux autres groupes.",
    aspects: [
      {
        aspect: "Rapport Durham"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« […] on organise tant bien que mal    en l’absence des principaux chefs canadiens-français une résistance au projet d’union [des deux Canadas]. Le clergé  par la bouche de Monseigneur Signay et de Monseigneur Lartigue  s’oppose fermement. »",
            auteur: "Le clergé catholique",
            source: "Jacques LACOURSIÈRE, Jean PROVENCHER et Denis VAUGEOIS, Canada-Québec, 1534-2010, nouvelle édition mise à jour, Québec, Les éditions du Septentrion, 2011, p. 253."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« […] alors que la responsabilité ministérielle est [une idée] bien acceptée par les membres de la bourgeoisie professionnelle [francophone], l’union, pour sa part, suscite l’opposition de tous. »",
            auteur: "La bourgeoisie professionnelle francophone",
            source: "Jean-François CARDIN et autres, Le Québec : héritages et projets, 2e éd., Laval, Éditions HRW, 1994, p. 227."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Quant à l’union des deux colonies, les grands bourgeois anglophones du Bas-Canada sont d’avis que cette mesure serait bénéfique à l’économie et qu’elle diminuerait l’emprise des Canadiens à la Chambre d’assemblée. »",
            auteur: "La bourgeoisie anglophone",
            source: "Sylvain FORTIN et autres, Fresques, manuel de l’élève B, histoire et éducation à la citoyenneté, 1re année du 2e cycle du secondaire, Montréal, Graficor, 2007, p. 37."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "La bourgeoisie anglophone est en faveur (ou en faveur de l’union) (la différence), alors que le clergé et la bourgeoisie professionnelle francophone s’y opposent (la similitude). \noo\nLa bourgeoisie anglophone est en faveur (ou en faveur de l’union) (la différence), contrairement aux deux autres groupes (la similitude)."
  },
  {
    id: "Q101",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "3 documents",
    enonce: "Les documents A à C présentent les réactions de différents groupes à la suite du Rapport Durham. Associez chaque position au groupe correspondant.",
    aspects: [
      {
        aspect: "Rapport Durham"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les professions libérales rejettent vigoureusement les conclusions de Durham, voyant dans l’union un instrument destiné à faire disparaître la nationalité canadienne-française. »",
            source: "Jean-Paul BERNARD, Les Rouges, Montréal, Presses de l’Université du Québec, 1971."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les marchands britanniques appuient l’union des deux Canadas, convaincus qu’elle facilitera le commerce et permettra de mieux financer les infrastructures nécessaires au développement économique. »",
            source: "Brian YOUNG, In Its Corporate Capacity, Montréal, McGill-Queen’s University Press, 1986."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« [...] Mgr Jean-Jacques Lartigue, considère que l’union des deux Canadas pourrait favoriser le retour à la paix et à l’ordre, à condition que les droits de l’Église catholique soient respectés. »",
            source: "Jean HAMELIN et Nicole GAGNON, Histoire du catholicisme québécois, Montréal, Boréal, 1984."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Bourgeoisie anglophone",
        "Bourgeoisie professionnelle francophone",
        "Clergé catholique"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Bourgeoisie anglophone ",
        "Bourgeoisie professionnelle francophone ",
        "Clergé catholique"
      ],
      rangees: [
        [
          "B",
          "A",
          "C"
        ]
      ]
    }
  },
  {
    id: "Q102",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "3 documents",
    enonce: "Les documents A à C présentent les réactions de différents groupes à la suite du Rapport Durham. Associez chaque position au groupe correspondant.",
    aspects: [
      {
        aspect: "Rapport Durham"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« [Il] accueille favorablement les recommandations de Durham, car il espère que l’union politique mettra fin aux tensions et permettra à l’Église de conserver son influence sur la société canadienne-française. »",
            source: "Jacques LACOURSIÈRE, Histoire populaire du Québec, tome 3, Québec, Septentrion, 1996."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les milieux d’affaires voient dans l’union des Canadas une mesure nécessaire pour assurer la stabilité politique et stimuler la croissance économique de la colonie. »",
            source: "Gilles PAQUET et Jean-Pierre WALLOT, Patronage et pouvoir, Montréal, Boréal, 1973."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Pour [ses membres], l’union des Canadas signifie la perte du contrôle politique exercé par la majorité canadienne-française au Bas-Canada. »",
            source: "Allan GREER, Patriotes et peuple du Bas-Canada, Montréal, Boréal, 1997."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Bourgeoisie anglophone",
        "Bourgeoisie professionnelle francophone",
        "Clergé catholique"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Bourgeoisie anglophone ",
        "Bourgeoisie professionnelle francophone ",
        "Clergé catholique"
      ],
      rangees: [
        [
          "B",
          "C",
          "A"
        ]
      ]
    }
  },
  {
    id: "Q103",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Avant et après",
    enonce: "Les documents A à D font référence aux soulèvements de 1837-1838. Indiquez si les faits présentés dans ces documents se déroulent avant ou après l’Assemblée des Six-Comtés.",
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
            ref: "execution_patriotes.png",
            soustitre: "Exécution des Patriotes",
            source: "Bibliothèque et Archives Canada/C-013493."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les résolutions Russell ferment la porte à toute réforme constitutionnelle sérieuse. En refusant les principales revendications des Patriotes, Londres confirme que les Canadiens français n’obtiendront aucun véritable contrôle sur leur gouvernement. »",
            source: "Gilles Laporte, Patriotes et Loyaux : mobilisation politique et leadership régional en 1837 et 1838, Québec, Septentrion, 2004."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Les 92 Résolutions constituent le programme politique le plus complet jamais formulé par le Parti patriote pour réclamer une véritable démocratie parlementaire. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 3, Québec, Septentrion, 1996."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            ref: "bataille_st-eustache.png",
            soustitre: "Bataille de Saint-Eustache",
            source: "Bibliothèque et Archives Canada/C-000396."
          }
        ]
      }
    ],
    reponse: {
      type: "avant-apres",
      label: "L’Assemblée des Six-Comtés"
    },
    guide: {
      type: "grille",
      entetes: [
        "Avant",
        "Assemblée des Six-Comtés",
        "Après"
      ],
      rangees: [
        [
          "B et C",
          "",
          "A et D"
        ]
      ]
    }
  },
  {
    id: "Q104",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Ordre chronologique",
    enonce: "Les documents A à D présentent des événements liés aux soulèvements de 1837-1838. Placez ces documents par ordre chronologique.",
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
            ref: "execution_patriotes.png",
            soustitre: "Exécution des Patriotes",
            source: "Bibliothèque et Archives Canada/C-013493."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les résolutions Russell ferment la porte à toute réforme constitutionnelle sérieuse. En refusant les principales revendications des Patriotes, Londres confirme que les Canadiens français n’obtiendront aucun véritable contrôle sur leur gouvernement. »",
            source: "Gilles Laporte, Patriotes et Loyaux : mobilisation politique et leadership régional en 1837 et 1838, Québec, Septentrion, 2004."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Les 92 Résolutions constituent le programme politique le plus complet jamais formulé par le Parti patriote pour réclamer une véritable démocratie parlementaire. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 3, Québec, Septentrion, 1996."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            ref: "bataille_st-eustache.png",
            soustitre: "Bataille de Saint-Eustache",
            source: "Bibliothèque et Archives Canada/C-000396."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_abDc.png"
    },
    guide: "C - B - D - A"
  },
  {
    id: "Q105",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de la mise en place de tarifs préférentiels par la métropole britannique sur le commerce du bois dans les colonies.",
    aspects: [
      {
        aspect: "Commerce du bois"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "exportations_bois_1800_1840.png",
            soustitre: "Exportations de bois vers la Grande-Bretagne",
            source: "Données approximatives reconstituées à des fins pédagogiques à partir de synthèses historiques sur le commerce du bois au Bas-Canada."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les exportations de bois des colonies vers la Grande-Bretagne augmentent fortement."
  },
  {
    id: "Q106",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Changement",
    enonce: "Indiquez un changement dans les exportations de bois vers la Grande-Bretagne au début du XIXe siècle.",
    aspects: [
      {
        aspect: "Commerce du bois"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "exportations_bois_1800_1840.png",
            soustitre: "Exportations de bois vers la Grande-Bretagne",
            source: "Données approximatives reconstituées à des fins pédagogiques à partir de synthèses historiques sur le commerce du bois au Bas-Canada."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les exportations de bois des colonies vers la Grande-Bretagne augmentent fortement après 1806."
  },
  {
    id: "Q107",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence du Traité de 1783 sur le commerce des fourrures dans la Province de Québec.",
    aspects: [
      {
        aspect: "Économie coloniale"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Le Traité de 1783 […] créa de vives inquiétudes chez les commerçants de la fourrure [de la Province de Québec], les deux tiers des approvisionnements venant de cette région [cédée aux \nÉtats-Unis]. »",
            source: "Noël VALLERAND et Robert LAHAISE, L’Amérique du Nord britannique, 1760-1867 : les Canadiens français, la colonisation britannique et la formation du Canada continental, Montréal,  Kébékédit, 1974, p. 70."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les commerçants de la Province de Québec perdent une partie importante de leur territoire d’approvisionnement en fourrures au profit des États-Unis."
  },
  {
    id: "Q108",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Changement",
    enonce: "Indiquez un changement dans la composition de la population de la colonie entre 1763 et 1784.",
    aspects: [
      {
        aspect: "Situation sociodémographique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "1763.png",
            soustitre: "Composition de la population de la colonie en 1763",
            source: "adapté de Paul-André Linteau et al., Histoire du Québec contemporain, Montréal, Boréal."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "1783.png",
            soustitre: "Composition de la population de la colonie en 1783",
            source: "adapté de Jean Hamelin et Yves Roby, Histoire économique du Québec, 1851-1896."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "La proportion de la population anglophone augmente entre 1763 et 1784 ou la population anglophone passe de 1 % à 15 % ou la proportion de la population francophone diminue entre 1763 et 1784."
  },
  {
    id: "Q109",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Continuité",
    enonce: "Indiquez une continuité dans la composition de la population de la colonie entre 1763 et 1784.",
    aspects: [
      {
        aspect: "Situation sociodémographique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "1763.png",
            soustitre: "Composition de la population de la colonie en 1763",
            source: "adapté de Paul-André Linteau et al., Histoire du Québec contemporain, Montréal, Boréal."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "1783.png",
            soustitre: "Composition de la population de la colonie en 1783",
            source: "adapté de Jean Hamelin et Yves Roby, Histoire économique du Québec, 1851-1896."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "La population francophone demeure majoritaire dans la colonie entre 1763 et 1784 ou la population anglophone demeure minoritaire dans la colonie entre 1763 et 1784."
  },
  {
    id: "Q110",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P3 — 1760 – 1791",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A et B, indiquez s’il y a changement ou continuité dans la composition de la population de la colonie entre 1763 et 1784. Justifiez votre choix par des faits et un repère de temps.",
    aspects: [
      {
        aspect: "Situation sociodémographique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "1763.png",
            soustitre: "Composition de la population de la colonie en 1763",
            source: "adapté de Paul-André Linteau et al., Histoire du Québec contemporain, Montréal, Boréal."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "1783.png",
            soustitre: "Composition de la population de la colonie en 1783",
            source: "adapté de Jean Hamelin et Yves Roby, Histoire économique du Québec, 1851-1896."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Il y a une continuité dans la composition de la population de la colonie entre 1763 et 1784 puisque les francophones demeurent majoritaires.\n\nIl y a un changement dans la composition de la population de la colonie puisque la proportion de la population anglophone augmente entre 1763 et 1784. Elle passe de 1 % à 15 % de la population."
  },
  {
    id: "Q111",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P3 — 1760 – 1791",
    points: 3,
    enonce: "Expliquez comment le résultat de la guerre d’indépendance américaine en 1783 entraîne un changement démographique dans la Province de Québec.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• Le résultat de la guerre d’indépendance américaine en 1783\n• Un groupe qui migre vers la Province de Québec\n• Un changement démographique dans la Province de Québec",
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
            texte: "« À la suite du traité de Paris de 1783, la Grande-Bretagne reconnaît l’indépendance des États-Unis et cède les territoires situés au sud des Grands Lacs. Cette nouvelle frontière bouleverse l’organisation territoriale de l’Amérique du Nord britannique et entraîne le déplacement de milliers [de personnes] vers la Province de Québec. »",
            source: "— Jean Hamelin, Histoire du Québec, Toulouse, Privat, coll. « Univers de la France et des pays francophones », 1976, p. 153."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "loyalistes.png",
            source: "Bibliothèque et Archives Canada/C-020587."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Après la guerre d’Indépendance américaine, l’arrivée de nouveaux habitants venus des anciennes colonies britanniques modifie progressivement l’équilibre démographique de la Province de Québec. Bien que les Canadiens francophones demeurent majoritaires, la présence anglophone devient davantage visible dans plusieurs régions de la colonie. »",
            source: "Paul-André Linteau, René Durocher, Jean-Claude Robert et François Ricard, Histoire du Québec contemporain, tome 1 : De la Confédération à la crise (1867-1929), Montréal, Boréal, 1989."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 5
    },
    guide: "En 1783, la Grande-Bretagne reconnaît l’indépendance des États-Unis à la suite de la victoire américaine lors de la guerre d’indépendance (le résultat de la guerre d’indépendance américaine en 1783). Plusieurs Loyalistes quittent les États-Unis pour s’établir dans la Province de Québec (un groupe qui migre vers la Province de Québec. Cette migration augmente la population anglophone dans la colonie et modifie la composition démographique de la Province de Québec (un changement démographique dans la Province de Québec)."
  },
  {
    id: "Q112",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P1 — Des origines à 1608",
    points: 3,
    enonce: "Expliquez comment des changements dans le commerce européen favorisent les voyages d’exploration au 16e siècle. \n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• Un changement dans le commerce en Europe\n• Un objectif des puissances européennes\n• Un moyen utilisé par les royaumes européens",
    aspects: [
      {
        aspect: "Premiers contacts"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Au cours du 15e siècle, plusieurs routes commerciales utilisées par les marchands européens deviennent plus difficiles d’accès. Certains produits provenant de l’Orient circulent moins facilement vers l’Europe. »",
            source: "Adapté de Marcel Trudel, Initiation à la Nouvelle-France : histoire et institutions, Montréal, Holt, Rinehart et Winston, 1968."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "voyages_exploration.png",
            source: "Récitus."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Les royaumes européens cherchent à développer de nouvelles voies maritimes afin d’accroître leurs échanges commerciaux avec les régions orientales. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 1 : Des origines à 1791, Québec, Septentrion, 1995."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 5
    },
    guide: "La prise de Constantinople par les Ottomans modifie le commerce entre l’Europe et l’Asie (changement dans le commerce européen). Plusieurs royaumes européens cherchent alors une nouvelle route maritime pour accéder à l'Asie (un objectif des royaumes européens). Pour atteindre cet objectif, plusieurs États européens financent des voyages d’exploration au 16e siècle (un moyen utilisé)."
  },
  {
    id: "Q113",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une raison qui explique la fréquentation du golfe du Saint-Laurent par les pêcheurs européens au 16e siècle.",
    aspects: [
      {
        aspect: "Premiers contacts"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "premiers_contacts",
            source: "Récitus."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les pêcheurs européens fréquentent le golfe du Saint-Laurent afin d’exploiter les importantes ressources halieutiques, notamment la morue ou les Européens fréquentent le golfe du Saint-Laurent pour pratiquer la pêche à la morue."
  },
  {
    id: "Q114",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de la fréquentation du golfe du Saint-Laurent par les Européens au 16e siècle pour les nations autochtones.",
    aspects: [
      {
        aspect: "Premiers contacts"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "premiers_contacts"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les nations autochtones développent des échanges commerciaux avec les Européens ou certaines nations autochtones entrent en contact avec les Européens par le commerce ou les contacts entre Autochtones et Européens deviennent plus fréquents dans le golfe du Saint-Laurent."
  },
  {
    id: "Q115",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P1 — Des origines à 1608",
    points: 3,
    enonce: "Expliquez comment les activités économiques pratiquées par les Européens dans le golfe du Saint-Laurent favorisent le développement d’échanges avec certaines nations autochtones au 16e siècle.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux :\n\n• Une activité pratiquée par les Européens dans le golfe du Saint-Laurent\n• Un lieu d’échange entre les groupes autochtones et européens\n• Des produits échangés entre les Européens et les nations autochtones",
    aspects: [
      {
        aspect: "Premiers contacts"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Sur certaines côtes du golfe du Saint-Laurent, des groupes autochtones fréquentent les endroits utilisés par les Européens pour préparer et faire sécher la morue durant la belle saison. »",
            source: "Adapté de Laurier Turgeon, Pêcheurs basques et Amérindiens au XVIe siècle, Québec, Septentrion, 2003."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "premiers_contacts",
            source: "Récitus."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Les contacts entre Européens et Autochtones favorisent la circulation de produits provenant des deux groupes, comme des peaux d’animaux et des objets fabriqués en Europe. »",
            source: "Adapté de Bruce G. Trigger, Les Enfants d’Aataentsic : l’histoire du peuple huron, Montréal, Libre Expression, 1991."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 5
    },
    guide: "Les Européens fréquentent le golfe du Saint-Laurent pour pratiquer la pêche et la chasse à la baleine (une activité pratiquée par les Européens dans le golfe du Saint-Laurent). Leur présence favorise des rencontres avec certaines nations autochtones dans des lieux de séchage de la morue situés sur les rives du golfe (un lieu d’échange entre les groupes autochtones et européens). Des produits européens, comme des couteaux, et des produits autochtones, comme des fourrures, sont alors échangés sous forme de troc (des produits échangés entre les Européens et certaines nations autochtones)."
  },
  {
    id: "Q116",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "4 documents",
    enonce: "Les documents A à D présentent des faits liés aux explorations européennes et aux premiers contacts en Amérique du Nord. Indiquez à l’endroit approprié la lettre correspondant à chacun des éléments suivants.",
    aspects: [
      {
        aspect: "Exploration et occupation du territoire par les Français"
      },
      {
        aspect: "Premiers contacts"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "Au cours du 16e siècle, un navigateur français explore le golfe puis le fleuve Saint-Laurent, rencontre des populations iroquoiennes et prend possession du territoire au nom du roi de France. »",
            source: "Gilles Havard et Cécile Vidal, Histoire de l’Amérique française, Paris, Flammarion, 2003."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« À la fin du 15e siècle, un navigateur au service de la couronne anglaise longe les côtes de l’Atlantique nord et signale l’abondance des eaux poissonneuses fréquentées par plusieurs pêcheurs européens. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 1 : Des origines à 1791, Québec, Septentrion, 1995."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Bien avant l’arrivée des Français dans la vallée du Saint-Laurent, des navigateurs venus du Groenland auraient établi un campement saisonnier à l’extrémité nord de Terre-Neuve, dans une région riche en ressources naturelles. »",
            source: "Marcel Trudel, Histoire de la Nouvelle-France, tome 1 : Les vaines tentatives, 1524-1603, Montréal, Fides, 1963."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« Au début du 17e siècle, des représentants français concluent des ententes avec certaines nations autochtones afin de favoriser le commerce et de consolider des alliances dans un contexte de rivalités intertribales. »",
            source: "Denys Delâge, Le pays renversé : Amérindiens et Européens en Amérique du Nord-Est, 1600-1664, Montréal, Boréal, 1991."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Alliance franco-amérindienne",
        "Établissement viking à l’Anse-aux-Meadows",
        "Voyage de Jean Cabot",
        "Voyages de Jacques Cartier"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Alliance franco-amérindienne",
        "Établissement viking à l’Anse-aux-Meadows",
        "Voyage de Jean Cabot",
        "Voyages de Jacques Cartier"
      ],
      rangees: [
        [
          "D",
          "C",
          "B",
          "A"
        ]
      ]
    }
  },
  {
    id: "Q117",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P3 — 1760 – 1791",
    points: 3,
    enonce: "Expliquez comment la guerre d’Indépendance américaine entraîne une réorganisation du commerce des fourrures dans la Province de Québec et la région des Grands Lacs.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux :\n\n• un territoire perdu à la suite du traité de Paris de 1783;\n• une conséquence sur les activités des compagnies de fourrures;\n• une action entreprise par les compagnies afin de développer le commerce vers le Nord-Ouest.",
    aspects: [
      {
        aspect: "Économie coloniale"
      },
      {
        aspect: "Invasion américaine"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Après 1783, les Britanniques doivent composer avec la perte d’une vaste région qui servait auparavant aux échanges et aux déplacements commerciaux vers l’intérieur du continent. »",
            source: "Paul-André Linteau et al., Histoire du Québec contemporain, Boréal, 1989."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les marchands de Montréal doivent revoir leurs réseaux commerciaux après la perte des territoires situés au sud des Grands Lacs. »",
            source: "Gilles Havard et Cécile Vidal, Histoire de l’Amérique française, Flammarion, 2003."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "graphique_poste_de_traite_1780.png",
            soustitre: "Nombre de postes de traite établis vers l'Ouest"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 5
    },
    guide: "Le traité de Paris de 1783 accorde aux États-Unis les territoires situés au sud des Grands Lacs (un territoire perdu à la suite du traité de Paris de 1783). Cette perte territoriale complique les activités des compagnies de fourrures et l’accès à certaines routes commerciales (une conséquence sur les activités des compagnies de fourrures). Afin de poursuivre et développer le commerce des fourrures, les compagnies déplacent leurs activités vers le Nord-Ouest et établissent de nouveaux postes de traite (une action entreprise par les compagnies afin de développer le commerce vers le Nord-Ouest)."
  },
  {
    id: "Q118",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P2 — 1608 – 1760",
    points: 3,
    enonce: "Expliquez comment le commerce des fourrures favorise les relations économiques entre la métropole française et sa colonie au début du 17e siècle.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux :\n\n• une ressource exploitée dans la colonie;\n• une mesure économique imposée par la métropole;\n• une conséquence économique pour la colonie.",
    aspects: [
      {
        aspect: "Commerce des fourrures"
      },
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
            ref: "mercantilisme_fourrures_n-f.png",
            source: "Récitus."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les Européens accordent une grande valeur aux peaux de castor provenant de l’Amérique du Nord, car elles servent largement à la fabrication de chapeaux de feutre très populaires sur les marchés européens au 17e siècle. »",
            source: "Allan Greer, Brève histoire des peuples de la Nouvelle-France, Boréal, 1998."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Malgré les engagements pris envers la monarchie française, plusieurs compagnies privilégient l’exploitation des ressources et investissent peu dans le peuplement et les infrastructures de la colonie. »",
            source: "Gilles Havard et Cécile Vidal, Histoire de l’Amérique française, Flammarion, 2003."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 5
    },
    guide: "Les habitants de la Nouvelle-France exploitent des ressources comme les fourrures de castor (une ressource exploitée dans la colonie). La métropole française impose une politique économique où la colonie doit fournir des matières premières à la France et acheter les produits transformés provenant de la métropole (une mesure économique imposée par la métropole). Cette situation favorise le développement du commerce des fourrures ou plusieurs compagnies privilégient les profits commerciaux plutôt que le peuplement et le développement de la colonie (une conséquence économique pour la colonie)."
  },
  {
    id: "Q119",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Ordre chronologique",
    enonce: "Les documents A à D présentent des faits liés aux relations franco-amérindiennes sous le régime français. Placez les documents en ordre chronologique.",
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
            titre: "Document A",
            texte: "« [...] le roi de France envoie le régiment de Carignan-Salières en Nouvelle-France afin de protéger la colonie contre les attaques iroquoises et de rétablir la sécurité dans la vallée du Saint-Laurent. »",
            source: "Marcel Trudel, Initiation à la Nouvelle-France, Holt, Rinehart et Winston, 1968."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "gravure_destruction_huronie.png",
            source: "llustration pédagogique inspirée des gravures de Theodor de Bry portant sur les conflits autochtones en Amérique du Nord."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "bataille_lac_champlain.png",
            soustitre: "Alliance franco-amérindienne",
            source: "Theodor de Bry, gravure du 17e siècle, Bibliothèque et Archives Canada."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« [...] les Français et plusieurs Premières Nations concluent la Grande Paix de Montréal, mettant fin à des décennies de conflits et favorisant la stabilité dans la région des Grands Lacs. »",
            source: "Gilles Havard et Cécile Vidal, Histoire de l’Amérique française, Flammarion, 2003."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_bcAd.png"
    },
    guide: "C - B - A - D"
  },
  {
    id: "Q120",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "4 documents",
    enonce: "Les documents A à D présentent des faits liés aux relations franco-amérindiennes sous le régime français. Associez chaque document à l’événement correspondant.",
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
            titre: "Document A",
            texte: "« Les troupes [...] construisent des forts le long de la rivière Richelieu afin de limiter les incursions iroquoises vers les établissements français. »",
            source: "Allan Greer, Brève histoire des peuples de la Nouvelle-France, Boréal, 1998."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "gravure_destruction_huronie.png",
            soustitre: "Attaques iroquoises",
            source: "llustration pédagogique inspirée des gravures de Theodor de Bry portant sur les conflits autochtones en Amérique du Nord."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "bataille_lac_champlain.png",
            soustitre: "Bataille du lac Champlain",
            source: "Theodor de Bry, gravure du 17e siècle, Bibliothèque et Archives Canada."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« La signature [de l'entente] permet aux Français de sécuriser leurs alliances et de poursuivre plus facilement le commerce des fourrures dans l’intérieur du continent. »",
            source: "John A. Dickinson et Brian Young, Brève histoire socio-économique du Québec, Septentrion, 2003."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Alliance franco-amérindienne",
        "Arrivée du régiment Carignan-Salières",
        "Destruction de la Huronie",
        "Grande Paix de Montréal"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Alliance franco-amérindienne",
        "Arrivée du régiment Carignan-Salières",
        "Destruction de la Huronie",
        "Grande Paix de Montréal"
      ],
      rangees: [
        [
          "C",
          "A",
          "B",
          "D"
        ]
      ]
    }
  },
  {
    id: "Q121",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence des guerres iroquoises sur les populations huronnes au 17e siècle.",
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
            titre: "Document A",
            ref: "destruction_huronie.png",
            source: "Récitus."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "La destruction des villages hurons ou la destruction de la Huronie ou la dispersion des Hurons après les attaques iroquoises."
  },
  {
    id: "Q122",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence des attaques iroquoises sur le commerce des fourrures en Nouvelle-France au 17e siècle.",
    aspects: [
      {
        aspect: "Commerce des fourrures"
      },
      {
        aspect: "Guerre et diplomatie chez les Premières Nations"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "exportations_fourrures_huronie.png",
            soustitre: "Nombre estimé de peaux exportées en Nouvelle-France",
            source: "adaptation pédagogique à partir des Archives de la Nouvelle-France et de travaux d’historiens sur le commerce des fourrures."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Il y a une diminution des exportations de fourrures ou il y a un affaiblissement des alliances commerciales ou difficulté pour les Français d’obtenir des fourrures ou insécurité sur les routes commerciales."
  },
  {
    id: "Q123",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P2 — 1608 – 1760",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir du document A, indiquez s’il y a un changement ou une continuité dans le commerce des fourrures dans la colonie entre 1620 et 1670. Justifiez votre réponse à l’aide de faits et d’un repère de temps.",
    aspects: [
      {
        aspect: "Commerce des fourrures"
      },
      {
        aspect: "Guerre et diplomatie chez les Premières Nations"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "exportations_fourrures_huronie.png",
            soustitre: "Nombre estimé de peaux exportées en Nouvelle-France",
            source: "adaptation pédagogique à partir des Archives de la Nouvelle-France et de travaux d’historiens sur le commerce des fourrures."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "Il y a un changement dans le commerce des fourrures. Les exportations diminuent fortement autour de 1650.\n\nOU\n\nIl y a une continuité dans le commerce des fourrures puisque les exportations demeurent présentes durant toute la période entre 1620 et 1670."
  },
  {
    id: "Q124",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Changement",
    enonce: "Indiquez un changement observé dans les exportations de fourrures autour de 1650.",
    aspects: [
      {
        aspect: "Commerce des fourrures"
      },
      {
        aspect: "Guerre et diplomatie chez les Premières Nations"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "grahique_b_exportations_fourrures_huronie.png",
            soustitre: "Exportations estimées de pelleteries vers la France",
            source: "adaptation pédagogique à partir des Archives de la Nouvelle-France et de travaux d’historiens sur le commerce des fourrures."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les exportations de fourrures diminuent fortement autour de 1650."
  },
  {
    id: "Q125",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P2 — 1608 – 1760",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
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
            titre: "Document A",
            ref: "gravure_destruction_huronie.png",
            soustitre: "Destruction de la Huronie",
            source: "« Illustration pédagogique inspirée des gravures de Theodor de Bry portant sur les conflits autochtones en Amérique du Nord. »"
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_1575-1775.png"
    },
    guide: "B"
  },
  {
    id: "Q126",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "2 documents",
    enonce: "Les documents A et B présentent deux compagnies commerciales fondées au XVIIe siècle. Associez chaque document à la compagnie correspondante.",
    aspects: [
      {
        aspect: "Commerce des fourrures"
      },
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
            texte: "« Grâce à sa charte royale [la compagnie] devient un acteur majeur de l’expansion britannique dans le Nord canadien. [...] [la fondation d'une telle entreprise] transforme profondément le commerce des fourrures en Amérique du Nord. »",
            source: "John S. Galbraith, The Hudson’s Bay Company as an Imperial Factor, Berkeley, University of California Press, 1957."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Richelieu voit dans [la création de cette compagnie] un moyen de renforcer à la fois la colonisation et l’influence française en Amérique du Nord. »",
            source: "Gilles Havard et Cécile Vidal, Histoire de l’Amérique française, Paris, Flammarion, 2003."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Compagnie de la Baie d'Hudson",
        "Compagnie des Cent Associés"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Compagnie de la Baie d'Hudson",
        "Compagnie des Cent Associés"
      ],
      rangees: [
        [
          "A",
          "B"
        ]
      ]
    }
  },
  {
    id: "Q127",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P2 — 1608 – 1760",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
    aspects: [
      {
        aspect: "Commerce des fourrures"
      },
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
            texte: "« En fondant une nouvelle compagnie au XVIIe siècle, la monarchie française cherche à mieux organiser le commerce, accroître le peuplement et consolider son autorité dans la vallée du Saint-Laurent. »",
            soustitre: "Création de la Compagnie des Cent Associés",
            source: "Gilles Havard et Cécile Vidal, Histoire de l’Amérique française, Paris, Flammarion, 2003."
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
    id: "Q128",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P2 — 1608 – 1760",
    points: 3,
    enonce: "Expliquez comment la destruction de la Huronie entraîne un changement dans l’occupation du territoire par les Hurons-Wendats au 17e siècle.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux :\n\n• un conflit impliquant les Haudenosaunee (Iroquois)\n• une conséquence territoriale chez les Hurons-Wendats\n• une région d’accueil des populations déplacées",
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
            titre: "Document A",
            ref: "gravure_destruction_huronie.png",
            soustitre: "Raids iroquoiens en Huronie",
            source: "llustration pédagogique inspirée des gravures de Theodor de Bry portant sur les conflits autochtones en Amérique du Nord."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« La disparition de la Huronie ne signifie pas seulement la destruction de quelques villages, mais bien l’éclatement d’une société entière, dont les survivants se dispersent vers différentes régions sous la pression des guerres iroquoises. Cette situation transforme profondément la présence huronne sur le territoire au milieu du XVIIe siècle. »",
            source: "Olive Patricia Dickason, Canada’s First Nations: A History of Founding Peoples from Earliest Times, Toronto, Oxford University Press, 2002."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "destruction_huronie.png",
            source: "Récitus."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 5
    },
    guide: "Au milieu du 17e siècle, les Haudenosaunee (Iroquois) attaquent les villages hurons afin de contrôler le commerce des fourrures (un conflit impliquant les Haudenosaunee (Iroquois)). Ces conflits entraînent la destruction de la Huronie en 1648-1649 et forcent plusieurs Hurons-Wendats à abandonner leur territoire (une conséquence territoriale chez les Hurons-Wendats). Une partie des survivants se réfugie près de Québec, notamment dans la région de Lorette (une région d’accueil des populations déplacées)."
  },
  {
    id: "Q129",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez un village domicilié situé à proximité de Montréal.",
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
            ref: "village_domicilie_autochtone.png",
            source: "Récitus."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Kahnawake ou Kanesatake."
  },
  {
    id: "Q130",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une raison qui explique l’établissement de villages domiciliés à proximité des établissements français vers 1750.",
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
            titre: "",
            texte: "« Plusieurs communautés autochtones établies dans la vallée du Saint-Laurent vivent près des établissements français, où missionnaires, commerçants et autorités coloniales entretiennent des relations étroites avec elles. »",
            source: "Adapté de Denys Delâge, Le pays renversé, Boréal, 1991."
          },
          {
            titre: "",
            ref: "village_domicilie_autochtone.png",
            source: "Récitus."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les villages domiciliés sont établis près des établissements français afin de favoriser les alliances entre les Français et certaines nations autochtones."
  },
  {
    id: "Q131",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P2 — 1608 – 1760",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A et B, indiquez s’il y a changement ou continuité dans l’occupation du territoire autochtone dans la vallée du Saint-Laurent entre 1700 et 1750. Justifiez votre réponse à l’aide d’un fait.",
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
            texte: "« Bien que certaines communautés autochtones se rapprochent des établissements français au XVIIIe siècle, plusieurs continuent d’occuper leurs territoires traditionnels selon leurs déplacements saisonniers. »",
            soustitre: "Vers 1700",
            source: "Adapté de Gilles Havard, Empire et métissages, Septentrion, 2003."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "village_domicilie_autochtone.png",
            source: "Récitus."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 4
    },
    guide: "Il y a changement puisque certaines communautés vivent maintenant près des établissements français dans la vallée du Saint-Laurent vers 1750.\n\nou \n\nIl y a continuité puisque plusieurs groupes autochtones fréquentent encore leurs territoires de chasse et leurs campements saisonniers entre 1700 et 1750."
  },
  {
    id: "Q132",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P2 — 1608 – 1760",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
    aspects: [
      {
        aspect: "Croissance de la population"
      },
      {
        aspect: "Gouvernement royal"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "filles_du_roy.png",
            soustitre: "Arrivée des Filles du Roy",
            source: "Bibliothèque et Archives Canada, L’arrivée des Filles du Roy à Québec, domaine public."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_1600-1700.png"
    },
    guide: "C"
  },
  {
    id: "Q133",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "4 documents",
    enonce: "Les documents A à D présentent des événements militaires liés à la ville de Québec sous le Régime français. Indiquez les deux documents correspondant à chacun des gouverneurs.",
    aspects: [
      {
        aspect: "Guerres intercoloniales"
      },
      {
        aspect: "Territoire français en Amérique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« [Il] affirme qu’il répondra aux Anglais “par la bouche de ses canons”, symbole de la résistance française lors du siège de Québec de 1690. »",
            source: "Gilles Havard et Cécile Vidal, Histoire de l’Amérique française, Paris, Flammarion, 2003."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "quebec_frere_kirke.png",
            source: "Bibliothèque et Archives Canada, Occupation de Québec par les Britanniques, domaine public."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "siege_quebec_1690.png",
            source: "Bibliothèque et Archives Canada, Siège de Québec par les Britanniques, domaine public."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« Privée de ravitaillement et affaiblie par la famine, Québec doit finalement capituler [...] en 1629, ce qui interrompt temporairement la présence française dans la vallée du Saint-Laurent. »",
            source: "Marcel Trudel, Histoire de la Nouvelle-France, Montréal, Fides, 1963."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Frontenac",
        "Samuel de Champlain"
      ],
      double: true
    },
    guide: {
      type: "grille",
      entetes: [
        "Frontenac",
        "Samuel de Champlain"
      ],
      rangees: [
        [
          "A et C",
          "B et D"
        ]
      ]
    }
  },
  {
    id: "Q134",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P2 — 1608 – 1760",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
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
            ref: "siege_quebec_1690.png",
            soustitre: "Siège de Québec par Phips",
            source: "Bibliothèque et Archives Canada, Siège de Québec par Phips, domaine public."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_1600-1700.png"
    },
    guide: "D"
  },
  {
    id: "Q135",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P2 — 1608 – 1760",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
    aspects: [
      {
        aspect: "Territoire français en Amérique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "quebec_frere_kirke.png",
            soustitre: "Occupation de Québec par les frères Kirke",
            source: "Bibliothèque et Archives Canada, Occupation de Québec par les frères Kirke, domaine public."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_1600-1700.png"
    },
    guide: "B"
  },
  {
    id: "Q136",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Ordre chronologique",
    enonce: "Les documents A à D présentent des événements liés à la fondation d’établissements français en Nouvelle-France. Placez-les par ordre chronologique.",
    aspects: [
      {
        aspect: "Territoire français en Amérique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les fondateurs de Ville-Marie souhaitent créer une communauté missionnaire destinée à l’évangélisation des Autochtones. »",
            soustitre: "Fondation de Ville-Marie",
            source: "Gilles Havard et Cécile Vidal, Histoire de l’Amérique française, Paris, Flammarion, 2003."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "fondation_tadoussac.png",
            soustitre: "Fondation de Tadoussac",
            source: "Illustration générée à partir de représentations historiques de la Nouvelle-France."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "fondation_quebec.png",
            soustitre: "Fondation de Québec",
            source: "Illustration générée à partir de représentations historiques de la Nouvelle-France."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« Le poste de Trois-Rivières occupe une position importante dans les échanges commerciaux entre les Français et les nations autochtones de la vallée du Saint-Laurent. »",
            soustitre: "Fondation de Trois-Rivières",
            source: "Jacques Lacoursière, Notre histoire, Québec, Septentrion, 2012."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_abDc.png"
    },
    guide: "B - C - D - A"
  },
  {
    id: "Q137",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Ordre chronologique",
    enonce: "Les documents A à D présentent des événements liés à la fondation d’établissements français en Nouvelle-France. Placez-les par ordre chronologique.",
    aspects: [
      {
        aspect: "Territoire français en Amérique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "fondation_mtl.png",
            soustitre: "Fondation de Ville-Marie",
            source: "Illustration générée à partir de représentations historiques de la Nouvelle-France."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Situé à l’embouchure du Saguenay, Tadoussac devient dès le début du XVIIe siècle un lieu stratégique pour les échanges entre les Français et plusieurs nations autochtones. »",
            soustitre: "Fondation de Tadoussac",
            source: "Denys Delâge, Le pays renversé, Montréal, Boréal, 1991."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« [...] Champlain établit Québec afin d’assurer une présence française permanente dans la vallée du Saint-Laurent. »",
            soustitre: "Fondation de Québec",
            source: "Marcel Trudel, Histoire de la Nouvelle-France, Montréal, Fides, 1963."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            ref: "fondation_t-r.png",
            soustitre: "Fondation de Trois-Rivières",
            source: "Illustration générée à partir de représentations historiques de la Nouvelle-France."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_abDc.png"
    },
    guide: "B - C - D - A"
  },
  {
    id: "Q138",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Avant et après",
    enonce: "Les documents A à D présentent des faits liés à l’évolution de la Nouvelle-France.\nIndiquez si chacun des faits se déroule avant ou après l’instauration du Gouvernement royal.",
    aspects: [
      {
        aspect: "Gouvernement royal"
      },
      {
        aspect: "Territoire français en Amérique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "colon_louis_hebert.png",
            soustitre: "Arrivée des premiers colons",
            source: "Illustration générée à partir de représentations historiques de la Nouvelle-France."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« L’arrivée des Filles du Roy contribue fortement à l’augmentation de la population coloniale dans la seconde moitié du XVIIe siècle. »",
            soustitre: "Arrivée des Filles du Roy",
            source: "Jacques Mathieu, La Nouvelle-France : Les Français en Amérique du Nord, Québec, Presses de l’Université Laval, 1991."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Québec occupe une position stratégique exceptionnelle, à l’endroit où le rétrécissement du fleuve facilite la défense et le contrôle du territoire. »",
            soustitre: "Fondation de Québec",
            source: "Gilles Havard et Cécile Vidal, Histoire de l’Amérique française, Paris, Flammarion, 2003."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            ref: "regiment_car-salieres.png",
            soustitre: "Arrivée du régiment Carignan-Salières",
            source: "Illustration générée à partir de représentations historiques de la Nouvelle-France."
          }
        ]
      }
    ],
    reponse: {
      type: "avant-apres",
      label: "Gouvernement royal"
    },
    guide: {
      type: "grille",
      entetes: [
        "Avant",
        "Gouvernement royal",
        "Après"
      ],
      rangees: [
        [
          "A - C",
          "",
          "B - D"
        ]
      ]
    }
  },
  {
    id: "Q139",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "4 documents",
    enonce: "Les documents A à D présentent différentes mesures et événements ayant contribué au développement de la Nouvelle-France sous le régime français. Indiquez l’événement historique correspondant à chacun des documents.",
    aspects: [
      {
        aspect: "Gouvernement royal"
      },
      {
        aspect: "Territoire français en Amérique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Avec [leur arrivée], la colonie cesse progressivement d’être uniquement un comptoir commercial pour devenir un véritable lieu de peuplement. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 1, Sillery, Septentrion, 1995."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "filles_du_roy.png",
            source: "Illustration générée à partir de représentations historiques de la Nouvelle-France."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "fondation_qubec_1608.png",
            source: "Illustration générée à partir de représentations historiques de la Nouvelle-France."
          },
          {
            titre: "",
            texte: "« Champlain choisit [son emplacement] afin d’établir un poste permanent qui permettrait à la France de contrôler le commerce et la navigation sur le fleuve Saint-Laurent. »",
            source: "Marcel Trudel, Histoire de la Nouvelle-France, tome 1 : Les vaines tentatives (1524-1603), Montréal, Fides, 1963."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« Après leur service militaire, plusieurs [...] choisissent de demeurer dans la colonie, contribuant ainsi au peuplement de la Nouvelle-France. »",
            source: "Gilles Havard et Cécile Vidal, Histoire de l’Amérique française, Paris, Flammarion, 2003."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Arrivée des Filles du Roy",
        "Arrivée des premiers colons",
        "Arrivée du régiment Carignan-Salières",
        "Fondation de Québec"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Arrivée des Filles du Roy",
        "Arrivée des premiers colons",
        "Arrivée du régiment Carignan-Salières",
        "Fondation de Québec"
      ],
      rangees: [
        [
          "B",
          "A",
          "D",
          "C"
        ]
      ]
    }
  },
  {
    id: "Q140",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P2 — 1608 – 1760",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
    aspects: [
      {
        aspect: "Territoire français en Amérique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Par cette entente, la France récupère ses possessions en Amérique du Nord et reprend la ville de Québec, ce qui lui permet de rétablir sa présence sur le Saint-Laurent. »",
            soustitre: "Traité de Saint-Germain-en-Laye",
            source: "Marcel Trudel, Histoire de la Nouvelle-France, Montréal, Fides."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_1600-1700.png"
    },
    guide: "B"
  },
  {
    id: "Q141",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P2 — 1608 – 1760",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
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
            texte: "« À la suite des ententes conclues avec la Grande-Bretagne, la France perd notamment l’Acadie, Terre-Neuve et la baie d’Hudson. »",
            soustitre: "Traité d’Utrecht",
            source: "Jacques Mathieu, La Nouvelle-France : Les Français en Amérique du Nord, Québec, Presses de l’Université Laval."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_1600-1800.png"
    },
    guide: "C"
  },
  {
    id: "Q142",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P2 — 1608 – 1760",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
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
            titre: "Document A",
            ref: "grande_paix_mtl.png",
            soustitre: "Grande Paix de Montréal",
            source: "Illustration générée à partir de représentations historiques de la Nouvelle-France."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_1600-1800.png"
    },
    guide: "C"
  },
  {
    id: "Q143",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "4 documents",
    enonce: "Les documents A à D présentent des faits liés aux traités conclus entre la France et l’Angleterre concernant leurs possessions en Amérique du Nord. Indiquez à l’endroit approprié la lettre correspondant à chacun des traités.",
    aspects: [
      {
        aspect: "Guerres intercoloniales"
      },
      {
        aspect: "Territoire français en Amérique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« La perte de l’Acadie et de Terre-Neuve réduit considérablement l’influence française dans les pêcheries atlantiques et fragilise la défense de la colonie du Canada. »",
            source: "Jacques Mathieu, La Nouvelle-France : les Français en Amérique du Nord, Québec, Presses de l’Université Laval."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« La restitution de Québec à la France permet à la colonie de reprendre son développement après plusieurs années marquées par l’occupation anglaise des frères Kirke. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 1, Québec, Septentrion."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« L’acquisition de nouveaux territoires par l’Empire britannique modifie profondément l’équilibre des forces en Amérique du Nord et fragilise la présence française autour du Saint-Laurent. »",
            source: "Allan Greer, Brève histoire des peuples de la Nouvelle-France, Montréal, Boréal."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« Le retour des possessions françaises en Amérique du Nord confirme l’importance stratégique du commerce des fourrures et de l’alliance avec plusieurs nations autochtones pour la monarchie française. »",
            source: "Gilles Havard et Cécile Vidal, Histoire de l’Amérique française, Paris, Flammarion."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Traité de Saint-Germain-en-Laye",
        "Traité d’Utrecht"
      ],
      double: true
    },
    guide: {
      type: "grille",
      entetes: [
        "Traité de Saint-Germain-en-Laye",
        "Traité d’Utrecht"
      ],
      rangees: [
        [
          "B et D",
          "A et C"
        ]
      ]
    }
  },
  {
    id: "Q144",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "3 documents",
    enonce: "Les documents A à C présentent des mesures mises en place en Nouvelle-France sous l’administration de l’intendant. Indiquez à l’endroit approprié la lettre correspondant à chacune des mesures suivantes",
    aspects: [
      {
        aspect: "Croissance de la population"
      },
      {
        aspect: "Diversification économique"
      },
      {
        aspect: "Gouvernement royal"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "regiment_car-salieres.png",
            source: "Illustration générée à partir de représentations historiques de la Nouvelle-France."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "filles_du_roy.png",
            source: "Illustration générée à partir de représentations historiques de la Nouvelle-France."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "chantier_naval.png",
            source: "Illustration générée à partir de représentations historiques de la Nouvelle-France."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Mesure pour défendre la colonie",
        "Mesure pour développer la colonie",
        "Mesure pour peupler la colonie"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Mesure pour défendre la colonie",
        "Mesure pour développer la colonie",
        "Mesure pour peupler la colonie"
      ],
      rangees: [
        [
          "A",
          "C",
          "B"
        ]
      ]
    }
  },
  {
    id: "Q145",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "3 documents",
    enonce: "Les documents A à C présentent des mesures mises en place en Nouvelle-France sous l’administration de l’intendant. Indiquez à l’endroit approprié la lettre correspondant à chacune des mesures suivantes",
    aspects: [
      {
        aspect: "Croissance de la population"
      },
      {
        aspect: "Diversification économique"
      },
      {
        aspect: "Gouvernement royal"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les autorités coloniales tentent de diversifier l’économie afin de réduire la dépendance envers le commerce des fourrures et de favoriser le développement d’activités manufacturières locales. »",
            source: "Jean Hamelin, Histoire du Québec, Toulouse, Privat."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Devant la multiplication des attaques iroquoises, la monarchie française envoie des soldats afin de sécuriser la vallée du Saint-Laurent et de rétablir les conditions nécessaires au commerce et au peuplement. »",
            source: "Marcel Trudel, Histoire de la Nouvelle-France, Montréal, Fides."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Afin d’assurer une croissance durable de la population, la monarchie française soutient l’arrivée de jeunes femmes destinées à fonder des foyers dans la colonie. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 1, Québec, Septentrion."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Mesure pour défendre la colonie",
        "Mesure pour développer la colonie",
        "Mesure pour peupler la colonie"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Mesure pour défendre la colonie",
        "Mesure pour développer la colonie",
        "Mesure pour peupler la colonie"
      ],
      rangees: [
        [
          "B",
          "A",
          "C"
        ]
      ]
    }
  },
  {
    id: "Q146",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Nommez le nom de la politique économique mise en place par la métropole française en Nouvelle-France.",
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
            ref: "mercantilisme_nf.png",
            source: "Illustration générée à partir de représentations historiques de la Nouvelle-France."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Le mercantilisme."
  },
  {
    id: "Q147",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de la politique économique imposée par la métropole française sur l’économie de la colonie.",
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
            texte: "« La France considère ses possessions d’Amérique comme des territoires destinés à soutenir l’économie du royaume grâce au commerce des ressources naturelles et au contrôle des échanges. »",
            source: "Jacques Mathieu, La Nouvelle-France : les Français en Amérique du Nord, Québec, Presses de l’Université Laval."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Dépendance économique envers la France ou faible développement manufacturier dans la colonie ou exportation des ressources naturelles vers la métropole ou importation de produits manufacturés européens."
  },
  {
    id: "Q148",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une raison qui explique pourquoi la métropole française impose une politique économique à la Nouvelle-France.",
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
            texte: "« Les colonies doivent fournir des matières premières à la métropole et acheter en retour les produits fabriqués en Europe, afin d’enrichir le royaume et de renforcer sa puissance économique. »",
            source: "Marcel Trudel, Histoire de la Nouvelle-France, Montréal, Fides."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Enrichir la métropole française ou augmenter la puissance économique de la France ou exploiter les ressources de la colonie ou contrôler le commerce colonial."
  },
  {
    id: "Q149",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Cause et conséquence",
    enonce: "Les documents A et B présentent des faits liés à la politique économique imposée par la métropole française en Nouvelle-France. Indiquez le document qui correspond à une cause et celui qui correspond à une conséquence de cette politique.",
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
            texte: "« Les habitants de la colonie doivent importer une grande partie des biens nécessaires à la vie quotidienne depuis la France. »",
            source: "Marcel Trudel, Histoire de la Nouvelle-France, Montréal, Fides."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Le commerce colonial est organisé de manière à maintenir les colonies dans une relation de dépendance économique envers le royaume français. »",
            source: "Gilles Havard et Cécile Vidal, Histoire de l’Amérique française, Paris, Flammarion."
          }
        ]
      }
    ],
    reponse: {
      type: "cause-consequence"
    },
    guide: {
      type: "grille",
      entetes: [
        "Cause",
        "Conséquence"
      ],
      rangees: [
        [
          "B",
          "A"
        ]
      ]
    }
  },
  {
    id: "Q150",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "2 documents",
    enonce: "Les documents A à D présentent des éléments liés aux compagnies de commerce en Nouvelle-France. Associez chaque document à l’élément correspondant.",
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
            texte: "« En échange de leurs engagements envers la colonie, certaines compagnies reçoivent le droit exclusif de pratiquer le commerce des fourrures en Nouvelle-France. »",
            source: "Marcel Trudel, Histoire de la Nouvelle-France, Montréal, Fides."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les autorités françaises attendent des compagnies qu’elles assurent la croissance de la colonie et le maintien d’une présence française durable en Amérique du Nord. »",
            source: "Jean Hamelin, Histoire du Québec, Toulouse, Privat."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Les compagnies doivent contribuer au développement de la colonie en transportant des colons et en soutenant l’occupation du territoire. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 1, Québec, Septentrion."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« La monarchie française accorde à des groupes de marchands le contrôle du commerce colonial afin d’encourager l’exploitation des ressources du territoire. »",
            source: "Jacques Mathieu, La Nouvelle-France : les Français en Amérique du Nord, Québec, Presses de l’Université Laval."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Obligations des compagnies",
        "Privilèges des compagnies"
      ],
      double: true
    },
    guide: {
      type: "grille",
      entetes: [
        "Obligations des compagnies",
        "Privilèges des compagnies"
      ],
      rangees: [
        [
          "B et C",
          "A et D"
        ]
      ]
    }
  },
  {
    id: "Q151",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P2 — 1608 – 1760",
    points: 2,
    enonce: "Les documents A à C présentent des éléments liés à l’administration de la Nouvelle-France sous le Régime français. Indiquez le document qui correspond à chacun des rôles",
    aspects: [
      {
        aspect: "Église catholique"
      },
      {
        aspect: "Gouvernement royal"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Ce personnage administre la justice, les finances et le développement économique de la colonie. Il joue un rôle central dans l’organisation de la société canadienne sous le Régime français. »",
            source: "Jacques Mathieu, La Nouvelle-France : les Français en Amérique du Nord, Presses de l’Université Laval, 1991."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« En plus de son rôle religieux, ce membre du clergé exerce une influence importante sur la société coloniale par son autorité morale et son intervention dans plusieurs domaines sociaux. »",
            source: "Micheline Dumont et Louise Toupin, La pensée féministe au Québec, Remue-ménage, 2003."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Le représentant du roi dans la colonie dirige les affaires militaires, entretient les relations diplomatiques avec les nations autochtones et veille à la défense du territoire français en Amérique. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 1, Septentrion, 1995."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Évêque",
        "Gouverneur",
        "Intendant"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Évêque",
        "Gouverneur",
        "Intendant"
      ],
      rangees: [
        [
          "B",
          "C",
          "A"
        ]
      ]
    }
  },
  {
    id: "Q152",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez le nom de l’institution chargée de rendre la justice en Nouvelle-France.",
    aspects: [
      {
        aspect: "Gouvernement royal"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "conseil_souverain.png",
            source: "Illustration générée à partir de représentations historiques de la Nouvelle-France."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Le Conseil souverain."
  },
  {
    id: "Q153",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez le type de pouvoir exercé par le roi de France sous le Régime français.",
    aspects: [
      {
        aspect: "Gouvernement royal"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Dans la monarchie française du XVIIe siècle, le souverain gouverne sans partage et considère son pouvoir comme un droit accordé par la volonté divine. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 1, Québec, Septentrion."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "L'absolutisme de droit divin."
  },
  {
    id: "Q154",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une raison expliquant pourquoi les Français concentrent leurs établissements le long du fleuve Saint-Laurent vers 1650.",
    aspects: [
      {
        aspect: "Territoire français en Amérique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "territoire_occupe_1650.png",
            source: "Récitus."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les Français concentrent leurs établissements le long du fleuve Saint-Laurent parce qu’il constitue la principale voie de transport ou de commerce en Nouvelle-France vers 1650."
  },
  {
    id: "Q155",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de la concentration des établissements français dans la vallée du Saint-Laurent vers 1650.",
    aspects: [
      {
        aspect: "Territoire français en Amérique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "territoire_occupe_1650.png",
            source: "Récitus."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "La concentration des établissements français dans la vallée du Saint-Laurent favorise le développement du peuplement et des échanges commerciaux vers 1650."
  },
  {
    id: "Q156",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez le nom de la région où se concentrent principalement les établissements français vers 1650.",
    aspects: [
      {
        aspect: "Territoire français en Amérique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les établissements français se développent principalement le long du [fleuve], véritable axe de circulation et de peuplement de la colonie au XVIIe siècle. »",
            source: "Marcel Trudel, Histoire de la Nouvelle-France, tome II : Le comptoir, 1604-1627, Montréal, Fides, 1966."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "La vallée du Saint-Laurent."
  },
  {
    id: "Q157",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Différence",
    enonce: "Indiquez une différence entre les possessions françaises et les possessions britanniques en Amérique du Nord vers 1700.",
    aspects: [
      {
        aspect: "Territoire français en Amérique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "territoire_revendique_france_1700.png",
            source: "Récitus."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les possessions françaises couvrent un territoire plus vaste que les possessions britanniques."
  },
  {
    id: "Q158",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence des rivalités territoriales entre les Français et les Britanniques en Amérique du Nord vers 1700.",
    aspects: [
      {
        aspect: "Territoire français en Amérique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "territoire_revendique_france_1700.png",
            source: "Récitus."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "La présence de territoires contestés entraîne une augmentation des rivalités et des conflits entre les Français et les Britanniques en Amérique du Nord vers 1700."
  },
  {
    id: "Q159",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Changement",
    enonce: "À partir des documents A et B, indiquez un changement dans l’occupation du territoire par les Français en Amérique du Nord entre 1650 et 1700.",
    aspects: [
      {
        aspect: "Territoire français en Amérique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "territoire_occupe_1650.png",
            source: "Récitus."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "territoire_occupe_1700.png",
            source: "Récitus."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Le territoire occupé par les Français s’étend davantage vers l’ouest et le sud.\nLes Français établissent davantage de forts et de postes de traite.\nLes Français explorent davantage l’intérieur du continent.\nLe réseau territorial français devient plus vaste entre 1650 et 1700."
  },
  {
    id: "Q160",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Continuité",
    enonce: "À partir des documents A et B, indiquez une continuité dans la répartition du peuplement français en Amérique du Nord entre 1650 et 1700.",
    aspects: [
      {
        aspect: "Territoire français en Amérique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "territoire_occupe_1650.png",
            source: "Récitus."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "territoire_occupe_1700.png",
            source: "Récitus."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Le peuplement français demeure concentré dans la vallée du Saint-Laurent.\nQuébec, Trois-Rivières et Montréal restent les principaux centres de peuplement.\nLes établissements français demeurent situés près des voies navigables."
  },
  {
    id: "Q161",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Continuité",
    enonce: "À partir des documents A et B, indiquez un changement et une continuité dans l’occupation du territoire par les Français en Amérique du Nord entre 1650 et 1700.",
    aspects: [
      {
        aspect: "Territoire français en Amérique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "territoire_occupe_1650.png",
            source: "Récitus."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "territoire_occupe_1700.png",
            source: "Récitus."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "Il y a un changement dans l’étendue du territoire occupé par les Français entre 1650 et 1700. Vers 1700, les Français occupent un territoire beaucoup plus vaste qui s’étend jusqu’aux Grands Lacs et au fleuve Mississippi, alors qu’en 1650 le territoire occupé est principalement concentré dans la vallée du Saint-Laurent.\n\nRéponse attendue — Continuité\n\nIl y a une continuité dans l’étendue du territoire occupé par les Français entre 1650 et 1700. En 1650 comme en 1700, les Français occupent toujours la vallée du Saint-Laurent, notamment autour de Québec, Trois-Rivières et Montréal."
  },
  {
    id: "Q162",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez le nom d’un groupe européen qui fréquente le golfe du Saint-Laurent pour y pratiquer la pêche au 16e siècle.",
    aspects: [
      {
        aspect: "Premiers contacts"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« À la belle saison, des navires jettent l’ancre dans plusieurs anses du golfe. On y construit des installations rudimentaires destinées au traitement des prises avant leur transport outre-Atlantique. »",
            source: "Adapté de Denys Delâge, Le pays renversé, Montréal, Boréal, 1991."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Les Basques ou les Bretons ou les Normands."
  },
  {
    id: "Q163",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Divergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs sur le commerce des fourrures en Nouvelle-France. Sur quel point précis sont-ils en accord?",
    aspects: [
      {
        aspect: "Commerce des fourrures"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les congés de traite favorisent la dispersion des habitants dans l'intérieur du continent et privent souvent les établissements agricoles d'une partie de la main-d'œuvre dont ils ont besoin. »",
            source: "Marcel Trudel, Histoire de la Nouvelle-France, tome 3 : La seigneurie de la Compagnie des Cent-Associés, 1627-1663, Montréal, Fides, 1979."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les autorités s'inquiètent du nombre croissant d'hommes attirés par la traite des fourrures, activité qui détourne plusieurs colons du travail agricole et du peuplement de la vallée du Saint-Laurent. »",
            source: "Louise Dechêne, Habitants et marchands de Montréal au XVIIe siècle, Montréal, Boréal, 1988."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les congé de traite nuisent au développement de la colonie."
  },
  {
    id: "Q164",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "4 documents",
    enonce: "Les documents A à D présentent différents agents du commerce des fourrures. Associez chaque document à l’agent correspondant.",
    aspects: [
      {
        aspect: "Commerce des fourrures"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« À bord de canots chargés de marchandises, ils assurent le transport entre les centres de la colonie et les postes de traite éloignés. »",
            source: "Adapté de Carolyn Podruchny, Making the Voyageur World: Travelers and Traders in the North American Fur Trade, Lincoln, University of Nebraska Press, 2006."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Grâce à leur connaissance du territoire et des routes de transport, certains groupes jouent un rôle essentiel dans l’approvisionnement des postes de traite. »",
            source: "Adapté de Gilles Havard, Empire et métissages : Indiens et Français dans le Pays d’en Haut, 1660-1715, Québec, Septentrion, 2003."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Leur rôle consiste notamment à acheter les fourrures, à les entreposer puis à les expédier vers les marchés européens. »",
            source: "Adapté de Louise Dechêne, Habitants et marchands de Montréal au XVIIe siècle, Montréal, Boréal, 1988."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« Certains parcourent de longues distances pour obtenir des fourrures sans toujours détenir l’autorisation officielle exigée par l’administration coloniale. »",
            source: "Adapté de W. J. Eccles, La société canadienne sous le Régime français, Montréal, Hurtubise HMH, 1972."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Autochtones",
        "Coureurs des bois",
        "Marchands",
        "Voyageurs"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Autochtones",
        "Coureurs des bois",
        "Marchands",
        "Voyageurs"
      ],
      rangees: [
        [
          "B",
          "D",
          "C",
          "A"
        ]
      ]
    }
  },
  {
    id: "Q165",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P2 — 1608 – 1760",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A à C présentent la position de trois historiens à l'égard du rôle joué par Colbert en Nouvelle-France. Nommez l'historien qui présente une position différente et comparez sa position à celle des deux autres historiens.",
    aspects: [
      {
        aspect: "Gouvernement royal"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« L'œuvre de Colbert marque un tournant dans l'histoire de la Nouvelle-France. Le gouvernement royal, l'arrivée de nouveaux colons et l'organisation plus efficace de l'administration contribuent à consolider durablement la présence française en Amérique du Nord. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Sous l'impulsion de Colbert, la monarchie reprend directement en main l'administration de la Nouvelle-France. Les mesures adoptées pour accroître la population et renforcer les institutions permettent à la colonie de connaître une période de croissance soutenue à partir des années 1660. »",
            source: "Marcel Trudel, Histoire de la Nouvelle-France."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Les réformes de Colbert améliorent certes l'organisation de la colonie, mais elles ne parviennent pas à corriger ses principales faiblesses. La population demeure peu nombreuse et les ressources limitées comparativement à celles des colonies anglaises. »",
            source: "Louise Dechêne, Le peuple, l'État et la guerre au Canada sous le Régime français."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "Dechêne considère que le travail de Colbert a eu un impact limité (la différence) tandis que Trudel et Lacoursière sont considèrent que Colbert favorise le développement de la Nouvelle-France."
  },
  {
    id: "Q166",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux historiens sur la milice en Nouvelle-France. Sur quel point précis sont-ils en accord?",
    aspects: [
      {
        aspect: "Gouvernement royal"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« La milice constitue une composante essentielle du système défensif colonial. Bien qu'elle ne remplace pas les troupes régulières, elle fournit aux autorités un effectif rapidement mobilisable lors des conflits. »",
            source: "Gilles Proulx, Combattre en Nouvelle-France, Athéna Éditions, 2009."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« La milice fait partie intégrante de l'organisation militaire de la Nouvelle-France. Les autorités coloniales peuvent mobiliser rapidement les hommes des paroisses afin de participer à la défense du territoire. »",
            source: "Louise Dechêne, Le peuple, l'État et la guerre au Canada sous le Régime français, Boréal, 2008."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les deux historiens considèrent que la milice contribue à la défense de la Nouvelle-France ou qu'elle peut être mobilisée pour protéger la colonie."
  },
  {
    id: "Q167",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "4 documents",
    enonce: "Les documents A à D présentent des responsabilités associées au gouverneur et à l'intendant. Indiquez à quel membre de l'administration coloniale correspond chacun des documents.",
    aspects: [
      {
        aspect: "Gouvernement royal"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« [Philippe de Rigaud de Vaudreuil] est responsable de la défense de la Nouvelle-France. Il commande les troupes, supervise les fortifications et organise la protection du territoire contre les ennemis de la colonie. »",
            source: "Marcel Trudel, Initiation à la Nouvelle-France, Holt, Rinehart et Winston, 1968."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« [Jean Talon] intervient dans l'organisation économique de la colonie. Il encourage l'agriculture, soutient le commerce et favorise les mesures destinées à accroître la population. »",
            source: "Source : Allan Greer, Brève histoire des peuples de la Nouvelle-France, Boréal, 1998."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« [Charles de Beauharnois de La Boische] joue un rôle essentiel dans les alliances conclues avec les nations autochtones. Il représente les intérêts de la France lors des négociations diplomatiques et des conseils tenus avec les alliés amérindiens. »",
            source: "Gilles Havard, Empire et métissages, Septentrion, 2003."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« Chargé des finances royales, [Gilles Hocquart] contrôle les dépenses de l'administration coloniale et surveille l'utilisation des fonds envoyés par la métropole. »",
            source: "Jacques Mathieu, La Nouvelle-France : les Français en Amérique du Nord, XVIe-XVIIIe siècle, PUL, 1991."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Gouverneur",
        "Intendant"
      ],
      double: true
    },
    guide: {
      type: "grille",
      entetes: [
        "Gouverneur",
        "Intendant"
      ],
      rangees: [
        [
          "A et C",
          "B et D"
        ]
      ]
    }
  },
  {
    id: "Q168",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez le membre de l'administration coloniale qui représente le roi pour les affaires militaires et diplomatiques.",
    aspects: [
      {
        aspect: "Gouvernement royal"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Dans la colonie, [Louis de Buade de Frontenac] agit comme le principal représentant du roi pour les affaires militaires et diplomatiques. Son autorité symbolise la présence de la monarchie française en Amérique. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 1, Québec Amérique, 1995."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Le gouverneur."
  },
  {
    id: "Q169",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez le membre de l'administration coloniale responsable de l'administration de la justice.",
    aspects: [
      {
        aspect: "Gouvernement royal"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« [François Bigot] veille à l'administration de la justice. Il participe à l'application des lois et s'assure du bon fonctionnement des institutions civiles de la colonie. »",
            source: "Marcel Trudel, La Nouvelle-France par les textes, Hurtubise HMH, 2003."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "L'intendant."
  },
  {
    id: "Q170",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P2 — 1608 – 1760",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A et B, indiquez s’il y a changement ou continuité concernant les possessions françaises en Amérique du Nord entre 1700 et 1713. Justifiez votre choix par des faits et un repère de temps.",
    aspects: [
      {
        aspect: "Territoire français en Amérique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "territoire_revendique_1700.png",
            source: "Récitus."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "territoire_revendique_1713.png",
            source: "Récitus."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "Il y a changement puisque, en 1713, à la suite du traité d’Utrecht, la France perd plusieurs de ses possessions, notamment l’Acadie, Terre-Neuve et la baie d’Hudson, au profit de la Grande-Bretagne.\n\nIl y a continuité puisque la France possède toujours des territoires en Amérique du Nord en 1700 comme en 1713, notamment dans la vallée du Saint-Laurent."
  },
  {
    id: "Q171",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Cause et conséquence",
    enonce: "Les documents A et B présentent des faits liés au traité d’Utrecht de 1713. Indiquez la lettre du document qui représente une cause et celle du document qui représente une conséquence de ce traité.",
    aspects: [
      {
        aspect: "Guerres intercoloniales"
      },
      {
        aspect: "Territoire français en Amérique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Au début du XVIIIe siècle, la présence française en Amérique du Nord se trouve réduite par la perte de plusieurs territoires, notamment l'Acadie, Terre-Neuve et les régions entourant la baie d'Hudson. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 1, Québec Amérique, 1995."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« La fin du XVIIe siècle est marquée par une série de conflits opposant la France et l'Angleterre. En Amérique du Nord, ces rivalités portent notamment sur le contrôle du commerce et des territoires. »",
            source: "Gilles Havard et Cécile Vidal, Histoire de l'Amérique française, Paris, Flammarion, 2003."
          }
        ]
      }
    ],
    reponse: {
      type: "cause-consequence"
    },
    guide: {
      type: "grille",
      entetes: [
        "Cause",
        "Conséquence"
      ],
      rangees: [
        [
          "B",
          "A"
        ]
      ]
    }
  },
  {
    id: "Q172",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P2 — 1608 – 1760",
    points: 3,
    enonce: "Expliquez comment l'exploration du territoire contribue à l'expansion du territoire revendiqué par les Français en Amérique du Nord.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• un motif des voyages d'exploration sur le continent\n• un moyen utilisé pour assurer une présence française\n• une conséquence sur le territoire revendiqué par la France",
    aspects: [
      {
        aspect: "Commerce des fourrures"
      },
      {
        aspect: "Territoire français en Amérique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les Français cherchent à étendre leurs activités dans le commerce des fourrures. Pour obtenir davantage de peaux de castor, ils explorent de nouvelles régions à l'intérieur du continent et établissent des contacts avec diverses nations autochtones. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 1, Québec Amérique, 1995."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "exploration_territoire_1700.png",
            source: "Récitus."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Au fur et à mesure de leur progression dans l'intérieur du continent, les Français construisent des forts et des postes de traite. Ces établissements servent à protéger les intérêts de la colonie et à maintenir une présence française dans les territoires explorés. »",
            source: "Marcel Trudel, Initiation à la Nouvelle-France, Holt, Rinehart et Winston, 1968."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "Les Français explorent de nouveaux territoires afin de développer le commerce des fourrures (un motif des voyages d'exploration sur le continent). Ils y établissent des forts et des postes de traite pour assurer une présence française (un moyen utilisé pour assurer une présence française). Cette présence permet à la France de revendiquer de nouveaux territoires, ce qui contribue à l'expansion de son territoire en Amérique du Nord (une conséquence sur le territoire revendiqué par la France)."
  },
  {
    id: "Q173",
    niveau: 3,
    oi: "Situer dans l'espace",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Situer 2 éléments",
    enonce: "À partir du document A, indiquez les lettres correspondant aux territoires cédés à la Grande-Bretagne à la suite du traité d’Utrecht de 1713.",
    aspects: [
      {
        aspect: "Guerres intercoloniales"
      },
      {
        aspect: "Territoire français en Amérique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "territoires_perdus_1713.png",
            source: "Récitus."
          }
        ]
      }
    ],
    reponse: {
      type: "situer-dans-lespace",
      elements: [
        "Acadie",
        "Terre-Neuve"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Acadie",
        "Terre-Neuve"
      ],
      rangees: [
        [
          "C",
          "B"
        ]
      ]
    }
  },
  {
    id: "Q174",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez le membre de l'administration coloniale responsable de l'organisation de l'Église catholique en Nouvelle-France.",
    aspects: [
      {
        aspect: "Église catholique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« À la tête de l'Église catholique en Nouvelle-France, [Monseigneur de Laval] veille à l'organisation du diocèse et à l'encadrement religieux de la population coloniale. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 1, Québec Amérique, 1995."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "L'évêque."
  },
  {
    id: "Q175",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P2 — 1608 – 1760",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A et B, indiquez s’il y a changement ou continuité dans l’administration de la Nouvelle-France entre 1627 et 1663. Justifiez votre choix par des faits et un repère de temps.",
    aspects: [
      {
        aspect: "Gouvernement royal"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "org_pol_avant_1663.png",
            source: "adapté de Récitus."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "org_pol_apres_1663.png",
            source: "adapté de Récitus."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "Changement\n\nIl y a un changement dans l’administration de la Nouvelle-France entre 1627 et 1663. En 1627, la colonie est administrée par la Compagnie des Cent-Associés. En 1663, le gouvernement royal est instauré et l’administration est confiée au gouverneur, à l’intendant et au Conseil souverain.\n\nContinuité\n\nIl y a une continuité dans l’administration de la Nouvelle-France entre 1627 et 1663. En 1627 comme en 1663, la colonie demeure sous l’autorité du roi de France et de la métropole française."
  },
  {
    id: "Q176",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P2 — 1608 – 1760",
    points: 3,
    enonce: "Expliquez comment les difficultés rencontrées par la Compagnie des Cent-Associés contribuent à l’instauration du gouvernement royal en 1663.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux :\n\n• une responsabilité de la Compagnie des Cent-Associés;\n• une difficulté rencontrée dans le développement de la colonie;\n• une intervention du roi de France en 1663.",
    aspects: [
      {
        aspect: "Gouvernement royal"
      },
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
            texte: "« Le roi accorde à la compagnie l’exclusivité de certaines activités commerciales. En retour, celle-ci s’engage à soutenir l’établissement de sujets français dans la colonie et à contribuer à son organisation matérielle et économique. »",
            source: "Adapté de la charte de la Compagnie des Cent-Associés (1627), citée dans Jacques Mathieu, La Nouvelle-France : les Français en Amérique du Nord, XVIe-XVIIIe siècle, Québec, Presses de l'Université Laval, 1991."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "graphique_population_nouvelle_france_1627-1663.png",
            source: "Données adaptées à des fins pédagogiques à partir de l'évolution démographique de la Nouvelle-France."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "org_pol_apres_1663.png",
            source: "adapté de Récitus."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 4
    },
    guide: "La Compagnie des Cent-Associés a pour responsabilité de favoriser le développement et le peuplement de la Nouvelle-France. Cependant, la population de la colonie demeure faible et son développement progresse lentement. Comme la compagnie ne remplit pas adéquatement ses obligations, le roi de France instaure le gouvernement royal en 1663 afin de mieux administrer et développer la colonie."
  },
  {
    id: "Q177",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez le nom du territoire religieux placé sous la responsabilité d'un curé en Nouvelle-France.",
    aspects: [
      {
        aspect: "Église catholique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "paroisse_n-f.png",
            source: "Adapté de BAnQ et de Bibliothèque et Archives Canada."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "La paroisse."
  },
  {
    id: "Q178",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez le nom du mode de répartition des terres utilisé en Nouvelle-France.",
    aspects: [
      {
        aspect: "Régime seigneurial"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "regime_seigneurial_n-f.png",
            source: "Adapté de BAnQ et de Bibliothèque et Archives Canada."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Le régime seigneurial."
  },
  {
    id: "Q179",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux historiens sur le rôle de l'Église catholique en Nouvelle-France. Sur quel point précis ces historiens sont-ils d'accord ?",
    aspects: [
      {
        aspect: "Église catholique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« La paroisse constitue le principal cadre de la vie collective en Nouvelle-France. Autour de l'église et du curé s'organisent plusieurs aspects de l'existence quotidienne des habitants. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 1, Québec, Septentrion, 1995."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Dans les campagnes de la colonie, le clergé exerce une influence importante sur les communautés en accompagnant les fidèles lors des principaux événements de leur vie. »",
            source: "Louise Dechêne, Habitants et marchands de Montréal au XVIIe siècle, Montréal, Boréal, 1988."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "Les deux historiens s'entendent pour dire que le clergé catholique joue un rôle important dans l'encadrement des habitants de la Nouvelle-France."
  },
  {
    id: "Q180",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P2 — 1608 – 1760",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A et B, indiquez s’il y a changement ou continuité dans les origines géographiques des immigrants français en Nouvelle-France entre 1670 et 1740. Justifiez votre choix par des faits et un repère de temps.",
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
            ref: "origines_geo_1670.png",
            soustitre: "Origines géographiques des immigrants vers 1670",
            source: "Données adaptées à partir des travaux de Yves Landry et Hubert Charbonneau sur les origines régionales des immigrants français en Nouvelle-France."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "origines_geo_1740.png",
            soustitre: "Origines géographiques des immigrants vers 1740",
            source: "Données adaptées à partir des travaux de Yves Landry et Hubert Charbonneau sur les origines régionales des immigrants français en Nouvelle-France."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "Continuité. \n\nEn 1670 comme en 1740, les immigrants français proviennent principalement des mêmes régions de France. La Normandie demeure la principale région d'origine, représentant 28 % des immigrants en 1670 et 26 % en 1740. L'Île-de-France et l'Aunis figurent également parmi les régions les plus représentées durant toute la période.\n\nChangement. \n\nEntre 1670 et 1740, la proportion d'immigrants provenant de certaines régions varie. Par exemple, la part des immigrants originaires de la Normandie passe de 28 % à 26 %, tandis que celle des « autres régions » augmente de 14 % à 16 %. La répartition géographique des immigrants se modifie donc légèrement entre 1670 et 1740."
  },
  {
    id: "Q181",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de l’arrivée d’immigrants français sur l’origine de la population de la Nouvelle-France.",
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
            texte: "« La plupart des immigrants qui s'établissent dans la vallée du Saint-Laurent proviennent d'un nombre restreint de provinces françaises, principalement situées dans l'ouest du royaume. »",
            source: "Yves Landry, Orphelines en France, pionnières au Canada, Montréal, Leméac, 1992."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "La population de la Nouvelle-France est composée majoritairement de personnes d'origine française."
  },
  {
    id: "Q182",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Continuité",
    enonce: "À partir des documents A et B, indiquez un élément de continuité dans la principale région d'origine des immigrants français en Nouvelle-France entre 1670 et 1740.",
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
            ref: "origines_geo_1670.png",
            soustitre: "Origines sociales des immigrants vers 1670",
            source: "Données adaptées à partir des travaux de Yves Landry et Hubert Charbonneau sur les origines régionales des immigrants français en Nouvelle-France."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "origines_geo_1740.png",
            soustitre: "Origines sociales des immigrants vers 1740",
            source: "Données adaptées à partir des travaux de Yves Landry et Hubert Charbonneau sur les origines régionales des immigrants français en Nouvelle-France."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "La Normandie demeure la principale région d'origine des immigrants français. Elle représente 28 % des immigrants vers 1670 et 26 % vers 1740."
  },
  {
    id: "Q183",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P2 — 1608 – 1760",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A et B, indiquez s’il y a changement ou continuité dans les origines sociales des immigrants français en Nouvelle-France entre 1670 et 1740.",
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
            ref: "origines_sociale_1670.png",
            soustitre: "Origines sociales des immigrants vers 1670",
            source: "Données adaptées à partir des travaux de Yves Landry et Hubert Charbonneau sur les origines régionales des immigrants français en Nouvelle-France."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "origines_sociale_1740.png",
            soustitre: "Origines sociales des immigrants vers 1740",
            source: "Données adaptées à partir des travaux de Yves Landry et Hubert Charbonneau sur les origines régionales des immigrants français en Nouvelle-France."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "Continuité.\n\nEn 1670 comme en 1740, les artisans constituent le principal groupe social parmi les immigrants français en Nouvelle-France. Ils représentent 35 % des immigrants vers 1670 et 38 % vers 1740.\n\nChangement.\n\nChangement. Entre 1670 et 1740, la répartition des origines sociales des immigrants français se modifie. La proportion de bourgeois et marchands augmente de 5 % à 8 %, tandis que celle des soldats passe de 10 % à 8 %."
  },
  {
    id: "Q184",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux historiens sur l'évolution démographique de la Nouvelle-France. Sur quel point précis ces historiens sont-ils d'accord ?",
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
            texte: "« Au début du XVIIIe siècle, la population canadienne augmente rapidement grâce à la fécondité élevée des familles établies dans la colonie. »",
            source: "Yves Landry, Les Filles du roi au XVIIe siècle, Montréal, Leméac, 2013."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« La croissance de la population découle principalement du grand nombre de naissances, bien davantage que de l'arrivée de nouveaux immigrants en provenance de France. »",
            source: "Hubert Charbonneau, Naissance d'une population : les Français établis au Canada au XVIIe siècle, Montréal, Presses de l'Université de Montréal, 1987."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les deux historiens sont d'accord pour dire que la croissance de la population de la Nouvelle-France s'explique principalement par l'accroissement naturel, c'est-à-dire par les naissances."
  },
  {
    id: "Q185",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Divergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux historiens sur l'esclavage en Nouvelle-France. Sur quel point précis ces historiens sont-ils en désaccord ?",
    aspects: [
      {
        aspect: "Villes du Canada"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Le nombre relativement limité d'esclaves en Nouvelle-France fait en sorte que l'esclavage occupe une place moins importante dans la vie économique de la colonie que dans plusieurs autres colonies américaines. »",
            source: "Marcel Trudel, L'esclavage au Canada français, Montréal, Hurtubise HMH, 1960."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Même si leur nombre demeure modeste, les esclaves sont présents dans plusieurs villes et foyers de la colonie, ce qui témoigne d'une intégration réelle de l'esclavage à la société de la Nouvelle-France. »",
            source: "Brett Rushforth, Bonds of Alliance: Indigenous and Atlantic Slaveries in New France, Chapel Hill, University of North Carolina Press, 2012."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les historiens sont en désaccord sur l'importance de l'esclavage dans la société de la Nouvelle-France. L'un considère qu'il occupe une place limitée, tandis que l'autre estime qu'il est bien intégré à la société coloniale."
  },
  {
    id: "Q186",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Similitude",
    enonce: "À partir des documents A et B, indiquez une fonction commune de la place publique de Québec et de Ville-Marie.",
    aspects: [
      {
        aspect: "Villes du Canada"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "place_publique_qc.png",
            soustitre: "Place publique de Québec vers 1700",
            source: "Reconstitution historique (IA), inspirée de l'organisation de la place publique de Québec au XVIIe siècle."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "place_publique_mtl.png",
            soustitre: "Place publique de Ville-Marie vers 1700",
            source: "Reconstitution historique (IA), inspirée de l'organisation de la place publique de Ville-Marie au XVIIe siècle."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les deux places publiques servent de lieu d'échanges commerciaux (ou de commerce)."
  },
  {
    id: "Q187",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Similitude",
    enonce: "À partir des documents A et B, indiquez une activité commune qui se déroule sur la place publique de Québec et de Ville-Marie.",
    aspects: [
      {
        aspect: "Villes du Canada"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "place_publique_qc.png",
            soustitre: "Place publique de Québec vers 1700",
            source: "Reconstitution historique (IA), inspirée de l'organisation de la place publique de Québec au XVIIe siècle."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "place_publique_mtl.png",
            soustitre: "Place publique de Ville-Marie vers 1700",
            source: "Reconstitution historique (IA), inspirée de l'organisation de la place publique de Ville-Marie au XVIIe siècle."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les échanges commerciaux (le troc, le commerce)."
  },
  {
    id: "Q188",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez une fonction de la place publique en Nouvelle-France.",
    aspects: [
      {
        aspect: "Villes du Canada"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Le marché constitue un lieu central de la vie urbaine où les habitants viennent vendre leurs produits, s’approvisionner et entretenir des relations économiques indispensables au fonctionnement de la colonie. »",
            source: "Dechêne, Louise. Habitants et marchands de Montréal au XVIIe siècle. Montréal, Boréal Compact, 1988 (1re éd. 1974)."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Lieu d'échanges commerciaux ou de troc."
  },
  {
    id: "Q189",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P2 — 1608 – 1760",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A, B et C présentent le point de vue de trois historiens sur les effets du métissage en Nouvelle-France. Nommez l'historien qui présente une position différente et comparez sa position à celle des deux autres historiens.",
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
            texte: "« Les alliances et les unions entre Français et Autochtones favorisent l'émergence de communautés métissées dans plusieurs régions de l'Amérique française. »",
            source: "Denys Delâge, Le pays renversé (1985)."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les contacts quotidiens entre Français et Autochtones ont contribué à la formation d'une population métissée ainsi qu'au partage de nombreuses pratiques culturelles. »",
            source: "Olive Patricia Dickason, Canada's First Nations (1992)."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Malgré certaines unions mixtes, la population du Canada demeure principalement d'origine française et le métissage ne transforme pas profondément sa composition démographique. »",
            source: "Marcel Trudel, Histoire de la Nouvelle-France."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "Marcel Trudel estime que le métissage a eu une importance limitée (la différence), alors que Denys Delâge et Olive Patricia Dickason estiment qu'il a contribué de façon importante à l'évolution de la population de la Nouvelle-France (la similitude)."
  },
  {
    id: "Q190",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Changement",
    enonce: "À partir des documents A et B, indiquez un changement dans le mode de vie des Hurons-Wendat entre 1600 et 1700.",
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
            ref: "huron_1600.png",
            soustitre: "Représentation d'un homme huron-wendat vers 1600",
            source: "Reconstitution historique (IA), inspirée des travaux de Bruce G. Trigger sur les Hurons-Wendat."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "huron_1700.png",
            soustitre: "Représentation d'un homme huron-wendat vers 1700",
            source: "Reconstitution historique (IA), inspirée des travaux de Bruce G. Trigger sur les Hurons-Wendat."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "L'adoption d'éléments culturels européens, notamment dans l'habillement ou les armes (arquebuse)."
  },
  {
    id: "Q191",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez le phénomène illustré par l'adoption de certains éléments de la culture européenne par des Autochtones en Nouvelle-France.",
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
            texte: "« Les échanges avec les Européens modifient les modes de vie autochtones, notamment par l'utilisation de nouveaux outils, vêtements et armes. »",
            source: "Bruce G. Trigger, Les Enfants d'Aataentsic (1976)."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Acculturation."
  },
  {
    id: "Q192",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez le phénomène qui résulte des unions entre Autochtones et Européens en Nouvelle-France.",
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
            texte: "Les unions entre Autochtones et Européens contribuent à l'apparition d'une population métissée dans plusieurs régions de l'Amérique française. »",
            source: "Delâge, Denys. Le pays renversé : Amérindiens et Européens en Amérique du Nord-Est, 1600-1664. Montréal, Boréal, 1991."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Métissage."
  },
  {
    id: "Q193",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez le groupe social qui accorde des terres aux censitaires en échange de redevances.",
    aspects: [
      {
        aspect: "Régime seigneurial"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les terres étaient accordées à des habitants qui s'engageaient à les défricher et à les mettre en valeur, conformément aux obligations imposées par le détenteur de la seigneurie. »",
            source: "Allan Greer, Habitants et Patriotes : la vie rurale au Bas-Canada, Montréal, Boréal, 1997."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Les seigneurs."
  },
  {
    id: "Q194",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une raison qui explique pourquoi les seigneuries sont généralement établies le long du fleuve Saint-Laurent.",
    aspects: [
      {
        aspect: "Régime seigneurial"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Le Saint-Laurent constitue l’axe principal de circulation de la colonie. Les déplacements des personnes, des marchandises et des informations s’effectuent principalement par cette voie navigable. »",
            source: "Louise Dechêne, Le peuple, l'État et la guerre au Canada sous le Régime français, Montréal, Boréal, 2008."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Le transport des personnes et des marchandises ou les communications ou l'accès au commerce ou l'accès à l'eau."
  },
  {
    id: "Q195",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "3 documents",
    enonce: "Les documents A à C présentent des descriptions de différents seigneurs en Nouvelle-France. Associez chaque document au type de seigneur correspondant.",
    aspects: [
      {
        aspect: "Régime seigneurial"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Il participe aux campagnes militaires de la colonie et obtient un vaste domaine après plusieurs années de service auprès du roi. »",
            source: "Louise Dechêne, Le partage des subsistances au Canada sous le Régime français, Montréal, Boréal, 1994."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les revenus tirés du domaine servent notamment à financer un hôpital, une école et diverses œuvres de bienfaisance. »",
            source: "Jean Hamelin, Histoire du catholicisme québécois, Montréal, Boréal, 1984."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Sa fortune provient principalement du commerce. Au fil du temps, il investit dans des terres afin d'accroître son influence au sein de la société coloniale. »",
            source: "Allan Greer, Brève histoire des peuples de la Nouvelle-France, Montréal, Boréal, 1998."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Bourgeois",
        "Communauté religieuse",
        "Noble"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Bourgeois",
        "Communauté religieuse",
        "Noble"
      ],
      rangees: [
        [
          "B",
          "C",
          "A"
        ]
      ]
    }
  },
  {
    id: "Q196",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez le type de croyance religieuse pratiqué par plusieurs peuples autochtones vers 1500.",
    aspects: [
      {
        aspect: "Rapports sociaux chez les Autochtones"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les peuples autochtones considèrent que les animaux, les plantes, les cours d’eau et les phénomènes naturels sont habités par des esprits avec lesquels il est possible d’entrer en relation. »",
            source: "Denys Delâge, Le pays renversé. Amérindiens et Européens en Amérique du Nord-Est, 1600-1664, Montréal, Boréal, 1991."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "L'animisme ou les croyances animistes."
  },
  {
    id: "Q197",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Continuité",
    enonce: "Indiquez un élément de continuité dans les activités de subsistance pratiquées par les colons en Nouvelle-France entre 1670 et 1750.",
    aspects: [
      {
        aspect: "Régime seigneurial"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "agriculture_1670.png",
            soustitre: "Vers 1670",
            source: "Adaptation et reconstitution historique réalisée à partir des caractéristiques générales de l'agriculture en Nouvelle-France. Illustration générée par IA (OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "agriculture_1750.png",
            soustitre: "Vers 1750",
            source: "Adaptation et reconstitution historique réalisée à partir des caractéristiques générales de l'agriculture en Nouvelle-France. Illustration générée par IA (OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "L'agriculture demeure la principale activité de subsistance pratiquée par les colons français en Nouvelle-France."
  },
  {
    id: "Q198",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez le nom du système commercial associé aux échanges entre la France, la Nouvelle-France et les Antilles.",
    aspects: [
      {
        aspect: "Diversification économique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "commerce_triangulaire.png",
            source: "Reconstitution pédagogique des échanges entre la France, la Nouvelle-France et les Antilles. Schéma généré par IA (OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Le commerce triangulaire."
  },
  {
    id: "Q199",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "3 documents",
    enonce: "Les documents A à C présentent des rôles joués par différents territoires dans les échanges commerciaux de l'Empire français au 18e siècle. Associez chaque document au rôle correspondant.",
    aspects: [
      {
        aspect: "Diversification économique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Selon les principes du mercantilisme, [la métropole] reçoit les matières premières produites dans ses colonies, les transforme dans ses manufactures puis réexporte des produits finis vers les différents territoires de son empire colonial. » (36 mots)",
            source: "Allan Greer, Brève histoire des peuples de la Nouvelle-France, Montréal, Boréal, 1998, p. 95-97."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« [La colonie] approvisionne les Antilles françaises en bois, poisson et farine. Ces échanges permettent à la colonie de participer davantage au commerce impérial et de réduire sa dépendance envers le seul marché métropolitain. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 1 : Des origines à 1791, Québec Amérique, 1995, p. 171-173."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« [Elles] offrent un débouché important aux produits canadiens. En retour, elles expédient du sucre, du rhum et d'autres produits tropicaux qui circulent ensuite dans les réseaux commerciaux de l'Empire français. »",
            source: "Gilles Havard et Cécile Vidal, Histoire de l'Amérique française, Paris, Flammarion, 2003, p. 337-339."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Antilles",
        "France",
        "Nouvelle-France"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Antilles",
        "France",
        "Nouvelle-France"
      ],
      rangees: [
        [
          "C",
          "A",
          "B"
        ]
      ]
    }
  },
  {
    id: "Q200",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    enonce: "Indiquez une conséquence des mesures mises en place par les intendants sur l'économie de la colonie.",
    aspects: [
      {
        aspect: "Diversification économique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Au cours du 18e siècle, on observe l'apparition de chantiers navals, de forges, de tanneries et d'autres métiers spécialisés qui s'ajoutent aux activités déjà pratiquées dans la vallée du Saint-Laurent. »",
            source: "Alain Beaulieu, Yves Bergeron et Jacques Mathieu, Les Québécois : héritage et projets, CEC, édition secondaire."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "La diviersification économique ou l'économie de la colonie se diversifie."
  },
  {
    id: "Q201",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Cause et conséquence",
    enonce: "Les documents A et B présentent des informations sur l'économie de la Nouvelle-France. Indiquez quel document présente une cause et quel document présente une conséquence des mesures mises en place par les intendants.",
    aspects: [
      {
        aspect: "Diversification économique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« L'administration coloniale encourage la création de manufactures, soutient certains chantiers de construction navale et favorise l'établissement de nouvelles activités de production dans la colonie. »",
            source: "Marcel Trudel, Initiation à la Nouvelle-France : histoire et institutions, Montréal, Holt, Rinehart et Winston, 1968."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Au XVIIe siècle, la colonie demeure largement dépendante du commerce des fourrures, qui constitue l'essentiel de ses exportations et mobilise une grande partie de ses activités économiques. »",
            source: "Allan Greer, Brève histoire des peuples de la Nouvelle-France, Montréal, Boréal, 1998."
          }
        ]
      }
    ],
    reponse: {
      type: "cause-consequence"
    },
    guide: {
      type: "grille",
      entetes: [
        "Cause",
        "Conséquence"
      ],
      rangees: [
        [
          "B",
          "A"
        ]
      ]
    }
  },
  {
    id: "Q202",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P2 — 1608 – 1760",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A et B, indiquez s'il y a changement ou continuité dans les activités économiques pratiquées dans la colonie après l'instauration du gouvernement royal. Justifiez votre réponse à l'aide de faits et d'un repère de temps.",
    aspects: [
      {
        aspect: "Diversification économique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "activites_eco_1670.png",
            soustitre: "Principales activités économiques de la colonie vers 1663",
            source: "adapté de Jacques Mathieu, La Nouvelle-France : les Français en Amérique du Nord, XVIe-XVIIIe siècle."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "activites_eco_1750.png",
            soustitre: "Principales activités économiques de la colonie vers 1700",
            source: "adapté de Jacques Mathieu, La Nouvelle-France : les Français en Amérique du Nord, XVIe-XVIIIe siècle."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "Changement\nIl y a changement, car après l'instauration du gouvernement royal en 1663, de nouvelles activités économiques apparaissent dans la colonie. Vers 1700, on retrouve notamment la construction navale, les forges et les tanneries.\n\nContinuité\nIl y a continuité, car le commerce des fourrures, l'agriculture et la pêche sont pratiqués avant et après l'instauration du gouvernement royal. Ces activités sont présentes vers 1663 comme vers 1700."
  },
  {
    id: "Q203",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez l'activité économique pratiquée par la majorité des habitants de la Nouvelle-France au 18e siècle.",
    aspects: [
      {
        aspect: "Diversification économique"
      },
      {
        aspect: "Régime seigneurial"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "activites_habitants_n-f_1740.png",
            soustitre: "Activités économiques pratiques par les habitants vers 1740",
            source: "Adapté de synthèses historiques sur la structure économique de la Nouvelle-France au XVIIIe siècle."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "L'agriculture."
  },
  {
    id: "Q204",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence du développement de l'agriculture sur la population de la Nouvelle-France.",
    aspects: [
      {
        aspect: "Croissance de la population"
      },
      {
        aspect: "Diversification économique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "activites_habitants_n-f_1740.png",
            soustitre: "Population de la Nouvelle-France (1663-1760)",
            source: "Adapté des données démographiques présentées par Marcel Trudel, Initiation à la Nouvelle-France : histoire et institutions, 1968."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "L'augmentation de la population ou la croissance de la population."
  },
  {
    id: "Q205",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une cause liée à l'économie qui contribue à la croissance de la population en Nouvelle-France au 18e siècle.",
    aspects: [
      {
        aspect: "Croissance de la population"
      },
      {
        aspect: "Diversification économique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Dans la vallée du Saint-Laurent, les habitants cultivent principalement le blé et élèvent divers animaux. Ces activités procurent des ressources alimentaires importantes et occupent une place centrale dans la vie économique de la colonie. »",
            source: "Jacques Mathieu, La Nouvelle-France : les Français en Amérique du Nord, XVIe-XVIIIe siècle, Québec, Presses de l'Université Laval, 1991."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Le développement de l'agriculture."
  },
  {
    id: "Q206",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P2 — 1608 – 1760",
    points: 3,
    enonce: "Expliquez comment les mesures mises en place par les autorités coloniales contribuent au développement économique de la Nouvelle-France.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux :\n\n• une mesure mise en place par les autorités coloniales\n• une activité artisanale qui se développe\n• une conséquence sur le développement économique de la colonie",
    aspects: [
      {
        aspect: "Diversification économique"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Au milieu du 18e siècle, un établissement industriel est aménagé près de Trois-Rivières. On y transforme une ressource extraite localement afin de produire divers objets destinés à la colonie. »",
            source: "Marcel Moussette, Les Forges du Saint-Maurice : les débuts de l'industrie au Canada, Québec, Les Publications du Québec, 1985. (adaptation pédagogique)"
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "activies_econiques_1663_1740.png",
            soustitre: "Les activités économiques de la Nouvelle-France",
            source: "Source pédagogique inspirée des travaux de Louise Dechêne, Allan Greer et Jacques Lacoursière sur l'économie de la Nouvelle-France."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Sous l'administration de Gilles Hocquart, les autorités coloniales investissent dans plusieurs projets économiques et accordent leur appui à certaines entreprises. Ces interventions visent à développer la production locale et à répondre davantage aux besoins de la colonie. »",
            source: "Adapté de Gilles Proulx, Gilles Hocquart, intendant de la Nouvelle-France, Québec, Septentrion, 2009."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "Les autorités coloniales investissent dans plusieurs projets économiques (une mesure mise en place par les autorités coloniales). Cette intervention favorise le développement du travail du fer aux Forges du Saint-Maurice (une activité artisanale qui se développe). L'apparition de cette nouvelle activité contribue à diversifier les activités économiques de la colonie (une conséquence sur la diversification de l'économie de la colonie)."
  },
  {
    id: "Q207",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez une pratique culturelle européenne maintenue par les colons en Nouvelle-France.",
    aspects: [
      {
        aspect: "Adaptation des colons"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "eglise_catholique_n-f_1700.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "La pratique de la religion catholique."
  },
  {
    id: "Q208",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de l'éloignement de la Nouvelle-France par rapport à la France sur la vie des colons.",
    aspects: [
      {
        aspect: "Adaptation des colons"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "traversee_atlantique_1700.png",
            soustitre: "Le transport entre la colonie et la métropole vers 1700",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les colons produisent davantage de biens localement ou les colons s'adaptent aux ressources du territoire ou les colons deviennent plus autonomes ou les marchandises arrivent moins rapidement de France."
  },
  {
    id: "Q209",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Changement",
    enonce: "À partir des documents A et B, indiquez un changement apporté aux habitations des colons en Nouvelle-France entre 1650 et 1700.",
    aspects: [
      {
        aspect: "Adaptation des colons"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "maison_1650.png",
            soustitre: "Habitation en Nouvelle-France vers 1650",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "maison_1700.png",
            soustitre: "Habitation en Nouvelle-France vers 1700",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Entre 1650 et 1700, les habitations des colons changent. Les maisons d'abord construites en bois avec une toiture peu inclinée sont de plus en plus construites en pierre avec une toiture plus inclinée."
  },
  {
    id: "Q210",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence des hivers rigoureux sur les déplacements des colons.",
    aspects: [
      {
        aspect: "Adaptation des colons"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "coureur_bois_n-f.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les colons utilisent des raquettes pour se déplacer durant l'hiver. (ou toute réponse équivalente démontrant l'adaptation des déplacements à la neige.)"
  },
  {
    id: "Q211",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence des relations avec les Autochtones sur les déplacements des colons.",
    aspects: [
      {
        aspect: "Adaptation des colons"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "canot_ecorce.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les colons adoptent le canot comme moyen de transport."
  },
  {
    id: "Q212",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez un moyen de transport adopté par les colons grâce aux contacts avec les Autochtones.",
    aspects: [
      {
        aspect: "Adaptation des colons"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "canot_ecorce.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Le canot."
  },
  {
    id: "Q213",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P2 — 1608 – 1760",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A, B et C présentent le point de vue de trois historiens sur les effets de l'éloignement géographique de la métropole. Nommez l'historien qui présente un point de vue différent et comparez sa position à celle des deux autres historiens.",
    aspects: [
      {
        aspect: "Adaptation des colons"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« La distance qui sépare la Nouvelle-France de la France oblige souvent les habitants à répondre eux-mêmes à leurs besoins quotidiens. Cette réalité favorise le développement d'une plus grande autonomie dans la colonie. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, adaptation pédagogique."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Malgré l'éloignement de la métropole, la colonie demeure largement dépendante de la France pour son administration, son commerce et plusieurs produits essentiels. »",
            source: "Allan Greer, Brève histoire des peuples de la Nouvelle-France, adaptation pédagogique."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Les longs délais de communication avec la métropole amènent les colons à prendre plusieurs décisions sans attendre les directives venues de France. Cette situation contribue à leur adaptation aux réalités locales. »",
            source: "Gilles Havard et Cécile Vidal, Histoire de l'Amérique française, adaptation pédagogique."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "Allan Greer considère que les colons demeurent dépendants de la métropole (la différence), alors que Jacques Lacoursière et Gilles Havard considèrent que l’éloignement géographique favorise l’autonomie des colons (la similitude)."
  },
  {
    id: "Q214",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P2 — 1608 – 1760",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A, B et C présentent le point de vue de trois historiens sur les rapports de force durant les guerres intercoloniales. Nommez l’historien qui présente un point de vue différent et comparez sa position à celle des deux autres historiens.",
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
            texte: "« Le rapport de force entre les empires européens en Amérique du Nord est largement influencé par la supériorité démographique des colonies britanniques, qui disposent de davantage de soldats et de ressources. »",
            source: "Gilles Havard et Cécile Vidal, Histoire de l'Amérique française, Paris, Flammarion, adaptation pédagogique."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Malgré leur infériorité numérique, les Français réussissent souvent à maintenir l'équilibre grâce à leurs alliances avec plusieurs nations autochtones et à leur connaissance du territoire. »",
            source: "Marcel Trudel, Histoire de la Nouvelle-France, adaptation pédagogique."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Au début du 18e siècle, la population de la Nouvelle-France demeure beaucoup moins nombreuse que celle des colonies britanniques. Cet écart démographique limite la capacité militaire de la colonie française. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 1 : Des origines à 1791, Québec, Septentrion, adaptation pédagogique."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "Marcel Trudel considère que les alliances autochtones favorisent les Français (la différence), alors que Jacques Lacoursière et Gilles Havard considèrent que les Britanniques sont avantagés par leur plus grande population (la similitude)."
  },
  {
    id: "Q215",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Ordre chronologique",
    enonce: "Les documents A à D présentent des événements liés à la Guerre de la Conquête. Placez-les en ordre chronologique.",
    aspects: [
      {
        aspect: "Guerre de la Conquête"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Craignant que certains habitants demeurent loyaux à la France, les autorités britanniques entreprennent une vaste opération visant à disperser une population établie depuis plusieurs générations dans les Maritimes. »",
            source: "Naomi Griffiths, From Migrant to Acadian, Montréal, McGill-Queen's University Press, adaptation pédagogique."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Après plusieurs mois de préparatifs, les forces britanniques parviennent à établir leur position à proximité de la principale ville de la colonie, où se joue l’issue du conflit. »",
            source: "Marcel Trudel, Histoire de la Nouvelle-France, adaptation pédagogique."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Dans la vallée de l’Ohio, des affrontements opposent des troupes françaises et britanniques avant que le conflit ne s’étende à l’ensemble de l’Amérique du Nord. »",
            source: "Gilles Havard et Cécile Vidal, Histoire de l’Amérique française, Paris, Flammarion, adaptation pédagogique."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« La chute de cette importante forteresse du golfe du Saint-Laurent prive la Nouvelle-France d’un poste militaire essentiel à la défense de ses accès maritimes. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 1, Septentrion, adaptation pédagogique."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_abDc.png"
    },
    guide: "C - A - D - B"
  },
  {
    id: "Q216",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "4 documents",
    enonce: "Les documents A à D présentent des événements liés à la Guerre de la Conquête. Associez chaque document à l’événement correspondant.",
    aspects: [
      {
        aspect: "Guerre de la Conquête"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« La capture d’un important poste militaire situé à l’est de la colonie modifie l’équilibre des forces et ouvre une nouvelle voie d’attaque vers le cœur du territoire français. »",
            source: "Marcel Trudel, Histoire de la Nouvelle-France, adaptation pédagogique."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Quelques mois après la perte de la capitale, les forces françaises remportent une importante victoire terrestre, sans toutefois réussir à reprendre la ville. »",
            source: "Jacques Mathieu, La Nouvelle-France : les Français en Amérique du Nord, adaptation pédagogique."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« La mort des commandants des deux armées marque cet affrontement dont l’issue modifie profondément le cours de la guerre en Amérique du Nord. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 1, adaptation pédagogique."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« Avant l’affrontement décisif qui oppose les deux armées près de la capitale, la ville subit pendant plusieurs semaines les attaques des forces britanniques. »",
            source: "Gaston Deschênes, La Guerre de la Conquête, adaptation pédagogique."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Bataille de Sainte-Foy",
        "Bataille des Plaines d'Abraham",
        "Prise de Louisbourg",
        "Siège de Québec"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Bataille de Sainte-Foy",
        "Bataille des Plaines d'Abraham",
        "Prise de Louisbourg",
        "Siège de Québec"
      ],
      rangees: [
        [
          "B",
          "C",
          "A",
          "D"
        ]
      ]
    }
  },
  {
    id: "Q217",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux historiens sur la milice canadienne durant la Guerre de la Conquête. Sur quel point précis ces historiens sont-ils d’accord ?",
    aspects: [
      {
        aspect: "Guerre de la Conquête"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les miliciens canadiens connaissent bien le territoire et utilisent des tactiques adaptées aux forêts nord-américaines, ce qui constitue un atout important pour les forces françaises durant le conflit. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 1, adaptation pédagogique."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Bien qu’ils ne soient pas des soldats professionnels, les membres de la milice participent activement à la défense de la colonie grâce à leur expérience du territoire et à leur capacité de combattre dans des conditions difficiles. »",
            source: "Marcel Trudel, Histoire de la Nouvelle-France, adaptation pédagogique."
          }
        ]
      }
    ],
    reponse: false,
    guide: "Jacques Lacoursière et Marcel Trudel considèrent que la connaissance du territoire constitue un avantage important de la milice canadienne durant la Guerre de la Conquête."
  },
  {
    id: "Q218",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P2 — 1608 – 1760",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A, B et C présentent le point de vue de trois historiens sur la bataille des Plaines d'Abraham. Nommez l’historien qui présente un point de vue différent et comparez sa position à celle des deux autres historiens.",
    aspects: [
      {
        aspect: "Guerre de la Conquête"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« La victoire britannique lors de cet affrontement constitue un tournant majeur de la Guerre de la Conquête puisqu’elle ouvre la voie à la prise de la capitale de la colonie. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, adaptation pédagogique."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les conséquences militaires de cette bataille favorisent les Britanniques et affaiblissent considérablement la capacité de résistance de la Nouvelle-France. »",
            source: "Marcel Trudel, Histoire de la Nouvelle-France, adaptation pédagogique."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Bien que cette bataille soit importante, elle ne met pas immédiatement fin à la résistance française puisque les combats se poursuivent l'année suivante. »",
            source: "Gaston Deschênes, La Guerre de la Conquête, adaptation pédagogique."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "Gaston Deschênes considère que la résistance française se poursuit après la bataille (la différence), alors que Jacques Lacoursière et Marcel Trudel considèrent que la bataille marque un tournant dans la Guerre de la Conquête (la similitude)."
  },
  {
    id: "Q219",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P3 — 1760 – 1791",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
    aspects: [
      {
        aspect: "Invasion américaine"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "invasion_americaine.png",
            soustitre: "Combats dans les rue de Québec lors de l'invasion américaine",
            source: "Reconstitution historique réalisée à l'aide de ChatGPT/OpenAI, inspirée de représentations de l'invasion américaine, 2026."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_1760-1800.png"
    },
    guide: "B"
  },
  {
    id: "Q220",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P3 — 1760 – 1791",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
    aspects: [
      {
        aspect: "Régime militaire"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "capitulation_mtl_1760.png",
            soustitre: "Capitulation de Montréal",
            source: "Reconstitution historique réalisée à l'aide de ChatGPT/OpenAI, inspirée de représentations de la capitulation de Montréal, 2026."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_1755-1795.png"
    },
    guide: "A"
  },
  {
    id: "Q221",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P3 — 1760 – 1791",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
    aspects: [
      {
        aspect: "Proclamation royale"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les habitants de la province devront bénéficier des lois de l'Angleterre autant que les circonstances le permettront. »\n\n« Dès que l'état et les circonstances de la colonie le permettront, une assemblée générale pourra être convoquée. »\n\n« Le territoire de la Province de Québec est plus restreint que celui de l'ancienne Nouvelle-France. »",
            soustitre: "Extraits de la Proclamation royale",
            source: "Proclamation royale - document officiel."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_1760-1800.png"
    },
    guide: "A"
  },
  {
    id: "Q222",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P3 — 1760 – 1791",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
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
            titre: "Document A",
            ref: "revolte_pontiac.png",
            soustitre: "Révolte de Pontiac",
            source: "Reconstitution historique réalisée à l'aide de ChatGPT/OpenAI, inspirée de représentations de la révolte de Pontiac, 2026."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_1760-1800.png"
    },
    guide: "A"
  },
  {
    id: "Q223",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P3 — 1760 – 1791",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
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
            texte: "« Les habitants professant la religion de l'Église de Rome pourront en conserver le libre exercice. »\n\n« Dans toutes les causes relatives à la propriété et aux droits civils, les lois du Canada serviront de règle pour décider. »\n\n« Les limites de la province sont étendues et comprennent les territoires décrits dans le présent acte. »",
            soustitre: "Extraits de l'Acte de Québec",
            source: "Acte de Québec - document officiel."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_1760-1800.png"
    },
    guide: "B"
  },
  {
    id: "Q224",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P3 — 1760 – 1791",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
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
            ref: "arrivee_loyalistes.png",
            soustitre: "Arrivée des premiers Loyalistes",
            source: "Reconstitution historique réalisée à l'aide de ChatGPT/OpenAI, inspirée de représentations de l'arrivée des Loyalistes, 2026."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_1760-1800.png"
    },
    guide: "B"
  },
  {
    id: "Q225",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P3 — 1760 – 1791",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
    aspects: [
      {
        aspect: "Invasion américaine"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Sa Majesté Britannique reconnaît lesdits États-Unis, à savoir le New Hampshire, le Massachusetts, le Rhode Island, le Connecticut, New York, le New Jersey, la Pennsylvanie, le Delaware, le Maryland, la Virginie, la Caroline du Nord, la Caroline du Sud et la Géorgie, comme États libres, souverains et indépendants. »",
            soustitre: "Extrait du traité de Paris",
            source: "Traité de Paris - document officiel."
          }
        ]
      }
    ],
    reponse: {
      type: "image",
      ref: "ligne_1760-1800.png"
    },
    guide: "C"
  },
  {
    id: "Q226",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez le nom de la période durant laquelle la colonie est administrée par des autorités britanniques entre la capitulation de Montréal et le Traité de Paris.",
    aspects: [
      {
        aspect: "Régime militaire"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Après la capitulation de Montréal, le territoire est divisé en trois districts administratifs : Québec, Trois-Rivières et Montréal. Chacun de ces districts est placé sous l'autorité d'un gouverneur britannique chargé d'assurer l'administration de la colonie jusqu'à ce que son statut soit officiellement déterminé. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 2, Septentrion."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Le régime militaire.",
    updatedAt: "2026-06-03T11:42:12.905Z"
  },
  {
    id: "Q227",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de la capitulation de Montréal sur l'administration de la colonie.",
    aspects: [
      {
        aspect: "Régime militaire"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "regime_militaire_org_pol.png",
            source: "chéma produit par intelligence artificielle, inspiré des ouvrages d'histoire du Québec et du Canada."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Le gouvernement de la colonie passe sous l'autorité britannique ou la colonie est divisée en trois districts administrés par des gouverneurs britanniques.",
    updatedAt: "2026-06-03T11:54:22.346Z"
  },
  {
    id: "Q228",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Changement",
    enonce: "Indiquez un changement dans la gouvernance de la colonie suite à la capitulation de Montréal.",
    aspects: [
      {
        aspect: "Régime militaire"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« La capitulation de Montréal marque la fin du gouvernement français. Les autorités britanniques prennent désormais en charge l'administration de la colonie. »",
            source: "Alain Beaulieu, Stéphane Gervais et Martin Papillon, Histoire du Québec et du Canada, CEC."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les autorités britanniques remplacent les autorités françaises.",
    updatedAt: "2026-06-03T12:09:53.746Z"
  },
  {
    id: "Q229",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez un moyen utilisé par les autorités militaires britanniques pour favoriser la reprise des activités dans la colonie entre 1760 et 1763.",
    aspects: [
      {
        aspect: "Régime militaire"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les autorités militaires britanniques permettent aux habitants de retourner sur leurs terres. Elles distribuent des vivres dans certaines régions touchées par la guerre et contribuent à la réparation de bâtiments et d'infrastructures endommagés. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 2 : De 1760 à 1791, Québec Amérique, 1995."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Distribution de vivres aux habitants et réparation ou reconstruction des bâtiments et réparation des infrastructures.",
    updatedAt: "2026-06-04T01:00:23.723Z"
  },
  {
    id: "Q230",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez le nom du traité signé en 1763 qui met fin à la guerre de Setp Ans entre la France et la Grande-Bretagne.",
    aspects: [
      {
        aspect: "Proclamation royale"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« En 1763, la guerre qui oppose la France et la Grande-Bretagne depuis plusieurs années prend officiellement fin. À cette occasion, la France cède le Canada à la Grande-Bretagne. »",
            source: "Alain Beaulieu, Stéphane Gervais et Martin Papillon, Histoire du Québec et du Canada, CEC."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Traité de Paris.",
    updatedAt: "2026-06-06T17:50:01.019Z"
  },
  {
    id: "Q231",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P3 — 1760 – 1791",
    points: 2,
    enonce: "Les documents A à D font référence aux traités de Paris. Indiquez à l’endroit approprié la lettre des documents correspondants.",
    aspects: [
      {
        aspect: "Invasion américaine"
      },
      {
        aspect: "Proclamation royale"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Après la guerre de Sept Ans, la France conserve seulement quelques îles de l'Atlantique afin de maintenir certaines activités liées à la pêche. »",
            source: "Trudel, Marcel. Initiation à la Nouvelle-France. Montréal, Holt, Rinehart et Winston, 1968."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« La Grande-Bretagne reconnaît officiellement l'indépendance des États-Unis, mettant fin au conflit qui oppose les colonies américaines à la métropole britannique depuis plusieurs années. »",
            source: "Beaulieu, Alain, Stéphane Gervais et Martin Papillon. Histoire du Québec et du Canada. Montréal, CEC, 2018."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Le territoire situé au sud des Grands Lacs est désormais intégré aux États-Unis, ce qui modifie l'équilibre territorial établi depuis la Conquête. »",
            source: "Dickinson, John A. et Brian Young. Brève histoire socio-économique du Québec. Sillery, Septentrion, 2009."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« [...] la France cède le Canada à la Grande-Bretagne. Cette décision met fin à plusieurs années de guerre et modifie profondément l'organisation politique de la colonie. »",
            source: "Beaulieu, Alain, Stéphane Gervais et Martin Papillon. Histoire du Québec et du Canada. Montréal, CEC, 2018."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Traité de Paris - 1763",
        "Traité de Paris - 1783"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Traité de Paris - 1763",
        "Traité de Paris - 1783"
      ],
      rangees: [
        [
          "A et D",
          "B et C"
        ]
      ]
    },
    updatedAt: "2026-06-04T12:00:01.235Z"
  },
  {
    id: "Q232",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P3 — 1760 – 1791",
    points: 3,
    enonce: "Expliquez comment la fin de la guerre de la Conquête transforme le territoire de l’Amérique du Nord.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux :\n\n• un résultat de la guerre de la Conquête\n• le traité qui met fin à cette guerre\n• une modification du territoire de l’Amérique du Nord",
    aspects: [
      {
        aspect: "Proclamation royale"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "capitulation_mtl_1760.png",
            soustitre: "Capitulation de Montréal",
            source: "Reconstitution historique réalisée à l'aide de ChatGPT/OpenAI, inspirée de représentations de la capitulation de Montréal, 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« En 1763, un traité met officiellement fin à la guerre entre la France et la Grande-Bretagne. Les représentants des deux puissances y définissent le sort de leurs possessions nord-américaines. »",
            source: "Beaulieu, Alain, Stéphane Gervais et Martin Papillon. Histoire du Québec et du Canada. Montréal, CEC, 2018."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "carte_proclamation_royale_territoire.png",
            source: "Récitus."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "La victoire britannique (le résultat de la guerre de la Conquête) lors de la guerre de la Conquête est confirmée par le Traité de Paris de 1763 (le traité qui met fin à la guerre). Par ce traité, la France cède le Canada à la Grande-Bretagne, ce qui agrandit les possessions britanniques et réduit le territoire français en Amérique du Nord (une modification du territoire).",
    updatedAt: "2026-06-04T12:22:19.834Z"
  },
  {
    id: "Q233",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez le nom de la constitution mise en place par les autorités britanniques suite au Traité de Paris de 1763.",
    aspects: [
      {
        aspect: "Proclamation royale"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« La Province de Québec est créée en 1763. Un texte adopté par les autorités britanniques établit alors les structures politiques, juridiques et administratives de la colonie. »",
            source: "Dickinson, John A. et Brian Young. Brève histoire socio-économique du Québec. Sillery, Septentrion, 2009."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "La Proclamation royale.",
    updatedAt: "2026-06-06T18:20:48.863Z"
  },
  {
    id: "Q234",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P3 — 1760 – 1791",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A et B, indiquez s’il y a changement ou continuité dans l’organisation politique de la colonie entre 1760 et 1770. Justifiez votre choix par des faits et un repère de temps.",
    aspects: [
      {
        aspect: "Proclamation royale"
      },
      {
        aspect: "Régime militaire"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "regime_militaire_org_pol.png",
            soustitre: "Organisation politique de la colonie entre 1760-1763",
            source: "Schéma produit par intelligence artificielle, inspiré des ouvrages d'histoire du Québec et du Canada."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "org_pol_apres_1763.png",
            soustitre: "Organisation politique de la colonie après 1763",
            source: "Schéma produit par intelligence artificielle, inspiré des ouvrages d'histoire du Québec et du Canada."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "Changement\n\nIl y a changement, car après 1763, le régime militaire est remplacé par une administration civile britannique. ou Il y a changement, car entre 1760 et 1770, la colonie passe d'un régime militaire à un régime civil britannique.\n\nContinuité\n\nIl y a continuité, car entre 1760 et 1770, la colonie demeure sous l'autorité de la Couronne britannique. ou Il y a continuité, car entre 1760 et 1770, la colonie est administrée par des autorités britanniques.",
    updatedAt: "2026-06-06T21:27:14.923Z"
  },
  {
    id: "Q235",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de la reconnaissance des droits territoriaux des Autochtones par la Proclamation royale de 1763?",
    aspects: [
      {
        aspect: "Proclamation royale"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les terres situées à l'ouest des Appalaches ne peuvent être occupées par les sujets britanniques sans l'autorisation de la Couronne. Les nations indiennes qui y habitent conservent la possession de leurs territoires jusqu'à ce qu'ils soient cédés officiellement. »",
            source: "Adapté de la Proclamation royale, 1763."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "L'expansion du peuplement britannique vers l'ouest est limitée. ou Les colons britanniques ne peuvent pas s'établir librement sur les territoires autochtones. ou L'occupation de certains territoires par les Britanniques est restreinte.",
    updatedAt: "2026-06-06T19:51:00.256Z"
  },
  {
    id: "Q236",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une cause de la révolte de Pontiac.",
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
            titre: "Document A",
            texte: "« Plusieurs nations autochtones s'inquiètent de voir les colons britanniques s'établir dans les régions situées à l'ouest des Appalaches. Elles considèrent que ces terres leur appartiennent et refusent cette progression. »",
            source: "Dickinson, John A. et Brian Young. Brève histoire socio-économique du Québec. Sillery, Septentrion, 2009."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "L'expansion du peuplement britannique sur les territoires autochtones ou l'empiètement des Britanniques sur les territoires autochtones.",
    updatedAt: "2026-06-06T20:03:38.063Z"
  },
  {
    id: "Q237",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Changement",
    enonce: "Indiquez un changement dans les relations entre les Autochtones et les autorités britanniques après la guerre de la Conquête.",
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
            titre: "Document A",
            texte: "« Les autorités françaises entretiennent leurs alliances avec plusieurs nations autochtones par des rencontres diplomatiques régulières et par la distribution de présents. Ces pratiques contribuent au maintien de relations généralement harmonieuses. »",
            soustitre: "Sous le régime français",
            source: "Havard, Gilles et Cécile Vidal. Histoire de l'Amérique française. Paris, Flammarion, 2003."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Après 1760, plusieurs chefs autochtones constatent que les autorités britanniques réduisent la distribution de présents et modifient certaines pratiques diplomatiques qui existaient auparavant avec les Français. »",
            soustitre: "Sous le régime britannique",
            source: "Beaulieu, Alain, Stéphane Gervais et Martin Papillon. Histoire du Québec et du Canada. Montréal, CEC, 2018."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les Britanniques réduisent ou cessent la distribution de présents aux Autochtones ou les Britanniques modifient les alliances établies sous le Régime français.",
    updatedAt: "2026-06-06T20:03:15.483Z"
  },
  {
    id: "Q238",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez le nom de l'organisme britannique chargé des relations avec les Autochtones après la Conquête.",
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
            titre: "Document A",
            texte: "« Après la Conquête, les autorités britanniques mettent sur pied un organisme chargé de maintenir les relations diplomatiques avec les nations autochtones et de veiller aux questions concernant leurs territoires. »",
            source: "Beaulieu, Alain, Stéphane Gervais et Martin Papillon. Histoire du Québec et du Canada. Montréal, CEC, 2018."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Le Département des Affaires indiennes.",
    updatedAt: "2026-06-06T20:40:00.174Z"
  },
  {
    id: "Q239",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une raison qui explique la création du Département des Affaires indiennes par les autorités britanniques.",
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
            titre: "Document A",
            texte: "« Au lendemain de la Conquête, les autorités britanniques doivent composer avec la présence de nombreuses nations autochtones sur un vaste territoire. Elles cherchent à assurer la stabilité de leurs possessions nord-américaines et à éviter de nouveaux affrontements. »",
            source: "Dickinson, John A. et Brian Young. Brève histoire socio-économique du Québec. Sillery, Septentrion, 2009."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Maintenir de bonnes relations avec les Autochtones.",
    updatedAt: "2026-06-06T20:41:51.403Z"
  },
  {
    id: "Q240",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P3 — 1760 – 1791",
    points: 3,
    enonce: "Expliquez comment une action d'un chef autochtone influence les décisions prises par les autorités britanniques concernant les territoires nord-américains.\n\nRépondez à la question en précisant :\n\n• une action d'un chef autochtone\n• un droit reconnu aux Autochtone par la Proclamation royale\n• un effet sur les territoires britanniques nord-américains",
    aspects: [
      {
        aspect: "Proclamation royale"
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
            titre: "Document A",
            ref: "revolte_pontiac.png",
            source: "Reconstitution historique réalisée à l'aide de ChatGPT/OpenAI, inspirée de représentations de la révolte de Pontiac, 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Après les événements de 1763, les autorités britanniques cherchent à éviter de nouveaux conflits dans les régions situées à l'ouest des Appalaches. Elles adoptent des mesures visant à mieux définir les rapports entre les colons et les nations autochtones. »",
            source: "Dickinson, John A. et Brian Young. Brève histoire socio-économique du Québec. Sillery, Septentrion, 2009."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "carte_terr_proclamation_royale.png",
            source: "Récitus."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "La révolte menée par Pontiac (une action d'un chef autochtone) pousse les autorités britanniques à reconnaître certains droits territoriaux aux Autochtones dans la Proclamation royale (un droit reconnu aux Autochtones). Cette décision entraîne la création d'un territoire réservé aux Autochtones (un effet sur les territoires britanniques nord-américains).",
    updatedAt: "2026-06-06T20:58:01.074Z"
  },
  {
    id: "Q241",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez le nom de l'obligation imposée aux catholiques qui souhaitent occuper certaines fonctions publiques après la Conquête.",
    aspects: [
      {
        aspect: "Instructions au gouverneur Murray"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Pour occuper certaines fonctions dans l'administration britannique, une personne doit reconnaître la suprématie du roi comme chef de l'Église anglicane et renoncer à certaines croyances associées à l'Église catholique. »",
            source: "Lacoursière, Jacques. Histoire populaire du Québec, tome 2. Sillery, Septentrion, 1995."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Le Serment du Test.",
    updatedAt: "2026-06-06T21:02:50.524Z"
  },
  {
    id: "Q242",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P3 — 1760 – 1791",
    points: 3,
    enonce: "Expliquez comment la composition de la population influence les décisions prises par le gouverneur Murray.\n\nRépondez à la question en précisant :\n\n• la composition de la population de la colonie\n• une décision prise par Murray\n• une conséquence pour les Canadiens",
    aspects: [
      {
        aspect: "Instructions au gouverneur Murray"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "1763.png",
            soustitre: "Composition de la population de la Province de Québec en 1763",
            source: "adapté de Paul-André Linteau et al., Histoire du Québec contemporain, Montréal, Boréal."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Le gouverneur Murray estime qu'il est préférable de tenir compte des habitudes et des croyances de la population canadienne afin d'assurer la stabilité de la colonie. »",
            source: "Lacoursière, Jacques. Histoire populaire du Québec, tome 2. Sillery, Septentrion, 1995."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Malgré certaines restrictions imposées par les autorités britanniques, plusieurs Canadiens continuent de pratiquer leur religion et de participer à la vie de leur communauté après la Conquête. »",
            source: "Dickinson, John A. et Brian Young. Brève histoire socio-économique du Québec. Sillery, Septentrion, 2009."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "Les Canadiens catholiques forment la majorité de la population de la colonie (la composition de la population de la colonie). Le gouverneur Murray leur accorde certaines concessions, notamment sur le plan religieux (une décision prise par Murray). Les Canadiens peuvent ainsi continuer à pratiquer leur religion catholique (une conséquence pour les Canadiens).",
    updatedAt: "2026-06-06T21:10:21.698Z"
  },
  {
    id: "Q243",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez un moyen proposé dans les instructions du roi pour favoriser l'assimilation des Canadiens.",
    aspects: [
      {
        aspect: "Instructions au gouverneur Murray"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les autorités britanniques souhaitent que les habitants de la nouvelle colonie adoptent progressivement les usages et les institutions en vigueur dans les autres possessions de l'Empire britannique. »",
            source: "Dickinson, John A. et Brian Young. Brève histoire socio-économique du Québec. Sillery, Septentrion, 2009."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Imposer les institutions britanniques ou onstaurer un gouvernement civil britannique ou appliquer les lois britanniques",
    updatedAt: "2026-06-06T21:12:22.247Z"
  },
  {
    id: "Q244",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez un objectif poursuivi par le roi dans les instructions transmises au gouverneur Murray.",
    aspects: [
      {
        aspect: "Instructions au gouverneur Murray"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les autorités britanniques souhaitent transformer progressivement leur nouvelle colonie afin qu'elle ressemble davantage aux autres colonies de l'Empire. Elles espèrent notamment que les habitants adopteront les institutions, les lois et les pratiques britanniques. »",
            source: "Beaulieu, Alain, Stéphane Gervais et Martin Papillon. Histoire du Québec et du Canada. Montréal, CEC, 2018."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "Assimiler les Canadiens.",
    updatedAt: "2026-06-06T21:14:06.575Z"
  },
  {
    id: "Q245",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P3 — 1760 – 1791",
    points: 2,
    enonce: "Les documents A à D présentent des faits liés à l'administration de la colonie entre 1760 et 1774. Associez chaque document au type de gouvernement correspondant.",
    aspects: [
      {
        aspect: "Instructions au gouverneur Murray"
      },
      {
        aspect: "Proclamation royale"
      },
      {
        aspect: "Régime militaire"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Durant les premières années qui suivent la Conquête, les autorités britanniques permettent aux habitants de reprendre progressivement leurs activités économiques tout en administrant directement la colonie. »",
            source: "Dickinson, John A. et Brian Young. Brève histoire socio-économique du Québec. Septentrion, 2009."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "org_pol_apres_1763.png",
            source: "Schéma produit par intelligence artificielle, inspiré des ouvrages d'histoire du Québec et du Canada."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "regime_militaire_org_pol.png",
            source: "Schéma produit par intelligence artificielle, inspiré des ouvrages d'histoire du Québec et du Canada."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« Les nouvelles institutions mises en place dans la colonie s'inspirent de celles des autres possessions britanniques d'Amérique du Nord. »",
            source: "Dickinson, John A. et Brian Young. Brève histoire socio-économique du Québec. Septentrion, 2009."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Gouvernement civil",
        "Gouvernement militaire"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Gouvernement civil",
        "Gouvernement militaire"
      ],
      rangees: [
        [
          "B et D",
          "A et C"
        ]
      ]
    },
    updatedAt: "2026-06-06T21:26:53.038Z"
  },
  {
    id: "Q246",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P3 — 1760 – 1791",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A et B, indiquez s’il y a changement ou continuité dans le territoire de la Province de Québec entre 1763 et 1774. Justifiez votre choix par des faits et un repère de temps.",
    aspects: [
      {
        aspect: "Acte de Québec"
      },
      {
        aspect: "Proclamation royale"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "carte_terr_proclamation_royale.png",
            source: "Récitus."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "carte_terr_acte_quebec.png",
            source: "Récitus."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "Changement :\nIl y a changement, car en 1774, la Province de Québec est beaucoup plus grande qu’en 1763. Elle s’étend maintenant vers les Grands Lacs et la vallée de l’Ohio.\n\nContinuité :\nIl y a continuité, car entre 1763 et 1774, la Province de Québec demeure une possession britannique située dans la région de la vallée du Saint-Laurent.",
    updatedAt: "2026-06-07T00:48:22.548Z"
  },
  {
    id: "Q247",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P3 — 1760 – 1791",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A et B, indiquez s’il y a changement ou continuité dans l’organisation politique de la Province de Québec entre 1763 et 1774. Justifiez votre choix par des faits et un repère de temps.",
    aspects: [
      {
        aspect: "Acte de Québec"
      },
      {
        aspect: "Proclamation royale"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "org_pol_apres_1763.png",
            source: "Schéma produit par intelligence artificielle, inspiré des ouvrages d'histoire du Québec et du Canada."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "org_pol_apres_1784.png",
            source: "Schéma produit par intelligence artificielle, inspiré des ouvrages d'histoire du Québec et du Canada."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 3
    },
    guide: "Changement :\nIl y a changement, car en 1774, le Conseil de Québec devient le Conseil exécutif et le Conseil législatif.\n\nContinuité :\nIl y a continuité, car entre 1763 et 1774, la Province de Québec demeure dirigée par un gouverneur britannique nommé par le roi.",
    updatedAt: "2026-06-07T00:57:20.378Z"
  },
  {
    id: "Q248",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez le nom de la constitution mise en place par les autorités britanniques dans la Province de Québec en 1774.",
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
            texte: "« En juin 1774, le Parlement britannique adopte une nouvelle loi pour organiser le gouvernement de la Province de Québec. Cette loi remplace une partie des règles établies après la Conquête et modifie l’administration de la colonie. »",
            source: "Adapté d’une loi adoptée par le Parlement britannique, 1774."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 1
    },
    guide: "L’Acte de Québec.",
    updatedAt: "2026-06-07T01:01:10.193Z"
  },
  {
    id: "Q249",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "3 documents",
    enonce: "Les documents A à C présentent des éléments de l’organisation politique de la Province de Québec après l’Acte de Québec de 1774. Associez chaque document au pouvoir correspondant.",
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
            texte: "« L'Acte de Québec maintient les lois criminelles anglaises tout en rétablissant les lois civiles françaises concernant la propriété et les droits civils. »",
            source: "Adapté de Marcel Trudel, Initiation à la Nouvelle-France, Éditions Holt, Rinehart et Winston, 1968."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Le gouverneur demeure le principal représentant de la Couronne dans la colonie et conserve un rôle central dans l'administration du territoire. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 1, Québec Amérique, 1995."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Les ordonnances destinées à assurer le bon gouvernement de la province sont adoptées par un conseil nommé plutôt que par une assemblée élue. »",
            source: "Adapté de Christian Blais, Histoire parlementaire du Québec, Assemblée nationale du Québec, 2012."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "Exécutif",
        "Judiciaire",
        "Législatif"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "Exécutif",
        "Judiciaire",
        "Législatif"
      ],
      rangees: [
        [
          "C",
          "A",
          "C"
        ]
      ]
    },
    updatedAt: "2026-06-07T12:02:18.346Z"
  },
  {
    id: "Q250",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "3 documents",
    enonce: "Les documents A à C présentent les réactions de différents groupes à l'adoption de l'Acte de Québec de 1774. Associez chaque document au groupe correspondant.",
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
            texte: "« Cette loi nous permet de continuer à exercer notre ministère et à percevoir les revenus nécessaires à l'entretien de l'Église dans la province. »",
            auteur: "Jean-Olivier Briand, évêque de Québec.",
            source: "Adapté de Mandements, lettres pastorales et circulaires des évêques de Québec, vol. 1, Québec, 1887."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les Canadiens retrouvent leurs anciennes lois civiles et peuvent désormais participer plus pleinement à l'administration de leur pays. »",
            auteur: "Pierre du Calvet",
            source: "Adapté de Pierre du Calvet, Appel à la justice de l'État, 1784."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Cette mesure accorde trop de privilèges aux Canadiens et prive les sujets britanniques des institutions auxquelles ils ont droit. »",
            auteur: "William Hey, juge en chef de la Province de Québec.",
            source: "Adapté de William Hey, Observations on the Act of Quebec, vers 1775."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: [
        "British Party",
        "Clergé catholique",
        "French Party"
      ]
    },
    guide: {
      type: "grille",
      entetes: [
        "British Party",
        "Clergé catholique",
        "French Party"
      ],
      rangees: [
        [
          "",
          "A",
          "B"
        ]
      ]
    },
    updatedAt: "2026-06-07T12:09:55.180Z"
  },
  {
    id: "Q251",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs de la Province de Québec après l'adoption de l'Acte de Québec de 1774. Sur quel point précis ces acteurs sont-ils en accord?",
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
            texte: "« Les Canadiens conservent leurs usages et leurs lois dans les affaires qui concernent leurs biens et leurs héritages, ce qui contribue à la tranquillité de la province. »",
            source: "Adapté de la correspondance de Jean-Olivier Briand, évêque de Québec, vers 1775."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« La nouvelle constitution assure aux habitants la conservation de leurs anciennes lois civiles, avantage que plusieurs considèrent essentiel au bien du pays. »",
            source: "Adapté de la correspondance de François Chardon, marchand et membre du French Party, vers 1775."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Le maintien des lois civiles françaises.",
    updatedAt: "2026-06-07T12:21:02.631Z"
  },
  {
    id: "Q252",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Divergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs de la Province de Québec après l'adoption de l'Acte de Québec de 1774. Sur quel point précis ces acteurs sont-ils en désaccord?",
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
            texte: "« Plusieurs habitants voient dans cette nouvelle constitution un moyen d'assurer la stabilité de la province sans qu'il soit nécessaire d'établir immédiatement une assemblée représentative. »",
            source: "Adapté de la correspondance de François Chardon, vers 1775."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les sujets britanniques de cette province devraient jouir du droit d'être représentés dans une assemblée élue plutôt que d'être gouvernés par des conseils nommés. »",
            source: "Adapté des pétitions et mémoires de Thomas Walker, marchand britannique de Québec, vers 1775."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Les deux acteurs sont en désaccord sur l'établissement d'une assemblée élue dans la Province de Québec.",
    updatedAt: "2026-06-07T12:22:19.114Z"
  },
  {
    id: "Q253",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P3 — 1760 – 1791",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A et B, indiquez s'il y a changement ou continuité dans les lois en vigueur dans la Province de Québec entre 1763 et 1774. Justifiez votre choix par des faits et un repère de temps.",
    aspects: [
      {
        aspect: "Acte de Québec"
      },
      {
        aspect: "Proclamation royale"
      }
    ],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Après la Conquête, les autorités britanniques cherchent à instaurer les lois anglaises dans la colonie. Les tribunaux doivent désormais s'inspirer du droit anglais pour régler les affaires des habitants. »",
            source: "Adapté de Marcel Trudel, Initiation à la Nouvelle-France, 1968."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« En 1774, les habitants de la Province de Québec continuent d'utiliser leurs anciennes lois dans les affaires de propriété et de droits civils. Les lois criminelles anglaises demeurent toutefois en vigueur dans la colonie. »",
            source: "Adapté de l'Acte de Québec, 1774."
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Changement\nIl y a changement, car en 1774, les lois civiles françaises sont appliquées dans la Province de Québec, alors qu'en 1763, les autorités britanniques cherchent à appliquer les lois anglaises.\n\nContinuité :\nIl y a continuité, car en 1763 comme en 1774, les lois criminelles anglaises demeurent en vigueur dans la Province de Québec.",
    updatedAt: "2026-06-07T13:00:03.984Z"
  },
  {
    id: "Q254",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Changement",
    enonce: "Indiquez un changement concernant les conditions pour occuper un poste dans l'administration coloniale entre 1763 et 1774.",
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
            texte: "« La nouvelle constitution modifie les conditions d'accès aux charges publiques et permet à un plus grand nombre d'habitants de participer à l'administration de la province. »",
            source: "Adapté de Christian Blais, Histoire parlementaire du Québec, Assemblée nationale du Québec, 2012"
          }
        ]
      }
    ],
    reponse: {
      type: "lignes",
      nombre: 2
    },
    guide: "Le serment du Test n'est plus exigé pour occuper un poste dans l'administration coloniale.",
    updatedAt: "2026-06-07T13:08:53.602Z"
  }
]
