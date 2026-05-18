
function boldify(s) {
  return s.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}
function formatTexte(text) {
  let html = '', inList = false;
  text.split('\n').forEach(line => {
    if(line.startsWith('• ') || line.startsWith('- ')) {
      if(!inList) { html += '<ul style="margin:2px 0 2px 14px;padding:0">'; inList = true; }
      html += '<li>' + boldify(line.slice(2)) + '</li>';
    } else {
      if(inList) { html += '</ul>'; inList = false; }
      if(line.trim()) html += boldify(line) + '<br>';
      else html += '<br>';
    }
  });
  if(inList) html += '</ul>';
  return html;
}

const OI_STYLES = {
  "Situer dans le temps":                       {cls:"b-oi-sit", color:"var(--c-sit)", bg:"var(--c-sit-bg)"},
  "Situer dans l'espace":                       {cls:"b-oi-esp", color:"var(--c-esp)", bg:"var(--c-esp-bg)"},
  "Établir des liens de causalité":             {cls:"b-oi-cau", color:"var(--c-cau)", bg:"var(--c-cau-bg)"},
  "Dégager des différences et des similitudes": {cls:"b-oi-dif", color:"var(--c-dif)", bg:"var(--c-dif-bg)"},
  "Déterminer des changements et des continuités": {cls:"b-oi-chg", color:"var(--c-chg)", bg:"var(--c-chg-bg)"},
  "Déterminer des causes et des conséquences":  {cls:"b-oi-rel", color:"var(--c-rel)", bg:"var(--c-rel-bg)"},
  "Mettre en relation des faits":               {cls:"b-oi-mr",  color:"var(--c-mr)",  bg:"var(--c-mr-bg)"},
  "Établir des faits":                          {cls:"b-oi-fai", color:"var(--c-fai)", bg:"var(--c-fai-bg)"},
};

function oiStyle(oi) {
  return OI_STYLES[oi] || {color:"var(--ink-2)", bg:"var(--paper-3)"};
}

let aspects = [];
const periodeOrder = [...PERIODES_PAR_NIVEAU['3'], ...PERIODES_PAR_NIVEAU['4']];
let Q_MAP = new Map();          // id → question (O(1) lookup)
let Q_SEARCH_IDX = new Map();   // id → lowercase search string (pre-built)
let NEW_IDS = new Set();        // 10 questions les plus récentes

function populateFilters() {
  Q_MAP = new Map(QUESTIONS.map(q => [q.id, q]));
  Q_SEARCH_IDX = new Map(QUESTIONS.map(q => [q.id,
    [q.enonce||'', q.oi||'', q.periode||'', ...(q.aspects||[]).map(a=>a.aspect)].join(' ').toLowerCase()
  ]));
  const sorted = [...QUESTIONS].sort((a,b) => (parseInt(b.id.replace(/\D/g,''))||0) - (parseInt(a.id.replace(/\D/g,''))||0));
  NEW_IDS = new Set(sorted.slice(0,10).map(q=>q.id));
  const allOis = [...new Set(QUESTIONS.map(q=>q.oi))].sort((a,b)=>a.localeCompare(b,'fr'));
  const aspectsByPeriode = {};
  QUESTIONS.forEach(q=>{
    q.aspects.forEach(a=>{
      if(!aspectsByPeriode[q.periode]) aspectsByPeriode[q.periode]=new Set();
      aspectsByPeriode[q.periode].add(a.aspect);
    });
  });
  aspects = periodeOrder.flatMap(p=>{
    if(!aspectsByPeriode[p]) return [];
    return [...aspectsByPeriode[p]].sort((a,b)=>a.localeCompare(b,'fr')).map(a=>({aspect:a, periode:p}));
  });
  const periodes = [...new Set(QUESTIONS.map(q=>q.periode))];

  fill('f-periode', periodes, "Toutes");
  fillAspect('f-aspect', aspects, periodeOrder);
  fillOi('f-oi', allOis, "Toutes");
}

function fill(id, vals, placeholder) {
  const el = document.getElementById(id);
  el.innerHTML = `<option value="">${placeholder}</option>`;
  vals.forEach(v=>{ const o=document.createElement('option'); o.value=v; o.textContent=v; el.appendChild(o); });
}

function fillAspect(id, aspects, periodeOrder) {
  const el = document.getElementById(id);
  el.innerHTML = '<option value="">Tous</option>';
  periodeOrder.forEach(p=>{
    const group = aspects.filter(a=>a.periode===p);
    if(!group.length) return;
    const og = document.createElement('optgroup');
    og.label = p;
    group.forEach(a=>{
      const o = document.createElement('option');
      o.value = a.aspect;
      o.textContent = a.aspect;
      og.appendChild(o);
    });
    el.appendChild(og);
  });
}

function fillOi(id, ois, placeholder) {
  const el = document.getElementById(id);
  el.innerHTML = `<option value="">${placeholder}</option>`;
  ois.forEach(v=>{ const o=document.createElement('option'); o.value=v; o.textContent=v; el.appendChild(o); });
}

function onPeriodeChange() {
  const niveau  = document.getElementById('f-niveau').value;
  const periode = document.getElementById('f-periode').value;
  const allowedPeriodes = niveau ? PERIODES_PAR_NIVEAU[niveau] : periodeOrder;
  const filteredAspects = periode
    ? aspects.filter(a => a.periode === periode)
    : aspects.filter(a => allowedPeriodes.includes(a.periode));
  fillAspect('f-aspect', filteredAspects, periodeOrder);
  document.getElementById('f-aspect').value = '';
  applyFilters();
}

function onNiveauChange() {
  const niveau = document.getElementById('f-niveau').value;
  const allowedPeriodes = niveau ? PERIODES_PAR_NIVEAU[niveau] : periodeOrder;

  // Rebuild période dropdown
  const periodeEl = document.getElementById('f-periode');
  const currentPeriode = periodeEl.value;
  periodeEl.innerHTML = '<option value="">Toutes</option>';
  allowedPeriodes.forEach(p => {
    const o = document.createElement('option');
    o.value = o.textContent = p;
    periodeEl.appendChild(o);
  });
  if(allowedPeriodes.includes(currentPeriode)) periodeEl.value = currentPeriode;
  else periodeEl.value = '';

  // Rebuild aspect dropdown
  const periode = periodeEl.value;
  const filteredAspects = periode
    ? aspects.filter(a => a.periode === periode)
    : aspects.filter(a => allowedPeriodes.includes(a.periode));
  fillAspect('f-aspect', filteredAspects, periodeOrder);
  document.getElementById('f-aspect').value = '';

  applyFilters();
}

// Debounce uniquement pour la frappe de recherche
let _searchTimer = 0;
function debouncedApplyFilters() {
  clearTimeout(_searchTimer);
  _searchTimer = setTimeout(applyFilters, 280);
}

function applyFilters() {
  const oi      = document.getElementById('f-oi').value;
  const aspect  = document.getElementById('f-aspect').value;
  const periode = document.getElementById('f-periode').value;
  const niveau  = document.getElementById('f-niveau').value;
  const search  = (document.getElementById('f-search')?.value || '').trim().toLowerCase();
  const currentOi = oi;

  // Parcours unique : construit filtered + relevantOis en même passe
  const filtered = [];
  const oiSet = new Set();
  for(const q of QUESTIONS) {
    const niveauOk  = !niveau  || String(q.niveau) === niveau;
    const periodeOk = !periode || q.periode === periode;
    const aspectOk  = !aspect  || q.aspects.some(a=>a.aspect===aspect);
    if(niveauOk && periodeOk && aspectOk) oiSet.add(q.oi);
    if(!niveauOk || !periodeOk || !aspectOk) continue;
    if(oi && q.oi !== oi) continue;
    if(search && !(Q_SEARCH_IDX.get(q.id)||'').includes(search)) continue;
    filtered.push(q);
  }

  filtered.sort((a, b) => {
    const nA = parseInt(a.id.replace(/\D/g, '')) || 0;
    const nB = parseInt(b.id.replace(/\D/g, '')) || 0;
    return nB - nA;
  });

  const relevantOis = [...oiSet].sort((a,b)=>a.localeCompare(b,'fr'));
  fillOi('f-oi', relevantOis, "Toutes");
  if(relevantOis.includes(currentOi)) document.getElementById('f-oi').value = currentOi;

  const totalPtsFilt = filtered.reduce((s,q)=>s+(q.points||0), 0);
  document.getElementById('stat-num').textContent = filtered.length;
  const statPts = document.getElementById('stat-pts');
  if(statPts) statPts.textContent = totalPtsFilt + ' pt' + (totalPtsFilt!==1?'s':'') + ' disponibles';
  document.getElementById('results-label').textContent =
    filtered.length === QUESTIONS.length
      ? `Toutes les questions (${filtered.length})`
      : `${filtered.length} question${filtered.length!==1?'s':''} · ${totalPtsFilt} pt${totalPtsFilt!==1?'s':''}`;

  render(filtered);
}

function resetFilters() {
  ['f-niveau','f-periode','f-aspect','f-oi','f-search'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.value = '';
  });
  applyFilters();
}

function buildReglettHTML(q) {
  const r = REGLETTES[q.id];
  if(!r) return '<p><em>Réglette non disponible.</em></p>';

  const S = 'font-family:Aptos,Arial,sans-serif;font-size:6pt;text-align:center;vertical-align:middle;border:1px solid #000;padding:4px 6px;background:#fff';
  const SB = S + ';font-weight:bold';

  // Matrix layout for causalité (3 éléments — 2 liens)
  if(r.variante === '3 éléments — 2 liens') {
    const S2 = S + ';border-right:none';
    const S3 = S + ';border-left:none;border-right:none';
    const S4 = S + ';border-left:none';
    return `<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%">
      <tr>
        <td style="${SB};width:22%" rowspan="6">${r.oi}</td>
        <td style="${S2};width:26%" rowspan="3">L'élève précise les trois éléments</td>
        <td style="${S3};width:35%">et établit correctement deux liens de causalité.</td>
        <td style="${S4};width:17%">3 points</td>
      </tr>
      <tr>
        <td style="${S3}">et établit correctement un lien de causalité.</td>
        <td style="${S4}">2 points</td>
      </tr>
      <tr>
        <td style="${S3}">mais n'établit correctement aucun lien de causalité.</td>
        <td style="${S4}">1 point</td>
      </tr>
      <tr>
        <td style="${S2}" rowspan="2">L'élève précise deux éléments</td>
        <td style="${S3}">et établit correctement un lien de causalité.</td>
        <td style="${S4}">2 points</td>
      </tr>
      <tr>
        <td style="${S3}">mais n'établit correctement aucun lien de causalité.</td>
        <td style="${S4}">1 point</td>
      </tr>
      <tr>
        <td style="${S2}" colspan="2">L'élève précise un seul élément ou n'en précise pas.</td>
        <td style="${S4}">0 point</td>
      </tr>
    </table>`;
  }

  if(r.variante === 'acteur-positions') {
    const S2 = S + ';border-right:none';
    const S3 = S + ';border-left:none;border-right:none';
    const S4 = S + ';border-left:none';
    return `<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%">
      <tr>
        <td style="${SB};width:22%" rowspan="5">${r.oi}</td>
        <td style="${S2};width:43%" rowspan="4">L'élève nomme correctement l'acteur qui présente une position différente</td>
        <td style="${S3}">et présente correctement les deux positions.</td>
        <td style="${S4};width:17%">3 points</td>
      </tr>
      <tr>
        <td style="${S3}">et présente correctement une position et plus ou moins correctement l'autre position.</td>
        <td style="${S4}">2 points</td>
      </tr>
      <tr>
        <td style="${S3}">et présente plus ou moins correctement les deux positions, ou présente correctement une position et incorrectement l'autre ou ne la présente pas.</td>
        <td style="${S4}">1 point</td>
      </tr>
      <tr>
        <td style="${S3}">et présente tout au plus une seule position plus ou moins correctement.</td>
        <td style="${S4}">0 point</td>
      </tr>
      <tr>
        <td style="${S2}" colspan="2">L'élève nomme incorrectement l'acteur qui présente une position différente ou ne le nomme pas.</td>
        <td style="${S4}">0 point</td>
      </tr>
    </table>`;
  }

  if(r.variante === 'changement-continuité') {
    const S2 = S + ';border-right:none';
    const S3 = S + ';border-left:none;border-right:none';
    const S4 = S + ';border-left:none';
    return `<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%">
      <tr>
        <td style="${SB};width:22%" rowspan="6">${r.oi}</td>
        <td style="${S2};width:37%" rowspan="3">L'élève indique s'il y a changement ou continuité</td>
        <td style="${S3}">et présente des faits qui le montrent correctement.</td>
        <td style="${S4};width:20%">3 points (ou 2 points)</td>
      </tr>
      <tr>
        <td style="${S3}">et présente des faits qui le montrent plus ou moins correctement.</td>
        <td style="${S4}">2 points (ou 1 point)</td>
      </tr>
      <tr>
        <td style="${S3}">et présente des faits qui le montrent incorrectement ou n'en présente pas.</td>
        <td style="${S4}">0 point</td>
      </tr>
      <tr>
        <td style="${S2}" rowspan="3">L'élève n'indique pas s'il y a changement ou continuité</td>
        <td style="${S3}">mais présente des faits exacts.</td>
        <td style="${S4}">2 points (ou 1 point)</td>
      </tr>
      <tr>
        <td style="${S3}">mais présente des faits plus ou moins exacts.</td>
        <td style="${S4}">1 point (ou 0 point)</td>
      </tr>
      <tr>
        <td style="${S3}">et présente des faits inexacts ou n'en présente pas.</td>
        <td style="${S4}">0 point</td>
      </tr>
    </table>`;
  }

  // Standard layout — header row (points) + description row
  if(!r.colonnes.length) return '<p style="color:#999;font-size:0.8rem">Réglette non configurée.</p>';
  const colW = Math.floor(78 / r.colonnes.length);
  const headers = r.colonnes.map(c=>`<td style="${S};width:${colW}%">${c}</td>`).join('');
  const cells   = r.niveaux.map(n=>`<td style="${S}">${n.desc}</td>`).join('');

  return `<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%">
    <tr>
      <td style="${SB};width:22%" rowspan="2">${r.oi}</td>
      ${headers}
    </tr>
    <tr>
      ${cells}
    </tr>
  </table>`;
}

function openQModal(id) {
  const q = Q_MAP.get(id);
  if(!q) return;
  const st = oiStyle(q.oi);

  const header = document.getElementById('q-modal-header');
  header.style.background = st.bg;
  header.style.color = st.color;
  header.style.borderBottom = '3px solid ' + st.color;

  const closeBtn = document.getElementById('q-modal-close');
  if(closeBtn) closeBtn.style.color = st.color;

  const aspects = q.aspects.map(a => a.aspect).join(' · ');
  document.getElementById('q-modal-title').innerHTML =
    `<div class="q-oi-badge" style="color:${st.color};background:rgba(0,0,0,0.08)">${q.oi}</div>` +
    `<div style="font-size:0.7rem;margin-top:3px;opacity:0.72">${aspects}</div>` +
    `<div style="font-size:0.67rem;margin-top:2px;opacity:0.55;font-weight:600">${q.points}&thinsp;pt${q.points > 1 ? 's' : ''}</div>`;

  let html = '<div class="q-section-label">Question</div>';
  html += '<div class="q-full-enonce">' + formatTexte(q.enonce) + '</div>';

  if(q.documents && q.documents.length) {
    html += '<div class="q-section-label">Documents</div>';
    html += '<div class="q-docs-images">' + q.documents.map(d => renderDoc(d)).join('<div class="doc-spacer"></div>') + '</div>';
  }

  const rep = renderReponse(q);
  if(rep) {
    html += '<div class="q-section-label">Espace réponse</div>' + rep;
  }

  const r = REGLETTES[q.id];
  if(r) {
    html += '<div class="q-section-label">Réglette</div>';
    if(r.variante) {
      html += '<div style="font-size:0.78rem;color:var(--ink-3);font-style:italic">Réglette complexe — disponible dans le cahier généré.</div>';
    } else {
      html += `<table class="reglette-table">${r.niveaux.map(n =>
        `<tr><td class="r-pts-cell">${n.pts}&thinsp;pt${n.pts > 1 ? 's' : ''}</td><td class="r-desc-cell">${n.desc}</td></tr>`
      ).join('')}</table>`;
    }
  }

  const body = document.getElementById('q-modal-body');
  body.innerHTML = html;
  body.scrollTop = 0;

  const btn = document.getElementById('q-modal-panier-btn');
  btn.dataset.id = id;
  updateQModalBtn(id);

  document.getElementById('q-modal-overlay').classList.add('open');
}

function closeQModal() {
  document.getElementById('q-modal-overlay').classList.remove('open');
}

function closeQModalOverlay(e) {
  if(e.target === document.getElementById('q-modal-overlay')) closeQModal();
}

function updateTileState(id) {
  const tile = document.getElementById('tile-' + id);
  if(tile) tile.classList.toggle('in-panier', panier.includes(id));
}

function updateQModalBtn(id) {
  const btn = document.getElementById('q-modal-panier-btn');
  if(!btn || btn.dataset.id !== id) return;
  const inPanier = panier.includes(id);
  btn.textContent = inPanier ? '✓ Dans le panier' : '+ Ajouter au panier';
  btn.classList.toggle('in-panier', inPanier);
}

function togglePanierModal() {
  const btn = document.getElementById('q-modal-panier-btn');
  if(!btn || !btn.dataset.id) return;
  const id = btn.dataset.id;
  const wasInPanier = panier.includes(id);
  togglePanier(id);
  if(!wasInPanier && panier.includes(id)) closeQModal();
}

function flashBtn(btn, msg) {
  const orig = btn.textContent;
  btn.textContent = msg;
  btn.classList.add('copied');
  setTimeout(()=>{ btn.textContent=orig; btn.classList.remove('copied'); }, 2000);
}

const PAGE_SIZE = 50;
let currentFiltered = [];

function buildTileHtml(q) {
  const st = oiStyle(q.oi);
  const aspect = q.aspects.map(a => a.aspect).join(' · ');
  const inPanier = panier.includes(q.id);
  return `<div class="q-tile${inPanier ? ' in-panier' : ''}" id="tile-${q.id}"
    style="--tile-color:${st.color};background:#fff" onclick="openQModal('${q.id}')">
    <div class="q-tile-bar" style="display:none"></div>
    <div class="q-tile-content">
      <div class="q-tile-oi" style="display:block;font-size:1.1rem;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;padding:5px 12px;border-radius:6px;color:${st.color};background:${st.bg};line-height:1.3;word-break:break-word">${q.oi}</div>
      <div class="q-tile-aspect" style="font-size:0.9rem;font-weight:400;color:#6B6560;margin-top:2px">${aspect}</div>
      ${(NEW_IDS.has(q.id) || q.soustag) ? `<div style="margin-top:6px;display:flex;gap:5px;flex-wrap:wrap">
        ${NEW_IDS.has(q.id) ? `<span style="font-size:0.7rem;color:${st.color};background:${st.bg};border-radius:10px;padding:1px 8px;font-weight:700;letter-spacing:0.03em">Nouveauté</span>` : ''}
        ${q.soustag ? `<span style="font-size:0.7rem;color:${st.color};background:${st.bg};border-radius:10px;padding:1px 8px;font-weight:500">${q.soustag}</span>` : ''}
      </div>` : ''}
    </div>
    <span class="q-tile-check" onclick="event.stopPropagation();togglePanier('${q.id}')">✓</span>
  </div>`;
}

function render(list) {
  currentFiltered = list;
  const container = document.getElementById('q-list');
  if(!list.length) {
    container.innerHTML = `<div class="empty-state"><span class="big">0</span>Aucune question ne correspond aux filtres.</div>`;
    return;
  }
  container.innerHTML = currentFiltered.slice(0, PAGE_SIZE).map(buildTileHtml).join('');
  const rem = currentFiltered.length - PAGE_SIZE;
  if(rem > 0) {
    container.insertAdjacentHTML('beforeend',
      `<div class="voir-plus-wrap"><button class="voir-plus-btn" onclick="renderMore()">Voir ${rem} autre${rem>1?'s':''} →</button></div>`);
  }
}

function renderMore() {
  const container = document.getElementById('q-list');
  container.querySelector('.voir-plus-wrap')?.remove();
  const shown = container.querySelectorAll('.q-tile').length;
  const next = currentFiltered.slice(shown, shown + PAGE_SIZE);
  container.insertAdjacentHTML('beforeend', next.map(buildTileHtml).join(''));
  const rem = currentFiltered.length - shown - next.length;
  if(rem > 0) {
    container.insertAdjacentHTML('beforeend',
      `<div class="voir-plus-wrap"><button class="voir-plus-btn" onclick="renderMore()">Voir ${rem} autre${rem>1?'s':''} →</button></div>`);
  }
}

async function initSite() {
  document.getElementById('q-list').innerHTML =
    '<div class="empty-state"><span class="big" style="font-size:2rem">…</span>Chargement…</div>';
  try {
    const resp = await fetch('questions.js', { cache: 'no-store' });
    if(resp.ok) (new Function(await resp.text()))();
  } catch(e) { /* utilise les globals déjà définis par <script src="questions.js"> */ }
  populateFilters();
  applyFilters();
  try {
    const saved = localStorage.getItem('hqc_panier');
    if(saved) {
      const ids = JSON.parse(saved).filter(id => QUESTIONS.some(q => q.id === id));
      if(ids.length) { panier = ids; updatePanierBar(); refreshPanierButtons(); }
    }
  } catch(e) {}
}
initSite();

document.addEventListener('keydown', e => {
  if(e.key === 'Escape') { closeQModal(); closePreviewBtn(); }
});

// ===== PANIER =====
let panier = [];

function toggleTexte(btn) {
  const cell = btn.parentElement;
  const short = cell.querySelector('.doc-texte-short');
  const full = cell.querySelector('.doc-texte-full');
  if(full.style.display === 'none') {
    short.style.display = 'none';
    full.style.display = 'block';
    btn.textContent = 'Réduire';
  } else {
    short.style.display = 'block';
    full.style.display = 'none';
    btn.textContent = 'Lire la suite';
  }
}

function renderDoc(d) {
  // Textes avec troncature
  if(d.type === 'textes') {
    let html = '<table style="width:100%;border-collapse:collapse;margin-bottom:8px"><tr>';
    d.cols.forEach(function(col) {
      html += '<td style="width:' + Math.floor(100/d.cols.length) + '%;padding:6px;vertical-align:top;border:0.5px solid var(--border)">';
      html += '<div style="font-size:0.75rem;font-weight:600;margin-bottom:4px;color:var(--ink)">' + col.titre + '</div>';
      if(col.texte) {
        const plain = col.texte.replace(/\*\*(.*?)\*\*/g,'$1');
        const isLong = plain.length > 120;
        const shortHtml = isLong ? boldify(plain.substring(0,120)) + '...' : formatTexte(col.texte);
        html += '<div class="doc-texte-short" style="font-size:0.75rem;color:var(--ink-2);line-height:1.5">' + shortHtml + '</div>';
        if(isLong) {
          html += '<div class="doc-texte-full" style="display:none;font-size:0.75rem;color:var(--ink-2);line-height:1.5">' + formatTexte(col.texte) + '</div>';
          html += '<button onclick="toggleTexte(this)" style="font-size:0.7rem;color:var(--ink-3);background:none;border:none;cursor:pointer;padding:2px 0;text-decoration:underline">Lire la suite</button>';
        }
      } else if(col.ref) {
        const img2 = IMAGE_DB[col.ref];
        if(img2) html += '<img src="' + img2.src + '" style="max-width:100%;max-height:150px;object-fit:contain;cursor:pointer" onclick="openLightbox(\'' + img2.src + '\')">';
      }
      if(col.auteur) html += '<div style="font-size:0.7rem;color:var(--ink-2);margin-top:4px;font-style:italic">' + col.auteur + '</div>';
      if(col.source) html += '<div style="font-size:0.65rem;color:var(--ink-3);margin-top:2px;font-style:italic">' + col.source + '</div>';
      html += '</td>';
    });
    html += '</tr></table>';
    return html;
  }
  // Tableau 2 colonnes
  if(d.type === 'tableau') {
    let html = '<table style="width:100%;border-collapse:collapse;margin-bottom:8px"><tr>';
    d.cols.forEach(function(col) {
      const img = IMAGE_DB[col.ref];
      html += '<td style="width:' + Math.floor(100/d.cols.length) + '%;padding:4px;vertical-align:top;border:0.5px solid var(--border)">';
      if(col.titreWeb && col.titre) html += '<div class="doc-img-titre">' + col.titre + '</div>';
      if(img) html += '<img src="' + img.src + '" class="doc-img" style="max-height:150px" onclick="openLightbox(\'' + img.src + '\')">';
      html += '</td>';
    });
    html += '</tr></table>';
    return html;
  }
  // Image simple
  const img = IMAGE_DB[d.ref];
  if(img) {
    const titre = d.titre ? '<div class="doc-img-titre">' + d.titre + '</div>' : '';
    return '<div class="doc-img-wrap">' + titre + '<img src="' + img.src + '" class="doc-img" onclick="openLightbox(\'' + img.src + '\')" title="Cliquer pour agrandir"></div>';
  }
  return '<div><span class="doc-chip">' + d.type + ' — ' + d.ref + '</span></div>';
}

function renderReponse(q) {
  if(!q.reponse || q.reponse === false) return '';
  if(q.reponse === true) {
    return '<div style="border-bottom:1px solid var(--border);height:28px;margin:6px 0"></div>';
  }
  if(q.reponse.type === 'tableau_3col') {
    const {col1='', col2='', col3=''} = q.reponse;
    const S = 'border:1px solid var(--ink-2);text-align:center;font-weight:600;padding:6px 8px;font-size:0.8rem';
    return '<table style="border-collapse:collapse;margin:8px 0;">'
      + '<tr>'
      + '<td style="' + S + '">' + col1 + '</td>'
      + '<td style="' + S + ';vertical-align:middle" rowspan="2">' + col2 + '</td>'
      + '<td style="' + S + '">' + col3 + '</td>'
      + '</tr><tr>'
      + '<td style="border:1px solid var(--ink-2);background:var(--paper-2);height:50px;min-width:80px"></td>'
      + '<td style="border:1px solid var(--ink-2);background:var(--paper-2);height:50px;min-width:80px"></td>'
      + '</tr></table>';
  }
  if(q.reponse.type === 'image') {
    const img = IMAGE_DB[q.reponse.ref];
    if(!img) return '';
    return '<div class="doc-img-wrap"><img src="' + img.src + '" class="doc-img" onclick="openLightbox(\'' + img.src + '\')" title="Cliquer pour agrandir"></div>';
  }
  if(q.reponse.type === 'lignes') {
    const n = q.reponse.nombre || 1;
    return '<div>' + Array(n).fill('<div style="border-bottom:1px solid var(--border);height:28px;margin:6px 0"></div>').join('') + '</div>';
  }
  if(q.reponse.type === 'tableau') {
    let html = '<table style="border-collapse:collapse;margin:8px 0;font-size:0.8rem;">'
      + '<tr><th style="border:0.5px solid var(--border);padding:4px 8px;background:var(--paper-2);text-align:left"></th>'
      + '<th style="border:0.5px solid var(--border);padding:4px 8px;background:var(--paper-2);text-align:center">Document</th></tr>';
    q.reponse.lignes.forEach(l=>{
      html += '<tr><td style="border:0.5px solid var(--border);padding:4px 8px">' + l.label + '</td>'
            + '<td style="border:0.5px solid var(--border);padding:4px 30px"></td></tr>';
    });
    html += '</table>';
    return html;
  }
  if(q.reponse.type === 'grille') {
    const {entetes=[], rangees=[]} = q.reponse;
    const TH = 'border:0.5px solid var(--border);padding:4px 8px;background:var(--paper-2);text-align:center;font-weight:600;font-size:0.8rem';
    const TD = 'border:0.5px solid var(--border);padding:4px 8px;font-size:0.8rem';
    let html = '<table style="border-collapse:collapse;margin:8px 0;">';
    html += '<tr>' + entetes.map(h => `<th style="${TH}">${h}</th>`).join('') + '</tr>';
    rangees.forEach(row => {
      html += '<tr>' + row.map((cell, ci) => `<td style="${TD}${ci===0?';font-weight:500':';min-width:60px;height:24px'}">${cell}</td>`).join('') + '</tr>';
    });
    html += '</table>';
    return html;
  }
  if(q.reponse.type === 'tableau_2col') {
    const CS = 'border:1px solid var(--ink-2);text-align:center;padding:6px 8px;font-size:0.8rem;width:113px';
    return '<table style="border-collapse:collapse;margin:8px 0;">'
      + '<tr><td style="' + CS + ';font-weight:600;background:var(--paper-2)">Réponse</td>'
      + '<td style="' + CS + ';background:var(--paper);height:40px"></td></tr>'
      + '</table>';
  }
  if(q.reponse.type === 'avant-apres') {
    const lbl = q.reponse.label || '';
    const SB = 'border:1px solid var(--ink-2);text-align:center;font-weight:600;padding:6px 8px;font-size:0.8rem';
    const S  = 'border:1px solid var(--ink-2);text-align:center;padding:8px 4px;font-size:0.8rem';
    const SN = 'border-top:1px solid var(--ink-2);border-bottom:1px solid var(--ink-2);border-left:none;border-right:none;text-align:center;padding:8px 4px;font-size:0.8rem';
    const circle = '<span style="display:inline-block;width:2cm;height:2cm;border-radius:50%;border:1.5px solid #000;vertical-align:middle"></span>';
    const mkSide = (bLeft) =>
      '<td style="' + (bLeft ? S : SN) + ';width:11%">' + circle + '</td>'
      + '<td style="' + SN + ';width:11%">et</td>'
      + '<td style="' + (!bLeft ? S : SN) + ';width:11%">' + circle + '</td>';
    return '<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;margin:8px 0">'
      + '<tr>'
      + '<td style="' + SB + ';width:33%" colspan="3">Avant</td>'
      + '<td style="' + S  + ';width:34%" rowspan="2">' + lbl + '</td>'
      + '<td style="' + SB + ';width:33%" colspan="3">Après</td>'
      + '</tr><tr>'
      + mkSide(true)
      + mkSide(false)
      + '</tr></table>';
  }
  return '';
}

function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}


function previsualiser(guideMode) {
  if(panier.length === 0) { showWarn('Le panier est vide.'); return; }
  const body = document.getElementById('preview-body');
  if(guideMode) {
    // Guide preview — numéros + réponses seulement
    let html = '<div style="font-size:0.85rem;font-weight:600;color:var(--ink);margin-bottom:1.5rem;letter-spacing:0.05em;text-transform:uppercase">Guide de correction</div>';
    panier.forEach(function(id, idx) {
      const q = Q_MAP.get(id);
      if(!q) return;
      let guideContent = '';
      if(q.guide) {
        if(typeof q.guide === 'string') {
          guideContent = '<span style="font-size:0.9rem;color:var(--ink)">' + q.guide + '</span>';
        } else if(q.guide.type === 'grille' || q.guide.type === 'tableau') {
          const TH = 'border:0.5px solid var(--border);padding:3px 10px;background:var(--paper-2);font-weight:600';
          const TD = 'border:0.5px solid var(--border);padding:3px 10px';
          guideContent = '<table style="border-collapse:collapse;font-size:0.8rem;margin-top:4px">';
          if(q.guide.type === 'grille') {
            guideContent += '<tr>' + q.guide.entetes.map(h=>`<th style="${TH}">${h}</th>`).join('') + '</tr>';
            q.guide.rangees.forEach(function(row) {
              guideContent += '<tr>' + row.map(function(cell,ci){ return `<td style="${TD}${ci===0?';font-weight:500':''}">${cell}</td>`; }).join('') + '</tr>';
            });
          } else {
            guideContent += `<tr><th style="${TH}"></th><th style="${TH}">Document</th></tr>`;
            q.guide.lignes.forEach(function(l) {
              guideContent += `<tr><td style="${TD};font-weight:500">${l.label}</td><td style="${TD};text-align:center">${l.valeur}</td></tr>`;
            });
          }
          guideContent += '</table>';
        }
      } else {
        guideContent = '<span style="font-size:0.9rem;color:var(--ink-3);font-style:italic">—</span>';
      }
      html += '<div class="preview-question" style="margin-bottom:0.75rem;padding-bottom:0.75rem">'
        + '<span style="font-weight:500;color:var(--ink-2)">' + (idx+1) + '.&nbsp;&nbsp;</span>'
        + guideContent
        + '</div>';
    });
    body.innerHTML = html;
  } else {
    const examNom    = (document.getElementById('exam-nom')?.value || '').trim();
    const showEleve  = !!document.getElementById('exam-eleve')?.checked;
    const showGroupe = !!document.getElementById('exam-groupe')?.checked;
    const showDate   = !!document.getElementById('exam-date')?.checked;
    const showScore  = !!document.getElementById('exam-score')?.checked;
    const showComm   = !!document.getElementById('exam-commentaires')?.checked;
    const totalPrevPts = panier.reduce((s,id) => { const q=Q_MAP.get(id); return s+(q?.points||0); }, 0);

    let previewHtml = '';
    if(examNom || showEleve || showGroupe || showDate || showScore) {
      previewHtml += '<div style="margin-bottom:1.5rem">';
      if(examNom) previewHtml += '<div style="text-align:center;font-size:1.15rem;font-weight:700;letter-spacing:0.04em;margin-bottom:0.6rem">' + examNom + '</div>';
      previewHtml += '<div style="border-top:3px solid #000;margin-bottom:0.75rem"></div>';
      const hasFields = showEleve || showGroupe || showDate || showScore;
      if(hasFields) {
        previewHtml += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px 2rem;font-size:0.88rem">';
        if(showEleve)  previewHtml += '<div>Élève : _________________________</div>';
        if(showGroupe) previewHtml += '<div>Groupe : ________________________</div>';
        else if(showEleve) previewHtml += '<div></div>';
        if(showDate)   previewHtml += '<div>Date : __________________________</div>';
        if(showScore)  previewHtml += '<div style="text-align:right">_____ / ' + totalPrevPts + ' pts</div>';
        previewHtml += '</div>';
      }
      previewHtml += '</div>';
    }

    previewHtml += panier.map(function(id, idx) {
      const q = Q_MAP.get(id);
      const r = REGLETTES[id];
      if(!q) return '';
      let docsHtml = '';
      if(q.documents && q.documents.length) {
        docsHtml = '<div class="preview-docs">';
        q.documents.forEach(function(d) {
          if(d.type === 'tableau') {
            docsHtml += '<table style="width:100%;border-collapse:collapse;margin-bottom:8px"><tr>';
            d.cols.forEach(function(col) {
              const img = IMAGE_DB[col.ref];
              const titre = (col.titreWeb && col.titre) ? col.titre : col.ref;
              docsHtml += '<td style="width:' + Math.floor(100/d.cols.length) + '%;padding:6px;vertical-align:top;border:0.5px solid var(--border)">';
              docsHtml += '<div style="font-size:0.75rem;font-style:italic;margin-bottom:4px;color:var(--ink-2)">' + titre + '</div>';
              if(img) docsHtml += '<img src="' + img.src + '" style="max-width:100%;max-height:100px;object-fit:contain;cursor:pointer" onclick="openLightbox(\'' + img.src + '\')">';
              docsHtml += '</td>';
            });
            docsHtml += '</tr></table>';
          } else if(d.type === 'textes') {
            docsHtml += '<table style="width:100%;border-collapse:collapse;margin-bottom:8px"><tr>';
            d.cols.forEach(function(col) {
              const img = IMAGE_DB[col.ref];
              docsHtml += '<td style="width:' + Math.floor(100/d.cols.length) + '%;padding:6px;vertical-align:top;border:0.5px solid var(--border)">';
              docsHtml += '<div style="font-size:0.75rem;font-weight:600;margin-bottom:4px;color:var(--ink)">' + col.titre + '</div>';
              if(col.texte) {
                docsHtml += '<div style="font-size:0.72rem;color:var(--ink-2);line-height:1.5">' + formatTexte(col.texte) + '</div>';
              } else if(img) {
                docsHtml += '<img src="' + img.src + '" style="max-width:100%;max-height:100px;object-fit:contain;cursor:pointer" onclick="openLightbox(\'' + img.src + '\')">';
              }
              if(col.auteur) docsHtml += '<div style="font-size:0.7rem;color:var(--ink-2);margin-top:4px;font-style:italic">' + col.auteur + '</div>';
              if(col.source) docsHtml += '<div style="font-size:0.65rem;color:var(--ink-3);margin-top:2px;font-style:italic">' + col.source + '</div>';
              docsHtml += '</td>';
            });
            docsHtml += '</tr></table>';
          }
        });
        docsHtml += '</div>';
      }
      let regHtml = '';
      if(r) {
        if(r.variante) {
          regHtml = '<div class="preview-reglette">' + buildReglettHTML(q) + '</div>';
        } else {
          regHtml = '<div class="preview-reglette"><table><tr><td class="r-label" rowspan="2">' + r.oi + '</td>';
          regHtml += r.colonnes.map(function(c) { return '<td style="text-align:center;background:var(--paper-2)">' + c + '</td>'; }).join('');
          regHtml += '</tr><tr>' + r.niveaux.map(function(n) { return '<td>' + n.desc + '</td>'; }).join('') + '</tr></table></div>';
        }
      }
      // Réponse in preview
      let previewReponse = '';
      if(q.reponse && q.reponse !== false) {
        if(q.reponse === true) {
          previewReponse = '<div class="reponse-courte" style="margin:8px 0">__________</div>';
        } else if(q.reponse.type === 'tableau_3col') {
          const {col1='', col2='', col3=''} = q.reponse;
          const S = 'border:1px solid #999;text-align:center;font-weight:600;padding:6px 8px;font-size:0.75rem';
          previewReponse = '<table style="border-collapse:collapse;margin:8px 0;">'
            + '<tr>'
            + '<td style="' + S + '">' + col1 + '</td>'
            + '<td style="' + S + ';vertical-align:middle" rowspan="2">' + col2 + '</td>'
            + '<td style="' + S + '">' + col3 + '</td>'
            + '</tr><tr>'
            + '<td style="border:1px solid #999;background:#f0f0f0;height:40px;min-width:80px"></td>'
            + '<td style="border:1px solid #999;background:#f0f0f0;height:40px;min-width:80px"></td>'
            + '</tr></table>';
        } else if(q.reponse.type === 'image') {
          const imgPrev = IMAGE_DB[q.reponse.ref];
          if(imgPrev) previewReponse += '<img src="' + imgPrev.src + '" style="max-width:100%;max-height:80px;object-fit:contain;margin:8px 0;display:block">';
        } else if(q.reponse.type === 'lignes') {
          previewReponse = Array(q.reponse.nombre || 1).fill('<div class="reponse-ligne-pleine" style="border-bottom:1px solid #999;height:28px;margin:6px 0"></div>').join('');
        } else if(q.reponse.type === 'tableau') {
          previewReponse = '<table style="border-collapse:collapse;margin:8px 0;font-size:0.8rem;">'
            + '<tr><th style="border:0.5px solid #ccc;padding:4px 8px;background:#f5f5f5"></th><th style="border:0.5px solid #ccc;padding:4px 8px;background:#f5f5f5">Document</th></tr>'
            + q.reponse.lignes.map(function(l){return '<tr><td style="border:0.5px solid #ccc;padding:4px 8px">' + l.label + '</td><td style="border:0.5px solid #ccc;padding:4px 30px"></td></tr>';}).join('')
            + '</table>';
        } else if(q.reponse.type === 'grille') {
          const {entetes=[], rangees=[]} = q.reponse;
          const TH2 = 'border:0.5px solid #ccc;padding:4px 8px;background:#f5f5f5;text-align:center;font-weight:600;font-size:0.8rem';
          const TD2 = 'border:0.5px solid #ccc;padding:4px 8px;font-size:0.8rem';
          previewReponse = '<table style="border-collapse:collapse;margin:8px 0;">';
          previewReponse += '<tr>' + entetes.map(h => `<th style="${TH2}">${h}</th>`).join('') + '</tr>';
          rangees.forEach(row => {
            previewReponse += '<tr>' + row.map((cell, ci) => `<td style="${TD2}${ci===0?';font-weight:500':';min-width:60px;height:24px'}">${cell}</td>`).join('') + '</tr>';
          });
          previewReponse += '</table>';
        } else if(q.reponse.type === 'tableau_2col') {
          const CS = 'border:1px solid #999;text-align:center;padding:6px 8px;font-size:0.8rem;width:113px';
          previewReponse = '<table style="border-collapse:collapse;margin:8px 0;">'
            + '<tr><td style="' + CS + ';font-weight:600;background:#f5f5f5">Réponse</td>'
            + '<td style="' + CS + ';height:40px"></td></tr>'
            + '</table>';
        } else if(q.reponse.type === 'avant-apres') {
          const lbl = q.reponse.label || '';
          const SB2 = 'border:1px solid #999;text-align:center;font-weight:600;padding:6px 8px;font-size:0.75rem';
          const S2  = 'border:1px solid #999;text-align:center;padding:6px 4px;font-size:0.75rem';
          const SN2 = 'border-top:1px solid #999;border-bottom:1px solid #999;border-left:none;border-right:none;text-align:center;padding:6px 4px;font-size:0.75rem';
          const circle2 = '<span style="display:inline-block;width:2cm;height:2cm;border-radius:50%;border:1.5px solid #000;vertical-align:middle"></span>';
          const mkSide2 = (bLeft) =>
            '<td style="' + (bLeft ? S2 : SN2) + ';width:11%">' + circle2 + '</td>'
            + '<td style="' + SN2 + ';width:11%">et</td>'
            + '<td style="' + (!bLeft ? S2 : SN2) + ';width:11%">' + circle2 + '</td>';
          previewReponse = '<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;margin:8px 0">'
            + '<tr><td style="' + SB2 + ';width:33%" colspan="3">Avant</td>'
            + '<td style="' + S2 + ';width:34%" rowspan="2">' + lbl + '</td>'
            + '<td style="' + SB2 + ';width:33%" colspan="3">Après</td></tr>'
            + '<tr>' + mkSide2(true) + mkSide2(false) + '</tr></table>';
        }
      }

      return '<div class="preview-question"><div class="preview-num">Question ' + (idx+1) + '</div>'
        + '<div class="preview-enonce">' + formatTexte(q.enonce) + '</div>'
        + docsHtml + previewReponse + regHtml + '</div>';
    }).join('');

    if(showComm) {
      previewHtml += '<div style="margin-top:1.5rem;padding-top:1rem">'
        + '<div style="font-weight:600;font-size:0.85rem;margin-bottom:0.5rem">Commentaires :</div>'
        + '<div style="border-bottom:1px solid #bbb;height:28px;margin-bottom:6px"></div>'.repeat(3)
        + '</div>';
    }

    body.innerHTML = previewHtml;
  }
  document.getElementById('preview-modal-label').textContent = guideMode ? 'Prévisualisation du guide' : 'Prévisualisation du cahier';
  document.getElementById('preview-modal').classList.add('open');
}

function closePreview(e) {
  if(e.target === document.getElementById('preview-modal')) closePreviewBtn();
}
function closePreviewBtn() {
  document.getElementById('preview-modal').classList.remove('open');
}

function togglePanier(id) {
  if(panier.includes(id)) {
    panier = panier.filter(x => x !== id);
  } else {
    if(panier.length >= 20) { showWarn('Maximum 20 questions dans le panier.'); return; }
    panier.push(id);
  }
  updatePanierBar();
  updateTileState(id);
  updateQModalBtn(id);
}

function refreshPanierButtons() {
  panier.forEach(id => updateTileState(id));
}

function updatePanierBar() {
  const bar = document.getElementById('panier-bar');
  const count = document.getElementById('panier-count');
  const totalPts = panier.reduce((s, id) => { const q = Q_MAP.get(id); return s+(q?q.points:0); }, 0);
  count.textContent = panier.length + ' / 20  ·  ' + totalPts + ' pt' + (totalPts !== 1 ? 's' : '');
  bar.classList.toggle('visible', panier.length > 0);
  try { localStorage.setItem('hqc_panier', JSON.stringify(panier)); } catch(e) {}
  if(document.getElementById('cahier-panel').classList.contains('open')) renderCahier();
}

function retirerPanier(id) {
  panier = panier.filter(x => x !== id);
  updateTileState(id);
  updateQModalBtn(id);
  updatePanierBar();
}

function viderPanier() {
  const ids = [...panier];
  panier = [];
  ids.forEach(id => updateTileState(id));
  const modalBtn = document.getElementById('q-modal-panier-btn');
  if(modalBtn && modalBtn.dataset.id) updateQModalBtn(modalBtn.dataset.id);
  updatePanierBar();
}

function showWarn(msg) {
  const t = document.getElementById('warn-toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// === CAHIER EN CONSTRUCTION ===
let cahierDragSrc = null;
let cahierDragLast = null;

function melangerPanier() {
  for(let i = panier.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [panier[i], panier[j]] = [panier[j], panier[i]];
  }
  updatePanierBar();
}

function openCahier() {
  renderCahier();
  document.getElementById('cahier-panel').classList.add('open');
  document.getElementById('cahier-backdrop').classList.add('open');
}

function closeCahier() {
  document.getElementById('cahier-panel').classList.remove('open');
  document.getElementById('cahier-backdrop').classList.remove('open');
}

function renderCahier() {
  const body = document.getElementById('cahier-body');
  const sub  = document.getElementById('cahier-panel-sub');
  const stats = document.getElementById('cahier-footer-stats');
  const totalPts = panier.reduce((s, id) => { const q = Q_MAP.get(id); return s+(q?q.points:0); }, 0);

  const nQ = panier.length;
  sub.textContent = nQ + ' question' + (nQ !== 1 ? 's' : '') + ' · ' + totalPts + ' pt' + (totalPts !== 1 ? 's' : '');
  stats.innerHTML = '<strong>' + nQ + '</strong> question' + (nQ !== 1 ? 's' : '')
    + ' — <strong>' + totalPts + '</strong> point' + (totalPts !== 1 ? 's' : '') + ' au total';

  if(!nQ) {
    body.innerHTML = '<div class="cahier-empty">Aucune question dans le panier.<br>Utilisez le bouton <em>+ Ajouter</em> sur les cartes.</div>';
    return;
  }

  body.innerHTML = panier.map((id, i) => {
    const q = Q_MAP.get(id);
    if(!q) return '';
    const st = oiStyle(q.oi);
    const oiShort = q.oi.length > 30 ? q.oi.slice(0,30) + '…' : q.oi;
    const rawEnonce = (q.enonce||'').replace(/\*\*(.*?)\*\*/g,'$1').replace(/[•\-] /g,'').trim();
    const preview = rawEnonce.length > 65 ? rawEnonce.slice(0,65) + '…' : rawEnonce;
    return `<div class="cahier-item" draggable="true" data-id="${id}"
      ondragstart="cahierDragStart(event)" ondragover="cahierDragOver(event)"
      ondrop="cahierDrop(event)" ondragend="cahierDragEnd(event)">
      <div class="cahier-accent" style="background:${st.color}"></div>
      <div class="cahier-handle">⋮⋮</div>
      <div class="cahier-item-body">
        <div class="cahier-item-row">
          <span class="cahier-num">Q${i+1}</span>
          <span class="cahier-badge" style="color:${st.color};background:${st.bg}" title="${q.oi}">${oiShort}</span>
          <span class="cahier-pts">${q.points} pt${q.points !== 1 ? 's' : ''}</span>
        </div>
        <div class="cahier-enonce">${preview}</div>
      </div>
      <button class="cahier-remove" onclick="retirerPanier('${id}')">×</button>
    </div>`;
  }).join('');
}

function cahierDragStart(e) {
  cahierDragSrc = e.currentTarget;
  cahierDragSrc.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
}

function cahierDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  const target = e.currentTarget;
  if(cahierDragLast && cahierDragLast !== target) cahierDragLast.classList.remove('drop-top','drop-bottom');
  cahierDragLast = target;
  if(target === cahierDragSrc) return;
  const rect = target.getBoundingClientRect();
  target.classList.add(e.clientY < rect.top + rect.height / 2 ? 'drop-top' : 'drop-bottom');
}

function cahierDrop(e) {
  e.preventDefault();
  const fromId = cahierDragSrc?.dataset.id;
  const toId   = e.currentTarget.dataset.id;
  if(!fromId || fromId === toId) return;
  const before = e.currentTarget.classList.contains('drop-top');
  const fi = panier.indexOf(fromId);
  panier.splice(fi, 1);
  const ti = panier.indexOf(toId);
  panier.splice(before ? ti : ti + 1, 0, fromId);
  updatePanierBar();
}

function cahierDragEnd() {
  if(cahierDragSrc) cahierDragSrc.classList.remove('dragging');
  if(cahierDragLast) cahierDragLast.classList.remove('drop-top','drop-bottom');
  cahierDragSrc = null;
  cahierDragLast = null;
}

// ===== RÉSOLUTION DES IMAGES (fetch → base64 + dimensions) =====
async function resolveImages(neededKeys) {
  const MAX_PX = 1200;
  const JPEG_Q = 0.78;
  const failed = [];

  const promises = neededKeys.map(async key => {
    const entry = IMAGE_DB[key];
    if (!entry || entry.src.startsWith('data:')) return;
    try {
      const resp = await fetch(entry.src);
      const blob = await resp.blob();
      const isJpeg = blob.type === 'image/jpeg' || key.match(/\.(jpg|jpeg)$/i);
      const dataUrl = await new Promise((res, rej) => {
        const img = new Image();
        const blobUrl = URL.createObjectURL(blob);
        img.onload = () => {
          URL.revokeObjectURL(blobUrl);
          const scale = Math.min(1, MAX_PX / Math.max(img.naturalWidth, img.naturalHeight));
          const w = Math.round(img.naturalWidth * scale);
          const h = Math.round(img.naturalHeight * scale);
          const canvas = document.createElement('canvas');
          canvas.width = w; canvas.height = h;
          canvas.getContext('2d').drawImage(img, 0, 0, w, h);
          res({ url: canvas.toDataURL(isJpeg ? 'image/jpeg' : 'image/png', isJpeg ? JPEG_Q : undefined), w, h });
        };
        img.onerror = () => { URL.revokeObjectURL(blobUrl); rej(); };
        img.src = blobUrl;
      });
      IMAGE_DB[key] = { src: dataUrl.url, w: dataUrl.w, h: dataUrl.h };
    } catch(e) {
      failed.push(key);
      console.warn('Impossible de charger l\'image :', key, e);
    }
  });
  await Promise.all(promises);
  return failed;
}

// ===== GÉNÉRATION DOCX (browser) =====
async function genererDocx(includeGuide=false) {
  if(panier.length === 0) return;
  const btn = includeGuide ? document.getElementById('btn-generer-guide') : document.getElementById('btn-generer');
  const btnOther = includeGuide ? document.getElementById('btn-generer') : document.getElementById('btn-generer-guide');
  if(btn) { btn.disabled = true; btn.textContent = '⏳ Génération…'; }
  if(btnOther) btnOther.disabled = true;

  try {
    if(typeof docx === 'undefined') {
      await new Promise((res, rej) => {
        const s = document.createElement('script');
        s.src = 'docx.js';
        s.onload = res;
        s.onerror = () => rej(new Error('Impossible de charger docx.js'));
        document.head.appendChild(s);
      });
    }
    const panierQuestions = panier.map(id => Q_MAP.get(id)).filter(Boolean);
    const neededKeys = new Set();
    panierQuestions.forEach(q => {
      (q.documents || []).forEach(d => {
        if(d.cols) d.cols.forEach(c => { if(c.ref && IMAGE_DB[c.ref]) neededKeys.add(c.ref); });
        if(d.ref && IMAGE_DB[d.ref]) neededKeys.add(d.ref);
      });
      if(q.reponse && q.reponse.ref && IMAGE_DB[q.reponse.ref]) neededKeys.add(q.reponse.ref);
    });
    const failedImgs = await resolveImages([...neededKeys]);
    if(failedImgs.length) showWarn('Images introuvables dans le DOCX : ' + failedImgs.join(', '));
    const {
      Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
      AlignmentType, BorderStyle, WidthType, VerticalAlign
    } = docx;

    const BORDER = { style: BorderStyle.SINGLE, size: 4, color: '000000' };
    const BORDERS = { top: BORDER, bottom: BORDER, left: BORDER, right: BORDER };
    const CELL_MARGINS = { top: 60, bottom: 60, left: 80, right: 80 };
    const PAGE_W = 9360; // 6.5 inches content width in DXA
    const COL_2CM = 1134; // 2 cm in DXA

    function b64ToBytes(src) {
      const b64 = src.split(',')[1];
      if(!b64) return null;
      const bStr = atob(b64);
      const bytes = new Uint8Array(bStr.length);
      for(let i = 0; i < bStr.length; i++) bytes[i] = bStr.charCodeAt(i);
      return bytes;
    }

    function imgWithBorder(bytes, imgType, w, h) {
      return new Paragraph({
        alignment: AlignmentType.LEFT,
        children: [new docx.ImageRun({ data: bytes, type: imgType, transformation: { width: w, height: h } })]
      });
    }

    function cellText(text, bold=false) {
      return new TableCell({
        borders: BORDERS,
        margins: CELL_MARGINS,
        verticalAlign: VerticalAlign.CENTER,
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text, font: 'Aptos', size: 12, bold })]
        })]
      });
    }

    function buildReglette(id) {
      const r = REGLETTES[id];
      if(!r) return [];

      if(r.variante === '3 éléments — 2 liens') {
        const col1 = Math.floor(PAGE_W * 0.22);
        const col2 = Math.floor(PAGE_W * 0.26);
        const col3 = Math.floor(PAGE_W * 0.35);
        const col4 = PAGE_W - col1 - col2 - col3;

        const BN={style:BorderStyle.NONE,size:0,color:'FFFFFF'};
        const BC2={top:BORDER,bottom:BORDER,left:BORDER,right:BN};
        const BC3={top:BORDER,bottom:BORDER,left:BN,right:BN};
        const BC4={top:BORDER,bottom:BORDER,left:BN,right:BORDER};
        const mkCell = (text, bold=false, rowSpan=1, colSpan=1, w=0, b=BORDERS) => new TableCell({
          borders: b, margins: CELL_MARGINS, verticalAlign: VerticalAlign.CENTER,
          rowSpan: rowSpan > 1 ? rowSpan : undefined,
          columnSpan: colSpan > 1 ? colSpan : undefined,
          width: w ? {size:w, type:WidthType.DXA} : undefined,
          children: [new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [new TextRun({ text, font: 'Aptos', size: 12, bold })]
          })]
        });

        return [new Table({
          width: { size: 0, type: WidthType.AUTO },
          rows: [
            new TableRow({ children: [mkCell(r.oi, true, 6, 1, col1), mkCell("L'élève précise les trois éléments", false, 3, 1, col2, BC2), mkCell("et établit correctement deux liens de causalité.", false, 1, 1, col3, BC3), mkCell("3 points", false, 1, 1, col4, BC4)] }),
            new TableRow({ children: [mkCell("et établit correctement un lien de causalité.", false, 1, 1, col3, BC3), mkCell("2 points", false, 1, 1, col4, BC4)] }),
            new TableRow({ children: [mkCell("mais n'établit correctement aucun lien de causalité.", false, 1, 1, col3, BC3), mkCell("1 point", false, 1, 1, col4, BC4)] }),
            new TableRow({ children: [mkCell("L'élève précise deux éléments", false, 2, 1, col2, BC2), mkCell("et établit correctement un lien de causalité.", false, 1, 1, col3, BC3), mkCell("2 points", false, 1, 1, col4, BC4)] }),
            new TableRow({ children: [mkCell("mais n'établit correctement aucun lien de causalité.", false, 1, 1, col3, BC3), mkCell("1 point", false, 1, 1, col4, BC4)] }),
            new TableRow({ children: [mkCell("L'élève précise un seul élément ou n'en précise pas.", false, 1, 2, col2+col3, BC2), mkCell("0 point", false, 1, 1, col4, BC4)] }),
          ]
        })];
      }

      if(r.variante === 'acteur-positions') {
        const c1=Math.floor(PAGE_W*0.22), c2=Math.floor(PAGE_W*0.43), c3=Math.floor(PAGE_W*0.22), c4=PAGE_W-c1-c2-c3;
        const BN={style:BorderStyle.NONE,size:0,color:'FFFFFF'};
        const BC2={top:BORDER,bottom:BORDER,left:BORDER,right:BN};
        const BC3={top:BORDER,bottom:BORDER,left:BN,right:BN};
        const BC4={top:BORDER,bottom:BORDER,left:BN,right:BORDER};
        const mk=(t,bold=false,rs=1,cs=1,w=0,b=BORDERS)=>new TableCell({borders:b,margins:CELL_MARGINS,verticalAlign:VerticalAlign.CENTER,rowSpan:rs>1?rs:undefined,columnSpan:cs>1?cs:undefined,width:w?{size:w,type:WidthType.DXA}:undefined,children:[new Paragraph({alignment:AlignmentType.CENTER,children:[new TextRun({text:t,font:'Aptos',size:12,bold})]})]});
        return [new Table({width:{size:0,type:WidthType.AUTO},rows:[
          new TableRow({children:[mk(r.oi,true,5,1,c1),mk("L'élève nomme correctement l'acteur qui présente une position différente",false,4,1,c2,BC2),mk("et présente correctement les deux positions.",false,1,1,c3,BC3),mk("3 points",false,1,1,c4,BC4)]}),
          new TableRow({children:[mk("et présente correctement une position et plus ou moins correctement l'autre position.",false,1,1,c3,BC3),mk("2 points",false,1,1,c4,BC4)]}),
          new TableRow({children:[mk("et présente plus ou moins correctement les deux positions, ou présente correctement une position et incorrectement l'autre ou ne la présente pas.",false,1,1,c3,BC3),mk("1 point",false,1,1,c4,BC4)]}),
          new TableRow({children:[mk("et présente tout au plus une seule position plus ou moins correctement.",false,1,1,c3,BC3),mk("0 point",false,1,1,c4,BC4)]}),
          new TableRow({children:[mk("L'élève nomme incorrectement l'acteur qui présente une position différente ou ne le nomme pas.",false,1,2,c2+c3,BC2),mk("0 point",false,1,1,c4,BC4)]}),
        ]})];
      }

      if(r.variante === 'changement-continuité') {
        const c1=Math.floor(PAGE_W*0.22), c2=Math.floor(PAGE_W*0.37), c3=Math.floor(PAGE_W*0.21), c4=PAGE_W-c1-c2-c3;
        const BN={style:BorderStyle.NONE,size:0,color:'FFFFFF'};
        const BC2={top:BORDER,bottom:BORDER,left:BORDER,right:BN};
        const BC3={top:BORDER,bottom:BORDER,left:BN,right:BN};
        const BC4={top:BORDER,bottom:BORDER,left:BN,right:BORDER};
        const mk=(t,bold=false,rs=1,cs=1,w=0,b=BORDERS)=>new TableCell({borders:b,margins:CELL_MARGINS,verticalAlign:VerticalAlign.CENTER,rowSpan:rs>1?rs:undefined,columnSpan:cs>1?cs:undefined,width:w?{size:w,type:WidthType.DXA}:undefined,children:[new Paragraph({alignment:AlignmentType.CENTER,children:[new TextRun({text:t,font:'Aptos',size:12,bold})]})]});
        return [new Table({width:{size:0,type:WidthType.AUTO},rows:[
          new TableRow({children:[mk(r.oi,true,6,1,c1),mk("L'élève indique s'il y a changement ou continuité",false,3,1,c2,BC2),mk("et présente des faits qui le montrent correctement.",false,1,1,c3,BC3),mk("3 points (ou 2 points)",false,1,1,c4,BC4)]}),
          new TableRow({children:[mk("et présente des faits qui le montrent plus ou moins correctement.",false,1,1,c3,BC3),mk("2 points (ou 1 point)",false,1,1,c4,BC4)]}),
          new TableRow({children:[mk("et présente des faits qui le montrent incorrectement ou n'en présente pas.",false,1,1,c3,BC3),mk("0 point",false,1,1,c4,BC4)]}),
          new TableRow({children:[mk("L'élève n'indique pas s'il y a changement ou continuité",false,3,1,c2,BC2),mk("mais présente des faits exacts.",false,1,1,c3,BC3),mk("2 points (ou 1 point)",false,1,1,c4,BC4)]}),
          new TableRow({children:[mk("mais présente des faits plus ou moins exacts.",false,1,1,c3,BC3),mk("1 point (ou 0 point)",false,1,1,c4,BC4)]}),
          new TableRow({children:[mk("et présente des faits inexacts ou n'en présente pas.",false,1,1,c3,BC3),mk("0 point",false,1,1,c4,BC4)]}),
        ]})];
      }

      // Standard layout
      if(!r.niveaux.length) return [];
      const colOI = Math.floor(PAGE_W * 0.22);
      const colW  = Math.floor((PAGE_W - colOI) / r.niveaux.length);
      const colLast = PAGE_W - colOI - colW * (r.niveaux.length - 1);
      const cols = [colOI, ...r.niveaux.map((_, i) => i === r.niveaux.length - 1 ? colLast : colW)];

      return [new Table({
        width: { size: PAGE_W, type: WidthType.DXA },
        columnWidths: cols,
        rows: [
          new TableRow({ children: [
            new TableCell({ borders: BORDERS, margins: CELL_MARGINS, verticalAlign: VerticalAlign.CENTER, rowSpan: 2,
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: r.oi, font: 'Aptos', size: 12, bold: true })] })] }),
            ...r.colonnes.map(c => cellText(c))
          ]}),
          new TableRow({ children: r.niveaux.map(n => cellText(n.desc)) })
        ]
      })];
    }

    function parseEnonce(enonce) {
      return enonce.split('\n').map(line => {
        return new Paragraph({ children: mkRuns(line, 'Aptos', 24) });
      });
    }
    function mkRuns(line, font, size) {
      const parts = line.split(/(\*\*.*?\*\*)/);
      return parts.filter(p=>p).map(p => {
        const bold = p.startsWith('**') && p.endsWith('**');
        return new TextRun({ text: bold ? p.slice(2,-2) : p, font, size, bold });
      });
    }
    function mkLine(line, font, size) {
      if(line.startsWith('• ') || line.startsWith('- ')) {
        return new Paragraph({ indent:{ left:200 }, children:[new TextRun({text:'• ',font,size}), ...mkRuns(line.slice(2),font,size)] });
      }
      return new Paragraph({ children: mkRuns(line, font, size) });
    }

    const children = [];

    // Exam header (cahier only)
    if(!includeGuide) {
      const examNom    = (document.getElementById('exam-nom')?.value || '').trim();
      const showEleve  = !!document.getElementById('exam-eleve')?.checked;
      const showGroupe = !!document.getElementById('exam-groupe')?.checked;
      const showDate   = !!document.getElementById('exam-date')?.checked;
      const showScore  = !!document.getElementById('exam-score')?.checked;
      const showComm   = !!document.getElementById('exam-commentaires')?.checked;
      const totalDocxPts = panierQuestions.reduce((s,q)=>s+(q.points||0), 0);
      const hasHeader = examNom || showEleve || showGroupe || showDate || showScore;

      if(hasHeader) {
        if(examNom) {
          children.push(new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [new TextRun({ text: examNom, font:'Aptos', size:36, bold:true })]
          }));
        }
        // Thick black rule under title
        children.push(new Paragraph({
          border: { bottom: { style: BorderStyle.SINGLE, size: 24, color: '000000' } },
          spacing: { before: 80, after: 80 },
          children: [new TextRun({ text: '' })]
        }));
        // 2-col fields row (Élève | Groupe, Date | Résultat)
        const BN_H = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
        const HW = Math.floor(PAGE_W / 2);
        const mkHCell = (txt, align) => new TableCell({
          width: { size: HW, type: WidthType.DXA },
          borders: { top: BN_H, bottom: BN_H, left: BN_H, right: BN_H },
          margins: { top: 60, bottom: 60, left: 0, right: 0 },
          children: [new Paragraph({
            alignment: align || AlignmentType.LEFT,
            children: [new TextRun({ text: txt, font:'Aptos', size:20 })]
          })]
        });
        const fieldRows = [];
        const r1L = showEleve  ? 'Élève : _________________________' : '';
        const r1R = showGroupe ? 'Groupe : ________________________' : '';
        const r2L = showDate   ? 'Date : __________________________' : '';
        const r2R = showScore  ? `_____ / ${totalDocxPts} pts` : '';
        if(r1L || r1R) fieldRows.push(new TableRow({ children: [mkHCell(r1L), mkHCell(r1R, AlignmentType.LEFT)] }));
        if(r2L || r2R) fieldRows.push(new TableRow({ children: [mkHCell(r2L), mkHCell(r2R, AlignmentType.RIGHT)] }));
        if(fieldRows.length) {
          children.push(new Table({
            width: { size: PAGE_W, type: WidthType.DXA },
            columnWidths: [HW, HW],
            borders: { top: BN_H, bottom: BN_H, left: BN_H, right: BN_H, insideH: BN_H, insideV: BN_H },
            rows: fieldRows
          }));
        }
        children.push(new Paragraph({ children: [new TextRun({ text:'' })] }));
        children.push(new Paragraph({ children: [new TextRun({ text:'' })] }));
      }
    }

    if(includeGuide) {
      // Guide — numéros + réponses seulement
      children.push(new Paragraph({
        children: [new TextRun({ text: 'Guide de correction', font: 'Aptos', size: 28, bold: true })]
      }));
      children.push(new Paragraph({ children: [new TextRun({ text: '' })] }));
      panier.forEach((id, idx) => {
        const q = Q_MAP.get(id);
        if(!q || !q.guide) return;
        children.push(new Paragraph({ children: [new TextRun({ text: (idx+1) + '.', font: 'Aptos', size: 20, bold: true })] }));
        if(typeof q.guide === 'string') {
          children.push(new Paragraph({ children: [new TextRun({ text: q.guide, font: 'Aptos', size: 20 })] }));
        } else if(q.guide.type === 'grille' || q.guide.type === 'tableau') {
          const mkGCell = (text, bold) => new TableCell({
            borders: BORDERS, margins: CELL_MARGINS, verticalAlign: VerticalAlign.CENTER,
            children: [new Paragraph({ children: [new TextRun({ text: String(text||''), font:'Aptos', size:20, bold:!!bold })] })]
          });
          let headers, rows;
          if(q.guide.type === 'grille') {
            headers = q.guide.entetes || [];
            rows    = q.guide.rangees || [];
          } else {
            headers = ['', 'Document'];
            rows    = (q.guide.lignes||[]).map(l=>[l.label, l.valeur]);
          }
          const nCols   = headers.length || 2;
          const colW    = Math.floor(PAGE_W / nCols);
          const colWidths = Array(nCols).fill(colW);
          const guideRows = [
            new TableRow({ children: headers.map(h => mkGCell(h, true)) }),
            ...rows.map(row => new TableRow({ children: row.map((cell,ci) => mkGCell(cell, ci===0)) }))
          ];
          children.push(new Table({ width:{ size:PAGE_W, type:WidthType.DXA }, columnWidths:colWidths, rows:guideRows }));
        }
        children.push(new Paragraph({ children: [new TextRun({ text: '' })] }));
      });
    } else {

    panier.forEach((id, idx) => {
      const q = Q_MAP.get(id);

      // Énoncé avec numéro
      const qNum = idx + 1;
      const firstLine = (q.enonce||'').split('\n')[0];
      const otherLines = (q.enonce||'').split('\n').slice(1);
      children.push(new Paragraph({
        children: [new TextRun({ text: qNum + '.  ', font: 'Aptos', size: 24 }), ...mkRuns(firstLine, 'Aptos', 24)]
      }));
      otherLines.forEach(line => { if(line.trim()) children.push(mkLine(line, 'Aptos', 24)); });
      children.push(new Paragraph({ children: [new TextRun({ text: '' })] }));

      // Documents
      if(q.documents && q.documents.length) {
        for(let di=0; di<q.documents.length; di++) {
          const d = q.documents[di];
          if(d.type === 'tableau') {
            const colW = Math.floor(PAGE_W / d.cols.length);
            const tableCells = d.cols.map(col => {
              const imgData = IMAGE_DB[col.ref];
              const cellChildren = [];
              if(col.titreDocx && col.titre) cellChildren.push(new Paragraph({ alignment: AlignmentType.LEFT, children: [new TextRun({ text: col.titre, font: 'Aptos', size: 20 })] }));
              if(imgData && imgData.src) {
                const bytes = b64ToBytes(imgData.src);
                if(bytes) {
                  const ext = col.ref.split('.').pop().toLowerCase();
                  const imgType = (ext === 'jpg' || ext === 'jpeg') ? 'jpg' : 'png';
                  const docW = Math.min(200, imgData.w);
                  const docH = Math.round(docW / (imgData.w / imgData.h));
                  cellChildren.push(imgWithBorder(bytes, imgType, docW, docH));
                }
              }
              return new docx.TableCell({
                width: { size: colW, type: docx.WidthType.DXA },
                verticalAlign: VerticalAlign.CENTER,
                borders: BORDERS,
                margins: CELL_MARGINS,
                children: cellChildren
              });
            });
            children.push(new docx.Table({ width:{size:PAGE_W,type:docx.WidthType.DXA}, columnWidths:d.cols.map(()=>colW), rows:[new docx.TableRow({children:tableCells})] }));
          } else if(d.type === 'textes') {
            const colW2 = Math.floor(PAGE_W / d.cols.length);
            const textCells = d.cols.map(col => {
              const cellChildren = [];
              cellChildren.push(new Paragraph({ children: [new TextRun({ text: col.titre || '', font: 'Aptos', size: 20, bold: true })] }));
              if(col.texte) {
                col.texte.split('\n').forEach(line => { cellChildren.push(mkLine(line, 'Aptos', 20)); });
              }
              if(col.ref) {
                const imgData = IMAGE_DB[col.ref];
                if(imgData && imgData.src) {
                  const bytes = b64ToBytes(imgData.src);
                  if(bytes) {
                    const ext = col.ref.split('.').pop().toLowerCase();
                    const imgType = (ext === 'jpg' || ext === 'jpeg') ? 'jpg' : 'png';
                    const docW = Math.min(180, imgData.w);
                    const docH = Math.round(docW / (imgData.w / imgData.h));
                    cellChildren.push(imgWithBorder(bytes, imgType, docW, docH));
                  }
                }
              }
              if(col.auteur) {
                cellChildren.push(new Paragraph({ children: [new TextRun({ text: col.auteur, font: 'Aptos', size: 16, italics: true })] }));
              }
              if(col.source) {
                col.source.split('\n').forEach(line => {
                  cellChildren.push(new Paragraph({ children: [new TextRun({ text: line, font: 'Aptos', size: 12, italics: true })] }));
                });
              }
              return new docx.TableCell({
                width: { size: colW2, type: docx.WidthType.DXA },
                verticalAlign: VerticalAlign.TOP,
                borders: BORDERS,
                margins: CELL_MARGINS,
                children: cellChildren
              });
            });
            children.push(new docx.Table({ width:{size:PAGE_W,type:docx.WidthType.DXA}, columnWidths:d.cols.map(()=>colW2), rows:[new docx.TableRow({children:textCells})] }));
          } else {
            children.push(new Paragraph({ children: [new TextRun({ text: '• ' + d.type + ' — ' + (d.ref||''), font: 'Aptos', size: 22 })] }));
          }
          // One empty paragraph between documents
          if(di < q.documents.length - 1) {
            children.push(new Paragraph({ children: [new TextRun({ text: '' })] }));
          }
        }
      }

      children.push(new Paragraph({ children: [new TextRun({ text: '' })] }));
      children.push(new Paragraph({ children: [new TextRun({ text: '' })] }));

      // Réponse
      if(q.reponse) {
        if(q.reponse === true) {
          children.push(new Paragraph({ children: [new TextRun({ text: '__________', font: 'Aptos', size: 22 })] }));
        } else if(q.reponse.type === 'image') {
          const imgData2 = IMAGE_DB[q.reponse.ref];
          if(imgData2 && imgData2.src) {
            const bytes_2 = b64ToBytes(imgData2.src);
            if(bytes_2) {
              const ext_2 = q.reponse.ref.split('.').pop().toLowerCase();
              const imgType_2 = (ext_2 === 'jpg' || ext_2 === 'jpeg') ? 'jpg' : 'png';
              const docW_2 = Math.min(400, imgData2.w);
              const docH_2 = Math.round(docW_2 / (imgData2.w / imgData2.h));
              children.push(imgWithBorder(bytes_2, imgType_2, docW_2, docH_2));
            }
          }
        } else if(q.reponse.type === 'tableau_3col') {
          const {col1='', col2='', col3=''} = q.reponse;
          const col2W = PAGE_W - COL_2CM * 2;
          const mkHdr3 = (w) => (t) => new TableCell({ borders:BORDERS, margins:CELL_MARGINS, verticalAlign:VerticalAlign.CENTER,
            width:{size:w, type:WidthType.DXA},
            children:[new Paragraph({alignment:AlignmentType.CENTER,children:[new TextRun({text:t,font:'Aptos',size:20,bold:true})]})] });
          const mkBlank3 = (w) => new TableCell({ borders:BORDERS, margins:CELL_MARGINS,
            width:{size:w, type:WidthType.DXA},
            children:[new Paragraph({children:[new TextRun({text:' '})]})] });
          children.push(new Table({ width:{size:PAGE_W, type:WidthType.DXA}, columnWidths:[COL_2CM, col2W, COL_2CM], rows:[
            new TableRow({ height:{value:284,rule:'atLeast'}, children:[
              mkHdr3(COL_2CM)(col1),
              new TableCell({ borders:BORDERS, margins:CELL_MARGINS, verticalAlign:VerticalAlign.CENTER, rowSpan:2,
                width:{size:col2W, type:WidthType.DXA},
                children:[new Paragraph({alignment:AlignmentType.CENTER,children:[new TextRun({text:col2,font:'Aptos',size:20,bold:true})]})] }),
              mkHdr3(COL_2CM)(col3)
            ]}),
            new TableRow({ height:{value:284,rule:'atLeast'}, children:[mkBlank3(COL_2CM), mkBlank3(COL_2CM)] })
          ]}));
        } else if(q.reponse.type === 'lignes') {
          const BN_L = { style: docx.BorderStyle.NONE, size: 0, color: 'FFFFFF' };
          const BB_L = { style: docx.BorderStyle.SINGLE, size: 6, color: '000000' };
          const MP_L = { spacing:{before:0,after:0}, children:[new TextRun({text:' '})] };
          const MC_L = { top:0, bottom:0, left:0, right:0 };
          const nb = q.reponse.nombre;
          const mkRow = (first) => new docx.TableRow({
            height:{value:500,rule:'exact'},
            children:[new docx.TableCell({
              borders:{top:(first && nb>1)?BB_L:BN_L, bottom:BB_L, left:BN_L, right:BN_L},
              margins:MC_L,
              children:[new Paragraph(MP_L)]
            })]
          });
          const ligneRows = [];
          for(let i=0; i<nb; i++) ligneRows.push(mkRow(i===0));
          if(ligneRows.length === 0) ligneRows.push(mkRow(true));
          children.push(new docx.Table({
            width:{size:PAGE_W,type:docx.WidthType.DXA},
            columnWidths:[PAGE_W],
            borders:{top:BN_L,bottom:BN_L,left:BN_L,right:BN_L,insideH:BN_L,insideV:BN_L},
            rows:ligneRows
          }));
          children.push(new Paragraph({ children:[new TextRun({text:''})] }));
        } else if(q.reponse.type === 'tableau') {
          const repRows = [
            new TableRow({ children: [
              new TableCell({ borders: BORDERS, margins: CELL_MARGINS, verticalAlign: VerticalAlign.CENTER,
                children: [new Paragraph({ children: [new TextRun({ text: '', font: 'Aptos', size: 20, bold: true })] })] }),
              new TableCell({ borders: BORDERS, margins: CELL_MARGINS, verticalAlign: VerticalAlign.CENTER,
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Document', font: 'Aptos', size: 20, bold: true })] })] })
            ]})
          ];
          q.reponse.lignes.forEach(l => {
            repRows.push(new TableRow({ children: [
              new TableCell({ borders: BORDERS, margins: CELL_MARGINS, verticalAlign: VerticalAlign.CENTER,
                children: [new Paragraph({ children: [new TextRun({ text: l.label, font: 'Aptos', size: 20 })] })] }),
              new TableCell({ borders: BORDERS, margins: CELL_MARGINS, verticalAlign: VerticalAlign.CENTER,
                children: [new Paragraph({ children: [new TextRun({ text: '', font: 'Aptos', size: 20 })] })] })
            ]}));
          });
          children.push(new Table({ width: { size: 0, type: WidthType.AUTO }, rows: repRows }));
        } else if(q.reponse.type === 'grille') {
          const {entetes=[], rangees=[]} = q.reponse;
          const nCols = entetes.length || 2;
          const gColW = Math.floor(PAGE_W / nCols);
          const mkGCell = (text, bold) => new TableCell({
            borders: BORDERS, margins: CELL_MARGINS, verticalAlign: VerticalAlign.CENTER,
            children: [new Paragraph({ children: [new TextRun({ text: String(text||''), font:'Aptos', size:20, bold:!!bold })] })]
          });
          const gRows = [
            new TableRow({ children: entetes.map(h => mkGCell(h, true)) }),
            ...rangees.map(row => new TableRow({ children: row.map((cell, ci) => mkGCell(cell, ci===0)) }))
          ];
          children.push(new Table({ width:{size:PAGE_W, type:WidthType.DXA}, columnWidths:Array(nCols).fill(gColW), rows:gRows }));
        } else if(q.reponse.type === 'tableau_2col') {
          const c2 = 1701; // 3 cm in DXA
          const mk2 = (t, bold=false) => new TableCell({ borders: BORDERS, margins: CELL_MARGINS, verticalAlign: VerticalAlign.CENTER,
            width: { size: c2, type: WidthType.DXA },
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: t, font: 'Aptos', size: 20, bold })] })] });
          children.push(new Table({ width: { size: c2 * 2, type: WidthType.DXA }, columnWidths: [c2, c2], rows: [
            new TableRow({ children: [mk2('Réponse', true), mk2('')] })
          ]}));
        } else if(q.reponse.type === 'avant-apres') {
          const cSide = Math.floor(PAGE_W / 3);
          const cMid  = PAGE_W - cSide * 2;
          const etW   = 700;
          const circW = Math.floor((cSide - etW) / 2);
          const circLast = cSide - etW - circW;
          const CIRC_SIZE_AA = 114; // 57pt ≈ 2cm
          const BN_AA = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
          const mkHdrAA = (text, cs, w) => new TableCell({
            borders: BORDERS, margins: CELL_MARGINS, verticalAlign: VerticalAlign.CENTER,
            columnSpan: cs,
            width: { size: w, type: WidthType.DXA },
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text, font: 'Aptos', size: 20, bold: true })] })]
          });
          const mkMidAA = (text) => new TableCell({
            borders: BORDERS, margins: CELL_MARGINS, verticalAlign: VerticalAlign.CENTER,
            rowSpan: 2, width: { size: cMid, type: WidthType.DXA },
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text, font: 'Aptos', size: 20 })] })]
          });
          const mkCircAA = (text, w, bl, br) => new TableCell({
            borders: { top: BORDER, bottom: BORDER, left: bl, right: br },
            margins: CELL_MARGINS, verticalAlign: VerticalAlign.CENTER,
            width: { size: w, type: WidthType.DXA },
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [
              new TextRun({ text, font: text === 'et' ? 'Aptos' : 'Arial', size: text === 'et' ? 20 : CIRC_SIZE_AA })
            ]})]
          });
          children.push(new Table({ width: { size: PAGE_W, type: WidthType.DXA },
            columnWidths: [circW, etW, circLast, cMid, circW, etW, circLast],
            rows: [
              new TableRow({ children: [
                mkHdrAA('Avant', 3, cSide),
                mkMidAA(q.reponse.label || ''),
                mkHdrAA('Après', 3, cSide),
              ]}),
              new TableRow({ children: [
                mkCircAA('○',  circW,    BORDER, BN_AA),
                mkCircAA('et', etW,      BN_AA,  BN_AA),
                mkCircAA('○',  circLast, BN_AA,  BORDER),
                mkCircAA('○',  circW,    BORDER, BN_AA),
                mkCircAA('et', etW,      BN_AA,  BN_AA),
                mkCircAA('○',  circLast, BN_AA,  BORDER),
              ]}),
            ]
          }));
        }
        children.push(new Paragraph({ children: [new TextRun({ text: '' })] }));
      }

      // Réglette
      buildReglette(id).forEach(t => children.push(t));

      children.push(new Paragraph({ children: [new TextRun({ text: '' })] }));
    });

    // Commentaires à la fin du cahier
    if(!includeGuide && !!document.getElementById('exam-commentaires')?.checked) {
      children.push(new Paragraph({ children: [new TextRun({ text:'' })] }));
      children.push(new Paragraph({ children: [new TextRun({ text: 'Commentaires :', font:'Aptos', size:20, bold:true })] }));
      const BN = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
      const BL = { style: BorderStyle.SINGLE, size: 4, color: 'AAAAAA' };
      const mkCommRow = () => new TableRow({ children: [new TableCell({
        width: { size: PAGE_W, type: WidthType.DXA },
        borders: { top: BN, bottom: BL, left: BN, right: BN },
        margins: { top: 180, bottom: 0, left: 0, right: 0 },
        children: [new Paragraph({ children: [new TextRun({ text: '', font:'Aptos', size:22 })] })]
      })] });
      children.push(new Table({
        width: { size: PAGE_W, type: WidthType.DXA },
        columnWidths: [PAGE_W],
        rows: [mkCommRow(), mkCommRow(), mkCommRow()]
      }));
    }

    } // end else (cahier mode)

    const doc = new Document({
      sections: [{
        properties: {
          page: {
            size: { width: 12240, height: 15840 },
            margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
          }
        },
        children
      }]
    });

    const buffer = await Packer.toBlob(doc);
    const url = URL.createObjectURL(buffer);
    const a = document.createElement('a');
    a.href = url;
    a.download = includeGuide ? 'cahier_HQC_guide.docx' : 'cahier_HQC.docx';
    a.click();
    URL.revokeObjectURL(url);

    if(btn) flashBtn(btn, '✓ Téléchargé !');
    setTimeout(() => {
      if(btn) { btn.textContent = includeGuide ? '⬇ Guide' : '⬇ Cahier'; btn.disabled = false; }
      if(btnOther) btnOther.disabled = false;
    }, 2500);
  } catch(e) {
    console.error(e);
    showWarn('Erreur : ' + e.message);
    if(btn) { btn.textContent = includeGuide ? '⬇ Guide' : '⬇ Cahier'; btn.disabled = false; }
    if(btnOther) btnOther.disabled = false;
  }
}
