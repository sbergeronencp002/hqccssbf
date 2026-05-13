
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
  "Situer dans l'espace":                       {cls:"b-oi-sit", color:"var(--c-sit)", bg:"var(--c-sit-bg)"},
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

function populateFilters() {
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
  const periode = document.getElementById('f-periode').value;
  const filteredAspects = periode ? aspects.filter(a => a.periode === periode) : aspects;
  fillAspect('f-aspect', filteredAspects, periodeOrder);
  document.getElementById('f-aspect').value = '';
  applyFilters();
}

function applyFilters() {
  const oi      = document.getElementById('f-oi').value;
  const aspect  = document.getElementById('f-aspect').value;
  const periode = document.getElementById('f-periode').value;
  const niveau  = document.getElementById('f-niveau').value;

  // Rebuild OI filter based on current period+aspect selection
  const relevantQ = QUESTIONS.filter(q => {
    if(niveau  && String(q.niveau) !== niveau) return false;
    if(periode && q.periode !== periode) return false;
    if(aspect && !q.aspects.some(a=>a.aspect===aspect)) return false;
    return true;
  });
  const relevantOis = [...new Set(relevantQ.map(q=>q.oi))].sort((a,b)=>a.localeCompare(b,'fr'));
  const currentOi  = document.getElementById('f-oi').value;
  fillOi('f-oi', relevantOis, "Toutes");
  if(relevantOis.includes(currentOi)) document.getElementById('f-oi').value = currentOi;

  const filtered = QUESTIONS.filter(q=>{
    if(niveau  && String(q.niveau) !== niveau) return false;
    if(oi      && q.oi !== oi) return false;
    if(aspect  && !q.aspects.some(a=>a.aspect===aspect)) return false;
    if(periode && q.periode !== periode) return false;
    return true;
  });

  document.getElementById('stat-num').textContent = filtered.length;
  document.getElementById('results-label').textContent =
    filtered.length === QUESTIONS.length
      ? `Toutes les questions (${filtered.length})`
      : `${filtered.length} question${filtered.length!==1?'s':''} trouvée${filtered.length!==1?'s':''}`;

  render(filtered);
}

function resetFilters() {
  ['f-niveau','f-periode','f-aspect','f-oi'].forEach(id=>{
    document.getElementById(id).value='';
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
    return `<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%">
      <tr>
        <td style="${SB};width:22%" rowspan="6">${r.oi}</td>
        <td style="${S};width:26%" rowspan="3">L'élève précise les trois éléments</td>
        <td style="${S};width:35%">et établit correctement deux liens de causalité.</td>
        <td style="${S};width:17%">3 points</td>
      </tr>
      <tr>
        <td style="${S}">et établit correctement un lien de causalité.</td>
        <td style="${S}">2 points</td>
      </tr>
      <tr>
        <td style="${S}">mais n'établit correctement aucun lien de causalité.</td>
        <td style="${S}">1 point</td>
      </tr>
      <tr>
        <td style="${S}" rowspan="2">L'élève précise deux éléments</td>
        <td style="${S}">et établit correctement un lien de causalité.</td>
        <td style="${S}">2 points</td>
      </tr>
      <tr>
        <td style="${S}">mais n'établit correctement aucun lien de causalité.</td>
        <td style="${S}">1 point</td>
      </tr>
      <tr>
        <td style="${S}" colspan="2">L'élève précise un seul élément ou n'en précise pas.</td>
        <td style="${S}">0 point</td>
      </tr>
    </table>`;
  }

  if(r.variante === 'acteur-positions') {
    return `<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%">
      <tr>
        <td style="${SB};width:22%" rowspan="5">${r.oi}</td>
        <td style="${S};width:43%" rowspan="4">L'élève nomme correctement l'acteur qui présente une position différente</td>
        <td style="${S}">et présente correctement les deux positions.</td>
        <td style="${S};width:17%">3 points</td>
      </tr>
      <tr>
        <td style="${S}">et présente correctement une position et plus ou moins correctement l'autre position.</td>
        <td style="${S}">2 points</td>
      </tr>
      <tr>
        <td style="${S}">et présente plus ou moins correctement les deux positions, ou présente correctement une position et incorrectement l'autre ou ne la présente pas.</td>
        <td style="${S}">1 point</td>
      </tr>
      <tr>
        <td style="${S}">et présente tout au plus une seule position plus ou moins correctement.</td>
        <td style="${S}">0 point</td>
      </tr>
      <tr>
        <td style="${S}" colspan="2">L'élève nomme incorrectement l'acteur qui présente une position différente ou ne le nomme pas.</td>
        <td style="${S}">0 point</td>
      </tr>
    </table>`;
  }

  if(r.variante === 'changement-continuité') {
    return `<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%">
      <tr>
        <td style="${SB};width:22%" rowspan="6">${r.oi}</td>
        <td style="${S};width:37%" rowspan="3">L'élève indique s'il y a changement ou continuité</td>
        <td style="${S}">et présente des faits qui le montrent correctement.</td>
        <td style="${S};width:20%">3 points (ou 2 points)</td>
      </tr>
      <tr>
        <td style="${S}">et présente des faits qui le montrent plus ou moins correctement.</td>
        <td style="${S}">2 points (ou 1 point)</td>
      </tr>
      <tr>
        <td style="${S}">et présente des faits qui le montrent incorrectement ou n'en présente pas.</td>
        <td style="${S}">0 point</td>
      </tr>
      <tr>
        <td style="${S}" rowspan="3">L'élève n'indique pas s'il y a changement ou continuité</td>
        <td style="${S}">mais présente des faits exacts.</td>
        <td style="${S}">2 points (ou 1 point)</td>
      </tr>
      <tr>
        <td style="${S}">mais présente des faits plus ou moins exacts.</td>
        <td style="${S}">1 point (ou 0 point)</td>
      </tr>
      <tr>
        <td style="${S}">et présente des faits inexacts ou n'en présente pas.</td>
        <td style="${S}">0 point</td>
      </tr>
    </table>`;
  }

  // Standard layout — header row (points) + description row
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

function buildCopyHTML(q) {
  return buildReglettHTML(q);
}

function buildCopyText(q) {
  let t = `${q.id} — ${q.oi}\n`;
  t += `Période : ${q.periode}\n\n`;
  t += `QUESTION\n${q.enonce}\n\n`;
  if(q.documents.length) {
    t += `DOCUMENTS\n`;
    q.documents.forEach(d=>{
      if(d.cols) d.cols.forEach(c=>{ t+=`• ${c.titre||''}${c.ref?' ['+c.ref+']':''}${c.source?'\n  '+c.source:''}\n`; });
      else t+=`• ${d.type}\n`;
    });
    t+='\n';
  }
  return t;
}

function toggleCard(id) {
  const card = document.getElementById('card-'+id);
  card.classList.toggle('open');
}

function copyQ(id, btn) {
  const q = QUESTIONS.find(x=>x.id===id);
  if(!q) return;
  const text = buildCopyText(q);

  // Modern clipboard API
  if(navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(()=>{ flashCopied(btn); }).catch(()=>{ fallbackCopy(text, btn); });
  } else {
    fallbackCopy(text, btn);
  }
}

function fallbackCopy(text, btn) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;pointer-events:none';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand('copy');
    flashCopied(btn);
  } catch(e) {
    btn.textContent = '⚠ Erreur';
    setTimeout(()=>{ btn.textContent='Copier la question'; }, 2000);
  }
  document.body.removeChild(ta);
}

function copyHTML(id, btn) {
  const q = QUESTIONS.find(x=>x.id===id);
  if(!q) return;
  const html = buildCopyHTML(q);

  if(navigator.clipboard && window.ClipboardItem) {
    const blob = new Blob([html], {type:'text/html'});
    const item = new ClipboardItem({'text/html': blob});
    navigator.clipboard.write([item]).then(()=>{ flashBtn(btn,'✓ Tableau copié !'); }).catch(()=>{ fallbackHTML(html, btn); });
  } else {
    fallbackHTML(html, btn);
  }
}

function fallbackHTML(html, btn) {
  // Create a temporary contenteditable div, select it, copy
  const div = document.createElement('div');
  div.contentEditable = 'true';
  div.innerHTML = html;
  div.style.cssText = 'position:fixed;top:0;left:0;opacity:0;pointer-events:none;width:600px';
  document.body.appendChild(div);
  const range = document.createRange();
  range.selectNodeContents(div);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  try {
    document.execCommand('copy');
    flashBtn(btn,'✓ Tableau copié !');
  } catch(e) {
    flashBtn(btn,'⚠ Erreur');
  }
  sel.removeAllRanges();
  document.body.removeChild(div);
}

function copyAll(id, btn) {
  const q = QUESTIONS.find(x=>x.id===id);
  if(!q) return;
  const text = buildCopyText(q);
  const baseStyle = 'font-family:Aptos,Arial,sans-serif;font-size:11pt;background:#fff;color:#000;margin:0 0 6px 0';
  const html = '<div style="background:#fff;color:#000;font-family:Aptos,Arial,sans-serif">'
    + '<p style="' + baseStyle + '">' + q.enonce.replace(/\n/g,'<br>') + '</p>'
    + '<p style="font-family:Aptos,Arial,sans-serif;font-size:11pt;background:#fff;color:#000;margin:0;padding:0;line-height:1">&nbsp;</p>'
    + (q.documents.length ? '<p style="font-family:Aptos,Arial,sans-serif;font-size:11pt;background:#fff;color:#000;margin:0;padding:0;line-height:1">' + q.documents.map(d=>d.cols ? d.cols.map(c=>'• '+(c.titre||'')).join(', ') : '• '+d.type).join('<br>') + '</p>' : '')
    + '<p style="font-family:Aptos,Arial,sans-serif;font-size:11pt;background:#fff;color:#000;margin:0;padding:0;line-height:1">&nbsp;</p>'
    + buildReglettHTML(q)
    + '</div>';

  if(navigator.clipboard && window.ClipboardItem) {
    const items = new ClipboardItem({
      'text/html': new Blob([html], {type:'text/html'}),
      'text/plain': new Blob([text], {type:'text/plain'})
    });
    navigator.clipboard.write([items]).then(()=>{ flashBtn(btn,'✓ Copié !'); }).catch(()=>{ fallbackHTML(html, btn); });
  } else {
    fallbackHTML(html, btn);
  }
}

function flashBtn(btn, msg) {
  const orig = btn.textContent;
  btn.textContent = msg;
  btn.classList.add('copied');
  setTimeout(()=>{ btn.textContent=orig; btn.classList.remove('copied'); }, 2000);
}

function flashCopied(btn) {
  flashBtn(btn, '✓ Copié !');
}

function render(list) {
  const container = document.getElementById('q-list');
  if(!list.length) {
    container.innerHTML = `<div class="empty-state"><span class="big">0</span>Aucune question ne correspond aux filtres.</div>`;
    return;
  }

  container.innerHTML = list.map(q=>{
    const st = oiStyle(q.oi);
    return `
    <div class="q-card" id="card-${q.id}">
      <div class="q-card-top" onclick="toggleCard('${q.id}')">
        <div class="q-top-content">
          <div class="q-oi-badge" style="color:${st.color};background:${st.bg}">${q.oi}</div>
          <div class="q-enonce-preview">${q.enonce.replace(/\n/g,' ')}</div>
          <div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap">
            ${q.aspects.map(a=>`<span style="font-size:0.7rem;color:var(--ink-3)">${a.aspect}</span>`).join('<span style="color:var(--ink-3);font-size:0.7rem">·</span>')}
          </div>
        </div>
        <div class="q-right">
          <div>
            <div class="q-pts">${q.points}</div>
            <div class="q-pts-label">pt${q.points>1?'s':''}</div>
          </div>
          <span class="expand-icon">▼</span>
        </div>
      </div>
      <div class="q-card-body">

        <div class="q-section-label">Question</div>
        <div class="q-full-enonce">${formatTexte(q.enonce)}</div>
        ${q.documents.length ? '<div class="q-section-label">Documents</div><div class="q-docs-images">' + q.documents.map(d=>renderDoc(d)).join('<div class="doc-spacer"></div>') + '</div>' : ''}
        ${renderReponse(q)}
        <div class="q-section-label">Réglette</div>
        ${(()=>{
          const r = REGLETTES[q.id];
          if(!r) return '<div style="font-size:0.8rem;color:var(--ink-3);font-style:italic">Réglette non disponible.</div>';
          return `<table class="reglette-table">
            ${r.niveaux.map(n=>`
              <tr>
                <td class="r-pts-cell">${n.pts} pt${n.pts > 1 ? 's' : ''}</td>
                <td class="r-desc-cell">${n.desc}</td>
              </tr>`).join('')}
          </table>`;
        })()}


        <div style="display:flex;gap:8px;margin-top:1rem;align-items:center;flex-wrap:wrap">
          <button class="btn-add-panier" id="btn-panier-${q.id}" onclick="togglePanier('${q.id}',this)">+ Ajouter au panier</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

populateFilters();
applyFilters();

// ===== PANIER =====
let panier = [];
let dragSrc = null;

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
      if(col.source) html += '<div style="font-size:0.65rem;color:var(--ink-3);margin-top:4px;font-style:italic">' + col.source + '</div>';
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
  if(q.reponse.type === 'image_ligne') {
    const img = IMAGE_DB[q.reponse.ref];
    let html = '';
    if(img) html += '<div class="doc-img-wrap"><img src="' + img.src + '" class="doc-img" style="max-height:60px;max-width:100%" onclick="openLightbox(\'' + img.src + '\')" title="Cliquer pour agrandir"></div>';
    return html;
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
    let html = '<table style="border-collapse:collapse;margin:8px 0;font-size:0.8rem;width:100%">'
      + '<tr><th style="border:0.5px solid var(--border);padding:4px 8px;background:var(--paper-2);text-align:left"></th>'
      + '<th style="border:0.5px solid var(--border);padding:4px 8px;background:var(--paper-2);text-align:center">Document</th></tr>';
    q.reponse.lignes.forEach(l=>{
      html += '<tr><td style="border:0.5px solid var(--border);padding:4px 8px">' + l.label + '</td>'
            + '<td style="border:0.5px solid var(--border);padding:4px 30px"></td></tr>';
    });
    html += '</table>';
    return html;
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
      const q = QUESTIONS.find(function(x) { return x.id === id; });
      if(q && q.guide) {
        let guideContent = '';
        if(typeof q.guide === 'string') {
          guideContent = '<span style="font-size:0.9rem;color:var(--ink)">' + q.guide + '</span>';
        } else if(q.guide.type === 'tableau') {
          guideContent = '<table style="border-collapse:collapse;font-size:0.8rem;margin-top:4px">';
          guideContent += '<tr><th style="border:0.5px solid var(--border);padding:3px 8px;background:var(--paper-2)"></th><th style="border:0.5px solid var(--border);padding:3px 8px;background:var(--paper-2)">Document</th></tr>';
          q.guide.lignes.forEach(function(l) {
            guideContent += '<tr><td style="border:0.5px solid var(--border);padding:3px 8px">' + l.label + '</td><td style="border:0.5px solid var(--border);padding:3px 8px;text-align:center;font-weight:500">' + l.valeur + '</td></tr>';
          });
          guideContent += '</table>';
        }
        html += '<div class="preview-question" style="margin-bottom:0.75rem;padding-bottom:0.75rem">'
          + '<span style="font-weight:500;color:var(--ink-2)">' + (idx+1) + '.&nbsp;&nbsp;</span>'
          + guideContent
          + '</div>';
      }
    });
    body.innerHTML = html;
  } else {
    body.innerHTML = panier.map(function(id, idx) {
      const q = QUESTIONS.find(function(x) { return x.id === id; });
      const r = REGLETTES[id];
      if(!q) return '';
      let docsHtml = '';
      if(q.documents.length) {
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
              if(col.source) docsHtml += '<div style="font-size:0.65rem;color:var(--ink-3);margin-top:4px;font-style:italic">' + col.source + '</div>';
              docsHtml += '</td>';
            });
            docsHtml += '</tr></table>';
          }
        });
        docsHtml += '</div>';
      }
      const reponseHtml = q.reponse ? '<div class="preview-reponse">__________</div>' : '';
      let regHtml = '';
      if(r) {
        regHtml = '<div class="preview-reglette"><table><tr><td class="r-label" rowspan="2">' + r.oi + '</td>';
        regHtml += r.colonnes.map(function(c) { return '<td style="text-align:center;background:var(--paper-2)">' + c + '</td>'; }).join('');
        regHtml += '</tr><tr>' + r.niveaux.map(function(n) { return '<td>' + n.desc + '</td>'; }).join('') + '</tr></table></div>';
      }
      // Réponse in preview
      let previewReponse = '';
      if(q.reponse && q.reponse !== false) {
        if(q.reponse === true) {
          previewReponse = '<div class="reponse-courte" style="margin:8px 0">__________</div>';
        } else if(q.reponse.type === 'image_ligne') {
          const imgPrev = IMAGE_DB[q.reponse.ref];
          if(imgPrev) previewReponse += '<img src="' + imgPrev.src + '" style="max-width:100%;max-height:80px;object-fit:contain;margin:8px 0;display:block">';
          previewReponse += '<div class="reponse-courte" style="margin:4px 0">__________</div>';
        } else if(q.reponse.type === 'image') {
          const imgPrev = IMAGE_DB[q.reponse.ref];
          if(imgPrev) previewReponse += '<img src="' + imgPrev.src + '" style="max-width:100%;max-height:80px;object-fit:contain;margin:8px 0;display:block">';
        } else if(q.reponse.type === 'lignes') {
          previewReponse = Array(q.reponse.nombre).fill('<div class="reponse-ligne-pleine" style="border-bottom:1px solid #999;height:28px;margin:6px 0"></div>').join('');
        } else if(q.reponse.type === 'tableau') {
          previewReponse = '<table style="border-collapse:collapse;margin:8px 0;font-size:0.8rem">'
            + '<tr><th style="border:0.5px solid #ccc;padding:4px 8px;background:#f5f5f5"></th><th style="border:0.5px solid #ccc;padding:4px 8px;background:#f5f5f5">Document</th></tr>'
            + q.reponse.lignes.map(function(l){return '<tr><td style="border:0.5px solid #ccc;padding:4px 8px">' + l.label + '</td><td style="border:0.5px solid #ccc;padding:4px 30px"></td></tr>';}).join('')
            + '</table>';
        }
      }

      return '<div class="preview-question"><div class="preview-num">Question ' + (idx+1) + '</div>'
        + '<div class="preview-enonce">' + q.enonce + '</div>'
        + docsHtml + previewReponse + regHtml + '</div>';
    }).join('');
  }
  document.querySelector('.modal-header span').textContent = guideMode ? 'Prévisualisation du guide' : 'Prévisualisation du cahier';
  document.getElementById('preview-modal').classList.add('open');
}

function closePreview(e) {
  if(e.target === document.getElementById('preview-modal')) closePreviewBtn();
}
function closePreviewBtn() {
  document.getElementById('preview-modal').classList.remove('open');
}

function toggleReponse(id, btn) {
  const box = document.getElementById('rep-' + id);
  const visible = box.style.display !== 'none';
  box.style.display = visible ? 'none' : 'block';
  btn.textContent = visible ? 'Afficher le guide' : 'Masquer le guide';
}

function togglePanier(id, btn) {
  if(panier.includes(id)) {
    panier = panier.filter(x => x !== id);
    btn.textContent = '+ Ajouter au panier';
    btn.classList.remove('in-panier');
  } else {
    if(panier.length >= 10) {
      showWarn('Maximum 10 questions dans le panier.');
      return;
    }
    panier.push(id);
    btn.textContent = '✓ Dans le panier';
    btn.classList.add('in-panier');
    const card = document.getElementById('card-' + id);
    if(card) card.classList.remove('open');
  }
  updatePanierBar();
}

function updatePanierBar() {
  const bar = document.getElementById('panier-bar');
  const count = document.getElementById('panier-count');
  const items = document.getElementById('panier-items');
  count.textContent = panier.length + ' / 10';
  bar.classList.toggle('visible', panier.length > 0);

  items.innerHTML = panier.map((id, i) => {
    const q = QUESTIONS.find(x => x.id === id);
    return `<div class="panier-chip" draggable="true" data-id="${id}" data-i="${i}"
      ondragstart="dragStart(event)" ondragover="dragOver(event)" ondrop="dropQ(event)" ondragend="dragEnd(event)">
      <span>${q.id} — ${q.oi.split(' ').slice(0,3).join(' ')}…</span>
      <button class="panier-chip-remove" onclick="retirerPanier('${id}')">×</button>
    </div>`;
  }).join('');
}

function retirerPanier(id) {
  panier = panier.filter(x => x !== id);
  const btn = document.getElementById('btn-panier-' + id);
  if(btn) { btn.textContent = '+ Ajouter au panier'; btn.classList.remove('in-panier'); }
  updatePanierBar();
}

function viderPanier() {
  panier.forEach(id => {
    const btn = document.getElementById('btn-panier-' + id);
    if(btn) { btn.textContent = '+ Ajouter au panier'; btn.classList.remove('in-panier'); }
  });
  panier = [];
  updatePanierBar();
}

function showWarn(msg) {
  const t = document.getElementById('warn-toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// Drag & drop reorder
function dragStart(e) {
  dragSrc = e.currentTarget;
  dragSrc.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
}
function dragOver(e) {
  e.preventDefault();
  document.querySelectorAll('.panier-chip').forEach(c => c.classList.remove('drag-over'));
  e.currentTarget.classList.add('drag-over');
}
function dropQ(e) {
  e.preventDefault();
  const fromId = dragSrc.dataset.id;
  const toId = e.currentTarget.dataset.id;
  if(fromId === toId) return;
  const fi = panier.indexOf(fromId);
  const ti = panier.indexOf(toId);
  panier.splice(fi, 1);
  panier.splice(ti, 0, fromId);
  updatePanierBar();
}
function dragEnd(e) {
  document.querySelectorAll('.panier-chip').forEach(c => {
    c.classList.remove('dragging');
    c.classList.remove('drag-over');
  });
}

// ===== RÉSOLUTION DES IMAGES (fetch → base64 + dimensions) =====
async function resolveImages(neededKeys) {
  const MAX_PX = 1200;
  const JPEG_Q = 0.78;

  const promises = neededKeys.map(async key => {
    const entry = IMAGE_DB[key];
    if (!entry || entry.src.startsWith('data:')) return;
    try {
      const resp = await fetch(entry.src);
      const blob = await resp.blob();
      const isJpeg = blob.type === 'image/jpeg' || key.match(/\.(jpg|jpeg)$/i);
      const dataUrl = await new Promise((res, rej) => {
        const img = new Image();
        img.onload = () => {
          const scale = Math.min(1, MAX_PX / Math.max(img.naturalWidth, img.naturalHeight));
          const w = Math.round(img.naturalWidth * scale);
          const h = Math.round(img.naturalHeight * scale);
          const canvas = document.createElement('canvas');
          canvas.width = w; canvas.height = h;
          canvas.getContext('2d').drawImage(img, 0, 0, w, h);
          res({ url: canvas.toDataURL(isJpeg ? 'image/jpeg' : 'image/png', isJpeg ? JPEG_Q : undefined), w, h });
        };
        img.onerror = rej;
        img.src = URL.createObjectURL(blob);
      });
      IMAGE_DB[key] = { src: dataUrl.url, w: dataUrl.w, h: dataUrl.h };
    } catch(e) {
      console.warn('Impossible de charger l\'image :', key, e);
    }
  });
  await Promise.all(promises);
}

// ===== GÉNÉRATION DOCX (browser) =====
async function genererDocx(includeGuide=false) {
  if(panier.length === 0) return;
  const btn = includeGuide ? document.getElementById('btn-generer-guide') : document.getElementById('btn-generer');
  const btnOther = includeGuide ? document.getElementById('btn-generer') : document.getElementById('btn-generer-guide');
  btn.disabled = true;
  btnOther.disabled = true;
  btn.textContent = '⏳ Génération…';

  try {
    const panierQuestions = panier.map(id => QUESTIONS.find(x => x.id === id)).filter(Boolean);
    const neededKeys = new Set();
    panierQuestions.forEach(q => {
      q.documents.forEach(d => {
        if(d.cols) d.cols.forEach(c => { if(c.ref && IMAGE_DB[c.ref]) neededKeys.add(c.ref); });
        if(d.ref && IMAGE_DB[d.ref]) neededKeys.add(d.ref);
      });
      if(q.reponse && q.reponse.ref && IMAGE_DB[q.reponse.ref]) neededKeys.add(q.reponse.ref);
    });
    await resolveImages([...neededKeys]);
    const {
      Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
      AlignmentType, BorderStyle, WidthType, VerticalAlign
    } = docx;

    const BORDER = { style: BorderStyle.SINGLE, size: 4, color: '000000' };
    const BORDERS = { top: BORDER, bottom: BORDER, left: BORDER, right: BORDER };
    const CELL_MARGINS = { top: 60, bottom: 60, left: 80, right: 80 };
    const PAGE_W = 9360; // 6.5 inches content width in DXA

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

        const mkCell = (text, bold=false, rowSpan=1, colSpan=1) => {
          const cell = new TableCell({
            borders: BORDERS, margins: CELL_MARGINS, verticalAlign: VerticalAlign.CENTER,
            rowSpan: rowSpan > 1 ? rowSpan : undefined,
            columnSpan: colSpan > 1 ? colSpan : undefined,
            children: [new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [new TextRun({ text, font: 'Aptos', size: 12, bold })]
            })]
          });
          return cell;
        };

        return [new Table({
          width: { size: PAGE_W, type: WidthType.DXA },
          columnWidths: [col1, col2, col3, col4],
          rows: [
            new TableRow({ children: [mkCell(r.oi, true, 6), mkCell("L'élève précise les trois éléments", false, 3), mkCell("et établit correctement deux liens de causalité."), mkCell("3 points")] }),
            new TableRow({ children: [mkCell("et établit correctement un lien de causalité."), mkCell("2 points")] }),
            new TableRow({ children: [mkCell("mais n'établit correctement aucun lien de causalité."), mkCell("1 point")] }),
            new TableRow({ children: [mkCell("L'élève précise deux éléments", false, 2), mkCell("et établit correctement un lien de causalité."), mkCell("2 points")] }),
            new TableRow({ children: [mkCell("mais n'établit correctement aucun lien de causalité."), mkCell("1 point")] }),
            new TableRow({ children: [mkCell("L'élève précise un seul élément ou n'en précise pas.", false, 1, 2), mkCell("0 point")] }),
          ]
        })];
      }

      if(r.variante === 'acteur-positions') {
        const c1=Math.floor(PAGE_W*0.22), c2=Math.floor(PAGE_W*0.43), c3=Math.floor(PAGE_W*0.22), c4=PAGE_W-c1-c2-c3;
        const mk=(t,bold=false,rs=1,cs=1)=>new TableCell({borders:BORDERS,margins:CELL_MARGINS,verticalAlign:VerticalAlign.CENTER,rowSpan:rs>1?rs:undefined,columnSpan:cs>1?cs:undefined,children:[new Paragraph({alignment:AlignmentType.CENTER,children:[new TextRun({text:t,font:'Aptos',size:12,bold})]})]});
        return [new Table({width:{size:PAGE_W,type:WidthType.DXA},columnWidths:[c1,c2,c3,c4],rows:[
          new TableRow({children:[mk(r.oi,true,5),mk("L'élève nomme correctement l'acteur qui présente une position différente",false,4),mk("et présente correctement les deux positions."),mk("3 points")]}),
          new TableRow({children:[mk("et présente correctement une position et plus ou moins correctement l'autre position."),mk("2 points")]}),
          new TableRow({children:[mk("et présente plus ou moins correctement les deux positions, ou présente correctement une position et incorrectement l'autre ou ne la présente pas."),mk("1 point")]}),
          new TableRow({children:[mk("et présente tout au plus une seule position plus ou moins correctement."),mk("0 point")]}),
          new TableRow({children:[mk("L'élève nomme incorrectement l'acteur qui présente une position différente ou ne le nomme pas.",false,1,2),mk("0 point")]}),
        ]})];
      }

      if(r.variante === 'changement-continuité') {
        const c1=Math.floor(PAGE_W*0.22), c2=Math.floor(PAGE_W*0.37), c3=Math.floor(PAGE_W*0.21), c4=PAGE_W-c1-c2-c3;
        const mk=(t,bold=false,rs=1,cs=1)=>new TableCell({borders:BORDERS,margins:CELL_MARGINS,verticalAlign:VerticalAlign.CENTER,rowSpan:rs>1?rs:undefined,columnSpan:cs>1?cs:undefined,children:[new Paragraph({alignment:AlignmentType.CENTER,children:[new TextRun({text:t,font:'Aptos',size:12,bold})]})]});
        return [new Table({width:{size:PAGE_W,type:WidthType.DXA},columnWidths:[c1,c2,c3,c4],rows:[
          new TableRow({children:[mk(r.oi,true,6),mk("L'élève indique s'il y a changement ou continuité",false,3),mk("et présente des faits qui le montrent correctement."),mk("3 points (ou 2 points)")]}),
          new TableRow({children:[mk("et présente des faits qui le montrent plus ou moins correctement."),mk("2 points (ou 1 point)")]}),
          new TableRow({children:[mk("et présente des faits qui le montrent incorrectement ou n'en présente pas."),mk("0 point")]}),
          new TableRow({children:[mk("L'élève n'indique pas s'il y a changement ou continuité",false,3),mk("mais présente des faits exacts."),mk("2 points (ou 1 point)")]}),
          new TableRow({children:[mk("mais présente des faits plus ou moins exacts."),mk("1 point (ou 0 point)")]}),
          new TableRow({children:[mk("et présente des faits inexacts ou n'en présente pas."),mk("0 point")]}),
        ]})];
      }

      // Standard layout
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

    if(includeGuide) {
      // Guide — numéros + réponses seulement
      children.push(new Paragraph({
        children: [new TextRun({ text: 'Guide de correction', font: 'Aptos', size: 28, bold: true })]
      }));
      children.push(new Paragraph({ children: [new TextRun({ text: '' })] }));
      panier.forEach((id, idx) => {
        const q = QUESTIONS.find(x => x.id === id);
        if(!q || !q.guide) return;
        children.push(new Paragraph({ children: [new TextRun({ text: (idx+1) + '.', font: 'Aptos', size: 20, bold: true })] }));
        if(typeof q.guide === 'string') {
          children.push(new Paragraph({ children: [new TextRun({ text: q.guide, font: 'Aptos', size: 20 })] }));
        } else if(q.guide.type === 'tableau') {
          const colDoc = Math.floor(PAGE_W * 0.55);
          const colVal = PAGE_W - colDoc;
          const guideRows = [
            new TableRow({ children: [
              new TableCell({ borders: BORDERS, margins: CELL_MARGINS, verticalAlign: VerticalAlign.CENTER,
                children: [new Paragraph({ children: [new TextRun({ text: '', font: 'Aptos', size: 20, bold: true })] })] }),
              new TableCell({ borders: BORDERS, margins: CELL_MARGINS, verticalAlign: VerticalAlign.CENTER,
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Document', font: 'Aptos', size: 20, bold: true })] })] })
            ]})
          ];
          q.guide.lignes.forEach(l => {
            guideRows.push(new TableRow({ children: [
              new TableCell({ borders: BORDERS, margins: CELL_MARGINS, verticalAlign: VerticalAlign.CENTER,
                children: [new Paragraph({ children: [new TextRun({ text: l.label, font: 'Aptos', size: 20 })] })] }),
              new TableCell({ borders: BORDERS, margins: CELL_MARGINS, verticalAlign: VerticalAlign.CENTER,
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: l.valeur, font: 'Aptos', size: 20 })] })] })
            ]}));
          });
          children.push(new Table({ width: { size: PAGE_W, type: WidthType.DXA }, columnWidths: [colDoc, colVal], rows: guideRows }));
        }
        children.push(new Paragraph({ children: [new TextRun({ text: '' })] }));
      });
    } else {

    panier.forEach((id, idx) => {
      const q = QUESTIONS.find(x => x.id === id);

      // Énoncé avec numéro
      const qNum = idx + 1;
      const firstLine = q.enonce.split('\n')[0];
      const otherLines = q.enonce.split('\n').slice(1);
      children.push(new Paragraph({
        children: [new TextRun({ text: qNum + '.  ', font: 'Aptos', size: 24 }), ...mkRuns(firstLine, 'Aptos', 24)]
      }));
      otherLines.forEach(line => { if(line.trim()) children.push(mkLine(line, 'Aptos', 24)); });
      children.push(new Paragraph({ children: [new TextRun({ text: '' })] }));

      // Documents
      if(q.documents.length) {
        for(let di=0; di<q.documents.length; di++) {
          const d = q.documents[di];
          if(d.type === 'tableau') {
            const colW = Math.floor(9360 / d.cols.length);
            const tableCells = d.cols.map(col => {
              const imgData = IMAGE_DB[col.ref];
              const cellChildren = [];
              if(col.titreDocx && col.titre) cellChildren.push(new Paragraph({ alignment: AlignmentType.LEFT, children: [new TextRun({ text: col.titre, font: 'Aptos', size: 20 })] }));
              if(imgData && imgData.src) {
                const b64 = imgData.src.split(',')[1];
                const bStr = atob(b64);
                const bytes = new Uint8Array(bStr.length);
                for(let bi=0; bi<bStr.length; bi++) bytes[bi] = bStr.charCodeAt(bi);
                const ext = col.ref.split('.').pop().toLowerCase();
                const imgType = (ext === 'jpg' || ext === 'jpeg') ? 'jpg' : 'png';
                const docW = Math.min(200, imgData.w);
                const docH = Math.round(docW / (imgData.w / imgData.h));
                cellChildren.push(new Paragraph({ alignment: AlignmentType.CENTER, children: [new docx.ImageRun({ data: bytes, type: imgType, transformation: { width: docW, height: docH } })] }));
              }
              return new docx.TableCell({
                width: { size: colW, type: docx.WidthType.DXA },
                verticalAlign: VerticalAlign.CENTER,
                borders: BORDERS,
                margins: CELL_MARGINS,
                children: cellChildren
              });
            });
            children.push(new docx.Table({ width:{size:9360,type:docx.WidthType.DXA}, columnWidths:d.cols.map(()=>colW), rows:[new docx.TableRow({children:tableCells})] }));
          } else if(d.type === 'textes') {
            // Tableau de textes + images
            const colW2 = Math.floor(9360 / d.cols.length);
            const textCells = d.cols.map(col => {
              const cellChildren = [];
              // Titre
              cellChildren.push(new Paragraph({ children: [new TextRun({ text: col.titre || '', font: 'Aptos', size: 20, bold: true })] }));
              // Texte
              if(col.texte) {
                col.texte.split('\n').forEach(line => { cellChildren.push(mkLine(line, 'Aptos', 20)); });
              }
              // Image
              if(col.ref) {
                const imgData = IMAGE_DB[col.ref];
                if(imgData && imgData.src) {
                  const b64 = imgData.src.split(',')[1];
                  const bStr = atob(b64);
                  const bytes = new Uint8Array(bStr.length);
                  for(let bi=0; bi<bStr.length; bi++) bytes[bi] = bStr.charCodeAt(bi);
                  const ext = col.ref.split('.').pop().toLowerCase();
                  const imgType = (ext === 'jpg' || ext === 'jpeg') ? 'jpg' : 'png';
                  const docW = Math.min(180, imgData.w);
                  const docH = Math.round(docW / (imgData.w / imgData.h));
                  cellChildren.push(new Paragraph({ alignment: AlignmentType.CENTER, children: [new docx.ImageRun({ data: bytes, type: imgType, transformation: { width: docW, height: docH } })] }));
                }
              }
              // Source (Aptos 6pt)
              if(col.source) {
                col.source.split('\n').forEach(line => {
                  cellChildren.push(new Paragraph({ children: [new TextRun({ text: line, font: 'Aptos', size: 12 })] }));
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
            children.push(new docx.Table({ width:{size:9360,type:docx.WidthType.DXA}, columnWidths:d.cols.map(()=>colW2), rows:[new docx.TableRow({children:textCells})] }));
          } else {
            children.push(new Paragraph({ children: [new TextRun({ text: '• ' + d.type + ' — ' + (d.ref||''), font: 'Aptos', size: 22 })] }));
          }
          // Two empty paragraphs between documents
          if(di < q.documents.length - 1) {
            children.push(new Paragraph({ children: [new TextRun({ text: '' })] }));
            children.push(new Paragraph({ children: [new TextRun({ text: '' })] }));
          }
        }
        children.push(new Paragraph({ children: [new TextRun({ text: '' })] }));
      }

      children.push(new Paragraph({ children: [new TextRun({ text: '' })] }));

      // Réponse
      if(q.reponse) {
        if(q.reponse === true) {
          children.push(new Paragraph({ children: [new TextRun({ text: '__________', font: 'Aptos', size: 22 })] }));
        } else if(q.reponse.type === 'image') {
          const imgData2 = IMAGE_DB[q.reponse.ref];
          if(imgData2 && imgData2.src) {
            const b64_2 = imgData2.src.split(',')[1];
            const bStr_2 = atob(b64_2);
            const bytes_2 = new Uint8Array(bStr_2.length);
            for(let bi=0; bi<bStr_2.length; bi++) bytes_2[bi] = bStr_2.charCodeAt(bi);
            const ext_2 = q.reponse.ref.split('.').pop().toLowerCase();
            const imgType_2 = (ext_2 === 'jpg' || ext_2 === 'jpeg') ? 'jpg' : 'png';
            const docW_2 = Math.min(400, imgData2.w);
            const docH_2 = Math.round(docW_2 / (imgData2.w / imgData2.h));
            children.push(new Paragraph({ children: [new docx.ImageRun({ data: bytes_2, type: imgType_2, transformation: { width: docW_2, height: docH_2 } })] }));
          }
        } else if(q.reponse.type === 'image_ligne') {
          const imgData2 = IMAGE_DB[q.reponse.ref];
          if(imgData2 && imgData2.src) {
            const b64_2 = imgData2.src.split(',')[1];
            const bStr_2 = atob(b64_2);
            const bytes_2 = new Uint8Array(bStr_2.length);
            for(let bi=0; bi<bStr_2.length; bi++) bytes_2[bi] = bStr_2.charCodeAt(bi);
            const ext_2 = q.reponse.ref.split('.').pop().toLowerCase();
            const imgType_2 = (ext_2 === 'jpg' || ext_2 === 'jpeg') ? 'jpg' : 'png';
            const docW_2 = Math.min(400, imgData2.w);
            const docH_2 = Math.round(docW_2 / (imgData2.w / imgData2.h));
            children.push(new Paragraph({ children: [new docx.ImageRun({ data: bytes_2, type: imgType_2, transformation: { width: docW_2, height: docH_2 } })] }));
          }
          children.push(new Paragraph({ children: [new TextRun({ text: '__________', font: 'Aptos', size: 22 })] }));
        } else if(q.reponse.type === 'lignes') {
          const BN_L = { style: docx.BorderStyle.NONE, size: 0, color: 'FFFFFF' };
          const BB_L = { style: docx.BorderStyle.SINGLE, size: 6, color: '000000' };
          const MP_L = { spacing:{before:0,after:0}, children:[new TextRun({text:' '})] };
          const MC_L = { top:0, bottom:0, left:0, right:0 };
          const nb = q.reponse.nombre;
          const mkRow = (first) => new docx.TableRow({
            height:{value:500,rule:'exact'},
            children:[new docx.TableCell({
              borders:{top:first?BB_L:BN_L, bottom:BB_L, left:BN_L, right:BN_L},
              margins:MC_L,
              children:[new Paragraph(MP_L)]
            })]
          });
          const ligneRows = [];
          for(let i=0; i<nb-1; i++) ligneRows.push(mkRow(i===0));
          if(ligneRows.length === 0) ligneRows.push(mkRow(true));
          children.push(new docx.Table({
            width:{size:PAGE_W,type:docx.WidthType.DXA},
            columnWidths:[PAGE_W],
            borders:{top:BN_L,bottom:BN_L,left:BN_L,right:BN_L,insideH:BN_L,insideV:BN_L},
            rows:ligneRows
          }));
          children.push(new Paragraph({ children:[new TextRun({text:''})] }));
        } else if(q.reponse.type === 'tableau') {
          // Tableau réponse
          const colDoc = Math.floor(PAGE_W * 0.55);
          const colVal = PAGE_W - colDoc;
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
          children.push(new Table({ width: { size: PAGE_W, type: WidthType.DXA }, columnWidths: [colDoc, colVal], rows: repRows }));
        }
        children.push(new Paragraph({ children: [new TextRun({ text: '' })] }));
      }

      // Réglette
      buildReglette(id).forEach(t => children.push(t));

      // (guide handled separately below)
      children.push(new Paragraph({ children: [new TextRun({ text: '' })] }));

      // Separator between questions (empty paragraph)
      if(idx < panier.length - 1) {
        children.push(new Paragraph({ children: [new TextRun({ text: '' })] }));
      }
    });

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

    flashBtn(btn, '✓ Téléchargé !');
    setTimeout(() => {
      btn.textContent = includeGuide ? '⬇ Générer Guide' : '⬇ Générer Cahier';
      btn.disabled = false;
      btnOther.disabled = false;
    }, 2500);
  } catch(e) {
    console.error(e);
    showWarn('Erreur : ' + e.message);
    btn.textContent = includeGuide ? '⬇ Générer Guide' : '⬇ Générer Cahier';
    btn.disabled = false;
    btnOther.disabled = false;
  }
}
