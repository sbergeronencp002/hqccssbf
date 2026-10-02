import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const elements = new Map();
const element = () => ({ value: '', textContent: '', hidden: false, children: [],
  addEventListener(type, fn) { this[type] = fn; }, setAttribute() {},
  appendChild(child) { this.children.push(child); }, replaceChildren() { this.children = []; } });
const ctx = vm.createContext({ console, document: {
  getElementById(id) { if (!elements.has(id)) elements.set(id, element()); return elements.get(id); },
  createElement: element, addEventListener() {}, querySelectorAll: () => []
}, window: { addEventListener() {} }, localStorage: { getItem: () => null } });
for (const f of ['oi-config.js', 'contexte.js', 'app.js', 'questions-index.js']) {
  vm.runInContext(readFileSync(new URL('../' + f, import.meta.url), 'utf8'), ctx);
}
const p6 = 'P6 — 1896 – 1945';
const c = vm.runInContext(`computePeriodCoverage(QUESTIONS, ${JSON.stringify(p6)})`, ctx);
assert.equal(c.total, 149); assert.equal(c.covered, 15); assert.equal(c.ois, 8);
ctx.updatePeriodCoverage(p6, '');
const summary = elements.get('coverage-summary').textContent;
assert.equal(summary, '149 questions · 15 aspects sur 15 couverts · 8 OI sur 8');
let applied = 0; ctx.applyFilters = () => applied++;
ctx.document.getElementById('f-search').value = 'recherche';
ctx.document.getElementById('f-oi').value = 'Établir des faits';
elements.get('coverage-aspects').children[0].click();
assert.equal(applied, 1); assert.ok(elements.get('f-aspect').value);
assert.equal(elements.get('f-search').value, ''); assert.equal(elements.get('f-oi').value, '');
ctx.updatePeriodCoverage(p6, ''); assert.equal(elements.get('coverage-summary').textContent, summary);
const sparse = vm.runInContext("computePeriodCoverage(QUESTIONS, 'P7 — 1945 – 1980')", ctx);
assert.ok(sparse.covered < sparse.expected);
const aspect = [...c.counts.keys()][0];
ctx.sample = [{ periode: p6, niveau: 4, oi: 'inconnue', aspects: [{aspect}, {aspect}] }];
const single = vm.runInContext(`computePeriodCoverage(sample, ${JSON.stringify(p6)})`, ctx);
assert.equal(single.counts.get(aspect), 1); assert.equal(single.ois, 0);
assert.equal(vm.runInContext(`computePeriodCoverage(sample, ${JSON.stringify(p6)}, '3').total`, ctx), 0);
ctx.updatePeriodCoverage('', ''); assert.equal(elements.get('coverage-panel').hidden, true);
console.log('✓ Couverture P6, lacunes P7, filtres cliquables, bilan stable, doublons, niveau et réinitialisation.');
