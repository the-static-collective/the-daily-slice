const test = require('node:test');
const assert = require('node:assert/strict');
const Modes = require('../artifacts/maxhinal/maxhinal-chambers.js');

const CORPUS = [
  { id:'a', date:'2026-08-30', title:'Carrier Road', summary:'same carrier survives', carry:'keep the road', text:'carrier lineage road' },
  { id:'b', date:'2026-08-31', title:'Road Child', summary:'successor inherits road', carry:'take the seed not the throne', text:'carrier lineage successor' },
  { id:'c', date:'2026-09-01', title:'Unrelated Weather', summary:'rain', carry:'', text:'weather cloud' }
];

test('Walk Braid preserves path order separately from endpoint', () => {
  const result = Modes.runWalkBraid({ resolvedInputs:[], corpus:CORPUS, rng:() => 0.5, operation:{operation_id:'op-1'}, parameters:{ steps:[{ ref:'a', verb:'predict', co_phase:'not-co' },{ ref:'a', verb:'compose', co_phase:'not-co' },{ ref:'b', verb:'compose', co_phase:'co' },{ ref:'b', verb:'construct', co_phase:'co' }] } });
  assert.equal(result.status, 'OK');
  assert.deepEqual(result.projection.endpoint, { verb:'construct', co_phase:'co' });
  assert.deepEqual(result.projection.path_word, ['predict:not-co','compose:not-co','compose:co','construct:co']);
});

test('Walk Braid does not claim independent grid moves are noncommutative', () => {
  const result = Modes.runWalkBraid({ resolvedInputs:[], corpus:CORPUS, rng:() => 0.5, operation:{operation_id:'op-1'}, parameters:{ steps:[{ref:'a',verb:'predict',co_phase:'not-co'}], operator_model:'independent-grid' } });
  assert.equal(result.projection.commuting_diagnostic, 'COMMUTES_WHEN_INDEPENDENT');
});

test('Fiber preserves multiple compatible roads and separates representative policy', () => {
  const inputs = CORPUS.slice(0,2).map((value) => ({ ref:{kind:'slice',slice_id:value.id}, value, provenance:{slice_id:value.id} }));
  const result = Modes.runFiber({ corpus:CORPUS, resolvedInputs:inputs, rng:() => 0.5, operation:{operation_id:'op-1'}, parameters:{ target:'carrier road', representative_slice_id:'b' } });
  assert.equal(result.status, 'OK');
  assert.deepEqual(result.projection.compatible_refs.sort(), ['a','b']);
  assert.equal(result.projection.representative.ref, 'b');
  assert.equal(result.projection.representative.basis, 'declared-policy');
});

test('Compose retains source refs, ordering, and declared unresolved seams', () => {
  const inputs = CORPUS.slice(0,2).map((value) => ({ ref:{kind:'slice',slice_id:value.id}, value, provenance:{slice_id:value.id} }));
  const result = Modes.runCompose({ corpus:CORPUS, resolvedInputs:inputs, rng:() => 0.5, operation:{operation_id:'op-1'}, parameters:{ order:['b','a'], seams:[{between:['a','b'],status:'unresolved',note:'identity disagreement'}] } });
  assert.equal(result.status, 'OK');
  assert.deepEqual(result.projection.source_order, ['b','a']);
  assert.equal(result.projection.seams[0].status, 'unresolved');
  assert.equal(result.projection.posture, 'COMPOSITION_NOT_EVIDENCE');
});

test('Pressure returns the smallest declared discriminator for a candidate kind', () => {
  const result = Modes.runPressure({ corpus:CORPUS, resolvedInputs:[{ref:{kind:'slice',slice_id:'a'},value:CORPUS[0],provenance:{slice_id:'a'}}], parameters:{ candidate_kind:'lineage' }, rng:() => 0.5, operation:{operation_id:'op-1'} });
  assert.equal(result.status, 'OK');
  assert.match(result.projection.question, /attributable road|carrier/i);
  assert.equal(result.projection.promotion, 'NONE');
});

test('Pressure may refuse when no candidate is declared', () => {
  const result = Modes.runPressure({ corpus:CORPUS, resolvedInputs:[], parameters:{}, rng:() => 0.5, operation:{} });
  assert.equal(result.status, 'REFUSED');
});

test('Moving Origin re-sorts selected roads without mutating occurrence dates', () => {
  const inputs = CORPUS.map((value) => ({ref:{kind:'slice',slice_id:value.id},value,provenance:{slice_id:value.id}}));
  const result = Modes.runMovingOrigin({ corpus:CORPUS, resolvedInputs:inputs, parameters:{ origin_slice_id:'b' }, rng:() => 0.5, operation:{} });
  assert.equal(result.status, 'OK');
  assert.deepEqual(result.projection.before.map((x) => x.ref), ['a']);
  assert.equal(result.projection.now.ref, 'b');
  assert.equal(result.projection.after[0].ref, 'c');
  assert.equal(CORPUS[0].date, '2026-08-30');
});

test('QuantumSlinky computes gcd components orbit and winding exactly', () => {
  const result = Modes.runQuantumSlinky({ corpus:CORPUS, resolvedInputs:[{ref:{kind:'slice',slice_id:'a'},value:CORPUS[0],provenance:{slice_id:'a'}}], parameters:{ N:72, m:5, k:364, numeric_sources:{N:'a',m:'a',k:'a'} }, rng:() => 0.5, operation:{} });
  assert.equal(result.status, 'OK');
  assert.equal(result.projection.gcd, 1);
  assert.equal(result.projection.components, 1);
  assert.equal(result.projection.orbit_length, 72);
  assert.deepEqual(result.projection.winding, { w:5, r:4 });
  assert.equal(result.projection.posture, 'MATH_TRANSFORM_NOT_CLAIM_ABOUT_NATURE');
});

test('QuantumSlinky rejects invalid carrier values', () => {
  const result = Modes.runQuantumSlinky({ corpus:CORPUS, resolvedInputs:[], parameters:{N:0,m:5}, rng:() => 0.5, operation:{} });
  assert.equal(result.status, 'INVALID_MODEL');
});

test('QuantumSlinky only emits twisted resonance when the model is explicitly selected', () => {
  const plain = Modes.runQuantumSlinky({ corpus:CORPUS, resolvedInputs:[], parameters:{N:72,m:5}, rng:() => 0.5, operation:{} });
  assert.equal(plain.projection.twisted_resonance, null);
  const twisted = Modes.runQuantumSlinky({ corpus:CORPUS, resolvedInputs:[], rng:() => 0.5, operation:{}, parameters:{N:72,m:5,model:'twisted-boundary',L:2,n:1,mode_k:3} });
  assert.ok(Number.isFinite(twisted.projection.twisted_resonance.kappa));
});

test('MADDCL0WN can lawfully refuse a collision with no useful overlap', () => {
  const inputs = [CORPUS[0], CORPUS[2]].map((value) => ({ref:{kind:'slice',slice_id:value.id},value,provenance:{slice_id:value.id}}));
  const result = Modes.runMaddclown({ corpus:CORPUS, resolvedInputs:inputs, parameters:{}, rng:() => 0, operation:{} });
  assert.ok(['REFUSED','UNRESOLVED'].includes(result.status));
  assert.equal(result.projection == null || result.projection.promotion === 'NONE', true);
});
