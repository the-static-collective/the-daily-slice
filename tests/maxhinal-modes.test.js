const test = require('node:test');
const assert = require('node:assert/strict');
const Modes = require('../artifacts/maxhinal/maxhinal-modes.js');

const CORPUS = [
  { id:'a', date:'2026-08-30', title:'Carrier Road', summary:'same carrier survives', carry:'keep the road', text:'carrier lineage road' },
  { id:'b', date:'2026-08-31', title:'Road Child', summary:'successor inherits road', carry:'take the seed not the throne', text:'carrier lineage successor' },
  { id:'c', date:'2026-09-01', title:'Unrelated Weather', summary:'rain', carry:'', text:'weather cloud' }
];

test('legacy search keeps weighted title/carry/summary/text behavior', () => {
  assert.deepEqual(Modes.searchCorpus(CORPUS, 'carrier').map((row) => row.id), ['a','b']);
});

test('legacy relative suggestion ranks shared semantic tokens first', () => {
  assert.equal(Modes.suggestRelatives(CORPUS, 'a', 2)[0].id, 'b');
});

test('legacy pressure question remains verdict-specific', () => {
  assert.match(Modes.pressureQuestion('successor'), /inherited/i);
  assert.match(Modes.pressureQuestion('unresolved'), /missing observation/i);
});

test('creative refusal is deterministic when supplied a deterministic rng', () => {
  const output = Modes.spinOutput({ verdict:'unresolved', reason:'' }, () => 0);
  assert.equal(output.kind, 'refusal');
  assert.equal(output.lines[0], 'NO SONG.');
});

test('Discontinuity returns a typed projection without owning ride state', () => {
  const result = Modes.runDiscontinuity({
    corpus: CORPUS,
    resolvedInputs: [
      { ref:{kind:'slice',slice_id:'a'}, value:CORPUS[0], provenance:{slice_id:'a'} },
      { ref:{kind:'slice',slice_id:'b'}, value:CORPUS[1], provenance:{slice_id:'b'} }
    ],
    parameters:{ verdict:'successor', reason:'road inherited' },
    rng:() => 0.8,
    operation:{ operation_id:'op-0001' }
  });
  assert.equal(result.status, 'OK');
  assert.equal(result.projection.verdict, 'successor');
  assert.match(result.projection.pressure_question, /inherited/i);
  assert.deepEqual(result.projection.source_refs, ['a','b']);
});
