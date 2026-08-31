const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const ROOT = path.resolve(__dirname, '..');
const CLI = path.join(ROOT, 'scripts', 'maxhinal-cli.js');
require('../artifacts/maxhinal/maxhinal-chambers.js');
const Core = require('../artifacts/maxhinal/maxhinal-core.js');
const { loadCorpus } = require('../scripts/maxhinal-cli.js');
const corpus = loadCorpus();
function run(args) { const result=spawnSync(process.execPath,[CLI,...args],{cwd:ROOT,encoding:'utf8'}); return {status:result.status,stdout:result.stdout,stderr:result.stderr}; }

test('CLI runs a no-gas QuantumSlinky job as JSON', () => {
  const result=run(['run','--mode','quantumslinky','--params','{"N":72,"m":5,"k":364}','--seed','demo','--json']);
  assert.equal(result.status,0,result.stderr);
  const ride=JSON.parse(result.stdout);
  assert.equal(ride.operations.length,1);
  assert.equal(ride.operations[0].mode,'quantumslinky');
  assert.equal(ride.outputs[0].value.gcd,1);
});

test('CLI rejects malformed JSON parameters and missing Slice refs', () => {
  const malformed=run(['run','--mode','quantumslinky','--params','{oops','--json']);
  assert.notEqual(malformed.status,0);
  assert.match(malformed.stderr,/Invalid JSON/);
  const missing=run(['run','--mode','compose','--gas','missing:slice','--json']);
  assert.notEqual(missing.status,0);
  assert.match(missing.stderr,/Missing Slice ref/);
});

test('CLI semantic result matches direct core result for the same job', () => {
  const dir=fs.mkdtempSync(path.join(os.tmpdir(),'maxhinal-parity-'));
  const job={format:'maxhinal-job/v0',seed:'parity',gas:[],operations:[{mode:'quantumslinky',inputs:[],parameters:{N:72,m:5,k:364},co_phase:'not-co'}]};
  const jobPath=path.join(dir,'job.json'); fs.writeFileSync(jobPath,JSON.stringify(job));
  const cli=run(['run','--job',jobPath,'--json']);
  assert.equal(cli.status,0,cli.stderr);
  const cliRide=JSON.parse(cli.stdout);
  const directRide=Core.runJob(corpus,job);
  assert.equal(Core.stableStringify(Core.semanticSnapshot(cliRide)),Core.stableStringify(Core.semanticSnapshot(directRide)));
});

test('browser-shaped ride can be continued by CLI and rehydrated without history loss', () => {
  const dir=fs.mkdtempSync(path.join(os.tmpdir(),'maxhinal-handoff-'));
  const browserRide=Core.runJob(corpus,{format:'maxhinal-job/v0',seed:'handoff',gas:[],operations:[{mode:'quantumslinky',inputs:[],parameters:{N:72,m:5},co_phase:'co'}]});
  const ridePath=path.join(dir,'browser.maxhinal.json'); fs.writeFileSync(ridePath,Core.serializeRide(browserRide));
  const cli=run(['continue','--ride',ridePath,'--mode','quantumslinky','--params','{"N":72,"m":7}','--co','co','--json']);
  assert.equal(cli.status,0,cli.stderr);
  const returned=Core.hydrateRide(JSON.parse(cli.stdout),corpus.meta);
  assert.equal(returned.operations.length,2);
  assert.equal(returned.operations[0].parameters.m,5);
  assert.equal(returned.operations[1].parameters.m,7);
  assert.equal(returned.operations[0].co_phase,'co');
  assert.equal(returned.operations[1].co_phase,'co');
});

test('CLI emits a human Markdown receipt', () => {
  const result=run(['run','--mode','quantumslinky','--params','{"N":72,"m":5}','--markdown']);
  assert.equal(result.status,0,result.stderr);
  assert.match(result.stdout,/MADD Hugh Jackman Maxhinal Ride Receipt/);
  assert.match(result.stdout,/Authority: none/);
  assert.match(result.stdout,/Promotion: NONE/);
});
