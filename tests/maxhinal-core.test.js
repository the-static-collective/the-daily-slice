const test = require('node:test');
const assert = require('node:assert/strict');
const Core = require('../artifacts/maxhinal/maxhinal-core.js');

const PAYLOAD = {
  records:[
    { id:'a', date:'2026-08-30', title:'A', path:'a.md', summary:'carrier road', carry:'', text:'carrier road' },
    { id:'b', date:'2026-08-31', title:'B', path:'b.md', summary:'successor road', carry:'', text:'successor road' }
  ],
  meta:{ format:'daily-slice-corpus/v1', digest:'sha256:test', record_count:2 }
};

function job(seed='12345') {
  return {
    format:'maxhinal-job/v0',
    seed,
    gas:['a','b'],
    operations:[
      { mode:'discontinuity', inputs:[{kind:'slice',slice_id:'a'},{kind:'slice',slice_id:'b'}], parameters:{ verdict:'successor', reason:'road inherited' }, co_phase:'unknown' }
    ]
  };
}

test('same corpus + same job + same seed gives byte-identical semantic snapshot', () => {
  const left = Core.runJob(PAYLOAD, job('same-seed'));
  const right = Core.runJob(PAYLOAD, job('same-seed'));
  assert.equal(Core.stableStringify(Core.semanticSnapshot(left)), Core.stableStringify(Core.semanticSnapshot(right)));
});

test('ride keeps historical gas distinct from derived output', () => {
  const ride = Core.runJob(PAYLOAD, job());
  assert.equal(ride.gas[0].kind, 'slice');
  assert.equal(ride.outputs[0].kind, 'derived');
  assert.equal(ride.outputs[0].source_operation_id, 'op-0001');
});

test('operation receipt records consumed refs, co phase, and seed offset', () => {
  const ride = Core.runJob(PAYLOAD, job());
  const op = ride.operations[0];
  assert.deepEqual(op.inputs, [{kind:'slice',slice_id:'a'},{kind:'slice',slice_id:'b'}]);
  assert.equal(op.co_phase, 'unknown');
  assert.equal(op.seed_offset, 0);
  assert.deepEqual(op.output_refs, ['out-0001']);
});

test('export import export preserves semantic history', () => {
  const original = Core.runJob(PAYLOAD, job());
  const encoded = Core.serializeRide(original);
  const loaded = Core.hydrateRide(JSON.parse(encoded), PAYLOAD.meta);
  assert.equal(Core.serializeRide(loaded), encoded);
});

test('corpus mismatch is explicit and does not silently rebind gas', () => {
  const original = Core.runJob(PAYLOAD, job());
  const drifted = Core.hydrateRide(original, { ...PAYLOAD.meta, digest:'sha256:changed' });
  assert.equal(drifted.replay.status, 'CORPUS_DRIFT');
  assert.equal(drifted.corpus.digest, 'sha256:test');
});

test('rejecting an output appends a bad spin without deleting output', () => {
  const original = Core.runJob(PAYLOAD, job());
  const next = Core.appendBadSpin(original, { output_ref:'out-0001', reason:'counterfeit relation' });
  assert.equal(next.outputs.length, 1);
  assert.equal(next.bad_spins.length, 1);
  assert.equal(next.bad_spins[0].output_ref, 'out-0001');
});

test('authority and promotion remain inert defaults', () => {
  const ride = Core.runJob(PAYLOAD, job());
  assert.equal(ride.authority, 'none');
  assert.equal(ride.promotion, 'NONE');
});

test('missing source input returns typed residual and no projection', () => {
  const ride = Core.runOperation(Core.createRide(PAYLOAD.meta, 'x'), PAYLOAD, {
    mode:'discontinuity',
    inputs:[{kind:'slice',slice_id:'missing'},{kind:'slice',slice_id:'b'}],
    parameters:{verdict:'unresolved'},
    co_phase:'unknown'
  });
  assert.equal(ride.outputs.length, 0);
  assert.equal(ride.residuals[0].code, 'MISSING_INPUT');
});
