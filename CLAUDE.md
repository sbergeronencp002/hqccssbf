# Instructions projet — HQC · CSSBF

## Règles de workflow — autorisation permanente

- **Merger** vers `main` sans demander confirmation, dès que des changements sont prêts.
- **Réparer** tout problème fonctionnel sans attendre confirmation.

---

## Règle absolue — ne jamais toucher questions.js via git

`questions.js` est géré **exclusivement** par `admin.html` qui publie directement sur `main` via l'API GitHub. Ne jamais modifier ce fichier via un commit git — les changements n'apparaîtraient pas sur le site et créeraient des conflits de données avec les publications admin.

Mes commits git ne doivent contenir que des fichiers de code : `app.js`, `style.css`, `admin.html`, `index.html`, `documents.html`, `revision.html`, `oi-config.js`, `reglettes.js`, `contexte.js`, `CLAUDE.md`, etc.

---

## Architecture

Site statique GitHub Pages — aucun backend. Tout tourne dans le navigateur.

### Fichiers clés

| Fichier | Rôle |
|---------|------|
| `index.html` | Site public (filtres, cartes, panier, prévisualisation, génération DOCX) |
| `admin.html` | Interface de saisie/modification des questions — pousse via GitHub Contents API |
| `documents.html` | **Gestion Documents & Images** — galerie de toutes les images, vue par question, images non utilisées. Renomme / remplace / supprime des images et édite les sous-titres directement via l'API GitHub (token partagé avec admin.html). JS autonome inline (pas de dépendance à `app.js`) |
| `revision.html` | **Révision par cartes** — parcourt les 600 questions une à la fois (filtres niveau/période/aspect/OI/recherche), navigation ← → clavier, glisser tactile/souris (Pointer Events) ou flèches, tout affiché sur une carte : énoncé, documents, réglette, espace réponse ET guide/corrigé. Page de lecture seule pour l'enseignant, JS autonome inline (pas de dépendance à `app.js`) |
| `app.js` | Toute la logique du site public (rendu, filtres, panier, DOCX) |
| `questions.js` | Données : `REGLETTES`, `IMAGE_DB`, `QUESTIONS` — généré et écrit par admin |
| `reglettes.js` | Préréglages de réglettes par OI (`REGLETTES_PRESET`) — chargé par admin uniquement |
| `contexte.js` | Données statiques : `PERIODES_PAR_NIVEAU`, `ASPECTS_PAR_PERIODE` |
| `oi-config.js` | **Source unique des OI** : `OI_CONFIG` (styles, sous-tags, auto-réponse) + `OI_LIST` (ordre du menu). Chargé par index.html, admin.html ET documents.html |
| `questions-io.js` | **Sérialiseur partagé** : `serializeValue`, `ensureImageDbComplete`, `generateQuestionsJs`, `generateIndexJs`. Source unique du format de `questions.js` et `questions-index.js` — chargé par admin.html ET documents.html |
| `questions-index.js` | **Index allégé** (~200 Ko) : `QUESTIONS` avec champs grille seulement (id, oi, période, niveau, points, soustag, aspects, énoncé). Chargé par index.html au démarrage. Régénéré automatiquement par admin.html à chaque publication. |
| `filters.js` | **Cascade de filtres partagée** niveau→période→aspect (`fillSelect`, `fillAspectSelect`, `cascadeNiveauChange`, `cascadePeriodeChange`) — source unique pour éviter la divergence entre pages. Chargé par index.html (avant app.js) ET revision.html |
| `tools/validate-questions.mjs` | **Validateur de données** (node) : vérifie `questions.js` contre `oi-config.js`, `contexte.js` et les fichiers `images/`. Lancé en hook SessionStart (`.claude/settings.json`). `node tools/validate-questions.mjs` |
| `tools/smoke-test.mjs` | **Tests de fumée** (node, sans dépendance npm) : charge app.js dans un contexte vm et exerce les fonctions de rendu critiques (`escLine`/`escAttr`/`jsStr`, `buildReglettHTML`, `formatTexte`, `docsForRender`) avec des entrées adverses (payloads XSS, données incomplètes). Lancé en hook SessionStart. `node tools/smoke-test.mjs` |
| `tools/check-escaping.mjs` | **Scanner anti-XSS** (node) : détecte les concaténations HTML non échappées dans app.js/admin.html/documents.html/revision.html. Lancé en hook SessionStart. `node tools/check-escaping.mjs` |
| `style.css` | Styles du site public |
| `docx.js` | Librairie docx.js (857 Ko) — chargée en lazy au 1er clic « Générer » |
| `backups/questions-YYYY-MM-DD_HH-MM.js` | Backups auto avant chaque publication (admin) — élagués automatiquement (`pruneBackups`, 20 conservés) |

### Upload d'images (admin.html / documents.html)
`uploadImage()` redimensionne à 1200 px max puis **choisit le format le plus léger** : PNG si l'image a de la transparence, sinon le plus petit entre PNG et JPEG 0.85 (l'extension du nom suit le format choisi). Évite les PNG 24 bits non compressés (cause des images à 2,5 Mo). Le remplacement (`documents.html`) encode selon l'extension de la cible.

### Cache-bust actuel
`app.js?v=50`, `style.css?v=29`, `oi-config.js?v=1`, `questions-io.js?v=3`, `filters.js?v=1`, `reglettes.js?v=2` (admin) — incrémenter à chaque changement majeur.
`index.html` charge `filters.js?v=1` (avant `app.js`) puis `questions-index.js?v=1` (index allégé, 200 Ko) — `questions.js` est chargé en lazy par app.js sans version fixe (cache-bust par timestamp).
`documents.html` charge `oi-config.js?v=1` + `questions-io.js?v=3` ; `questions.js` est chargé dynamiquement (fetch cache-bust par timestamp, comme index.html) — jamais en `<script src>` statique.
`revision.html` charge `oi-config.js?v=1` + `questions-io.js?v=3` + `contexte.js` + `filters.js?v=1` ; `questions.js` est chargé de la même façon (fetch cache-bust par timestamp).

⚠️ Cette table doit être mise à jour à chaque incrément de `?v=` dans le HTML — sinon un futur agent repart d'un mauvais numéro de version.

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
| `utf8b64(str)` | 392 | Encode UTF-8 → base64 (remplace unescape dépréciée) |
| `saveToken()` / `getToken()` | 409/416 | Gestion du PAT (sessionStorage ou localStorage) |
| `init()` | 1026 | Point d'entrée : charge token, recent images, questions, images, réglettes |
| `loadQuestionsJs()` | 1082 | Fetch questions.js depuis GitHub ; si token 401/403 → statut « Token invalide » + relecture anonyme |
| `refreshImageSelects()` | 1040 | Re-remplit tous les `<select>` d'images en préservant la valeur |
| `loadImages()` | 1049 | Fetch liste images GitHub (3 tentatives, repli anonyme si 401/403, secours via IMAGE_DB, toasts d'erreur) |
| `loadReglettesJs()` | 1128 | Fetch reglettes.js, met à jour REGLETTES_PRESET |
| `loadRecentImages()` | 982 | Charge RECENT_IMAGES depuis localStorage |
| `addRecentImage(name)` | 1004 | Ajoute au front de RECENT_IMAGES (max 3) |
| `buildImageOptions()` | 1008 | Construit les `<option>` : récentes ⭐ + séparateur + reste |

### Formulaire contexte

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `updatePeriodes()` | 423 | Met à jour le `<select>` période selon niveau |
| `updateAspects()` | 431 | Génère les checkboxes d'aspects selon période |
| `updateSoustag()` | 446 | Affiche/cache les pills sous-tag selon OI |
| `getSoustag()` / `setSoustag()` | 463/468 | Lit/pose la valeur du sous-tag sélectionné |
| `updatePresets()` | 492 | Peuple le `<select>` réglette selon OI |
| `autoReponseFromOI()` | 478 | Auto-sélectionne le type de réponse pour certaines OI |

### Mode édition

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `setMode(mode)` | 503 | Bascule Nouvelle question ↔ Modifier |
| `populateEditSearch()` | 519 | Peuple la liste de recherche en mode édition |
| `filterEditList()` | 540 | Filtre + affiche les résultats de recherche |
| `editKeyNav(e)` | 610 | Navigation clavier (↑↓ Enter) dans la liste |
| `loadQuestion(id)` | 637 | Charge une question existante dans le formulaire |
| `dupliquerQuestion()` | 621 | Duplique la question sélectionnée |
| `supprimerQuestion()` | 846 | Supprime + renuméroter (fetch → filter → push) |

### Documents

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `addDoc(type)` | 1171 | Ajoute un bloc document (textes / image / textes-image) |
| `addCol(docId, type)` | 1218 | Ajoute une colonne dans un doc textes-image |
| `imageSelect(id)` | 1245 | Retourne un `<select>` d'images avec récentes en haut |
| `removeEl(id)` | 1249 | Supprime un bloc DOM |
| `moveDoc(id, dir)` | 1251 | Déplace un bloc document ↑ ou ↓ |
| `richToolbar(id)` | 1151 | HTML de la toolbar Gras / Puce |

### Réponse & guide

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `updateReponseUI()` | 1263 | Affiche les champs selon le type de réponse choisi |
| `updateRepGrille(data)` | 1372 | Rend le tableau grille pour espace réponse |
| `getRepGrilleValues()` | 1394 | Lit les valeurs du tableau grille réponse |
| `updateGuideUI()` | 1409 | Affiche les champs guide (texte ou grille) |
| `updateGrille(data)` | 1432 | Rend le tableau grille pour le guide |
| `getGrilleValues()` | 1454 | Lit les valeurs du tableau grille guide |

### Publication

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `buildQuestion()` | 1465 | Construit l'objet `q` à partir du formulaire |
| `buildReglette(id)` | 1594 | Construit l'objet réglette depuis le preset sélectionné |
| `validateForm()` | 1645 | Valide les champs requis, retourne tableau d'erreurs |
| `publier()` | 1686 | Fetch SHA → backup → build → PUT GitHub (3 tentatives) |
| `fetchFreshState(token)` | 820 | Recharge questions.js depuis GitHub, met à jour SHA + globals |
| `generateQuestionsJs(...)` | 1632 | Sérialise REGLETTES + IMAGE_DB + QUESTIONS en JS |
| `serializeValue(v, indent)` | 1605 | Sérialisation récursive d'un objet JS en code source |
| `ensureImageDbComplete(...)` | 1623 | Ajoute les refs images manquantes dans IMAGE_DB |
| `resetForm(keepId)` | 1809 | Remet le formulaire à zéro |

### Upload image

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `uploadImage()` | 916 | Redimensionne (max 1200px) + pousse sur GitHub + met à jour RECENT_IMAGES |
| `onUploadFileChange()` | 909 | Auto-remplit le champ nom depuis le fichier sélectionné |

### Dashboard

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `renderDashboard()` | 1841 | Calcule et affiche les stats (barres par période/OI) |
| `toggleDashboard()` | 1833 | Expand/collapse le tableau de bord |
| `toast(msg, type)` | 1916 | Affiche un toast 3,5 s (type: `'ok'` ou `'err'`) |

> Note : l'éditeur de contexte.js (`loadContexteJs` / `publierContexteJs`) n'existe plus dans admin.html — contexte.js est chargé statiquement.

---

## Index des fonctions — documents.html

> Page autonome (JS inline ~ligne 287). Charge `oi-config.js` + `questions.js`. Le token GitHub est **lu** depuis le stockage partagé avec admin.html (`getToken()`) — jamais saisi ici ; sans token, seule la lecture marche, les modifications échouent.

### Init & rendu

| Fonction | Rôle |
|----------|------|
| `oiStyleAttr(oi)` | Style inline `color/background` d'une pastille OI, **dérivé de `OI_CONFIG`** (cohérence avec le reste du site) |
| `tileHtml(q)` | HTML d'une tuile question (vue « Toutes les questions ») |
| `(function init())` | Construit `imgMap` (image → ids), la grille d'images, la grille questions, le filtre OI et la liste des orphelines |
| `escH(s)` | Échappe `&<>"'` avant insertion HTML |
| `setActive(id)` | Bascule entre les 3 vues (images / questions / orphelines) |
| `filterAll()` | Filtre les grilles par recherche texte + OI |

### Tailles & lightbox

| Fonction | Rôle |
|----------|------|
| `fetchSizes(imgs)` / `applySizeBadge` | Récupère la taille des fichiers (HEAD) et colore le badge (vert < 400 Ko, orange < 800, rouge ≥ 800) |
| `showImg(img)` | Ouvre la lightbox : image + liste des questions qui l'utilisent + sous-titres éditables |
| `closeLb(e)` | Ferme la lightbox |

### Opérations GitHub (token requis)

| Fonction | Rôle |
|----------|------|
| `deleteOrphan(img)` | Supprime une image orpheline du dépôt + retire son entrée d'`IMAGE_DB` |
| `openReplace` / `handleReplaceFile` / `confirmReplace` | Remplace le contenu d'une image (redimensionne max 1200 px, PUT même nom + SHA) |
| `openRename` / `confirmRename` / `updateDomAfterRename` | Renomme une image : crée le nouveau fichier, supprime l'ancien, met à jour les refs dans `questions.js` (retry sur conflit 409) |
| `openSoustitre` / `confirmSoustitre` | Édite le sous-titre du document référençant l'image |
| `applyQuestionsEdit(mutate, msg)` | Lecture fraîche → mutation ciblée → réécriture de `questions.js` (1 retry sur conflit SHA) |
| `serializeValue` / `ensureImageDbComplete` / `generateQuestionsJs` | Sérialiseur **identique à admin.html** (même format de sortie pour éviter les divergences) |

> ⚠️ Comme admin.html, cette page **écrit directement `questions.js` sur `main` via l'API GitHub** — ne jamais toucher `questions.js` via git.

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

Essayer d'abord le push normal (`git push -u origin <branche>`) — selon l'environnement de session, il peut fonctionner directement. Sinon, demander le PAT au prof dans le chat et pousser via HTTPS direct :
```bash
PAT=<TOKEN fourni dans le chat — JAMAIS écrit dans un fichier du dépôt>
BRANCH=<branche de travail de la session>

# Synchroniser main local avec GitHub avant de merger
git fetch https://sbergeronencp002:${PAT}@github.com/sbergeronencp002/hqccssbf.git +main:refs/remotes/origin/main_fresh
git checkout -B main refs/remotes/origin/main_fresh
git merge $BRANCH --no-edit

# Pousser main + branche de travail
git push https://sbergeronencp002:${PAT}@github.com/sbergeronencp002/hqccssbf.git HEAD:main
git push https://sbergeronencp002:${PAT}@github.com/sbergeronencp002/hqccssbf.git HEAD:${BRANCH}

# IMPORTANT : mettre à jour les refs locales après push (sinon le hook git signale des commits non poussés)
git fetch https://sbergeronencp002:${PAT}@github.com/sbergeronencp002/hqccssbf.git +main:refs/remotes/origin/main
git fetch https://sbergeronencp002:${PAT}@github.com/sbergeronencp002/hqccssbf.git +${BRANCH}:refs/remotes/origin/${BRANCH}
```

---

## Images

Toujours compresser les PNG avec `pngquant` avant de commiter :
```bash
pngquant --force --quality=65-85 --output <fichier>.png <fichier>.png
```
Vérifier que la taille est raisonnable (< 400 Ko idéalement) avant de pousser.

---

## Renouvellement du PAT GitHub

⚠️ **RÈGLE ABSOLUE : ne JAMAIS écrire le PAT dans CLAUDE.md ni dans aucun fichier commité.** Le dépôt est **public** : GitHub détecte tout token `ghp_…` poussé et le **révoque automatiquement** (secret scanning). C'est ce qui faisait « expirer » les PAT précédents. Le token ne vit qu'à deux endroits : le champ « Token GitHub » d'admin.html (localStorage du navigateur du prof) et, au besoin, collé dans le chat d'une session Claude.

Quand le PAT expire ou est révoqué :
1. Aller sur https://github.com/settings/tokens
2. Retrouver le token `hqccssbf-admin` → cliquer « Regenerate »
3. Copier le nouveau token
4. Le recoller dans admin.html (champ Token GitHub) — la page recharge automatiquement questions/images/réglettes
5. Si Claude doit pousser du code et que le push normal échoue, coller le token dans le chat de la session

Permissions requises sur le PAT : `repo` (accès complet au dépôt).

Symptôme d'un token invalide dans admin.html : statut « ✗ Token invalide ou expiré » + toast d'erreur. Depuis le durcissement de `loadImages()`/`loadQuestionsJs()`, la lecture bascule en anonyme (dépôt public), donc la consultation et la liste d'images continuent de fonctionner — seule la **publication** exige un token valide.

---

## Worker Cloudflare (voie de publication rapide)

`admin.html` peut publier via un Worker Cloudflare (`/publish`, voir champ « URL Worker » dans l'UI) au lieu du PUT GitHub direct — voie prioritaire quand configurée, avec fallback GitHub Actions (`repository_dispatch` sur `publish-question.yml`) puis PUT direct si le Worker n'est pas configuré ou échoue.

- `workerUrl` et `workerSecret` sont stockés en clair dans `localStorage` du navigateur du prof (jamais saisis ailleurs, jamais commités).
- Le secret du Worker est un **secret partagé statique** (pas de rotation automatique, pas de durée de vie courte) : quiconque le lit dans `localStorage` peut publier/supprimer des questions indéfiniment tant qu'il n'est pas changé.
- ⚠️ Contrairement à la voie PUT GitHub directe (3 tentatives avec re-fetch SHA sur conflit 409), l'appel `/publish` au Worker **n'a aucune logique de retry côté client** — la gestion de concurrence dépend entièrement du code du Worker (hors de ce dépôt, non auditable ici).
- Si le secret Worker fuite ou doit être renouvelé : le régénérer côté Cloudflare, puis le recoller dans le champ correspondant d'admin.html (même mécanisme que le PAT GitHub — jamais écrit dans un fichier commité).
