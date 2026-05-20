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
  "deportation_acadien.png": {
    src: "images/deportation_acadien.png"
  },
  "revolte_pontiact.png": {
    src: "images/revolte_pontiact.png"
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
  "passage_beringie.png": {
    src: "images/passage_beringie.png"
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
            titre: "Document A",
            ref: "deportation_acadien.png",
            soustitre: "La déportation des Acadiens",
            source: "Bibliothèque et Archives nationales du Québec (BAnQ)."
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
            titre: "Document C",
            ref: "revolte_pontiact.png",
            soustitre: "La révolte de Pontiac",
            source: "Bibliothèque et Archives nationales du Québec (BAnQ)."
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
      type: "avant-apres",
      label: "La capitulation de Montréal"
    },
    guide: {
      type: "grille",
      entetes: [
        "Avant",
        "La capitulation de Montréal",
        "Après"
      ],
      rangees: [
        [
          "1 et 4",
          "",
          "2 et 3"
        ]
      ]
    }
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
    soustag: "3 éléments",
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
    soustag: "3 éléments",
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
    enonce: "Nommez le passage emprunté par les premiers occupants pour migrer de l’Asie vers l’Amérique.",
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
            ref: "passage_beringie.png"
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
    soustag: "2 éléments",
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
    soustag: "2 éléments",
    enonce: "À partir des documents A et B, indiquez la lettre du document qui fait références à l'organisation territoriale des groupes autochtones.",
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
    soustag: "4 éléments",
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
    enonce: "Quel gouverneur est rappelé en Angleterre à la suite de pressions exercées par les marchands \nanglophones de la Province de Québec au début du régime britannique?",
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
    guide: "James Murray."
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
    soustag: "3 éléments",
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
    soustag: "3 éléments",
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
    soustag: "4 éléments",
    enonce: "Les documents A à C présentent des faits relatifs aux tentatives de colonisation françaises en Amérique du Nord. Inscrivez à l’endroit approprié la lettre du document correspondant à chacune de ces tentatives.",
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
    soustag: "4 éléments",
    enonce: "Les documents A à C présentent des faits relatifs aux tentatives de colonisation françaises en Amérique du Nord. Inscrivez à l’endroit approprié la lettre du document correspondant à chacune de ces tentatives.",
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
      type: "cause-consequence"
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
    soustag: "4 éléments",
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
    soustag: "3 éléments",
    enonce: "Indiquez la lettre du document qui correspond à chacun des rôles de l’Église catholique durant le Régime français.",
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
    soustag: "4 éléments",
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
    soustag: "4 éléments",
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
  }
]
