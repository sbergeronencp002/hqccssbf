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

### Flow admin → site

1. Prof saisit une question dans `admin.html`
2. Clic « Publier » → PUT sur `https://api.github.com/repos/…/questions.js` (GitHub Contents API, branche `main`, token PAT)
3. GitHub Pages se redéploie (~30 s)
4. `index.html` charge `questions.js` statiquement **+ refetch avec `cache:'no-store'`** au démarrage → données toujours fraîches

### Réglettes complexes (variantes)

Trois variantes ont un rendu HTML/DOCX hardcodé dans `buildReglettHTML()` / `buildReglette()` car leur structure est une matrice non linéaire :
- `changement-continuité`
- `acteur-positions`
- `3 éléments — 2 liens`

Ces variantes ont `niveaux: []` dans `questions.js` — normal, le rendu n'utilise pas ce tableau.

### Convention bordures DOCX (réglettes complexes)

Pour supprimer les bordures internes col2↔col3 et col3↔col4 :
```js
const BN  = {style:BorderStyle.NONE,  size:0, color:'FFFFFF'};
const BC2 = {top:BORDER,bottom:BORDER,left:BORDER, right:BN};     // col2
const BC3 = {top:BORDER,bottom:BORDER,left:BN,     right:BN};     // col3
const BC4 = {top:BORDER,bottom:BORDER,left:BN,     right:BORDER}; // col4
```

### Push Git

Le proxy local est en lecture seule. Pousser via HTTPS direct :
```bash
PAT=ghp_...
git fetch https://sbergeronencp002:${PAT}@github.com/sbergeronencp002/hqccssbf.git main:refs/remotes/origin/main
git merge origin/main --no-edit
git push https://sbergeronencp002:${PAT}@github.com/sbergeronencp002/hqccssbf.git HEAD:main
git push https://sbergeronencp002:${PAT}@github.com/sbergeronencp002/hqccssbf.git HEAD:claude/hqc-cssbf-project-Fuk0V
git fetch origin claude/hqc-cssbf-project-Fuk0V
```

### Fichiers clés (mis à jour)

| Fichier | Rôle |
|---------|------|
| `backups/questions-YYYY-MM-DD_HH-MM.js` | Backups auto avant chaque publication (admin) |
| `contexte.js` | Éditeur intégré dans admin.html — section « Contexte » en bas |

### Cache-bust actuel
`app.js?v=v21`, `style.css?v=v21` — incrémenter à chaque changement majeur dans index.html.

## Images

Toujours compresser les PNG avec `pngquant` avant de commiter :
```bash
pngquant --force --quality=65-85 --output <fichier>.png <fichier>.png
```
Vérifier que la taille est raisonnable (< 400 Ko idéalement) avant de pousser.

## Renouvellement du PAT GitHub

Le PAT `github_pat_11CA47PMQ0...` expire. Quand il expire :
1. Aller sur https://github.com/settings/tokens
2. Retrouver le token `hqccssbf-admin` (ou similaire) → cliquer « Regenerate »
3. Copier le nouveau token
4. Mettre à jour la remote push URL localement :
   ```bash
   PAT=github_pat_NOUVEAU_TOKEN
   git remote set-url --push origin https://sbergeronencp002:${PAT}@github.com/sbergeronencp002/hqccssbf.git
   ```
5. Mettre à jour ce fichier CLAUDE.md avec le nouveau PAT
6. Le prof met à jour son token dans admin.html (champ Token GitHub)

Permissions requises sur le PAT : `repo` (accès complet au dépôt).
