const REGLETTES_PRESET = {
  "Situer dans le temps": [
    { label:"2 pts — tous les faits",   colonnes:["2 points","0 point"], niveaux:[{pts:2,desc:"L'élève situe tous les faits dans le temps."},{pts:0,desc:"L'élève ne situe pas tous les faits dans le temps."}] },
    { label:"1 pt — les faits",          colonnes:["1 point","0 point"],  niveaux:[{pts:1,desc:"L'élève situe les faits dans le temps."},{pts:0,desc:"L'élève ne situe pas les faits dans le temps."}] }
  ],
  "Situer dans l'espace": [
    { label:"1 pt — le fait",    colonnes:["1 point","0 point"],  niveaux:[{pts:1,desc:"L'élève situe le fait dans l'espace."},{pts:0,desc:"L'élève ne situe pas le fait dans l'espace."}] },
    { label:"2 pts — le fait",   colonnes:["2 points","0 point"], niveaux:[{pts:2,desc:"L'élève situe le fait dans l'espace."},{pts:0,desc:"L'élève ne situe pas le fait dans l'espace."}] },
    { label:"2 pts — les faits", colonnes:["2 points","0 point"], niveaux:[{pts:2,desc:"L'élève situe les faits dans l'espace."},{pts:0,desc:"L'élève ne situe pas les faits dans l'espace."}] }
  ],
  "Dégager des différences et des similitudes": [
    { label:"2 pts — différence",           colonnes:["2 points","1 point","0 point"], niveaux:[{pts:2,desc:"L'élève dégage correctement la différence."},{pts:1,desc:"L'élève dégage plus ou moins correctement la différence."},{pts:0,desc:"L'élève dégage incorrectement la différence ou ne la dégage pas."}] },
    { label:"2 pts — similitude",            colonnes:["2 points","1 point","0 point"], niveaux:[{pts:2,desc:"L'élève dégage correctement la similitude."},{pts:1,desc:"L'élève dégage plus ou moins correctement la similitude."},{pts:0,desc:"L'élève dégage incorrectement la similitude ou ne la dégage pas."}] },
    { label:"2 pts — point de divergence",   colonnes:["2 points","1 point","0 point"], niveaux:[{pts:2,desc:"L'élève établit correctement le point de divergence entre les points de vue."},{pts:1,desc:"L'élève établit plus ou moins correctement le point de divergence ou ne présente que les deux points de vue."},{pts:0,desc:"L'élève établit incorrectement le point de divergence entre les points de vue ou ne l'établit pas."}] },
    { label:"2 pts — point de convergence",  colonnes:["2 points","1 point","0 point"], niveaux:[{pts:2,desc:"L'élève établit correctement le point de convergence entre les points de vue."},{pts:1,desc:"L'élève établit plus ou moins correctement le point de convergence entre les points de vue."},{pts:0,desc:"L'élève établit incorrectement le point de convergence entre les points de vue ou ne l'établit pas."}] },
    { label:"3 pts — acteur et positions (complexe)", variante:"acteur-positions", colonnes:["3 points","2 points","1 point","0 point"], niveaux:[] }
  ],
  "Déterminer des causes et des conséquences": [
    { label:"2 pts — facteur explicatif",          colonnes:["2 points","1 point","0 point"], niveaux:[{pts:2,desc:"L'élève détermine correctement le facteur explicatif."},{pts:1,desc:"L'élève détermine plus ou moins correctement le facteur explicatif."},{pts:0,desc:"L'élève détermine incorrectement le facteur explicatif ou ne le détermine pas."}] },
    { label:"2 pts — conséquence",                  colonnes:["2 points","1 point","0 point"], niveaux:[{pts:2,desc:"L'élève détermine correctement la conséquence."},{pts:1,desc:"L'élève détermine plus ou moins correctement la conséquence."},{pts:0,desc:"L'élève détermine incorrectement la conséquence ou ne la détermine pas."}] },
    { label:"2 pts — deux facteurs (2 sur 2)",      colonnes:["2 points","1 point","0 point"], niveaux:[{pts:2,desc:"L'élève détermine les deux facteurs explicatifs. (2 sur 2)"},{pts:1,desc:"L'élève détermine l'un des facteurs explicatifs. (1 sur 2)"},{pts:0,desc:"L'élève ne détermine pas les facteurs explicatifs. (0 sur 2)"}] },
    { label:"2 pts — facteur + conséquence (2 sur 2)", colonnes:["2 points","1 point","0 point"], niveaux:[{pts:2,desc:"L'élève détermine le facteur explicatif et la conséquence. (2 sur 2)"},{pts:1,desc:"L'élève détermine le facteur explicatif ou la conséquence. (1 sur 2)"},{pts:0,desc:"L'élève ne détermine pas le facteur explicatif ni la conséquence. (0 sur 2)"}] }
  ],
  "Mettre en relation des faits": [
    { label:"2 pts — 2 sur 2", colonnes:["2 points","1 point","0 point"], niveaux:[{pts:2,desc:"L'élève met en relation tous les faits. (2 sur 2)"},{pts:1,desc:"L'élève met en relation certains faits. (1 sur 2)"},{pts:0,desc:"L'élève ne met pas en relation les faits. (0 sur 2)"}] },
    { label:"2 pts — 3 sur 3", colonnes:["2 points","1 point","0 point"], niveaux:[{pts:2,desc:"L'élève met en relation tous les faits. (3 sur 3)"},{pts:1,desc:"L'élève met en relation certains faits. (2 sur 3)"},{pts:0,desc:"L'élève ne met pas en relation les faits. (1 ou 0 sur 3)"}] },
    { label:"2 pts — 4 sur 4", colonnes:["2 points","1 point","0 point"], niveaux:[{pts:2,desc:"L'élève met en relation tous les faits. (4 sur 4)"},{pts:1,desc:"L'élève met en relation certains faits. (3 ou 2 sur 4)"},{pts:0,desc:"L'élève ne met pas en relation les faits. (1 ou 0 sur 4)"}] }
  ],
  "Déterminer des changements et des continuités": [
    { label:"2 pts — changement", colonnes:["2 points","1 point","0 point"], niveaux:[{pts:2,desc:"L'élève détermine correctement le changement."},{pts:1,desc:"L'élève détermine plus ou moins correctement le changement."},{pts:0,desc:"L'élève détermine incorrectement le changement ou ne le détermine pas."}] },
    { label:"2 pts — continuité", colonnes:["2 points","1 point","0 point"], niveaux:[{pts:2,desc:"L'élève détermine correctement la continuité."},{pts:1,desc:"L'élève détermine plus ou moins correctement la continuité."},{pts:0,desc:"L'élève détermine incorrectement la continuité ou ne la détermine pas."}] },
    { label:"3 pts — changement ou continuité avec faits (complexe)", variante:"changement-continuité", colonnes:["3 points","2 points","1 point","0 point"], niveaux:[] }
  ],
  "Établir des liens de causalité": [
    { label:"3 pts — 3 éléments, 2 liens (complexe)", variante:"3 éléments — 2 liens", colonnes:["3 points","2 points","1 point","0 point"], niveaux:[
      {pts:3,desc:"L'élève précise les trois éléments et établit correctement deux liens de causalité."},
      {pts:2,desc:"L'élève précise les trois éléments et établit un lien de causalité, ou précise deux éléments et établit un lien de causalité."},
      {pts:1,desc:"L'élève précise les trois éléments ou deux éléments sans établir correctement de lien de causalité."},
      {pts:0,desc:"L'élève précise un seul élément ou n'en précise pas."}
    ]}
  ]
};
