const test = require('node:test');
const assert = require('node:assert/strict');
require('../artifacts/maxhinal/maxhinal-chambers.js');
const Core = require('../artifacts/maxhinal/maxhinal-core.js');
const PAYLOAD={records:[{id:'a',date:'2026-08-30',title:'A',path:'a.md',summary:'carrier road',carry:'',text:'carrier road'},{id:'b',date:'2026-08-31',title:'B',path:'b.md',summary:'successor road',carry:'',text:'successor road'}],meta:{format:'daily-slice-corpus/v1',digest:'sha256:test',record_count:2}};
function job(seed='12345'){return {format:'maxhinal-job/v0',seed,gas:['a','b'],operations:[{mode:'discontinuity',inputs:[{kind:'slice',slice_id:'a'},{kind:'slice',slice_id:'b'}],parameters:{verdict:'successor',reason:'road inherited'},co_phase:'unknown'}]};}

test('derived chamber input preserves ancestry into a later composition', () => {
  let ride = Core.runJob(PAYLOAD, job('ancestry'));
  ride = Core.runOperation(ride, PAYLOAD, {
    mode:'compose',
    inputs:[{kind:'slice',slice_id:'a'},{kind:'derived',output_id:'out-0001'}],
    parameters:{seams:[]},
    co_phase:'co'
  });
  assert.equal(ride.operations.length, 2);
  assert.deepEqual(ride.operations[1].inputs[1], {kind:'derived',output_id:'out-0001'});
  assert.deepEqual(ride.outputs[1].source_refs[1], {kind:'derived',output_id:'out-0001'});
  assert.equal(ride.outputs[1].value.posture, 'COMPOSITION_NOT_EVIDENCE');
});

test('global MADDCL0WN targeting appends counterpressure instead of replacing target output', () => {
  let ride = Core.runJob(PAYLOAD, job());
  ride = Core.runOperation(ride, PAYLOAD, {
    mode:'maddclown',
    inputs:[{kind:'derived',output_id:'out-0001'}],
    parameters:{ intervention:'global', target_output_ref:'out-0001' },
    co_phase:'unknown'
  });
  assert.equal(ride.outputs[0].output_id, 'out-0001');
  assert.equal(ride.operations.length, 2);
  assert.equal(ride.operations[1].mode, 'maddclown');
  assert.deepEqual(ride.operations[1].inputs, [{kind:'derived',output_id:'out-0001'}]);
});

const PARITY_JOB = {
  format:'maxhinal-job/v0',
  seed:'parity-seed',
  gas:['a','b'],
  operations:[
    { mode:'discontinuity', inputs:[{kind:'slice',slice_id:'a'},{kind:'slice',slice_id:'b'}], parameters:{verdict:'successor',reason:'road inherited'}, co_phase:'not-co' },
    { mode:'compose', inputs:[{kind:'slice',slice_id:'a'},{kind:'derived',output_id:'out-0001'}], parameters:{seams:[]}, co_phase:'co' },
    { mode:'maddclown', inputs:[{kind:'derived',output_id:'out-0002'}], parameters:{intervention:'global',context_text:'pressure this composition'}, co_phase:'co' }
  ]
};

test('canonical multi-chamber parity job is byte-stable', () => {
  const left=Core.runJob(PAYLOAD,PARITY_JOB);
  const right=Core.runJob(PAYLOAD,PARITY_JOB);
  assert.equal(Core.serializeRide(left),Core.serializeRide(right));
  assert.equal(Core.stableStringify(Core.semanticSnapshot(left)),Core.stableStringify(Core.semanticSnapshot(right)));
});

test('respin appends a deterministic descendant and preserves prior spin', () => {
  let ride = Core.runJob(PAYLOAD, job('spin-seed'));
  const firstCreative = ride.outputs[0].value.creative;
  ride = Core.runOperation(ride, PAYLOAD, {
    mode:'discontinuity',
    inputs:[{kind:'slice',slice_id:'a'},{kind:'slice',slice_id:'b'}],
    parameters:{verdict:'successor',reason:'road inherited',respin_of:'out-0001'},
    co_phase:'unknown'
  });
  assert.equal(ride.outputs.length, 2);
  assert.deepEqual(ride.outputs[0].value.creative, firstCreative);
  const replay = Core.runOperation(Core.runJob(PAYLOAD, job('spin-seed')), PAYLOAD, {
    mode:'discontinuity',
    inputs:[{kind:'slice',slice_id:'a'},{kind:'slice',slice_id:'b'}],
    parameters:{verdict:'successor',reason:'road inherited',respin_of:'out-0001'},
    co_phase:'unknown'
  });
  assert.deepEqual(ride.outputs[1].value.creative, replay.outputs[1].value.creative);
});
