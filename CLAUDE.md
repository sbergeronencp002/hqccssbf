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
| `examen.html` | **Générateur d'examens** — pour une période choisie, sélectionne automatiquement une question dédiée par aspect du programme (jamais deux fois, jamais deux aspects partagés par une même question — le nombre de questions égale toujours le nombre d'aspects, 14 pour P5), budget de points ≤ 25, variété des 8 OI garantie, jamais deux fois la même clé de diversité (sous-tag, ou nombre de documents pour « Mettre en relation des faits ») pour une même OI, plafond dur de 2 pour « Mettre en relation des faits », « Établir des faits » et « Situer dans le temps » (`EX_OI_HARD_CAP`), jamais deux questions consécutives de la même OI dans l'examen final, + l'OI « favorite » choisie par l'enseignant apparaît un nombre de fois exact (3 pour cause-conséquence/similitudes-différences, 2 pour liens de causalité — dégrade si infaisable dans le budget), en préférant les questions à documents riches. Permet un remplacement manuel question par question (🔀, même aspect(s), budget/diversité/plafond respectés). Génère 3 DOCX distincts : questionnaire (énoncés + réglettes + espaces réponse, documents renumérotés en chiffres), dossier documentaire (documents d'une question citée par lettre groupés et dans l'ordre, documents non cités mélangés individuellement dans tout le dossier, numérotés globalement), guide de correction. Lecture seule (aucune écriture sur `questions.js`), JS autonome inline (pas de dépendance à `app.js`) |
| `examen-gen.js` | **Algorithme pur** de sélection (exact-cover des aspects + budget de points + quota OI avec dégradation progressive si le budget le rend infaisable) et de renumérotation globale des documents (lettres locales → chiffres, avec remap des mentions « document(s) X » dans l'énoncé/guide). Aucune dépendance au DOM — testable via node. Chargé par `examen.html` |
| `docx-examen.js` | Génération des 3 DOCX de `examen.html` via docx.js (réglettes + espaces réponse portés de `app.js`, rendu du dossier documentaire avec documents renumérotés) |
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
| `tools/check-all.mjs` | Lance les 3 vérifications ci-dessus en une seule commande (`node tools/check-all.mjs`) — c'est celle-ci qui tourne réellement en hook SessionStart. Utiliser directement `validate-questions`/`smoke-test`/`check-escaping` seulement pour isoler une vérification précise. |
| `worker/index.js` | **Worker Cloudflare** (`/publish`) — voie de publication rapide depuis admin.html (upsert/delete sur `questions.js` côté serveur). Contient sa propre copie du sérialiseur (**doit rester identique** à `questions-io.js`), une validation de payload, une comparaison de secret à temps constant, et refuse un upsert si `editingId !== question.id` (protection contre un client obsolète qui remplacerait silencieusement la mauvaise question — cf. incidents Q670/Q676 du 2026-07-13). Lecture initiale stabilisée via `fetchQuestionsRawStable` (2 confirmations rapprochées, 4 s max — version bornée de la stabilisation client pour ne pas sacrifier l'objectif de rapidité du Worker, voir la section « Latence de propagation » plus bas). Non versionné/déployé automatiquement — voir `.github/workflows/deploy-worker.yml` |
| `tools/apply-mutation.mjs` | Script exécuté par la GitHub Action `publish-question.yml` (fallback quand le Worker est inaccessible) : applique une mutation reçue via `repository_dispatch` sur `questions.js`. Contient aussi sa propre copie du sérialiseur (**doit rester identique** à `questions-io.js`) et la même protection `editingId !== question.id` que `worker/index.js` |
| `sw.js` | Service worker : cache les assets versionnés, revalide `index.html`/`contexte.js`/`questions.js`/`questions-index.js` réseau-first, cache les images (voir section dédiée plus bas) |
| `style.css` | Styles du site public |
| `docx.js` | Librairie docx.js (857 Ko) — chargée en lazy au 1er clic « Générer » |
| `backups/questions-YYYY-MM-DD_HH-MM.js` | Backups auto avant chaque publication (admin) — élagués automatiquement (`pruneBackups`, 20 conservés) |

### Upload d'images (admin.html / documents.html)
`uploadImage()` redimensionne à 1200 px max puis **choisit le format le plus léger** : PNG si l'image a de la transparence, sinon le plus petit entre PNG et JPEG 0.85 (l'extension du nom suit le format choisi). Évite les PNG 24 bits non compressés (cause des images à 2,5 Mo). Le remplacement (`documents.html`) encode selon l'extension de la cible.

### Cache-bust actuel
`app.js?v=52`, `style.css?v=31`, `oi-config.js?v=1`, `questions-io.js?v=3`, `filters.js?v=1`, `reglettes.js?v=3` (admin) — incrémenter à chaque changement majeur.
`index.html` charge `filters.js?v=1` (avant `app.js`) puis `questions-index.js?v=1` (index allégé, 200 Ko) — `questions.js` est chargé en lazy par app.js sans version fixe (cache-bust par timestamp).
`documents.html` charge `oi-config.js?v=1` + `questions-io.js?v=3` ; `questions.js` est chargé via l'API GitHub Contents en priorité (comme admin.html), repli sur le fetch du site statique puis sur une balise `<script>` si l'API échoue — jamais en `<script src>` statique direct.
`revision.html` charge `oi-config.js?v=1` + `questions-io.js?v=3` + `contexte.js` + `filters.js?v=1` ; `questions.js` est chargé de la même façon (API GitHub en priorité).
`examen.html` charge `oi-config.js?v=1` + `contexte.js` + `examen-gen.js?v=2` ; `questions.js` est chargé par simple fetch réseau (pas l'API GitHub) — page lecture seule, une fraîcheur à quelques minutes près n'a pas d'impact (pas de SHA à préserver pour une écriture). `docx-examen.js?v=1` est chargé en dernier (dépend des globales définies dans le script inline de la page).

⚠️ Pourquoi l'API en priorité plutôt que le fetch du site statique : GitHub Pages est servi derrière un CDN qui peut continuer à servir une ancienne version d'un fichier après une publication, même avec un cache-bust par timestamp sur l'URL (le CDN peut ignorer la query string pour la clé de cache) — l'API GitHub, elle, reflète toujours l'état réel du dépôt. `app.js` (`ensureDataLoaded()`, chargement lazy du questions.js complet au 1ᵉʳ `openQModal`/prévisualisation/DOCX du site public) fait de même, mais avec repli silencieux sur le fetch du site statique en cas d'échec — ne se produit qu'une fois par chargement de page (pas par question ouverte), donc le quota anonyme de l'API (60 req/h) n'est pas un risque même avec beaucoup de visiteurs.

⚠️ Cette table doit être mise à jour à chaque incrément de `?v=` dans le HTML — sinon un futur agent repart d'un mauvais numéro de version.

### Service worker (`sw.js`)
Précache `style.css`, `app.js`, `filters.js`, `oi-config.js` (avec leur `?v=N` — un futur bump de version doit aussi être répercuté dans le tableau `PRECACHE` de `sw.js`, sinon l'ancienne version reste précachée). `index.html` et `contexte.js` sont précachés mais **toujours revalidés réseau-first** (comme `questions.js`/`questions-index.js`) car leur contenu peut changer sans que leur URL change. `CACHE` (actuellement `hqc-v7`) doit être incrémenté à chaque changement de la liste `PRECACHE` (pas nécessaire pour un simple changement de logique dans le handler `fetch` — voir images ci-dessous — puisque ça ne change pas ce qui est précaché).

`admin.html`, `documents.html`, `revision.html`, `examen.html` sont **aussi réseau-first** (même traitement que `questions.js`/`index.html`) : ce sont des pages d'édition/outils dont le JS change au fil des correctifs — un cache SW figé sur une ancienne version peut réintroduire un bug déjà corrigé, parce que la page obsolète ignore encore le correctif (vécu le 2026-07-13 : un correctif de lecture via l'API GitHub dans revision.html ne pouvait pas prendre effet tant que l'ancien revision.html restait servi depuis le cache).

Images : **stale-while-revalidate** (pas cache-first pur) — sert le cache immédiatement s'il existe, mais relance toujours une requête réseau en arrière-plan pour rafraîchir l'entrée. Nécessaire car remplacer une image (documents.html/admin.html) garde le même nom de fichier donc la même URL ; un cache-first pur servirait l'ancienne version indéfiniment. Avec cette stratégie, l'image à jour apparaît au 2ᵉ chargement au plus tard.

---

## Index des fonctions — app.js

> Utiliser `Read offset=N limit=30` pour aller directement à la bonne ligne.

### Rendu public

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `escLine(s)` | 2 | Échappe `&<>` avant insertion HTML |
| `escAttr(s)` | 6 | Échappe pour un attribut HTML entre guillemets (ajoute `"`) |
| `jsStr(s)` | 10 | Échappe pour une chaîne JS entre apostrophes (`onclick="…('…')"`) |
| `boldify(s)` | 13 | Convertit `**x**` → `<strong>` |
| `formatTexte(text)` | 16 | Formate énoncés (listes • et gras) |
| `docsForRender(documents)` | 43 | Fusionne les documents « textes » 1 colonne en tableau 2 colonnes |
| `oiStyle(oi)` | 56 | Retourne classe CSS + couleur pour une OI (dérivé d'`OI_CONFIG`) |
| `buildReglettHTML(q)` | 206 | HTML de la réglette (+ variantes complexes hardcodées) |
| `openQModal(id)` | 332 | Ouvre le modal détail d'une question (protégé contre double-clic par `_qModalReqSeq`) |
| `closeQModal()` | 412 | Ferme le modal |
| `buildTileHtml(q)` | 463 | HTML d'une carte question dans la grille |
| `render(list)` | 488 | Affiche les cartes filtrées (pagination 50/page) |
| `renderMore()` | 503 | Charge 50 cartes supplémentaires |
| `initSite()` | 516 | Point d'entrée : fetch questions.js + populateFilters + applyFilters + panier |
| `toggleTexte(btn)` | 564 | Expand/collapse texte long dans un document |
| `renderDoc(d)` | 579 | HTML d'un document (texte/image/colonnes) |
| `renderReponse(q)` | 648 | HTML de l'espace réponse selon `q.reponse.type` |
| `window.openLightbox(src)` | 791 | Ouvre l'image en plein écran |

### Filtres

> La cascade niveau→période→aspect (`fillSelect`, `fillAspectSelect`, `cascadeNiveauChange`, `cascadePeriodeChange`) vit dans **`filters.js`** (chargé avant app.js) — partagée avec revision.html, voir plus bas.

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `populateFilters()` | 99 | Initialise tous les filtres depuis les données |
| `onPeriodeChange()` | 134 | Cascade période → aspects + OI (délègue à `cascadePeriodeChange` de filters.js) |
| `onNiveauChange()` | 139 | Cascade niveau → périodes (délègue à `cascadeNiveauChange` de filters.js) |
| `debouncedApplyFilters()` | 146 | Debounce 280 ms pour la recherche texte |
| `applyFilters()` | 151 | Applique tous les filtres et re-rend |
| `resetFilters()` | 198 | Remet tous les filtres à zéro |

### Panier

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `togglePanier(id)` | 1152 | Ajoute/retire une question du panier |
| `refreshPanierButtons()` | 1164 | Resynchronise l'état des boutons sur les tuiles |
| `updatePanierBar()` | 1168 | Met à jour la barre panier + sauvegarde localStorage |
| `retirerPanier(id)` | 1178 | Retire une question spécifique |
| `viderPanier()` | 1185 | Vide le panier (avec confirmation) |
| `melangerPanier()` | 1206 | Fisher-Yates shuffle |
| `openCahier()` / `closeCahier()` | 1214/1220 | Panneau latéral du panier |
| `renderCahier()` | 1225 | Rendu de la liste dans le panneau |

### Drag-and-drop panier

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `cahierDragStart/Over/Drop/End` | 1266/1272/1283/1297 | DnD HTML5 pour réordonner le panier |

### Prévisualisation & DOCX

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `previsualiser(guideMode)` | 893 | Ouvre le modal de prévisualisation HTML |
| `closePreviewBtn()` | 1148 | Ferme la prévisualisation |
| `resolveImages(neededKeys)` | 1305 | Charge les images en base64 depuis GitHub |
| `genererDocx(includeGuide)` | 1345 | Génère et télécharge le DOCX (~700 lignes, toutes les variantes de réponse/guide) |

---

## Index des fonctions — admin.html

> Le JS commence à la ligne ~400. Utiliser `Read offset=N limit=30`.

### Auth & init

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `utf8b64(str)` | 457 | Encode UTF-8 → base64 (remplace unescape dépréciée) |
| `saveToken()` / `getToken()` | 474/481 | Gestion du PAT (sessionStorage ou localStorage) |
| `ADMIN_BUILD` / `isAdminStale()` | 491/494 | Marqueur de version + détection d'onglet obsolète (refetch `admin.html`, compare le marqueur) — un onglet resté ouvert depuis avant un correctif continue d'exécuter l'ancien JS ; voir aussi `showStaleBanner()` (503) et l'appel bloquant dans `publier()` |
| `init()` | 1351 | Point d'entrée : charge token, recent images, questions, images, réglettes ; lance aussi `isAdminStale()` (une fois + toutes les 5 min) |
| `loadQuestionsJs()` | 1418 | Fetch questions.js depuis GitHub ; si token 401/403 → statut « Token invalide » + relecture anonyme |
| `refreshImageSelects()` | 1376 | Re-remplit tous les `<select>` d'images en préservant la valeur |
| `loadImages()` | 1385 | Fetch liste images GitHub (3 tentatives, repli anonyme si 401/403, secours via IMAGE_DB, toasts d'erreur) |
| `loadReglettesJs()` | 1501 | Fetch reglettes.js, met à jour REGLETTES_PRESET |
| `loadRecentImages()` | 1307 | Charge RECENT_IMAGES depuis localStorage |
| `addRecentImage(name)` | 1329 | Ajoute au front de RECENT_IMAGES (max 3) |
| `buildImageOptions()` | 1333 | Construit les `<option>` : récentes ⭐ + séparateur + reste |

### Formulaire contexte

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `updatePeriodes()` | 522 | Met à jour le `<select>` période selon niveau — sélectionne P6 par défaut si elle fait partie de la liste (niveau 4) |
| `updateAspects()` | 530 | Génère les checkboxes d'aspects selon période |
| `updateSoustag()` | 545 | Affiche/cache les pills sous-tag selon OI |
| `getSoustag()` / `setSoustag()` | 562/567 | Lit/pose la valeur du sous-tag sélectionné |
| `updatePresets()` | 591 | Peuple le `<select>` réglette selon OI |
| `autoReponseFromOI()` | 577 | Auto-sélectionne le type de réponse pour certaines OI |

### Mode édition

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `setEditingId(id)` | 722 | Set `editingId` + verrouille/déverrouille `#q-id` en conséquence — **seul point d'écriture** de `editingId`, ne jamais l'assigner directement ailleurs |
| `setMode(mode)` | 747 | Bascule Nouvelle question ↔ Modifier |
| `populateEditSearch()` | 763 | Peuple la liste de recherche en mode édition |
| `filterEditList()` | 784 | Filtre + affiche les résultats de recherche |
| `editKeyNav(e)` | 854 | Navigation clavier (↑↓ Enter) dans la liste |
| `dupliquerQuestion()` | 865 | Duplique la question sélectionnée (repasse `editingId` à `null` avant d'assigner le nouvel id — ne jamais publier avec `editingId` pointant vers l'ancienne question) |
| `loadQuestion(id)` | 881 | Charge une question existante dans le formulaire |
| `supprimerQuestion()` | 1114 | Supprime (retry+refetch via `putQuestionsJsWithRetry`) + renuméroter |

### Formulaire — verrouillage pendant requête

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `setFormLocked(locked, exceptEl)` | 736 | Désactive tous les champs/boutons de `#app` pendant une requête réseau (`exceptEl` = bouton déclencheur, déjà géré par son appelant) |

### Documents

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `onUploadFileChange()` | 1190 | Auto-remplit le champ nom depuis le fichier sélectionné |
| `uploadImage()` | 1197 | Redimensionne (max 1200px) + pousse sur GitHub (confirmation si écrase un fichier existant) + met à jour RECENT_IMAGES |
| `richToolbar(id)` | 1525 | HTML de la toolbar Gras / Puce |
| `addDoc(type)` | 1545 | Ajoute un bloc document (textes / image / textes-image) |
| `addCol(docId, type)` | 1594 | Ajoute une colonne dans un doc textes-image |
| `imageSelect(id)` | 1621 | Retourne un `<select>` d'images avec récentes en haut |
| `removeEl(id)` | 1647 | Supprime un bloc DOM |
| `moveDoc(id, dir)` | 1689 | Déplace un bloc document ↑ ou ↓ |

### Réponse & guide

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `updateReponseUI()` | 1701 | Affiche les champs selon le type de réponse choisi |
| `updateRepGrille(data)` | 1810 | Rend le tableau grille pour espace réponse |
| `getRepGrilleValues()` | 1832 | Lit les valeurs du tableau grille réponse |
| `updateGuideUI()` | 1847 | Affiche les champs guide (texte ou grille) |
| `updateGrille(data)` | 1870 | Rend le tableau grille pour le guide |
| `getGrilleValues()` | 1892 | Lit les valeurs du tableau grille guide |

### Publication

> `serializeValue`/`generateQuestionsJs`/`ensureImageDbComplete` ne sont **plus définis dans admin.html** — chargés depuis `questions-io.js` (source unique, voir plus haut).

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `fetchFreshState(token)` | 1128 | Recharge questions.js depuis GitHub (lecture simple), met à jour SHA + globals via `_assignFreshState` — utilisé pour les rafraîchissements post-publication (déjà appliquée côté serveur, simple confort UI) |
| `fetchFreshStateStable(token)` | 1146 | Comme `fetchFreshState`, mais relit deux fois de suite (espacées de 3 s) et n'accepte la lecture que si les deux SHA concordent (réplicas stabilisés — voir section Latence de propagation) ; utilisé avant une mutation (suppression, retry après conflit 409) |
| `buildQuestion()` | 1903 | Construit l'objet `q` à partir du formulaire |
| `buildReglette(id)` | 2034 | Construit l'objet réglette depuis le preset sélectionné (`null` = conserver l'existante) |
| `VALIDATION_RULES` / `validateForm()` | 2054/2087 | Liste déclarative de règles `{message, check()}` — étendre ici plutôt qu'avec des `if` ad hoc |
| `putQuestionsJsWithRetry(token, commitMsg, mutate)` | 2171 | Retry+refetch stabilisé+conflit 409 factorisé (utilisé par `publier()` ET `supprimerQuestion()`) |
| `publier()` | 2141 | Vérifie d'abord `isAdminStale()` (bloque avec confirmation si une nouvelle version est déployée), refuse toute publication où `editingId !== q.id` (incohérence = client obsolète), puis backup → build → `putQuestionsJsWithRetry` (voie directe) ou Worker/GitHub Actions |
| `publierViaDispatch(...)` | 2343 | Fallback `repository_dispatch` quand le Worker est inaccessible |
| `resetForm(keepId)` | 2391 | Remet le formulaire à zéro (appelle `setEditingId(null)`) |

### Dashboard

| Fonction | Ligne | Rôle |
|----------|-------|------|
| `toggleDashboard()` | 2415 | Expand/collapse le tableau de bord |
| `renderDashboard()` | 2423 | Calcule et affiche les stats (barres par période/OI) |
| `toast(msg, type)` | 2686 | Affiche un toast 3,5 s (type: `'ok'` ou `'err'`) |

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
| `setPageLocked(locked, msg)` | Overlay plein écran pendant toute opération GitHub asynchrone (empêche une action concurrente) |
| `fetchQuestionsJsSource(headers)` | Lit + décode questions.js depuis l'API Contents GitHub (base64 inline ou `download_url`) — **source unique**, utilisée par `fetchStableQuestionsJs` ET `isImageStillOrphan` |
| `fetchStableQuestionsJs(headers)` | Relit deux fois de suite (espacées de 3 s) via `fetchQuestionsJsSource` ; n'accepte la lecture que si les deux SHA concordent (réplicas stabilisés — voir section Latence de propagation), sinon réessaie jusqu'à 45 s |
| `isImageStillOrphan(img)` | Relit questions.js via `fetchStableQuestionsJs` (lecture stabilisée, même garantie que le chemin d'écriture) ; vrai si `img` n'est référencée par aucune question — revérification juste avant une suppression irréversible (`deleteOrphan`, avant l'étape 4 de `confirmRename`) |
| `deleteOrphan(img)` | Revérifie via `isImageStillOrphan`, puis supprime une image orpheline du dépôt + retire son entrée d'`IMAGE_DB` |
| `openReplace` / `handleReplaceFile` / `confirmReplace` | Remplace le contenu d'une image (redimensionne max 1200 px, filtre les types non-image, PUT même nom + SHA, rafraîchit le badge de taille) |
| `openRename` / `confirmRename` / `updateDomAfterRename` | Renomme une image : crée le nouveau fichier, met à jour les refs dans `questions.js`, reflète l'état local (dont `allImgGroups` + ligne orpheline), revérifie via `isImageStillOrphan` avant de supprimer l'ancien fichier (retry sur conflit 409) |
| `openSoustitre` / `confirmSoustitre` | Édite le sous-titre du document référençant l'image |
| `applyQuestionsEdit(mutate, msg)` | `fetchStableQuestionsJs` → mutation ciblée → réécriture de `questions.js` (3 tentatives sur conflit SHA) |
| `serializeValue` / `ensureImageDbComplete` / `generateQuestionsJs` | Chargées depuis `questions-io.js` (source unique, pas de copie locale) |

> ⚠️ Comme admin.html, cette page **écrit directement `questions.js` sur `main` via l'API GitHub** — ne jamais toucher `questions.js` via git.

---

## Index des fonctions — revision.html

> Page autonome (JS inline ~ligne 147, préfixe `rv` sur toutes les fonctions/globales pour éviter les collisions). Lecture seule sauf les champs textuels éditables (guide, énoncé, documents « textes » — édition via l'API GitHub, token partagé avec admin.html). La réglette, les images, et les champs structurels (niveau/OI/période/points/aspects/type de réponse) restent modifiables uniquement dans admin.html.

### Échappement, formatage, filtres

| Fonction | Rôle |
|----------|------|
| `rvEscLine(s)` / `rvEscAttr(s)` | Échappement HTML / attribut (`rvEscAttr` ajoute les guillemets, utilisé pour les `alt=`) |
| `rvBoldify(s)` / `rvFormatTexte(text)` | Mêmes conventions que `boldify`/`formatTexte` d'app.js |
| `rvDocsForRender(documents)` | Fusion 2/4 documents « textes » — même logique que `docsForRender` d'app.js |
| `rvOiStyle(oi)` | Style d'une OI, dérivé d'`OI_CONFIG` |
| `RV_FILTER_IDS` / `rvPopulateFilters()` / `rvOnNiveauChange()` / `rvOnPeriodeChange()` | Cascade de filtres — délèguent à `cascadeNiveauChange`/`cascadePeriodeChange` de **filters.js** (partagé avec app.js) |
| `rvDebouncedApply()` / `rvApplyFilters()` | Debounce recherche + application des filtres (garde `confirmDiscardEdit()` en tête — voir plus bas) |
| `rvResetFilters()` | Remet tous les filtres à zéro |

### Rendu de la carte

| Fonction | Rôle |
|----------|------|
| `rvRenderReponse(q)` | HTML de l'espace réponse selon `q.reponse.type` (même structure que `renderReponse` d'app.js) |
| `rvFindColPath(documents, col)` | Retrouve `{docIdx, colIdx}` d'une colonne dans le tableau **original** `q.documents` par identité d'objet — `rvDocsForRender` fusionne l'affichage (2/4 colonnes par rangée) mais les objets `col` restent les mêmes références, donc ça fonctionne même sur la structure fusionnée |
| `rvRenderDocColInner(col, path)` | Contenu d'une cellule de document « textes » (titre/sous-titre/texte-ou-image/auteur/source + bouton ✏), partagé entre le rendu initial et la restauration après annulation/enregistrement |
| `rvRenderDoc(d, origDocuments)` | HTML d'un document — `origDocuments` (= `q.documents`, non fusionné) sert à `rvFindColPath` pour les boutons d'édition des colonnes « textes » |
| `rvRenderGuide(q)` | HTML du guide (texte, grille ou tableau) |
| `rvBuildCardHtml(q)` | Assemble toute la carte (énoncé, documents, réglette, réponse, guide) |
| `rvRenderCard()` | Rend la carte courante (`rvList[rvIndex]`) + met à jour la pagination |
| `rvNav(dir)` | Navigue ±1 (garde `confirmDiscardEdit()` en tête) |
| `rvOpenLightbox(src)` / `rvCloseLightbox(e)` | Lightbox image |

### Édition des champs textuels (guide, énoncé, documents « textes »)

> Un seul champ éditable à la fois sur la carte — ouvrir un 2ᵉ champ pendant qu'un autre est en cours d'édition affiche une alerte plutôt que de permettre des éditions concurrentes.

| Fonction | Rôle |
|----------|------|
| `rvFetchQuestionsJsSource(headers)` / `rvFetchStableQuestionsJs(headers)` | Équivalents de `fetchQuestionsJsSource`/`fetchStableQuestionsJs` (documents.html) pour cette page |
| `rvApplyQuestionsEdit(mutate, commitMsg)` | Lecture fraîche stabilisée (`rvFetchStableQuestionsJs`) → mutation ciblée → réécriture de `questions.js` (retry sur conflit SHA) — équivalent de `applyQuestionsEdit` (documents.html) pour cette page ; utilisée par les 3 types d'édition ci-dessous |
| `_rvActiveEdit` / `rvBeginEdit(key, isDirty, cancelFn)` / `rvEndEdit()` / `hasUnsavedEdit()` / `confirmDiscardEdit()` | État générique d'édition en cours (remplace l'ancien `_rvGuideOriginal` spécifique au guide) — `rvBeginEdit` refuse d'ouvrir un 2ᵉ champ tant qu'un autre (`key` différente) est actif ; `confirmDiscardEdit()` protège la navigation/le changement de filtre |
| `rvEditGuide()` / `rvCancelGuideEdit()` / `rvSaveGuide()` | Guide de correction (texte seulement — un guide en tableau reste modifiable uniquement dans admin.html) |
| `rvEditEnonce()` / `rvCancelEnonceEdit()` / `rvSaveEnonce()` | Énoncé de la question — refuse un énoncé vide |
| `rvEditDoc(docIdx, colIdx)` / `rvCancelDocEdit(docIdx, colIdx)` / `rvSaveDocEdit(docIdx, colIdx)` / `rvApplyDocFields(col, fields)` | Titre/sous-titre/texte/auteur/source d'une colonne de document « textes » (`docIdx`/`colIdx` réfèrent toujours au tableau original — voir `rvFindColPath`) ; `rvApplyDocFields` factorise le « chaîne vide → suppression de la clé » entre l'état local et la mutation appliquée à `questions.js` |

### Navigation tactile

Geste swipe géré par une IIFE en fin de fichier (pas de fonctions nommées) : `pointerdown`/`pointerup`/`pointercancel` avec `setPointerCapture`/`activePointerId` (pas un booléen `dragging`) pour lier tout le geste au pointeur qui l'a commencé, même si le relâchement a lieu hors de `#rv-card-wrap`.

---

## Index des fonctions — examen.html / examen-gen.js / docx-examen.js

> Page autonome (JS inline). Lecture seule : aucune écriture sur `questions.js`. La logique de sélection/numérotation vit dans `examen-gen.js` (pur, testable via node) ; la génération DOCX vit dans `docx-examen.js`.

### examen-gen.js (algorithme pur)

| Fonction | Rôle |
|----------|------|
| `exBuildAspectSlots(pool, aspects, aspectRepeat, aspectPin)` | Regroupe en un seul « slot » les aspects qui n'ont AUCUN candidat qui leur soit dédié exclusivement (tous leurs candidats partagent aussi un autre aspect du programme — ex. P3 : « Église catholique » n'a que 3 questions, toutes aussi taguées « Église anglicane »). Union-find sur les aspects sans candidat dédié ; le nombre de questions finales descend d'autant que de fusions (1 question par slot au lieu d'1 par aspect). N'affecte aucun aspect ayant par ailleurs un candidat dédié — un slot ordinaire reste un aspect seul. `aspectRepeat` (voir `EX_ASPECT_REPEAT_BY_PERIODE`) fait l'inverse pour un aspect seul : au lieu d'1 slot, en crée N (chacun exigeant sa propre question distincte) — la 1ʳᵉ instance reste toujours libre, `aspectPin[aspect]` (si présent) épingle les instances suivantes à une OI précise (`slot.pinnedOi`, restreint alors `bySlot` aux seuls candidats de cette OI dans `exTryBuild`, et priorité absolue à ce slot en phase 1 dès qu'il est éligible pour l'OI épinglée — sinon il risquerait de ne jamais être consommé) |
| `exDiversityKey(q)` | Clé de diversité au sein d'une OI (jamais deux fois la même) : le sous-tag en général, mais le nombre de documents réel (dérivé de `q.documents`) pour « Mettre en relation des faits », dont le sous-tag est parfois absent en données bien que le nombre de documents soit toujours déductible |
| `exComputeOiQuota(oiList, favoriOi, favoriTarget, fixedTargets)` | Quota par OI : 1 de base chacune (variété), les cibles fixes (`fixedTargets`, voir `EX_OI_FIXED_TARGET`), et exactement `favoriTarget` pour l'OI favorite si celle-ci dépasse 1 |
| `exEffectiveHardCap(oi, favoriOi)` | Plafond dur effectif pour une OI : `EX_OI_HARD_CAP` normalement, sauf assouplissement scopé à un favori précis (`EX_OI_HARD_CAP_RELAX`, ex. « Établir des faits » ≤2 → ≤3 uniquement quand « Établir des liens de causalité » est la favorite — sinon le budget de 25 points ne permet pas d'atteindre sa cible de 2, voir analyse par recherche exhaustive) — jamais un relâchement global, seulement pour ce favori-là |
| `exOiCap(oi, favoriOi, favoriTarget, fixedTargets)` | Plafond effectif pour une OI dans cette tentative : sa cible fixe (`fixedTargets`) et/ou la cible de l'OI favorite priment sur `EX_OI_HARD_CAP` (ex. « Établir des faits » ≤2 en temps normal, mais cible fixe à 3 pour P1) — si l'OI a À LA FOIS une cible fixe ET est la favorite (ex. « Déterminer des changements et des continuités », toujours ≥2 mais jusqu'à 3 si favorite), la plus grande des deux prime, jamais l'inverse — sinon repli sur `exEffectiveHardCap` |
| `exTryBuild(questions, slots, oiList, favoriOi, favoriTarget, fixedTargets, maxPoints, rng, relaxDiversityOis)` | Construction en phases sur les `slots` (voir `exBuildAspectSlots` — un slot ordinaire est un aspect seul, un slot fusionné regroupe plusieurs aspects couverts par une seule question, un aspect répété en génère plusieurs) : (1) réserve d'abord les OI à cible exacte (fixes + favorite, la plus contrainte en premier, candidats au coût marginal le plus bas) ; (2) glouton MRV habituel pour le reste (slots aux candidats les plus rares traités en premier) ; (3) maximise le budget utilisé si de la marge reste — d'abord remplace un candidat par une alternative plus chère de la même OI sur le même slot, puis (3b) échange lequel de deux slots assignés à des OI différentes héberge quelle OI (utile quand le slot d'une OI n'offre qu'un seul sous-tag donc aucune alternative plus chère SUR CET ASPECT, alors qu'un autre slot en offre une) — jamais de changement des comptes par OI, ni de dépassement de `maxPoints`. `relaxDiversityOis` (`Set`, optionnel) désactive la règle « jamais deux fois le même sous-tag » pour les OI listées — exception scopée à un scénario précis (voir `EX_FAVORI_SCENARIOS_BY_PERIODE`), jamais une désactivation globale. Retourne `null` si un slot n'a plus de candidat valide (déjà utilisé, clé de diversité déjà prise pour cette OI — sauf relâchée, plafond d'OI atteint, budget de points dépassé), ou si l'OI favorite/les OI à cible fixe ne totalisent pas exactement leur cible en fin de construction |
| `exFixedTargetLevels(targetMap)` | Paliers de dégradation d'une cible fixe (`targetMap` — `EX_OI_FIXED_TARGET` fusionné avec `EX_OI_FIXED_TARGET_BY_PERIODE[periode]` le cas échéant), du plus ambitieux au plancher de 1 chacune |
| `exGenererExamen({questions, periode, aspects, oiList, favoriOi, maxPoints, rng})` | (1) Essaie d'abord les scénarios propres à (période, favori) — voir `EX_FAVORI_SCENARIOS_BY_PERIODE` — chacun avec ses propres slots (`aspectRepeat` de base + `extraSlots` du scénario) et cibles fixes (base + `targets` du scénario), du plus ambitieux au repli explicite sur la base, favori/cible désactivés pour la construction elle-même (déjà encodé dans les cibles du scénario). (2) Sinon, repli générique : construit les `slots` (`exBuildAspectSlots`, avec `EX_ASPECT_REPEAT_BY_PERIODE[periode]` s'il existe) et l'OI réellement atteignables dans cette période (exclut une OI totalement absente, ex. « Déterminer des changements et des continuités » en P1, et toute OI listée dans `EX_OI_VARIETY_EXCLUDE_BY_PERIODE[periode]`), puis boucle imbriquée `exTryBuild` sur les paliers de cible décroissants pour l'OI favorite (`exFavoriTargetLevels`, boucle extérieure) puis pour les cibles fixes de base (`exFixedTargetLevels`, boucle intérieure) — si le nombre exact visé est infaisable dans le budget de points, redescend d'un cran plutôt que d'échouer. Trie le résultat selon l'ordre canonique des aspects du programme |
| `EX_FAVORI_SCENARIOS_BY_PERIODE` | Scénarios propres à une période ET à l'OI favorite (la clé `null` couvre « aucune préférence »), essayés en premier par `exGenererExamen` (voir ci-dessus) — chaque niveau ajuste `targets` (cibles fixes), `extraSlots` (occurrences en plus d'un aspect déjà répétable), `relaxDiversity` (désactive « jamais deux fois le même sous-tag » pour les OI listées, EXCEPTION explicite demandée par l'enseignant — jamais un relâchement global) et/ou `aspectPin` (épingle une OI précise sur un aspect précis, voir `exBuildAspectSlots`). P1 : Causes et Différences n'ont chacune que 2 sous-tags distincts dans les données de cette période — insuffisant pour 3 occurrences sous la règle normale, d'où `relaxDiversity` sur ces scénarios (+ `extraSlots` : 13 questions requises pour seulement 11 slots de base) ; Causalité, elle, n'a pas de sous-tag du tout et atteint sa cible de 3 sans avoir besoin de `relaxDiversity` (+1 slot sur « Rapports sociaux chez les Autochtones »). Le scénario `null` (aucune préférence) vise aussi 25 points par défaut, avec la Cause en plus épinglée sur « Exploration et occupation du territoire par les Français » (demande explicite) et le Fait en plus sur un slot générique. P3 : pas de cible fixe de base (contrairement à P1) — chaque favori ajoute +1 occurrence (Causes/Différences/Causalité, cible à 2 seulement, largement sous la limite de sous-tags disponibles donc pas de `relaxDiversity` requis) + 1 Établir des faits (sauf causalité), sur 2 slots supplémentaires toujours portés par « Acte de Québec » et « Situation sociodémographique » (2 des 4 aspects à plus grand nombre de candidats). Tous atteignent 25 points exactement (`exTryBuild` phase 3/3b s'en charge, y compris via l'échange de slot 3b quand le sous-tag reste contraint sur l'aspect assigné) |
| `exReorderNoAdjacentOi(list)` | Réordonne la liste triée par aspects pour espacer les répétitions d'une même OI (vise 2-3 questions différentes entre chaque, jamais deux fois adjacentes) — essaie `EX_OI_SPACING_GAPS` (écarts 4, 3, 2) du plus confortable au minimum via `exSpreadOi` (glouton à la « Rearrange String k Distance Apart » : à chaque position, l'OI éligible avec le plus de questions en attente ; relâche sur la moins récemment placée si aucune OI n'est éligible), retient le premier écart réellement respecté sur cette liste (`exSpacingOk`) |
| `exHasDocCitation(enonce)` | Vrai si l'énoncé cite des documents par lettre (« document(s) A », « A et B », « A à C »…) |
| `exOrderDocItems(selection, rng)` | Ordre final des documents du dossier : les documents d'une question **citée** par lettre restent groupés et dans leur ordre d'origine (le bloc peut être placé n'importe où) ; les documents d'une question **non citée** sont traités individuellement et mélangés dans tout le dossier — davantage de mélange là où rien n'impose de les garder ensemble |
| `exBuildDocMap(selection, rng)` | Numérote tous les documents en une séquence globale (1, 2, 3…) selon l'ordre de `exOrderDocItems` ; retourne `{docItems, byQuestion}` (`byQuestion.get(id).letterToNum` = table lettre locale → numéro global) |
| `exRemapTexte(text, letterToNum)` | Remplace « document(s) A/A et B/A à C » par les numéros globaux dans un texte (énoncé, guide) — ne touche à rien d'autre (ex. « la lettre » qui désigne un repère dessiné à l'intérieur d'une image reste inchangé, il n'est jamais précédé du mot « document ») |
| `exRemapTitre(titre, num)` | Idem pour le titre d'un document (« Document A » → « Document 3 », conserve le texte après la lettre s'il y en a) |

⚠️ La cible pour l'OI favorite (`EX_FAVORI_BASE_TARGET` : 3 pour Dégager des différences/Déterminer des causes/Déterminer des changements, 2 pour Établir des liens de causalité) n'est pas une garantie absolue : si tous ses candidats coûtent par exemple 3 points chacun et que le budget ne permet pas d'en placer autant dans les aspects où elle a des candidats disponibles, l'algorithme redescend d'un cran plutôt que d'échouer — `examen.html` affiche le nombre réel obtenu. « Déterminer des changements et des continuités » a aussi une cible fixe de fond (`EX_OI_FIXED_TARGET`, toujours ≥2 indépendamment du favori) — la choisir comme favorite vise 3 au lieu de 2 (voir `EX_OI_HARD_CAP_RELAX` pour l'assouplissement d'« Établir des faits » qui permet d'atteindre 3 sur P2/P5, budget nul autrement).

### examen.html (UI)

| Fonction | Rôle |
|----------|------|
| `loadQuestions()` | Fetch `questions.js` (réseau simple, pas l'API GitHub — page lecture seule) |
| `exGenerate()` | Lit période + OI favori, appelle `exGenererExamen`, stocke `EX_SELECTION`/`EX_DOCMAP`/`EX_PERIODE`, affiche le résultat |
| `exRender(favoriOi)` | Construit le résumé (points/aspects/OI), la distribution par OI et le tableau des questions sélectionnées |
| `exSwapOne(qId)` | Remplace une question par une autre couvrant exactement le(s) même(s) aspect(s), dans le budget de points restant — ne revérifie pas la variété/le quota d'OI après coup (override manuel assumé) |

### docx-examen.js (génération des 3 DOCX)

| Fonction | Rôle |
|----------|------|
| `exResolveImages(neededKeys)` | Fetch + redimensionne (max 1200px) + met en cache base64 les images nécessaires (porté de `resolveImages` d'app.js) |
| `exBuildReglette(qId, C, pageW)` | Réglette (standard + 3 variantes complexes), taille 6 pt, chaque rangée en `cantSplit:true` (jamais coupée entre deux pages) — porté de `buildReglette` d'app.js. `pageW` = largeur de contenu (le questionnaire a des marges 1cm/2cm, différentes de `EX_PAGE_W` utilisé par le dossier/guide) |
| `exBuildReponse(q, C, EllipseRun, imgR, pageW)` | Espace réponse selon `q.reponse.type` (tous les types : lignes, image, tableau_2col, grille, cause-consequence, mettre-en-relation, situer-dans-lespace, avant-apres) — porté de `genererDocx` d'app.js. Même paramètre `pageW` que `exBuildReglette` |
| `exDownloadQuestionnaire()` | DOCX 1 : titre + questions numérotées (énoncé avec documents renumérotés, espace réponse, réglette) — pas de documents inline (ils sont dans le dossier séparé) |
| `exDownloadDossier()` | DOCX 2 : tous les documents de `EX_DOCMAP.docItems`, 2 par rangée, numérotés globalement |
| `exDownloadGuide()` | DOCX 3 : réponse attendue par question (texte ou grille), documents renumérotés dans le texte du guide si présents |

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

## ⚠️ Latence de propagation de l'API GitHub (écritures rapprochées sur questions.js)

Découvert le 2026-07-13 : l'API Contents de GitHub n'est **pas instantanément cohérente** entre ses différents réplicas de lecture. Sous des écritures rapprochées sur le même fichier (plusieurs modifications en moins d'une minute, par ex. via revision.html/documents.html), une « lecture fraîche » censée précéder chaque écriture peut renvoyer un état antérieur au commit précédent — jusqu'à **35 secondes** de retard observé. Résultat concret : la 2ᵉ modification écrase silencieusement la 1ʳᵉ, même si chaque écriture individuellement relit l'état avant de muter et que le SHA de base est accepté sans conflit 409 (les deux lectures/écritures ont simplement touché des réplicas différents, chacun cohérent avec lui-même).

Ce n'est **pas** le même problème que le cache CDN de GitHub Pages (documenté plus haut) — celui-là concerne le site déployé et se contourne en lisant via l'API. Celui-ci concerne l'API elle-même et n'a pas de contournement définitif.

Un délai fixe avant de relire (essayé en premier, 12 secondes) **s'est révélé insuffisant** : incident reproduit le 2026-07-14 sur `revision.html` avec seulement 14 secondes entre deux écritures — le sous-titre d'un document venait d'être modifié, la modification suivante (sur un autre document de la même question, 14 s plus tard) a relu un état encore périmé et a silencieusement effacé la première. Corrigé via `tools/apply-mutation.mjs`-style : lecture directe de l'API GitHub, comparaison de la valeur attendue, réécriture ciblée.

La parade actuelle : `rvFetchStableQuestionsJs` (revision.html), `fetchStableQuestionsJs` (documents.html) et `fetchFreshStateStable` (admin.html, seulement sur le chemin de relecture après conflit 409 ou avant une suppression) ne se contentent plus d'attendre un délai fixe — elles **relisent deux fois de suite** (espacées de 3 secondes) et ne considèrent la lecture fiable que si les deux lectures renvoient le **même SHA** (réplicas stabilisés). Sinon elles réessaient jusqu'à 45 secondes avant d'abandonner (avec un avertissement en console) plutôt que de bloquer indéfiniment. Ça ne garantit toujours pas l'absence totale du problème (deux lectures consécutives pourraient en théorie toucher le même réplica en retard), mais c'est une vérification active de fraîcheur plutôt qu'un pari sur une durée arbitraire — et ça s'adapte : plus rapide que 12 s quand les réplicas sont déjà cohérents, plus patient qu'un délai fixe quand ils ne le sont pas.

**Conséquence pratique pour l'enseignant** : éviter d'enchaîner plusieurs modifications de documents/guide/énoncé en quelques secondes sur revision.html/documents.html ; attendre la confirmation « ✓ Enregistré » entre deux modifications. Si un cas de perte de données ressemblant à ceci se reproduit (un champ tout juste modifié revient à son ancienne valeur après une modification suivante), vérifier l'historique git des commits `questions.js` autour de l'heure concernée — la même signature (un commit dont le diff « annule » un changement du commit juste précédent sur un champ non lié à l'intention du commit) confirme ce phénomène plutôt qu'un bogue de code classique.

---

## Worker Cloudflare (voie de publication rapide)

`admin.html` peut publier via un Worker Cloudflare (`/publish`, voir champ « URL Worker » dans l'UI) au lieu du PUT GitHub direct — voie prioritaire quand configurée, avec fallback GitHub Actions (`repository_dispatch` sur `publish-question.yml`) puis PUT direct si le Worker n'est pas configuré ou échoue.

- `workerUrl` et `workerSecret` sont stockés en clair dans `localStorage` du navigateur du prof (jamais saisis ailleurs, jamais commités).
- Le secret du Worker est un **secret partagé statique** (pas de rotation automatique, pas de durée de vie courte) : quiconque le lit dans `localStorage` peut publier/supprimer des questions indéfiniment tant qu'il n'est pas changé.
- ⚠️ Contrairement à la voie PUT GitHub directe (3 tentatives avec re-fetch SHA sur conflit 409), l'appel `/publish` au Worker **n'a aucune logique de retry côté client** — la gestion de concurrence dépend entièrement du code du Worker (hors de ce dépôt, non auditable ici).
- Si le secret Worker fuite ou doit être renouvelé : le régénérer côté Cloudflare, puis le recoller dans le champ correspondant d'admin.html (même mécanisme que le PAT GitHub — jamais écrit dans un fichier commité).
