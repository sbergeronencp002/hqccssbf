# Instructions projet — HQC · CSSBF

## Architecture

Site statique GitHub Pages — aucun backend. Tout tourne dans le navigateur.

### Fichiers clés

| Fichier | Rôle |
|---------|------|
| `index.html` | Site public (filtres, cartes, panier, prévisualisation, génération DOCX) |
| `admin.html` | Interface de saisie/modification des questions — pousse via GitHub Contents API |
| `app.js` | Toute la logique du site public (rendu, filtres, panier, DOCX) |
| `questions.js` | Données : `REGLETTES`, `IMAGE_DB`, `QUESTIONS` — généré et écrit par admin |
| `reglettes.js` | Préréglages de réglettes par OI (`REGLETTES_PRESET`) — chargé par admin uniquement |
| `contexte.js` | Données statiques : `PERIODES_PAR_NIVEAU`, `ASPECTS_PAR_PERIODE` |
| `style.css` | Styles du site public |
| `docx.js` | Librairie docx.js (857 Ko) — chargée en lazy au 1er clic « Générer » |
| `backups/questions-YYYY-MM-DD_HH-MM.js` | Backups auto avant chaque publication (admin) |

### Cache-bust actuel
`app.js?v=v39`, `style.css?v=v25`, `reglettes.js?v=v2` (admin) — incrémenter à chaque changement majeur.

---

## Index des fonctions — app.js

> Utiliser `Read offset=N limit=30` pour aller directement à la bonne ligne.

### Rendu public

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `escLine(s)` | 2 | Échappe `&<>` avant insertion HTML |
| `boldify(s)` | 5 | Convertit `**x**` → `<strong>` |
| `formatTexte(text)` | 8 | Formate énoncés (listes • et gras) |
| `oiStyle(oi)` | 35 | Retourne classe CSS + couleur pour une OI |
| `buildTileHtml(q)` | 420 | HTML d'une carte question dans la grille |
| `render(list)` | 441 | Affiche les cartes filtrées (pagination 50/page) |
| `renderMore()` | 456 | Charge 50 cartes supplémentaires |
| `renderDoc(d)` | 519 | HTML d'un document (texte/image/colonnes) |
| `renderReponse(q)` | 570 | HTML de l'espace réponse selon `q.reponse.type` |
| `buildReglettHTML(q)` | 200 | HTML de la réglette (+ variantes complexes hardcodées) |
| `openQModal(id)` | 325 | Ouvre le modal détail d'une question |
| `closeQModal()` | 380 | Ferme le modal |
| `toggleTexte(btn)` | 504 | Expand/collapse texte long dans un document |
| `openLightbox(src)` | 699 | Ouvre l'image en plein écran |

### Filtres

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `populateFilters()` | 45 | Initialise tous les filtres depuis les données |
| `fill(id, vals, placeholder)` | 72 | Remplit un `<select>` |
| `fillAspect(id, aspects, periodeOrder)` | 78 | Remplit le filtre aspect avec optgroups |
| `fillOi(id, ois, placeholder)` | 96 | Remplit le filtre OI |
| `onPeriodeChange()` | 102 | Cascade période → aspects + OI |
| `onNiveauChange()` | 114 | Cascade niveau → périodes |
| `debouncedApplyFilters()` | 143 | Debounce 280 ms pour la recherche texte |
| `applyFilters()` | 148 | Applique tous les filtres et re-rend |
| `resetFilters()` | 192 | Remet tous les filtres à zéro |

### Panier

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `togglePanier(id)` | 959 | Ajoute/retire une question du panier |
| `updatePanierBar()` | 975 | Met à jour la barre panier + sauvegarde localStorage |
| `refreshPanierButtons()` | 971 | Resynchronise l'état des boutons sur les tuiles |
| `retirerPanier(id)` | 985 | Retire une question spécifique |
| `viderPanier()` | 992 | Vide le panier (avec confirmation) |
| `melangerPanier()` | 1012 | Fisher-Yates shuffle |
| `openCahier()` / `closeCahier()` | 1020/1026 | Panneau latéral du panier |
| `renderCahier()` | 1031 | Rendu de la liste dans le panneau |

### Drag-and-drop panier

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `cahierDragStart/Over/Drop/End` | 1072–1109 | DnD HTML5 pour réordonner le panier |

### Prévisualisation & DOCX

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `previsualiser(guideMode)` | 708 | Ouvre le modal de prévisualisation HTML |
| `closePreviewBtn()` | 955 | Ferme la prévisualisation |
| `resolveImages(neededKeys)` | 1110 | Charge les images en base64 depuis GitHub |
| `genererDocx(includeGuide)` | 1149 | Génère et télécharge le DOCX |

### Init

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `initSite()` | 469 | Point d'entrée : fetch questions.js + populateFilters + applyFilters + panier |

---

## Index des fonctions — admin.html

> Le JS commence à la ligne ~400. Utiliser `Read offset=N limit=30`.

### Auth & init

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `utf8b64(str)` | 401 | Encode UTF-8 → base64 (remplace unescape dépréciée) |
| `saveToken()` / `getToken()` | 408/415 | Gestion du PAT (sessionStorage ou localStorage) |
| `init()` | 1001 | Point d'entrée : charge token, recent images, questions, images, réglettes |
| `loadQuestionsJs()` | 1030 | Fetch questions.js depuis GitHub, peuple currentQuestions/Reglettes/ImageDb |
| `loadImages()` | 1013 | Fetch liste images GitHub, peuple IMAGES, met à jour les dropdowns |
| `loadReglettesJs()` | 1061 | Fetch reglettes.js, met à jour REGLETTES_PRESET |
| `loadRecentImages()` | 983 | Charge RECENT_IMAGES depuis localStorage |
| `addRecentImage(name)` | 986 | Ajoute au front de RECENT_IMAGES (max 3) |
| `buildImageOptions()` | 990 | Construit les `<option>` : récentes ⭐ + séparateur + reste |

### Formulaire contexte

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `updatePeriodes()` | 422 | Met à jour le `<select>` période selon niveau |
| `updateAspects()` | 430 | Génère les checkboxes d'aspects selon période |
| `updateSoustag()` | 450 | Affiche/cache les pills sous-tag selon OI |
| `getSoustag()` / `setSoustag()` | 467/472 | Lit/pose la valeur du sous-tag sélectionné |
| `updatePresets()` | 497 | Peuple le `<select>` réglette selon OI |
| `autoReponseFromOI()` | 483 | Auto-sélectionne le type de réponse pour certaines OI |

### Mode édition

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `setMode(mode)` | 508 | Bascule Nouvelle question ↔ Modifier |
| `populateEditSearch()` | 524 | Peuple la liste de recherche en mode édition |
| `filterEditList()` | 545 | Filtre + affiche les résultats de recherche |
| `editKeyNav(e)` | 613 | Navigation clavier (↑↓ Enter) dans la liste |
| `loadQuestion(id)` | 640 | Charge une question existante dans le formulaire |
| `dupliquerQuestion()` | 624 | Duplique la question sélectionnée |
| `supprimerQuestion()` | 834 | Supprime + renuméroter (fetch → filter → push) |

### Documents

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `addDoc(type)` | 1104 | Ajoute un bloc document (textes / image / textes-image) |
| `addCol(docId, type)` | 1151 | Ajoute une colonne dans un doc textes-image |
| `imageSelect(id)` | 1178 | Retourne un `<select>` d'images avec récentes en haut |
| `removeEl(id)` | 1182 | Supprime un bloc DOM |
| `moveDoc(id, dir)` | 1184 | Déplace un bloc document ↑ ou ↓ |
| `richToolbar(id)` | 1084 | HTML de la toolbar Gras / Puce |

### Réponse & guide

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `updateReponseUI()` | 1195 | Affiche les champs selon le type de réponse choisi |
| `updateRepGrille(data)` | 1276 | Rend le tableau grille pour espace réponse |
| `getRepGrilleValues()` | 1298 | Lit les valeurs du tableau grille réponse |
| `updateGuideUI()` | 1313 | Affiche les champs guide (texte ou grille) |
| `updateGrille(data)` | 1336 | Rend le tableau grille pour le guide |
| `getGrilleValues()` | 1358 | Lit les valeurs du tableau grille guide |

### Publication

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `buildQuestion()` | 1369 | Construit l'objet `q` à partir du formulaire |
| `buildReglette(id)` | 1497 | Construit l'objet réglette depuis le preset sélectionné |
| `validateForm()` | 1548 | Valide les champs requis, retourne tableau d'erreurs |
| `publier()` | 1563 | Fetch SHA → backup → build → PUT GitHub (3 tentatives) |
| `fetchFreshState(token)` | 813 | Recharge questions.js depuis GitHub, met à jour SHA + globals |
| `generateQuestionsJs(...)` | 1535 | Sérialise REGLETTES + IMAGE_DB + QUESTIONS en JS |
| `serializeValue(v, indent)` | 1508 | Sérialisation récursive d'un objet JS en code source |
| `ensureImageDbComplete(...)` | 1526 | Ajoute les refs images manquantes dans IMAGE_DB |
| `resetForm(keepId)` | 1685 | Remet le formulaire à zéro |

### Upload image

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `uploadImage()` | 918 | Redimensionne (max 1200px) + pousse sur GitHub + met à jour RECENT_IMAGES |
| `onUploadFileChange()` | 911 | Auto-remplit le champ nom depuis le fichier sélectionné |

### Dashboard & contexte

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `renderDashboard()` | 1717 | Calcule et affiche les stats (barres par période/OI) |
| `toggleDashboard()` | 1709 | Expand/collapse le tableau de bord |
| `loadContexteJs()` | 1794 | Charge contexte.js depuis GitHub pour édition |
| `publierContexteJs()` | 1813 | Valide syntaxe + pousse contexte.js sur GitHub |
| `toast(msg, type)` | 1845 | Affiche un toast 3,5 s (type: `'ok'` ou `'err'`) |

---

## Structure des données

### Question (`QUESTIONS[i]`)
```js
{
  id: 'Q42',
  niveau: 3,                          // 3 ou 4
  oi: 'Situer dans le temps',
  periode: 'P2 — 1608 – 1760',
  points: 2,
  soustag: 'Ligne du temps',          // optionnel
  enonce: 'Texte avec **gras** et • puces',
  aspects: [{ aspect: 'Nom aspect' }],
  documents: [{
    type: 'textes',
    cols: [{
      titre: 'Document A',
      soustitre: '',                  // optionnel
      texte: '...',                   // ou ref: 'image.png' pour une image
      auteur: '',                     // optionnel
      source: ''                      // optionnel
    }]
  }],
  reponse: false,                     // false = aucune, true = court, ou objet
  // reponse: { type: 'lignes', nombre: 3 }
  // reponse: { type: 'image', ref: 'frise.png' }
  // reponse: { type: 'avant-apres', label: 'La capitulation' }
  // reponse: { type: 'cause-consequence' }
  // reponse: { type: 'mettre-en-relation', elements: ['A','B'], double: true }
  // reponse: { type: 'situer-dans-lespace', elements: ['NF','TC'] }
  // reponse: { type: 'tableau_2col' }
  // reponse: { type: 'grille', entetes: [], rangees: [[]] }
  guide: 'Texte réponse attendue'     // ou { type:'grille', entetes:[], rangees:[[]] } ou false
}
```

### Réglette (`REGLETTES['Q42']`)
```js
{
  oi: 'Situer dans le temps',
  colonnes: ['Critères', 'Niv. 1', 'Niv. 2'],
  niveaux: [
    { pts: 1, desc: 'Situe partiellement…' },
    { pts: 2, desc: 'Situe avec précision…' }
  ]
  // OU pour variantes complexes :
  // variante: 'changement-continuité' | 'acteur-positions' | '3 éléments — 2 liens'
  // niveaux: []   ← toujours vide pour les variantes
}
```

---

## Réglettes complexes (variantes)

Rendu HTML/DOCX hardcodé dans `buildReglettHTML()` (app.js ~200) et section DOCX de `genererDocx()` :
- `changement-continuité`
- `acteur-positions`
- `3 éléments — 2 liens`

Ces variantes ont `niveaux: []` — normal, le rendu n'utilise pas ce tableau.

### Convention bordures DOCX (réglettes complexes)
```js
const BN  = {style:BorderStyle.NONE,  size:0, color:'FFFFFF'};
const BC2 = {top:BORDER,bottom:BORDER,left:BORDER, right:BN};     // col2
const BC3 = {top:BORDER,bottom:BORDER,left:BN,     right:BN};     // col3
const BC4 = {top:BORDER,bottom:BORDER,left:BN,     right:BORDER}; // col4
```

---

## Push Git

Le proxy local est en lecture seule. Pousser via HTTPS direct :
```bash
PAT=github_pat_11CA47PMQ0...
git fetch https://sbergeronencp002:${PAT}@github.com/sbergeronencp002/hqccssbf.git main:refs/remotes/origin/main_fresh
git merge refs/remotes/origin/main_fresh --no-edit
git push https://sbergeronencp002:${PAT}@github.com/sbergeronencp002/hqccssbf.git HEAD:main
git push https://sbergeronencp002:${PAT}@github.com/sbergeronencp002/hqccssbf.git HEAD:claude/tender-turing-uZTbH
git fetch https://sbergeronencp002:${PAT}@github.com/sbergeronencp002/hqccssbf.git claude/tender-turing-uZTbH:refs/remotes/origin/claude/tender-turing-uZTbH
```

**Branche de travail active :** `claude/tender-turing-uZTbH`

---

## Images

Toujours compresser les PNG avec `pngquant` avant de commiter :
```bash
pngquant --force --quality=65-85 --output <fichier>.png <fichier>.png
```
Vérifier que la taille est raisonnable (< 400 Ko idéalement) avant de pousser.

---

## Renouvellement du PAT GitHub

Le PAT `github_pat_11CA47PMQ0...` expire. Quand il expire :
1. Aller sur https://github.com/settings/tokens
2. Retrouver le token `hqccssbf-admin` → cliquer « Regenerate »
3. Copier le nouveau token
4. Mettre à jour ce fichier CLAUDE.md avec le nouveau PAT
5. Le prof met à jour son token dans admin.html (champ Token GitHub)

Permissions requises sur le PAT : `repo` (accès complet au dépôt).
