import { readFileSync, readdirSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const ctx = vm.createContext({ console, Set });
for(const file of ['oi-config.js','contexte.js','questions.js','question-validator.js']) {
  vm.runInContext(readFileSync(new URL('../' + file, import.meta.url), 'utf8'), ctx);
}
const data = vm.runInContext('({OI_CONFIG, PERIODES_PAR_NIVEAU, ASPECTS_PAR_PERIODE, QUESTIONS, REGLETTES, IMAGE_DB})', ctx);
const base = { oiConfig: data.OI_CONFIG, periodsByLevel: data.PERIODES_PAR_NIVEAU,
  aspectsByPeriod: data.ASPECTS_PAR_PERIODE, imageFiles: new Set(readdirSync(new URL('../images', import.meta.url))), imageDb: data.IMAGE_DB };
const q = {id:'Q9999', niveau:4, oi:'Établir des faits', periode:'P6 — 1896 – 1945',
  enonce:'Indiquez un fait.', points:1, aspects:[{aspect:'Grande dépression'}], documents:[],
  reponse:{type:'lignes',nombre:1}, guide:'Réponse attendue.', updatedAt:'2026-10-02T21:00:00Z'};
const reglette = {oi:q.oi,niveaux:[{pts:1},{pts:0}]};
const check = (question=q, options={}) => ctx.validateQuestionData(question,{...base,reglette,...options});
const errors = results => results.filter(r=>r.status==='error');
assert.equal(errors(check()).length,0);
for(const change of [{id:''},{niveau:3},{oi:'inconnue'},{points:2},{aspects:[]},{soustag:'inconnu'},
  {documents:[{cols:[{titre:'A',ref:'introuvable.png'}]}]},{documents:[{cols:[{titre:'B',texte:''}]}]}]) {
  assert.ok(errors(check({...q,...change})).length,JSON.stringify(change));
}
assert.ok(errors(check(q,{questions:[q]})).length);
assert.equal(errors(check(q,{questions:[q],editingId:q.id})).length,0);
assert.ok(errors(check(q,{editingId:'Q1'})).length);
assert.ok(check({...q,guide:false,reponse:false}).filter(r=>r.status==='warning').length>=2);
assert.equal(errors(check({...q,documents:[{cols:[{ref:'absent.png'}]}]}, {imageFiles:null})).length,0);
assert.ok(check(q,{expectedPreset:'attendu',selectedPreset:'autre'}).some(r=>r.label==='Réglette et sous-tag' && r.status==='warning'));
assert.ok(check({...q,guide:{type:'grille',rangees:[['','']]}}).some(r=>r.label==='Guide de correction' && r.status==='warning'));
let blocking=0;
for(const existing of data.QUESTIONS) {
  const report = check(existing,{reglette:data.REGLETTES[existing.id],questions:data.QUESTIONS,editingId:existing.id});
  if(errors(report).length) blocking++;
}
console.log(`✓ Validation : métadonnées, unicité, réglette, images, avertissements et guide vide. Banque existante analysée sans crash (${blocking} questions avec erreur).`);
// Vérifie la syntaxe des scripts inline de l’admin après intégration.
const html = readFileSync(new URL('../admin.html', import.meta.url), 'utf8');
for(const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)) new vm.Script(match[1]);
assert.ok(html.includes('id="validation-title"'));
assert.ok(html.includes('const report = runQuestionValidation();'));
console.log('✓ Admin : syntaxe et garde de publication.');
// Exerce aussi le rapport DOM avec le formulaire d’édition et de création.
const elements = new Map();
ctx.document = { getElementById(id) {
  if(!elements.has(id)) elements.set(id,{value:'0',style:{},children:[],
    replaceChildren(){this.children=[];},appendChild(item){this.children.push(item);}});
  return elements.get(id);
}, createElement(){return {style:{}};} };
Object.assign(ctx,{ buildQuestion:()=>q, buildReglette:()=>reglette, validateForm:()=>[],
  currentQuestions:[q], questionsFileSha:'loaded', currentReglettes:{}, currentImageDb:{}, editingId:null,
  validationImagesKnown:true, IMAGES:[], SOUSTAG_AUTO:{}, REGLETTES_PRESET:{[q.oi]:[{label:'1 pt'}]} });
vm.runInContext(html.slice(html.indexOf('function runQuestionValidation()'),html.indexOf('let questionValidationTimer;')),ctx);
assert.ok(errors(ctx.runQuestionValidation()).length);
assert.ok(elements.get('validation-summary').textContent.includes('Publication bloquée'));
ctx.editingId=q.id;
assert.equal(errors(ctx.runQuestionValidation()).length,0);
assert.equal(elements.get('validation-results').children.length,15);
console.log('✓ Rapport affiché : création en double bloquée, édition du même identifiant autorisée.');
