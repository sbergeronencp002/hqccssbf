const REGLETTES = {
  "Q1": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q2": {
    oi: "Situer dans le temps",
    colonnes: ["2 points", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève situe tous les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas tous les faits dans le temps."}
    ]
  },
  "Q3": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q4": {
    oi: "Situer dans le temps",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève situe tous les faits dans le temps. (4 sur 4)"},
      {pts: 1, desc: "L'élève situe certains faits dans le temps. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps. (1 ou 0 sur 4)"}
    ]
  },
  "Q5": {
    oi: "Situer dans l'espace",
    colonnes: ["1 point", "0 point"],
    niveaux: [{pts: 1, desc: "L'élève situe le fait dans l'espace."}, {pts: 0, desc: "L'élève ne situe pas le fait dans l'espace."}]
  },
  "Q6": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
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
  "Q7": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de divergence entre les points de vue."},
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de divergence ou ne présente que les deux points de vue."
      },
      {pts: 0, desc: "L'élève établit incorrectement le point de divergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q8": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q9": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine le facteur explicatif et la conséquence. (2 sur 2)"},
      {pts: 1, desc: "L'élève détermine le facteur explicatif ou la conséquence. (1 sur 2)"},
      {pts: 0, desc: "L'élève ne détermine pas le facteur explicatif ni la conséquence. (0 sur 2)"}
    ]
  },
  "Q10": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q11": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la continuité."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la continuité."},
      {pts: 0, desc: "L'élève détermine incorrectement la continuité ou ne la détermine pas."}
    ]
  },
  "Q12": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q13": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (3 sur 3)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (2 sur 3)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 3)"}
    ]
  },
  "Q14": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q15": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q16": {
    oi: "Situer dans le temps",
    colonnes: ["2 points", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève situe tous les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas tous les faits dans le temps."}
    ]
  },
  "Q17": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q18": {
    oi: "Situer dans le temps",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève situe tous les faits dans le temps. (4 sur 4)"},
      {pts: 1, desc: "L'élève situe certains faits dans le temps. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps. (1 ou 0 sur 4)"}
    ]
  },
  "Q19": {
    oi: "Situer dans l'espace",
    colonnes: ["1 point", "0 point"],
    niveaux: [{pts: 1, desc: "L'élève situe le fait dans l'espace."}, {pts: 0, desc: "L'élève ne situe pas le fait dans l'espace."}]
  },
  "Q20": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève dégage correctement la différence."},
      {pts: 1, desc: "L'élève dégage plus ou moins correctement la différence."},
      {pts: 0, desc: "L'élève dégage incorrectement la différence ou ne la dégage pas."}
    ]
  },
  "Q21": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q22": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q33": {
    oi: "Situer dans l'espace",
    colonnes: ["1 point", "0 point"],
    niveaux: [{pts: 1, desc: "L'élève situe le fait dans l'espace."}, {pts: 0, desc: "L'élève ne situe pas le fait dans l'espace."}]
  },
  "Q37": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (4 sur 4)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"}
    ]
  },
  "Q29": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q28": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (3 sur 3)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (2 sur 3)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 3)"}
    ]
  },
  "Q27": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q23": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q24": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine le facteur explicatif et la conséquence. (2 sur 2)"},
      {pts: 1, desc: "L'élève détermine le facteur explicatif ou la conséquence. (1 sur 2)"},
      {pts: 0, desc: "L'élève ne détermine pas le facteur explicatif ni la conséquence. (0 sur 2)"}
    ]
  },
  "Q25": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q26": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la continuité."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la continuité."},
      {pts: 0, desc: "L'élève détermine incorrectement la continuité ou ne la détermine pas."}
    ]
  },
  "Q30": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q31": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q32": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q34": {
    oi: "Situer dans l'espace",
    colonnes: ["1 point", "0 point"],
    niveaux: [{pts: 1, desc: "L'élève situe le fait dans l'espace."}, {pts: 0, desc: "L'élève ne situe pas le fait dans l'espace."}]
  },
  "Q35": {
    oi: "Situer dans l'espace",
    colonnes: ["1 point", "0 point"],
    niveaux: [{pts: 1, desc: "L'élève situe le fait dans l'espace."}, {pts: 0, desc: "L'élève ne situe pas le fait dans l'espace."}]
  },
  "Q36": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (2 sur 2)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (1 sur 2)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (0 sur 2)"}
    ]
  },
  "Q38": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q39": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
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
  "Q40": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (4 sur 4)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"}
    ]
  },
  "Q41": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q42": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q43": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q44": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q45": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q46": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q47": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q48": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q49": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q50": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q51": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q52": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q53": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q54": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q55": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q56": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q57": {
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {desc: "L'élève établit correctement le fait.", pts: 1},
      {desc: "L'élève établit incorrectement le fait ou ne l'établit pas.", pts: 0}
    ],
    oi: "Établir des faits"
  },
  "Q58": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q59": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q60": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q61": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de divergence entre les points de vue."},
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de divergence ou ne présente que les deux points de vue."
      },
      {pts: 0, desc: "L'élève établit incorrectement le point de divergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q62": {
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {desc: "L'élève établit correctement le fait.", pts: 1},
      {desc: "L'élève établit incorrectement le fait ou ne l'établit pas.", pts: 0}
    ],
    oi: "Établir des faits"
  },
  "Q63": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q64": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q65": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q66": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q67": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q68": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q69": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q70": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q71": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (3 sur 3)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (2 sur 3)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 3)"}
    ]
  },
  "Q72": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (3 sur 3)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (2 sur 3)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 3)"}
    ]
  },
  "Q73": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (4 sur 4)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"}
    ]
  },
  "Q74": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (4 sur 4)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"}
    ]
  },
  "Q75": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q76": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q77": {
    oi: "Situer dans le temps",
    colonnes: ["2 points", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève situe tous les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas tous les faits dans le temps."}
    ]
  },
  "Q78": {
    oi: "Situer dans l'espace",
    colonnes: ["1 point", "0 point"],
    niveaux: [{pts: 1, desc: "L'élève situe le fait dans l'espace."}, {pts: 0, desc: "L'élève ne situe pas le fait dans l'espace."}]
  },
  "Q79": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q80": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q81": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q82": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q83": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q84": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q85": {
    oi: "Situer dans l'espace",
    colonnes: ["2 points", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève situe les faits dans l'espace."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans l'espace."}
    ]
  },
  "Q86": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (4 sur 4)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"}
    ]
  },
  "Q87": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (3 sur 3)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (2 sur 3)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 3)"}
    ]
  },
  "Q88": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q89": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (3 sur 3)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (2 sur 3)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 3)"}
    ]
  },
  "Q90": {
    oi: "Situer dans le temps",
    colonnes: ["2 points", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève situe tous les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas tous les faits dans le temps."}
    ]
  },
  "Q91": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q92": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q93": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
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
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q95": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (4 sur 4)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"}
    ]
  },
  "Q96": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q97": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la continuité."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la continuité."},
      {pts: 0, desc: "L'élève détermine incorrectement la continuité ou ne la détermine pas."}
    ]
  },
  "Q98": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la continuité."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la continuité."},
      {pts: 0, desc: "L'élève détermine incorrectement la continuité ou ne la détermine pas."}
    ]
  },
  "Q99": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q100": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
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
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (3 sur 3)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (2 sur 3)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 3)"}
    ]
  },
  "Q102": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (3 sur 3)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (2 sur 3)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 3)"}
    ]
  },
  "Q103": {
    oi: "Situer dans le temps",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève situe tous les faits dans le temps. (4 sur 4)"},
      {pts: 1, desc: "L'élève situe certains faits dans le temps. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps. (1 ou 0 sur 4)"}
    ]
  },
  "Q104": {
    oi: "Situer dans le temps",
    colonnes: ["2 points", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève situe tous les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas tous les faits dans le temps."}
    ]
  },
  "Q105": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q106": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q107": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q108": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q109": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q110": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q111": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q112": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q113": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q114": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q115": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q116": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (4 sur 4)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"}
    ]
  },
  "Q117": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q118": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q119": {
    oi: "Situer dans le temps",
    colonnes: ["2 points", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève situe tous les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas tous les faits dans le temps."}
    ]
  },
  "Q120": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (4 sur 4)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"}
    ]
  },
  "Q121": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q122": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q123": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q124": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q125": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q126": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (2 sur 2)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (1 sur 2)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (0 sur 2)"}
    ]
  },
  "Q127": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q128": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q129": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q130": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q131": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q132": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q133": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (4 sur 4)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"}
    ]
  },
  "Q134": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q135": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q136": {
    oi: "Situer dans le temps",
    colonnes: ["2 points", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève situe tous les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas tous les faits dans le temps."}
    ]
  },
  "Q137": {
    oi: "Situer dans le temps",
    colonnes: ["2 points", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève situe tous les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas tous les faits dans le temps."}
    ]
  },
  "Q138": {
    oi: "Situer dans le temps",
    colonnes: ["2 points", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève situe tous les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas tous les faits dans le temps."}
    ]
  },
  "Q139": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (4 sur 4)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"}
    ]
  },
  "Q140": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q141": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q142": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q143": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (4 sur 4)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"}
    ]
  },
  "Q144": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (3 sur 3)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (2 sur 3)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 3)"}
    ]
  },
  "Q145": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (3 sur 3)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (2 sur 3)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 3)"}
    ]
  },
  "Q146": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q147": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q148": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q149": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine le facteur explicatif et la conséquence. (2 sur 2)"},
      {pts: 1, desc: "L'élève détermine le facteur explicatif ou la conséquence. (1 sur 2)"},
      {pts: 0, desc: "L'élève ne détermine pas le facteur explicatif ni la conséquence. (0 sur 2)"}
    ]
  },
  "Q150": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (4 sur 4)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"}
    ]
  },
  "Q151": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (3 sur 3)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (2 sur 3)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 3)"}
    ]
  },
  "Q152": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q153": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q154": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q155": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q156": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q157": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève dégage correctement la différence."},
      {pts: 1, desc: "L'élève dégage plus ou moins correctement la différence."},
      {pts: 0, desc: "L'élève dégage incorrectement la différence ou ne la dégage pas."}
    ]
  },
  "Q158": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q159": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q160": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q161": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q162": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q163": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de divergence entre les points de vue."},
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de divergence ou ne présente que les deux points de vue."
      },
      {pts: 0, desc: "L'élève établit incorrectement le point de divergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q164": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (4 sur 4)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"}
    ]
  },
  "Q165": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
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
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q167": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (4 sur 4)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"}
    ]
  },
  "Q168": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q169": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q170": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q171": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine le facteur explicatif et la conséquence. (2 sur 2)"},
      {pts: 1, desc: "L'élève détermine le facteur explicatif ou la conséquence. (1 sur 2)"},
      {pts: 0, desc: "L'élève ne détermine pas le facteur explicatif ni la conséquence. (0 sur 2)"}
    ]
  },
  "Q172": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q173": {
    oi: "Situer dans l'espace",
    colonnes: ["2 points", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève situe les faits dans l'espace."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans l'espace."}
    ]
  },
  "Q174": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q175": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q176": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q177": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q178": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q179": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q180": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q181": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q182": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la continuité."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la continuité."},
      {pts: 0, desc: "L'élève détermine incorrectement la continuité ou ne la détermine pas."}
    ]
  },
  "Q183": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q184": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q185": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de divergence entre les points de vue."},
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de divergence ou ne présente que les deux points de vue."
      },
      {pts: 0, desc: "L'élève établit incorrectement le point de divergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q186": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève dégage correctement la similitude."},
      {pts: 1, desc: "L'élève dégage plus ou moins correctement la similitude."},
      {pts: 0, desc: "L'élève dégage incorrectement la similitude ou ne la dégage pas."}
    ]
  },
  "Q187": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève dégage correctement la similitude."},
      {pts: 1, desc: "L'élève dégage plus ou moins correctement la similitude."},
      {pts: 0, desc: "L'élève dégage incorrectement la similitude ou ne la dégage pas."}
    ]
  },
  "Q188": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q189": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
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
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q191": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q192": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q193": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q194": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q195": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (3 sur 3)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (2 sur 3)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 3)"}
    ]
  },
  "Q196": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q197": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la continuité."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la continuité."},
      {pts: 0, desc: "L'élève détermine incorrectement la continuité ou ne la détermine pas."}
    ]
  },
  "Q198": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q199": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (3 sur 3)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (2 sur 3)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 3)"}
    ]
  },
  "Q200": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q201": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine le facteur explicatif et la conséquence. (2 sur 2)"},
      {pts: 1, desc: "L'élève détermine le facteur explicatif ou la conséquence. (1 sur 2)"},
      {pts: 0, desc: "L'élève ne détermine pas le facteur explicatif ni la conséquence. (0 sur 2)"}
    ]
  },
  "Q202": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q203": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q204": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q205": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q206": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q207": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q208": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q209": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q210": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q211": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q212": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q213": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
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
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
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
    colonnes: ["2 points", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève situe tous les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas tous les faits dans le temps."}
    ]
  },
  "Q216": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (4 sur 4)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"}
    ]
  },
  "Q217": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q218": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
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
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q220": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q221": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q222": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q223": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q224": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q225": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q226": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q227": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q228": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q229": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q230": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q231": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (4 sur 4)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"}
    ]
  },
  "Q232": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q233": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q234": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q235": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q236": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q237": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q238": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q239": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q240": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q241": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q242": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q243": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q244": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q245": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (4 sur 4)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"}
    ]
  },
  "Q246": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q247": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q248": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q249": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (3 sur 3)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (2 sur 3)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 3)"}
    ]
  },
  "Q250": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (3 sur 3)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (2 sur 3)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 3)"}
    ]
  },
  "Q251": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q252": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de divergence entre les points de vue."},
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de divergence ou ne présente que les deux points de vue."
      },
      {pts: 0, desc: "L'élève établit incorrectement le point de divergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q253": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q254": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q255": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q256": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q257": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la continuité."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la continuité."},
      {pts: 0, desc: "L'élève détermine incorrectement la continuité ou ne la détermine pas."}
    ]
  },
  "Q258": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q259": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q260": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q261": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q262": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q263": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q264": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q265": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q266": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q267": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q268": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q269": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q270": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q271": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q272": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q273": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
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
  "Q274": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (2 sur 2)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (1 sur 2)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (0 sur 2)"}
    ]
  },
  "Q275": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q276": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q277": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine le facteur explicatif et la conséquence. (2 sur 2)"},
      {pts: 1, desc: "L'élève détermine le facteur explicatif ou la conséquence. (1 sur 2)"},
      {pts: 0, desc: "L'élève ne détermine pas le facteur explicatif ni la conséquence. (0 sur 2)"}
    ]
  },
  "Q278": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q279": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q280": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q281": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q282": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q283": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q284": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q285": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q286": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q287": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q288": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q289": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q290": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q291": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q292": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine le facteur explicatif et la conséquence. (2 sur 2)"},
      {pts: 1, desc: "L'élève détermine le facteur explicatif ou la conséquence. (1 sur 2)"},
      {pts: 0, desc: "L'élève ne détermine pas le facteur explicatif ni la conséquence. (0 sur 2)"}
    ]
  },
  "Q293": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de divergence entre les points de vue."},
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de divergence ou ne présente que les deux points de vue."
      },
      {pts: 0, desc: "L'élève établit incorrectement le point de divergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q294": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q295": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève dégage correctement la différence."},
      {pts: 1, desc: "L'élève dégage plus ou moins correctement la différence."},
      {pts: 0, desc: "L'élève dégage incorrectement la différence ou ne la dégage pas."}
    ]
  },
  "Q296": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q297": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q298": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
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
  "Q299": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q300": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q301": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q302": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q303": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q304": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q305": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q306": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q307": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q308": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q309": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q310": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q311": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q312": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q313": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q314": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q315": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q316": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q317": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (2 sur 2)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (1 sur 2)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (0 sur 2)"}
    ]
  },
  "Q318": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q319": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q320": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q321": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q322": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q323": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q324": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q325": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q326": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q327": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q328": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q329": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q330": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q331": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q332": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q333": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève dégage correctement la différence."},
      {pts: 1, desc: "L'élève dégage plus ou moins correctement la différence."},
      {pts: 0, desc: "L'élève dégage incorrectement la différence ou ne la dégage pas."}
    ]
  },
  "Q334": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q335": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de divergence entre les points de vue."},
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de divergence ou ne présente que les deux points de vue."
      },
      {pts: 0, desc: "L'élève établit incorrectement le point de divergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q336": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
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
  "Q337": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q338": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q339": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q340": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q341": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève dégage correctement la différence."},
      {pts: 1, desc: "L'élève dégage plus ou moins correctement la différence."},
      {pts: 0, desc: "L'élève dégage incorrectement la différence ou ne la dégage pas."}
    ]
  },
  "Q342": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (4 sur 4)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"}
    ]
  },
  "Q343": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q344": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (3 sur 3)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (2 sur 3)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 3)"}
    ]
  },
  "Q345": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q346": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q347": {
    oi: "Situer dans l'espace",
    colonnes: ["2 points", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève situe les faits dans l'espace."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans l'espace."}
    ]
  },
  "Q348": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (3 sur 3)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (2 sur 3)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 3)"}
    ]
  },
  "Q349": {
    oi: "Situer dans l'espace",
    colonnes: ["1 point", "0 point"],
    niveaux: [{pts: 1, desc: "L'élève situe le fait dans l'espace."}, {pts: 0, desc: "L'élève ne situe pas le fait dans l'espace."}]
  },
  "Q350": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q351": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q352": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
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
  "Q353": {
    oi: "Situer dans l'espace",
    colonnes: ["1 point", "0 point"],
    niveaux: [{pts: 1, desc: "L'élève situe le fait dans l'espace."}, {pts: 0, desc: "L'élève ne situe pas le fait dans l'espace."}]
  },
  "Q354": {
    oi: "Situer dans l'espace",
    colonnes: ["1 point", "0 point"],
    niveaux: [{pts: 1, desc: "L'élève situe le fait dans l'espace."}, {pts: 0, desc: "L'élève ne situe pas le fait dans l'espace."}]
  },
  "Q355": {
    oi: "Situer dans l'espace",
    colonnes: ["1 point", "0 point"],
    niveaux: [{pts: 1, desc: "L'élève situe le fait dans l'espace."}, {pts: 0, desc: "L'élève ne situe pas le fait dans l'espace."}]
  },
  "Q356": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (3 sur 3)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (2 sur 3)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 3)"}
    ]
  },
  "Q357": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (3 sur 3)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (2 sur 3)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 3)"}
    ]
  },
  "Q358": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q359": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q360": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (4 sur 4)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"}
    ]
  },
  "Q361": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (4 sur 4)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"}
    ]
  },
  "Q362": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q363": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de divergence entre les points de vue."},
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de divergence ou ne présente que les deux points de vue."
      },
      {pts: 0, desc: "L'élève établit incorrectement le point de divergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q364": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
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
  "Q365": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q366": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q367": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine le facteur explicatif et la conséquence. (2 sur 2)"},
      {pts: 1, desc: "L'élève détermine le facteur explicatif ou la conséquence. (1 sur 2)"},
      {pts: 0, desc: "L'élève ne détermine pas le facteur explicatif ni la conséquence. (0 sur 2)"}
    ]
  },
  "Q368": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q369": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q370": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q371": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q372": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q373": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (2 sur 2)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (1 sur 2)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (0 sur 2)"}
    ]
  },
  "Q374": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q375": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q376": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q377": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q378": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la continuité."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la continuité."},
      {pts: 0, desc: "L'élève détermine incorrectement la continuité ou ne la détermine pas."}
    ]
  },
  "Q379": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q380": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q381": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
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
  "Q382": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de divergence entre les points de vue."},
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de divergence ou ne présente que les deux points de vue."
      },
      {pts: 0, desc: "L'élève établit incorrectement le point de divergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q383": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève dégage correctement la différence."},
      {pts: 1, desc: "L'élève dégage plus ou moins correctement la différence."},
      {pts: 0, desc: "L'élève dégage incorrectement la différence ou ne la dégage pas."}
    ]
  },
  "Q384": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q385": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q386": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q387": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q388": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q389": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q390": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q391": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q392": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q393": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de divergence entre les points de vue."},
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de divergence ou ne présente que les deux points de vue."
      },
      {pts: 0, desc: "L'élève établit incorrectement le point de divergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q394": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q395": {
    oi: "Situer dans l'espace",
    colonnes: ["1 point", "0 point"],
    niveaux: [{pts: 1, desc: "L'élève situe le fait dans l'espace."}, {pts: 0, desc: "L'élève ne situe pas le fait dans l'espace."}]
  },
  "Q396": {
    oi: "Situer dans l'espace",
    colonnes: ["1 point", "0 point"],
    niveaux: [{pts: 1, desc: "L'élève situe le fait dans l'espace."}, {pts: 0, desc: "L'élève ne situe pas le fait dans l'espace."}]
  },
  "Q397": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q398": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
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
  "Q399": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
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
  "Q400": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (4 sur 4)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"}
    ]
  },
  "Q401": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q402": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q403": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q404": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q405": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q406": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (4 sur 4)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"}
    ]
  },
  "Q407": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (3 sur 3)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (2 sur 3)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 3)"}
    ]
  },
  "Q408": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q409": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q410": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q411": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q412": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève dégage correctement la similitude."},
      {pts: 1, desc: "L'élève dégage plus ou moins correctement la similitude."},
      {pts: 0, desc: "L'élève dégage incorrectement la similitude ou ne la dégage pas."}
    ]
  },
  "Q413": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q414": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q415": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q416": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q417": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q418": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q419": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q420": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q421": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de divergence entre les points de vue."},
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de divergence ou ne présente que les deux points de vue."
      },
      {pts: 0, desc: "L'élève établit incorrectement le point de divergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q422": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q423": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q424": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève dégage correctement la différence."},
      {pts: 1, desc: "L'élève dégage plus ou moins correctement la différence."},
      {pts: 0, desc: "L'élève dégage incorrectement la différence ou ne la dégage pas."}
    ]
  },
  "Q425": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine le facteur explicatif et la conséquence. (2 sur 2)"},
      {pts: 1, desc: "L'élève détermine le facteur explicatif ou la conséquence. (1 sur 2)"},
      {pts: 0, desc: "L'élève ne détermine pas le facteur explicatif ni la conséquence. (0 sur 2)"}
    ]
  },
  "Q426": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q427": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q428": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q429": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
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
  "Q430": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q431": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q432": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q433": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la continuité."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la continuité."},
      {pts: 0, desc: "L'élève détermine incorrectement la continuité ou ne la détermine pas."}
    ]
  },
  "Q434": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q435": {
    oi: "Situer dans l'espace",
    colonnes: ["1 point", "0 point"],
    niveaux: [{pts: 1, desc: "L'élève situe le fait dans l'espace."}, {pts: 0, desc: "L'élève ne situe pas le fait dans l'espace."}]
  },
  "Q436": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q437": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q438": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q439": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la continuité."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la continuité."},
      {pts: 0, desc: "L'élève détermine incorrectement la continuité ou ne la détermine pas."}
    ]
  },
  "Q440": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q441": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
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
  "Q442": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève dégage correctement la similitude."},
      {pts: 1, desc: "L'élève dégage plus ou moins correctement la similitude."},
      {pts: 0, desc: "L'élève dégage incorrectement la similitude ou ne la dégage pas."}
    ]
  },
  "Q443": {
    oi: "Mettre en relation des faits",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève met en relation tous les faits. (4 sur 4)"},
      {pts: 1, desc: "L'élève met en relation certains faits. (3 ou 2 sur 4)"},
      {pts: 0, desc: "L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"}
    ]
  },
  "Q444": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q445": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q446": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine le facteur explicatif et la conséquence. (2 sur 2)"},
      {pts: 1, desc: "L'élève détermine le facteur explicatif ou la conséquence. (1 sur 2)"},
      {pts: 0, desc: "L'élève ne détermine pas le facteur explicatif ni la conséquence. (0 sur 2)"}
    ]
  },
  "Q447": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q448": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q449": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q450": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q451": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q452": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q453": {
    oi: "Situer dans l'espace",
    colonnes: ["2 points", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève situe les faits dans l'espace."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans l'espace."}
    ]
  },
  "Q454": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q455": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q456": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q457": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q458": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de divergence entre les points de vue."},
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de divergence ou ne présente que les deux points de vue."
      },
      {pts: 0, desc: "L'élève établit incorrectement le point de divergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q459": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
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
  "Q460": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q461": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q462": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q463": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine le facteur explicatif et la conséquence. (2 sur 2)"},
      {pts: 1, desc: "L'élève détermine le facteur explicatif ou la conséquence. (1 sur 2)"},
      {pts: 0, desc: "L'élève ne détermine pas le facteur explicatif ni la conséquence. (0 sur 2)"}
    ]
  },
  "Q464": {
    oi: "Situer dans l'espace",
    colonnes: ["1 point", "0 point"],
    niveaux: [{pts: 1, desc: "L'élève situe le fait dans l'espace."}, {pts: 0, desc: "L'élève ne situe pas le fait dans l'espace."}]
  },
  "Q465": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q466": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q467": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q468": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q469": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q470": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q471": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q472": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q473": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
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
  "Q474": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q475": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q476": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la continuité."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la continuité."},
      {pts: 0, desc: "L'élève détermine incorrectement la continuité ou ne la détermine pas."}
    ]
  },
  "Q477": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q478": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q479": {
    oi: "Situer dans l'espace",
    colonnes: ["1 point", "0 point"],
    niveaux: [{pts: 1, desc: "L'élève situe le fait dans l'espace."}, {pts: 0, desc: "L'élève ne situe pas le fait dans l'espace."}]
  },
  "Q480": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de convergence entre les points de vue."},
      {pts: 1, desc: "L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},
      {pts: 0, desc: "L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q481": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de divergence entre les points de vue."},
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de divergence ou ne présente que les deux points de vue."
      },
      {pts: 0, desc: "L'élève établit incorrectement le point de divergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q482": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q483": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q484": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de divergence entre les points de vue."},
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de divergence ou ne présente que les deux points de vue."
      },
      {pts: 0, desc: "L'élève établit incorrectement le point de divergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q485": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q486": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q487": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q488": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le facteur explicatif."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le facteur explicatif."},
      {pts: 0, desc: "L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}
    ]
  },
  "Q489": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q490": {
    oi: "Dégager des différences et des similitudes",
    variante: "acteur-positions",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
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
  "Q491": {
    oi: "Dégager des différences et des similitudes",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève établit correctement le point de divergence entre les points de vue."},
      {
        pts: 1,
        desc: "L'élève établit plus ou moins correctement le point de divergence ou ne présente que les deux points de vue."
      },
      {pts: 0, desc: "L'élève établit incorrectement le point de divergence entre les points de vue ou ne l'établit pas."}
    ]
  },
  "Q492": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q493": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q494": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q495": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q496": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q497": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q498": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la continuité."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la continuité."},
      {pts: 0, desc: "L'élève détermine incorrectement la continuité ou ne la détermine pas."}
    ]
  },
  "Q499": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q500": {
    oi: "Déterminer des causes et des conséquences",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement la conséquence."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement la conséquence."},
      {pts: 0, desc: "L'élève détermine incorrectement la conséquence ou ne la détermine pas."}
    ]
  },
  "Q501": {
    oi: "Déterminer des changements et des continuités",
    colonnes: ["2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 2, desc: "L'élève détermine correctement le changement."},
      {pts: 1, desc: "L'élève détermine plus ou moins correctement le changement."},
      {pts: 0, desc: "L'élève détermine incorrectement le changement ou ne le détermine pas."}
    ]
  },
  "Q502": {
    oi: "Établir des faits",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève établit correctement le fait."},
      {pts: 0, desc: "L'élève établit incorrectement le fait ou ne l'établit pas."}
    ]
  },
  "Q503": {
    oi: "Déterminer des changements et des continuités",
    variante: "changement-continuité",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: []
  },
  "Q504": {
    oi: "Établir des liens de causalité",
    variante: "3 éléments — 2 liens",
    colonnes: ["3 points", "2 points", "1 point", "0 point"],
    niveaux: [
      {pts: 3, desc: "L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {
        pts: 2,
        desc: "L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."
      },
      {pts: 1, desc: "L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts: 0, desc: "L'élève précise un seul élément ou n'en précise pas."}
    ]
  },
  "Q505": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q506": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q507": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q508": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  },
  "Q509": {
    oi: "Situer dans le temps",
    colonnes: ["1 point", "0 point"],
    niveaux: [
      {pts: 1, desc: "L'élève situe les faits dans le temps."},
      {pts: 0, desc: "L'élève ne situe pas les faits dans le temps."}
    ]
  }
}

const IMAGE_DB = {
  "fondation_quebec_1608.png": {src: "images/fondation_quebec_1608.png"},
  "ligne_acBd.png": {src: "images/ligne_acBd.png"},
  "bataille_lac_champlain.png": {src: "images/bataille_lac_champlain.png"},
  "ligne_1550-1750.png": {src: "images/ligne_1550-1750.png"},
  "loyalistes_province_quebec.png": {src: "images/loyalistes_province_quebec.png"},
  "troc_1700.png": {src: "images/troc_1700.png"},
  "troc_1600.png": {src: "images/troc_1600.png"},
  "papineau_foule.png": {src: "images/papineau_foule.png", w: 925, h: 1200},
  "camp_oui_1995.png": {src: "images/camp_oui_1995.png"},
  "rapatriment_constitution.png": {src: "images/rapatriment_constitution.png"},
  "chrono_dbAc.png": {src: "images/chrono_dbAc.png"},
  "crise_oka.png": {src: "images/crise_oka.png"},
  "ligne_1950-2010.png": {src: "images/ligne_1950-2010.png"},
  "logos_societe_etat.png": {src: "images/logos_societe_etat.png"},
  "barrages_hydro_baie_james.png": {src: "images/barrages_hydro_baie_james.png"},
  "territoire_exploite_minerai_fer.png": {src: "images/territoire_exploite_minerai_fer.png"},
  "org_pol_1840_acte_union.png": {src: "images/org_pol_1840_acte_union.png"},
  "org_pol_1791_acte_const.png": {src: "images/org_pol_1791_acte_const.png"},
  "campement_algonquien.png": {src: "images/campement_algonquien.png"},
  "victoire_pq_1976.png": {src: "images/victoire_pq_1976.png"},
  "cause_rivalites_coloniales.png": {src: "images/cause_rivalites_coloniales.png"},
  "recensement_colonie_n-f.png": {src: "images/recensement_colonie_n-f.png"},
  "echanges_canada_etats-unis_1850-1860.png": {src: "images/echanges_canada_etats-unis_1850-1860.png"},
  "portrait_guy_carleton.png": {src: "images/portrait_guy_carleton.png"},
  "ligne_1475-1575.png": {src: "images/ligne_1475-1575.png"},
  "carte_seigneurie_n-f.png": {src: "images/carte_seigneurie_n-f.png"},
  "graphique_pop_autochtone_n-f.png": {src: "images/graphique_pop_autochtone_n-f.png"},
  "carte_amerique_nord_1700.png": {src: "images/carte_amerique_nord_1700.png"},
  "carte_amerique_nord_1700_lettres.png": {src: "images/carte_amerique_nord_1700_lettres.png"},
  "evangelisation_n-f.jpg": {src: "images/evangelisation_n-f.jpg"},
  "education_n-f.jpg": {src: "images/education_n-f.jpg"},
  "debarquement_plaines_abraham.png": {src: "images/debarquement_plaines_abraham.png"},
  "ligne_1600-1800.png": {src: "images/ligne_1600-1800.png"},
  "jacques_cartier_1534.png": {src: "images/jacques_cartier_1534.png"},
  "ligne_abDc.png": {src: "images/ligne_abDc.png"},
  "commence_fourrure_n-f.png": {src: "images/commence_fourrure_n-f.png"},
  "exportations_nouvelle_france_1755.png": {src: "images/exportations_nouvelle_france_1755.png"},
  "exportations_province_quebec_1770.png": {src: "images/exportations_province_quebec_1770.png"},
  "1791-1840_grosse_ile.png": {src: "images/1791-1840_grosse_ile.png"},
  "1820_immigration_irlandaise.png": {src: "images/1820_immigration_irlandaise.png"},
  "execution_patriotes.png": {src: "images/execution_patriotes.png"},
  "bataille_st-eustache.png": {src: "images/bataille_st-eustache.png"},
  "population_1763.png": {src: "images/population_1763.png"},
  "population_1783.png": {src: "images/population_1783.png"},
  "loyalistes.png": {src: "images/loyalistes.png"},
  "voyages_exploration.png": {src: "images/voyages_exploration.png"},
  "graphique_poste_de_traite_1780.png": {src: "images/graphique_poste_de_traite_1780.png"},
  "ligne_bcAd.png": {src: "images/ligne_bcAd.png"},
  "gravure_destruction_huronie.png": {src: "images/gravure_destruction_huronie.png"},
  "exportations_fourrures_huronie.png": {src: "images/exportations_fourrures_huronie.png"},
  "ligne_1575-1775.png": {src: "images/ligne_1575-1775.png"},
  "grahique_b_exportations_fourrures_huronie.png": {src: "images/grahique_b_exportations_fourrures_huronie.png"},
  "filles_du_roy.png": {src: "images/filles_du_roy.png"},
  "ligne_1600-1700.png": {src: "images/ligne_1600-1700.png"},
  "quebec_frere_kirke.png": {src: "images/quebec_frere_kirke.png"},
  "siege_quebec_1690.png": {src: "images/siege_quebec_1690.png"},
  "fondation_tadoussac.png": {src: "images/fondation_tadoussac.png"},
  "fondation_quebec.png": {src: "images/fondation_quebec.png"},
  "fondation_mtl.png": {src: "images/fondation_mtl.png"},
  "fondation_t-r.png": {src: "images/fondation_t-r.png"},
  "colon_louis_hebert.png": {src: "images/colon_louis_hebert.png"},
  "regiment_car-salieres.png": {src: "images/regiment_car-salieres.png"},
  "fondation_qubec_1608.png": {src: "images/fondation_qubec_1608.png"},
  "grande_paix_mtl.png": {src: "images/grande_paix_mtl.png"},
  "chantier_naval.png": {src: "images/chantier_naval.png"},
  "mercantilisme_nf.png": {src: "images/mercantilisme_nf.png"},
  "conseil_souverain.png": {src: "images/conseil_souverain.png"},
  "territoire_revendique_france_1700.png": {src: "images/territoire_revendique_france_1700.png"},
  "territoire_occupe_1700.png": {src: "images/territoire_occupe_1700.png"},
  "carte_premiers_occ_peuplement.png": {src: "images/carte_premiers_occ_peuplement.png"},
  "territoire_revendique_1713.png": {src: "images/territoire_revendique_1713.png"},
  "territoire_revendique_1700.png": {src: "images/territoire_revendique_1700.png"},
  "territoires_perdus_1713.png": {src: "images/territoires_perdus_1713.png"},
  "org_pol_apres_1663.png": {src: "images/org_pol_apres_1663.png"},
  "paroisse_n-f.png": {src: "images/paroisse_n-f.png"},
  "org_pol_avant_1663.png": {src: "images/org_pol_avant_1663.png"},
  "regime_seigneurial_n-f.png": {src: "images/regime_seigneurial_n-f.png"},
  "origines_geo_1670.png": {src: "images/origines_geo_1670.png"},
  "origines_geo_1740.png": {src: "images/origines_geo_1740.png"},
  "origines_sociale_1670.png": {src: "images/origines_sociale_1670.png"},
  "origines_sociale_1740.png": {src: "images/origines_sociale_1740.png"},
  "place_publique_qc.png": {src: "images/place_publique_qc.png"},
  "place_publique_mtl.png": {src: "images/place_publique_mtl.png"},
  "huron_1600.png": {src: "images/huron_1600.png"},
  "huron_1700.png": {src: "images/huron_1700.png"},
  "agriculture_1670.png": {src: "images/agriculture_1670.png"},
  "agriculture_1750.png": {src: "images/agriculture_1750.png"},
  "commerce_triangulaire.png": {src: "images/commerce_triangulaire.png"},
  "activites_eco_1670.png": {src: "images/activites_eco_1670.png"},
  "activites_eco_1750.png": {src: "images/activites_eco_1750.png"},
  "activites_habitants_n-f_1740.png": {src: "images/activites_habitants_n-f_1740.png"},
  "activies_econiques_1663_1740.png": {src: "images/activies_econiques_1663_1740.png"},
  "eglise_catholique_n-f_1700.png": {src: "images/eglise_catholique_n-f_1700.png"},
  "traversee_atlantique_1700.png": {src: "images/traversee_atlantique_1700.png"},
  "maison_1650.png": {src: "images/maison_1650.png"},
  "maison_1700.png": {src: "images/maison_1700.png"},
  "coureur_bois_n-f.png": {src: "images/coureur_bois_n-f.png"},
  "canot_ecorce.png": {src: "images/canot_ecorce.png"},
  "invasion_americaine.png": {src: "images/invasion_americaine.png"},
  "ligne_1760-1800.png": {src: "images/ligne_1760-1800.png"},
  "capitulation_mtl_1760.png": {src: "images/capitulation_mtl_1760.png"},
  "ligne_1755-1795.png": {src: "images/ligne_1755-1795.png"},
  "revolte_pontiac.png": {src: "images/revolte_pontiac.png"},
  "arrivee_loyalistes.png": {src: "images/arrivee_loyalistes.png"},
  "org_pol_regime_militaire.png": {src: "images/org_pol_regime_militaire.png"},
  "carte_proclamation_royale_territoire.png": {src: "images/carte_proclamation_royale_territoire.png"},
  "org_pol_apres_1763.png": {src: "images/org_pol_apres_1763.png"},
  "org_pol_1774_acte_quebec.png": {src: "images/org_pol_1774_acte_quebec.png"},
  "mercantilisme_britannique.png": {src: "images/mercantilisme_britannique.png"},
  "production_blé_minots.png": {src: "images/production_blé_minots.png"},
  "composition_population_1790.png": {src: "images/composition_population_1790.png"},
  "langues_parlees_1790.png": {src: "images/langues_parlees_1790.png"},
  "eglise_anglicane_1780.png": {src: "images/eglise_anglicane_1780.png"},
  "populaton_1760_1790.png": {src: "images/populaton_1760_1790.png"},
  "composition_population_1760-1790.png": {src: "images/composition_population_1760-1790.png"},
  "ligne_1790-1850.png": {src: "images/ligne_1790-1850.png"},
  "village_iroquoien_vers_1500.png": {src: "images/village_iroquoien_vers_1500.png"},
  "societe_matrilineaire_1500.png": {src: "images/societe_matrilineaire_1500.png"},
  "société_patrilineaire_1500.png": {src: "images/société_patrilineaire_1500.png"},
  "tradition_chamanique_1500.png": {src: "images/tradition_chamanique_1500.png"},
  "tradition_orale_1500.png": {src: "images/tradition_orale_1500.png"},
  "don_contre-don.png": {src: "images/don_contre-don.png"},
  "education_enfants_1500.png": {src: "images/education_enfants_1500.png"},
  "ceremonie_animisme.png": {src: "images/ceremonie_animisme.png"},
  "partage_1500.png": {src: "images/partage_1500.png"},
  "objets_rivalites.png": {src: "images/objets_rivalites.png"},
  "prisonnier_autochtone_1500.png": {src: "images/prisonnier_autochtone_1500.png"},
  "raids_autochtones.png": {src: "images/raids_autochtones.png"},
  "prise_decision_algonquien.png": {src: "images/prise_decision_algonquien.png"},
  "prise_decision_iroquoiens.png": {src: "images/prise_decision_iroquoiens.png"},
  "tradition_chamanique_aines_1500.png": {src: "images/tradition_chamanique_aines_1500.png"},
  "canot_ecorce_echanges.png": {src: "images/canot_ecorce_echanges.png"},
  "troc_1500.png": {src: "images/troc_1500.png"},
  "samuel_champlain.png": {src: "images/samuel_champlain.png"},
  "jean_talon.png": {src: "images/jean_talon.png"},
  "monseigneur_laval_eveque.png": {src: "images/monseigneur_laval_eveque.png"},
  "elections_bas-canada_1792.png": {src: "images/elections_bas-canada_1792.png"},
  "institutions_politiques_acte_const_1791.png": {src: "images/institutions_politiques_acte_const_1791.png"},
  "debats_parlementaires.png": {src: "images/debats_parlementaires.png"},
  "carte_cartier_1534.png": {src: "images/carte_cartier_1534.png"},
  "alliance_franco-ame.png": {src: "images/alliance_franco-ame.png", w: 1200, h: 900},
  "carte_monde.png": {src: "images/carte_monde.png", w: 1200, h: 685},
  "carte_amerique_nord.png": {src: "images/carte_amerique_nord.png", w: 1056, h: 1200},
  "carte_golfe_st-laurent.png": {src: "images/carte_golfe_st-laurent.png", w: 1074, h: 1200},
  "population_bas-canada_1800.png": {src: "images/population_bas-canada_1800.png", w: 1200, h: 900},
  "langues_parlees_bas-canada_1800.png": {src: "images/langues_parlees_bas-canada_1800.png", w: 1200, h: 869},
  "mouvement_liberation.png": {src: "images/mouvement_liberation.png", w: 1200, h: 800},
  "journal_le_canadien.png": {src: "images/journal_le_canadien.png"},
  "journaux_bas-canada.png": {src: "images/journaux_bas-canada.png"},
  "agents_indiens_bas-canada.png": {src: "images/agents_indiens_bas-canada.png", w: 1200, h: 800},
  "abolition_esclavage_bas-canada.png": {src: "images/abolition_esclavage_bas-canada.png", w: 1200, h: 800},
  "accroissement_naturel_bas-canada_1790-1840.png": {src: "images/accroissement_naturel_bas-canada_1790-1840.png"},
  "evolution_demo_haut-canada_1790-1840.png": {src: "images/evolution_demo_haut-canada_1790-1840.png"},
  "evolution_pop_haut-canada_1790-1840.png": {src: "images/evolution_pop_haut-canada_1790-1840.png"},
  "evolution_pop_bas-canada_1790-1840.png": {src: "images/evolution_pop_bas-canada_1790-1840.png"},
  "assemblee_six_comtes.png": {src: "images/assemblee_six_comtes.png"},
  "aut_col_britannique_rebellions.png": {src: "images/aut_col_britannique_rebellions.png"},
  "independance_bas-canada.png": {src: "images/independance_bas-canada.png", w: 1200, h: 800},
  "bataille_saint-charles.png": {src: "images/bataille_saint-charles.png", w: 1200, h: 800},
  "bataille_taverne.png": {src: "images/bataille_taverne.png", w: 1200, h: 800},
  "inauguration_canal_lachine.png": {src: "images/inauguration_canal_lachine.png"},
  "fondation_banque_mtl.png": {src: "images/fondation_banque_mtl.png", w: 1200, h: 800},
  "chemin_de_fer_locomotive.png": {src: "images/chemin_de_fer_locomotive.png"},
  "port_mtl_1830.png": {src: "images/port_mtl_1830.png"},
  "territoire_agricole_1800.png": {src: "images/territoire_agricole_1800.png"},
  "territoire_agricole_1830.png": {src: "images/territoire_agricole_1830.png"},
  "corn_laws.png": {src: "images/corn_laws.png", w: 1200, h: 800},
  "corn_laws_exportations.png": {src: "images/corn_laws_exportations.png"},
  "corn_laws_tarifs.png": {src: "images/corn_laws_tarifs.png", w: 1200, h: 738},
  "bas_canada_sols_appauvris.png": {src: "images/bas_canada_sols_appauvris.png"},
  "bas_canada_crise_agricole.png": {src: "images/bas_canada_crise_agricole.png"},
  "provenance_fourrures_marchands.png": {src: "images/provenance_fourrures_marchands.png"},
  "territoire_compagnies_fourrure.png": {src: "images/territoire_compagnies_fourrure.png"},
  "crise_agricole_production_ble.png": {src: "images/crise_agricole_production_ble.png", w: 1200, h: 901},
  "compagnies_fourrures_1820.png": {src: "images/compagnies_fourrures_1820.png", w: 1200, h: 604},
  "postes_traite_1795-1820.png": {src: "images/postes_traite_1795-1820.png", w: 1200, h: 901},
  "territoire_exploite_fourrure_1820.png": {src: "images/territoire_exploite_fourrure_1820.png"},
  "fourrures_1780-1820.png": {src: "images/fourrures_1780-1820.png"},
  "exportations_fourrure_1780-1820.png": {src: "images/exportations_fourrure_1780-1820.png", w: 1200, h: 901},
  "exportation_bois_1790-1840.png": {src: "images/exportation_bois_1790-1840.png", w: 1200, h: 901},
  "evolution_pop_n-f.png": {src: "images/evolution_pop_n-f.png"},
  "blocus_continental.png": {src: "images/blocus_continental.png"},
  "bois_nouvelles_activites.png": {src: "images/bois_nouvelles_activites.png"},
  "bois_emplois.png": {src: "images/bois_emplois.png", w: 1200, h: 900},
  "bois_emplois_1800.png": {src: "images/bois_emplois_1800.png", w: 1200, h: 900},
  "bois_emplois_1840.png": {src: "images/bois_emplois_1840.png", w: 1200, h: 900},
  "territoire_bois_exploitation.png": {src: "images/territoire_bois_exploitation.png"},
  "bois_chantier_naval.png": {src: "images/bois_chantier_naval.png", w: 1200, h: 800},
  "grosse_ile_station_quarantaine.png": {src: "images/grosse_ile_station_quarantaine.png"},
  "territoire_immigration_1820.png": {src: "images/territoire_immigration_1820.png", w: 927, h: 1200},
  "cantons_immigration.png": {src: "images/cantons_immigration.png", w: 1200, h: 921},
  "population_bas-canada_1735.png": {src: "images/population_bas-canada_1735.png"},
  "eglise_paroisses_1790-1830.png": {src: "images/eglise_paroisses_1790-1830.png"},
  "exportations_bas-canada.png": {src: "images/exportations_bas-canada.png", w: 1200, h: 844},
  "bois_exportations_bas-canada.png": {src: "images/bois_exportations_bas-canada.png", w: 1200, h: 687},
  "gouverneur_veto.png": {src: "images/gouverneur_veto.png", w: 1200, h: 658},
  "bois_emplois_1800-1840.png": {src: "images/bois_emplois_1800-1840.png", w: 1200, h: 800},
  "bois_navires.png": {src: "images/bois_navires.png", w: 1200, h: 800},
  "carte_proclamation_royale_1763.png": {src: "images/carte_proclamation_royale_1763.png"},
  "carte_acte_quebec_1774.png": {src: "images/carte_acte_quebec_1774.png"},
  "carte_province_quebec_1783.png": {src: "images/carte_province_quebec_1783.png"},
  "carte_familles_linguistiques_autochtones_lettres.png": {src: "images/carte_familles_linguistiques_autochtones_lettres.png"},
  "carte_premiers_contacts.png": {src: "images/carte_premiers_contacts.png"},
  "carte_villages_domicilies_autochtones.png": {src: "images/carte_villages_domicilies_autochtones.png"},
  "carte_reseaux_echanges_1500.png": {src: "images/carte_reseaux_echanges_1500.png"},
  "carte_destruction_huronie_1640.png": {src: "images/carte_destruction_huronie_1640.png"},
  "carte_familles_linguistiques_autochtones_1500.png": {src: "images/carte_familles_linguistiques_autochtones_1500.png"},
  "carte_bataille_chateauguay.png": {src: "images/carte_bataille_chateauguay.png", w: 1200, h: 921},
  "carte_territoire_occupe_1650.png": {src: "images/carte_territoire_occupe_1650.png"},
  "carte_acte_constitutionnel_1791.png": {src: "images/carte_acte_constitutionnel_1791.png"},
  "carte_conflits_armes_bas-canada_1837.png": {src: "images/carte_conflits_armes_bas-canada_1837.png", w: 1200, h: 921},
  "carte_conflits_armes_haut-canada_1838.png": {src: "images/carte_conflits_armes_haut-canada_1838.png", w: 1138, h: 1200},
  "carte_exploration_territoire_1700.png": {src: "images/carte_exploration_territoire_1700.png"},
  "carte_migration_loyalistes_1783.png": {src: "images/carte_migration_loyalistes_1783.png"},
  "carte_mercantilisme_fourrures_1600.png": {src: "images/carte_mercantilisme_fourrures_1600.png"},
  "carte_acte_union_1840.jpg": {src: "images/carte_acte_union_1840.jpg", w: 1091, h: 777},
  "carte_lieux_echanges.png": {src: "images/carte_lieux_echanges.png"},
  "tableau_representation_politique_1840.jpg": {src: "images/tableau_representation_politique_1840.jpg"},
  "ligne_1830-1875.png": {src: "images/ligne_1830-1875.png", w: 1200, h: 291},
  "immigration_irlandaise.jpg": {src: "images/immigration_irlandaise.jpg"},
  "ligne_1845-1890.png": {src: "images/ligne_1845-1890.png"},
  "traite_reciprocite.jpg": {src: "images/traite_reciprocite.jpg"},
  "ligne_1830-1890.png": {src: "images/ligne_1830-1890.png"},
  "abolition_regime_seigneurial.jpg": {src: "images/abolition_regime_seigneurial.jpg"},
  "org_pol_gouvernement_responsable_1848.png": {src: "images/org_pol_gouvernement_responsable_1848.png"},
  "portrait_james_murray.png": {src: "images/portrait_james_murray.png"}
}

const QUESTIONS = [
  {
    id: "Q1",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez le nom d'une nation autochtone qui conclut une alliance avec les Français en 1603.",
    aspects: [{aspect: "Exploration et occupation du territoire par les Français"}],
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
    reponse: {type: "lignes", nombre: 1},
    guide: "Les Montagnais ou les Etchemins (ou les Malécites) ou les Algonquins ou les Hurons ou les Micmacs ou les Abénaquis.",
    updatedAt: "2026-06-19T16:32:30.382Z"
  },
  {
    id: "Q2",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Ordre chronologique",
    enonce: "Les documents A à D présentent des faits relatifs aux premières tentatives d’établissement d’Européens en Amérique du Nord. Placez-les par ordre chronologique.",
    aspects: [{aspect: "Exploration et occupation du territoire par les Français"}, {aspect: "Premiers contacts"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "fondation_quebec_1608.png",
            soustitre: "Fondation de Québec et construction de l’Habitation",
            source: "Gravure de l'habitation de Québec, Samuel de Champlain, 1613. Bibliothèque et Archives Canada."
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
    reponse: {type: "image", ref: "ligne_acBd.png"},
    guide: "C - D - B - A",
    updatedAt: "2026-06-10T18:30:56.483Z"
  },
  {
    id: "Q3",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P2 — 1608 – 1760",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
    aspects: [{aspect: "Guerre et diplomatie chez les Premières Nations"}],
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
    reponse: {type: "image", ref: "ligne_1550-1750.png"},
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
    aspects: [{aspect: "Invasion américaine"}, {aspect: "Proclamation royale"}, {aspect: "Régime militaire"}],
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
    reponse: {type: "avant-apres", label: "Acte de Québec (1774)"},
    guide: {
      type: "grille",
      entetes: ["Avant", "Acte de Québec", "Après"],
      rangees: [
        ["C et D", "", "A et B"]
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
    aspects: [{aspect: "Loyalistes"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "loyalistes_province_quebec.png", source: "MEES."}]
      }
    ],
    reponse: {type: "tableau_2col"},
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
    aspects: [{aspect: "Acte de Québec"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« En permettant aux Canadiens de conserver leur religion et leurs lois civiles, cette mesure favorise leur loyauté envers le gouvernement britannique. »",
            auteur: "Guy Carleton",
            source: "Adapté de la correspondance de Guy Carleton adressée au gouvernement britannique, 1774."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« La reconnaissance officielle de la religion catholique garantit la stabilité de la colonie et protège les droits des Canadiens. »",
            auteur: "Jean-Olivier Briand",
            source: "Adapté d'une lettre pastorale de Jean-Olivier Briand à l'intention des fidèles de la province de Québec, 1775."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Cette loi accorde des privilèges excessifs aux Canadiens et menace les libertés que les sujets britanniques devraient défendre. »",
            auteur: "Richard Henry Lee",
            source: "Adapté de Richard Henry Lee, Observations on the Quebec Act, 1774."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Richard Henry Lee s'oppose aux concessions accordées aux Canadiens (la différence), alors que Guy Carleton et Jean-Olivier Briand y sont favorables (la similitude).",
    updatedAt: "2026-06-18T21:02:32.888Z"
  },
  {
    id: "Q7",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Divergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis ces deux auteurs sont-ils en désaccord?",
    aspects: [{aspect: "Soulèvements de 1837-1838"}],
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
            texte: "« Ces soulèvements avaient […] des racines assez solides dans la masse. Ils n’ont pas échoué faute de motivations suffisantes dans les milieux populaires ou par pénurie de fusils. […] Le problème se situe d’abord au niveau de la qualité du leadership fourni par les élites [professionnelles] qui encadraient le mouvement insurrectionnel. »",
            source: "Ouellet, Fernand. Le Bas-Canada, 1791-1840 : changements structuraux et crise. Ottawa, Les Presses de l’Université d’Ottawa, 1976."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "L’appui de la population aux Rébellions.",
    updatedAt: "2026-06-18T21:02:48.121Z"
  },
  {
    id: "Q8",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une cause de la rivalité entre la Nouvelle-France et les colonies britanniques à partir du 17e siècle.",
    aspects: [{aspect: "Guerres intercoloniales"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Croissance de la population"}],
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
    reponse: {type: "cause-consequence"},
    guide: {
      type: "grille",
      entetes: ["Élément", "Document"],
      rangees: [
        ["Cause", "B"],
        ["Conséquence", "A"]
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
    enonce: "Indiquez un changement concernant la participation politique de la population apporté par l’Acte constitutionnel de 1791.",
    aspects: [{aspect: "Acte constitutionnel"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "org_pol_1774_acte_quebec.png",
            soustitre: "Organisation politique de la Province de Québec après 1774",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "org_pol_1791_acte_const.png",
            soustitre: "Organisation politique du Haut-Canada et du Bas-Canada après 1791",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "La population peut désormais élire des députés à la Chambre d'assemblée ou une partie de la population obtient le droit de participer à l'élection des représentants ou la création d'une Chambre d'assemblée permet à la population d'être représentée par des députés élus.",
    updatedAt: "2026-06-12T11:43:39.302Z"
  },
  {
    id: "Q11",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Continuité",
    enonce: "Indiquez un élément de continuité dans la façon de faire du commerce en Amérique du Nord durant les périodes présentées dans les documents A et B.",
    aspects: [{aspect: "Commerce des fourrures"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "troc_1600.png", soustitre: "Vers 1600", source: "MEES."}]
      },
      {
        type: "textes",
        cols: [{titre: "Document B", ref: "troc_1700.png", soustitre: "Vers 1700", source: "MEES."}]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Acte constitutionnel"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "org_pol_1774_acte_quebec.png",
            soustitre: "Organisation politique de la Province de Québec après 1774",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "org_pol_1791_acte_const.png",
            soustitre: "Organisation politique du Haut-Canada et du Bas-Canada après 1791",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 4},
    guide: "Il y a changement, car il y a une Assemblée législative à partir de 1791 (ou car il y a mise en place d’une chambre d’assemblée durant cette période). \nou \nIl y a continuité, car le gouverneur détient tous les pouvoirs entre 1774 et 1791 (ou car le gouverneur a toujours les pleins pouvoirs durant cette période).",
    updatedAt: "2026-06-12T11:44:36.624Z"
  },
  {
    id: "Q13",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "3 documents",
    enonce: "Les documents A à C présentent la position de différents groupes sociaux lors de la crise politique qui secoue le Bas-Canada durant les années 1830. Inscrivez à l’endroit approprié la lettre du document correspondant à chacune des positions des groupes sociaux.",
    aspects: [{aspect: "Idées libérales et républicaines"}, {aspect: "Population"}],
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
      elements: ["Bourgeoisie professionnelle", "Bourgeoisie d'affaires", "Clergé catholique"]
    },
    guide: {
      type: "grille",
      entetes: ["Élément", "Document"],
      rangees: [
        ["Bourgeoisie professionnelle", "1"],
        ["Bourgeoisie d'affaires", "3"],
        ["Clergé catholique", "2"]
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
    aspects: [{aspect: "Soulèvements de 1837-1838"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "papineau_foule.png",
            soustitre: "Louis-Joseph Papineau  s’adressant à la foule",
            source: "Henri Julien, illustration des assemblées patriotes de 1837. Adaptée."
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
    reponse: {type: "lignes", nombre: 4},
    guide: "Les Patriotes revendiquent l’obtention de la responsabilité ministérielle ou le contrôle du budget par l’Assemblée ou l’élection des membres du conseil législatif (ene revendication des Patriotes). \nCes revendications sont refusées par Londres (la réponse de Londres). Devant le refus de Londres, les Patriotes invitent la population à boycotter les produits britanniques ou organisent des assemblées populaires ou se soulèvent (une action de protestation populaire).",
    updatedAt: "2026-06-12T15:29:39.916Z"
  },
  {
    id: "Q15",
    niveau: 4,
    oi: "Établir des faits",
    periode: "P7 — 1945 – 1980",
    points: 1,
    enonce: "Le document A fait référence à un type d’établissements mis en place au Québec par le gouvernement fédéral au cours du 20e siècle. Nommez ce type d’établissements.",
    aspects: [{aspect: "Pensionnats indiens au Québec"}],
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
    reponse: {type: "lignes", nombre: 1},
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
    aspects: [{aspect: "Statut politique du Québec"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "camp_oui_1995.png", source: "Bibliothèque et Archives nationales du Québec (BAnQ)."}]
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
        cols: [{titre: "Document D", ref: "rapatriment_constitution.png", source: "Bibliothèque et Archives Canada."}]
      }
    ],
    reponse: {type: "image", ref: "chrono_dbAc.png"},
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
    aspects: [{aspect: "Droits des Autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "crise_oka.png", source: "Bibliothèque et Archives nationales du Québec (BAnQ)."}]
      }
    ],
    reponse: {type: "image", ref: "ligne_1950-2010.png"},
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
    aspects: [{aspect: "Développement régional"}, {aspect: "Révolution tranquille"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "logos_societe_etat.png", source: "MEES."}]
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
        cols: [{titre: "Document C", ref: "barrages_hydro_baie_james.png", source: "MEES."}]
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
    reponse: {type: "avant-apres", label: "1960"},
    guide: {
      type: "grille",
      entetes: ["Avant", "1960", "Après"],
      rangees: [
        ["B et D", "", "A et C"]
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
    aspects: [{aspect: "Développement régional"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "territoire_exploite_minerai_fer.png", source: "MEES."}]
      }
    ],
    reponse: {type: "tableau_2col"},
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
    aspects: [{aspect: "Néonationalisme"}],
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
        cols: [{titre: "Document B", ref: "victoire_pq_1976.png"}]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Première Guerre mondiale"}, {aspect: "Statut du Canada dans l'Empire britannique"}],
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
    reponse: {type: "lignes", nombre: 3},
    guide: "Borden (ou Le premier ministre du Canada) appuie la conscription (la différence), alors que Lavergne et Bourassa s’y opposent (la similitude)."
  },
  {
    id: "Q22",
    niveau: 4,
    oi: "Dégager des différences et des similitudes",
    periode: "P5 — 1840 – 1896",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis sont-ils en accord?",
    aspects: [{aspect: "Migrations"}],
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
    reponse: {type: "lignes", nombre: 2},
    guide: "L’importance de coloniser les régions (ou la colonisation des régions).",
    updatedAt: "2026-06-18T17:56:50.357Z"
  },
  {
    id: "Q23",
    niveau: 4,
    oi: "Déterminer des causes et des conséquences",
    periode: "P5 — 1840 – 1896",
    points: 2,
    soustag: "Cause",
    enonce: "Dans quel but les Réformistes de la Province du Canada forment-ils une alliance en 1841?",
    aspects: [{aspect: "Gouvernement responsable"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "org_pol_1840_acte_union.png",
            soustitre: "Organisation politique de la colonie entre en 1840",
            source: "Récitus."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Obtenir la responsabilité ministérielle (ou le gouvernement responsable) ou obtenir que les membres du Conseil exécutif soient désormais choisis parmi les membres de l’Assemblée législative ou former la majorité à la Chambre d’assemblée.",
    updatedAt: "2026-06-12T12:26:16.322Z"
  },
  {
    id: "Q24",
    niveau: 4,
    oi: "Déterminer des causes et des conséquences",
    periode: "P5 — 1840 – 1896",
    points: 2,
    soustag: "Cause et conséquence",
    enonce: "Au milieu du 19e siècle, la Grande-Bretagne adopte une politique de libre-échange. Inscrivez la lettre du document qui présente une cause de l’adoption de cette politique et la lettre de celui qui en présente une conséquence pour la Province du Canada.",
    aspects: [{aspect: "Économie coloniale"}],
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
        cols: [{titre: "Document B", ref: "echanges_canada_etats-unis_1850-1860.png"}]
      }
    ],
    reponse: {type: "cause-consequence"},
    guide: {
      type: "grille",
      entetes: ["Élément", "Document"],
      rangees: [
        ["Cause", "A"],
        ["Conséquence", "B"]
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
    aspects: [{aspect: "Grande dépression"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Acte d'Union"}, {aspect: "Gouvernement responsable"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "org_pol_1791_acte_const.png",
            soustitre: "Organisation politique du Haut-Canada et du Bas-Canada après 1791",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "org_pol_1840_acte_union.png",
            soustitre: "Organisation politique du Canada-Uni aprés 1840",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Le droit de veto (ou Le droit de rejeter des projets de loi soumis par la Chambre d’assemblée) ou le pouvoir exécutif (ou Le pouvoir de nommer les membres des conseils exécutif et législatif) ou le pouvoir de dissoudre la Chambre d’assemblée.",
    updatedAt: "2026-06-12T12:27:32.373Z"
  },
  {
    id: "Q27",
    niveau: 4,
    oi: "Déterminer des changements et des continuités",
    periode: "P7 — 1945 – 1980",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A et B, indiquez s’il y a changement ou continuité dans l’implication des femmes en politique au Québec. Justifiez votre choix par des faits et un repère de temps.",
    aspects: [{aspect: "Féminisme"}],
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
    reponse: {type: "lignes", nombre: 4},
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
    aspects: [{aspect: "Clérico-nationalisme"}, {aspect: "Politique intérieure canadienne"}],
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
      elements: ["Clérico-nationalisme", "Impérialisme", "Nationalisme canadien-français"]
    },
    guide: {
      type: "grille",
      entetes: ["Élément", "Document"],
      rangees: [
        ["Clérico-nationalisme", "C"],
        ["Impérialisme", "A"],
        ["Nationalisme canadien-français", "B"]
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
    aspects: [{aspect: "Mondialisation de l'économie"}],
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
    reponse: {type: "lignes", nombre: 4},
    guide: "L’industrie américaine accuse le Canada de subventionner son industrie ou de vendre son bois d’œuvre à un prix inférieur à celui du bois américain ou de faire du dumping sur le marché américain (Une accusation portée contre le Canada par l’industrie américaine du bois d’œuvre). Ces critiques amènent le gouvernement américain à imposer une taxe (ou une surtaxe) sur le bois d’œuvre canadien ou des droits \nantidumping sur les exportations canadiennes (La réponse du gouvernement américain). Cette décision pousse le gouvernement canadien à protester auprès de l’OMC et du tribunal de l’ALENA (Une action du gouvernement canadien)."
  },
  {
    id: "Q30",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez le nom du passage emprunté par les premiers occupants pour migrer de l’Asie vers l’Amérique.",
    aspects: [{aspect: "Premiers occupants du territoire"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "carte_premiers_occ_peuplement.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Le détroit de Béring (ou la Béringie).",
    updatedAt: "2026-06-09T03:12:05.846Z"
  },
  {
    id: "Q31",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez le nom de la famille linguistique autochtone qui occupe la vallée du fleuve Saint-Laurent vers 1500.",
    aspects: [{aspect: "Premiers occupants du territoire"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_familles_linguistiques_autochtones_1500.png", source: "Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Les Iroquoiens.",
    updatedAt: "2026-06-09T13:54:31.842Z"
  },
  {
    id: "Q32",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez le nom de la famille linguistique autochtone qui occupe le Bouclier canadien et les Appalaches vers 1500.",
    aspects: [{aspect: "Premiers occupants du territoire"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_familles_linguistiques_autochtones_1500.png", source: "Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Les Algonquiens.",
    updatedAt: "2026-06-09T13:54:41.475Z"
  },
  {
    id: "Q33",
    niveau: 3,
    oi: "Situer dans l'espace",
    periode: "P1 — Des origines à 1608",
    points: 1,
    soustag: "Situer 1 élément",
    enonce: "À partir du document A, indiquez la lettre du territoire occupé par la famille linguistique algonquienne vers 1500.",
    aspects: [{aspect: "Premiers occupants du territoire"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_familles_linguistiques_autochtones_lettres.png"}]
      }
    ],
    reponse: {type: "tableau_2col"},
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
    aspects: [{aspect: "Premiers occupants du territoire"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_familles_linguistiques_autochtones_lettres.png"}]
      }
    ],
    reponse: {type: "tableau_2col"},
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
    aspects: [{aspect: "Premiers occupants du territoire"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_familles_linguistiques_autochtones_lettres.png"}]
      }
    ],
    reponse: {type: "tableau_2col"},
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
    aspects: [{aspect: "Réseaux d'échange autochtones"}],
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
      elements: ["Algonquiens", "Iroquoiens"]
    },
    guide: {
      type: "grille",
      entetes: ["Algonquiens", "Iroquoiens"],
      rangees: [
        ["A", "B"]
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
    aspects: [{aspect: "Premiers occupants du territoire"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            ref: "village_iroquoien_vers_1500.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
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
            ref: "campement_algonquien.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: ["Algonquiens", "Iroquoiens"],
      double: true
    },
    guide: {
      type: "grille",
      entetes: ["Algonquiens", "Iroquoiens"],
      rangees: [
        ["B et D", "A et C"]
      ]
    },
    updatedAt: "2026-06-09T03:27:00.693Z"
  },
  {
    id: "Q38",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis sont-ils en accord?",
    aspects: [{aspect: "Rapports sociaux chez les Autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Dans plusieurs sociétés autochtones, les aînés jouent un rôle essentiel en transmettant aux jeunes générations les connaissances, les valeurs et les traditions de la communauté. »",
            auteur: "Denys Delâge",
            source: "Adapté de Denys Delâge, Le pays renversé : Amérindiens et Européens en Amérique du Nord-Est, 1600-1664, Boréal, 1991."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les aînés occupent une place respectée puisqu'ils assurent la conservation et la transmission de la mémoire collective ainsi que des savoirs traditionnels. »",
            auteur: "Alain Beaulieu",
            source: "Adapté de Alain Beaulieu, Les Autochtones du Québec : des premières alliances aux revendications contemporaines, Fides, 2013."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "L'importance des aînés dans la transmission des savoirs et des traditions.",
    updatedAt: "2026-06-18T17:53:57.211Z"
  },
  {
    id: "Q39",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P1 — Des origines à 1608",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A à C présentent la position de trois acteurs sur les alliances entre les Premières Nations. Nommez l’auteur qui présente un point de vue différent et comparez ce point de vue à celui des deux autres acteurs.",
    aspects: [{aspect: "Réseaux d'échange autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les alliances conclues entre les nations de la vallée du Saint-Laurent permettent de renforcer la coopération et la défense contre les ennemis communs. »",
            auteur: "Denys Delâge",
            source: "Adapté de Denys Delâge, Le pays renversé, 1991."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les peuples alliés entretiennent des relations diplomatiques qui favorisent la paix et la stabilité dans la région. »",
            auteur: "Alain Beaulieu",
            source: "Adapté de Alain Beaulieu, Les Autochtones du Québec, 2013."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Certaines nations refusent ces alliances et privilégient plutôt l'affrontement avec leurs rivaux afin d'étendre leur influence. »",
            auteur: "Gilles Havard",
            source: "Adapté de Gilles Havard, Histoire de l'Amérique française, 2019."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Havard affirme que certaines nations privilégient l'affrontement avec leurs rivaux (la différence), alors que Delâge et Beaulieu soutiennent le contraire ou que les alliances entre les nations sont bénéfiques (la similitude).",
    updatedAt: "2026-06-18T18:06:01.249Z"
  },
  {
    id: "Q40",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "4 documents",
    enonce: "Les documents A à D présentent des faits sur la prise de décision chez les Algonquiens et les Iroquoiens vers 1500. Indiquez les lettres des documents qui correspondent à chacun des groupes.",
    aspects: [{aspect: "Prise de décision chez les Autochtones"}],
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
      elements: ["Algonquiens", "Iroquoiens"],
      double: true
    },
    guide: {
      type: "grille",
      entetes: ["Algonquiens", "Iroquoiens"],
      rangees: [
        ["B et D", "A et C"]
      ]
    }
  },
  {
    id: "Q41",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez un rôle joué par le chaman dans les sociétés autochtones.",
    aspects: [{aspect: "Rapports sociaux chez les Autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "tradition_chamanique_1500.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Il soigne les malades ou dirige des cérémonies ou interprète les rêves ou communique avec les esprits.",
    updatedAt: "2026-06-09T13:06:02.574Z"
  },
  {
    id: "Q42",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis sont-ils en accord?",
    aspects: [{aspect: "Rapports sociaux chez les Autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Le chaman agit comme intermédiaire entre le monde des esprits et celui des humains afin de guider sa communauté. »",
            auteur: "Denys Delâge",
            source: "Adapté de Denys Delâge, Le pays renversé : Amérindiens et Européens en Amérique du Nord-Est, 1600-1664, Boréal, 1991."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les communautés autochtones accordent au chaman un rôle spirituel important puisqu'il interprète les rêves et communique avec les forces surnaturelles. »",
            auteur: "Alain Beaulieu",
            source: "Adapté de Alain Beaulieu, Les Autochtones du Québec : des premières alliances aux revendications contemporaines, Fides, 2013."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Le rôle spirituel du chaman dans leur communauté.",
    updatedAt: "2026-06-18T18:02:54.438Z"
  },
  {
    id: "Q43",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis sont-ils en accord?",
    aspects: [{aspect: "Rapports sociaux chez les Autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« L'éducation des enfants repose largement sur l'observation et la participation aux activités quotidiennes de la communauté. »",
            auteur: "Denys Delâge",
            source: "Adapté de Denys Delâge, Le pays renversé : Amérindiens et Européens en Amérique du Nord-Est, 1600-1664, Boréal, 1991."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les jeunes acquièrent progressivement les savoirs nécessaires à la vie adulte grâce à l'exemple des membres expérimentés de leur groupe. »",
            auteur: "Alain Beaulieu",
            source: "Adapté de Alain Beaulieu, Les Autochtones du Québec : des premières alliances aux revendications contemporaines, Fides, 2013."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "L'éducation des enfants se fait par la transmission des savoirs au sein de la communauté.",
    updatedAt: "2026-06-18T18:18:10.415Z"
  },
  {
    id: "Q44",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez un moyen par lequel les enfants autochtones apprennent les savoirs nécessaires à la vie quotidienne.",
    aspects: [{aspect: "Rapports sociaux chez les Autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "education_enfants_1500.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Par l’observation ou l’imitation ou la participation aux activités des adultes.",
    updatedAt: "2026-06-09T13:18:57.625Z"
  },
  {
    id: "Q45",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez une pratique qui favorise l'entraide et la solidarité dans plusieurs sociétés autochtones.",
    aspects: [{aspect: "Rapports sociaux chez les Autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "partage_1500.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Le partage des biens.",
    updatedAt: "2026-06-09T13:53:16.790Z"
  },
  {
    id: "Q46",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence du partage des biens au sein des sociétés autochtones.",
    aspects: [{aspect: "Rapports sociaux chez les Autochtones"}],
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
    reponse: {type: "lignes", nombre: 2},
    guide: "La subsistance de tous est favorisée ou les membres du groupe peuvent répondre à leurs besoins."
  },
  {
    id: "Q47",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez le moyen principalement utilisé par les Autochtones pour transmettre leur histoire, leurs valeurs et leurs connaissances.",
    aspects: [{aspect: "Rapports sociaux chez les Autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "tradition_orale_1500.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "La tradition orale.",
    updatedAt: "2026-06-09T13:11:41.200Z"
  },
  {
    id: "Q48",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis sont-ils en accord?",
    aspects: [{aspect: "Rapports sociaux chez les Autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les échanges de dons créent des obligations réciproques qui contribuent à maintenir les liens entre les membres d'une communauté et entre les nations alliées. »",
            auteur: "Denys Delâge",
            source: "Adapté de Denys Delâge, Le pays renversé : Amérindiens et Européens en Amérique du Nord-Est, 1600-1664, Boréal, 1991."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Le principe du don et du contre-don favorise la solidarité puisqu'un cadeau reçu appelle généralement un geste équivalent en retour. »",
            auteur: "Alain Beaulieu",
            source: "Adapté de Alain Beaulieu, Les Autochtones du Québec : des premières alliances aux revendications contemporaines, Fides, 2013."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "La réciprocité du don et du contre-don.",
    updatedAt: "2026-06-18T18:22:48.952Z"
  },
  {
    id: "Q49",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez la pratique utilisée par plusieurs peuples autochtones pour entretenir leurs alliances grâce à l'échange réciproque de biens.",
    aspects: [{aspect: "Rapports sociaux chez les Autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "don_contre-don.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Le don et contre-don.",
    updatedAt: "2026-06-09T13:15:11.136Z"
  },
  {
    id: "Q50",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez le groupe de personnes qui désignent les chefs dans les sociétés algonquiennes.",
    aspects: [{aspect: "Prise de décision chez les Autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "prise_decision_algonquien.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Les hommes de la communauté.",
    updatedAt: "2026-06-09T14:22:26.140Z"
  },
  {
    id: "Q51",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez le nom de la pratique utilisée par les groupes autochtones pour échanger des biens.",
    aspects: [{aspect: "Réseaux d'échange autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "troc_1500.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Le troc.",
    updatedAt: "2026-06-09T14:47:25.912Z"
  },
  {
    id: "Q52",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence des réseaux d’échange sur l’accès des nations autochtones aux ressources.",
    aspects: [{aspect: "Réseaux d'échange autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_reseaux_echanges_1500.png", source: "Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Les nations autochtones ont accès à des ressources qu’elles ne trouvent pas sur leur propre territoire ou elles obtiennent des ressources provenant de régions éloignées ou des biens circulent sur de vastes territoires.",
    updatedAt: "2026-06-09T14:48:41.398Z"
  },
  {
    id: "Q53",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de l’utilisation des voies d’eau sur les échanges entre les nations autochtones.",
    aspects: [{aspect: "Réseaux d'échange autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_reseaux_echanges_1500.png", source: "Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Les ressources peuvent être transportées sur de longues distances ou les échanges entre les nations sont facilités ou les réseaux d’échange s’étendent sur de vastes territoires.",
    updatedAt: "2026-06-09T14:48:14.169Z"
  },
  {
    id: "Q54",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez un moyen utilisé par les nations autochtones pour transporter des ressources sur les voies d’eau.",
    aspects: [{aspect: "Réseaux d'échange autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "canot_ecorce_echanges.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Le canot d’écorce.",
    updatedAt: "2026-06-09T14:42:45.101Z"
  },
  {
    id: "Q55",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Conséquence",
    enonce: "Au début du 17e siècle, Samuel de Champlain conclut une alliance avec les Hurons. Indiquez une conséquence de cette alliance sur les relations entre les Iroquois et les Français.",
    aspects: [{aspect: "Exploration et occupation du territoire par les Français"}],
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
    reponse: {type: "lignes", nombre: 2},
    guide: "Les Iroquois deviennent des ennemis des Français ou les relations entre les Iroquois et les Français se détériorent ou les Iroquois entrent en conflit avec les Français."
  },
  {
    id: "Q56",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis sont-ils en accord?",
    aspects: [{aspect: "Exploration et occupation du territoire par les Français"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les alliances avec les nations autochtones constituent une condition essentielle à l'établissement durable des Français en Amérique du Nord. »",
            auteur: "Gilles Havard",
            source: "Adapté de Gilles Havard, Histoire de l'Amérique française, Presses Universitaires de France, 2019."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les ententes conclues entre les Français et plusieurs nations autochtones reposent sur des intérêts communs liés au commerce et à la défense. »",
            auteur: "Georges E. Sioui",
            source: "Adapté de Georges E. Sioui, Pour une histoire amérindienne de l'Amérique, Presses de l'Université Laval, 1999."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Les alliances reposent sur des intérêts communs.",
    updatedAt: "2026-06-18T18:26:25.299Z"
  },
  {
    aspects: [{aspect: "Mouvements de revendication"}],
    documents: [
      {
        cols: [
          {
            ref: "portrait_james_murray.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026.",
            titre: "Document A"
          }
        ],
        type: "textes"
      }
    ],
    enonce: "Indiquez le nom du gouverneur rappelé en Angleterre à la suite de pressions exercées par les marchands \nanglophones.",
    guide: "James Murray.",
    id: "Q57",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    reponse: {nombre: 1, type: "lignes"},
    updatedAt: "2026-06-19T18:53:50.742Z"
  },
  {
    id: "Q58",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une cause du rappel de James Murray en Angleterre au début du Régime britannique.",
    aspects: [{aspect: "Mouvements de revendication"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Mouvements de revendication"}],
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
    reponse: {type: "lignes", nombre: 2},
    guide: "Le rappel de James Murray en Angleterre ou l'administration britannique remplace James Murray par Guy Carleton."
  },
  {
    id: "Q60",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis sont-ils en accord?",
    aspects: [{aspect: "Mouvements de revendication"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les habitants britanniques de cette province demandent qu’une assemblée représentative soit établie et que les lois anglaises soient appliquées, afin de garantir dans cette colonie les mêmes droits et privilèges que ceux dont jouissent les autres sujets de Sa Majesté. »",
            auteur: "Marchands britanniques de Québec",
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
            auteur: "Marchands britanniques de Montréal",
            source: "Pétition des marchands britanniques de Montréal au gouvernement britannique, 1770."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Aux concessions accordées aux Canadiens par les autorités britanniques.",
    updatedAt: "2026-06-18T18:30:46.121Z"
  },
  {
    id: "Q61",
    niveau: 4,
    oi: "Dégager des différences et des similitudes",
    periode: "P7 — 1945 – 1980",
    points: 2,
    soustag: "Divergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis sont-ils en désaccord?",
    aspects: [{aspect: "Période duplessiste"}],
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
    reponse: {type: "lignes", nombre: 2},
    guide: "Le motif de la grève ou la légitimité de la grève ou l’utilisation de la poussière d’amiante comme motif de la grève.",
    updatedAt: "2026-06-18T17:59:26.740Z"
  },
  {
    aspects: [{aspect: "Mouvements de revendication"}],
    documents: [
      {
        cols: [
          {
            ref: "portrait_guy_carleton.png",
            source: "Reconstitution historique réalisée à l'aide de ChatGPT/OpenAI, inspirée de représentations de la capitulation de Montréal, 2026.",
            titre: "Document A"
          }
        ],
        type: "textes"
      }
    ],
    enonce: "Nommez le gouverneur qui succède à James Murray.",
    guide: "Guy Carleton.",
    id: "Q62",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    reponse: {nombre: 1, type: "lignes"},
    updatedAt: "2026-06-19T18:47:29.508Z"
  },
  {
    id: "Q63",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez un objet de rivalité entre les nations autochtones vers 1500.",
    aspects: [{aspect: "Alliances et rivalités au sein des Premières Nations"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "objets_rivalites.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Le contrôle des territoire de chasse et de pêche.",
    updatedAt: "2026-06-09T14:04:33.618Z"
  },
  {
    id: "Q64",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une cause des rivalités entre certaines nations autochtones pour le contrôle des territoires de chasse.",
    aspects: [{aspect: "Alliances et rivalités au sein des Premières Nations"}],
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
    reponse: {type: "lignes", nombre: 2},
    guide: "Contrôler des voies de circulation.\nContrôler des réseaux d'échange.\nAccroître son influence sur un territoire.",
    updatedAt: "2026-06-10T17:19:52.580Z"
  },
  {
    id: "Q65",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue deux acteurs. Sur quel point précis sont-ils d’accord?",
    aspects: [{aspect: "Alliances et rivalités au sein des Premières Nations"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les peuples autochtones se livrent fréquemment à des guerres pour défendre leur territoire ou pour contrôler des routes de commerce. Ces rivalités visent à protéger l’accès aux ressources essentielles et à maintenir une influence sur les échanges entre les nations. »",
            auteur: "Olive Patricia Dickason",
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
            auteur: "Denys Delâge",
            source: "Denys Delâge, Le pays renversé. Montréal, Les Éditions du Boréal, 2004."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Le contrôle des territoires ou des routes commerciales par les nations autochtones.",
    updatedAt: "2026-06-18T18:33:06.652Z"
  },
  {
    id: "Q66",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une cause de la formation d’alliances entre certaines nations autochtones vers 1500.",
    aspects: [{aspect: "Alliances et rivalités au sein des Premières Nations"}],
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
    reponse: {type: "lignes", nombre: 2},
    guide: "Se défendre contre des nations rivales.\nRenforcer sa puissance militaire.\nContrôler un territoire de chasse.\nContrôler un réseau d'échange.\nMener des guerres contre des nations ennemies.\nObtenir des alliés dans les conflits.",
    updatedAt: "2026-06-10T17:17:42.360Z"
  },
  {
    id: "Q67",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P1 — Des origines à 1608",
    points: 3,
    enonce: "Expliquez comment les rivalités entre les nations autochtones favorisent la formation d’alliances.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• une source de rivalité entre les nations autochtones\n• l’objectif des alliances conclues entre certaines nations\n• le sort réservé aux prisonniers capturés lors des conflits",
    aspects: [{aspect: "Alliances et rivalités au sein des Premières Nations"}],
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
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les prisonniers capturés lors des guerres entre nations autochtones peuvent être adoptés pour remplacer des membres disparus, réduits en esclavage ou exécutés. Leur sort dépend des besoins du groupe vainqueur et des coutumes qu’il applique. »",
            source: "Bruce G. Trigger, Les Enfants d’Aataentsic. Montréal, Libre Expression, 2008."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "prisonnier_autochtone_1500.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 5},
    guide: "Les rivalités pour le contrôle des territoires de chasse (ou des réseaux d’échange) (un objet de rivalité entre les nations autochtones) poussent certaines nations à conclure des alliances afin de renforcer leur défense ou leur puissance militaire (l’objectif des alliances entre les nations autochtones). Lors des conflits, les prisonniers capturés (le sort des prisonniers) peuvent être adoptés par la nation victorieuse ou mis à mort.",
    updatedAt: "2026-06-15T12:23:58.509Z"
  },
  {
    id: "Q68",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une raison pour laquelle certaines nations autochtones adoptaient des prisonniers.",
    aspects: [{aspect: "Alliances et rivalités au sein des Premières Nations"}],
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
    reponse: {type: "lignes", nombre: 2},
    guide: "Compenser les pertes de population causées par les guerres.\nRemplacer des membres décédés.\nAugmenter la population de la nation.\nIntégrer de nouveaux membres à la communauté.\nAssurer la survie ou la continuité du groupe.",
    updatedAt: "2026-06-10T17:18:31.370Z"
  },
  {
    id: "Q69",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une cause de l’alliance conclue entre certaines nations autochtones et Samuel de Champlain en 1603.",
    aspects: [{aspect: "Exploration et occupation du territoire par les Français"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Exploration et occupation du territoire par les Français"}],
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
    reponse: {type: "image", ref: "ligne_1550-1750.png"},
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
    aspects: [{aspect: "Exploration et occupation du territoire par les Français"}],
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
      elements: ["Premier voyage", "Deuxième voyage", "Troisième voyage"]
    },
    guide: {
      type: "grille",
      entetes: ["Premier voyage", "Deuxième voyage", "Troisième voyage"],
      rangees: [
        ["C", "A", "B"]
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
    aspects: [{aspect: "Exploration et occupation du territoire par les Français"}],
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
      elements: ["Premier voyage", "Deuxième voyage", "Troisième voyage"]
    },
    guide: {
      type: "grille",
      entetes: ["Premier voyage", "Deuxième voyage", "Troisième voyage"],
      rangees: [
        ["B", "C", "A"]
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
    aspects: [{aspect: "Exploration et occupation du territoire par les Français"}],
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
      elements: ["Charlesbourg-Royal", "Île de Sable", "Port-Royal", "Tadoussac"]
    },
    guide: {
      type: "grille",
      entetes: ["Charlesbourg-Royal", "Île de Sable", "Port-Royal", "Tadoussac"],
      rangees: [
        ["D", "C", "A", "B"]
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
    aspects: [{aspect: "Exploration et occupation du territoire par les Français"}],
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
      elements: ["Charlesbourg-Royal", "Île de Sable", "Port-Royal", "Tadoussac"]
    },
    guide: {
      type: "grille",
      entetes: ["Charlesbourg-Royal", "Île de Sable", "Port-Royal", "Tadoussac"],
      rangees: [
        ["B", "D", "C", "A"]
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
    aspects: [{aspect: "Exploration et occupation du territoire par les Français"}],
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
    reponse: {type: "image", ref: "ligne_1475-1575.png"},
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
    aspects: [{aspect: "Exploration et occupation du territoire par les Français"}],
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
    reponse: {type: "image", ref: "ligne_1475-1575.png"},
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
    aspects: [{aspect: "Exploration et occupation du territoire par les Français"}],
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
    reponse: {type: "image", ref: "ligne_acBd.png"},
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
    aspects: [{aspect: "Régime seigneurial"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_seigneurie_n-f.png", source: "MEES."}]
      }
    ],
    reponse: {type: "tableau_2col"},
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
    aspects: [{aspect: "Populations autochtones"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Populations autochtones"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Populations autochtones"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Croissance de la population"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Croissance de la population"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Guerres intercoloniales"}, {aspect: "Territoire français en Amérique"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_amerique_nord_1700.png", soustitre: "Carte de l'Amérique du Nord vers 1700"}]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Territoire français en Amérique"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_amerique_nord_1700_lettres.png", source: "Récitus."}]
      }
    ],
    reponse: {
      type: "situer-dans-lespace",
      elements: ["Nouvelle-France", "Treize colonies"]
    },
    guide: {
      type: "grille",
      entetes: ["Nouvelle-France", "Treize colonies"],
      rangees: [
        ["B", "C"]
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
    aspects: [{aspect: "Populations autochtones"}],
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
      elements: ["Missions", "Villages domiciliés"],
      double: true
    },
    guide: {
      type: "grille",
      entetes: ["Missions", "Villages domiciliés"],
      rangees: [
        ["A et C", "B et D"]
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
    aspects: [{aspect: "Église catholique"}],
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
      elements: ["Éducation", "Évangélisation", "Soins et santé"]
    },
    guide: {
      type: "grille",
      entetes: ["Éducation", "Évangélisation", "Soins et santé"],
      rangees: [
        ["C", "A", "B"]
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
    aspects: [{aspect: "Guerre de la Conquête"}],
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
    reponse: {type: "image", ref: "ligne_1600-1800.png"},
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
      {aspect: "Instructions au gouverneur Murray"},
      {aspect: "Proclamation royale"},
      {aspect: "Régime militaire"},
      {aspect: "Statut des Indiens"}
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
      elements: ["Capitulation de Montréal", "Proclamation royale", "Régime militaire", "Révolte de Pontiac"]
    },
    guide: {
      type: "grille",
      entetes: ["Capitulation de Montréal", "Proclamation royale", "Régime militaire", "Révolte de Pontiac"],
      rangees: [
        ["C", "D", "B", "A"]
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
      {aspect: "Instructions au gouverneur Murray"},
      {aspect: "Proclamation royale"},
      {aspect: "Régime militaire"},
      {aspect: "Statut des Indiens"}
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
    reponse: {type: "image", ref: "ligne_abDc.png"},
    guide: "C – B – D – A."
  },
  {
    id: "Q91",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis sont-ils d’accord?",
    aspects: [{aspect: "Régime militaire"}],
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
    reponse: {type: "lignes", nombre: 2},
    guide: "Peu de Canadiens quittent la colonie après la Conquête.",
    updatedAt: "2026-06-18T18:36:21.622Z"
  },
  {
    id: "Q92",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis sont-ils en accord?",
    aspects: [{aspect: "Régime militaire"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Après la Conquête, plusieurs administrateurs, officiers militaires et marchands français choisissent de retourner en France plutôt que de vivre sous l'autorité britannique. »",
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
            texte: "« Une partie importante des élites françaises quitte la colonie dans les années qui suivent la capitulation, laissant davantage de place aux nouveaux arrivants britanniques. »",
            auteur: "Gilles Havard",
            source: "Gilles Havard et Cécile Vidal, Histoire de l’Amérique française, Flammarion, 2003."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Plusieurs administrateurs ou officiers militaires ou marchands français quittent la colonie après la Conquête.\nL'élite française quitte la colonie après la Conquête.",
    updatedAt: "2026-06-18T19:58:06.469Z"
  },
  {
    id: "Q93",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P3 — 1760 – 1791",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A à C présentent la position de trois acteurs concernant l’émigration des Canadiens à la suite de la Conquête. Nommez l’acteur qui présente une position différente et comparez sa position à celle des deux autres acteurs.",
    aspects: [{aspect: "Régime militaire"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Le départ des administrateurs, officiers et marchands français affaiblit considérablement l'influence française dans la colonie. »",
            auteur: "Michel Brunet",
            source: "Marcel Trudel, Initiation à la Nouvelle-France : histoire et institutions, Montréal, Holt, Rinehart et Winston, 1968."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« L'émigration d'une partie de l'élite française contribue à renforcer la présence britannique dans les secteurs économiques et administratifs. »",
            auteur: "Marcel Trudel",
            source: "TRUDEL, Marcel. Initiation à la Nouvelle-France : histoire et institutions. Montréal, Holt, Rinehart et Winston, 1968."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Même si certains administrateurs et officiers quittent la colonie, leur départ a des effets limités sur la majorité de la population canadienne. »",
            auteur: "Fernand Ouellet",
            source: "OUELLET, Fernand. Histoire économique et sociale du Québec, 1760-1850 : structures et conjoncture. Montréal, Fides, 1966."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Ouellet affirme que le départ des élites françaises a des effets limités sur la colonie (la différence), alors que Brunet et Trudel soutiennent que ce départ a des conséquences importantes (la similitude).",
    updatedAt: "2026-06-18T20:03:43.599Z"
  },
  {
    id: "Q94",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P3 — 1760 – 1791",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A à C, indiquez s’il y a changement ou continuité dans le commerce des fourrures dans la colonie. Justifiez votre choix par des faits et un repère de temps.",
    aspects: [{aspect: "Économie coloniale"}],
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
    reponse: {type: "lignes", nombre: 3},
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
    aspects: [{aspect: "Acte de Québec"}, {aspect: "Proclamation royale"}],
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
        cols: [{titre: "Document B", ref: "carte_acte_quebec_1774.png", source: "Récitus."}]
      },
      {
        type: "textes",
        cols: [{titre: "Document C", ref: "carte_proclamation_royale_1763.png", source: "Récitus."}]
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
      elements: ["Proclamation royale", "Acte de Québec"],
      double: true
    },
    guide: {
      type: "grille",
      entetes: ["Proclamation royale", "Acte de Québec"],
      rangees: [
        ["A et C", "B et D"]
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
    aspects: [{aspect: "Économie coloniale"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Économie coloniale"}],
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
    reponse: {type: "lignes", nombre: 2},
    guide: "La traite des fourrures demeure une activité économique importante dans la colonie ou la fourrure demeure un important produit d’exportation ou le commerce des fourrures se poursuit après la Conquête."
  },
  {
    id: "Q98",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Continuité",
    enonce: "Indiquez un élément de continuité lié à l'augmentation de la population du Bas-Canada entre 1790 et 1840.",
    aspects: [{aspect: "Population"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "accroissement_naturel_bas-canada_1790-1840.png",
            soustitre: "Naissances et décès au Bas-Canada  entre 1790 et 1840",
            source: "Adapté de Hubert Charbonneau, La population du Québec : études rétrospectives, Montréal, Boréal Express, 1973."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Les naissances demeurent plus nombreuses que les décès\nL'accroissement naturel demeure important",
    updatedAt: "2026-06-12T12:14:18.999Z"
  },
  {
    id: "Q99",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P4 — 1791 – 1840",
    points: 3,
    enonce: "Expliquez comment l’état de santé des immigrants des îles Britanniques à leur arrivée dans la colonie amène les autorités à agir au cours de la première moitié du 19e siècle. \n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux. \n\n• L’état de santé des immigrants des îles Britanniques à leur arrivée dans la colonie\n• Un problème de santé publique dans la colonie\n• Une action des autorités coloniales à Grosse-Île",
    aspects: [{aspect: "Mouvements migratoires"}],
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
    reponse: {type: "lignes", nombre: 5},
    guide: "Les immigrants sont malades (ou affaiblis) à leur arrivée dans la colonie (L’état de santé des immigrants des îles Britanniques à leur arrivée dans la colonie), ce qui contribue à propager des épidémies (ou le choléra) dans la population (Un problème de santé publique dans la colonie). Cette situation amène les autorités coloniales à mettre en place une station de quarantaine (ou un hôpital) à Grosse-Île ou à isoler les immigrants à Grosse-Île (Une action des autorités coloniales à Grosse-Île)."
  },
  {
    id: "Q100",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A à C présentent la position de trois groupes à l’égard de l’union des deux Canadas. Nommez le groupe qui présente une position différente et comparez sa position à celle des deux autres groupes.",
    aspects: [{aspect: "Rapport Durham"}],
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
    reponse: {type: "lignes", nombre: 3},
    guide: "La bourgeoisie anglophone est en faveur de l'union des deux Canadas (ou en faveur de l’union) (la différence), alors que le clergé et la bourgeoisie professionnelle francophone s’y opposent (la similitude). \n\nLa bourgeoisie anglophone est en faveur de l’union (la différence), contrairement aux deux autres groupes (la similitude).",
    updatedAt: "2026-06-18T20:08:44.040Z"
  },
  {
    id: "Q101",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "3 documents",
    enonce: "Les documents A à C présentent les réactions de différents groupes à la suite du Rapport Durham. Associez chaque position au groupe correspondant.",
    aspects: [{aspect: "Rapport Durham"}],
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
      elements: ["Bourgeoisie anglophone", "Bourgeoisie professionnelle francophone", "Clergé catholique"]
    },
    guide: {
      type: "grille",
      entetes: ["Bourgeoisie anglophone ", "Bourgeoisie professionnelle francophone ", "Clergé catholique"],
      rangees: [
        ["B", "A", "C"]
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
    aspects: [{aspect: "Rapport Durham"}],
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
      elements: ["Bourgeoisie anglophone", "Bourgeoisie professionnelle francophone", "Clergé catholique"]
    },
    guide: {
      type: "grille",
      entetes: ["Bourgeoisie anglophone ", "Bourgeoisie professionnelle francophone ", "Clergé catholique"],
      rangees: [
        ["B", "C", "A"]
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
    aspects: [{aspect: "Soulèvements de 1837-1838"}],
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
    reponse: {type: "avant-apres", label: "L’Assemblée des Six-Comtés"},
    guide: {
      type: "grille",
      entetes: ["Avant", "Assemblée des Six-Comtés", "Après"],
      rangees: [
        ["B et C", "", "A et D"]
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
    aspects: [{aspect: "Soulèvements de 1837-1838"}],
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
    reponse: {type: "image", ref: "ligne_abDc.png"},
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
    aspects: [{aspect: "Commerce du bois"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "exportation_bois_1790-1840.png",
            soustitre: "Évolution de la valeur des exportations de bois du Bas-Canada entre 1790 et 1840",
            source: "Adapté de Fernand Ouellet, Histoire économique et sociale du Québec, 1760-1850, Montréal, Fides."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Les exportations de bois des colonies vers la Grande-Bretagne augmentent fortement.",
    updatedAt: "2026-06-15T15:19:13.819Z"
  },
  {
    id: "Q106",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Changement",
    enonce: "Indiquez un changement dans les exportations de bois vers la Grande-Bretagne au début du XIXe siècle.",
    aspects: [{aspect: "Commerce du bois"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "exportation_bois_1790-1840.png",
            soustitre: "Évolution de la valeur des exportations de bois du Bas-Canada entre 1790 et 1840",
            source: "Adapté de Fernand Ouellet, Histoire économique et sociale du Québec, 1760-1850, Montréal, Fides."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Les exportations de bois des colonies vers la Grande-Bretagne augmentent fortement après 1806.",
    updatedAt: "2026-06-15T15:18:44.694Z"
  },
  {
    id: "Q107",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence du Traité de 1783 sur le commerce des fourrures dans la Province de Québec.",
    aspects: [{aspect: "Économie coloniale"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Situation sociodémographique"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "population_1763.png",
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
            ref: "population_1783.png",
            soustitre: "Composition de la population de la colonie en 1784",
            source: "adapté de Jean Hamelin et Yves Roby, Histoire économique du Québec, 1851-1896."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "La proportion de la population anglophone augmente entre 1763 et 1784 ou la population anglophone passe de 1 % à 15 % ou la proportion de la population francophone diminue entre 1763 et 1784.",
    updatedAt: "2026-06-12T12:17:02.769Z"
  },
  {
    id: "Q109",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Continuité",
    enonce: "Indiquez une continuité dans la composition de la population de la colonie entre 1763 et 1784.",
    aspects: [{aspect: "Situation sociodémographique"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "population_1763.png",
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
            ref: "population_1783.png",
            soustitre: "Composition de la population de la colonie en 1784",
            source: "adapté de Jean Hamelin et Yves Roby, Histoire économique du Québec, 1851-1896."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "La population francophone demeure majoritaire dans la colonie entre 1763 et 1784 ou la population anglophone demeure minoritaire dans la colonie entre 1763 et 1784.",
    updatedAt: "2026-06-12T12:17:54.954Z"
  },
  {
    id: "Q110",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P3 — 1760 – 1791",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A et B, indiquez s’il y a changement ou continuité dans la composition de la population de la colonie entre 1763 et 1784. Justifiez votre choix par des faits et un repère de temps.",
    aspects: [{aspect: "Situation sociodémographique"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "population_1763.png",
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
            ref: "population_1783.png",
            soustitre: "Composition de la population de la colonie en 1784",
            source: "adapté de Jean Hamelin et Yves Roby, Histoire économique du Québec, 1851-1896."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Il y a une continuité dans la composition de la population de la colonie entre 1763 et 1784 puisque les francophones demeurent majoritaires.\n\nIl y a un changement dans la composition de la population de la colonie puisque la proportion de la population anglophone augmente entre 1763 et 1784. Elle passe de 1 % à 15 % de la population.",
    updatedAt: "2026-06-12T12:18:44.141Z"
  },
  {
    id: "Q111",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P3 — 1760 – 1791",
    points: 3,
    enonce: "Expliquez comment le résultat de la guerre d’indépendance américaine en 1783 entraîne un changement démographique dans la Province de Québec.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• Le résultat de la guerre d’indépendance américaine en 1783\n• Un groupe qui migre vers la Province de Québec\n• Un changement démographique dans la Province de Québec",
    aspects: [{aspect: "Loyalistes"}],
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
        cols: [{titre: "Document B", ref: "loyalistes.png", source: "Bibliothèque et Archives Canada/C-020587."}]
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
    reponse: {type: "lignes", nombre: 5},
    guide: "En 1783, la Grande-Bretagne reconnaît l’indépendance des États-Unis à la suite de la victoire américaine lors de la guerre d’indépendance (le résultat de la guerre d’indépendance américaine en 1783). Plusieurs Loyalistes quittent les États-Unis pour s’établir dans la Province de Québec (un groupe qui migre vers la Province de Québec. Cette migration augmente la population anglophone dans la colonie et modifie la composition démographique de la Province de Québec (un changement démographique dans la Province de Québec)."
  },
  {
    id: "Q112",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P1 — Des origines à 1608",
    points: 3,
    enonce: "Expliquez comment des changements dans le commerce européen favorisent les voyages d’exploration au 16e siècle. \n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• Un changement dans le commerce en Europe\n• Un objectif des puissances européennes\n• Un moyen utilisé par les royaumes européens",
    aspects: [{aspect: "Premiers contacts"}],
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
        cols: [{titre: "Document B", ref: "voyages_exploration.png", source: "Récitus."}]
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
    reponse: {type: "lignes", nombre: 5},
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
    aspects: [{aspect: "Premiers contacts"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_premiers_contacts.png", source: "Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Premiers contacts"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_premiers_contacts.png"}]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Les nations autochtones développent des échanges commerciaux avec les Européens ou certaines nations autochtones entrent en contact avec les Européens par le commerce ou les contacts entre Autochtones et Européens deviennent plus fréquents dans le golfe du Saint-Laurent."
  },
  {
    id: "Q115",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P1 — Des origines à 1608",
    points: 3,
    enonce: "Expliquez comment les activités économiques pratiquées par les Européens dans le golfe du Saint-Laurent favorisent le développement d’échanges avec certaines nations autochtones au 16e siècle.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• Une activité pratiquée par les Européens dans le golfe du Saint-Laurent\n• Un lieu d’échange entre les groupes autochtones et européens\n• Des produits échangés entre les Européens et les nations autochtones",
    aspects: [{aspect: "Premiers contacts"}],
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
        cols: [{titre: "Document B", ref: "carte_premiers_contacts.png", source: "Récitus."}]
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
    reponse: {type: "lignes", nombre: 5},
    guide: "Les Européens fréquentent le golfe du Saint-Laurent pour pratiquer la pêche et la chasse à la baleine (une activité pratiquée par les Européens dans le golfe du Saint-Laurent). Leur présence favorise des rencontres avec certaines nations autochtones dans des lieux de séchage de la morue situés sur les rives du golfe (un lieu d’échange entre les groupes autochtones et européens). Des produits européens, comme des couteaux, et des produits autochtones, comme des fourrures, sont alors échangés sous forme de troc (des produits échangés entre les Européens et certaines nations autochtones).",
    updatedAt: "2026-06-15T12:33:10.393Z"
  },
  {
    id: "Q116",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "4 documents",
    enonce: "Les documents A à D présentent des faits liés aux explorations européennes et aux premiers contacts en Amérique du Nord. Indiquez à l’endroit approprié la lettre correspondant à chacun des éléments suivants.",
    aspects: [{aspect: "Exploration et occupation du territoire par les Français"}, {aspect: "Premiers contacts"}],
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
        ["D", "C", "B", "A"]
      ]
    }
  },
  {
    id: "Q117",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P3 — 1760 – 1791",
    points: 3,
    enonce: "Expliquez comment la guerre d’Indépendance américaine entraîne une réorganisation du commerce des fourrures dans la Province de Québec et la région des Grands Lacs.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• un territoire perdu à la suite du traité de Paris de 1783\n• une conséquence sur les activités des compagnies de fourrures\n• une action entreprise par les compagnies afin de développer le commerce vers le Nord-Ouest",
    aspects: [{aspect: "Économie coloniale"}, {aspect: "Invasion américaine"}],
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
            soustitre: "Nombre de postes de traite établis vers l'Ouest",
            source: "Données pédagogiques adaptées d'après Harold A. Innis, The Fur Trade in Canada (1930), Arthur J. Ray, Indians in the Fur Trade (1974)."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 5},
    guide: "Le traité de Paris de 1783 accorde aux États-Unis les territoires situés au sud des Grands Lacs (un territoire perdu à la suite du traité de Paris de 1783). Cette perte territoriale complique les activités des compagnies de fourrures et l’accès à certaines routes commerciales (une conséquence sur les activités des compagnies de fourrures). Afin de poursuivre et développer le commerce des fourrures, les compagnies déplacent leurs activités vers le Nord-Ouest et établissent de nouveaux postes de traite (une action entreprise par les compagnies afin de développer le commerce vers le Nord-Ouest).",
    updatedAt: "2026-06-15T12:28:07.489Z"
  },
  {
    id: "Q118",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P2 — 1608 – 1760",
    points: 3,
    enonce: "Expliquez comment le commerce des fourrures favorise les relations économiques entre la métropole française et sa colonie au début du 17e siècle.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• une ressource exploitée dans la colonie\n• une mesure économique imposée par la métropole\n• une conséquence économique pour la colonie",
    aspects: [{aspect: "Commerce des fourrures"}, {aspect: "Monopole des compagnies"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_mercantilisme_fourrures_1600.png", source: "Récitus."}]
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
    reponse: {type: "lignes", nombre: 5},
    guide: "Les habitants de la Nouvelle-France exploitent des ressources comme les fourrures de castor (une ressource exploitée dans la colonie). La métropole française impose une politique économique où la colonie doit fournir des matières premières à la France et acheter les produits transformés provenant de la métropole (une mesure économique imposée par la métropole). Cette situation favorise le développement du commerce des fourrures ou plusieurs compagnies privilégient les profits commerciaux plutôt que le peuplement et le développement de la colonie (une conséquence économique pour la colonie).",
    updatedAt: "2026-06-15T12:32:52.807Z"
  },
  {
    id: "Q119",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Ordre chronologique",
    enonce: "Les documents A à D présentent des faits liés aux relations franco-amérindiennes sous le régime français. Placez les documents en ordre chronologique.",
    aspects: [{aspect: "Guerre et diplomatie chez les Premières Nations"}],
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
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
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
    reponse: {type: "image", ref: "ligne_bcAd.png"},
    guide: "C - B - A - D",
    updatedAt: "2026-06-09T16:14:01.898Z"
  },
  {
    id: "Q120",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "4 documents",
    enonce: "Les documents A à D présentent des faits liés aux relations franco-amérindiennes sous le régime français. Associez chaque document à l’événement correspondant.",
    aspects: [{aspect: "Guerre et diplomatie chez les Premières Nations"}],
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
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
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
        ["C", "A", "B", "D"]
      ]
    },
    updatedAt: "2026-06-09T16:14:23.744Z"
  },
  {
    id: "Q121",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence des guerres iroquoises sur les populations huronnes au 17e siècle.",
    aspects: [{aspect: "Guerre et diplomatie chez les Premières Nations"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_destruction_huronie_1640.png", source: "Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Commerce des fourrures"}, {aspect: "Guerre et diplomatie chez les Premières Nations"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "exportations_fourrures_huronie.png",
            soustitre: "Nombre estimé de peaux exportées en Nouvelle-France entre 1620 et 1670",
            source: "adaptation pédagogique à partir des Archives de la Nouvelle-France et de travaux d’historiens sur le commerce des fourrures."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Il y a une diminution des exportations de fourrures ou il y a un affaiblissement des alliances commerciales ou difficulté pour les Français d’obtenir des fourrures ou insécurité sur les routes commerciales.",
    updatedAt: "2026-06-12T12:24:49.017Z"
  },
  {
    id: "Q123",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P2 — 1608 – 1760",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir du document A, indiquez s’il y a un changement ou une continuité dans le commerce des fourrures dans la colonie entre 1620 et 1670. Justifiez votre réponse à l’aide de faits et d’un repère de temps.",
    aspects: [{aspect: "Commerce des fourrures"}, {aspect: "Guerre et diplomatie chez les Premières Nations"}],
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
    reponse: {type: "lignes", nombre: 3},
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
    aspects: [{aspect: "Commerce des fourrures"}, {aspect: "Guerre et diplomatie chez les Premières Nations"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Guerre et diplomatie chez les Premières Nations"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "gravure_destruction_huronie.png",
            soustitre: "Destruction de la Huronie",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "image", ref: "ligne_1575-1775.png"},
    guide: "B",
    updatedAt: "2026-06-09T16:14:58.207Z"
  },
  {
    id: "Q126",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "2 documents",
    enonce: "Les documents A et B présentent deux compagnies commerciales fondées au XVIIe siècle. Associez chaque document à la compagnie correspondante.",
    aspects: [{aspect: "Commerce des fourrures"}, {aspect: "Monopole des compagnies"}],
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
      elements: ["Compagnie de la Baie d'Hudson", "Compagnie des Cent Associés"]
    },
    guide: {
      type: "grille",
      entetes: ["Compagnie de la Baie d'Hudson", "Compagnie des Cent Associés"],
      rangees: [
        ["A", "B"]
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
    aspects: [{aspect: "Commerce des fourrures"}, {aspect: "Monopole des compagnies"}],
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
    reponse: {type: "image", ref: "ligne_1550-1750.png"},
    guide: "B"
  },
  {
    id: "Q128",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P2 — 1608 – 1760",
    points: 3,
    enonce: "Expliquez comment la destruction de la Huronie entraîne un changement dans l’occupation du territoire par les Hurons-Wendats au 17e siècle.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• un conflit impliquant les Haudenosaunee (Iroquois)\n• une conséquence territoriale chez les Hurons-Wendats\n• une région d’accueil des populations déplacées",
    aspects: [{aspect: "Guerre et diplomatie chez les Premières Nations"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "gravure_destruction_huronie.png",
            soustitre: "Raids iroquoiens en Huronie",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
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
        cols: [{titre: "Document C", ref: "carte_destruction_huronie_1640.png", source: "Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 5},
    guide: "Au milieu du 17e siècle, les Haudenosaunee (Iroquois) attaquent les villages hurons afin de contrôler le commerce des fourrures (un conflit impliquant les Haudenosaunee (Iroquois)). Ces conflits entraînent la destruction de la Huronie en 1648-1649 et forcent plusieurs Hurons-Wendats à abandonner leur territoire (une conséquence territoriale chez les Hurons-Wendats). Une partie des survivants se réfugie près de Québec, notamment dans la région de Lorette (une région d’accueil des populations déplacées).",
    updatedAt: "2026-06-15T12:24:47.039Z"
  },
  {
    id: "Q129",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez un village domicilié situé à proximité de Montréal.",
    aspects: [{aspect: "Populations autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_villages_domicilies_autochtones.png", source: "Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
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
    aspects: [{aspect: "Populations autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "",
            texte: "« Plusieurs communautés autochtones établies dans la vallée du Saint-Laurent vivent près des établissements français, où missionnaires, commerçants et autorités coloniales entretiennent des relations étroites avec elles. »",
            source: "Adapté de Denys Delâge, Le pays renversé, Boréal, 1991."
          },
          {titre: "", ref: "carte_villages_domicilies_autochtones.png", source: "Récitus."}
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Populations autochtones"}],
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
        cols: [{titre: "Document B", ref: "carte_villages_domicilies_autochtones.png", source: "Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 4},
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
    aspects: [{aspect: "Croissance de la population"}, {aspect: "Gouvernement royal"}],
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
    reponse: {type: "image", ref: "ligne_1600-1700.png"},
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
    aspects: [{aspect: "Guerres intercoloniales"}, {aspect: "Territoire français en Amérique"}],
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
      elements: ["Frontenac", "Samuel de Champlain"],
      double: true
    },
    guide: {
      type: "grille",
      entetes: ["Frontenac", "Samuel de Champlain"],
      rangees: [
        ["A et C", "B et D"]
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
    aspects: [{aspect: "Guerres intercoloniales"}],
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
    reponse: {type: "image", ref: "ligne_1600-1700.png"},
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
    aspects: [{aspect: "Territoire français en Amérique"}],
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
    reponse: {type: "image", ref: "ligne_1600-1700.png"},
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
    aspects: [{aspect: "Territoire français en Amérique"}],
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
    reponse: {type: "image", ref: "ligne_abDc.png"},
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
    aspects: [{aspect: "Territoire français en Amérique"}],
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
    reponse: {type: "image", ref: "ligne_abDc.png"},
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
    aspects: [{aspect: "Gouvernement royal"}, {aspect: "Territoire français en Amérique"}],
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
    reponse: {type: "avant-apres", label: "Gouvernement royal"},
    guide: {
      type: "grille",
      entetes: ["Avant", "Gouvernement royal", "Après"],
      rangees: [
        ["A - C", "", "B - D"]
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
    aspects: [{aspect: "Gouvernement royal"}, {aspect: "Territoire français en Amérique"}],
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
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "fondation_qubec_1608.png",
            soustitre: "Première implantation française permanente",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
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
        ["B", "A", "D", "C"]
      ]
    },
    updatedAt: "2026-06-14T16:33:04.311Z"
  },
  {
    id: "Q140",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P2 — 1608 – 1760",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
    aspects: [{aspect: "Territoire français en Amérique"}],
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
    reponse: {type: "image", ref: "ligne_1600-1700.png"},
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
    aspects: [{aspect: "Guerres intercoloniales"}],
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
    reponse: {type: "image", ref: "ligne_1600-1800.png"},
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
    aspects: [{aspect: "Guerre et diplomatie chez les Premières Nations"}],
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
    reponse: {type: "image", ref: "ligne_1600-1800.png"},
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
    aspects: [{aspect: "Guerres intercoloniales"}, {aspect: "Territoire français en Amérique"}],
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
      elements: ["Traité de Saint-Germain-en-Laye", "Traité d’Utrecht"],
      double: true
    },
    guide: {
      type: "grille",
      entetes: ["Traité de Saint-Germain-en-Laye", "Traité d’Utrecht"],
      rangees: [
        ["B et D", "A et C"]
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
    aspects: [{aspect: "Croissance de la population"}, {aspect: "Diversification économique"}, {aspect: "Gouvernement royal"}],
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
      elements: ["Mesure pour défendre la colonie", "Mesure pour développer la colonie", "Mesure pour peupler la colonie"]
    },
    guide: {
      type: "grille",
      entetes: ["Mesure pour défendre la colonie", "Mesure pour développer la colonie", "Mesure pour peupler la colonie"],
      rangees: [
        ["A", "C", "B"]
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
    aspects: [{aspect: "Croissance de la population"}, {aspect: "Diversification économique"}, {aspect: "Gouvernement royal"}],
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
      elements: ["Mesure pour défendre la colonie", "Mesure pour développer la colonie", "Mesure pour peupler la colonie"]
    },
    guide: {
      type: "grille",
      entetes: ["Mesure pour défendre la colonie", "Mesure pour développer la colonie", "Mesure pour peupler la colonie"],
      rangees: [
        ["B", "A", "C"]
      ]
    }
  },
  {
    id: "Q146",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez le le nom de la politique économique mise en place par la métropole française en Nouvelle-France.",
    aspects: [{aspect: "Monopole des compagnies"}],
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
    reponse: {type: "lignes", nombre: 1},
    guide: "Le mercantilisme.",
    updatedAt: "2026-06-09T15:04:59.357Z"
  },
  {
    id: "Q147",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de la politique économique imposée par la métropole française sur l’économie de la colonie.",
    aspects: [{aspect: "Monopole des compagnies"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Monopole des compagnies"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Monopole des compagnies"}],
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
    reponse: {type: "cause-consequence"},
    guide: {
      type: "grille",
      entetes: ["Cause", "Conséquence"],
      rangees: [
        ["B", "A"]
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
    aspects: [{aspect: "Monopole des compagnies"}],
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
      elements: ["Obligations des compagnies", "Privilèges des compagnies"],
      double: true
    },
    guide: {
      type: "grille",
      entetes: ["Obligations des compagnies", "Privilèges des compagnies"],
      rangees: [
        ["B et C", "A et D"]
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
    aspects: [{aspect: "Église catholique"}, {aspect: "Gouvernement royal"}],
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
      elements: ["Évêque", "Gouverneur", "Intendant"]
    },
    guide: {
      type: "grille",
      entetes: ["Évêque", "Gouverneur", "Intendant"],
      rangees: [
        ["B", "C", "A"]
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
    aspects: [{aspect: "Gouvernement royal"}],
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
    reponse: {type: "lignes", nombre: 1},
    guide: "Le Conseil souverain."
  },
  {
    id: "Q153",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez le type de pouvoir exercé par le roi de France sous le Régime français.",
    aspects: [{aspect: "Gouvernement royal"}],
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
    reponse: {type: "lignes", nombre: 1},
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
    aspects: [{aspect: "Territoire français en Amérique"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_territoire_occupe_1650.png", source: "Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Territoire français en Amérique"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_territoire_occupe_1650.png", source: "Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "La concentration des établissements français dans la vallée du Saint-Laurent favorise le développement du peuplement et des échanges commerciaux vers 1650."
  },
  {
    id: "Q156",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez le nom de la région où se concentrent principalement les établissements français vers 1650.",
    aspects: [{aspect: "Territoire français en Amérique"}],
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
    reponse: {type: "lignes", nombre: 1},
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
    aspects: [{aspect: "Territoire français en Amérique"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "territoire_revendique_france_1700.png", source: "Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Les possessions françaises couvrent un territoire plus vaste que les possessions britanniques.",
    updatedAt: "2026-06-18T20:07:54.009Z"
  },
  {
    id: "Q158",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence des rivalités territoriales entre les Français et les Britanniques en Amérique du Nord vers 1700.",
    aspects: [{aspect: "Territoire français en Amérique"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "territoire_revendique_france_1700.png", source: "Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Territoire français en Amérique"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_territoire_occupe_1650.png", source: "Récitus."}]
      },
      {
        type: "textes",
        cols: [{titre: "Document B", ref: "territoire_occupe_1700.png", source: "Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Territoire français en Amérique"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_territoire_occupe_1650.png", source: "Récitus."}]
      },
      {
        type: "textes",
        cols: [{titre: "Document B", ref: "territoire_occupe_1700.png", source: "Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Territoire français en Amérique"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_territoire_occupe_1650.png", source: "Récitus."}]
      },
      {
        type: "textes",
        cols: [{titre: "Document B", ref: "territoire_occupe_1700.png", source: "Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Il y a un changement dans l’étendue du territoire occupé par les Français entre 1650 et 1700. Vers 1700, les Français occupent un territoire beaucoup plus vaste qui s’étend jusqu’aux Grands Lacs et au fleuve Mississippi, alors qu’en 1650 le territoire occupé est principalement concentré dans la vallée du Saint-Laurent.\n\nRéponse attendue — Continuité\n\nIl y a une continuité dans l’étendue du territoire occupé par les Français entre 1650 et 1700. En 1650 comme en 1700, les Français occupent toujours la vallée du Saint-Laurent, notamment autour de Québec, Trois-Rivières et Montréal."
  },
  {
    id: "Q162",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez le nom d’un groupe européen qui fréquente le golfe du Saint-Laurent pour y pratiquer la pêche au 16e siècle.",
    aspects: [{aspect: "Premiers contacts"}],
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
    reponse: {type: "lignes", nombre: 1},
    guide: "Les Basques ou les Bretons ou les Normands."
  },
  {
    id: "Q163",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Divergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis sont-ils en désaccord?",
    aspects: [{aspect: "Commerce des fourrures"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les congés de traite permettent de développer le commerce des fourrures et d'étendre l'influence française vers l'intérieur du continent. »",
            auteur: "Jean Talon",
            source: "Adapté de la correspondance de Jean Talon au ministre de la Marine, vers 1670."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Cette pratique détourne les habitants de l'agriculture et favorise une vie désordonnée dans les régions éloignées. »",
            auteur: "François de Laval",
            source: "Adapté des lettres de François de Laval adressées au roi de France, vers 1670."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Les congé de traite.",
    updatedAt: "2026-06-18T20:14:14.119Z"
  },
  {
    id: "Q164",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "4 documents",
    enonce: "Les documents A à D présentent différents agents du commerce des fourrures. Associez chaque document à l’agent correspondant.",
    aspects: [{aspect: "Commerce des fourrures"}],
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
      elements: ["Autochtones", "Coureurs des bois", "Marchands", "Voyageurs"]
    },
    guide: {
      type: "grille",
      entetes: ["Autochtones", "Coureurs des bois", "Marchands", "Voyageurs"],
      rangees: [
        ["B", "D", "C", "A"]
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
    aspects: [{aspect: "Gouvernement royal"}],
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
    reponse: {type: "lignes", nombre: 3},
    guide: "Dechêne considère que le travail de Colbert a eu un impact limité (la différence) tandis que Trudel et Lacoursière sont considèrent que Colbert favorise le développement de la Nouvelle-France."
  },
  {
    id: "Q166",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis sont-ils en accord.",
    aspects: [{aspect: "Gouvernement royal"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« La milice constitue une composante essentielle du système défensif colonial. Bien qu'elle ne remplace pas les troupes régulières, elle fournit aux autorités un effectif rapidement mobilisable lors des conflits. »",
            auteur: "Gilles Proulx",
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
            auteur: "Louise Dechêne",
            source: "Louise Dechêne, Le peuple, l'État et la guerre au Canada sous le Régime français, Boréal, 2008."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "La milice joue un rôle important dans la défense de la colonie.\n\nLa milice permet de mobiliser rapidement des hommes pour défendre",
    updatedAt: "2026-06-18T20:16:30.931Z"
  },
  {
    id: "Q167",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "4 documents",
    enonce: "Les documents A à D présentent des responsabilités associées au gouverneur et à l'intendant. Indiquez à quel membre de l'administration coloniale correspond chacun des documents.",
    aspects: [{aspect: "Gouvernement royal"}],
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
      elements: ["Gouverneur", "Intendant"],
      double: true
    },
    guide: {
      type: "grille",
      entetes: ["Gouverneur", "Intendant"],
      rangees: [
        ["A et C", "B et D"]
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
    aspects: [{aspect: "Gouvernement royal"}],
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
    reponse: {type: "lignes", nombre: 1},
    guide: "Le gouverneur."
  },
  {
    id: "Q169",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez le membre de l'administration coloniale responsable de l'administration de la justice.",
    aspects: [{aspect: "Gouvernement royal"}],
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
    reponse: {type: "lignes", nombre: 1},
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
    aspects: [{aspect: "Territoire français en Amérique"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "territoire_revendique_1700.png", source: "Récitus."}]
      },
      {
        type: "textes",
        cols: [{titre: "Document B", ref: "territoire_revendique_1713.png", source: "Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
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
    aspects: [{aspect: "Guerres intercoloniales"}, {aspect: "Territoire français en Amérique"}],
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
    reponse: {type: "cause-consequence"},
    guide: {
      type: "grille",
      entetes: ["Cause", "Conséquence"],
      rangees: [
        ["B", "A"]
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
    aspects: [{aspect: "Commerce des fourrures"}, {aspect: "Territoire français en Amérique"}],
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
        cols: [{titre: "Document B", ref: "carte_exploration_territoire_1700.png", source: "Récitus."}]
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
    reponse: {type: "lignes", nombre: 3},
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
    aspects: [{aspect: "Guerres intercoloniales"}, {aspect: "Territoire français en Amérique"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "territoires_perdus_1713.png", source: "Récitus."}]
      }
    ],
    reponse: {
      type: "situer-dans-lespace",
      elements: ["Acadie", "Terre-Neuve"]
    },
    guide: {
      type: "grille",
      entetes: ["Acadie", "Terre-Neuve"],
      rangees: [
        ["C", "B"]
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
    aspects: [{aspect: "Église catholique"}],
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
    reponse: {type: "lignes", nombre: 1},
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
    aspects: [{aspect: "Gouvernement royal"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "org_pol_avant_1663.png", source: "adapté de Récitus."}]
      },
      {
        type: "textes",
        cols: [{titre: "Document B", ref: "org_pol_apres_1663.png", source: "adapté de Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Changement\n\nIl y a un changement dans l’administration de la Nouvelle-France entre 1627 et 1663. En 1627, la colonie est administrée par la Compagnie des Cent-Associés. En 1663, le gouvernement royal est instauré et l’administration est confiée au gouverneur, à l’intendant et au Conseil souverain.\n\nContinuité\n\nIl y a une continuité dans l’administration de la Nouvelle-France entre 1627 et 1663. En 1627 comme en 1663, la colonie demeure sous l’autorité du roi de France et de la métropole française."
  },
  {
    id: "Q176",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P2 — 1608 – 1760",
    points: 3,
    enonce: "Expliquez comment les difficultés rencontrées par la Compagnie des Cent-Associés contribuent à l’instauration du gouvernement royal en 1663.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• une responsabilité de la Compagnie des Cent-Associés\n• une difficulté rencontrée dans le développement de la colonie\n• une intervention du roi de France en 1663",
    aspects: [{aspect: "Gouvernement royal"}, {aspect: "Monopole des compagnies"}],
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
            ref: "evolution_pop_n-f.png",
            soustitre: "Évolution de la population de la Nouvelle-France entre 1620 et 1667",
            source: "Adapté de Marcel Trudel, Histoire de la Nouvelle-France, tome III : La seigneurie des Cent-Associés, Fides."
          }
        ]
      },
      {
        type: "textes",
        cols: [{titre: "Document C", ref: "org_pol_apres_1663.png", source: "adapté de Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 4},
    guide: "La Compagnie des Cent-Associés est responsable du peuplement de la colonie (une responsabilité de la Compagnie des Cent-Associés). Comme la population demeure faible en Nouvelle-France (une difficulté rencontrée dans le développement de la colonie), le roi de France instaure le gouvernement royal en 1663 (une intervention du roi de France en 1663).",
    updatedAt: "2026-06-15T15:19:58.283Z"
  },
  {
    id: "Q177",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez le nom du territoire religieux placé sous la responsabilité d'un curé en Nouvelle-France.",
    aspects: [{aspect: "Église catholique"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "paroisse_n-f.png", source: "Adapté de BAnQ et de Bibliothèque et Archives Canada."}]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "La paroisse."
  },
  {
    id: "Q178",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez le nom du mode de répartition des terres utilisé en Nouvelle-France.",
    aspects: [{aspect: "Régime seigneurial"}],
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
    reponse: {type: "lignes", nombre: 1},
    guide: "Le régime seigneurial."
  },
  {
    id: "Q179",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis sont-ils en accord?",
    aspects: [{aspect: "Église catholique"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« La paroisse constitue le principal cadre de la vie collective en Nouvelle-France. Autour de l'église et du curé s'organisent plusieurs aspects de l'existence quotidienne des habitants. »",
            auteur: "Jacques Lacoursière",
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
            auteur: "Louise Dechêne",
            source: "Louise Dechêne, Habitants et marchands de Montréal au XVIIe siècle, Montréal, Boréal, 1988."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Le clergé catholique joue un rôle important dans l'encadrement des habitants de la Nouvelle-France.",
    updatedAt: "2026-06-18T20:20:07.516Z"
  },
  {
    id: "Q180",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P2 — 1608 – 1760",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A et B, indiquez s’il y a changement ou continuité dans les origines géographiques des immigrants français en Nouvelle-France entre 1670 et 1740. Justifiez votre choix par des faits et un repère de temps.",
    aspects: [{aspect: "Croissance de la population"}],
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
    reponse: {type: "lignes", nombre: 3},
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
    aspects: [{aspect: "Croissance de la population"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Croissance de la population"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Croissance de la population"}],
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
    reponse: {type: "lignes", nombre: 3},
    guide: "Continuité.\n\nEn 1670 comme en 1740, les artisans constituent le principal groupe social parmi les immigrants français en Nouvelle-France. Ils représentent 35 % des immigrants vers 1670 et 38 % vers 1740.\n\nChangement.\n\nChangement. Entre 1670 et 1740, la répartition des origines sociales des immigrants français se modifie. La proportion de bourgeois et marchands augmente de 5 % à 8 %, tandis que celle des soldats passe de 10 % à 8 %."
  },
  {
    id: "Q184",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis sont-ils en accord?",
    aspects: [{aspect: "Croissance de la population"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Au début du XVIIIe siècle, la population canadienne augmente rapidement grâce à la fécondité élevée des familles établies dans la colonie. »",
            auteur: "Yves Landry",
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
            auteur: "Hubert Charbonneau",
            source: "Hubert Charbonneau, Naissance d'une population : les Français établis au Canada au XVIIe siècle, Montréal, Presses de l'Université de Montréal, 1987."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "L'augmentation de la population est due au grand nombre de naissances.",
    updatedAt: "2026-06-18T20:21:34.100Z"
  },
  {
    id: "Q185",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Divergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis sont-ils désaccord ?",
    aspects: [{aspect: "Villes du Canada"}],
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
    reponse: {type: "lignes", nombre: 2},
    guide: "L'importance de l'esclavage en Nouvelle-France.",
    updatedAt: "2026-06-18T20:22:38.617Z"
  },
  {
    id: "Q186",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Similitude",
    enonce: "À partir des documents A et B, indiquez une fonction commune de la place publique de Québec et de Ville-Marie.",
    aspects: [{aspect: "Villes du Canada"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Villes du Canada"}],
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
    reponse: {type: "lignes", nombre: 2},
    guide: "Les échanges commerciaux (le troc, le commerce)."
  },
  {
    id: "Q188",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez une fonction de la place publique en Nouvelle-France.",
    aspects: [{aspect: "Villes du Canada"}],
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
    reponse: {type: "lignes", nombre: 1},
    guide: "Lieu d'échanges commerciaux ou de troc."
  },
  {
    id: "Q189",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P2 — 1608 – 1760",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A à C présentent le point de vue de trois historiens sur les effets du métissage en Nouvelle-France. Nommez l'historien qui présente une position différente et comparez sa position à celle des deux autres historiens.",
    aspects: [{aspect: "Populations autochtones"}],
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
    reponse: {type: "lignes", nombre: 3},
    guide: "Marcel Trudel estime que le métissage a eu une importance limitée (la différence), alors que Denys Delâge et Olive Patricia Dickason penent le contraire (la similitude).",
    updatedAt: "2026-06-18T20:24:11.565Z"
  },
  {
    id: "Q190",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Changement",
    enonce: "À partir des documents A et B, indiquez un changement dans le mode de vie des Hurons-Wendat entre 1600 et 1700.",
    aspects: [{aspect: "Populations autochtones"}],
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
    reponse: {type: "lignes", nombre: 2},
    guide: "L'adoption d'éléments culturels européens, notamment dans l'habillement ou les armes (arquebuse)."
  },
  {
    id: "Q191",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez le phénomène illustré par l'adoption de certains éléments de la culture européenne par des Autochtones en Nouvelle-France.",
    aspects: [{aspect: "Populations autochtones"}],
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
    reponse: {type: "lignes", nombre: 1},
    guide: "Acculturation."
  },
  {
    id: "Q192",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez le phénomène qui résulte des unions entre Autochtones et Européens en Nouvelle-France.",
    aspects: [{aspect: "Populations autochtones"}],
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
    reponse: {type: "lignes", nombre: 1},
    guide: "Métissage."
  },
  {
    id: "Q193",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez le groupe social qui accorde des terres aux censitaires en échange de redevances.",
    aspects: [{aspect: "Régime seigneurial"}],
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
    reponse: {type: "lignes", nombre: 1},
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
    aspects: [{aspect: "Régime seigneurial"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Régime seigneurial"}],
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
      elements: ["Bourgeois", "Communauté religieuse", "Noble"]
    },
    guide: {
      type: "grille",
      entetes: ["Bourgeois", "Communauté religieuse", "Noble"],
      rangees: [
        ["B", "C", "A"]
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
    aspects: [{aspect: "Rapports sociaux chez les Autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "ceremonie_animisme.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "L'animisme.",
    updatedAt: "2026-06-09T13:44:04.877Z"
  },
  {
    id: "Q197",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Continuité",
    enonce: "Indiquez un élément de continuité dans les activités de subsistance pratiquées par les colons en Nouvelle-France entre 1670 et 1750.",
    aspects: [{aspect: "Régime seigneurial"}],
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
    reponse: {type: "lignes", nombre: 2},
    guide: "L'agriculture demeure la principale activité de subsistance pratiquée par les colons français en Nouvelle-France."
  },
  {
    id: "Q198",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez le nom du système commercial associé aux échanges entre la France, la Nouvelle-France et les Antilles.",
    aspects: [{aspect: "Diversification économique"}],
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
    reponse: {type: "lignes", nombre: 1},
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
    aspects: [{aspect: "Diversification économique"}],
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
      elements: ["Antilles", "France", "Nouvelle-France"]
    },
    guide: {
      type: "grille",
      entetes: ["Antilles", "France", "Nouvelle-France"],
      rangees: [
        ["C", "A", "B"]
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
    aspects: [{aspect: "Diversification économique"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Diversification économique"}],
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
    reponse: {type: "cause-consequence"},
    guide: {
      type: "grille",
      entetes: ["Cause", "Conséquence"],
      rangees: [
        ["B", "A"]
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
    aspects: [{aspect: "Diversification économique"}],
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
    reponse: {type: "lignes", nombre: 3},
    guide: "Changement\nIl y a changement, car après l'instauration du gouvernement royal en 1663, de nouvelles activités économiques apparaissent dans la colonie. Vers 1700, on retrouve notamment la construction navale, les forges et les tanneries.\n\nContinuité\nIl y a continuité, car le commerce des fourrures, l'agriculture et la pêche sont pratiqués avant et après l'instauration du gouvernement royal. Ces activités sont présentes vers 1663 comme vers 1700."
  },
  {
    id: "Q203",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez l'activité économique pratiquée par la majorité des habitants de la Nouvelle-France au 18e siècle.",
    aspects: [{aspect: "Diversification économique"}, {aspect: "Régime seigneurial"}],
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
    reponse: {type: "lignes", nombre: 1},
    guide: "L'agriculture.",
    updatedAt: "2026-06-12T12:20:21.867Z"
  },
  {
    id: "Q204",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence du développement de l'agriculture sur la population de la Nouvelle-France.",
    aspects: [{aspect: "Croissance de la population"}, {aspect: "Diversification économique"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Croissance de la population"}, {aspect: "Diversification économique"}],
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
    reponse: {type: "lignes", nombre: 2},
    guide: "Le développement de l'agriculture."
  },
  {
    id: "Q206",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P2 — 1608 – 1760",
    points: 3,
    enonce: "Expliquez comment les mesures mises en place par les autorités coloniales contribuent au développement économique de la Nouvelle-France.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• une mesure mise en place par les autorités coloniales\n• une activité artisanale qui se développe\n• une conséquence sur le développement économique de la colonie",
    aspects: [{aspect: "Diversification économique"}],
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
    reponse: {type: "lignes", nombre: 3},
    guide: "Les autorités coloniales investissent dans plusieurs projets économiques (une mesure mise en place par les autorités coloniales). Cette intervention favorise le développement du travail du fer aux Forges du Saint-Maurice (une activité artisanale qui se développe). L'apparition de cette nouvelle activité contribue à diversifier les activités économiques de la colonie (une conséquence sur la diversification de l'économie de la colonie).",
    updatedAt: "2026-06-15T12:31:13.778Z"
  },
  {
    id: "Q207",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez une pratique culturelle européenne maintenue par les colons en Nouvelle-France.",
    aspects: [{aspect: "Adaptation des colons"}],
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
    reponse: {type: "lignes", nombre: 1},
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
    aspects: [{aspect: "Adaptation des colons"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Adaptation des colons"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Adaptation des colons"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Adaptation des colons"}],
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
    reponse: {type: "lignes", nombre: 2},
    guide: "Les colons adoptent le canot comme moyen de transport."
  },
  {
    id: "Q212",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez un moyen de transport adopté par les colons grâce aux contacts avec les Autochtones.",
    aspects: [{aspect: "Adaptation des colons"}],
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
    reponse: {type: "lignes", nombre: 1},
    guide: "Le canot."
  },
  {
    id: "Q213",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P2 — 1608 – 1760",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A à C présentent le point de vue de trois historiens sur les effets de l'éloignement géographique de la métropole. Nommez l'historien qui présente un point de vue différent et comparez sa position à celle des deux autres historiens.",
    aspects: [{aspect: "Adaptation des colons"}],
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
    reponse: {type: "lignes", nombre: 3},
    guide: "Allan Greer considère que les colons demeurent dépendants de la métropole (la différence), alors que Jacques Lacoursière et Gilles Havard considèrent le contraire ou que l’éloignement géographique favorise l’autonomie des colons (la similitude).",
    updatedAt: "2026-06-18T23:00:08.405Z"
  },
  {
    id: "Q214",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P2 — 1608 – 1760",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A à C présentent le point de vue de trois historiens sur les rapports de force durant les guerres intercoloniales. Nommez l’historien qui présente un point de vue différent et comparez sa position à celle des deux autres historiens.",
    aspects: [{aspect: "Guerres intercoloniales"}],
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
    reponse: {type: "lignes", nombre: 3},
    guide: "Marcel Trudel considère que les alliances autochtones favorisent les Français (la différence), alors que Jacques Lacoursière et Gilles Havard soutiennent que les Britanniques sont avantagés par leur plus grande population (la similitude).",
    updatedAt: "2026-06-18T23:01:48.729Z"
  },
  {
    id: "Q215",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Ordre chronologique",
    enonce: "Les documents A à D présentent des événements liés à la Guerre de la Conquête. Placez-les en ordre chronologique.",
    aspects: [{aspect: "Guerre de la Conquête"}],
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
    reponse: {type: "image", ref: "ligne_abDc.png"},
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
    aspects: [{aspect: "Guerre de la Conquête"}],
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
      elements: ["Bataille de Sainte-Foy", "Bataille des Plaines d'Abraham", "Prise de Louisbourg", "Siège de Québec"]
    },
    guide: {
      type: "grille",
      entetes: ["Bataille de Sainte-Foy", "Bataille des Plaines d'Abraham", "Prise de Louisbourg", "Siège de Québec"],
      rangees: [
        ["B", "C", "A", "D"]
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
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis ces historiens sont-ils d’accord ?",
    aspects: [{aspect: "Guerre de la Conquête"}],
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
    guide: "La milice joue un rôle important dans la défense de la Nouvelle-France durant la guerre de la Conquête.",
    updatedAt: "2026-06-18T23:03:11.881Z"
  },
  {
    id: "Q218",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P2 — 1608 – 1760",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A à C présentent le point de vue de trois historiens sur la bataille des Plaines d'Abraham. Nommez l’historien qui présente un point de vue différent et comparez sa position à celle des deux autres historiens.",
    aspects: [{aspect: "Guerre de la Conquête"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« La bataille des Plaines d'Abraham constitue un tournant décisif qui entraîne rapidement la perte de la capitale et précipite la défaite de la Nouvelle-France. »",
            auteur: "Marcel Trudel",
            source: "TRUDEL, Marcel. Histoire de la Nouvelle-France, tome IV : La guerre de la Conquête. Montréal, Fides, 1973."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« La défaite française s'explique aussi par l'infériorité démographique de la colonie et par les ressources limitées dont elle dispose pour soutenir l'effort de guerre. »",
            auteur: "Jacques Mathieu",
            source: "MATHIEU, Jacques. La Nouvelle-France : les Français en Amérique du Nord, XVIe-XVIIIe siècle. Québec, Presses de l'Université Laval, 1991."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Bien avant la bataille des Plaines d'Abraham, la supériorité navale et économique de la Grande-Bretagne plaçait déjà la Nouvelle-France dans une situation difficile. »",
            auteur: "Louise Dechêne",
            source: "DECHÊNE, Louise. Le peuple, l'État et la guerre au Canada sous le Régime français. Montréal, Boréal, 2008."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Marcel Trudel considère que la bataille des Plaines d'Abraham est la principale cause de la défaite française (la différence), alors que Jacques Mathieu et Louise Dechêne soutiennent que d'autres facteurs expliquent cette défaite (la similitude).",
    updatedAt: "2026-06-18T23:05:57.395Z"
  },
  {
    id: "Q219",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P3 — 1760 – 1791",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
    aspects: [{aspect: "Invasion américaine"}],
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
    reponse: {type: "image", ref: "ligne_1760-1800.png"},
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
    aspects: [{aspect: "Régime militaire"}],
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
    reponse: {type: "image", ref: "ligne_1755-1795.png"},
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
    aspects: [{aspect: "Proclamation royale"}],
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
    reponse: {type: "image", ref: "ligne_1760-1800.png"},
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
    aspects: [{aspect: "Statut des Indiens"}],
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
    reponse: {type: "image", ref: "ligne_1760-1800.png"},
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
    aspects: [{aspect: "Acte de Québec"}],
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
    reponse: {type: "image", ref: "ligne_1760-1800.png"},
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
    aspects: [{aspect: "Loyalistes"}],
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
    reponse: {type: "image", ref: "ligne_1760-1800.png"},
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
    aspects: [{aspect: "Invasion américaine"}],
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
    reponse: {type: "image", ref: "ligne_1760-1800.png"},
    guide: "C"
  },
  {
    id: "Q226",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez le nom de la période durant laquelle la colonie est administrée par des autorités britanniques entre la capitulation de Montréal et le Traité de Paris.",
    aspects: [{aspect: "Régime militaire"}],
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
    reponse: {type: "lignes", nombre: 1},
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
    aspects: [{aspect: "Régime militaire"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "org_pol_regime_militaire.png",
            soustitre: "Organisation politique de la colonie entre 1760-1763",
            source: "chéma produit par intelligence artificielle, inspiré des ouvrages d'histoire du Québec et du Canada."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Le gouvernement de la colonie passe sous l'autorité britannique ou la colonie est divisée en trois districts administrés par des gouverneurs britanniques.",
    updatedAt: "2026-06-12T12:09:54.169Z"
  },
  {
    id: "Q228",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Changement",
    enonce: "Indiquez un changement dans la gouvernance de la colonie suite à la capitulation de Montréal.",
    aspects: [{aspect: "Régime militaire"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Régime militaire"}],
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
    reponse: {type: "lignes", nombre: 1},
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
    aspects: [{aspect: "Proclamation royale"}],
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
    reponse: {type: "lignes", nombre: 1},
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
    aspects: [{aspect: "Invasion américaine"}, {aspect: "Proclamation royale"}],
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
      elements: ["Traité de Paris - 1763", "Traité de Paris - 1783"]
    },
    guide: {
      type: "grille",
      entetes: ["Traité de Paris - 1763", "Traité de Paris - 1783"],
      rangees: [
        ["A et D", "B et C"]
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
    enonce: "Expliquez comment la fin de la guerre de la Conquête transforme le territoire de l’Amérique du Nord.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• un résultat de la guerre de la Conquête\n• le traité qui met fin à cette guerre\n• une modification du territoire de l’Amérique du Nord",
    aspects: [{aspect: "Proclamation royale"}],
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
        cols: [{titre: "Document C", ref: "carte_proclamation_royale_1763.png", source: "Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "La victoire britannique (le résultat de la guerre de la Conquête) lors de la guerre de la Conquête est confirmée par le Traité de Paris de 1763 (le traité qui met fin à la guerre). Par ce traité, la France cède le Canada à la Grande-Bretagne, ce qui agrandit les possessions britanniques et réduit le territoire français en Amérique du Nord (une modification du territoire).",
    updatedAt: "2026-06-18T11:58:06.288Z"
  },
  {
    id: "Q233",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez le nom de la constitution mise en place par les autorités britanniques suite au Traité de Paris de 1763.",
    aspects: [{aspect: "Proclamation royale"}],
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
    reponse: {type: "lignes", nombre: 1},
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
    aspects: [{aspect: "Proclamation royale"}, {aspect: "Régime militaire"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "org_pol_regime_militaire.png",
            soustitre: "Organisation politique de la colonie entre 1760-1763",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
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
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Changement\n\nIl y a changement, car après 1763, le régime militaire est remplacé par une administration civile britannique. ou Il y a changement, car entre 1760 et 1770, la colonie passe d'un régime militaire à un régime civil britannique.\n\nContinuité\n\nIl y a continuité, car entre 1760 et 1770, la colonie demeure sous l'autorité de la Couronne britannique. ou Il y a continuité, car entre 1760 et 1770, la colonie est administrée par des autorités britanniques.",
    updatedAt: "2026-06-12T12:10:15.183Z"
  },
  {
    id: "Q235",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de la reconnaissance des droits territoriaux des Autochtones par la Proclamation royale de 1763?",
    aspects: [{aspect: "Proclamation royale"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Statut des Indiens"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Statut des Indiens"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Statut des Indiens"}],
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
    reponse: {type: "lignes", nombre: 1},
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
    aspects: [{aspect: "Statut des Indiens"}],
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
    reponse: {type: "lignes", nombre: 2},
    guide: "Maintenir de bonnes relations avec les Autochtones.",
    updatedAt: "2026-06-06T20:41:51.403Z"
  },
  {
    id: "Q240",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P3 — 1760 – 1791",
    points: 3,
    enonce: "Expliquez comment une action d'un chef autochtone influence les décisions prises par les autorités britanniques concernant les territoires nord-américains.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• une action d'un chef autochtone\n• un droit reconnu aux Autochtone par la Proclamation royale\n• un effet sur les territoires britanniques nord-américains",
    aspects: [{aspect: "Proclamation royale"}, {aspect: "Statut des Indiens"}],
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
        cols: [{titre: "Document C", ref: "carte_proclamation_royale_1763.png", source: "Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "La révolte menée par Pontiac (une action d'un chef autochtone) pousse les autorités britanniques à reconnaître certains droits territoriaux aux Autochtones dans la Proclamation royale (un droit reconnu aux Autochtones). Cette décision entraîne la création d'un territoire réservé aux Autochtones (un effet sur les territoires britanniques nord-américains).",
    updatedAt: "2026-06-15T12:30:39.086Z"
  },
  {
    id: "Q241",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez le nom de l'obligation imposée aux catholiques qui souhaitent occuper certaines fonctions publiques après la Conquête.",
    aspects: [{aspect: "Instructions au gouverneur Murray"}],
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
    reponse: {type: "lignes", nombre: 1},
    guide: "Le Serment du Test.",
    updatedAt: "2026-06-06T21:02:50.524Z"
  },
  {
    id: "Q242",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P3 — 1760 – 1791",
    points: 3,
    enonce: "Expliquez comment la composition de la population influence les décisions prises par le gouverneur Murray.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• la composition de la population de la colonie vers 1763\n• une décision prise par Murray\n• une conséquence pour les Canadiens",
    aspects: [{aspect: "Instructions au gouverneur Murray"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "population_1763.png",
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
    reponse: {type: "lignes", nombre: 3},
    guide: "Les Canadiens catholiques forment la majorité de la population de la colonie (la composition de la population de la colonie). Le gouverneur Murray leur accorde certaines concessions, notamment sur le plan religieux (une décision prise par Murray). Les Canadiens peuvent ainsi continuer à pratiquer leur religion catholique (une conséquence pour les Canadiens).",
    updatedAt: "2026-06-15T12:23:07.596Z"
  },
  {
    id: "Q243",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez un moyen proposé dans les instructions du roi pour favoriser l'assimilation des Canadiens.",
    aspects: [{aspect: "Instructions au gouverneur Murray"}],
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
    reponse: {type: "lignes", nombre: 1},
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
    aspects: [{aspect: "Instructions au gouverneur Murray"}],
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
    reponse: {type: "lignes", nombre: 1},
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
    aspects: [{aspect: "Instructions au gouverneur Murray"}, {aspect: "Proclamation royale"}, {aspect: "Régime militaire"}],
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
            soustitre: "Organisation politique de la colonie après 1763",
            source: "Schéma produit par intelligence artificielle, inspiré des ouvrages d'histoire du Québec et du Canada."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "org_pol_regime_militaire.png",
            soustitre: "Organisation politique de la colonie entre 1760 et 1763",
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
      elements: ["Gouvernement civil", "Gouvernement militaire"]
    },
    guide: {
      type: "grille",
      entetes: ["Gouvernement civil", "Gouvernement militaire"],
      rangees: [
        ["B et D", "A et C"]
      ]
    },
    updatedAt: "2026-06-12T12:10:30.607Z"
  },
  {
    id: "Q246",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P3 — 1760 – 1791",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A et B, indiquez s’il y a changement ou continuité dans le territoire de la Province de Québec entre 1763 et 1774. Justifiez votre choix par des faits et un repère de temps.",
    aspects: [{aspect: "Acte de Québec"}, {aspect: "Proclamation royale"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_proclamation_royale_1763.png", source: "Récitus."}]
      },
      {
        type: "textes",
        cols: [{titre: "Document B", ref: "carte_acte_quebec_1774.png", source: "Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
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
    aspects: [{aspect: "Acte de Québec"}, {aspect: "Proclamation royale"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "org_pol_apres_1763.png",
            soustitre: "Organisation politique de la colonie après 1763",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "org_pol_1774_acte_quebec.png",
            soustitre: "Organisation politique de la colonie après 1774",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Changement :\nIl y a changement, car en 1774, le Conseil de Québec devient le Conseil exécutif et le Conseil législatif.\n\nContinuité :\nIl y a continuité, car entre 1763 et 1774, la Province de Québec demeure dirigée par un gouverneur britannique nommé par le roi.",
    updatedAt: "2026-06-12T12:09:32.861Z"
  },
  {
    id: "Q248",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez le nom de la constitution mise en place par les autorités britanniques dans la Province de Québec en 1774.",
    aspects: [{aspect: "Acte de Québec"}],
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
    reponse: {type: "lignes", nombre: 1},
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
    aspects: [{aspect: "Acte de Québec"}],
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
      elements: ["Exécutif", "Judiciaire", "Législatif"]
    },
    guide: {
      type: "grille",
      entetes: ["Exécutif", "Judiciaire", "Législatif"],
      rangees: [
        ["C", "A", "C"]
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
    aspects: [{aspect: "Acte de Québec"}],
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
      elements: ["British Party", "Clergé catholique", "French Party"]
    },
    guide: {
      type: "grille",
      entetes: ["British Party", "Clergé catholique", "French Party"],
      rangees: [
        ["", "A", "B"]
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
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis ces acteurs sont-ils en accord?",
    aspects: [{aspect: "Acte de Québec"}],
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
    reponse: {type: "lignes", nombre: 2},
    guide: "Le maintien des lois civiles françaises.",
    updatedAt: "2026-06-18T23:06:19.201Z"
  },
  {
    id: "Q252",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Divergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis ces acteurs sont-ils en désaccord?",
    aspects: [{aspect: "Acte de Québec"}],
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
    reponse: {type: "lignes", nombre: 2},
    guide: "La mise en place d'une assemblée élue dans la Province de Québec.",
    updatedAt: "2026-06-18T23:06:56.667Z"
  },
  {
    id: "Q253",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P3 — 1760 – 1791",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A et B, indiquez s'il y a changement ou continuité dans les lois en vigueur dans la Province de Québec entre 1763 et 1774. Justifiez votre choix par des faits et un repère de temps.",
    aspects: [{aspect: "Acte de Québec"}, {aspect: "Proclamation royale"}],
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
    reponse: {type: "lignes", nombre: 2},
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
    aspects: [{aspect: "Acte de Québec"}],
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
    reponse: {type: "lignes", nombre: 2},
    guide: "Le serment du Test n'est plus exigé pour occuper un poste dans l'administration coloniale.",
    updatedAt: "2026-06-07T13:08:53.602Z"
  },
  {
    id: "Q255",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une raison qui explique pourquoi les Canadiens catholiques peuvent occuper un poste dans l'administration coloniale après 1774.",
    aspects: [{aspect: "Acte de Québec"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« L'une des modifications apportées en 1774 concerne le serment exigé des titulaires de charges publiques, ce qui élargit l'accès à certaines fonctions dans la colonie. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 1, Québec Amérique, 1995."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Le serment du Test est aboli ou le serment du Test est remplacé par un nouveau serment d'allégeance.",
    updatedAt: "2026-06-07T13:18:57.177Z"
  },
  {
    id: "Q256",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de l'abolition du serment du Test dans la Province de Québec après 1774.",
    aspects: [{aspect: "Acte de Québec"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "En 1774, les autorités britanniques remplacent le serment auparavant exigé des titulaires de charges publiques. Cette modification permet à davantage d'habitants de satisfaire aux conditions requises pour participer à l'administration de la province. »",
            source: "Adapté de l'Acte de Québec, 1774."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Les Canadiens catholiques peuvent occuper des postes dans l'administration coloniale.",
    updatedAt: "2026-06-07T13:13:18.433Z"
  },
  {
    id: "Q257",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Continuité",
    enonce: "À partir des documents A et B, indiquez un élément de continuité dans les fonctions exercées par le gouverneur de la Province de Québec entre 1763 et 1774.",
    aspects: [{aspect: "Acte de Québec"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Dans la Province de Québec, le gouverneur agit au nom du roi de Grande-Bretagne. Il veille à l'administration de la colonie et s'assure de l'application des décisions prises par les autorités britanniques. »",
            soustitre: "1763",
            source: "Adapté de la Proclamation royale de 1763."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Après l'adoption de l'Acte de Québec, le gouverneur demeure le principal représentant de la Couronne britannique. Il continue d'exercer d'importantes responsabilités dans l'administration de la province. »",
            soustitre: "1774",
            source: "Adapté de Christian Blais, Histoire parlementaire du Québec, Assemblée nationale du Québec, 2012."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Le gouverneur demeure le représentant du roi dans la colonie ou le gouverneur continue de diriger l'administration de la colonie.",
    updatedAt: "2026-06-07T13:18:20.625Z"
  },
  {
    id: "Q258",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez le nom de l'obligation imposée aux catholiques qui souhaitent exercer une fonction dans l'administration coloniale avant 1774.",
    aspects: [{aspect: "Proclamation royale"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Pour obtenir une charge publique dans la Province de Québec, les candidats doivent prêter un serment affirmant certaines croyances religieuses reconnues par les autorités britanniques. »",
            source: "Adapté de la Proclamation royale de 1763."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Le serment du Test.",
    updatedAt: "2026-06-07T13:26:15.151Z"
  },
  {
    id: "Q259",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez un droit accordé aux catholiques par l'Acte de Québec.",
    aspects: [{aspect: "Acte de Québec"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« La nouvelle constitution permet aux habitants de pratiquer leur religion et confirme certains privilèges déjà exercés par l'Église dans la Province de Québec. »",
            source: "Adapté de l'Acte de Québec, 1774."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Les catholiques peuvent pratiquer leur religion.",
    updatedAt: "2026-06-07T13:24:51.349Z"
  },
  {
    id: "Q260",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez un droit accordé à l'Église catholique par l'Acte de Québec.",
    aspects: [{aspect: "Acte de Québec"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« La nouvelle constitution confirme le droit du clergé de percevoir certaines contributions auprès des fidèles afin d'assurer le fonctionnement des paroisses de la colonie. »",
            source: "Adapté de l'Acte de Québec, 1774."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Le droit de percevoir la dîme.",
    updatedAt: "2026-06-07T13:25:36.767Z"
  },
  {
    id: "Q261",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une raison qui explique l'adoption de l'Acte de Québec par les autorités britanniques en 1774.",
    aspects: [{aspect: "Acte de Québec"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Dans les colonies britanniques du sud, plusieurs habitants contestent les décisions prises par Londres. Les autorités cherchent alors des moyens d'assurer la fidélité des habitants de la Province de Québec. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 2, Québec Amérique, 1995."
          }
        ]
      }
    ],
    reponse: {type: "cause-consequence"},
    guide: "Les autorités britanniques veulent s'assurer de la loyauté des habitants de la Province de Québec face aux tensions dans les Treize colonies.",
    updatedAt: "2026-06-07T13:30:33.036Z"
  },
  {
    id: "Q262",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P3 — 1760 – 1791",
    points: 3,
    enonce: "Expliquez comment les événements dans les Treize colonies contribuent à l'adoption d'une nouvelle constitution en 1774.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• un événement dans les Treize colonies\n• un objectif poursuivi par les autorités britanniques\n• le nom d'une nouvelle constitution mise en place en 1774",
    aspects: [{aspect: "Acte de Québec"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Au début des années 1770, plusieurs habitants des Treize colonies contestent les taxes imposées par le Parlement britannique. Les tensions augmentent et les relations entre Londres et ses colonies américaines se détériorent. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 1, Québec Amérique, 1995."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les autorités britanniques cherchent à préserver la stabilité de leurs possessions nord-américaines et à éviter que les mécontentements observés ailleurs ne gagnent les habitants de la Province de Québec. »",
            source: "Adapté de Marcel Trudel, Initiation à la Nouvelle-France."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "org_pol_1774_acte_quebec.png",
            soustitre: "Organisation politique de la colonie après 1774",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Les tensions ou le mécontentement dans les Treize colonies (événements dans les Treize colonies) inquiètent les autorités britanniques. Pour maintenir stabilité de la Province de Québec et assurer la loyauté de ses habitants (objectif poursuivi par les autorités britanniques), les autorités adoptent l'Acte de Québec (nom d'une nouvelle constitution mise en place en 1774).",
    updatedAt: "2026-06-15T12:23:24.743Z"
  },
  {
    id: "Q263",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P2 — 1608 – 1760",
    points: 3,
    enonce: "Expliquez comment la fin de la guerre de Succession d'Espagne transforme le territoire de l’Amérique du Nord. \n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• un résultat de la la guerre de Succession d'Espagne\n• le traité qui met fin à cette guerre\n• une modification du territoire de l’Amérique du Nord",
    aspects: [{aspect: "Guerres intercoloniales"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Après plusieurs années de combats, la France et ses alliés ne parviennent pas à atteindre leurs objectifs. La Grande-Bretagne sort renforcée du conflit et accroît son influence sur la scène internationale. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 1."
          }
        ]
      },
      {
        type: "textes",
        cols: [{titre: "Document B", ref: "territoire_revendique_1713.png", source: "Récitus."}]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« En 1713, des représentants de plusieurs puissances européennes se réunissent afin de mettre officiellement fin au conflit qui oppose leurs États depuis le début du XVIIIe siècle. »",
            source: "Adapté de Marcel Trudel, Initiation à la Nouvelle-France."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "La victoire britannique (un résultat de la guerre de Succession d'Espagne) mène à la signature du traité d'Utrecht (le traité qui met fin à cette guerre). À la suite de ce traité, la France perd l'Acadie, Terre-Neuve et la baie d'Hudson (une modification du territoire de l'Amérique du Nord).",
    updatedAt: "2026-06-15T12:30:21.391Z"
  },
  {
    id: "Q264",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P3 — 1760 – 1791",
    points: 3,
    enonce: "Expliquez comment la fin de la guerre d'Indépendance des États-Unis transforme le territoire de l'Amérique du Nord.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\nl'issue de la guerre de l'indépendance des États-Unis\nle traité qui met fin à cette guerre\nune modification du territoire de l'Amérique du Nord",
    aspects: [{aspect: "Invasion américaine"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Après plusieurs années de combats, les colonies américaines obtiennent leur indépendance et cessent d'être sous l'autorité de la Grande-Bretagne. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 1."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« À la fin du conflit, des représentants britanniques et américains concluent une entente qui reconnaît officiellement la nouvelle situation politique en Amérique du Nord et fixe certaines frontières territoriales. »",
            source: "Adapté du Traité de Paris, 1783."
          }
        ]
      },
      {
        type: "textes",
        cols: [{titre: "Document C", ref: "carte_province_quebec_1783.png", source: "Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Les Treize colonies obtiennent leur indépendance (l'issue de la guerre de l'indépendance des États-Unis). Le traité de Paris de 1783 met fin au conflit (le traité qui met fin à cette guerre). Les États-Unis sont reconnus et leur territoire s'étend jusqu'au Mississippi (une modification du territoire de l'Amérique du Nord) ou la Province de Québec perd la région au sud des Grands Lacs ou la vallée de l'Ohio.",
    updatedAt: "2026-06-15T12:29:42.033Z"
  },
  {
    id: "Q265",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Changement",
    enonce: "À partir des documents A et B, indiquez un changement dans le territoire de la Province de Québec entre 1774 et 1783.",
    aspects: [{aspect: "Invasion américaine"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_acte_quebec_1774.png", source: "Récitus."}]
      },
      {
        type: "textes",
        cols: [{titre: "Document B", ref: "carte_province_quebec_1783.png", source: "Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Il y a changement, car en 1783, la Province de Québec perd la vallée de l'Ohio ou le territoire situé au sud des Grands Lacs.",
    updatedAt: "2026-06-07T17:39:22.175Z"
  },
  {
    id: "Q266",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence du Traité de Paris de 1783 sur le territoire de la Province de Québec.",
    aspects: [{aspect: "Invasion américaine"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« En 1783, une entente entre la Grande-Bretagne et les États-Unis redéfinit certaines frontières en Amérique du Nord. Les nouvelles limites territoriales réduisent l'étendue des terres administrées depuis la Province de Québec. »",
            source: "Adapté du Traité de Paris, 1783."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "La Province de Québec perd la vallée de l'Ohio ou la Province de Québec perd le territoire situé au sud des Grands Lacs ou une partie du territoire de la Province de Québec est intégrée aux États-Unis.",
    updatedAt: "2026-06-07T17:41:04.701Z"
  },
  {
    id: "Q267",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez le nom des mesures adoptées par le Parlement britannique en 1774 à la suite des événements survenus lors du Boston Tea Party.",
    aspects: [{aspect: "Invasion américaine"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Après la destruction d'une cargaison de thé dans le port de Boston, Londres adopte une série de mesures destinées à accroître son contrôle sur l'une de ses colonies nord-américaines. »",
            source: "Adapté de Marcel Trudel, Initiation à la Nouvelle-France, 1968."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Les Lois intolérables.",
    updatedAt: "2026-06-07T17:50:44.295Z"
  },
  {
    id: "Q268",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez le nom du nouveau pays reconnu par la Grande-Bretagne à la suite du traité de Paris de 1783.",
    aspects: [{aspect: "Invasion américaine"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Le règlement de 1783 marque l'entrée d'un nouvel État sur la scène internationale et met fin à l'autorité britannique sur les Treize colonies. »",
            source: "Adapté de Marcel Trudel, Initiation à la Nouvelle-France."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Les États-Unis.",
    updatedAt: "2026-06-07T19:56:02.272Z"
  },
  {
    id: "Q269",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez le nom du document adopté par les représentants des Treize colonies le 4 juillet 1776 pour proclamer leur indépendance.",
    aspects: [{aspect: "Invasion américaine"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Le 4 juillet 1776, les représentants des Treize colonies adoptent un texte dans lequel ils affirment que ces colonies sont désormais des États libres et indépendants de la Grande-Bretagne. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, adaptation."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "La Déclaration d'indépendance des États-Unis",
    updatedAt: "2026-06-07T20:03:49.852Z"
  },
  {
    id: "Q270",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P3 — 1760 – 1791",
    points: 3,
    enonce: "Expliquez comment l'issue de la guerre d'Indépendance des États-Unis entraîne la migration de populations britanniques vers la Province de Québec.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• l'issue de la guerre d'Indépendance des États-Unis\n• un groupe britannique qui demeure fidèle à la Couronne\n• une région qui accueille les migrants",
    aspects: [{aspect: "Invasion américaine"}, {aspect: "Loyalistes"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« En 1783, la Grande-Bretagne accepte officiellement l'indépendance de ses anciennes colonies d'Amérique. Cette décision met fin à plusieurs années de conflit et modifie profondément la situation politique du continent. »",
            source: "Adapté du Traité de Paris, 1783."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Certains habitants des anciennes colonies refusent de reconnaître le nouveau gouvernement américain. Ils demeurent attachés au roi de Grande-Bretagne et choisissent de quitter leur lieu de résidence après la guerre. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 2."
          }
        ]
      },
      {
        type: "textes",
        cols: [{titre: "Document C", ref: "carte_migration_loyalistes_1783.png", source: "Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Les États-Unis obtiennent leur indépendance (l'issue de la guerre d'Indépendance des États-Unis). Des Loyalistes, demeurés fidèles à la Couronne britannique (un groupe britannique qui demeure fidèle à la Couronne), quittent les États-Unis et s'établissent notamment en Gaspésie ou en Estrie (une région qui accueille les migrants).",
    updatedAt: "2026-06-15T12:29:20.861Z"
  },
  {
    id: "Q271",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez le nom du groupe demeuré fidèle à la Couronne britannique à la suite de la guerre d'Indépendance des États-Unis.",
    aspects: [{aspect: "Loyalistes"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« À la fin du conflit, plusieurs sujets britanniques conservent leur attachement à la monarchie malgré la création d'un nouvel État indépendant en Amérique du Nord. »",
            source: "Adapté de Marcel Trudel, Initiation à la Nouvelle-France."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Les Loyalistes.",
    updatedAt: "2026-06-07T20:14:54.337Z"
  },
  {
    id: "Q272",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis sont-ils d'accord ?",
    aspects: [{aspect: "Invasion américaine"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Nous recommandons aux habitants de conserver la paix et l'ordre dans la colonie. Ils ne doivent pas se joindre aux troubles qui agitent les colonies voisines. »",
            auteur: "Jean-Olivier Briand - évêque de Québec",
            source: "Adapté du mandement de Mgr Briand, 1775."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Il est souhaitable que les habitants de la Province de Québec ne prennent pas part aux événements qui opposent les rebelles américains à la Grande-Bretagne. »",
            auteur: "Guy Carleton - gouverneur",
            source: "Adapté de la correspondance de Guy Carleton, 1775."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "La neutralité des Canadiens pendant le conflit.",
    updatedAt: "2026-06-18T23:07:31.049Z"
  },
  {
    id: "Q273",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P3 — 1760 – 1791",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A à C présentent la position de trois acteurs concernant l'attitude que les Canadiens devraient adopter face à la Révolution américaine. Nommez l'acteur qui présente une position différente et comparez cette position à celle des deux autres acteurs.",
    aspects: [{aspect: "Invasion américaine"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« La sécurité et la prospérité de la Province de Québec reposent sur le maintien de l'autorité britannique. Les habitants doivent demeurer fidèles au roi et ne pas soutenir les insurgés américains. »",
            auteur: "Guy Carleton - gouverneur de la Province de Québec",
            source: "Adapté de la correspondance de Guy Carleton, 1775."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Habitants de la Province de Québec, joignez-vous aux autres colonies d'Amérique dans leur lutte pour la liberté. Vous pourrez ainsi participer à l'établissement d'un gouvernement fondé sur les droits des citoyens. »",
            auteur: "Benjamin Franklin - représentant du Congrès continental",
            source: "Adapté des Lettres aux Canadiens, 1774."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Les fidèles doivent respecter l'autorité légitime du souverain britannique et éviter de prendre part aux troubles qui opposent les colonies américaines à la Grande-Bretagne. »",
            auteur: "Jean-Olivier Briand - évêque catholique de Québec",
            source: "Adapté du mandement de Mgr Jean-Olivier Briand, 1775."
          }
        ]
      }
    ],
    reponse: false,
    guide: "Benjamin Franklin encourage les Canadiens à appuyer la Révolution américaine (la différence), alors que Guy Carleton et Jean-Olivier Briand les incitent à demeurer loyaux envers la Grande-Bretagne (la similitude).",
    updatedAt: "2026-06-18T23:08:26.863Z"
  },
  {
    id: "Q274",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "2 documents",
    enonce: "Les documents A et B présentent deux événements liés à l'invasion américaine de 1775. Associez chaque document à l'événement correspondant.",
    aspects: [{aspect: "Invasion américaine"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Après avoir franchi la frontière de la Province de Québec, les troupes américaines prennent le contrôle d'une importante ville située dans la vallée du Saint-Laurent sans rencontrer une forte résistance. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 2."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Durant l'hiver 1775-1776, des soldats américains encerclent la principale ville administrative de la colonie dans l'espoir d'obtenir sa capitulation. »",
            source: "Adapté de Christian Blais, Histoire parlementaire du Québec."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: ["Ville assiégée (Québec)", "Ville occupée (Montréal)"]
    },
    guide: {
      type: "grille",
      entetes: ["Ville assiégée (Québec)", "Ville occupée (Montréal)"],
      rangees: [
        ["B", "A"]
      ]
    },
    updatedAt: "2026-06-08T00:22:10.772Z"
  },
  {
    id: "Q275",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence du traité de Paris de 1783 sur certaines populations autochtones alliées aux Britanniques.",
    aspects: [{aspect: "Invasion américaine"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Après la reconnaissance de l'indépendance américaine, plusieurs nations autochtones alliées à la Grande-Bretagne voient leurs territoires passer sous l'autorité d'un nouveau gouvernement. »",
            source: "Adapté de Gilles Havard et Cécile Vidal, Histoire de l'Amérique française."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Migration de certaines populations autochtones vers les territoires britanniques ou déplacement vers la Province de Québec.",
    updatedAt: "2026-06-08T00:25:41.493Z"
  },
  {
    id: "Q276",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez le nom de la politique économique appliquée par la Grande-Bretagne dans ses colonies au XVIIIe siècle.",
    aspects: [{aspect: "Économie coloniale"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "mercantilisme_britannique.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Le mercantilisme.",
    updatedAt: "2026-06-08T11:39:02.382Z"
  },
  {
    id: "Q277",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Cause et conséquence",
    enonce: "Indiquez le document qui présente une cause et le document qui présente une conséquence de l'application du mercantilisme dans la Province de Québec vers 1780.",
    aspects: [{aspect: "Économie coloniale"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les colonies existent pour accroître la richesse et la puissance de la métropole. Elles doivent fournir les matières premières nécessaires à son économie et servir de marché pour les produits fabriqués dans le pays. »",
            source: "Adapté de Jean Hamelin et Yves Roby, Histoire économique du Québec, 1851-1896, Montréal, Fides, 1971."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« À la fin du XVIIIe siècle, la Province de Québec exporte principalement des fourrures, du poisson, du bois et des produits agricoles vers la Grande-Bretagne. En retour, elle importe des tissus, des outils, de la vaisselle et d'autres produits manufacturés. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 2, Québec, Septentrion, 1995."
          }
        ]
      }
    ],
    reponse: {type: "cause-consequence"},
    guide: {
      type: "grille",
      entetes: ["Cause", "Conséquence"],
      rangees: [
        ["A", "B"]
      ]
    },
    updatedAt: "2026-06-08T03:56:50.847Z"
  },
  {
    id: "Q278",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P3 — 1760 – 1791",
    points: 3,
    enonce: "Expliquez comment la politique économique de la Grande-Bretagne influence les échanges commerciaux dans la Province de Québec vers 1780.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• le nom de cette politique économique\n• un objectif poursuivi par la métropole\n• une conséquence sur les échanges commerciaux de la Province de Québec",
    aspects: [{aspect: "Économie coloniale"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les relations commerciales entre la Grande-Bretagne et ses colonies reposent sur certains principes [...], selon lesquels les colonies doivent servir les intérêts économiques de la métropole. »",
            source: "John A. Dickinson et Brian Young, Brève histoire socio-économique du Québec, Septentrion, 2003."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "mercantilisme_britannique.png",
            source: "Schéma produit par intelligence artificielle, inspiré des ouvrages d'histoire du Québec et du Canada."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Les autorités britanniques considèrent que les colonies doivent contribuer à la prospérité du royaume en alimentant son commerce et en servant de marché pour ses produits manufacturés. »",
            source: "Adapté de Gilles Laporte, Histoire du Québec : une société nord-américaine, Chenelière Éducation, 2014."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "La Grande-Bretagne applique le mercantilisme (le nom de cette politique économique). Cette politique vise à enrichir la métropole en tirant profit de ses colonies (un objectif poursuivi par la métropole). Par conséquent, la Province de Québec exporte principalement des matières premières vers la Grande-Bretagne et importe des produits manufacturés britanniques (une conséquence sur les échanges commerciaux de la Province de Québec).",
    updatedAt: "2026-06-15T12:28:59.518Z"
  },
  {
    id: "Q279",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P3 — 1760 – 1791",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A et B, indiquez s'il y a changement ou continuité dans le contrôle du commerce de la colonie entre 1750 et 1775. Justifiez votre réponse par des faits et un repère de temps.",
    aspects: [{aspect: "Économie coloniale"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Sous le régime français, une grande partie des activités commerciales de la colonie est dirigée par des marchands français établis dans les villes de Québec et de Montréal. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 1."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Quinze ans après la Conquête, les marchands britanniques occupent une place dominante dans les échanges commerciaux de la Province de Québec. »",
            source: "Adapté de Gilles Laporte, Histoire du Québec : une société nord-américaine, Chenelière Éducation, 2014."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Changement\nIl y a changement, car vers 1750 le commerce est principalement contrôlé par des marchands français, alors qu'en 1775 il est principalement contrôlé par des marchands britanniques.\n\nContinuité\nIl y a continuité, car vers 1750 comme vers 1775, le commerce de la colonie est contrôlé par des marchands européens ou Il y a continuité, car vers 1750 comme vers 1775, des marchands contrôlent les activités commerciales de la colonie.",
    updatedAt: "2026-06-08T11:54:41.618Z"
  },
  {
    id: "Q280",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Changement",
    enonce: "Indiquez un changement dans les activités commerciales de la colonie après la Conquête.",
    aspects: [{aspect: "Économie coloniale"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Après la Conquête, plusieurs marchands français quittent la colonie alors que des négociants britanniques viennent s'y établir et développent leurs activités commerciales. »",
            source: "Adapté de John A. Dickinson et Brian Young, Brève histoire socio-économique du Québec, Septentrion, 2003."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Les marchands britanniques prennent progressivement le contrôle du commerce de la colonie.",
    updatedAt: "2026-06-08T12:13:20.468Z"
  },
  {
    id: "Q281",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P3 — 1760 – 1791",
    points: 3,
    enonce: "Expliquez comment l'issue de la guerre de la Conquête entraîne un changement du contrôle du commerce colonial.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• l'issue de la guerre de la Conquête\n• un changement dans le groupe de marchands dominant le commerce\n• une conséquence sur l'économie coloniale",
    aspects: [{aspect: "Économie coloniale"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Le traité de Paris de 1763 confirme le passage de la colonie sous l'autorité britannique. La France conserve certaines possessions, mais renonce à la Nouvelle-France. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 2 : Des origines à 1791, Québec, Septentrion, 1995."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Dans les années qui suivent la Conquête, plusieurs négociants venus des îles Britanniques s'établissent à Québec et à Montréal, où ils développent progressivement leurs activités commerciales. »",
            source: "John A. Dickinson et Brian Young, Brève histoire socio-économique du Québec, 4e édition, Québec, Septentrion, 2009."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« À la fin du XVIIIe siècle, les exportations de la colonie sont principalement dirigées vers les marchés britanniques, tandis que les produits manufacturés proviennent surtout de Grande-Bretagne. »",
            source: "Gilles Laporte, Histoire du Québec : une société nord-américaine, Montréal, Chenelière Éducation, 2014."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "La guerre de la Conquête se termine par la victoire britannique ou la cession de la colonie à la Grande-Bretagne (l'issue de la guerre de la Conquête). Après 1760, les marchands britanniques remplacent progressivement les marchands français dans les activités commerciales (un changement dans le groupe de marchands dominant le commerce). Par conséquent, le commerce de la colonie est davantage orienté vers l'Empire britannique (une conséquence sur l'économie coloniale).",
    updatedAt: "2026-06-15T12:28:32.912Z"
  },
  {
    id: "Q282",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez la principale activité économique pratiquée par la majorité des habitants de la Province de Québec vers 1780.",
    aspects: [{aspect: "Économie coloniale"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« À la fin du XVIIIe siècle, la majorité des habitants de la Province de Québec vivent à la campagne et tirent principalement leurs moyens de subsistance du travail de la terre. »",
            source: "Jacques Mathieu, La Nouvelle-France : les Français en Amérique du Nord, PUL, 1991."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "L'agriculture.",
    updatedAt: "2026-06-08T12:23:18.955Z"
  },
  {
    id: "Q283",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de l'augmentation de la production de blé dans la Province de Québec au XVIIIe siècle.",
    aspects: [{aspect: "Économie coloniale"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "production_blé_minots.png",
            soustitre: "Production de blé dans la Province de Québec  entre 1750 et 1790",
            source: "Graphique réalisé à partir de données pédagogiques inspirées de Jacques Mathieu, La Nouvelle-France : les Français en Amérique du Nord (1991)."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "L'augmentation des surplus agricoles ou l'augmentation des exportations de blé.",
    updatedAt: "2026-06-08T12:38:17.314Z"
  },
  {
    id: "Q284",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez un groupe d'immigrants britanniques qui s'établit dans la Province de Québec après 1760.",
    aspects: [{aspect: "Situation sociodémographique"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Après la Conquête, plusieurs marchands, fonctionnaires et soldats démobilisés originaires des îles Britanniques choisissent de demeurer dans la Province de Québec. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 2, Septentrion."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Les marchands britanniques ou les soldats britanniques démobilisés.",
    updatedAt: "2026-06-08T13:23:05.173Z"
  },
  {
    id: "Q285",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez le nom du groupe de population qui revient s'établir dans la Province de Québec après la Déportation.",
    aspects: [{aspect: "Situation sociodémographique"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Plusieurs familles qui avaient été dispersées lors des événements de 1755 retournent progressivement dans les colonies britanniques d'Amérique du Nord. Certaines choisissent de s'établir dans la Province de Québec, notamment dans les régions côtières du golfe du Saint-Laurent. »",
            source: "Adapté de Naomi E. S. Griffiths, The Acadians: Creation of a People, McGraw-Hill Ryerson, 1973."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Les Acadiens.",
    updatedAt: "2026-06-08T13:24:21.093Z"
  },
  {
    id: "Q286",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez le principal groupe composant la population de la Province de Québec vers 1790.",
    aspects: [{aspect: "Situation sociodémographique"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "composition_population_1790.png",
            soustitre: "Répartition de la population de la Province de Québec vers 1790",
            source: "Adapté de Fernand Ouellet, Le Bas-Canada 1791-1840 : changements structuraux et crise, Ottawa, Éditions de l'Université d'Ottawa, 1976."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Les Canadiens ou les Canadiens francophones.",
    updatedAt: "2026-06-12T01:26:59.447Z"
  },
  {
    id: "Q287",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez la langue parlée par la majorité de la population de la Province de Québec vers 1790.",
    aspects: [{aspect: "Situation sociodémographique"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "langues_parlees_1790.png",
            soustitre: "Langues parlées dans la Province de Québec vers 1790",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Le français.",
    updatedAt: "2026-06-08T13:37:42.803Z"
  },
  {
    id: "Q288",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez le phénomène démographique responsable de l'augmentation de la population canadienne après la Conquête.",
    aspects: [{aspect: "Situation sociodémographique"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« À la fin du XVIIIe siècle, les familles canadiennes comptent souvent plusieurs enfants. Cette situation contribue à la croissance de la population de la colonie. »",
            source: "Adapté de Marcel Trudel, Initiation à la Nouvelle-France."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "L'accroissement naturel",
    updatedAt: "2026-06-08T13:39:59.026Z"
  },
  {
    id: "Q289",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P3 — 1760 – 1791",
    points: 1,
    enonce: "Indiquez une profession exercée par la bourgeoisie professionnelle canadienne.",
    aspects: [{aspect: "Situation sociodémographique"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Plusieurs Canadiens instruits occupent des fonctions nécessitant une formation spécialisée. Ils jouent un rôle important dans les tribunaux, les bureaux de notaires et les services médicaux de la colonie. »",
            soustitre: "Indiquez une profession exercée par la bourgeoisie professionnelle canadienne.",
            source: "Adapté de Gilles Laporte, Brève histoire politique du Québec."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Notaire ou avocat ou médecin.",
    updatedAt: "2026-06-08T13:43:04.698Z"
  },
  {
    id: "Q290",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une raison qui explique l'arrivée de Britanniques dans la Province de Québec après 1763.",
    aspects: [{aspect: "Situation sociodémographique"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Après la Conquête, plusieurs marchands, fonctionnaires et militaires britanniques s'installent dans la Province de Québec afin d'administrer la colonie et de profiter des nouvelles possibilités économiques. »",
            source: "Adapté de Marcel Trudel, Initiation à la Nouvelle-France."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "La Province de Québec devient une colonie britannique.",
    updatedAt: "2026-06-08T13:55:22.741Z"
  },
  {
    id: "Q291",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis sont-ils d'accord ?",
    aspects: [{aspect: "Situation sociodémographique"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les familles canadiennes de la fin du XVIIIᵉ siècle comptent souvent plusieurs enfants, ce qui contribue à l'augmentation rapide de la population de la colonie. »",
            source: "Adapté de Jacques Mathieu, La Nouvelle-France : les Français en Amérique du Nord, PUL, 1991."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« La population canadienne se distingue par un nombre élevé de naissances. Cette situation favorise une croissance démographique soutenue au cours du XVIIIᵉ siècle. »",
            source: "Adapté de Marcel Trudel, Histoire de la Nouvelle-France."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "La population canadienne augmente rapidement grâce à l'accroissement naturel.",
    updatedAt: "2026-06-18T23:09:00.523Z"
  },
  {
    id: "Q292",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Cause et conséquence",
    enonce: "À partir des documents A et B, indiquez une cause et une conséquence de l'accroissement naturel des Canadiens dans la Province de Québec.",
    aspects: [{aspect: "Situation sociodémographique"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les familles canadiennes de la fin du XVIIIᵉ siècle comptent souvent plusieurs enfants, ce qui contribue à l'augmentation rapide de la population de la colonie. »",
            source: "Adapté de Jacques Mathieu, La Nouvelle-France : les Français en Amérique du Nord, PUL, 1991."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« La croissance de la population entraîne l'ouverture de nouvelles terres agricoles afin de répondre aux besoins d'un nombre grandissant d'habitants dans la colonie. »",
            source: "Adapté de Gilles Laporte, Histoire du Québec : une société nord-américaine, Chenelière, 2014."
          }
        ]
      }
    ],
    reponse: {type: "cause-consequence"},
    guide: {
      type: "grille",
      entetes: ["Cause", "Conséquence"],
      rangees: [
        ["A", "B"]
      ]
    },
    updatedAt: "2026-06-08T14:02:38.890Z"
  },
  {
    id: "Q293",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Divergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs Sur quel point précis ces historiens sont-ils en désaccord ?",
    aspects: [{aspect: "Situation sociodémographique"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« L'arrivée des réfugiés acadiens contribue à accroître la population de la colonie, mais leur nombre demeure relativement faible comparativement à celui des Canadiens. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 2."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Bien que moins nombreux que les Canadiens, les Acadiens jouent un rôle important dans le peuplement de certaines régions où ils forment des communautés durables. »",
            source: "Adapté de Gilles Laporte, Histoire du Québec : une société nord-américaine."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "L'importance du rôle joué par les réfugiés acadiens dans le peuplement de la Province de Québec.",
    updatedAt: "2026-06-18T23:09:36.808Z"
  },
  {
    id: "Q294",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de l'arrivée d'immigrants britanniques sur les lieux de culte de la colonie.",
    aspects: [{aspect: "Église anglicane"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "eglise_anglicane_1780.png",
            soustitre: "Lieu de culte anglican à Montréal vers 1790",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "La construction d'églises anglicanes.",
    updatedAt: "2026-06-08T14:21:37.586Z"
  },
  {
    id: "Q295",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P3 — 1760 – 1791",
    points: 2,
    soustag: "Différence",
    enonce: "À partir des documents A et B, indiquez une différence entre les écoles catholiques et les écoles anglicanes dans la Province de Québec vers 1790.",
    aspects: [{aspect: "Église anglicane"}, {aspect: "Église catholique"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les Ursulines enseignent le catéchisme et la lecture dans plusieurs établissements qu'elles administrent dans la colonie à la fin du XVIIIᵉ siècle. »",
            source: "Adapté de Micheline Dumont, Les Ursulines de Québec."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Des écoles relevant de l'Église d'Angleterre sont créées après la Conquête afin de répondre aux besoins des nouveaux arrivants établis dans la colonie. »",
            source: "Adapté de John A. Dickinson et Brian Young, Brève histoire socio-économique du Québec."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Les écoles catholiques sont dirigées par l'Église catholique (ou des communautés religieuses catholiques) tandis que les écoles anglicanes sont dirigées par l'Église anglicane.",
    updatedAt: "2026-06-18T23:10:16.008Z"
  },
  {
    id: "Q296",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P3 — 1760 – 1791",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A et B, indiquez s'il y a changement ou continuité dans la présence des institutions religieuses dans la colonie entre 1750 et 1790. Justifiez votre réponse par des faits et un repère de temps.",
    aspects: [{aspect: "Église anglicane"}, {aspect: "Église catholique"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "eglise_catholique_n-f_1700.png",
            soustitre: "Lieu de culte catholique dans la colonie vers 1750",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Après la Conquête, les autorités britanniques mettent en place leurs principales institutions dans la colonie afin de répondre aux besoins de la population nouvellement arrivée. »",
            source: "Adapté de John A. Dickinson et Brian Young, Brève histoire socio-économique du Québec, Septentrion, 2009."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Changement\nIl y a changement, car vers 1790 des institutions de l'Église anglicane sont présentes dans la colonie alors qu'en 1750 les institutions religieuses sont principalement catholiques.\n\nContinuité\nIl y a continuité, car en 1750 comme en 1790, des institutions religieuses jouent un rôle important dans l'enseignement (ou les soins aux malades) dans la colonie.",
    updatedAt: "2026-06-08T15:11:10.844Z"
  },
  {
    id: "Q297",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P3 — 1760 – 1791",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A et B, indiquez s'il y a changement ou continuité dans la diversité des groupes religieux présents dans la colonie entre 1750 et 1790. Justifiez votre réponse par des faits et un repère de temps.",
    aspects: [{aspect: "Église anglicane"}, {aspect: "Église catholique"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Au milieu du XVIIIᵉ siècle, les paroisses catholiques sont présentes dans l'ensemble des régions habitées de la colonie et jouent un rôle important auprès de la population. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 1."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "eglise_anglicane_1780.png",
            soustitre: "Lieu de culte anglican à Montréal vers 1790",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Changement\nIl y a changement, car en 1750 les institutions religieuses présentes dans la colonie sont principalement catholiques, tandis qu'en 1790 des institutions religieuses britanniques (ou anglicanes) sont également présentes.\n\n\nContinuité\nIl y a continuité, car en 1750 comme en 1790, l'Église catholique est présente dans la colonie.",
    updatedAt: "2026-06-08T14:20:42.537Z"
  },
  {
    id: "Q298",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P3 — 1760 – 1791",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A à C présentent la position de trois acteurs sur un enjeu de la vie religieuse vers les années 1790. Nommez l’acteur qui présente une position différente et comparez sa position à celle des deux autres acteurs.",
    aspects: [{aspect: "Situation sociodémographique"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les institutions de l'Église d'Angleterre devraient occuper une place plus importante dans la colonie afin de mieux refléter son appartenance à l'Empire britannique. »",
            auteur: "Adam Lymburner - marchand",
            source: "Adapté des revendications de marchands britanniques de Québec."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les Canadiens doivent pouvoir conserver leurs institutions religieuses et continuer à pratiquer librement la religion catholique. »",
            auteur: "Jean-Olivier Briand - évêque",
            source: "Adapté de Mgr Briand."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Le maintien de la religion catholique contribue à la stabilité de la colonie et favorise la loyauté de la population canadienne. »",
            auteur: "Gouverneur Haldimand",
            source: "Adapté de Frederick Haldimand."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Adam Lymburner s'oppose à la reconnaissance de la religion catholique par les autorités britanniques (la différence), alors que Jean-Olivier Briand et Frederick Haldimand y sont favorables (la similitude).",
    updatedAt: "2026-06-18T23:11:48.519Z"
  },
  {
    id: "Q299",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P3 — 1760 – 1791",
    points: 3,
    enonce: "Expliquez comment les familles canadiennes contribue à l'expansion du territoire occupé dans la Province de Québec vers 1790.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• une caractéristique des familles canadiennes\n• une transformation démographique\n• un effet sur l'occupation du territoire",
    aspects: [{aspect: "Situation sociodémographique"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les familles canadiennes de la fin du XVIIIᵉ siècle comptent souvent plusieurs enfants, ce qui favorise une croissance rapide de la population. »",
            source: "Adapté de Jacques Mathieu, La Nouvelle-France : les Français en Amérique du Nord."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "populaton_1760_1790.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« À la fin du XVIIIᵉ siècle, le peuplement s'étend vers de nouvelles portions de la vallée du Saint-Laurent, où des terres sont défrichées pour répondre aux besoins d'une population croissante. »",
            source: "Adapté de Serge Courville, Le Québec : genèses et mutations du territoire, Presses de l'Université Laval, 2000."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Les familles canadiennes comptent souvent plusieurs enfants (caractéristique des familles canadiennes), ce qui entraîne une augmentation de la population (transformation démographique). Cette croissance démographique favorise le défrichement de nouvelles terres et l'expansion du territoire occupé (effet sur l'occupation du territoire).",
    updatedAt: "2026-06-15T12:27:43.650Z"
  },
  {
    id: "Q300",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P3 — 1760 – 1791",
    points: 3,
    enonce: "Expliquez comment l'immigration britannique transforme la population de la Province de Québec vers 1790.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• un groupe d'immigrants britanniques\n• une transformation démographique\n• un effet sur la composition de la population",
    aspects: [{aspect: "Situation sociodémographique"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Après la Conquête, des marchands, des fonctionnaires et d'anciens militaires britanniques s'établissent dans la Province de Québec afin d'y poursuivre leurs activités. »",
            source: "Adapté de John A. Dickinson et Brian Young, Brève histoire socio-économique du Québec, 2009."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "composition_population_1760-1790.png",
            soustitre: "Composition de la population de la Province de Québec entre 1760 et 1790 (%)",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« L'arrivée de nouveaux habitants venus des îles Britanniques modifie progressivement la composition de la population et accroît la diversité culturelle de la colonie. »",
            source: "Adapté de Gilles Laporte, Histoire du Québec : une société nord-américaine, 2014."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Des marchands, fonctionnaires ou anciens militaires britanniques s'établissent dans la colonie (groupe d'immigrants britanniques). Leur arrivée augmente la proportion d'habitants d'origine britannique (transformation démographique). La composition de la population devient plus diversifiée (effet sur la composition de la population).",
    updatedAt: "2026-06-15T12:27:18.374Z"
  },
  {
    id: "Q301",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P4 — 1791 – 1840",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
    aspects: [{aspect: "Acte constitutionnel"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« En accordant une assemblée élue tout en maintenant l’autorité du gouverneur et de l’exécutif, l’Acte constitutionnel établit les bases des conflits politiques qui marqueront les décennies suivantes. »",
            soustitre: "Acte constitutionnel",
            source: "Allan Greer, Habitants et Patriotes : la Rébellion de 1837 dans les campagnes du Bas-Canada, Montréal, Boréal, 1997."
          }
        ]
      }
    ],
    reponse: {type: "image", ref: "ligne_1790-1850.png"},
    guide: "A",
    updatedAt: "2026-06-09T00:35:03.978Z"
  },
  {
    id: "Q302",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P4 — 1791 – 1840",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
    aspects: [{aspect: "Commerce du bois"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« La fermeture d’une partie des marchés européens aux produits britanniques contribue à faire des ressources forestières du Bas-Canada un élément stratégique pour l’Empire. »",
            soustitre: "Blocus continental",
            source: "Serge Courville, Le Québec : genèses et mutations du territoire, Québec, Presses de l’Université Laval, 2000."
          }
        ]
      }
    ],
    reponse: {type: "image", ref: "ligne_1790-1850.png"},
    guide: "B",
    updatedAt: "2026-06-09T00:36:24.268Z"
  },
  {
    id: "Q303",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P4 — 1791 – 1840",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
    aspects: [{aspect: "Guerre anglo-américaine de 1812"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "carte_bataille_chateauguay.png",
            soustitre: "Bataille de Chateauguay",
            source: "Illustration de C. W. Jefferys, Bibliothèque et Archives Canada."
          }
        ]
      }
    ],
    reponse: {type: "image", ref: "ligne_1790-1850.png"},
    guide: "B",
    updatedAt: "2026-06-09T00:39:05.263Z"
  },
  {
    id: "Q304",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P4 — 1791 – 1840",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
    aspects: [{aspect: "Capitaux et infrastructures"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Le canal de Lachine facilite la circulation des marchandises et contribue à faire de Montréal un centre commercial de première importance. »",
            soustitre: "Inauguration du canal Lachine",
            source: "Serge Courville, Le Québec : un territoire en construction, Québec, Presses de l’Université Laval, 2008."
          }
        ]
      }
    ],
    reponse: {type: "image", ref: "ligne_1790-1850.png"},
    guide: "C",
    updatedAt: "2026-06-16T00:37:02.022Z"
  },
  {
    id: "Q305",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P4 — 1791 – 1840",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
    aspects: [{aspect: "Débats parlementaires"}, {aspect: "Idées libérales et républicaines"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« En adoptant le nom de Parti patriote, le mouvement affirme plus clairement sa volonté de défendre les intérêts de la majorité canadienne. »",
            soustitre: "Le Parti canadien devient le Parti patriote",
            source: "Gilles Laporte, Patriotes et Loyaux : leadership régional et mobilisation politique en 1837 et 1838, Québec, Septentrion, 2004."
          }
        ]
      }
    ],
    reponse: {type: "image", ref: "ligne_1790-1850.png"},
    guide: "C",
    updatedAt: "2026-06-09T00:41:51.882Z"
  },
  {
    id: "Q306",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P4 — 1791 – 1840",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
    aspects: [{aspect: "Soulèvements de 1837-1838"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les Quatre-vingt-douze Résolutions constituent la synthèse des revendications formulées depuis plusieurs années par les élus du Parti patriote. »",
            soustitre: "Adoption des 92 résolutions",
            source: "Gilles Laporte, Brève histoire des Patriotes, Québec, Septentrion, 2015."
          }
        ]
      }
    ],
    reponse: {type: "image", ref: "ligne_1790-1850.png"},
    guide: "C",
    updatedAt: "2026-06-09T00:42:47.579Z"
  },
  {
    id: "Q307",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P4 — 1791 – 1840",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
    aspects: [{aspect: "Soulèvements de 1837-1838"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les affrontements résultent d’un long processus de tensions politiques, sociales et nationales qui s’est développé au sein du Bas-Canada. »",
            soustitre: "Rébellions des Patriotes",
            source: "Allan Greer, Habitants et Patriotes : la Rébellion de 1837 dans les campagnes du Bas-Canada, Montréal, Boréal, 1997."
          }
        ]
      }
    ],
    reponse: {type: "image", ref: "ligne_1790-1850.png"},
    guide: "D",
    updatedAt: "2026-06-09T00:43:35.190Z"
  },
  {
    id: "Q308",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P4 — 1791 – 1840",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
    aspects: [{aspect: "Rapport Durham"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Durham considère que les difficultés politiques de la colonie trouvent leur origine dans l’existence de deux communautés nationales distinctes. »",
            soustitre: "Rapport Durham",
            source: "Michel Brunet, Les Canadiens après la Conquête, 1759-1775, Montréal, Fides, 1969."
          }
        ]
      }
    ],
    reponse: {type: "image", ref: "ligne_1790-1850.png"},
    guide: "D",
    updatedAt: "2026-06-09T00:44:16.294Z"
  },
  {
    id: "Q309",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P4 — 1791 – 1840",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
    aspects: [{aspect: "Capitaux et infrastructures"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "fondation_banque_mtl.png",
            soustitre: "Fondation de la Banque de Montréal",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "image", ref: "ligne_1790-1850.png"},
    guide: "B",
    updatedAt: "2026-06-12T16:05:56.441Z"
  },
  {
    id: "Q310",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P4 — 1791 – 1840",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
    aspects: [{aspect: "Mouvements migratoires"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« L'arrivée de navires transportant des immigrants provoque une crise sanitaire sans précédent. En quelques mois, la maladie se répand rapidement dans les principales villes du Bas-Canada. »",
            soustitre: "Épidémie de choléra",
            source: "Jacques LACOURSIÈRE, Histoire populaire du Québec, tome 2, Québec, Septentrion, 1995."
          }
        ]
      }
    ],
    reponse: {type: "image", ref: "ligne_1790-1850.png"},
    guide: "C",
    updatedAt: "2026-06-09T00:47:35.589Z"
  },
  {
    id: "Q311",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P4 — 1791 – 1840",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
    aspects: [{aspect: "Soulèvements de 1837-1838"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les chefs patriotes exilés proposent alors la création d'un nouvel État et présentent un programme politique inspiré des principes républicains en vigueur aux États-Unis. »",
            soustitre: "Déclaration d'indépendance du Bas-Canada",
            source: "Gilles LAPORTE, Patriotes et Loyaux : leadership régional et mobilisation politique en 1837 et 1838, Québec, Septentrion, 2004."
          }
        ]
      }
    ],
    reponse: {type: "image", ref: "ligne_1790-1850.png"},
    guide: "D",
    updatedAt: "2026-06-09T00:48:25.135Z"
  },
  {
    id: "Q312",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez le continent d'origine des premiers occupants du nord-est de l'Amérique.",
    aspects: [{aspect: "Premiers occupants du territoire"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "carte_premiers_occ_peuplement.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "L'Asie.",
    updatedAt: "2026-06-09T03:11:53.270Z"
  },
  {
    id: "Q313",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez la famille linguistique à laquelle appartiennent les Hurons-Wendat.",
    aspects: [{aspect: "Premiers occupants du territoire"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les Hurons-Wendat font partie des peuples [...] établis dans la région des Grands Lacs. »",
            source: "Bruce G. Trigger, Les Enfants d'Aataentsic : l'histoire du peuple huron, Montréal, Libre Expression, 1991."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Famille linguistique iroquoienne.",
    updatedAt: "2026-06-09T03:13:20.440Z"
  },
  {
    id: "Q314",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez la famille linguistique à laquelle appartiennent les Innus.",
    aspects: [{aspect: "Premiers occupants du territoire"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les Innus occupent un immense territoire correspondant en grande partie au Bouclier canadien. Ils y pratiquent la chasse, la pêche et le piégeage en se déplaçant selon les saisons et les ressources disponibles. »",
            source: "Denys Delâge, Le pays renversé : Amérindiens et Européens en Amérique du Nord-Est, 1600-1664, Montréal, Boréal, 1991."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Famille linguistique algonquienne.",
    updatedAt: "2026-06-09T03:16:19.575Z"
  },
  {
    id: "Q315",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez le mode de vie généralement adopté par les Iroquoiens vers 1500.",
    aspects: [{aspect: "Premiers occupants du territoire"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "village_iroquoien_vers_1500.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Les Iroquoiens ont un mode de vie sédentaire.",
    updatedAt: "2026-06-09T03:21:05.717Z"
  },
  {
    id: "Q316",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez le mode de vie généralement adopté par les Algonquiens vers 1500.",
    aspects: [{aspect: "Premiers occupants du territoire"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "campement_algonquien.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Les Algonquiens ont un mode de vie nomade.",
    updatedAt: "2026-06-09T03:24:57.996Z"
  },
  {
    id: "Q317",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "2 documents",
    enonce: "Les documents A et B présentent des caractéristiques de l’organisation sociale de sociétés autochtones vers 1500. Associez chaque document au type de structure sociale correspondant.",
    aspects: [{aspect: "Rapports sociaux chez les Autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Chez les Iroquoiens, l'appartenance au clan se transmet par la mère. Les femmes occupent une place importante dans l'organisation familiale et sociale. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 1, Québec Amérique, 1995."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Chez plusieurs peuples algonquiens, les groupes de chasse sont dirigés par des hommes et certains rôles ainsi que certains biens sont transmis de père en fils. »",
            source: "Denys Delâge, Le pays renversé : Amérindiens et Européens en Amérique du Nord-Est, 1600-1664, Boréal, 1991."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: ["Société matrilinéaire", "Société patrilinéaire"]
    },
    guide: {
      type: "grille",
      entetes: ["Société matrilinéaire", "Société patrilinéaire"],
      rangees: [
        ["A", "B"]
      ]
    },
    updatedAt: "2026-06-09T12:56:39.995Z"
  },
  {
    id: "Q318",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez le type de structure sociale généralement associé aux sociétés iroquoiennes vers 1500.",
    aspects: [{aspect: "Rapports sociaux chez les Autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "societe_matrilineaire_1500.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Une structure matrilinéaire.",
    updatedAt: "2026-06-09T13:01:41.823Z"
  },
  {
    id: "Q319",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez le type de structure sociale généralement associé aux sociétés algonquiennes vers 1500.",
    aspects: [{aspect: "Rapports sociaux chez les Autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "société_patrilineaire_1500.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Une structure patrilinéaire.",
    updatedAt: "2026-06-09T13:02:29.886Z"
  },
  {
    id: "Q320",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez le nom du personnage qui joue un rôle spirituel important lors des cérémonies ou des rituels chez plusieurs peuples autochtones.",
    aspects: [{aspect: "Rapports sociaux chez les Autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "tradition_chamanique_1500.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Le chaman.",
    updatedAt: "2026-06-09T13:07:09.304Z"
  },
  {
    id: "Q321",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez un sort réservé aux prisonniers capturés lors de conflits entre nations autochtones vers 1500.",
    aspects: [{aspect: "Alliances et rivalités au sein des Premières Nations"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "prisonnier_autochtone_1500.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "L'adoption.",
    updatedAt: "2026-06-09T14:09:09.338Z"
  },
  {
    id: "Q322",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez un moyen utilisé par certaines nations autochtones pour défendre leur territoire vers 1500.",
    aspects: [{aspect: "Alliances et rivalités au sein des Premières Nations"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "raids_autochtones.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "La guerre ou les expéditions guerrières.",
    updatedAt: "2026-06-09T14:15:52.334Z"
  },
  {
    id: "Q323",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez le groupe de personnes qui désignent les chefs dans les sociétés iroquoiennes.",
    aspects: [{aspect: "Prise de décision chez les Autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "prise_decision_iroquoiens.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Les femmes de la commaunauté ou les mères de clan.",
    updatedAt: "2026-06-09T14:28:10.753Z"
  },
  {
    id: "Q324",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez un rôle exercé par les aînés dans plusieurs sociétés autochtones vers 1500.",
    aspects: [{aspect: "Prise de décision chez les Autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "tradition_chamanique_aines_1500.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Transmettre les connaissances ou les traditions ou les valeurs.",
    updatedAt: "2026-06-09T14:36:44.054Z"
  },
  {
    id: "Q325",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez le nom du premier gouverneur de la Nouvelle-France.",
    aspects: [{aspect: "Gouvernement royal"}, {aspect: "Monopole des compagnies"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "samuel_champlain.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Samuel de Champlain.",
    updatedAt: "2026-06-09T15:09:50.360Z"
  },
  {
    id: "Q326",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez le nom du premier intendant de la Nouvelle-France.",
    aspects: [{aspect: "Gouvernement royal"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "jean_talon.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Jean Talon.",
    updatedAt: "2026-06-09T15:14:15.470Z"
  },
  {
    id: "Q327",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P2 — 1608 – 1760",
    points: 1,
    enonce: "Indiquez le nom du premier évêque de la Nouvelle-France.",
    aspects: [{aspect: "Église catholique"}, {aspect: "Gouvernement royal"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "monseigneur_laval_eveque.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "François de Montmorency-Laval ou Monseigneur de Laval.",
    updatedAt: "2026-06-09T15:18:51.495Z"
  },
  {
    id: "Q328",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P2 — 1608 – 1760",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une raison qui pousse le roi de France à instaurer le Conseil souverain en 1663.",
    aspects: [{aspect: "Gouvernement royal"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« En 1663, le roi Louis XIV retire à la Compagnie des Cent-Associés la responsabilité d'administrer la colonie et instaure le gouvernement royal. Il crée alors le Conseil souverain afin d'assurer une meilleure administration de la Nouvelle-France. »",
            source: "Adapté de Marcel Trudel, Histoire de la Nouvelle-France."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Mieux administrer la colonie ou exercer un contrôle plus direct sur la colonie ou instaurer le gouvernement royal ou la mauvaise administration de la colonie.",
    updatedAt: "2026-06-09T15:26:55.277Z"
  },
  {
    id: "Q329",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P4 — 1791 – 1840",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A et B, indiquez s’il y a changement ou continuité dans l’organisation politique de la colonie entre 1774 et 1791. Justifiez votre choix par des faits et un repère de temps.",
    aspects: [{aspect: "Acte constitutionnel"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "org_pol_1774_acte_quebec.png",
            soustitre: "Organisation politique de la colonie entre 1774 et 1791",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "org_pol_1791_acte_const.png",
            soustitre: "Organisation politique de la colonie à partir de 1791",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Changement\nIl y a changement, car en 1791, l’Acte constitutionnel crée une Chambre d’assemblée élue par la population et divise la colonie en Haut-Canada et Bas-Canada, alors qu’en 1774, la Province de Québec ne possède pas de Chambre d’assemblée et forme une seule colonie.\n\nou \n\nIl y a changement, car en 1791, chaque colonie possède une Chambre d’assemblée élue, tandis qu’en 1774, le gouverneur dirige avec le Conseil exécutif et le Conseil législatif sans assemblée élue.\n\nContinuité\nIl y a continuité, car en 1774 comme en 1791, le gouverneur demeure nommé par les autorités britanniques et conserve un rôle important dans l'administration de la colonie.",
    updatedAt: "2026-06-12T12:02:01.545Z"
  },
  {
    id: "Q330",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Changement",
    enonce: "À partir des documents A et B, indiquez un changement concernant la représentation politique de la population entre 1774 et 1791.",
    aspects: [{aspect: "Acte constitutionnel"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "org_pol_1774_acte_quebec.png",
            soustitre: "Organisation politique de la colonie après 1774",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "org_pol_1791_acte_const.png",
            soustitre: "Organisation politique de la colonie après 1791",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Entre 1774 et 1791, la population obtient des représentants élus grâce à la création d'une Chambre d'assemblée dans le Bas-Canada et le Haut-Canada.\n\nou\n\nEn 1791, la population peut élire des députés à la Chambre d'assemblée, alors qu'en 1774 elle ne participe pas à l'élection d'une institution politique.",
    updatedAt: "2026-06-12T12:07:24.684Z"
  },
  {
    id: "Q331",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez le nom de l’institution composée de députés élus créée par l’Acte constitutionnel.",
    aspects: [{aspect: "Acte constitutionnel"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "org_pol_1791_acte_const.png",
            soustitre: "Organisation politique du Haut-Canada et du Bas-Canada après 1791",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Chambre d'assemblée ou assemblée législative.",
    updatedAt: "2026-06-12T12:02:29.636Z"
  },
  {
    id: "Q332",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P4 — 1791 – 1840",
    points: 2,
    enonce: "Indiquez un changement apporté au territoire de la Province de Québec par l’Acte constitutionnel de 1791.",
    aspects: [{aspect: "Acte constitutionnel"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_province_quebec_1783.png", source: "Récitus."}]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "carte_acte_constitutionnel_1791.png",
            source: "Récitus",
            soustitre: "carte_acte_constitutionnel_1791"
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "La Province de Québec est divisée en Haut-Canada et Bas-Canada ou création du Haut-Canada ou création du Bas-Canada ou le territoire de la colonie est partagé en deux colonies distinctes.",
    updatedAt: "2026-06-09T18:46:14.794Z"
  },
  {
    id: "Q333",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Différence",
    enonce: "Indiquez une différence entre le Conseil législatif et le Conseil exécutif sous l'Acte constitutionnel.",
    aspects: [{aspect: "Acte constitutionnel"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les membres du [Conseil] sont appelés à étudier les projets présentés aux institutions de la colonie. Leur intervention vise notamment à examiner les mesures proposées avant qu'elles ne soient mises en application. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 2"
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Autour du gouverneur se trouvent quelques conseillers qui l'assistent dans la gestion des affaires de la colonie. Ces hommes participent aux discussions concernant l'administration et l'application des décisions gouvernementales. »",
            source: "Gilles Laporte, Brève histoire politique du Québec"
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Le Conseil législatif participe à l'adoption des lois, tandis que le Conseil exécutif conseille le gouverneur dans l'administration de la colonie.\nLe Conseil législatif exerce un rôle législatif, alors que le Conseil exécutif exerce un rôle administratif.\nLe Conseil législatif étudie et approuve les projets de loi, tandis que le Conseil exécutif aide le gouverneur à gouverner la colonie.",
    updatedAt: "2026-06-18T23:13:02.456Z"
  },
  {
    id: "Q334",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez une condition nécessaire pour exercer le droit de vote dans le Bas-Canada après 1791.",
    aspects: [{aspect: "Acte constitutionnel"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Le droit de vote est accordé aux personnes qui possèdent des biens d'une valeur minimale déterminée par la loi. Cette règle s'applique dans les circonscriptions du Bas-Canada lors des élections de la Chambre d'assemblée. »",
            source: "Adapté de Yvan Lamonde, Histoire sociale des idées au Québec."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Posséder une propriétéou répondre à une exigence de propriété foncière ou être propriétaire d'un bien d'une certaine valeur.",
    updatedAt: "2026-06-09T19:01:10.952Z"
  },
  {
    id: "Q335",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Divergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis sont-ils en désaccord ?",
    aspects: [{aspect: "Acte constitutionnel"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les femmes qui possèdent les qualifications exigées par la loi doivent pouvoir exercer les mêmes droits électoraux que les hommes. »",
            source: "Adapté d'un discours de Pierre-Stanislas Bédard, début du XIXe siècle."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« La participation des femmes aux élections ne correspond pas au rôle qu'elles doivent jouer dans la société et cette pratique devrait être abandonnée. »",
            source: "Adapté d'un discours d'un député du Bas-Canada, début du XIXe siècle."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Le droit de vote des femmes.",
    updatedAt: "2026-06-18T23:14:10.947Z"
  },
  {
    id: "Q336",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A à C présentent le point de vue de trois acteurs sur le droit de vote des femmes dans le Bas-Canada. Nommez l'acteur qui présente une position différente et comparez sa position à celle des deux autres acteurs.",
    aspects: [{aspect: "Acte constitutionnel"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« La loi n'exclut pas les femmes propriétaires du droit de vote. Lorsqu'elles remplissent les conditions exigées, elles peuvent participer aux élections comme les autres propriétaires. »",
            auteur: "Louis-Joseph Papineau, député du Bas-Canada.",
            source: "Adapté de : Fernand Ouellet, Louis-Joseph Papineau : un être divisé, Québec, Septentrion, 2010."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Rien dans la Constitution ne justifie que l'on prive une propriétaire de l'exercice d'un droit que la loi lui reconnaît. »",
            auteur: "John Neilson, député du Bas-Canada.",
            source: "Adapté de : Hilda Neatby, Quebec: The Revolutionary Age 1760-1791, McClelland and Stewart."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Les élections doivent demeurer l'affaire des hommes; la participation des femmes à la vie politique ne correspond pas aux responsabilités qui leur reviennent dans la société. »",
            auteur: "Denis-Benjamin Viger, homme politique du Bas-Canada.",
            source: "Adapté de : Collectif, Dictionnaire biographique du Canada, notice sur Denis-Benjamin Viger."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Viger souhaite abolir le droit de vote des femmes propriétaires (la différence), alors que Papineau et Neilson souhaitent le maintenir (la similitude).",
    updatedAt: "2026-06-18T23:16:12.545Z"
  },
  {
    id: "Q337",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une cause de la création de la Chambre d’assemblée par l’Acte constitutionnel de 1791.",
    aspects: [{aspect: "Acte constitutionnel"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Plusieurs nouveaux habitants venus des Treize Colonies souhaitent obtenir des institutions politiques semblables à celles qu'ils connaissaient auparavant. »",
            source: "Adapté de Gilles Laporte, Brève histoire du Québec."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Les Loyalistes veulent des institutions politiques semblables à celles des anciennes colonies britanniques ou les nouveaux arrivants réclament une assemblée élue.",
    updatedAt: "2026-06-09T19:09:15.453Z"
  },
  {
    id: "Q338",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P4 — 1791 – 1840",
    points: 3,
    enonce: "Expliquez comment la constitution mise en place par les autorités britanniques en 1791 favorise la participation politique de la population.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• le nom de cette constitution\n• une institution politique créée par cette constitution\n• une conséquence sur la représentation politique de la population",
    aspects: [{aspect: "Acte constitutionnel"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "elections_bas-canada_1792.png",
            soustitre: "Vote lors des premières élections du Bas-Canada",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Adoptée en 1791, cette constitution réorganise le gouvernement colonial en créant de nouvelles institutions politiques et en accordant à une partie de la population un rôle dans leur fonctionnement. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 2."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "institutions_politiques_acte_const_1791.png",
            soustitre: "Mode de désignation des institutions politiques du Bas-Canada",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "L'Acte constitutionnel de 1791 permet l'élection d'une Chambre d'assemblée (nom de la constitution, institution politique créée par cette constitution). Une partie de la population peut alors choisir des députés, ce qui augmente sa représentation politique (conséquence sur la représentation politique de la population).",
    updatedAt: "2026-06-15T12:24:21.488Z"
  },
  {
    id: "Q339",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence du pouvoir du gouverneur sur les décisions prises par la Chambre d’assemblée.",
    aspects: [{aspect: "Débats parlementaires"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "Les projets de loi adoptés par la Chambre d’assemblée doivent être approuvés par le gouverneur avant d’entrer en vigueur. Celui-ci peut refuser de sanctionner certaines mesures proposées par les députés. »",
            source: "Adapté de Gilles Laporte, Brève histoire politique du Québec."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Le gouverneur dispose d'un droit de veto ou le gouverneur peut empêcher l'application d'une loi adoptée par la Chambre d'assemblée.",
    updatedAt: "2026-06-10T01:03:15.389Z"
  },
  {
    id: "Q340",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez un pouvoir exercé par le gouverneur dans le Bas-Canada au début du XIXe siècle.",
    aspects: [{aspect: "Débats parlementaires"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "org_pol_1791_acte_const.png",
            soustitre: "Organisation politique du Haut-Canada et du Bas-Canada après 1791",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Le gouverneur sanctionne ou refuse les lois ou nomme les membres du Conseil exécutif ou nomme les membres du Conseil législatif ou convoque ou dissout la Chambre d'assemblée ou représente la Couronne britannique ou dirige l'administration de la colonie.",
    updatedAt: "2026-06-12T12:03:00.453Z"
  },
  {
    id: "Q341",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Différence",
    enonce: "À partir des documents A et B, indiquez une différence entre les positions politiques du Parti canadien et du Parti bureaucrate au début du XIXe siècle.",
    aspects: [{aspect: "Débats parlementaires"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Plusieurs députés souhaitent que les élus de la Chambre d’assemblée exercent une plus grande influence sur les affaires de la colonie et défendent les intérêts de la majorité canadienne-française. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 2."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« D’autres députés appuient le maintien de l’autorité du gouverneur et des institutions nommées. Ils considèrent que la stabilité politique repose sur le lien avec les autorités britanniques. »",
            source: "Adapté de Gilles Laporte, Brève histoire politique du Québec."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Le Parti canadien réclame davantage de pouvoir pour la Chambre d’assemblée, tandis que le Parti bureaucrate défend le maintien de l’autorité du gouverneur et des conseils nommés.\n\nLe Parti canadien souhaite des réformes politiques, alors que le Parti bureaucrate appuie le régime colonial en place.\n\nLe Parti canadien veut accroître le pouvoir des représentants élus, tandis que le Parti bureaucrate favorise le maintien du pouvoir entre les mains des autorités nommées.\n\nLe Parti canadien défend les intérêts de la majorité canadienne-française, tandis que le Parti bureaucrate soutient principalement les intérêts de l'administration coloniale britannique.",
    updatedAt: "2026-06-18T23:16:58.955Z"
  },
  {
    id: "Q342",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P4 — 1791 – 1840",
    points: 2,
    enonce: "Les documents A à D font référence aux principaux partis politiques du Bas-Canada au début du XIXe siècle. Inscrivez la lettre de chaque document à l'endroit approprié.",
    aspects: [{aspect: "Débats parlementaires"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les représentants du peuple doivent pouvoir surveiller l'administration et veiller à ce que les fonds publics soient utilisés selon les besoins de la population de cette province. »",
            source: "Pierre-Stanislas Bédard, discours à la Chambre d'assemblée du Bas-Canada, vers 1809. Texte adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les habitants de cette colonie bénéficient déjà d'un gouvernement stable. Les changements réclamés par certains députés risquent davantage de provoquer des divisions que d'améliorer l'administration publique. »",
            source: "John Richardson, marchand britannique de Québec, vers 1810. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Les élus de la Chambre d'assemblée doivent obtenir un contrôle plus important sur les revenus de la colonie afin de mieux représenter les intérêts des habitants. »",
            source: "Louis-Joseph Papineau, discours à la Chambre d'assemblée, vers 1820. Texte adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« Les lois et les institutions héritées de la Grande-Bretagne assurent la prospérité de la colonie. Il serait imprudent d'accorder davantage de pouvoir à une assemblée soumise aux pressions populaires. »",
            source: "Extrait adapté du Quebec Mercury, journal anglophone de Québec, vers 1815."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: ["Parti canadien", "Parti bureaucrate"],
      double: true
    },
    guide: {
      type: "grille",
      entetes: ["Parti canadien", "Parti bureaucrate"],
      rangees: [
        ["A et C", "B et D"]
      ]
    },
    updatedAt: "2026-06-10T01:12:03.569Z"
  },
  {
    id: "Q343",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez un sujet débattu à la Chambre d’assemblée du Bas-Canada au début du XIXe siècle.",
    aspects: [{aspect: "Débats parlementaires"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "debats_parlementaires.png",
            soustitre: "Débats parlementaires à la Chambre d'assemblée",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Le contrôle des finances publiques ou l'utilisation des revenus de la colonie ou le budget de la colonie.",
    updatedAt: "2026-06-10T01:16:31.294Z"
  },
  {
    id: "Q344",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "3 documents",
    enonce: "Les documents A à C présentent des sujets débattus à la Chambre d’assemblée du Bas-Canada au début du XIXe siècle. Associez chaque document à l’enjeu politique correspondant.",
    aspects: [{aspect: "Débats parlementaires"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Aucune administration ne peut demeurer stable si l'autorité confiée au représentant du souverain est constamment remise en question par les députés élus. »",
            source: "Jonathan Sewell, Conseil législatif du Bas-Canada, vers 1810. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les habitants de cette province doivent pouvoir exercer une influence réelle sur les décisions publiques par l'intermédiaire des personnes qu'ils ont librement choisies. »",
            source: "Louis-Joseph Papineau, Chambre d'assemblée du Bas-Canada, vers 1828. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Les représentants de la population ne devraient pas être exclus lorsqu'il s'agit de décider de l'utilisation des revenus prélevés dans la colonie auprès des habitants. »",
            source: "Pierre-Stanislas Bédard, Chambre d'assemblée du Bas-Canada, vers 1809. Adapté."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: ["Contrôle des finances publiques", "Pouvoir du gouverneur", "Représentation politique"]
    },
    guide: {
      type: "grille",
      entetes: ["Contrôle des finances publiques", "Pouvoir du gouverneur", "Représentation politique"],
      rangees: [
        ["C", "A", "B"]
      ]
    },
    updatedAt: "2026-06-10T01:22:12.195Z"
  },
  {
    id: "Q345",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P1 — Des origines à 1608",
    points: 3,
    enonce: "Expliquez comment le territoire occupé par les Iroquoiens détermine leur mode de vie.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• Une particularité du sol dans les basses terres du Saint-Laurent \n• La principale activité de subsistance pratiquée par les Iroquoiens \n• Le mode de vie des Iroquoiens",
    aspects: [{aspect: "Premiers occupants du territoire"}, {aspect: "Réseaux d'échange autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les Iroquoiens occupent les basses terres du Saint-Laurent, une région caractérisée par des sols fertiles et un climat relativement favorable. Ces conditions naturelles permettent la culture de plantes alimentaires sur une base régulière. »",
            source: "Bruce G. Trigger, Les Enfants d'Aataentsic : l'histoire du peuple huron, Montréal, Libre Expression, 1991, p. 35-36. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "village_iroquoien_vers_1500.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Puisqu’ils cultivent la terre et récoltent leurs aliments au même endroit, les Iroquoiens vivent dans des villages permanents composés de maisons longues où résident plusieurs familles apparentées. »",
            source: "Marcel Trudel, Histoire de la Nouvelle-France, tome II : Le comptoir, 1604-1627, Montréal, Fides, 1966, p. 18-19. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 5},
    guide: "Les basses terres du Saint-Laurent possèdent des sols fertiles favorables à l'agriculture (une particularité du sol dans les basses terres du Saint-Laurent). Cette caractéristique permet aux Iroquoiens de cultiver principalement le maïs (la principale activité de subsistance pratiquée par les Iroquoiens). Comme ils produisent leur nourriture au même endroit, ils vivent dans des villages permanents et adoptent un mode de vie sédentaire (le mode de vie des Iroquoiens).",
    updatedAt: "2026-06-10T15:39:45.208Z"
  },
  {
    id: "Q346",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P1 — Des origines à 1608",
    points: 3,
    enonce: "Expliquez comment le territoire occupé par les Algonquiens détermine leur mode de vie.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• Une caractéristique du territoire occupé par les Algonquiens\n• La principale activité de subsistance pratiquée par les Algonquiens\n• Le mode de vie des Algonquiens",
    aspects: [{aspect: "Premiers occupants du territoire"}, {aspect: "Réseaux d'échange autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les Algonquiens occupent principalement le Bouclier canadien, une vaste région couverte de forêts et de nombreux cours d’eau. Les sols y sont généralement peu favorables à l’agriculture à grande échelle. »",
            source: "Alain Beaulieu, Stéphanie Béreau et Jean Tanguay, Les Autochtones du Québec : des premières alliances aux revendications contemporaines, Montréal, Fides, 2013, p. 22-23. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "campement_algonquien.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Comme les ressources sont dispersées sur un vaste territoire et varient selon les saisons, les groupes algonquiens se déplacent régulièrement afin d'exploiter les différentes zones de chasse et de pêche. »",
            source: "Denys Delâge, Le Pays renversé, Montréal, Boréal, 1991, p. 33-34. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 5},
    guide: "Les Algonquiens occupent un territoire forestier dont les sols sont peu favorables à l’agriculture (une caractéristique du territoire occupé par les Algonquiens). Ils pratiquent donc principalement la chasse et la pêche pour se nourrir (la principale activité de subsistance pratiquée par les Algonquiens). Comme les ressources sont dispersées sur le territoire, ils se déplacent selon les saisons et adoptent un mode de vie nomade (le mode de vie des Algonquiens).",
    updatedAt: "2026-06-10T15:55:11.597Z"
  },
  {
    id: "Q347",
    niveau: 3,
    oi: "Situer dans l'espace",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "Situer 2 éléments",
    enonce: "À partir du document A, indiquez les deux lettres qui correspondent aux principaux lieux d’échanges entre les nations autochtones vers les années 1500.\n\n• le confluent de l’Outaouais\n• le confluent du Saguenay",
    aspects: [{aspect: "Réseaux d'échange autochtones"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_lieux_echanges.png", source: "Carte du Québec. Adaptée d'après d-maps.com."}]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: ["Confluent de l'Outaouais", "Confluent du Saguenay"]
    },
    guide: {
      type: "grille",
      entetes: ["Confluent de l'Outaouais", "Confluent du Saguenay"],
      rangees: [
        ["A", "C"]
      ]
    },
    updatedAt: "2026-06-10T19:10:40.934Z"
  },
  {
    id: "Q348",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P1 — Des origines à 1608",
    points: 2,
    soustag: "3 documents",
    enonce: "Les documents A à C présentent des aspects des alliances et des rivalités entre les Premières Nations vers 1500. Associez chaque document à l'élément correspondant.",
    aspects: [{aspect: "Alliances et rivalités au sein des Premières Nations"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Afin de mieux se défendre contre leurs ennemis et d'accroître leur influence, plusieurs nations concluent des ententes avec d'autres groupes et coordonnent leurs actions lors des conflits. »",
            source: "Denys Delâge, Le Pays renversé, adaptation."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Certaines nations cherchent à contrôler des territoires de chasse, des voies de circulation ou des lieux d'échange qui leur procurent des ressources et des avantages stratégiques. »",
            source: "Alain Beaulieu, Les Autochtones du Québec, adaptation."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Les prisonniers capturés lors des affrontements peuvent être adoptés afin de remplacer des membres décédés ou être exécutés selon les traditions de la nation victorieuse. »",
            source: "Bruce G. Trigger, Les Enfants d'Aataentsic, adaptation."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: ["Objets de rivalité", "Système d'alliances", "Sort des prisonniers"]
    },
    guide: {
      type: "grille",
      entetes: ["Objets de rivalité", "Système d'alliances", "Sort des prisonniers"],
      rangees: [
        ["B", "A", "C"]
      ]
    },
    updatedAt: "2026-06-10T17:23:45.679Z"
  },
  {
    id: "Q349",
    niveau: 3,
    oi: "Situer dans l'espace",
    periode: "P1 — Des origines à 1608",
    points: 1,
    soustag: "Situer 1 élément",
    enonce: "À partir du document A, indiquez la lettre qui correspond à l’endroit où Jacques Cartier prend possession du territoire au nom du roi de France en 1534.",
    aspects: [{aspect: "Exploration et occupation du territoire par les Français"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_cartier_1534.png", source: "Carte du Québec. Adaptée d'après d-maps.com."}]
      }
    ],
    reponse: {type: "tableau_2col"},
    guide: "B",
    updatedAt: "2026-06-10T18:59:04.977Z"
  },
  {
    id: "Q350",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P1 — Des origines à 1608",
    points: 3,
    enonce: "Expliquez comment une alliance conclue entre les Français et certaines nations autochtones en 1603 favorise l’occupation du territoire par les Français. \n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux .\n\n• le nom de l'alliance conclue en 1603\n• un avantage procuré aux Français par cette alliance\n• une conséquence sur l'occupation du territoire par les Français",
    aspects: [{aspect: "Exploration et occupation du territoire par les Français"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Grâce à l'appui de leurs alliés autochtones, les Français réussissent à maintenir leur présence dans la vallée du Saint-Laurent et à établir des postes permanents qui assurent progressivement leur occupation du territoire. »",
            source: "Alain Beaulieu, Stéphanie Béreau et Jean Tanguay, Les Autochtones du Québec : des premières alliances aux revendications contemporaines, Montréal, Fides, 2013, p. 64-65. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les alliés autochtones transmettent aux Français leurs connaissances des voies navigables, des ressources et des peuples occupant le territoire. Cette collaboration facilite les déplacements et les explorations dans l'intérieur du continent. »",
            source: "Denys Delâge, Le Pays renversé : Amérindiens et Européens en Amérique du Nord-Est, 1600-1664, Montréal, Boréal, 1991, p. 52-53. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "alliance_franco-ame.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 5},
    guide: "L'alliance franco-amérindienne de 1603 (le nom de l'alliance conclue en 1603) permet aux Français de bénéficier des connaissances du territoire et des voies de circulation transmises par leurs alliés autochtones (un avantage procuré aux Français par cette alliance). Cette aide favorise leur établissement permanent et leur présence dans la vallée du Saint-Laurent (une conséquence sur l'occupation du territoire par les Français).",
    updatedAt: "2026-06-15T12:25:12.611Z"
  },
  {
    id: "Q351",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P1 — Des origines à 1608",
    points: 1,
    enonce: "Indiquez le nom de la première alliance conclue entre les Français et certaines nations autochtones en 1603.",
    aspects: [{aspect: "Exploration et occupation du territoire par les Français"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« En 1603, à Tadoussac, les Français concluent une alliance avec les Innus, les Algonquins et les Wendats. Cette entente marque le début d'une collaboration durable entre les alliés. »",
            source: "Alain Beaulieu, Stéphanie Béreau et Jean Tanguay, Les Autochtones du Québec : des premières alliances aux revendications contemporaines, Montréal, Fides, 2013, p. 63. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "L'alliance franco-amérindienne de 1603",
    updatedAt: "2026-06-10T19:11:19.139Z"
  },
  {
    id: "Q352",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P1 — Des origines à 1608",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A à C présentent le point de vue de trois historiens sur les conséquences des premiers contacts entre les Autochtones et les Européens. Nommez l'historien qui présente une position différente et comparez sa position à celle des deux autres historiens.",
    aspects: [{aspect: "Premiers contacts"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Pour plusieurs nations autochtones, les premiers contacts avec les Européens permettent d'obtenir de nouveaux biens recherchés, notamment des outils de métal qui améliorent certaines activités quotidiennes et renforcent les réseaux d'échange existants. »",
            auteur: "Bruce G. Trigger",
            source: "Bruce G. Trigger, Les Enfants d'Aataentsic : l'histoire du peuple huron, Montréal, Libre Expression, 1991, p. 314. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les échanges avec les Européens procurent à plusieurs groupes autochtones des avantages économiques et stratégiques. Ces contacts favorisent également la création de nouvelles alliances qui renforcent leur influence dans la région. »",
            auteur: "Alain Beaulieu",
            source: "Alain Beaulieu, Les Autochtones du Québec : des premières alliances aux revendications contemporaines, Montréal, Fides, 2013, p. 41. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Derrière les avantages immédiats des échanges se profilent d'importants bouleversements. Les contacts avec les Européens contribuent progressivement à transformer les sociétés autochtones et à les rendre plus dépendantes du commerce européen. »",
            auteur: "Denys Delâge",
            source: "Denys Delâge, Le Pays renversé : Amérindiens et Européens en Amérique du Nord-Est, 1600-1664, Montréal, Boréal, 1991, p. 74. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Denys Delâge considère que les premiers contacts entraînent surtout des conséquences négatives pour les Autochtones, alors que Bruce G. Trigger et Alain Beaulieu estiment qu'ils procurent principalement des avantages aux peuples autochtones.",
    updatedAt: "2026-06-18T23:17:41.070Z"
  },
  {
    id: "Q353",
    niveau: 3,
    oi: "Situer dans l'espace",
    periode: "P1 — Des origines à 1608",
    points: 1,
    soustag: "Situer 1 élément",
    enonce: "À partir du document A, indiquez la lettre qui correspond au continent que les Européens tentent de rejoindre en cherchant une nouvelle route maritime à la fin du XVe siècle.",
    aspects: [{aspect: "Premiers contacts"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_monde.png", source: "Carte du monde. Adaptée d'après d-maps.com."}]
      }
    ],
    reponse: {type: "tableau_2col"},
    guide: "D",
    updatedAt: "2026-06-10T18:48:29.025Z"
  },
  {
    id: "Q354",
    niveau: 3,
    oi: "Situer dans l'espace",
    periode: "P1 — Des origines à 1608",
    points: 1,
    soustag: "Situer 1 élément",
    enonce: "À partir du document A, indiquez la lettre qui correspond à la région d'Amérique du Nord explorée par plusieurs Européens au XVIe siècle.",
    aspects: [{aspect: "Premiers contacts"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_amerique_nord.png", source: "Carte d'Amérique du Nord. Adaptée d'après d-maps.com."}]
      }
    ],
    reponse: {type: "tableau_2col"},
    guide: "C",
    updatedAt: "2026-06-10T19:04:25.412Z"
  },
  {
    id: "Q355",
    niveau: 3,
    oi: "Situer dans l'espace",
    periode: "P1 — Des origines à 1608",
    points: 1,
    soustag: "Situer 1 élément",
    enonce: "À partir du document A, indiquez la lettre qui correspond à la principale région fréquentée par les pêcheurs européens pratiquant la pêche à la morue au XVIe siècle.",
    aspects: [{aspect: "Premiers contacts"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "carte_golfe_st-laurent.png",
            source: "Carte d'Amérique du Nord. Adaptée d'après d-maps.com."
          }
        ]
      }
    ],
    reponse: {type: "tableau_2col"},
    guide: "C",
    updatedAt: "2026-06-10T19:09:29.534Z"
  },
  {
    id: "Q356",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "3 documents",
    enonce: "Les documents A à C présentent des groupes politiques actifs au Bas-Canada au début du XIXe siècle. Associez chaque document au groupe politique correspondant.",
    aspects: [{aspect: "Débats parlementaires"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Tant que les membres du Conseil législatif seront nommés plutôt qu’élus, les droits du peuple ne seront pas pleinement respectés. »",
            source: "Louis-Joseph Papineau, député du Parti patriote, 1834."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Le gouverneur doit conserver les pouvoirs nécessaires à l’administration de la colonie, car l’intérêt général ne peut dépendre uniquement des décisions de l’Assemblée. »",
            source: "Jonathan Sewell, conseiller exécutif et chef du Parti bureaucrate, vers 1810."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« La Chambre d’assemblée doit obtenir le contrôle des revenus publics, puisqu’il est juste que les représentants du peuple participent à l’administration des finances de la colonie. »",
            source: "Pierre-Stanislas Bédard, député du Parti canadien, vers 1809."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: ["Parti bureaucrate", "Parti canadien", "Parti patriote"]
    },
    guide: {
      type: "grille",
      entetes: ["Parti bureaucrate", "Parti canadien", "Parti patriote"],
      rangees: [
        ["B", "A", "C"]
      ]
    },
    updatedAt: "2026-06-11T00:18:22.681Z"
  },
  {
    id: "Q357",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "3 documents",
    enonce: "Les documents A à C présentent des groupes politiques actifs au Bas-Canada au début du XIXe siècle. Associez chaque document au groupe politique correspondant.",
    aspects: [{aspect: "Débats parlementaires"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Nous réclamons des réformes qui permettront aux représentants élus de la population d’exercer une influence réelle sur le gouvernement de cette province. »",
            source: "Louis-Joseph Papineau, député du Parti patriote, 1834."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les institutions établies par la Couronne assurent la stabilité du gouvernement et doivent être protégées contre les tentatives visant à réduire leur autorité. »",
            source: "Herman Witsius Ryland, fonctionnaire colonial et partisan du Parti bureaucrate, vers 1811."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Les habitants de cette province ont le droit d’être représentés et de voir leurs intérêts défendus par les députés qu’ils ont librement élus. »",
            source: "Pierre-Stanislas Bédard, député du Parti canadien, vers 1810."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: ["Parti bureaucrate", "Parti canadien", "Parti patriote"]
    },
    guide: {
      type: "grille",
      entetes: ["Parti bureaucrate", "Parti canadien", "Parti patriote"],
      rangees: [
        ["B", "C", "A"]
      ]
    },
    updatedAt: "2026-06-11T00:19:34.494Z"
  },
  {
    id: "Q358",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez le groupe de population majoritaire dans le Bas-Canada au début du XIXe siècle.",
    aspects: [{aspect: "Nationalismes"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "population_bas-canada_1800.png",
            soustitre: "Répartition de la population du Bas-Canada vers 1810",
            source: "Adapté de Fernand Ouellet, Le Bas-Canada 1791-1840 : changements structuraux et crise, Ottawa, Éditions de l'Université d'Ottawa, 1976."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Canadien français \nPopulation canadienne-française",
    updatedAt: "2026-06-11T15:20:43.662Z"
  },
  {
    id: "Q359",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez la langue parlée par la majorité de la population du Bas-Canada au début du XIXe siècle.",
    aspects: [{aspect: "Nationalismes"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "langues_parlees_bas-canada_1800.png",
            soustitre: "Répartition des langues parlées au Bas-Canada vers 1810",
            source: "Adapté de Fernand Ouellet, Le Bas-Canada 1791-1840 : changements structuraux et crise, Ottawa, Éditions de l'Université d'Ottawa."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Français.",
    updatedAt: "2026-06-12T00:23:21.676Z"
  },
  {
    id: "Q360",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "4 documents",
    enonce: "Les documents A à D présentent des revendications formulées au début du XIXe siècle. Associez chaque document au courant de pensée correspondant.",
    aspects: [{aspect: "Nationalismes"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les revenus de la colonie devraient être administrés sous la surveillance des représentants élus par la population, puisque ceux-ci sont les mieux placés pour défendre les intérêts du pays. »",
            source: "Pierre-Stanislas Bédard, député du Parti canadien, vers 1809. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Le gouverneur et les conseils nommés par la Couronne doivent conserver leurs pouvoirs afin d'assurer la stabilité politique et de protéger les intérêts de l'Empire britannique. »",
            source: "Jonathan Sewell, conseiller exécutif du Bas-Canada, vers 1810. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Les habitants du Bas-Canada ont le droit de voir leur langue, leurs lois et leurs institutions respectées au sein du gouvernement colonial. »",
            source: "Louis-Joseph Papineau, député du Parti canadien, vers 1815. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« Les institutions établies par la Grande-Bretagne ont assuré la prospérité de la colonie et doivent être préservées contre les demandes de réforme excessives. »",
            source: "Herman Witsius Ryland, fonctionnaire colonial, vers 1811. Adapté."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: ["Nationalisme britannique", "Nationalisme canadien"],
      double: true
    },
    guide: {
      type: "grille",
      entetes: ["Nationalisme britannique", "Nationalisme canadien"],
      rangees: [
        ["B et D", "A et C"]
      ]
    },
    updatedAt: "2026-06-11T01:34:06.301Z"
  },
  {
    id: "Q361",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "4 documents",
    enonce: "Les documents A à D présentent des acteurs politiques du Bas-Canada au début du XIXe siècle. Associez chaque document au nationalisme correspondant.",
    aspects: [{aspect: "Nationalismes"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les habitants de cette province doivent pouvoir exercer une influence réelle sur les décisions du gouvernement par l'entremise de leurs représentants élus. »",
            source: "Denis-Benjamin Viger, député du Bas-Canada, vers 1828. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« L'autorité du gouvernement doit être maintenue afin d'assurer l'ordre et la prospérité de la colonie sous la protection de la Couronne britannique. »",
            source: "James Monk, juge en chef du Bas-Canada, vers 1810. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Les Canadiens ont le droit de conserver leurs institutions nationales et de participer pleinement à l'administration de leur pays. »",
            source: "Louis-Hippolyte La Fontaine, député du Bas-Canada, vers 1837. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« Les liens qui unissent cette colonie à l'Empire britannique constituent la meilleure garantie de stabilité et de développement pour l'avenir. »",
            source: "John Richardson, marchand britannique de Montréal, vers 1830. Adapté."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: ["Nationalisme britannique", "Nationalisme canadien"],
      double: true
    },
    guide: {
      type: "grille",
      entetes: ["Nationalisme britannique", "Nationalisme canadien"],
      rangees: [
        ["B et D", "A et C"]
      ]
    },
    updatedAt: "2026-06-11T01:38:36.447Z"
  },
  {
    id: "Q362",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Indiquez le principal point sur lequel ces acteurs sont en accord.",
    aspects: [{aspect: "Nationalismes"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les Canadiens doivent pouvoir participer pleinement à l'administration de leur pays et conserver les institutions qui assurent la protection de leurs droits et de leurs intérêts. »",
            auteur: "Denis-Benjamin Viger",
            source: "Denis-Benjamin Viger, Considérations sur les effets qu'ont produit en Canada la conservation des établissements du pays, Londres, 1809. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les habitants de cette province ont le droit de défendre leur langue, leurs lois et leurs institutions par l'intermédiaire des représentants qu'ils élisent à l'Assemblée. »",
            auteur: "Louis-Joseph Papineau",
            source: "Louis-Joseph Papineau, discours à la Chambre d'assemblée du Bas-Canada, vers 1834. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Les Canadiens français doivent défendre leurs droits ou leurs institutions.",
    updatedAt: "2026-06-18T23:18:56.012Z"
  },
  {
    id: "Q363",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Divergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Indiquez le principal point sur lequel ces acteurs sont en désaccord.",
    aspects: [{aspect: "Nationalismes"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Le gouverneur doit conserver une autorité suffisante pour assurer la stabilité politique et veiller aux intérêts de la Couronne dans la colonie. »",
            auteur: "Jonathan Sewell",
            source: "Jonathan Sewell, correspondance politique adressée aux autorités britanniques, vers 1810. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les représentants élus doivent exercer un contrôle plus important sur les affaires publiques afin de limiter l'influence des autorités qui ne sont pas responsables devant la population. »",
            auteur: "Pierre-Stanislas Bédard",
            source: "Pierre-Stanislas Bédard, discours à la Chambre d'assemblée du Bas-Canada, vers 1809. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Les pouvoirs du gouveneur.",
    updatedAt: "2026-06-18T23:20:04.882Z"
  },
  {
    id: "Q364",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A à C présentent le point de vue de trois acteurs concernant l'avenir politique du Bas-Canada. Nommez l'acteur qui présente une position différente et comparez sa position à celle des deux autres acteurs.",
    aspects: [{aspect: "Nationalismes"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les Canadiens doivent pouvoir participer davantage aux décisions politiques et protéger les institutions qui représentent la majorité de la population. »",
            auteur: "Louis-Hippolyte La Fontaine",
            source: "Louis-Hippolyte La Fontaine, discours politique, vers 1837. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« L'autorité du gouverneur demeure essentielle au maintien de l'ordre et de la stabilité dans la colonie. »",
            auteur: "James Monk",
            source: "James Monk, correspondance administrative du Bas-Canada, vers 1810. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Les institutions politiques doivent être réformées afin de mieux protéger les droits et les intérêts de la population canadienne. »",
            auteur: "Denis-Benjamin Viger",
            source: "Denis-Benjamin Viger, discours politique, vers 1828. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "James Monk s'oppose aux réformes politiques (la différence), alors que Louis-Hippolyte La Fontaine et Denis-Benjamin Viger y sont favorables (la similitude).",
    updatedAt: "2026-06-18T23:21:56.566Z"
  },
  {
    id: "Q365",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une cause de la dualité linguistique dans le Bas-Canada au début du XIXe siècle.",
    aspects: [{aspect: "Nationalismes"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Après la Conquête, puis avec l'arrivée de nombreux immigrants britanniques, la population du Bas-Canada se compose à la fois de Canadiens français et de Britanniques aux langues et aux traditions différentes. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 2, Québec, Septentrion. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Arrivée d'immigrants britanniques\nImmigration britannique\nPrésence croissante de Britanniques dans la colonie",
    updatedAt: "2026-06-11T12:02:56.111Z"
  },
  {
    id: "Q366",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de la dualité linguistique dans le Bas-Canada au début du XIXe siècle.",
    aspects: [{aspect: "Nationalismes"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "debats_parlementaires.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Tensions politiques\nOpposition entre Canadiens français et Britanniques\nFormation de partis politiques défendant des intérêts différents\nDéveloppement du nationalisme canadien\nDéveloppement du nationalisme britannique\nConflits à la Chambre d'assemblée",
    updatedAt: "2026-06-11T12:05:34.072Z"
  },
  {
    id: "Q367",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Cause et conséquence",
    enonce: "Au début du XIXe siècle, les nationalismes s'affrontent au Bas-Canada. Indiquez la lettre du document qui présente : \n• une cause de l'émergence du nationalisme canadien\n• une conséquence de l'émergence du nationalisme canadien",
    aspects: [{aspect: "Nationalismes"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Afin de défendre les intérêts des Canadiens, plusieurs députés s'unissent au sein d'un mouvement politique qui réclame une plus grande influence des représentants élus. »",
            soustitre: "Formation du Parti canadien",
            source: "Pierre-Stanislas Bédard, discours à la Chambre d'assemblée du Bas-Canada, vers 1809. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "population_bas-canada_1800.png",
            soustitre: "Répartition de la population du Bas-Canada vers 1810",
            source: "Adapté de Fernand Ouellet, Le Bas-Canada 1791-1840 : changements structuraux et crise, Ottawa, Éditions de l'Université d'Ottawa, 1976."
          }
        ]
      }
    ],
    reponse: {type: "cause-consequence"},
    guide: {
      type: "grille",
      entetes: ["Cause", "Conséquence"],
      rangees: [
        ["B", "A"]
      ]
    },
    updatedAt: "2026-06-12T12:19:34.660Z"
  },
  {
    id: "Q368",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P4 — 1791 – 1840",
    points: 3,
    enonce: "Expliquez comment la dualité linguistique contribue à l'émergence de tensions politiques dans le Bas-Canada au début du XIXe siècle.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• la composition linguistique de la population\n• un groupe de population qui cherche à accroître son influence \n• une conséquence politique",
    aspects: [{aspect: "Nationalismes"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "population_bas-canada_1800.png",
            soustitre: "Répartition de la population du Bas-Canada vers 1810",
            source: "Adapté de Fernand Ouellet, Le Bas-Canada 1791-1840 : changements structuraux et crise, Ottawa, Éditions de l'Université d'Ottawa, 1976."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les députés canadiens réclament une influence plus grande dans les affaires publiques afin de mieux représenter les intérêts de la majorité de la population. »",
            source: "Pierre-Stanislas Bédard, discours à la Chambre d'assemblée du Bas-Canada, vers 1809. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "debats_parlementaires.png",
            soustitre: "Débats parlementaires à la Chambre d'assemblée",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 5},
    guide: "La présence de francophones et d'anglophones dans le Bas-Canada (composition linguistique) amène les Canadiens français (groupe de population) à chercher à accroître leur influence politique, ce qui provoque la formation de partis opposés et des tensions à la Chambre d'assemblée (conséquence politique).",
    updatedAt: "2026-06-15T12:25:31.423Z"
  },
  {
    id: "Q369",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez un objectif poursuivi par les mouvements de libération nationale au début du XIXe siècle.",
    aspects: [{aspect: "Idées libérales et républicaines"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "mouvement_liberation.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Obtenir l'indépendance.\nSe libérer d'une puissance étrangère.\nSe gouverner soi-même.\nChoisir son propre gouvernement.\nContrôler ses institutions politiques.",
    updatedAt: "2026-06-11T15:17:15.265Z"
  },
  {
    id: "Q370",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez une nation qui obtient son indépendance à la suite d'un mouvement de libération nationale à la fin du XVIIIe siècle.",
    aspects: [{aspect: "Idées libérales et républicaines"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "mouvement_liberation.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "États-Unis.",
    updatedAt: "2026-06-11T15:19:29.266Z"
  },
  {
    id: "Q371",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez une revendication formulée par les partisans du libéralisme politique au Bas-Canada.",
    aspects: [{aspect: "Idées libérales et républicaines"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les habitants de la colonie doivent pouvoir influencer les décisions du gouvernement par l'intermédiaire de leurs représentants élus. »",
            source: "Louis-Joseph Papineau, discours à la Chambre d'assemblée du Bas-Canada, vers 1834. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Accroître le pouvoir des représentants élus\nDonner plus de pouvoir à la Chambre d'assemblée\nObtenir un gouvernement responsable\nContrôler davantage les finances de la colonie\nRéformer les institutions politiques",
    updatedAt: "2026-06-11T15:22:40.287Z"
  },
  {
    id: "Q372",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez un moyen utilisé pour diffuser les idées politiques au Bas-Canada au début du XIXe siècle.",
    aspects: [{aspect: "Idées libérales et républicaines"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "journal_le_canadien.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Journal\nPrese écrite",
    updatedAt: "2026-06-11T15:26:15.234Z"
  },
  {
    id: "Q373",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "2 documents",
    enonce: "Les documents A et B présentent deux journaux publiés au début du XIXe siècle. Associez chaque document au nationalisme correspondant.",
    aspects: [{aspect: "Idées libérales et républicaines"}, {aspect: "Nationalismes"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "journal_le_canadien.png",
            soustitre: "Journal Le Canadien",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les institutions britanniques ont apporté la stabilité et la prospérité à cette colonie; il serait imprudent de réduire l'autorité des représentants de la Couronne au profit de l'Assemblée. »",
            source: "Quebec Mercury, Québec, 1810. Adapté."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: ["Nationalisme britannique", "Nationalisme canadien"]
    },
    guide: {
      type: "grille",
      entetes: ["Nationalisme britannique", "Nationalisme canadien"],
      rangees: [
        ["B", "A"]
      ]
    },
    updatedAt: "2026-06-12T00:19:17.743Z"
  },
  {
    id: "Q374",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une cause de la diffusion des idées libérales au Bas-Canada au début du XIXe siècle.",
    aspects: [{aspect: "Idées libérales et républicaines"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les révolutions américaine et française contribuent à répandre de nouvelles idées politiques fondées sur la liberté et la participation des citoyens au gouvernement. »",
            source: "ric Hobsbawm, L'Ère des révolutions : 1789-1848, Bruxelles, Complexe, 1989. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Révolution américaine\nRévolution française\nDiffusion de nouvelles idées politiques en provenance d'Europe ou des États-Unis\n\nLes journaux sont surtout un moyen de diffusion, pas nécessairement la cause profonde de la diffusion des idées libérales.",
    updatedAt: "2026-06-11T15:52:18.254Z"
  },
  {
    id: "Q375",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de la diffusion des idées libérales au Bas-Canada au début du XIXe siècle.",
    aspects: [{aspect: "Idées libérales et républicaines"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les idées libérales encouragent les citoyens à réclamer des réformes politiques et une participation accrue aux décisions qui concernent la colonie. »",
            source: "Allan Greer, Patriotes et peuple en révolution, Montréal, Boréal, 1997. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Revendications politiques\nDemande d'un gouvernement responsable\nRéformes politiques\nPlus de pouvoir pour les représentants élus\nContestation de l'autorité coloniale\nCréation ou développement du mouvement patriote",
    updatedAt: "2026-06-11T15:42:47.136Z"
  },
  {
    id: "Q376",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de la diffusion des idées républicaines au Bas-Canada au début du XIXe siècle.",
    aspects: [{aspect: "Idées libérales et républicaines"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Inspirés par l'exemple américain, certains réformistes réclament des changements importants aux institutions politiques du Bas-Canada. »",
            source: "Gilles Laporte, Patriotes et Loyaux, Québec, Septentrion, 2004. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Contestation de l'autorité britannique\nRemise en question de la monarchie britannique\nRevendication de réformes politiques\nRevendication d'un gouvernement plus démocratique\nSoutien accru au mouvement patriote",
    updatedAt: "2026-06-11T15:44:42.871Z"
  },
  {
    id: "Q377",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Changement",
    enonce: "Indiquez un changement dans les revendications politiques formulées au Bas-Canada entre la fin du XVIIIe siècle et le début du XIXe siècle.",
    aspects: [{aspect: "Idées libérales et républicaines"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les députés de la Chambre d'assemblée demandent que les représentants élus puissent participer davantage à l'administration des finances de la colonie. »",
            soustitre: "Vers 1790",
            source: "Pierre-Stanislas Bédard, discours à la Chambre d'assemblée du Bas-Canada, vers 1795. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les Patriotes réclament que les membres du Conseil législatif soient élus et que le gouvernement soit responsable devant les représentants de la population. »",
            soustitre: "Vers 1825",
            source: "Quatre-vingt-douze Résolutions. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Il y a changement, car les revendications passent d'une demande d'influence accrue sur les finances de la colonie à une demande de réformes politiques plus importantes, comme l'élection du Conseil législatif ou le gouvernement responsable.",
    updatedAt: "2026-06-11T15:49:22.762Z"
  },
  {
    id: "Q378",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Continuité",
    enonce: "Indiquez un élément de continuité dans le rôle de la Chambre d'assemblée au Bas-Canada entre 1791 et 1840.",
    aspects: [{aspect: "Idées libérales et républicaines"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "org_pol_1791_acte_const.png",
            soustitre: "Organisation politique du Haut-Canada et du Bas-Canada après 1791",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les députés de la Chambre d'assemblée continuent de défendre les intérêts de leurs électeurs et de participer aux débats portant sur l'administration de la colonie. »",
            source: "Louis-Joseph Papineau, discours à la Chambre d'assemblée du Bas-Canada, vers 1830. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Il y a continuité, car la Chambre d'assemblée continue de représenter la population entre 1791 et 1840.",
    updatedAt: "2026-06-12T12:03:42.432Z"
  },
  {
    id: "Q379",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P4 — 1791 – 1840",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A et B, indiquez s'il y a changement ou continuité dans la diffusion des idées politiques au Bas-Canada entre 1790 et 1830. Justifiez votre réponse par des faits.",
    aspects: [{aspect: "Idées libérales et républicaines"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Vers 1790, les journaux sont encore peu nombreux dans la colonie. Les idées politiques circulent surtout parmi une minorité de lecteurs et rejoignent difficilement l'ensemble de la population. »",
            source: "Yvan Lamonde, Histoire sociale des idées au Québec, Montréal, Fides, 2000. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "journaux_bas-canada.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Changement\nIl y a changement, car le nombre de journaux augmente entre 1790 et 1830, ce qui favorise la diffusion des idées politiques dans la colonie.\n\nContinuité\nIl y a continuité, car les journaux continuent de servir à la diffusion des idées politiques entre 1790 et 1830.",
    updatedAt: "2026-06-12T00:18:14.267Z"
  },
  {
    id: "Q380",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Indiquez le principal point sur lequel ces acteurs sont en accord.",
    aspects: [{aspect: "Idées libérales et républicaines"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les représentants du peuple doivent participer davantage aux décisions qui concernent l'administration de la colonie et l'utilisation des fonds publics. »",
            auteur: "Pierre-Stanislas Bédard",
            source: "Pierre-Stanislas Bédard, discours à la Chambre d'assemblée du Bas-Canada, vers 1809. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Une colonie est mieux gouvernée lorsque les représentants élus exercent une influence réelle sur les affaires publiques et sur les décisions du gouvernement. »",
            auteur: "Louis-Joseph Papineau",
            source: "Louis-Joseph Papineau, discours à la Chambre d'assemblée du Bas-Canada, vers 1834. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Donner plus de pouvoirs aux représentants élus.",
    updatedAt: "2026-06-18T23:22:52.505Z"
  },
  {
    id: "Q381",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A à C présentent le point de vue de trois acteurs concernant l'avenir politique du Bas-Canada. Nommez l'acteur qui présente une position différente et comparez sa position à celle des deux autres acteurs.",
    aspects: [{aspect: "Idées libérales et républicaines"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les institutions doivent refléter davantage la volonté de la population et les représentants élus doivent exercer une influence réelle sur le gouvernement. »",
            auteur: "Louis-Joseph Papineau",
            source: "Louis-Joseph Papineau, discours à la Chambre d'assemblée du Bas-Canada, vers 1834. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les institutions britanniques assurent la stabilité de la colonie et il convient de maintenir l'autorité de la Couronne ainsi que les pouvoirs du gouverneur. »",
            auteur: "Jonathan Sewell",
            source: "Jonathan Sewell, mémoire adressé aux autorités britanniques, vers 1810. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Un peuple libre doit pouvoir choisir ses dirigeants et participer activement aux affaires publiques qui le concernent. »",
            auteur: "Ludger Duvernay",
            source: "Ludger Duvernay, article publié dans La Minerve, vers 1832. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Jonathan Sewell est favorable au maintien de l'autorité de la Couronne et du gouverneur (la différence), alors que Louis-Joseph Papineau et Ludger Duvernay s'y opposent ou souhaitent accorder davantage de pouvoir à la population et à ses représentants (la similitude).",
    updatedAt: "2026-06-18T23:25:04.039Z"
  },
  {
    id: "Q382",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Divergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Indiquez le principal point sur lequel ces acteurs sont en désaccord.",
    aspects: [{aspect: "Idées libérales et républicaines"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les représentants élus doivent obtenir une plus grande influence dans les affaires de la colonie afin de défendre les intérêts de la population. »",
            auteur: "François Blanchet",
            source: "Le Canadien, Québec, vers 1810. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les institutions britanniques assurent la stabilité de la colonie et il serait dangereux de réduire les pouvoirs du gouverneur au profit de l'Assemblée. »",
            auteur: "Thomas CaryAutr",
            source: "Quebec Mercury, Québec, vers 1810. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Le partage du pouvoir entre l'Assemblée et le gouverneur.",
    updatedAt: "2026-06-18T23:26:14.011Z"
  },
  {
    id: "Q383",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Différence",
    enonce: "Indiquez une différence entre les facteurs qui expliquent l'augmentation de la population du Bas-Canada et du Haut-Canada dans la première moitié du XIXe siècle.",
    aspects: [{aspect: "Population"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« La croissance de la population du Bas-Canada repose avant tout sur une natalité exceptionnellement élevée. Les familles nombreuses contribuent largement à l'augmentation du nombre d'habitants au début du XIXe siècle. »",
            source: "Fernand Ouellet, Le Bas-Canada 1791-1840 : changements structuraux et crise, Ottawa, Éditions de l'Université d'Ottawa, 1976. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« L'augmentation rapide de la population du Haut-Canada est étroitement liée à l'arrivée continue d'immigrants provenant des îles Britanniques durant la première moitié du XIXe siècle. »",
            source: "J.M.S. Careless, Canada: A Story of Challenge, Toronto, Macmillan, 1970. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "La population du Bas-Canada augmente principalement grâce à l'accroissement naturel, tandis que celle du Haut-Canada augmente surtout grâce à l'immigration britannique.",
    updatedAt: "2026-06-11T18:39:04.086Z"
  },
  {
    id: "Q384",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez le titre de la personne qui sert d'intermédiaire entre le gouvernement britannique et les Premières Nations au début du XIXe siècle.",
    aspects: [{aspect: "Population"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "agents_indiens_bas-canada.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Agent des Indiens",
    updatedAt: "2026-06-12T00:17:27.544Z"
  },
  {
    id: "Q385",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "À l'aide du document A, indiquez le nom de l'événement survenu dans les colonies britanniques en 1833.",
    aspects: [{aspect: "Population"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "abolition_esclavage_bas-canada.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Abolition de l'esclavage \nFin de l'esclavage",
    updatedAt: "2026-06-12T00:47:44.586Z"
  },
  {
    id: "Q386",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez le principal facteur qui explique l'augmentation de la population du Bas-Canada dans la première moitié du XIXe siècle.",
    aspects: [{aspect: "Population"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "accroissement_naturel_bas-canada_1790-1840.png",
            soustitre: "Naissances et décès au Bas-Canada  entre 1790 et 1840",
            source: "Adapté de Hubert Charbonneau, La population du Québec : études rétrospectives, Montréal, Boréal Express, 1973."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "L'accroissement naturel.",
    updatedAt: "2026-06-12T12:14:42.909Z"
  },
  {
    id: "Q387",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez le principal facteur qui explique l'augmentation de la population du Haut-Canada dans la première moitié du XIXe siècle.",
    aspects: [{aspect: "Population"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "evolution_demo_haut-canada_1790-1840.png",
            soustitre: "Naissances et immigration au Haut-Canada entre 1790 et 1840",
            source: "Adapté de J.M.S. Careless, Canada: A Story of Challenge, Toronto, Macmillan, 1970."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "L'immigration.",
    updatedAt: "2026-06-12T12:20:53.298Z"
  },
  {
    id: "Q388",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une cause de la présence d'une importante population britannique dans le Haut-Canada au début du XIXe siècle.",
    aspects: [{aspect: "Population"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Au début du XIXe siècle, des milliers de nouveaux arrivants provenant des îles Britanniques s'établissent dans le Haut-Canada, contribuant fortement à la croissance de sa population. »",
            source: "J.M.S. Careless, Canada: A Story of Challenge, Toronto, Macmillan, 1970. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Immigration britannique\nArrivée de Loyalistes",
    updatedAt: "2026-06-12T00:50:34.533Z"
  },
  {
    id: "Q389",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    enonce: "Indiquez une conséquence de la présence de groupes de population différents dans le Bas-Canada au début du XIXe siècle.",
    aspects: [{aspect: "Population"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« La population du Bas-Canada est composée d'une majorité canadienne-française et d'une minorité britannique. Ces groupes parlent principalement des langues différentes et possèdent souvent des intérêts distincts. »",
            source: "Jacques Lacoursière, Histoire populaire du Québec, tome 2, Québec, Septentrion. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Dualité linguistique\nPrésence de deux groupes linguistiques\nCoexistence de francophones et d'anglophones",
    updatedAt: "2026-06-12T00:51:38.903Z"
  },
  {
    id: "Q390",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de la présence d'une bourgeoisie professionnelle dans le Bas-Canada au début du XIXe siècle.",
    aspects: [{aspect: "Population"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les avocats, notaires et médecins occupent une place grandissante dans la société. Plusieurs d'entre eux siègent à la Chambre d'assemblée et participent activement aux débats politiques de la colonie. »",
            source: "Fernand Ouellet, Le Bas-Canada 1791-1840 : changements structuraux et crise, Ottawa, Éditions de l'Université d'Ottawa, 1976. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Participation accrue à la vie politique\nParticipation aux débats politiques\nPrésence de professionnels à la Chambre d'assemblée\nDéfense des intérêts de la population à la Chambre d'assemblée",
    updatedAt: "2026-06-12T00:56:40.459Z"
  },
  {
    id: "Q391",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P4 — 1791 – 1840",
    points: 3,
    enonce: "Expliquez comment un mouvement migratoire contribue à un changement démographique du Haut-Canada dans la première moitié du XIXe siècle. \n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• un mouvement migratoire vers le Haut-Canada\n• un groupe de population concerné\n• un changement démographique au Haut-Canada",
    aspects: [{aspect: "Population"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "evolution_demo_haut-canada_1790-1840.png",
            soustitre: "Naissances et immigration au Haut-Canada entre 1790 et 1840",
            source: "Adapté de J.M.S. Careless, Canada: A Story of Challenge, Toronto, Macmillan of Canada, 1970."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Durant la première moitié du XIXe siècle, des milliers d'immigrants provenant des îles Britanniques s'établissent dans le Haut-Canada. »",
            source: "J.M.S. Careless, Canada: A Story of Challenge, Toronto, Macmillan, 1970. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "evolution_pop_haut-canada_1790-1840.png",
            soustitre: "Évolution de la population du Haut-Canada entre 1790 et 1840",
            source: "Adapté. J.M. Bumsted, The Peoples of Canada: A Pre-Confederation History, Toronto, Oxford University Press."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 5},
    guide: "L'immigration britannique (mouvement migratoire) amène de nombreux Britanniques dans le Haut-Canada (groupe de population concerné) ce qui contribue à l'augmentation de la population de cette colonie (changement démographique).",
    updatedAt: "2026-06-15T12:21:00.973Z"
  },
  {
    id: "Q392",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P4 — 1791 – 1840",
    points: 3,
    enonce: "Expliquez comment un phénomène démographique entraîne une transformation de la population du Bas-Canada dans la première moitié du XIXe siècle.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• un phénomène démographique\n• un groupe de population concerné\n• une transformation de la population du Bas-Canada",
    aspects: [{aspect: "Population"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "accroissement_naturel_bas-canada_1790-1840.png",
            soustitre: "Naissances et décès au Bas-Canada entre 1790 et 1840",
            source: "Adapté de Jacques Henripin, La population canadienne au début du XIXe siècle, Montréal."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Au début du XIXe siècle, les familles canadiennes-françaises comptent souvent plusieurs enfants. Les naissances sont beaucoup plus nombreuses que les décès. »"
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "evolution_pop_bas-canada_1790-1840.png",
            soustitre: "Évolution de la population du Bas-Canada entre 1790 et 1840",
            source: "Adapté de Fernand Ouellet, Le Bas-Canada 1791-1840 : changements structuraux et crise, Ottawa, Éditions de l'Université d'Ottawa, 1976."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 5},
    guide: "L'accroissement naturel (phénomène démographique) touche principalement les Canadiens français (groupe de population concerné), ce qui entraîne une forte augmentation de la population du Bas-Canada (changement dans la population)",
    updatedAt: "2026-06-15T12:20:35.462Z"
  },
  {
    id: "Q393",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Divergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Indiquez le principal point sur lequel ces acteurs sont en désaccord.",
    aspects: [{aspect: "Population"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« L'esclavage est contraire aux principes de liberté et doit être aboli dans toutes les colonies britanniques. »",
            auteur: "William Wilberforce",
            source: "Discours au Parlement britannique, vers 1833. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« L'économie de certaines colonies dépend encore du travail des esclaves et une abolition rapide risque de causer de graves difficultés. »",
            auteur: "Edward Ellice",
            source: "Débats parlementaires britanniques, vers 1833. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "L'abolition de l'esclavage.",
    updatedAt: "2026-06-18T23:27:43.112Z"
  },
  {
    id: "Q394",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Indiquez le principal point sur lequel ces acteurs sont d'accord.",
    aspects: [{aspect: "Population"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Pour assurer la prospérité du Haut-Canada, il faut encourager l'établissement de colons britanniques capables de mettre les terres en valeur et de renforcer les institutions britanniques. »",
            auteur: "John Graves Simcoe",
            source: "Correspondance du lieutenant-gouverneur du Haut-Canada, vers 1793. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« L'arrivée de nouveaux immigrants provenant des îles Britanniques contribue à la croissance de la colonie et favorise son développement économique. »",
            auteur: "Peter Russell",
            source: "Correspondance de l'administrateur du Haut-Canada, vers 1800. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "L'établissement de colons britanniques dans le Haut-Canada.\nL'immigration britannique dans le Haut-Canada.",
    updatedAt: "2026-06-18T23:28:35.340Z"
  },
  {
    id: "Q395",
    niveau: 3,
    oi: "Situer dans l'espace",
    periode: "P4 — 1791 – 1840",
    points: 1,
    soustag: "Situer 1 élément",
    enonce: "Indiquez la lettre qui correspond à la principale région où se sont déroulés les conflits armés des Rébellions  de 1837 au Bas-Canada.",
    aspects: [{aspect: "Soulèvements de 1837-1838"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "carte_conflits_armes_bas-canada_1837.png",
            source: "Carte du Québec. Adaptée d'après d-maps.com."
          }
        ]
      }
    ],
    reponse: {type: "tableau_2col"},
    guide: "B",
    updatedAt: "2026-06-12T03:57:43.165Z"
  },
  {
    id: "Q396",
    niveau: 3,
    oi: "Situer dans l'espace",
    periode: "P4 — 1791 – 1840",
    points: 1,
    soustag: "Situer 1 élément",
    enonce: "Indiquez la lettre qui correspond à la principale région où se sont déroulés les conflits armés des Rébellions  de 1838 au Haut-Canada.",
    aspects: [{aspect: "Soulèvements de 1837-1838"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "carte_conflits_armes_haut-canada_1838.png",
            source: "Carte du Québec. Adaptée d'après d-maps.com."
          }
        ]
      }
    ],
    reponse: {type: "tableau_2col"},
    guide: "D",
    updatedAt: "2026-06-15T12:48:28.024Z"
  },
  {
    id: "Q397",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Indiquez le principal point sur lequel ces acteurs sont d'accord.",
    aspects: [{aspect: "Soulèvements de 1837-1838"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les habitants de la colonie doivent être représentés par des élus capables d'influencer les décisions du gouvernement et de défendre les intérêts de la population. »",
            auteur: "Louis-Joseph Papineau",
            source: "Discours à la Chambre d'assemblée du Bas-Canada, vers 1834. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les institutions politiques doivent accorder une plus grande place aux représentants choisis par la population afin de mieux répondre à ses besoins. »",
            auteur: "William Lyon Mackenzie",
            source: "The Colonial Advocate, Haut-Canada, vers 1836. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Le pouvoir des représentants élus.",
    updatedAt: "2026-06-18T23:29:16.325Z"
  },
  {
    id: "Q398",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Lea documents A à C présentent la position de trois acteurs concernant les moyens utilisés pour répondre aux tensions politiques dans le Bas-Canada. Nommez l'acteur qui présente une position différente et comparez sa position à celle des deux autres acteurs.",
    aspects: [{aspect: "Soulèvements de 1837-1838"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les Canadiens doivent poursuivre leurs revendications par des moyens légaux et constitutionnels afin d'obtenir les réformes souhaitées sans recourir à la violence. »",
            auteur: "Louis-Joseph Papineau",
            source: "Discours politique, Bas-Canada, vers 1837. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les autorités doivent rétablir l'ordre dans la colonie et réprimer toute opposition qui menace la stabilité du gouvernement britannique. »",
            auteur: "John Colborne",
            source: "Correspondance du commandant des forces britanniques, Bas-Canada, vers 1837. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Lorsque les demandes de la population sont constamment rejetées, il devient parfois nécessaire de résister plus fermement afin de défendre ses droits et ses libertés. »",
            auteur: "Wolfred Nelson",
            source: "Discours aux Patriotes, Bas-Canada, vers 1837. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "John Colborne est favorable à la répression des contestations (la différence), alors que Louis-Joseph Papineau et Wolfred Nelson réclament des changements politiques (la similitude).",
    updatedAt: "2026-06-18T23:30:07.226Z"
  },
  {
    id: "Q399",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A à C présentent la position de trois acteurs concernant les moyens utilisés pour obtenir des changements politiques dans le Bas-Canada. Nommez l'acteur qui présente une position différente et comparez sa position à celle des deux autres acteurs.",
    aspects: [{aspect: "Soulèvements de 1837-1838"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les Canadiens doivent poursuivre leurs revendications par des moyens légaux et constitutionnels afin d'obtenir les réformes souhaitées. »",
            auteur: "Louis-Joseph Papineau",
            source: "Discours à la Chambre d'assemblée du Bas-Canada, vers 1834. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les abus du gouvernement doivent être dénoncés publiquement, mais les changements doivent être obtenus par des moyens pacifiques. »",
            auteur: "Étienne Parent",
            source: "Adapté d'un article du Canadien rédigé par Étienne Parent, vers 1836."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Lorsque les autorités refusent d'écouter les revendications du peuple, le recours aux armes peut devenir nécessaire. »",
            auteur: "Wolfred Nelson",
            source: "Adapté d'un discours de Wolfred Nelson lors d'une assemblée patriote, 1837."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Wolfred Nelson est favorable à la prise des armes (la différence), alors que Louis-Joseph Papineau et Étienne Parent privilégient des moyens légaux pour obtenir des changements politiques (la similitude).",
    updatedAt: "2026-06-18T23:33:32.242Z"
  },
  {
    id: "Q400",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "4 documents",
    enonce: "Les documents A à D présentent des faits liés à la population du Bas-Canada et du Haut-Canada. Associez chaque document à l'élément correspondant.",
    aspects: [{aspect: "Population"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Durant la première moitié du XIXe siècle, des dizaines de milliers de nouveaux arrivants provenant des îles Britanniques s'établissent dans [à l'est de la rivière des Outaouais] contribuant fortement à la croissance de sa population. »",
            source: "J.M.S. Careless, Canada: A Story of Challenge, Toronto, Macmillan, 1970. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les familles canadiennes-françaises comptent souvent plusieurs enfants et les naissances sont nombreuses dans les campagnes [...] au début du XIXe siècle. »",
            source: "Jacques Henripin, La population canadienne au début du XIXe siècle, Montréal, PUM. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Les naissances demeurent largement supérieures aux décès, ce qui permet une augmentation rapide de la population sans dépendre principalement de l'immigration. »",
            source: "Hubert Charbonneau, La population du Québec : études rétrospectives, Montréal, Boréal Express, 1973. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« Après la Révolution américaine, plusieurs habitants demeurés fidèles à la Couronne britannique quittent les États-Unis et s'établissent dans les colonies de l'Amérique du Nord britannique. »",
            source: "J.M. Bumsted, The Peoples of Canada: A Pre-Confederation History, Toronto, Oxford University Press, 1992. Adapté."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: ["Bas-Canada", "Haut-Canada"],
      double: true
    },
    guide: {
      type: "grille",
      entetes: ["Bas-Canada", "Haut-Canada"],
      rangees: [
        ["B et C", "A et D"]
      ]
    },
    updatedAt: "2026-06-12T04:02:12.890Z"
  },
  {
    id: "Q401",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez le nom du document adopté par les Patriotes en 1834 pour présenter leurs revendications au gouvernement britannique.",
    aspects: [{aspect: "Soulèvements de 1837-1838"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« En 1834, les députés du Parti patriote présentent à l’Assemblée un texte regroupant leurs principales plaintes et revendications. Ce document critique notamment le Conseil législatif et réclame davantage de pouvoir pour les représentants élus. »",
            source: "Adapté de Jean-François Cardin et autres, Le Québec : héritages et projets, 1994."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Les 92 résolutions.",
    updatedAt: "2026-06-12T14:09:34.679Z"
  },
  {
    id: "Q402",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez le nom des résolutions adoptées par le gouvernement britannique en 1837 pour rejeter les revendications des Patriotes.",
    aspects: [{aspect: "Soulèvements de 1837-1838"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« En 1837, Londres refuse plusieurs demandes formulées par les élus du Bas-Canada. Le gouvernement britannique autorise notamment l’administration coloniale à utiliser les revenus publics sans l’accord de la Chambre d’assemblée. »",
            source: "Adapté de Jean-François Cardin et autres, Le Québec : héritages et projets, 1994."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Les résolutions Russell.",
    updatedAt: "2026-06-12T14:10:08.325Z"
  },
  {
    id: "Q403",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez le moyen utilisé par les Patriotes pour mobiliser la population après le rejet des 92 résolutions.",
    aspects: [{aspect: "Soulèvements de 1837-1838"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "assemblee_six_comtes.png",
            source: "Charles Alexander Smith, L'Assemblée des Six-Comtés, 1891. Reproduction adaptée."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Les assemblées populaires.",
    updatedAt: "2026-06-12T14:13:02.122Z"
  },
  {
    id: "Q404",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez une mesure utilisée par les autorités coloniales pour réprimer le mouvement patriote.",
    aspects: [{aspect: "Soulèvements de 1837-1838"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "aut_col_britannique_rebellions.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Mandats d’arrestation\nArrestation de chefs patriotes\nIntervention de l’armée britannique\nEmprisonnement de Patriotes",
    updatedAt: "2026-06-12T14:16:51.224Z"
  },
  {
    id: "Q405",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez le nom du document proclamé par Robert Nelson en 1838.",
    aspects: [{aspect: "Soulèvements de 1837-1838"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "independance_bas-canada.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "La Déclaration d'indépendance du Bas-Canada.",
    updatedAt: "2026-06-12T14:22:53.180Z"
  },
  {
    id: "Q406",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "4 documents",
    enonce: "Les documents A à D présentent des faits liés aux rébellions de 1837-1838. Indiquez si chaque document fait référence aux rébellions du Bas-Canada ou aux rébellions du Haut-Canada.",
    aspects: [{aspect: "Soulèvements de 1837-1838"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« En novembre 1837, les Patriotes dirigés par Wolfred Nelson remportent une victoire contre les troupes britanniques lors de la bataille de Saint-Denis. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 3."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "bataille_taverne.png",
            soustitre: "Bataille de la taverne Montgomery",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« En décembre 1837, un groupe de réformistes dirigé par William Lyon Mackenzie entreprend une marche vers Toronto afin de renverser le gouvernement colonial. »",
            source: "Adapté de J.M.S. Careless, Canada: A Story of Challenge."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            ref: "bataille_saint-charles.png",
            soustitre: "Bataille de Saint-Charles",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: ["Rébellions au Bas-Canada", "Rébellions au Haut-Canada"],
      double: true
    },
    guide: {
      type: "grille",
      entetes: ["Rébellions au Bas-Canada", "Rébellions au Haut-Canada"],
      rangees: [
        ["A et D", "B et C"]
      ]
    },
    updatedAt: "2026-06-12T15:23:28.020Z"
  },
  {
    id: "Q407",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "3 documents",
    enonce: "Les documents A à C présentent des faits liés à des batailles des rébellions de 1837 au Bas-Canada. Associez chaque document à la bataille correspondante.",
    aspects: [{aspect: "Soulèvements de 1837-1838"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les Patriotes dirigés par Wolfred Nelson transforment plusieurs bâtiments du village en positions défensives afin de résister à l'avancée des troupes britanniques. Après plusieurs heures de combat, les soldats sont contraints de battre en retraite. Cette victoire constitue l'un des rares succès militaires remportés par les insurgés durant les rébellions de 1837. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 3."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Dans un village situé sur la rive du Richelieu, les Patriotes dirigés par Thomas Storrow Brown aménagent des retranchements pour résister à l'armée britannique. L'attaque des soldats se solde toutefois par la dispersion des insurgés et l'abandon de leurs positions. »",
            source: "Adapté de Gilles Laporte, Patriotes et Loyaux."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« [...] dans la région des Deux-Montagnes, Jean-Olivier Chénier dirige les Patriotes retranchés dans l'église et les bâtiments voisins. L'affrontement se termine par l'incendie du village et la défaite des insurgés met fin à la principale phase des rébellions de 1837 au Bas-Canada. »",
            source: "Adapté de Allan Greer, Habitants et Patriotes."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: ["Bataille de Saint-Charles", "Bataille de Saint-Denis", "Bataille de Saint-Eustache"]
    },
    guide: {
      type: "grille",
      entetes: ["Bataille de Saint-Charles", "Bataille de Saint-Denis", "Bataille de Saint-Eustache"],
      rangees: [
        ["B", "A", "C"]
      ]
    },
    updatedAt: "2026-06-12T14:48:27.035Z"
  },
  {
    id: "Q408",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une cause de l'adoption des 92 résolutions en 1834.",
    aspects: [{aspect: "Soulèvements de 1837-1838"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "org_pol_1791_acte_const.png",
            soustitre: "Organisation politique du Haut-Canada et du Bas-Canada après 1791",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Le mécontentement envers le gouvernement colonial\nLe pouvoir du Conseil législatif\nLe refus de la responsabilité ministérielle\nLe manque de pouvoir de la Chambre d'assemblée\nLes revendications des Patriotes pour obtenir des réformes politiques",
    updatedAt: "2026-06-15T17:48:28.647Z"
  },
  {
    id: "Q409",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence immédiate du rejet des revendications patriotes par le gouvernement britannique en 1837.",
    aspects: [{aspect: "Soulèvements de 1837-1838"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "papineau_foule.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "La tenue d'assemblées populaires.\nLa mobilisation des Patriotes.",
    updatedAt: "2026-06-12T15:33:00.180Z"
  },
  {
    id: "Q410",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence des assemblées populaires organisées par les Patriotes en 1837.",
    aspects: [{aspect: "Soulèvements de 1837-1838"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "aut_col_britannique_rebellions.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Émission de mandats d'arrestation contre des chefs patriotes.\nRépression du mouvement patriote.\nDéploiement de troupes britanniques.\nArrestation de Patriotes.\nAugmentation des tensions politiques.\nDéclenchement du conflit armé.\nDébut des rébellions de 1837.",
    updatedAt: "2026-06-12T15:54:40.050Z"
  },
  {
    id: "Q411",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence des résolutions Russell adoptées en 1837.",
    aspects: [{aspect: "Soulèvements de 1837-1838"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« En 1837, le gouvernement britannique rejette les principales revendications formulées par les Patriotes. Cette décision provoque l'indignation d'une partie de la population et entraîne l'organisation de nombreux rassemblements politiques dans la colonie. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 3."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "La tenue d'assemblées populaires.",
    updatedAt: "2026-06-12T15:38:09.865Z"
  },
  {
    id: "Q412",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Similitude",
    enonce: "À partir des documents A et B, indiquez une similitude dans les revendications polituques entre les mouvements de contestation du Bas-Canada et du Haut-Canada.",
    aspects: [{aspect: "Soulèvements de 1837-1838"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les représentants du Parti patriote réclament que les membres du Conseil exécutif soient responsables devant les élus de la Chambre d'assemblée plutôt que devant le gouverneur. »",
            soustitre: "Bas-Canada",
            source: "Adapté de Jean-François Cardin et autres, Le Québec : héritages et projets, 1994."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les réformistes dénoncent le pouvoir exercé par le Family Compact et souhaitent que le gouvernement tienne davantage compte de la volonté des représentants élus. »",
            soustitre: "Haut-Canada",
            source: "Adapté de J.M.S. Careless, Canada: A Story of Challenge."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Les deux mouvements réclament des réformes politiques.\nLes deux mouvements souhaitent accroître le pouvoir de l'Assemblée élue.\nLes deux mouvements contestent le pouvoir des autorités nommées.\nLes deux mouvements demandent un gouvernement plus représentatif.",
    updatedAt: "2026-06-18T23:35:16.890Z"
  },
  {
    id: "Q413",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P4 — 1791 – 1840",
    points: 3,
    enonce: "Expliquez comment les moyens utilisés par les Patriotes pour faire valoir leurs revendications entraînent des conséquences dans la colonie en 1837.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• un moyen utilisé par les Patriotes\n• une réaction des autorités coloniales\n• une conséquence dans la colonie",
    aspects: [{aspect: "Soulèvements de 1837-1838"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "assemblee_six_comtes.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Après l'échec des démarches politiques et l'arrestation de plusieurs chefs du mouvement, des combats éclatent entre les Patriotes et les troupes britanniques dans différentes régions de la colonie. »",
            source: "Adapté de Michel Brunet, Les Canadiens après la Conquête."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "aut_col_britannique_rebellions.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 5},
    guide: "Les Patriotes organisent des assemblées populaires (un moyen utilisé par les Patriotes) afin de faire valoir leurs revendications. En réaction, les autorités coloniales émettent des mandats d'arrestation contre plusieurs chefs patriotes (une réaction des autorités coloniales). Cette situation contribue au déclenchement du conflit armé en 1837 (une conséquence dans la colonie).",
    updatedAt: "2026-06-15T12:20:08.753Z"
  },
  {
    id: "Q414",
    niveau: 3,
    oi: "Situer dans le temps",
    periode: "P4 — 1791 – 1840",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période durant laquelle surviennent les faits présentés dans le document A.",
    aspects: [{aspect: "Capitaux et infrastructures"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "inauguration_canal_lachine.png",
            soustitre: "Inauguration du canal Lachine",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "image", ref: "ligne_1790-1850.png"},
    guide: "C",
    updatedAt: "2026-06-12T16:03:49.321Z"
  },
  {
    id: "Q415",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de la création des banques sur l'économie du Bas-Canada.",
    aspects: [{aspect: "Capitaux et infrastructures"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Au début du XIXe siècle, des institutions financières recueillent l'argent des déposants et mettent des capitaux à la disposition des marchands et des entrepreneurs afin de soutenir leurs projets commerciaux.",
            source: "Adapté de Paul-André Linteau, Histoire du Québec contemporain."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Les entreprises ont davantage accès au financement.\nLes investissements augmentent.\nLe commerce se développe.\nL'économie de la colonie se développe.",
    updatedAt: "2026-06-12T16:07:58.181Z"
  },
  {
    id: "Q416",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P4 — 1791 – 1840",
    points: 3,
    enonce: "Expliquez comment la création d'institutions financières contribue au développement économique de la colonie au début du XIXe siècle.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• une institution financière\n• un moyen utilisé pour soutenir les activités économiques\n• un effet sur l'économie de la colonie",
    aspects: [{aspect: "Capitaux et infrastructures"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "fondation_banque_mtl.png",
            soustitre: "Fondation d'une institution financière au XIXe siècle",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« L'accès au crédit permet à plusieurs hommes d'affaires d'investir dans le commerce, les transports et différents projets de développement. »",
            source: "Adapté de Serge Courville, Histoire du Québec."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "inauguration_canal_lachine.png",
            soustitre: "Aménagement d'une infrastructure de transport",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 5},
    guide: "La Banque de Montréal (une institution financière) accorde des prêts aux commerçants et aux entrepreneurs (un moyen utilisé pour soutenir les activités économiques). Ces prêts favorisent les investissements et le développement du commerce dans la colonie (un effet sur l'économie de la colonie).",
    updatedAt: "2026-06-15T12:19:35.007Z"
  },
  {
    id: "Q417",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de la construction des canaux sur le commerce de la colonie.",
    aspects: [{aspect: "Capitaux et infrastructures"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« La construction de canaux permet aux navires de contourner certains obstacles naturels du fleuve Saint-Laurent et de circuler plus facilement entre différentes régions de la colonie. »",
            source: "Adapté de Serge Courville, Histoire du Québec : une société dans le monde."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Augmentation des échanges commerciaux.\nFacilitation du transport des marchandises.\nDéveloppement du commerce.\nAccroissement de la circulation des marchandises.\nExpansion des activités commerciales.",
    updatedAt: "2026-06-12T16:17:35.673Z"
  },
  {
    id: "Q418",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez un moyen de transport dont le développement s'accélère à partir des années 1830.",
    aspects: [{aspect: "Capitaux et infrastructures"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "chemin_de_fer_locomotive.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Le chemin de fer.\nLe transport ferroviaire.",
    updatedAt: "2026-06-12T16:20:12.913Z"
  },
  {
    id: "Q419",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P4 — 1791 – 1840",
    points: 3,
    enonce: "Expliquez comment la construction d'infrastructures de transport terrestres favorise le développement économique de la colonie.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• une infrastructure de transport aménagée\n• une amélioration des transports\n• un effet sur l'économie de la colonie",
    aspects: [{aspect: "Capitaux et infrastructures"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "chemin_de_fer_locomotive.png",
            soustitre: "Chemin de fer Champlain and St. Lawrence",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Dans la première moitié du XIXe siècle, de nouvelles voies ferrées relient progressivement plusieurs localités de la colonie. Les déplacements deviennent plus réguliers et les échanges entre les régions sont facilités. »",
            source: "Adapté de Paul-André Linteau, René Durocher et Jean-Claude Robert, Histoire du Québec contemporain, tome 1 : De la Confédération à la crise (1867-1929), Boréal."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "port_mtl_1830.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 5},
    guide: "Le chemin de fer (une infrastructure de transport aménagée) permet de transporter plus rapidement les personnes et les marchandises (une amélioration des transports). Cette amélioration favorise les échanges commerciaux et contribue au développement économique de la colonie (un effet sur l'économie de la colonie).",
    updatedAt: "2026-06-15T12:19:02.768Z"
  },
  {
    id: "Q420",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Indiquez le principal point sur lequel ces acteurs sont d'accord.",
    aspects: [{aspect: "Capitaux et infrastructures"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Le commerce de la colonie a besoin d'établissements capables de fournir les capitaux nécessaires à la croissance des entreprises et des échanges. »",
            auteur: "John Molson",
            source: "Adapté des écrits et de l'action de John Molson lors de la fondation de la Banque de Montréal, vers 1817."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Une institution financière solide favoriserait les investissements et contribuerait à la prospérité commerciale de la colonie. »",
            auteur: "Horatio Gates",
            source: "Adapté des positions défendues par Horatio Gates et les fondateurs de la Banque de Montréal, vers 1817."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Le rôle des banques dans le développement économique de la colonie.",
    updatedAt: "2026-06-18T23:36:48.814Z"
  },
  {
    id: "Q421",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Divergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Indiquez le principal point sur lequel ces acteurs sont en désaccord.",
    aspects: [{aspect: "Capitaux et infrastructures"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les représentants élus doivent avoir le droit de décider de l'utilisation des revenus de la colonie, puisque ces fonds concernent l'ensemble de la population. »",
            auteur: "Louis-Joseph Papineau",
            source: "Adapté d'un discours de Louis-Joseph Papineau à la Chambre d'assemblée du Bas-Canada, vers 1830."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« L'administration de la colonie doit conserver le contrôle des dépenses nécessaires à son bon fonctionnement, sans dépendre entièrement de l'Assemblée. »",
            auteur: "Gouverneur Dalhousie",
            source: "Adapté de la correspondance du gouverneur Dalhousie, vers 1828."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "L'utilisation des fonds publics.\nLe contrôle des dépenses de la colonie.\nL'administration des revenus publics.\nLe pouvoir de décider des dépenses publiques.",
    updatedAt: "2026-06-18T23:37:20.574Z"
  },
  {
    id: "Q422",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Changement",
    enonce: "À partir des documents A et B, indiquez un changement dans l'organisation du territoire au Bas-Canada au cours de la première moitié du XIXe siècle.",
    aspects: [{aspect: "Agriculture"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "territoire_agricole_1800.png",
            soustitre: "Organisation territoriale du Bas-Canada vers 1800",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "territoire_agricole_1830.png",
            soustitre: "Organisation territoriale du Bas-Canada vers 1830",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "L'apparition des cantons.\nL'établissement de cantons en plus des seigneuries.",
    updatedAt: "2026-06-13T12:44:13.144Z"
  },
  {
    id: "Q423",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez le nom des lois britanniques qui accordent un traitement préférentiel au blé des colonies.",
    aspects: [{aspect: "Agriculture"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "corn_laws.png",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Les Corn Laws.",
    updatedAt: "2026-06-12T17:58:30.594Z"
  },
  {
    id: "Q424",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Différence",
    enonce: "À partir des documents A et B, indiquez une différence dans l'organisation du territoire entre la seigneurie et le canton.",
    aspects: [{aspect: "Agriculture"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "territoire_agricole_1800.png",
            soustitre: "Organisation territoriale du Bas-Canada vers 1800",
            auteur: "Vallée du Saint-Laurent",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "territoire_agricole_1830.png",
            soustitre: "Organisation territoriale du Bas-Canada vers 1830",
            auteur: "Nouvelles régions de colonisation",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Les terres des seigneuries sont longues et étroites alors que celles des cantons sont plus carrées ou rectangulaires.",
    updatedAt: "2026-06-18T23:38:21.301Z"
  },
  {
    id: "Q425",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Cause et conséquence",
    enonce: "Les documents A et B présentent des faits liés au développement de la culture du blé dans la colonie au début du XIXe siècle. Indiquez la lettre du document qui présente une cause et la lettre du document qui présente une conséquence.",
    aspects: [{aspect: "Agriculture"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "corn_laws_exportations.png",
            soustitre: "Exportations de blé du Bas-Canada vers la Grande-Bretagne entre 1800 et 1840",
            source: "Données illustratives adaptées de Fernand Ouellet, Histoire économique et sociale du Québec, 1760-1850."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "corn_laws_tarifs.png",
            soustitre: "Tarifs appliqués au blé importé par la Grande-Bretagne",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 2."
          }
        ]
      }
    ],
    reponse: {type: "cause-consequence"},
    guide: {
      type: "grille",
      entetes: ["Cause", "Conséquence"],
      rangees: [
        ["B", "A"]
      ]
    },
    updatedAt: "2026-06-19T20:38:18.604Z"
  },
  {
    id: "Q426",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P4 — 1791 – 1840",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A et B, indiquez s'il y a changement ou continuité dans l'organisation du territoire au Bas-Canada entre le début et le milieu du XIXe siècle. Justifiez votre réponse à l'aide d'un fait et d'un repère de temps.",
    aspects: [{aspect: "Agriculture"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "territoire_agricole_1800.png",
            soustitre: "Organisation territoriale du Bas-Canada vers 1800",
            auteur: "Vallée du Saint-Laurent",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "territoire_agricole_1830.png",
            soustitre: "Organisation territoriale du Bas-Canada vers 1830",
            auteur: "Nouvelles régions de colonisation",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Changement\nIl y a changement, car au milieu du XIXe siècle de nouveaux cantons sont ouverts dans plusieurs régions de la colonie, alors qu'au début du XIXe siècle le territoire est principalement organisé en seigneuries.\n\nContinuité\nIl y a continuité, car au milieu du XIXe siècle le régime seigneurial structure encore l'occupation du territoire dans la vallée du Saint-Laurent, comme au début du XIXe siècle.",
    updatedAt: "2026-06-14T12:11:35.861Z"
  },
  {
    id: "Q427",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez un objectif poursuivi par la Grande-Bretagne lors de l'adoption des Corn Laws.",
    aspects: [{aspect: "Agriculture"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Au début du XIXe siècle, les autorités britanniques cherchent à favoriser les échanges commerciaux à l'intérieur de l'Empire en accordant certains avantages aux produits coloniaux. »",
            source: "Adapté de Serge Courville, Histoire du Québec : une société dans le monde."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Favoriser le commerce à l'intérieur de l'Empire britannique\nAccorder un avantage commercial aux colonies britanniques\nFavoriser les exportations de blé des colonies britanniques\nProtéger le marché britannique contre la concurrence étrangère",
    updatedAt: "2026-06-14T13:01:39.463Z"
  },
  {
    id: "Q428",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Indiquez le principal point sur lequel ces acteurs sont d'accord.",
    aspects: [{aspect: "Agriculture"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« La culture répétée du blé sur les mêmes terres entraîne progressivement une diminution de la fertilité des sols. »",
            source: "Adapté de Fernand Ouellet, Histoire économique et sociale du Québec, 1760-1850."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« L'exploitation intensive des terres agricoles contribue à l'épuisement des sols dans plusieurs régions du Bas-Canada. »",
            source: "Adapté de Jean Hamelin, Histoire du Québec."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "L'épuisement des sols agricoles.\nLa diminution de la fertilité des sols.\nLes effets de l'exploitation intensive des terres agricoles.\nLa dégradation des terres agricoles.",
    updatedAt: "2026-06-18T23:39:10.945Z"
  },
  {
    id: "Q429",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A à C présentent la position de trois acteurs à l'égard des Corn Laws. Nommez l'acteur qui présente une position différente et comparez sa position à celle des deux autres acteurs.",
    aspects: [{aspect: "Agriculture"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les cultivateurs et les marchands des colonies retirent d'importants avantages du traitement préférentiel accordé à leurs céréales sur le marché britannique. »",
            source: "John Richardson, marchand de Montréal, vers 1830. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Le commerce du blé de la colonie dépend largement des conditions favorables offertes aux produits coloniaux dans les ports britanniques. »",
            source: "George Moffatt, marchand de Montréal, vers 1835. Adapté."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Les tarifs imposés aux céréales étrangères limitent injustement l'accès des producteurs américains au marché britannique. »",
            source: "Producteur de blé américain, pétition adressée au Parlement britannique, vers 1835. Adapté."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Les producteurs de blé américains s'opposent aux Corn Laws (la différence), alors que George Moffatt et John Richardson y sont favorables (la similitude).",
    updatedAt: "2026-06-18T23:41:14.336Z"
  },
  {
    id: "Q430",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une cause de la crise agricole des années 1830 au Bas-Canada.",
    aspects: [{aspect: "Agriculture"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "bas_canada_sols_appauvris.png",
            soustitre: "Crise agricole au Bas-Canada dans les années 1830",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "L'appauvrissement des sols\nLa diminution de la fertilité des sols\nLa culture intensive du blé\nL'exploitation répétée des mêmes terres agricoles",
    updatedAt: "2026-06-14T13:21:09.255Z"
  },
  {
    id: "Q431",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de la crise agricole au Bas-Canada dans les années 1830.",
    aspects: [{aspect: "Agriculture"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "bas_canada_crise_agricole.png",
            soustitre: "Départ d'une famille rurale au Bas-Canada",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Colonisation de nouvelles régions\nDéplacement de familles vers des régions de colonisation\nMigration vers de nouveaux territoires\nÉtablissement de familles dans de nouvelles régions",
    updatedAt: "2026-06-14T13:24:19.774Z"
  },
  {
    id: "Q432",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P4 — 1791 – 1840",
    points: 3,
    enonce: "Expliquez comment l'évolution du commerce des fourrures dans la première moitié du XIXe siècle contribue à la transformation du territoire exploité.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• une difficulté liée au commerce des fourrures\n• une mesure prise par les marchands\n• une conséquence sur le territoire exploité",
    aspects: [{aspect: "Commerce des fourrures"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "provenance_fourrures_marchands.png",
            soustitre: "Provenances des fourrures",
            source: "Adapté de Harold A. Innis, The Fur Trade in Canada, University of Toronto Press."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Devant l'épuisement progressif des ressources dans les territoires exploités depuis longtemps, les compagnies de fourrures poursuivent leur expansion vers l'Ouest, atteignant les Prairies puis les Rocheuses au XIXe siècle. »",
            source: "Adapté de Serge Courville, Le Québec : genèses et mutations du territoire, Presses de l'Université Laval."
          }
        ]
      },
      {
        type: "textes",
        cols: [{titre: "Document C", ref: "territoire_compagnies_fourrure.png", source: "Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "L'épuisement progressif des fourrures dans les régions exploitées (la difficulté liée au commerce des fourrures) pousse les marchands à établir de nouveaux postes de traite vers l'Ouest (la mesure prise par les marchands). Cette mesure entraîne l'expansion du territoire exploité jusqu'aux Prairies et aux Rocheuses (la conséquence sur le territoire exploité).",
    updatedAt: "2026-06-15T12:35:02.759Z"
  },
  {
    id: "Q433",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Continuité",
    enonce: "À partir du document A, indiquez un élément de continuité concernant la production de blé au Bas-Canada entre 1834 et 1840.",
    aspects: [{aspect: "Agriculture"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "crise_agricole_production_ble.png",
            soustitre: "Production de blé au Bas-Canada entre 1832-1840",
            source: "Adapté de Fernand Ouellet, Histoire économique et sociale du Québec, 1760-1850, Fides, 1966."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Il y a continuité, car entre 1834 et 1840 le Bas-Canada enregistre un déficit de production agricole (blé) chaque année ou la production de blé demeure insuffisante pour répondre aux besoins de la population.",
    updatedAt: "2026-06-14T17:37:55.563Z"
  },
  {
    id: "Q434",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P4 — 1791 – 1840",
    points: 3,
    enonce: "Expliquez comment les relations entre la Compagnie de la Baie d'Hudson et la Compagnie du Nord-Ouest conduisent à une intervention des autorités britanniques en 1821.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• une caractéristique des relations entre les deux compagnies\n• une conséquence de cette situation\n• une mesure prise par les autorités britanniques",
    aspects: [{aspect: "Commerce des fourrures"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "compagnies_fourrures_1820.png",
            soustitre: "Bataille de Seven Oaks",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les autorités britanniques estiment que la concurrence entre les compagnies nuit à la rentabilité du commerce des fourrures. Elles favorisent donc leur regroupement sous une même administration en 1821. »",
            source: "Adapté de Serge Courville, Le Québec : genèses et mutations du territoire, Presses de l'Université Laval."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "postes_traite_1795-1820.png",
            soustitre: "Évolution du nombre de postes de traite vers 1795 et vers 1820",
            source: "Adapté de Gilles Laporte, Histoire du Québec : une société nord-américaine, Chenelière Éducation, 2014."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 5},
    guide: "La Compagnie de la Baie d'Hudson et la Compagnie du Nord-Ouest se livrent une forte concurrence pour contrôler le commerce des fourrures (une caractéristique des relations entre les deux compagnies). Cette situation entraîne des conflits et une augmentation des coûts liés à la traite des fourrures (une conséquence de cette situation). Les autorités britanniques approuvent la fusion des deux compagnies en 1821 (une mesure prise par les autorités britanniques).",
    updatedAt: "2026-06-15T12:17:28.874Z"
  },
  {
    id: "Q435",
    niveau: 3,
    oi: "Situer dans l'espace",
    periode: "P4 — 1791 – 1840",
    points: 1,
    soustag: "Situer 1 élément",
    enonce: "À partir du document A, indiquez la lettre correspondant à la région vers laquelle les activités de traite des fourrures se sont déplacées au début du XIXe siècle.",
    aspects: [{aspect: "Commerce des fourrures"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "territoire_exploite_fourrure_1820.png",
            source: "Carte du Canada. Adaptée d'après d-maps.com."
          }
        ]
      }
    ],
    reponse: {type: "tableau_2col"},
    guide: "B",
    updatedAt: "2026-06-15T12:43:43.060Z"
  },
  {
    id: "Q436",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de la diminution des fourrures dans les régions des Grands Lacs et de la vallée du Saint-Laurent sur les activités de traite.",
    aspects: [{aspect: "Commerce des fourrures"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "provenance_fourrures_marchands.png",
            soustitre: "Provenance des fourrures exportées vers 1780 et vers 1820",
            source: "Adapté de Harold A. Innis, The Fur Trade in Canada, University of Toronto Press."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Expansion des activités de traite vers l'Ouest\nDéplacement des activités de traite vers l'Ouest\nExpansion des territoires exploités vers les Prairies\nExploitation accrue de l'Ouest\nOuverture de nouveaux territoires de traite dans l'Ouest\nDéveloppement de la traite dans les Prairies et au-delà",
    updatedAt: "2026-06-15T13:15:47.498Z"
  },
  {
    id: "Q437",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une raison de l'expansion des territoires exploités pour la traite des fourrures vers les Prairies.",
    aspects: [{aspect: "Commerce des fourrures"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "fourrures_1780-1820.png",
            soustitre: "Nombre approximatif de fourrures provenant des principales régions de traite",
            source: "Adapté de Harold A. Innis, The Fur Trade in Canada, University of Toronto Press, 1930."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Diminution du nombre de fourrures provenant de la vallée du Saint-Laurent et des Grands Lacs\nDiminution des fourrures dans la vallée du Saint-Laurent et les Grands Lacs\nRaréfaction des fourrures dans les régions traditionnellement exploitées\nÉpuisement progressif des ressources en fourrures dans l'Est\nBaisse des approvisionnements en provenance des Grands Lacs et de la vallée du Saint-Laurent",
    updatedAt: "2026-06-15T13:11:47.965Z"
  },
  {
    id: "Q438",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Changement",
    enonce: "À partir du document A, indiquez un changement dans l'exploitation des territoires liés au commerce des fourrures entre 1780 et 1820.",
    aspects: [{aspect: "Commerce des fourrures"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "fourrures_1780-1820.png",
            soustitre: "Nombre approximatif de fourrures provenant des principales régions de traite",
            source: "Adapté de Harold A. Innis, The Fur Trade in Canada, University of Toronto Press, 1930."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Les activités de traite se déplacent vers l'Ouest entre 1780 et 1820.\nLes territoires exploités pour le commerce des fourrures s'étendent des Grands Lacs vers les Prairies et l'Ouest.\nL'importance des territoires de l'Ouest augmente alors que celle de la vallée du Saint-Laurent et des Grands Lacs diminue entre 1780 et 1820.",
    updatedAt: "2026-06-15T13:15:33.908Z"
  },
  {
    id: "Q439",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Continuité",
    enonce: "À partir du document A, indiquez un élément de continuité dans l'importance du commerce des fourrures entre 1780 et 1820.",
    aspects: [{aspect: "Commerce des fourrures"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "exportations_fourrure_1780-1820.png",
            soustitre: "Nombre approximatif de fourrures exportées entre 1780 et 1820",
            source: "Adapté de Harold A. Innis, The Fur Trade in Canada: An Introduction to Canadian Economic History, University of Toronto Press, 1930."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Le commerce des fourrures demeure important entre 1780 et 1820.\nLes exportations de fourrures demeurent élevées entre 1780 et 1820.\nLe nombre de fourrures exportées reste important tout au long de la période.\nLe commerce des fourrures constitue toujours une activité économique importante vers 1780 et vers 1820.",
    updatedAt: "2026-06-15T13:23:37.614Z"
  },
  {
    id: "Q440",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez la mesure approuvée par les autorités britanniques concernant la Compagnie de la Baie d'Hudson et la Compagnie du Nord-Ouest en 1821.",
    aspects: [{aspect: "Commerce des fourrures"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« En 1821, les autorités britanniques approuvent le regroupement des principales compagnies de fourrures afin de réduire les conflits commerciaux et de mieux organiser les activités de traite dans les territoires exploités. »",
            source: "Adapté de Harold A. Innis, The Fur Trade in Canada: An Introduction to Canadian Economic History, University of Toronto Press, 1930."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "La fusion de la Compagnie de la Baie d'Hudson et de la Compagnie du Nord-Ouest.",
    updatedAt: "2026-06-15T13:26:57.839Z"
  },
  {
    id: "Q441",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Le document présente la position de trois acteurs sur l'avenir du commerce des fourrures dans le Nord-Ouest. Nommez l'acteur qui présente une position différente et comparez sa position à celle des deux autres acteurs.",
    aspects: [{aspect: "Commerce des fourrures"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« La concurrence excessive nuit au commerce des fourrures. Une administration efficace du territoire et des postes de traite permet d'assurer la stabilité et la rentabilité des activités dans le Nord-Ouest. »",
            auteur: "George Simpson",
            source: "dapté de la correspondance de George Simpson, gouverneur de la Compagnie de la Baie d'Hudson, vers 1825."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Le commerce serait plus prospère si davantage de commerçants pouvaient circuler librement et participer aux échanges dans le Nord-Ouest. »",
            auteur: "Peter Skene Ogden",
            source: "Adapté des mémoires et correspondances de Peter Skene Ogden, vers les années 1820."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Il est souhaitable que le commerce des fourrures soit exercé sous une autorité capable de maintenir l'ordre et d'éviter les conflits qui ont longtemps opposé les compagnies. »",
            auteur: "Lord Bathurst",
            source: "Adapté de la correspondance de Lord Bathurst, secrétaire d'État aux Colonies, vers 1821."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Peter Skene Ogden est favorable à une plus grande liberté dans le commerce des fourrures (la différence), alors que George Simpson et Lord Bathurst appuient le maintien d'un commerce encadré par les grandes compagnies de traite (la similitude).",
    updatedAt: "2026-06-18T23:44:38.966Z"
  },
  {
    id: "Q442",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Similitude",
    enonce: "Les documents A et B présentent la situation économique de deux compagnies de fourrures vers 1820. Indiquez une similitude entre ces deux compagnies.",
    aspects: [{aspect: "Commerce des fourrures"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« La multiplication des postes de traite et la concurrence dans les territoires de l'Ouest entraînent des dépenses considérables pour notre compagnie. »",
            soustitre: "Compagnie du Nord-Ouest",
            source: "Adapté de la correspondance de George Simpson, vers 1820."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les coûts associés au maintien des postes de traite et au transport des marchandises réduisent les bénéfices de notre entreprise. »",
            soustitre: "Compagnie de la Baie d'Hudson",
            source: "Adapté de la correspondance de William McGillivray, vers 1820."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "La Compagnie de la Baie d'Hudson et la Compagnie du Nord-Ouest éprouvent des difficultés financières\nLes deux compagnies font face à des dépenses élevées\nLes deux compagnies voient leurs coûts augmenter\nLes deux compagnies ont des problèmes de rentabilité\nLes deux compagnies subissent les conséquences de la concurrence",
    updatedAt: "2026-06-18T23:44:54.363Z"
  },
  {
    id: "Q443",
    niveau: 3,
    oi: "Mettre en relation des faits",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "4 documents",
    enonce: "Les documents A à D présentent des caractéristiques associées à deux compagnies de fourrures au début du XIXe siècle. Associez chaque document à la compagnie correspondante.",
    aspects: [{aspect: "Commerce des fourrures"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Une charte royale accorde à cette compagnie le monopole du commerce des fourrures dans un vaste territoire couvrant plusieurs bassins hydrographiques des terres de Rupert. »",
            source: "Adapté de Harold A. Innis, The Fur Trade in Canada, University of Toronto Press, 1930."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les voyageurs quittent Montréal, empruntent les Grands Lacs et parcourent les Prairies afin d'approvisionner les postes de traite établis dans les territoires de l'Ouest. »",
            source: "Adapté de Jacques Mathieu, La Nouvelle-France : les Français en Amérique du Nord, Presses de l'Université Laval."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Notre compagnie administre un vaste territoire drainé par les cours d'eau se jetant dans la baie d'Hudson, où convergent les fourrures recueillies par les Autochtones. »",
            source: "Adapté de Serge Courville, Le Québec : genèses et mutations du territoire, Presses de l'Université Laval."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document D",
            texte: "« Les activités de traite s'étendent des Grands Lacs jusqu'aux Rocheuses. Les postes de l'Ouest permettent d'obtenir des fourrures dans de nouveaux territoires exploités. »",
            source: "Adapté de Gilles Havard et Cécile Vidal, Histoire de l'Amérique française, Flammarion."
          }
        ]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: ["Compagnie de la Baie d'Hudson", "Compagnie du Nord-Ouest"],
      double: true
    },
    guide: {
      type: "grille",
      entetes: ["Compagnie de la Baie d'Hudson", "Compagnie du Nord-Ouest"],
      rangees: [
        ["A et C", "B et D"]
      ]
    },
    updatedAt: "2026-06-15T14:04:13.233Z"
  },
  {
    id: "Q444",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez le nom d'une compagnie de traite des fourrures en activité dans les années 1820.",
    aspects: [{aspect: "Commerce des fourrures"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Deux grandes entreprises se disputent l'approvisionnement en fourrures dans l'Ouest, multipliant les postes de traite et les dépenses liées à leurs activités. »",
            source: "Adapté de Serge Courville, Le Québec : genèses et mutations du territoire, Presses de l'Université Laval."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Compagnie de la Baie d'Hudson\nCompagnie du Nord-Ouest",
    updatedAt: "2026-06-15T14:10:38.815Z"
  },
  {
    id: "Q445",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez une mesure adoptée par la Grande-Bretagne pour favoriser l’importation de bois provenant de ses colonies.",
    aspects: [{aspect: "Commerce du bois"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les marchands britanniques bénéficient d'avantages commerciaux lorsqu'ils importent du bois provenant des colonies de l'Empire. »",
            source: "Adapté de Gilles Paquet et Jean-Pierre Wallot, Patronage et pouvoir dans le Bas-Canada."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "La Grande-Bretagne accorde des tarifs préférentiels sur le bois provenant de ses colonies.",
    updatedAt: "2026-06-15T15:06:20.875Z"
  },
  {
    id: "Q446",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Cause et conséquence",
    enonce: "Les documents A et B présentent des éléments liés aux tarifs préférentiels accordés au bois provenant des colonies britanniques. Inscrivez la lettre du document qui présente :\n• une cause de l'adoption des tarifs préférentiels sur le bois colonial\n• une conséquence de cette mesure sur le commerce du bois au Bas-Canada",
    aspects: [{aspect: "Commerce du bois"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« L'exploitation forestière prend une importance croissante dans la colonie et mobilise un nombre grandissant de travailleurs dans les chantiers, les scieries et les ports. »",
            source: "Adapté de Serge Courville, Le Québec : genèses et mutations du territoire."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Le blocus continental limite les échanges commerciaux entre la Grande-Bretagne et plusieurs pays européens fournisseurs de bois. Les autorités britanniques se tournent alors vers leurs colonies pour s'approvisionner. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 2."
          }
        ]
      }
    ],
    reponse: {type: "cause-consequence"},
    guide: {
      type: "grille",
      entetes: ["Cause", "Conséquence"],
      rangees: [
        ["B", "A"]
      ]
    },
    updatedAt: "2026-06-15T15:24:18.775Z"
  },
  {
    id: "Q447",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P4 — 1791 – 1840",
    points: 3,
    enonce: "Expliquez comment la situation en Europe au début des années 1800 contribue au développement du commerce du bois au Bas-Canada.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• la situation en Europe vers 1800\n• une mesure mise en place par la Grande-Bretagne\n• une conséquence sur le commerce du bois au Bas-Canada",
    aspects: [{aspect: "Commerce du bois"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "blocus_continental.png",
            soustitre: "Restrictions commerciales entre certais pays européens",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Pour encourager l'importation de bois provenant de ses colonies, la Grande-Bretagne impose des droits de douane plus élevés sur le bois étranger que sur le bois colonial. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 2."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "exportation_bois_1790-1840.png",
            soustitre: "Évolution de la valeur des exportations de bois du Bas-Canada entre 1790 et 1840",
            source: "Adapté de Fernand Ouellet, Histoire économique et sociale du Québec, 1760-1850, Montréal, Fides."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 5},
    guide: "Le blocus continental imposé par Napoléon limite les échanges entre la Grande-Bretagne et plusieurs pays européens fournisseurs de bois (la situation en Europe vers 1800). Pour favoriser l'approvisionnement en bois provenant de ses colonies, la Grande-Bretagne accorde des tarifs préférentiels au bois colonial (une mesure mise en place). Cette mesure entraîne une augmentation des exportations et contribue au développement du commerce du bois au Bas-Canada (une conséquence sur le commerce du bois).",
    updatedAt: "2026-06-15T15:33:47.971Z"
  },
  {
    id: "Q448",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez une mesure adoptée par Napoléon au début des années 1800 pour limiter les échanges avec la Grande-Bretagne.",
    aspects: [{aspect: "Commerce du bois"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "blocus_continental.png",
            soustitre: "Restrictions commerciales entre l'Europe napoléonienne et la Grande-Bretagne",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Le blocus continental.",
    updatedAt: "2026-06-15T15:35:27.345Z"
  },
  {
    id: "Q449",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence du blocus continental sur l'approvisionnement de la Grande-Bretagne en bois.",
    aspects: [{aspect: "Commerce du bois"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« La marine britannique dépend largement du bois importé d'Europe du Nord. Les événements qui perturbent ce commerce obligent les autorités à envisager d'autres sources d'approvisionnement. »",
            source: "Adapté de Gilles Paquet et Jean-Pierre Wallot, Patronage et pouvoir dans le Bas-Canada."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Recherche de nouvelles sources d'approvisionnement en bois\nDifficulté à importer du bois européen",
    updatedAt: "2026-06-15T15:37:12.291Z"
  },
  {
    id: "Q450",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez le nom d'une activité liée à la transformation du bois au Bas-Canada au début du XIXe siècle.",
    aspects: [{aspect: "Commerce du bois"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "bois_nouvelles_activites.png",
            soustitre: "Transformation du bois au Bas-Canada vers 1820",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Sciage du bois\nTransformation du bois dans une scierie\nProduction de madriers\nProduction de planches\nÉquarrissage du bois",
    updatedAt: "2026-06-15T15:40:32.605Z"
  },
  {
    id: "Q451",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de la transformation du bois sur les emplois au Bas-Canada au début des années 1800.",
    aspects: [{aspect: "Commerce du bois"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "bois_emplois.png",
            soustitre: "Évolution du nombre de travailleurs dans l'industrie du bois au Bas-Canada entre 1800 et 1840",
            source: "Données adaptées de Fernand Ouellet, Histoire économique et sociale du Québec, 1760-1850."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Création d'emplois\nAugmentation du nombre de travailleurs\nHausse de l'emploi dans l'industrie du bois\nPlus de personnes travaillent dans les scieries et les chantiers forestiers",
    updatedAt: "2026-06-15T17:42:43.010Z"
  },
  {
    id: "Q452",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P4 — 1791 – 1840",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A et B, indiquez un élément de changement ou de continuité concernant l'industrie du bois entre 1800 et 1840. Justifiez votre réponse par des faits et un repère de temps.",
    aspects: [{aspect: "Commerce du bois"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "bois_emplois_1800.png",
            soustitre: "Répartition des travailleurs de l'industrie du bois au Bas-Canada en 1800",
            source: "Données adaptées de Fernand Ouellet, Histoire économique et sociale du Québec, 1760-1850."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "bois_emplois_1840.png",
            soustitre: "Répartition des travailleurs de l'industrie du bois au Bas-Canada en 1840",
            source: "Données adaptées de Fernand Ouellet, Histoire économique et sociale du Québec, 1760-1850."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Changement\nIl y a changement, car entre 1800 et 1840, le nombre de travailleurs liés à l'industrie du bois augmente, passant d'environ 2 500 à 14 000.\nou\nIl y a changement, car entre 1800 et 1840, les métiers liés à l'industrie du bois occupent un nombre beaucoup plus élevé de travailleurs.\n\nContinuité\nIl y a continuité, car en 1800 comme en 1840, les bûcherons constituent le groupe de travailleurs le plus nombreux dans l'industrie du bois.\nou\nIl y a continuité, car les bûcherons demeurent les principaux travailleurs de l'industrie du bois entre 1800 et 1840.",
    updatedAt: "2026-06-15T16:41:42.683Z"
  },
  {
    id: "Q453",
    niveau: 3,
    oi: "Situer dans l'espace",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Situer 2 éléments",
    enonce: "À partir du dodument A, indiquez la lettre qui correspond aux régions exploitées pour le commerce du bois au Bas-Canada : \n• Saguenay\n• Vallée de l'Outaouais",
    aspects: [{aspect: "Commerce du bois"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "territoire_bois_exploitation.png", source: "Carte du Québec. Adaptée d'après d-maps.com."}]
      }
    ],
    reponse: {
      type: "mettre-en-relation",
      elements: ["Saguenay", "Vallée de l'Outaouais"]
    },
    guide: {
      type: "grille",
      entetes: ["Saguenay", "Vallée de l'Outaouais"],
      rangees: [
        ["B", "A"]
      ]
    },
    updatedAt: "2026-06-15T16:49:48.089Z"
  },
  {
    id: "Q454",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence de l'exploitation forestière sur l'occupation du territoire.",
    aspects: [{aspect: "Commerce du bois"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« L'exploitation des ressources forestières favorise l'établissement de nouvelles populations dans plusieurs régions situées à l'écart de la vallée du Saint-Laurent. »",
            source: "Adapté de Serge Courville, Le Québec : genèses et mutations du territoire."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Colonisation de nouvelles régions\nÉtablissement de nouvelles populations dans les régions forestières",
    updatedAt: "2026-06-15T16:51:17.712Z"
  },
  {
    id: "Q455",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez une industrie qui se développe grâce à l'essor du commerce du bois au Bas-Canada au début du XIXe siècle.",
    aspects: [{aspect: "Commerce du bois"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "bois_chantier_naval.png",
            soustitre: "Chantier naval au Bas-Canada vers 1830",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Construction navale\nIndustrie de la construction navale\nChantiers navals\nIndustrie navale",
    updatedAt: "2026-06-15T16:56:49.489Z"
  },
  {
    id: "Q456",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P4 — 1791 – 1840",
    points: 3,
    enonce: "Expliquez comment une mesure des autorités britanniques entraîne une conséquence économique pour le Bas-Canada.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• une mesure mise en place par les autorités britanniques\n• une ressource en demande\n• une industrie liée au bois en croissance",
    aspects: [{aspect: "Commerce du bois"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Afin de favoriser les importations provenant de ses colonies, la Grande-Bretagne impose des droits de douane plus élevés sur le bois étranger et accorde des avantages tarifaires au bois colonial. »",
            source: "Adapté de Gilles Laporte, Brève histoire du Québec."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "bois_nouvelles_activites.png",
            soustitre: "Transformation du bois au Bas-Canada vers 1820",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "bois_chantier_naval.png",
            soustitre: "Chantier naval au Bas-Canada vers 1830",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 5},
    guide: "La Grande-Bretagne accorde des tarifs préférentiels au bois provenant de ses colonies (une mesure). Cette politique augmente la demande pour le bois du Bas-Canada (une ressource en demande). L'essor du commerce du bois favorise alors le développement de la construction navale, une industrie en croissance dans la colonie (une industrie liée au bois en croissance).",
    updatedAt: "2026-06-15T17:23:37.935Z"
  },
  {
    id: "Q457",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis sont-ils d'accord?",
    aspects: [{aspect: "Commerce du bois"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les tarifs préférentiels accordés au bois provenant des colonies permettent à la Grande-Bretagne d'assurer son approvisionnement en ressources forestières. »",
            auteur: "Lord Liverpool",
            source: "Adapté d'une politique commerciale britannique du début du XIXe siècle."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les droits de douane réduits sur le bois colonial favorisent les échanges commerciaux et augmentent les profits liés au commerce du bois. »",
            auteur: "William Molson",
            source: "Adapté des écrits de marchands britanniques établis à Québec ou à Montréal."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Les tarifs préférentiels sur le bois colonial.",
    updatedAt: "2026-06-18T23:45:31.426Z"
  },
  {
    id: "Q458",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Divergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis sont-ils d'désaccord?",
    aspects: [{aspect: "Commerce du bois"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Aucun navire britannique ne doit être admis dans les ports soumis à l'autorité de la France ou de ses alliés. »",
            auteur: "Napoléon Bonaparte",
            source: "Adapté du décret de Berlin, 1806."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Le commerce maritime est essentiel à la prospérité économique de la Grande-Bretagne et doit être maintenu malgré les obstacles imposés par la France. »",
            auteur: "Robert Jenkinson",
            source: "Adapté d'un discours de Robert Jenkinson, début du XIXe siècle."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Le blocus continental.",
    updatedAt: "2026-06-18T23:46:36.429Z"
  },
  {
    id: "Q459",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A à C  présentent la position de trois acteurs sur les tarifs préférentiels. Nommez l'acteur qui présente une position différente et comparez sa position à celle des deux autres acteurs.",
    aspects: [{aspect: "Commerce du bois"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les mesures adoptées par la Grande-Bretagne favorisent le commerce du bois colonial et contribuent à la prospérité économique de la colonie. »",
            auteur: "George Prevost",
            source: "Adapté de documents administratifs du gouverneur George Prevost, vers 1810."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les droits de douane avantageux accordés au bois provenant des colonies britanniques nuisent aux commerçants étrangers qui souhaitent vendre leurs produits sur le marché britannique. »",
            auteur: "Marchand américain",
            source: "Adapté de correspondances commerciales américaines du début du XIXe siècle."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Les préférences commerciales accordées aux colonies encouragent les investissements et le développement des activités économiques liées au bois. »",
            auteur: "John Molson",
            source: "Adapté de la correspondance d'affaires de John Molson, début du XIXe siècle."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Le marchand américain s'oppose aux tarifs préférentiels (la différence), alors que George Prevost et John Molson les appuient (la similitude).",
    updatedAt: "2026-06-18T23:47:12.598Z"
  },
  {
    id: "Q460",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    enonce: "Indiquez une difficulté économique qui pousse plusieurs Britanniques à quitter leur pays dans la première moitié du XIXe siècle.",
    aspects: [{aspect: "Mouvements migratoires"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Au début du XIXe siècle, plusieurs familles britanniques quittent leur région d’origine dans l’espoir d’améliorer leurs conditions de vie. Les colonies d’Amérique du Nord attirent alors un nombre croissant de nouveaux arrivants.",
            source: "Adapté de John A. Dickinson et Brian Young, Brève histoire socio-économique du Québec, Septentrion."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Le manque de travail\nLe chômage\nLa pauvreté\nLes difficultés économiques en Grande-Bretagne",
    updatedAt: "2026-06-15T23:44:57.313Z"
  },
  {
    id: "Q461",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez le nom d’une maladie qui touche les immigrants arrivant dans la colonie au XIXe siècle.",
    aspects: [{aspect: "Mouvements migratoires"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Des milliers d’immigrants arrivent chaque année dans la colonie. Les autorités craignent alors la propagation d’une maladie contagieuse transportée à bord des navires et imposent des mesures sanitaires. »",
            source: "Adapté de Serge Courville, Le Québec : genèses et mutations du territoire, Presses de l’Université Laval."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Le choléra.",
    updatedAt: "2026-06-16T00:00:12.822Z"
  },
  {
    id: "Q462",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez une mesure mise en place pour limiter la propagation des maladies chez les immigrants arrivant dans la colonie au XIXe siècle.",
    aspects: [{aspect: "Mouvements migratoires"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les conditions de voyage à bord des navires sont souvent difficiles. Afin de protéger la population de la colonie, les autorités mettent en place certaines mesures à l’arrivée des immigrants. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 3, Septentrion."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Une station de quarantaine à Grosse-Île",
    updatedAt: "2026-06-15T23:53:28.012Z"
  },
  {
    id: "Q463",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Cause et conséquence",
    enonce: "Les documents A et B présentent des éléments liés à l’immigration britannique dans la première moitié du XIXe siècle. Indiquez la lettre du document qui présente une cause de cette immigration et la lettre du document qui présente une conséquence.",
    aspects: [{aspect: "Mouvements migratoires"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "grosse_ile_station_quarantaine.png",
            soustitre: "Station de quarantaine à Grosse-Île",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Au cours de la première moitié du XIXe siècle, de nombreux Britanniques cherchent de meilleures possibilités pour assurer l’avenir de leur famille. Les colonies attirent alors un nombre croissant de nouveaux arrivants. »",
            source: "Adapté de Serge Courville, Le Québec : genèses et mutations du territoire, Presses de l'Université Laval."
          }
        ]
      }
    ],
    reponse: {type: "cause-consequence"},
    guide: {
      type: "grille",
      entetes: ["Cause", "Conséquence"],
      rangees: [
        ["B", "A"]
      ]
    },
    updatedAt: "2026-06-15T23:59:44.570Z"
  },
  {
    id: "Q464",
    niveau: 3,
    oi: "Situer dans l'espace",
    periode: "P4 — 1791 – 1840",
    points: 1,
    soustag: "Situer 1 élément",
    enonce: "À partir du document A, indiquez la lettre qui correspond à une région où s'établissent de nombreux immigrants britanniques dans la première moitié du XIXe siècle.",
    aspects: [{aspect: "Mouvements migratoires"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "territoire_immigration_1820.png", source: "Carte du Québec. Adaptée d'après d-maps.com."}]
      }
    ],
    reponse: {type: "tableau_2col"},
    guide: "A",
    updatedAt: "2026-06-16T00:06:47.984Z"
  },
  {
    id: "Q465",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une cause de l’augmentation de la population urbaine dans la première moitié du XIXe siècle.",
    aspects: [{aspect: "Mouvements migratoires"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les principaux centres urbains du Bas-Canada connaissent une forte croissance au XIXe siècle. Une partie de cette augmentation provient du déplacement de la population à l’intérieur même de la colonie. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 3, Septentrion."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Exode rural.\nImmigration britannique.",
    updatedAt: "2026-06-16T00:09:11.081Z"
  },
  {
    id: "Q466",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une cause de l’augmentation de la population urbaine dans la première moitié du XIXe siècle.",
    aspects: [{aspect: "Mouvements migratoires"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Chaque année, des milliers de nouveaux arrivants débarquent dans les principaux ports du Bas-Canada. Plusieurs choisissent de s’établir dans les villes, où se concentrent les activités commerciales et les emplois. »",
            source: "Adapté de Serge Courville, Le Québec : genèses et mutations du territoire, Presses de l'Université Laval."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Exode rural.\nImmigration britannique.",
    updatedAt: "2026-06-16T00:09:53.887Z"
  },
  {
    id: "Q467",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une raison qui pousse plusieurs habitants à quitter les campagnes du Bas-Canada vers 1830.",
    aspects: [{aspect: "Mouvements migratoires"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Dans plusieurs seigneuries du Bas-Canada, les terres disponibles deviennent plus rares au début du XIXe siècle. Certaines familles choisissent alors de quitter leur milieu d’origine pour s’établir ailleurs. »",
            source: "Adapté de Serge Courville, Le Québec : genèses et mutations du territoire, Presses de l'Université Laval."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Le manque de terres disponibles\nLa surpopulation des seigneuries\nLes difficultés agricoles",
    updatedAt: "2026-06-16T00:11:08.656Z"
  },
  {
    id: "Q468",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez le pays vers lequel émigrent de nombreux Canadiens dans la première moitié du XIXe siècle.",
    aspects: [{aspect: "Mouvements migratoires"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Au cours de la première moitié du XIXe siècle, plusieurs habitants quittent le Bas-Canada pour s’établir au sud de la frontière. Ils espèrent y trouver davantage de terres et de possibilités économiques. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 3, Septentrion."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Les États-Unis.",
    updatedAt: "2026-06-16T00:12:29.468Z"
  },
  {
    id: "Q469",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    enonce: "Indiquez une conséquence du manque de terres disponibles dans les seigneuries du Bas-Canada vers 1830.",
    aspects: [{aspect: "Mouvements migratoires"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Entre la fin du XVIIIe siècle et les années 1830, la population des terres seigneuriales augmente beaucoup plus rapidement que les superficies disponibles pour la culture. »",
            source: "Adapté de François Charbonneau, Jacques Marchand et Jean-Pierre Sansregret, Mon histoire, Guérin, 1985."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "L'émigration vers les États-Unis\nLa migration vers les villes\nL'ouverture de régions de colonisation",
    updatedAt: "2026-06-16T00:15:09.380Z"
  },
  {
    id: "Q470",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "À partir du document A, indiquez le nom d'une région de colonisation qui accueille de nombreux immigrants britanniques dans la première moitié du XIXe siècle.",
    aspects: [{aspect: "Mouvements migratoires"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "cantons_immigration.png", source: "Carte du sud du Quéec. Adaptée d'après d-maps.com."}]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Cantons-de-l'Est.",
    updatedAt: "2026-06-16T00:22:02.582Z"
  },
  {
    id: "Q471",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis sont-ils en accord?",
    aspects: [{aspect: "Mouvements migratoires"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Le développement de nouveaux établissements permettrait d'accueillir davantage de familles et de mettre en valeur des territoires encore peu occupés. La colonie bénéficierait ainsi d'une population plus nombreuse et mieux répartie. »",
            auteur: "George Ramsay (comte de Dalhousie), gouverneur du Bas-Canada",
            source: "Adapté d'un rapport de George Ramsay, gouverneur du Bas-Canada, vers 1825."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Plusieurs terres demeurent disponibles dans certains territoires récemment ouverts. Il serait souhaitable d'encourager les familles à s'y établir afin de favoriser le développement de ces nouveaux établissements. »",
            auteur: "Peter Patterson, agent de colonisation et propriétaire foncier des Cantons-de-l'Est",
            source: "Adapté d'écrits de Peter Patterson, vers 1830."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "La colonisation de nouveaux territoires.\nL'établissement de familles dans de nouvelles régions.\nLe développement de nouvelles régions de colonisation.\nL'ouverture de nouveaux territoires au peuplement.",
    updatedAt: "2026-06-18T23:47:56.732Z"
  },
  {
    id: "Q472",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Divergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis sont-ils en désaccord?",
    aspects: [{aspect: "Mouvements migratoires"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les terres sont devenues difficiles à obtenir dans notre région. Plusieurs familles envisagent maintenant de quitter la colonie afin de trouver ailleurs de meilleures possibilités pour assurer leur avenir. »",
            auteur: "Habitant canadien",
            source: "Adapté d'une lettre d'un habitant du Bas-Canada, vers 1835."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« De vastes territoires demeurent disponibles dans certaines régions récemment ouvertes. Les habitants devraient être encouragés à s'y établir plutôt qu'à quitter la colonie. »",
            auteur: "Agent de colonisation",
            source: "Adapté d'un rapport d'un agent de colonisation du Bas-Canada, vers 1838."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "L'émigration vers les États-Unis.",
    updatedAt: "2026-06-18T23:48:38.242Z"
  },
  {
    id: "Q473",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Lea documents A à C présentent le point de vue de trois acteurs sur les mouvements migratoires. Nommez l'acteur qui présente une position différente et comparez sa position à celle des deux autres acteurs.",
    aspects: [{aspect: "Mouvements migratoires"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Après plusieurs semaines de voyage, nous souhaitons poursuivre notre route le plus rapidement possible afin de rejoindre notre lieu d'établissement. »",
            auteur: "Immigrant britannique",
            source: "Adapté du témoignage d'un immigrant britannique, vers 1832."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les voyageurs présentant des symptômes doivent être isolés afin d'éviter la propagation de la maladie parmi les passagers et la population de la colonie. »",
            auteur: "Médecin de la station de quarantaine",
            source: "Adapté d'un rapport médical de Grosse-Île, vers 1832."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Des mesures de contrôle sont nécessaires à l'arrivée des navires afin de protéger la population contre l'introduction de maladies contagieuses. »",
            auteur: "Administrateur colonial",
            source: "Adapté d'un rapport du gouvernement du Bas-Canada, vers 1832."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "L'immigrant britannique s'oppose à la station quarantaine (la différence), alors que le médecin de la station de quarantaine et l'administrateur colonial y sont favorables (la similitude).",
    updatedAt: "2026-06-16T02:55:17.876Z"
  },
  {
    id: "Q474",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une raison qui explique l'alliance entre certaines Premières Nations et les Britanniques durant la guerre de 1812.",
    aspects: [{aspect: "Guerre anglo-américaine de 1812"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Plusieurs chefs autochtones craignent que les colons américains poursuivent leur expansion vers l'ouest et s'emparent de nouveaux territoires. Ils choisissent donc d'appuyer les Britanniques contre les États-Unis. »",
            source: "Adapté de Gilles Havard et Cécile Vidal, Histoire de l'Amérique française."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Protéger leur territoire contre l'expansion américaine\nEmpêcher les Américains d'occuper leurs terres",
    updatedAt: "2026-06-16T00:39:17.549Z"
  },
  {
    id: "Q475",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une raison qui explique l'appui de l'Église catholique aux autorités britanniques pendant la guerre de 1812.",
    aspects: [{aspect: "Guerre anglo-américaine de 1812"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« L'évêque Plessis encourage les fidèles à soutenir le gouvernement britannique, qui permet à l'Église catholique de pratiquer librement sa religion dans la colonie. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Préserver les privilèges accordés à l'Église catholique\nMaintenir la liberté de religion accordée par les Britanniques",
    updatedAt: "2026-06-16T00:39:56.568Z"
  },
  {
    id: "Q476",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Continuité",
    enonce: "Indiquez un élément de continuité dans les relations entre l'Église catholique et le gouvernement britannique avant et pendant la guerre de 1812.",
    aspects: [{aspect: "Guerre anglo-américaine de 1812"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Depuis l'Acte de Québec de 1774, les autorités britanniques permettent à l'Église catholique de pratiquer librement sa religion et de percevoir la dîme dans la colonie. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Durant la guerre de 1812, Mgr Plessis invite les fidèles à demeurer loyaux envers les autorités britanniques et à soutenir la défense de la colonie. »",
            source: "Adapté de Marcel Trudel, Histoire de la Nouvelle-France."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "L'Église catholique et le gouvernement britannique maintiennent de bonnes relations avant et pendant la guerre de 1812\nL'Église catholique continue d'appuyer les autorités britanniques\nLa collaboration entre l'Église catholique et le gouvernement britannique se poursuit",
    updatedAt: "2026-06-16T00:41:21.809Z"
  },
  {
    id: "Q477",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez une façon dont les Canadiens participent à la guerre de 1812.",
    aspects: [{aspect: "Guerre anglo-américaine de 1812"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Des milliers d'habitants du Bas-Canada sont mobilisés dans les bataillons de milice afin de défendre la colonie contre les attaques américaines. »",
            source: "Adapté de Béatrice Craig, Backwoods Consumers and Homespun Capitalists."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Ils servent dans la milice\nIls participent à la défense de la colonie\nIls prennent part aux combats",
    updatedAt: "2026-06-16T00:41:59.924Z"
  },
  {
    id: "Q478",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Changement",
    enonce: "Indiquez un changement dans le sentiment d'appartenance de plusieurs Canadiens à la suite de la guerre de 1812.",
    aspects: [{aspect: "Guerre anglo-américaine de 1812"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« La victoire contre les États-Unis renforce chez plusieurs habitants du Bas-Canada le sentiment d'avoir contribué à la défense de leur colonie et d'appartenir à une même collectivité. »",
            source: "Adapté de Allan Greer, Patriotes et loyaux."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Le sentiment d'appartenance à la colonie se renforce\nPlusieurs Canadiens sont davantage fiers d'avoir défendu leur colonie\nPlusieurs Canadiens développent un sentiment national plus fort",
    updatedAt: "2026-06-16T00:53:12.045Z"
  },
  {
    id: "Q479",
    niveau: 3,
    oi: "Situer dans l'espace",
    periode: "P4 — 1791 – 1840",
    points: 1,
    soustag: "Situer 1 élément",
    enonce: "À partir du document A, indiquez la lettre qui correspond à l'endroit où a lieu la bataille de Châteauguay durant la guerre de 1812.",
    aspects: [{aspect: "Guerre anglo-américaine de 1812"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_bataille_chateauguay.png", source: "Carte du Québec. Adaptée d'après d-maps.com."}]
      }
    ],
    reponse: {type: "tableau_2col"},
    guide: "A",
    updatedAt: "2026-06-16T00:48:02.873Z"
  },
  {
    id: "Q480",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Convergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux personnages historiques. Sur quel point précis sont-ils en accord?",
    aspects: [{aspect: "Guerre anglo-américaine de 1812"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Dans les circonstances actuelles, chaque habitant doit contribuer à la protection du pays. Il est du devoir des fidèles de soutenir les autorités et de participer à la défense de la colonie contre l'envahisseur. »",
            soustitre: "Mgr Joseph-Octave Plessis",
            source: "Adapté d'une lettre pastorale de Mgr Joseph-Octave Plessis, 1812."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les miliciens et les soldats doivent demeurer unis afin de repousser les forces américaines. La sécurité de la colonie dépend des efforts déployés pour empêcher l'invasion du territoire. »",
            soustitre: "Charles-Michel de Salaberry",
            source: "Adapté d'un rapport de Charles-Michel de Salaberry concernant la campagne de 1813."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "La défense de la colonie contre l'invasion américaine.",
    updatedAt: "2026-06-18T23:49:08.591Z"
  },
  {
    id: "Q481",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Divergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis sont-ils en désaccord?",
    aspects: [{aspect: "Guerre anglo-américaine de 1812"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Les habitants doivent répondre à l'appel des autorités et contribuer à la défense de la colonie. Chacun a le devoir de participer à l'effort nécessaire pour repousser l'envahisseur. »",
            auteur: "Mgr Joseph-Octave Plessis",
            source: "Adapté d'une lettre pastorale de Mgr Joseph-Octave Plessis, 1812."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Plusieurs cultivateurs se plaignent des périodes de service dans la milice, affirmant que leur présence est nécessaire aux travaux agricoles et au soutien de leur famille. »",
            auteur: "Habitant du Bas-Canada",
            source: "Adapté de témoignages d'habitants du Bas-Canada durant la guerre de 1812."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "La participation des habitants à la milice.",
    updatedAt: "2026-06-18T23:50:30.574Z"
  },
  {
    id: "Q482",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez un moyen utilisé par les autorités britanniques pour favoriser la diffusion de la religion anglicane au début du XIXe siècle.",
    aspects: [{aspect: "Église anglicane"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« La Royal Institution for the Advancement of Learning reçoit la responsabilité d'administrer les écoles financées par le gouvernement colonial. Plusieurs de ses dirigeants sont membres du clergé anglican. »",
            source: "Adapté de Cornelius Jaenen, Histoire du Québec."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "La création d'écoles publiques gratuites.",
    updatedAt: "2026-06-16T02:42:34.817Z"
  },
  {
    id: "Q483",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    enonce: "Indiquez une conséquence de la création du diocèse anglican de Québec en 1793.",
    aspects: [{aspect: "Église anglicane"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« En 1793, Londres autorise la création d'un diocèse anglican à Québec. Un évêque est nommé pour superviser le clergé anglican et les institutions religieuses de la colonie. »",
            source: "Adapté de Jean Hamelin, Histoire du catholicisme québécois."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Le renforcement de la présence de l'Église anglicane dans la colonie\nUne meilleure organisation de l'Église anglicane dans la colonie",
    updatedAt: "2026-06-16T02:44:30.228Z"
  },
  {
    id: "Q484",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Divergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis sont-ils en désaccord?",
    aspects: [{aspect: "Église anglicane"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« L'Église d'Angleterre doit occuper une place importante dans cette province. Elle contribue à la stabilité des institutions britanniques et à la formation morale des sujets de Sa Majesté. »",
            auteur: "Jacob Mountain",
            source: "Adapté d'une lettre de Jacob Mountain, premier évêque anglican de Québec, vers 1805."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les habitants de cette colonie demeurent attachés à la religion catholique. Il importe que leurs institutions religieuses continuent de répondre à leurs besoins spirituels et à leurs traditions. »",
            auteur: "Joseph-Octave Plessis",
            source: "Adapté d'une correspondance de Joseph-Octave Plessis, évêque catholique de Québec, vers 1810."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Le rôle de l'Église anglicane dans la colonie.",
    updatedAt: "2026-06-18T23:50:41.417Z"
  },
  {
    id: "Q485",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez une recommandation politique formulée dans le Rapport Durham.",
    aspects: [{aspect: "Rapport Durham"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "org_pol_gouvernement_responsable_1848.png",
            soustitre: "Organisation politique proposée dans le Rapport Durham",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Instauration de la responsabilité ministérielle\nUnion du Haut-Canada et du Bas-Canada\nCréation d'un gouvernement unique pour les deux Canadas",
    updatedAt: "2026-06-16T13:42:27.085Z"
  },
  {
    id: "Q486",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez un problème politique observé par Durham concernant le fonctionnement politique du Bas-Canada.",
    aspects: [{aspect: "Rapport Durham"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Malgré l'appui de la majorité des députés, plusieurs projets proposés par l'Assemblée sont régulièrement rejetés par les autorités coloniales. Cette impasse contribue à la détérioration du climat politique au Bas-Canada. »",
            source: "François-Xavier Garneau, Histoire du Canada."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Les élus n'ont pas le contrôle du gouvernement\nLe gouverneur détient trop de pouvoir\nL'absence de responsabilité ministérielle\nLes conflits entre l'Assemblée et l'exécutif",
    updatedAt: "2026-06-16T13:18:41.855Z"
  },
  {
    id: "Q487",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez une raison qui explique la recommandation de Durham concernant la responsabilité ministérielle.",
    aspects: [{aspect: "Rapport Durham"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Depuis plusieurs années, les conflits entre l'Assemblée législative et les autorités coloniales empêchent le gouvernement de fonctionner efficacement. Les représentants élus disposent de peu d'influence sur les décisions prises par l'exécutif. »",
            source: "Adapté de John George Lambton, comte de Durham, Rapport sur les affaires de l'Amérique du Nord britannique, 1839."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Les élus disposent de peu de pouvoir réel\nL'exécutif n'est pas responsable devant les élus\nLes conflits entre l'Assemblée et le gouverneur paralysent le gouvernement\nLe fonctionnement politique est inefficace en raison des tensions entre les institutions",
    updatedAt: "2026-06-16T13:25:46.248Z"
  },
  {
    id: "Q488",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Cause",
    enonce: "Indiquez la principale cause des troubles survenus dans le Bas-Canada en 1837-1838 selon le Rapport Durham.",
    aspects: [{aspect: "Rapport Durham"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Je trouve dans le Bas-Canada deux nations vivant dans un même État. Les rivalités qui divisent la colonie ne découlent pas principalement de questions politiques, mais de l'opposition entre deux groupes de population d'origine différente. »",
            source: "Adapté de John George Lambton, comte de Durham, Rapport sur les affaires de l'Amérique du Nord britannique, 1839."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Le conflit entre Canadiens français et Britanniques\nLes tensions entre les deux groupes de population",
    updatedAt: "2026-06-16T13:59:54.724Z"
  },
  {
    id: "Q489",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez une recommandation territoriale formulée dans le Rapport Durham.",
    aspects: [{aspect: "Rapport Durham"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Afin d'améliorer l'administration des colonies britanniques d'Amérique du Nord, il serait souhaitable de réunir les deux provinces sous une même législature et un même gouvernement. »",
            source: "Adapté de John George Lambton, comte de Durham, Rapport sur les affaires de l'Amérique du Nord britannique, 1839."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "L'union du Haut-Canada et du Bas-Canada\nRéunir les deux Canadas en une seule colonie",
    updatedAt: "2026-06-16T13:39:19.200Z"
  },
  {
    id: "Q490",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 3,
    soustag: "Position – 3 acteurs",
    enonce: "Les documents A à C présentent la position de trois acteurs sur l'avenir des Canadiens français. Nommez l'acteur qui présente une position différente et comparez sa position à celle des deux autres acteurs.",
    aspects: [{aspect: "Rapport Durham"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Pour assurer l'unité et la stabilité de la colonie, il est nécessaire que la population canadienne-française adopte progressivement la langue, les institutions et les habitudes de la population britannique. »",
            auteur: "John George Lambton",
            source: "Adapté de John George Lambton, comte de Durham, Rapport sur les affaires de l'Amérique du Nord britannique, 1839."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Un peuple ne doit pas renoncer à sa langue ni à ses traditions. Les Canadiens doivent conserver leur identité nationale et défendre les droits qui leur appartiennent. »",
            auteur: "Louis-Joseph Papineau",
            source: "Adapté de Louis-Joseph Papineau, correspondance et écrits politiques, années 1840."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Le développement de notre peuple passe par l'instruction et le travail, mais non par l'abandon de notre langue ou de notre culture. Notre avenir repose sur la préservation de notre caractère national. »",
            auteur: "Étienne Parent",
            source: "Adapté d'Étienne Parent, conférences et textes politiques, années 1840."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Durham est favorable à l'assimilation des Canadiens français (la différence), alors que Louis-Joseph Papineau et Étienne Parent s'y opposent ou souhaitent préserver leur culture (la similitude).",
    updatedAt: "2026-06-18T23:51:48.705Z"
  },
  {
    id: "Q491",
    niveau: 3,
    oi: "Dégager des différences et des similitudes",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Divergence – 2 acteurs",
    enonce: "Les documents A et B présentent le point de vue de deux acteurs. Sur quel point précis sont-ils en désaccord?",
    aspects: [{aspect: "Rapport Durham"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Pour mettre fin aux divisions qui affaiblissent la colonie, il faut favoriser l'adoption graduelle des institutions, de la langue et des habitudes de la population britannique par l'ensemble de ses habitants. »",
            auteur: "John George Lambton",
            source: "Adapté de John George Lambton, comte de Durham, Rapport sur les affaires de l'Amérique du Nord britannique, 1839."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les Canadiens français peuvent participer pleinement aux institutions politiques tout en conservant leur langue, leur culture et les droits qui leur sont reconnus. »",
            auteur: "Louis-Hippolyte La Fontaine",
            source: "Adapté de Louis-Hippolyte La Fontaine, discours politiques, années 1840."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "L'assimilation des Canadiens français.",
    updatedAt: "2026-06-18T23:52:23.816Z"
  },
  {
    id: "Q492",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P4 — 1791 – 1840",
    points: 3,
    enonce: "Expliquez comment les difficultés observées dans le fonctionnement politique du Bas-Canada amènent Durham à recommander une réforme de l'exercice du pouvoir.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• un problème observé dans le fonctionnement des institutions\n• une conséquence politique de ce problème\n• une recommandation formulée par Durham",
    aspects: [{aspect: "Rapport Durham"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "org_pol_1791_acte_const.png",
            soustitre: "Organisation politique du Haut-Canada et du Bas-Canada après 1791",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les désaccords entre l'Assemblée législative et les autorités coloniales paralysent fréquemment l'administration de la colonie et alimentent les tensions politiques. »",
            source: "Adapté de Jacques Lacoursière, Histoire populaire du Québec, tome 3."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "org_pol_gouvernement_responsable_1848.png",
            soustitre: "Organisation politique proposée dans le Rapport Durham",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 5},
    guide: "Au Bas-Canada, les élus contrôlent peu le gouvernement (problème observé dans le fonctionnement des institutions). Cette situation provoque des tensions politiques entre l'Assemblée et les autorités coloniales (conséquence politique). Durham recommande donc la responsabilité ministérielle pour donner davantage d'influence aux représentants élus (recommandation formulée par Durham).",
    updatedAt: "2026-06-16T13:59:13.287Z"
  },
  {
    id: "Q493",
    niveau: 3,
    oi: "Établir des liens de causalité",
    periode: "P4 — 1791 – 1840",
    points: 3,
    enonce: "Expliquez comment l'analyse de la situation du Bas-Canada amène Durham à proposer une solution aux tensions qui divisent la colonie.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux.\n\n• une caractéristique de la population du Bas-Canada\n• un problème identifié par Durham\n• une mesure proposée dans son rapport",
    aspects: [{aspect: "Rapport Durham"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "population_bas-canada_1735.png",
            soustitre: "Composition de la population du Bas-Canada vers 1835",
            source: "Adapté de John A. Dickinson et Brian Young, Brève histoire socio-économique du Québec, Septentrion."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            texte: "« Les divisions qui opposent les habitants de la colonie constituent, selon Durham, la principale cause des difficultés observées dans le Bas-Canada. »",
            source: "Adapté du Rapport Durham, 1839."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            texte: "« Pour assurer l'harmonie dans la colonie, Durham estime que les Canadiens français devraient progressivement adopter la langue et les institutions de la population britannique. »",
            source: "Adapté du Rapport Durham, 1839."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 5},
    guide: "Au Bas-Canada, les Canadiens français sont majoritaires, mais une minorité britannique est aussi présente (caractéristique de la population). Selon Durham, les différences entre ces deux groupes causent des tensions dans la colonie (problème identifié par Durham). Il recommande donc l’assimilation des Canadiens français à la population britannique (solution proposée).",
    updatedAt: "2026-06-16T14:13:03.376Z"
  },
  {
    id: "Q494",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P4 — 1791 – 1840",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir du document A, indiquez s'il y a changement ou continuité concernant la présence de l'Église catholique et de l'Église anglicane dans la colonie entre 1790 et 1830. Justifiez votre réponse à l'aide de faits et d'un repère de temps.",
    aspects: [{aspect: "Église anglicane"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "eglise_paroisses_1790-1830.png",
            soustitre: "Évolution du nombre de paroisses catholiques et anglicanes dans la colonie, 1790-1830",
            source: "Adapté de Serge Courville, Le Québec : genèses et mutations du territoire, Québec, Presses de l'Université Laval."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Changement\nIl y a changement puisque le nombre de paroisses catholiques passe de 150 à 250 entre 1790 et 1830.\nIl y a changement puisque le nombre de paroisses anglicanes passe de 0 à 40 entre 1790 et 1830.\nIl y a changement puisque le nombre de paroisses catholiques et anglicanes augmente entre 1790 et 1830.\n\nContinuité\nIl y a continuité puisque les paroisses catholiques demeurent plus nombreuses que les paroisses anglicanes en 1790 comme en 1830.\nIl y a continuité puisque l'Église catholique compte davantage de paroisses que l'Église anglicane en 1790 comme en 1830.",
    updatedAt: "2026-06-16T18:04:41.206Z"
  },
  {
    id: "Q495",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P4 — 1791 – 1840",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir du document A, indiquez s'il y a changement ou continuité concernant les exportations du Bas-Canada entre 1800 et 1840. Justifiez votre réponse à l'aide de faits et d'un repère de temps.",
    aspects: [{aspect: "Commerce du bois"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "exportations_bas-canada.png",
            soustitre: "Valeur des exportations du Bas-Canada selon le principal produit exporté, 1800 et 1840",
            source: "Adapté de Fernand Ouellet, Histoire économique et sociale du Québec, 1760-1850, Montréal, Fides."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Changement\nIl y a changement puisque le bois passe de 15 % des exportations en 1800 à 65 % en 1840.\nIl y a changement puisque les fourrures passent de 45 % des exportations en 1800 à 10 % en 1840.\n\nContinuité\nIl y a continuité puisque le Bas-Canada exporte encore du blé et de la farine en 1800 et en 1840.\nIl y a continuité puisque les autres produits représentent 10 % des exportations en 1800 et en 1840.",
    updatedAt: "2026-06-16T18:12:54.764Z"
  },
  {
    id: "Q496",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Continuité",
    enonce: "À partir du document A, indiquez un élément de continuité concernant la destination des exportations de bois du Bas-Canada entre 1800 et 1840.",
    aspects: [{aspect: "Commerce du bois"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "bois_exportations_bas-canada.png",
            soustitre: "Destinations des exportations du Bas-Canada, 1800 à 1840",
            source: "Adapté de Fernand Ouellet, Histoire économique et sociale du Québec, 1760-1850, Montréal, Fides, 1966."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Il y a continuité puisque la Grande-Bretagne demeure la principale destination des exportations de bois en 1800 et en 1840.",
    updatedAt: "2026-06-16T18:20:16.946Z"
  },
  {
    id: "Q497",
    niveau: 3,
    oi: "Établir des faits",
    periode: "P4 — 1791 – 1840",
    points: 1,
    enonce: "Indiquez le nom des terres accordées à l’Église anglicane par l’Acte constitutionnel de 1791.",
    aspects: [{aspect: "Église anglicane"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Une partie des terres non concédées dans chaque canton est mise de côté afin d'assurer le soutien matériel de l'Église d'Angleterre. »",
            source: "Adapté de l'Acte constitutionnel de 1791."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "Les réserves du clergé.",
    updatedAt: "2026-06-16T18:26:38.534Z"
  },
  {
    id: "Q498",
    niveau: 3,
    oi: "Déterminer des changements et des continuités",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Continuité",
    enonce: "Indiquez un élément de continuité concernant le pouvoir du gouverneur sur les projets de loi adoptés par la Chambre d'assemblée entre 1792 et 1838.",
    aspects: [{aspect: "Débats parlementaires"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "gouverneur_veto.png",
            soustitre: "Activité législative et refus du gouverneur au Bas-Canada  entre 1792 et 1838",
            source: "Adapté de données sur les relations entre la Chambre d’assemblée du Bas-Canada et le gouverneur britannique sous le régime de l’Acte constitutionnel (1791-1838)."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Le gouverneur conserve le pouvoir de refuser des projets de loi pendant toute la période.\nLe gouverneur continue d'exercer son droit de veto entre 1792 et 1838.\nLe gouverneur maintient son autorité sur les lois adoptées par la Chambre d'assemblée.",
    updatedAt: "2026-06-16T18:36:37.578Z"
  },
  {
    id: "Q499",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence du commerce du bois sur les emplois dans la colonie.",
    aspects: [{aspect: "Commerce du bois"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "bois_emplois_1800-1840.png",
            soustitre: "Évolutiin des emplois liés à l’industrie du bois au Bas-Canada entre 1800 et 1830",
            source: "Adapté de Fernand Ouellet, Histoire économique et sociale du Québec, 1760-1850, Montréal, Fides."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Le commerce du bois crée de nombreux emplois dans la colonie.",
    updatedAt: "2026-06-16T18:51:58.925Z"
  },
  {
    id: "Q500",
    niveau: 3,
    oi: "Déterminer des causes et des conséquences",
    periode: "P4 — 1791 – 1840",
    points: 2,
    soustag: "Conséquence",
    enonce: "Indiquez une conséquence du développement du commerce du bois sur la construction navale au Bas-Canada.",
    aspects: [{aspect: "Commerce du bois"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "bois_navires.png",
            soustitre: "Nombre de navires construits au Bas-Canada entre 1800 et 1840",
            source: "Adapté de Serge Courville, Histoire du Québec : un parcours, Québec, Éditions CEC."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Le nombre de navires construits augmente.\nLa construction navale se développe.\nLes chantiers navals emploient davantage de travailleurs.",
    updatedAt: "2026-06-16T19:01:10.061Z"
  },
  {
    id: "Q501",
    niveau: 4,
    oi: "Déterminer des changements et des continuités",
    periode: "P5 — 1840 – 1896",
    points: 2,
    soustag: "Changement",
    enonce: "À partir des documents A et B, indiquez un changement dans l'organisation territoriale de la colonie entre 1791 et 1840.",
    aspects: [{aspect: "Acte d'Union"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_acte_constitutionnel_1791.png", source: "Récitus"}]
      },
      {
        type: "textes",
        cols: [{titre: "Document B", ref: "carte_acte_union_1840.jpg", source: "Reécitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 2},
    guide: "Entre 1791 et 1840, le Haut-Canada et le Bas-Canada sont réunis pour former la Province du Canada.\nEntre 1791 et 1840, la colonie passe d'une organisation en deux territoires distincts (Haut-Canada et Bas-Canada) à une seule colonie appelée Province du Canada.",
    updatedAt: "2026-06-18T12:35:29.900Z"
  },
  {
    id: "Q502",
    niveau: 4,
    oi: "Établir des faits",
    periode: "P5 — 1840 – 1896",
    points: 1,
    enonce: "Indiquez le nom de la colonie créée à la suite de l’Acte d’Union de 1840.",
    aspects: [{aspect: "Acte d'Union"}],
    documents: [
      {
        type: "textes",
        cols: [{titre: "Document A", ref: "carte_acte_union_1840.jpg", source: "Récitus."}]
      }
    ],
    reponse: {type: "lignes", nombre: 1},
    guide: "La Province du Canada.",
    updatedAt: "2026-06-18T12:46:36.050Z"
  },
  {
    id: "Q503",
    niveau: 4,
    oi: "Déterminer des changements et des continuités",
    periode: "P5 — 1840 – 1896",
    points: 3,
    soustag: "Changement ou continuité",
    enonce: "À partir des documents A et B, indiquez un changement ou une continuité dans l'organisation politique de la colonie entre 1791 et 1840. Justifiez votre réponse à l'aide de faits et d'un repère de temps.",
    aspects: [{aspect: "Acte d'Union"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "org_pol_1791_acte_const.png",
            soustitre: "Organisation politique du Haut-Canada et du Bas-Canada entre 1791 et 1840",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document B",
            ref: "org_pol_1840_acte_union.png",
            soustitre: "Organisation politique de la Province du Canada à partir de 1840",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 3},
    guide: "Changement\nEntre 1791 et 1840, l'organisation politique change. En 1791, le Haut-Canada et le Bas-Canada possèdent chacun leur propre chambre d'assemblée. En 1840, ils partagent une seule Assemblée législative.\n\nContinuité\nEntre 1791 et 1840, il y a continuité dans l'organisation politique de la colonie. En 1791 comme en 1840, la population élit des représentants à une assemblée législative.",
    updatedAt: "2026-06-18T12:52:51.755Z"
  },
  {
    id: "Q504",
    niveau: 4,
    oi: "Établir des liens de causalité",
    periode: "P5 — 1840 – 1896",
    points: 3,
    enonce: "Expliquez comment la constitution adoptée par les autorités britanniques en 1840 modifie la représentation politique des habitants de la Province du Canada.\n\nRépondez à la question en précisant les éléments ci-dessous et en les liant entre eux :\n\n• Le nom de la constitution adoptée en 1840\n• Un changement dans l'organisation politique de la colonie\n• Une conséquence pour la population du Bas-Canada",
    aspects: [{aspect: "Acte d'Union"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            texte: "« Londres réagit promptement à la publication du Rapport sur les affaires de l’Amérique septentrionale britannique. En 1840, l’union des colonies du Bas-Canada et du Haut-Canada est réalisée. »",
            source: "John A. Dickinson et Brian Young, Brève histoire socio-économique du Québec, Québec, Septentrion, 2009, p. 153."
          }
        ]
      },
      {
        type: "textes",
        cols: [{titre: "Document B", ref: "carte_acte_union_1840.jpg", source: "Récitus."}]
      },
      {
        type: "textes",
        cols: [
          {
            titre: "Document C",
            ref: "tableau_representation_politique_1840.jpg",
            soustitre: "Répartition des députés à l’Assemblée législative de la Province du Canada e 1840",
            source: "Adapté de Jacques Lacoursière, Jean Provencher et Denis Vaugeois, Canada-Québec : synthèse historique, Montréal, ERPI, 2000."
          }
        ]
      }
    ],
    reponse: {type: "lignes", nombre: 5},
    guide: "L'Acte d'Union (le nom de la constitution adoptée en 1840) est adopté par les autorités britanniques. Cette constitution crée une seule Assemblée législative pour le Haut-Canada et le Bas-Canada (un changement dans l'organisation politique de la colonie). Cette mesure réduit l'influence politique des habitants du Bas-Canada, qui ont le même nombre de députés que ceux du Canada-Ouest malgré une population plus nombreuse (une conséquence pour la population du Bas-Canada).",
    updatedAt: "2026-06-18T13:12:37.136Z"
  },
  {
    id: "Q505",
    niveau: 4,
    oi: "Situer dans le temps",
    periode: "P5 — 1840 – 1896",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période pendant laquelle se déroulent les faits présentés dans le document A.",
    aspects: [{aspect: "Acte d'Union"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "org_pol_1840_acte_union.png",
            soustitre: "Adoption de l'Acte d'Union",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "image", ref: "ligne_1830-1875.png"},
    guide: "A",
    updatedAt: "2026-06-18T13:38:10.374Z"
  },
  {
    id: "Q506",
    niveau: 4,
    oi: "Situer dans le temps",
    periode: "P5 — 1840 – 1896",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période pendant laquelle se déroulent les faits présentés dans le document A.",
    aspects: [{aspect: "Migrations"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "immigration_irlandaise.jpg",
            soustitre: "Immigration irlandaise",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "image", ref: "ligne_1845-1890.png"},
    guide: "A",
    updatedAt: "2026-06-18T13:33:45.882Z"
  },
  {
    id: "Q508",
    niveau: 4,
    oi: "Situer dans le temps",
    periode: "P5 — 1840 – 1896",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période pendant laquelle se déroulent les faits présentés dans le document A.",
    aspects: [{aspect: "Exploitations agricoles"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "traite_reciprocite.jpg",
            soustitre: "Traité de réciprocité",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "image", ref: "ligne_1845-1890.png"},
    guide: "A",
    updatedAt: "2026-06-21T00:47:18.080Z"
  },
  {
    id: "Q509",
    niveau: 4,
    oi: "Situer dans le temps",
    periode: "P5 — 1840 – 1896",
    points: 1,
    soustag: "Ligne du temps",
    enonce: "Sur la ligne du temps, encerclez la lettre qui correspond à la période pendant laquelle se déroulent les faits présentés dans le document A.",
    aspects: [{aspect: "Gouvernement responsable"}],
    documents: [
      {
        type: "textes",
        cols: [
          {
            titre: "Document A",
            ref: "org_pol_gouvernement_responsable_1848.png",
            soustitre: "Adoption du gouvernement responsable",
            source: "Reconstitution historique à des fins pédagogiques réalisée à l’aide de l’intelligence artificielle (ChatGPT/OpenAI), 2026."
          }
        ]
      }
    ],
    reponse: {type: "image", ref: "ligne_1830-1875.png"},
    guide: "B",
    updatedAt: "2026-06-21T00:49:44.370Z"
  }
]
