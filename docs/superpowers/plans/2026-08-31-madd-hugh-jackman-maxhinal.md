# MADD Hugh Jackman Maxhinal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the existing local-first Discontinuity Machine into one deterministic Daily Slice combustion engine whose complete rides can be executed, replayed, extended, and exchanged through the same semantic core from both the browser and a Node CLI.

**Architecture:** Keep the existing Discontinuity Machine HTML path stable, but move semantic behavior into two UMD/CommonJS-compatible modules: `maxhinal-modes.js` for pure chamber transforms and `maxhinal-core.js` for ride state, deterministic seed handling, input resolution, dispatch, receipts, and serialization. The generated Slice corpus becomes dual-environment data with a deterministic corpus digest; the browser and CLI become thin adapters over the same core and exchange append-only `.maxhinal.json` rides.

**Tech Stack:** Plain HTML/CSS/JavaScript; Node.js built-ins only (`node:fs`, `node:path`, `node:crypto`, `node:test`, `node:assert`); CommonJS + browser globals/UMD; no package manager dependency, framework, database, server, auth layer, network service, or external model call.

**Spec:** `docs/superpowers/specs/2026-08-31-madd-hugh-jackman-maxhinal-design.md`

## Global Constraints

- Preserve the existing artifact path `artifacts/2026-08-25/hugh-jackman-discontinuity-machine.html` if reasonably possible.
- Preserve local-first / `file://` usability and require zero network access for normal operation.
- Source Slice records are immutable historical gas; generated outputs remain distinct derived intermediates.
- Browser and CLI MUST call the same semantic core; no chamber rule may exist only in one adapter.
- Same corpus digest + same job + same operation sequence + same parameters + same seed MUST yield the same semantic outputs.
- Random-looking output MUST use a deterministic local PRNG and MUST carry seed position in the operation receipt; no cryptographic claim is implied.
- Operations append to one ride; respins, refusals, residuals, and MADDCL0WN interventions do not rewrite prior operations.
- `co` / `not-co` / `unknown` is a relational phase on an operation, not agreement, evidence, support, authority, consent outside scope, or canon.
- `authority` defaults to `none`; `promotion` defaults to `NONE`.
- `composition != evidence`, `endpoint != formation walk`, `math transform != claim about nature`, and `MADDCL0WN survival != promotion` remain hard boundaries.
- Invalid, unresolved, drifted, insufficient-input, and refused outcomes are typed and preserved rather than fabricated into completion.
- Do not execute Slice HTML/content, receive repository credentials, mutate source Slice Markdown, open PRs from the Maxhinal, or call external services by default.
- V0 contains all eight bounded chambers: Discontinuity, Walk Braid, Fiber, Compose, Pressure Crucible, Moving Origin, QuantumSlinky, MADDCL0WN.
- Use Node built-ins only; do not add `package.json` merely for this implementation.
- Follow TDD for every semantic behavior change; use `node --test` for the repository-local test harness.

---

## File Structure

### Existing files to modify

- `scripts/build-slice-corpus.js` — keep Markdown-index parsing, add deterministic corpus identity and emit one dual-environment generated payload.
- `generated/slice-corpus.js` — generated browser/Node corpus payload; never hand-edit except through the builder fixture produced in tests.
- `artifacts/2026-08-25/hugh-jackman-discontinuity-machine.js` — become a compatibility shim exposing the legacy `HJDMCore` names through Maxhinal modules so old roads do not break.
- `artifacts/2026-08-25/hugh-jackman-discontinuity-machine.html` — become the human Maxhinal bench while retaining the historical path.
- `artifacts/README.md` — narrow the primary artifact species toward usable Slice-powered instruments without deleting prior static companions.

### New implementation files

- `artifacts/maxhinal/maxhinal-modes.js` — pure, deterministic chamber functions and reusable legacy Discontinuity helpers; no file I/O and no ride mutation.
- `artifacts/maxhinal/maxhinal-core.js` — seed/PRNG, ride model, source/derived input resolution, dispatch, append-only operations/outputs/residuals/bad-spins, drift handling, stable serialization.
- `artifacts/maxhinal/README.md` — concise local human + agent usage contract and authority boundary.
- `scripts/maxhinal-cli.js` — Node CLI/JSON adapter; loads generated corpus + core, executes jobs or continues rides, emits JSON/Markdown.

### New tests

- `tests/build-slice-corpus.test.js` — deterministic digest and browser/Node generated-payload behavior.
- `tests/maxhinal-modes.test.js` — legacy behavior plus all chamber math/transform behavior.
- `tests/maxhinal-core.test.js` — deterministic ride semantics, receipts, bad spins, input ancestry, drift, import/export.
- `tests/maxhinal-cli.test.js` — valid/malformed jobs, missing Slice refs, continuation, output formats, exit status, CLI/core parity.
- `tests/maxhinal-browser-contract.test.js` — local-script paths, no required network fetch, semantic logic absent from adapter, accessibility/static contract checks.

### Public interfaces locked by this plan

`generated/slice-corpus.js` exports/sets:

```js
{
  records: Array<SliceRecord>,
  meta: {
    format: 'daily-slice-corpus/v1',
    digest: 'sha256:<hex>',
    record_count: Number
  }
}
```

Browser globals:

```js
window.DAILY_SLICE = payload.records;
window.DAILY_SLICE_META = payload.meta;
```

Node:

```js
const payload = require('../generated/slice-corpus.js');
```

`maxhinal-modes.js` exports:

```js
{
  MODES,
  normalize,
  searchCorpus,
  suggestRelatives,
  pressureQuestion,
  spinOutput,
  runDiscontinuity,
  runWalkBraid,
  runFiber,
  runCompose,
  runPressure,
  runMovingOrigin,
  runQuantumSlinky,
  runMaddclown
}
```

Every `run*` chamber receives:

```js
{
  corpus,          // SliceRecord[]
  resolvedInputs,  // [{ ref, value, provenance }]
  parameters,      // plain object validated by the chamber
  rng,             // deterministic () => number in [0,1)
  operation        // current operation metadata
}
```

and returns:

```js
{
  status: 'OK' | 'UNRESOLVED' | 'REFUSED' | 'INSUFFICIENT_INPUT' | 'INVALID_MODEL',
  projection: Object | null,
  residuals: Array<{ code, message, details? }>,
  bad_spins: Array<{ kind, text, reason? }>
}
```

`maxhinal-core.js` exports:

```js
{
  FORMAT,
  JOB_FORMAT,
  normalizeSeed,
  hashSeed,
  createRng,
  stableStringify,
  createRide,
  hydrateRide,
  resolveInputRefs,
  appendBadSpin,
  runOperation,
  runJob,
  semanticSnapshot,
  serializeRide,
  markdownReceipt
}
```

Input refs use exactly two v0 forms:

```js
{ kind: 'slice', slice_id: '2026-08-31:the-walk-braid' }
{ kind: 'derived', output_id: 'out-0001' }
```

Operation IDs and output IDs are deterministic ordinal IDs inside a ride:

```text
op-0001, op-0002, ...
out-0001, out-0002, ...
res-0001, res-0002, ...
bad-0001, bad-0002, ...
```

---

### Task 1: Give the Slice corpus a deterministic identity and dual browser/Node export

**Files:**
- Modify: `scripts/build-slice-corpus.js`
- Regenerate: `generated/slice-corpus.js`
- Create: `tests/build-slice-corpus.test.js`

**Interfaces:**
- Consumes: existing `parseIndex(markdown, indexPath)` and repository `slices/**/index.md` files.
- Produces: `canonicalizeRows(rows) -> string`, `digestRows(rows) -> 'sha256:<hex>'`, and `build(root) -> { target, count, digest }`; generated module exports `{ records, meta }` in Node and defines `DAILY_SLICE` / `DAILY_SLICE_META` in a browser.

- [ ] **Step 1: Write the failing corpus identity tests**

Create `tests/build-slice-corpus.test.js` with Node built-ins only:

```js
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const { parseIndex, canonicalizeRows, digestRows, build } = require('../scripts/build-slice-corpus.js');

function makeRoot() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'daily-slice-corpus-'));
  const day = path.join(root, 'slices', '2026', '08', '2026-08-31');
  fs.mkdirSync(day, { recursive:true });
  fs.writeFileSync(path.join(day, 'index.md'), [
    '# 2026-08-31',
    '',
    '### [Alpha](alpha.md)',
    '',
    'First summary.',
    '',
    'The line worth carrying is **ALPHA LAW.**',
    '',
    '### [Beta](beta.md)',
    '',
    'Second summary.'
  ].join('\n'));
  return root;
}

test('canonical corpus digest is stable for the same indexed content', () => {
  const rows = [
    { id:'2026-08-31:alpha', date:'2026-08-31', title:'Alpha', path:'a', summary:'x', carry:'', text:'x' },
    { id:'2026-08-31:beta', date:'2026-08-31', title:'Beta', path:'b', summary:'y', carry:'', text:'y' }
  ];
  assert.equal(canonicalizeRows(rows), canonicalizeRows(rows.map((row) => ({ ...row }))));
  assert.match(digestRows(rows), /^sha256:[0-9a-f]{64}$/);
  assert.equal(digestRows(rows), digestRows(rows.map((row) => ({ ...row }))));
});

test('generated corpus is usable from Node and browser globals', () => {
  const root = makeRoot();
  const result = build(root);
  assert.equal(result.count, 2);
  assert.match(result.digest, /^sha256:[0-9a-f]{64}$/);

  delete require.cache[require.resolve(result.target)];
  const nodePayload = require(result.target);
  assert.equal(nodePayload.meta.digest, result.digest);
  assert.equal(nodePayload.meta.record_count, 2);
  assert.equal(nodePayload.records[0].id, '2026-08-31:alpha');

  const source = fs.readFileSync(result.target, 'utf8');
  const sandbox = { globalThis:{} };
  vm.runInNewContext(source, sandbox);
  assert.equal(sandbox.globalThis.DAILY_SLICE_META.digest, result.digest);
  assert.equal(sandbox.globalThis.DAILY_SLICE.length, 2);
});
```

- [ ] **Step 2: Run the corpus tests and verify the new exports fail**

Run:

```bash
node --test tests/build-slice-corpus.test.js
```

Expected: FAIL because `canonicalizeRows` / `digestRows` are not exported and the generated file is still browser-only.

- [ ] **Step 3: Implement canonical serialization, SHA-256 digest, and dual-environment output**

Modify `scripts/build-slice-corpus.js` to import `node:crypto` and add:

```js
const crypto = require('node:crypto');

function canonicalizeRows(rows) {
  return JSON.stringify(rows.map((row) => ({
    id: row.id,
    date: row.date,
    title: row.title,
    path: row.path,
    summary: row.summary,
    carry: row.carry,
    text: row.text
  })));
}

function digestRows(rows) {
  const hex = crypto.createHash('sha256').update(canonicalizeRows(rows), 'utf8').digest('hex');
  return `sha256:${hex}`;
}
```

Change `build(root)` so its generated source follows this exact shape:

```js
const digest = digestRows(rows);
const payload = { records:rows, meta:{ format:'daily-slice-corpus/v1', digest, record_count:rows.length } };
const source = [
  '/* generated by scripts/build-slice-corpus.js; do not hand-edit */',
  '(function(root, factory) {',
  '  const payload = factory();',
  "  if (typeof module === 'object' && module.exports) module.exports = payload;",
  '  root.DAILY_SLICE = payload.records;',
  '  root.DAILY_SLICE_META = payload.meta;',
  `})(typeof globalThis !== 'undefined' ? globalThis : this, function() { return ${JSON.stringify(payload, null, 2)}; });`,
  ''
].join('\n');
```

Return `{ target, count:rows.length, digest }` and export `{ parseIndex, canonicalizeRows, digestRows, build }`.

- [ ] **Step 4: Run the focused corpus tests**

Run:

```bash
node --test tests/build-slice-corpus.test.js
```

Expected: PASS, 2 tests.

- [ ] **Step 5: Regenerate the real corpus and verify Node/browser metadata**

Run:

```bash
node scripts/build-slice-corpus.js .
node -e "const c=require('./generated/slice-corpus.js'); if(!c.meta.digest.startsWith('sha256:')) process.exit(1); console.log(c.meta.record_count,c.meta.digest)"
```

Expected: builder reports the indexed record count; the second command prints the same record count and a `sha256:` digest.

- [ ] **Step 6: Commit Task 1**

```bash
git add scripts/build-slice-corpus.js generated/slice-corpus.js tests/build-slice-corpus.test.js
git commit -m "feat: add deterministic Slice corpus identity"
```

---

### Task 2: Extract legacy Discontinuity semantics into a reusable pure mode module

**Files:**
- Create: `artifacts/maxhinal/maxhinal-modes.js`
- Modify: `artifacts/2026-08-25/hugh-jackman-discontinuity-machine.js`
- Create: `tests/maxhinal-modes.test.js`

**Interfaces:**
- Consumes: existing `HJDMCore` behavior from `hugh-jackman-discontinuity-machine.js`.
- Produces: UMD/CommonJS `MaxhinalModes` module with legacy helpers and `runDiscontinuity(context)`; old `HJDMCore` remains available as a compatibility view of the same functions.

- [ ] **Step 1: Write regression tests for existing search, relatives, pressure, and creative refusal**

Create `tests/maxhinal-modes.test.js` beginning with:

```js
const test = require('node:test');
const assert = require('node:assert/strict');
const Modes = require('../artifacts/maxhinal/maxhinal-modes.js');

const CORPUS = [
  { id:'a', date:'2026-08-30', title:'Carrier Road', summary:'same carrier survives', carry:'keep the road', text:'carrier lineage road' },
  { id:'b', date:'2026-08-31', title:'Road Child', summary:'successor inherits road', carry:'take the seed not the throne', text:'carrier lineage successor' },
  { id:'c', date:'2026-08-31', title:'Unrelated Weather', summary:'rain', carry:'', text:'weather cloud' }
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
```

- [ ] **Step 2: Run the mode regression tests and verify the module is missing**

Run:

```bash
node --test tests/maxhinal-modes.test.js
```

Expected: FAIL with module-not-found for `artifacts/maxhinal/maxhinal-modes.js`.

- [ ] **Step 3: Create `maxhinal-modes.js` as a UMD/CommonJS module and move the legacy helpers unchanged where possible**

Use this module shell:

```js
(function(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.MaxhinalModes = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function() {
  // normalize/searchCorpus/suggestRelatives/PRESSURE/HAIKU/BANGERS/LAWS/spinOutput
  // are moved from the existing HJDM core with behavior preserved.

  function runDiscontinuity(context) {
    const inputs = context.resolvedInputs || [];
    if (inputs.length < 2) {
      return {
        status:'INSUFFICIENT_INPUT',
        projection:null,
        residuals:[{ code:'INSUFFICIENT_INPUT', message:'Discontinuity requires two inputs.' }],
        bad_spins:[]
      };
    }
    const verdict = context.parameters.verdict || 'unresolved';
    const reason = context.parameters.reason || '';
    const spin = spinOutput({ verdict, reason, avoidKind:context.parameters.avoid_kind }, context.rng);
    return {
      status:'OK',
      projection:{
        verdict,
        reason,
        source_refs:inputs.map((entry) => entry.provenance.slice_id || entry.ref.output_id),
        pressure_question:pressureQuestion(verdict),
        creative:spin
      },
      residuals:[],
      bad_spins:[]
    };
  }

  return {
    MODES:{ discontinuity:runDiscontinuity },
    normalize,
    searchCorpus,
    suggestRelatives,
    pressureQuestion,
    spinOutput,
    runDiscontinuity
  };
});
```

Do not add seeded PRNG logic here; `spinOutput` receives `rng` from the core so the mode remains pure.

- [ ] **Step 4: Replace the old HJDM JS implementation with a compatibility shim**

`artifacts/2026-08-25/hugh-jackman-discontinuity-machine.js` should not duplicate semantics. Make it require/read `MaxhinalModes` and expose only the legacy names:

```js
(function(root, factory) {
  const modes = typeof module === 'object' && module.exports
    ? require('../maxhinal/maxhinal-modes.js')
    : root.MaxhinalModes;
  const api = factory(modes);
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.HJDMCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function(modes) {
  if (!modes) throw new Error('MaxhinalModes is required');
  return {
    searchCorpus:modes.searchCorpus,
    suggestRelatives:modes.suggestRelatives,
    pressureQuestion:modes.pressureQuestion,
    spinOutput:modes.spinOutput
  };
});
```

- [ ] **Step 5: Run mode tests plus a direct compatibility assertion**

Run:

```bash
node --test tests/maxhinal-modes.test.js
node - <<'NODE'
const legacy = require('./artifacts/2026-08-25/hugh-jackman-discontinuity-machine.js');
const modes = require('./artifacts/maxhinal/maxhinal-modes.js');
if (legacy.searchCorpus !== modes.searchCorpus) process.exit(1);
if (legacy.spinOutput !== modes.spinOutput) process.exit(1);
NODE
```

Expected: tests PASS; compatibility assertion exits 0.

- [ ] **Step 6: Commit Task 2**

```bash
git add artifacts/maxhinal/maxhinal-modes.js artifacts/2026-08-25/hugh-jackman-discontinuity-machine.js tests/maxhinal-modes.test.js
git commit -m "refactor: extract reusable Maxhinal modes"
```

---

### Task 3: Build the deterministic ride core, receipts, ancestry, and corpus drift handling

**Files:**
- Create: `artifacts/maxhinal/maxhinal-core.js`
- Create: `tests/maxhinal-core.test.js`

**Interfaces:**
- Consumes: `MaxhinalModes.MODES`, corpus payload `{ records, meta }`, and v0 input refs.
- Produces: deterministic ride creation/continuation, source + derived input resolution, operation dispatch, append-only outputs/residuals/bad spins, semantic snapshot, stable JSON serialization, Markdown receipt, explicit `CORPUS_DRIFT` status.

- [ ] **Step 1: Write failing deterministic ride tests**

Create `tests/maxhinal-core.test.js` with:

```js
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
```

- [ ] **Step 2: Run the core tests and verify module-not-found**

Run:

```bash
node --test tests/maxhinal-core.test.js
```

Expected: FAIL because `maxhinal-core.js` does not exist.

- [ ] **Step 3: Implement deterministic seed primitives and stable serialization**

Create `artifacts/maxhinal/maxhinal-core.js` with a UMD/CommonJS shell that imports `MaxhinalModes` and add these exact primitives:

```js
const FORMAT = 'maxhinal/v0';
const JOB_FORMAT = 'maxhinal-job/v0';

function normalizeSeed(seed) {
  return String(seed == null ? '0' : seed);
}

function hashSeed(seed) {
  const text = normalizeSeed(seed);
  let h = 2166136261 >>> 0;
  for (let i = 0; i < text.length; i += 1) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

function createRng(seed, offset=0) {
  let state = hashSeed(seed);
  let position = 0;
  function nextRaw() {
    state = (state + 0x6D2B79F5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    position += 1;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
  while (position < offset) nextRaw();
  return nextRaw;
}

function stableValue(value) {
  if (Array.isArray(value)) return value.map(stableValue);
  if (value && typeof value === 'object') {
    return Object.keys(value).sort().reduce((acc, key) => {
      acc[key] = stableValue(value[key]);
      return acc;
    }, {});
  }
  return value;
}

function stableStringify(value) {
  return JSON.stringify(stableValue(value), null, 2);
}
```

- [ ] **Step 4: Implement the v0 ride and input model**

Use deterministic ordinal IDs and no implicit wall-clock timestamps:

```js
function createRide(corpusMeta, seed='0') {
  return {
    format:FORMAT,
    ride_id:`ride-${hashSeed(`${corpusMeta.digest}|${normalizeSeed(seed)}`).toString(16).padStart(8,'0')}`,
    created_at:null,
    corpus:{ ...corpusMeta },
    replay:{ status:'EXACT' },
    seed:normalizeSeed(seed),
    gas:[],
    operations:[],
    outputs:[],
    residuals:[],
    bad_spins:[],
    authority:'none',
    promotion:'NONE'
  };
}

function ordinal(prefix, index) {
  return `${prefix}-${String(index + 1).padStart(4, '0')}`;
}
```

`resolveInputRefs(ride, corpus, refs)` must:

- resolve `{kind:'slice', slice_id}` only from `corpus`;
- resolve `{kind:'derived', output_id}` only from `ride.outputs`;
- return `INSUFFICIENT_INPUT` residual data for missing refs rather than inventing a value;
- preserve provenance as `{kind:'slice',slice_id,path}` or `{kind:'derived',output_id,source_operation_id}`.

- [ ] **Step 5: Implement immutable `runOperation` dispatch and append-only record creation**

`runOperation(ride, corpusPayload, request)` must clone semantic arrays, validate the mode from `Modes.MODES`, compute `seed_offset = ride.operations.length`, call the mode with `createRng(ride.seed, seed_offset)`, and append records.

Use this operation shape:

```js
{
  operation_id:'op-0001',
  mode:'discontinuity',
  inputs:[{kind:'slice',slice_id:'a'}],
  parameters:{},
  co_phase:'unknown',
  seed_offset:0,
  output_refs:['out-0001'],
  residual_refs:[],
  receipt:{ authority:'none', promotion:'NONE' }
}
```

Each mode projection becomes one output record:

```js
{
  output_id:'out-0001',
  kind:'derived',
  mode:'discontinuity',
  status:'OK',
  source_operation_id:'op-0001',
  source_refs:[...request.inputs],
  value:modeResult.projection
}
```

Each residual and bad spin receives its own deterministic ordinal ID and source operation/output reference.

- [ ] **Step 6: Implement `runJob`, drift-aware hydration, snapshots, and receipts**

`runJob(corpusPayload, job, existingRide)` must:

1. validate `job.format === JOB_FORMAT` when present;
2. create a ride or hydrate the provided ride;
3. register listed `job.gas` as `{kind:'slice',slice_id}` gas refs without duplicating existing refs;
4. execute operations sequentially through `runOperation`;
5. return the new ride.

`hydrateRide(ride, localCorpusMeta)` must preserve the ride's original `corpus` field and set only:

```js
replay: {
  status: ride.corpus.digest === localCorpusMeta.digest ? 'EXACT' : 'CORPUS_DRIFT',
  local_digest: localCorpusMeta.digest
}
```

`semanticSnapshot(ride)` must omit only adapter-local presentation state; v0 ride fields above are semantic except optional `created_at`, so return the ride with `created_at:null`.

`serializeRide(ride)` returns `stableStringify(ride) + '\n'`.

`markdownReceipt(ride)` must include at minimum ride/corpus/seed, gas refs, ordered operations, residuals/refusals/bad spins, and literal lines:

```text
Authority: none
Promotion: NONE
```

- [ ] **Step 7: Run focused core + mode tests**

Run:

```bash
node --test tests/maxhinal-core.test.js tests/maxhinal-modes.test.js
```

Expected: PASS.

- [ ] **Step 8: Commit Task 3**

```bash
git add artifacts/maxhinal/maxhinal-core.js tests/maxhinal-core.test.js
git commit -m "feat: add deterministic Maxhinal ride core"
```

---

### Task 4: Add Walk Braid, Fiber, and Compose as bounded pure chambers

**Files:**
- Modify: `artifacts/maxhinal/maxhinal-modes.js`
- Modify: `tests/maxhinal-modes.test.js`
- Modify: `tests/maxhinal-core.test.js`

**Interfaces:**
- Consumes: resolved inputs and parameters from `maxhinal-core.js`.
- Produces: `runWalkBraid`, `runFiber`, `runCompose`, and registrations under `MODES` using the common chamber result shape.

- [ ] **Step 1: Add failing Walk Braid tests**

Append:

```js
test('Walk Braid preserves path order separately from endpoint', () => {
  const result = Modes.runWalkBraid({
    resolvedInputs:[], corpus:CORPUS, rng:() => 0.5, operation:{operation_id:'op-1'},
    parameters:{ steps:[
      { ref:'a', verb:'predict', co_phase:'not-co' },
      { ref:'a', verb:'compose', co_phase:'not-co' },
      { ref:'b', verb:'compose', co_phase:'co' },
      { ref:'b', verb:'construct', co_phase:'co' }
    ] }
  });
  assert.equal(result.status, 'OK');
  assert.deepEqual(result.projection.endpoint, { verb:'construct', co_phase:'co' });
  assert.deepEqual(result.projection.path_word, ['predict:not-co','compose:not-co','compose:co','construct:co']);
});

test('Walk Braid does not claim independent grid moves are noncommutative', () => {
  const result = Modes.runWalkBraid({
    resolvedInputs:[], corpus:CORPUS, rng:() => 0.5, operation:{operation_id:'op-1'},
    parameters:{ steps:[{ref:'a',verb:'predict',co_phase:'not-co'}], operator_model:'independent-grid' }
  });
  assert.equal(result.projection.commuting_diagnostic, 'COMMUTES_WHEN_INDEPENDENT');
});
```

- [ ] **Step 2: Add failing Fiber tests**

Append:

```js
test('Fiber preserves multiple compatible roads and separates representative policy', () => {
  const inputs = CORPUS.slice(0,2).map((value) => ({
    ref:{kind:'slice',slice_id:value.id}, value, provenance:{slice_id:value.id}
  }));
  const result = Modes.runFiber({
    corpus:CORPUS, resolvedInputs:inputs, rng:() => 0.5, operation:{operation_id:'op-1'},
    parameters:{ target:'carrier road', representative_slice_id:'b' }
  });
  assert.equal(result.status, 'OK');
  assert.deepEqual(result.projection.compatible_refs.sort(), ['a','b']);
  assert.equal(result.projection.representative.ref, 'b');
  assert.equal(result.projection.representative.basis, 'declared-policy');
});
```

- [ ] **Step 3: Add failing Compose tests**

Append:

```js
test('Compose retains source refs, ordering, and declared unresolved seams', () => {
  const inputs = CORPUS.slice(0,2).map((value) => ({
    ref:{kind:'slice',slice_id:value.id}, value, provenance:{slice_id:value.id}
  }));
  const result = Modes.runCompose({
    corpus:CORPUS, resolvedInputs:inputs, rng:() => 0.5, operation:{operation_id:'op-1'},
    parameters:{ order:['b','a'], seams:[{between:['a','b'],status:'unresolved',note:'identity disagreement'}] }
  });
  assert.equal(result.status, 'OK');
  assert.deepEqual(result.projection.source_order, ['b','a']);
  assert.equal(result.projection.seams[0].status, 'unresolved');
  assert.equal(result.projection.posture, 'COMPOSITION_NOT_EVIDENCE');
});
```

- [ ] **Step 4: Run the mode tests and verify the three chamber functions fail**

Run:

```bash
node --test tests/maxhinal-modes.test.js
```

Expected: FAIL because the new `run*` functions do not exist.

- [ ] **Step 5: Implement Walk Braid with strict verb/co validation**

Add constants:

```js
const VERBS = new Set(['predict','compose','construct','create']);
const CO_PHASES = new Set(['co','not-co','unknown']);
```

`runWalkBraid` returns `INVALID_MODEL` if any step has an unknown verb/co value. Otherwise return:

```js
projection:{
  endpoint:{ verb:last.verb, co_phase:last.co_phase },
  path_word:steps.map((step) => `${step.verb}:${step.co_phase}`),
  steps:steps.map((step, index) => ({ ...step, index })),
  commuting_diagnostic: parameters.operator_model === 'co-sensitive'
    ? 'ORDER_MAY_MATTER_BY_DECLARED_MODEL'
    : 'COMMUTES_WHEN_INDEPENDENT'
}
```

Do not infer topological/noncommutative braid structure from the 4×2 grid.

- [ ] **Step 6: Implement Fiber as a target-relative token-overlap projection**

Reuse `normalize` and token filtering. For each resolved input, score overlap between `parameters.target` tokens and the Slice/derived textual fields. Keep every score `> 0` in `compatible_refs`; keep zero-score inputs in `exclusions` with reason `NO_TOKEN_OVERLAP`. If target is empty, return `UNRESOLVED` and preserve all inputs as `compatible_refs` rather than choosing one.

Representative is optional and must be separate metadata:

```js
representative: parameters.representative_slice_id
  ? { ref:parameters.representative_slice_id, basis:'declared-policy' }
  : null
```

- [ ] **Step 7: Implement Compose without flattening source seams**

Resolve an explicit `parameters.order` against source refs, defaulting to resolved-input order. Emit:

```js
projection:{
  kind:'composition/v0',
  source_order,
  parts:ordered.map((entry) => ({
    ref:entry.provenance.slice_id || entry.ref.output_id,
    title:entry.value.title || entry.value.kind || 'derived',
    excerpt:entry.value.summary || entry.value.text || stableText(entry.value)
  })),
  seams:Array.isArray(parameters.seams) ? parameters.seams : [],
  posture:'COMPOSITION_NOT_EVIDENCE'
}
```

Use a local deterministic `stableText(value)` helper that JSON-stringifies object keys in sorted order; do not depend on the core module to avoid circular coupling.

- [ ] **Step 8: Register the three modes and run mode/core integration tests**

Add to `MODES`:

```js
{
  discontinuity:runDiscontinuity,
  'walk-braid':runWalkBraid,
  fiber:runFiber,
  compose:runCompose
}
```

Add one core integration test executing `compose` after `discontinuity` using `{kind:'derived',output_id:'out-0001'}` and assert the second operation preserves derived ancestry.

Run:

```bash
node --test tests/maxhinal-modes.test.js tests/maxhinal-core.test.js
```

Expected: PASS.

- [ ] **Step 9: Commit Task 4**

```bash
git add artifacts/maxhinal/maxhinal-modes.js tests/maxhinal-modes.test.js tests/maxhinal-core.test.js
git commit -m "feat: add walk Fiber and Compose chambers"
```

---

### Task 5: Add Pressure, Moving Origin, QuantumSlinky, MADDCL0WN, and the global counterpressure lever

**Files:**
- Modify: `artifacts/maxhinal/maxhinal-modes.js`
- Modify: `artifacts/maxhinal/maxhinal-core.js`
- Modify: `tests/maxhinal-modes.test.js`
- Modify: `tests/maxhinal-core.test.js`

**Interfaces:**
- Consumes: the common mode context and prior derived outputs.
- Produces: `runPressure`, `runMovingOrigin`, `runQuantumSlinky`, `runMaddclown`; all eight chamber names registered; `runOperation` supports global MADDCL0WN targeting through ordinary derived refs without destructive replacement.

- [ ] **Step 1: Write failing Pressure and Moving Origin tests**

Append to `tests/maxhinal-modes.test.js`:

```js
test('Pressure returns the smallest declared discriminator for a candidate kind', () => {
  const result = Modes.runPressure({
    corpus:CORPUS,
    resolvedInputs:[{ref:{kind:'slice',slice_id:'a'},value:CORPUS[0],provenance:{slice_id:'a'}}],
    parameters:{ candidate_kind:'lineage' }, rng:() => 0.5, operation:{operation_id:'op-1'}
  });
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
  const result = Modes.runMovingOrigin({
    corpus:CORPUS, resolvedInputs:inputs, parameters:{ origin_slice_id:'b' }, rng:() => 0.5, operation:{}
  });
  assert.equal(result.status, 'OK');
  assert.deepEqual(result.projection.before.map((x) => x.ref), ['a']);
  assert.equal(result.projection.now.ref, 'b');
  assert.equal(result.projection.after[0].ref, 'c');
  assert.equal(CORPUS[0].date, '2026-08-30');
});
```

Because fixture `c` currently has the same date as `b`, update only the fixture date to `2026-09-01` in this test file so the `after` assertion is meaningful.

- [ ] **Step 2: Write failing QuantumSlinky exact-math tests**

Append:

```js
test('QuantumSlinky computes gcd components orbit and winding exactly', () => {
  const result = Modes.runQuantumSlinky({
    corpus:CORPUS,
    resolvedInputs:[{ref:{kind:'slice',slice_id:'a'},value:CORPUS[0],provenance:{slice_id:'a'}}],
    parameters:{ N:72, m:5, k:364, numeric_sources:{N:'a',m:'a',k:'a'} },
    rng:() => 0.5, operation:{}
  });
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
  const twisted = Modes.runQuantumSlinky({
    corpus:CORPUS, resolvedInputs:[], rng:() => 0.5, operation:{},
    parameters:{N:72,m:5,model:'twisted-boundary',L:2,n:1,mode_k:3}
  });
  assert.ok(Number.isFinite(twisted.projection.twisted_resonance.kappa));
});
```

- [ ] **Step 3: Write failing MADDCL0WN and append-only global-lever tests**

Append to modes tests:

```js
test('MADDCL0WN can lawfully refuse a collision with no useful overlap', () => {
  const inputs = [CORPUS[0], CORPUS[2]].map((value) => ({ref:{kind:'slice',slice_id:value.id},value,provenance:{slice_id:value.id}}));
  const result = Modes.runMaddclown({ corpus:CORPUS, resolvedInputs:inputs, parameters:{}, rng:() => 0, operation:{} });
  assert.ok(['REFUSED','UNRESOLVED'].includes(result.status));
  assert.equal(result.projection == null || result.projection.promotion === 'NONE', true);
});
```

Append to core tests:

```js
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
```

- [ ] **Step 4: Run focused tests and verify failures**

Run:

```bash
node --test tests/maxhinal-modes.test.js tests/maxhinal-core.test.js
```

Expected: FAIL for missing chamber functions/registrations.

- [ ] **Step 5: Implement Pressure with fixed, inspectable candidate questions**

Use a constant map:

```js
const PRESSURE_CANDIDATES = {
  lineage:'What attributable road or carrier distinguishes lineage from resemblance?',
  identity:'What persistent carrier makes this one identity rather than two similar occurrences?',
  causation:'What observation would distinguish causal influence from temporal or thematic adjacency?',
  composition:'What disagreement or missing source would most change this composition?',
  model:'What measurement would discriminate this model from the nearest simpler model?'
};
```

If `candidate_kind` is absent/unknown, return `REFUSED` with residual code `NO_DISCRIMINATOR`. Otherwise return projection `{ question, candidate_probe:question, counterpressure:'PROMOTION_NOT_GRANTED', promotion:'NONE' }`.

- [ ] **Step 6: Implement Moving Origin as a selected-road temporal projection**

Require `origin_slice_id` to resolve among the selected inputs. Compare ISO `YYYY-MM-DD` strings only when dates are present; preserve undated inputs under `unavailable`. Emit refs + original dates, never new occurrence dates:

```js
projection:{
  origin_ref,
  before:[...],
  now:{ ref:origin_ref, date:origin.date },
  after:[...],
  unavailable:[...],
  posture:'NEW_CURRENT_NOT_OLD_CURRENT_REWRITTEN'
}
```

- [ ] **Step 7: Implement QuantumSlinky with integer validation and explicit model gating**

Add Euclidean `gcd(a,b)` over positive safe integers and validate:

```js
Number.isSafeInteger(N) && N > 0
Number.isSafeInteger(m)
```

Normalize `m` into `[0,N)` for modular outputs while retaining `m_declared` separately.

Compute:

```js
const d = gcd(N, normalizedM);
const orbitLength = N / d;
const winding = Number.isSafeInteger(k)
  ? { w:Math.floor(k / N), r:((k % N) + N) % N }
  : null;
```

For `model === 'twisted-boundary'`, require finite `L > 0`, integer `n`, and integer `mode_k`; compute:

```js
const kappa = (2 * Math.PI / L) * (n + (mode_k * normalizedM / N));
```

Always emit source labels from `parameters.numeric_sources || {}` and posture `MATH_TRANSFORM_NOT_CLAIM_ABOUT_NATURE`.

- [ ] **Step 8: Implement MADDCL0WN as a chamber over selected source/derived material**

For 2+ inputs, compute token overlap using the same inspectable tokenization as relatives. If overlap is zero, return `REFUSED` with `NO_SURVIVING_RELATION`. Otherwise use deterministic `rng` to select one hostile prompt from a fixed list derived from the overlap:

```js
[
  'What resemblance here is pretending to be ancestry?',
  'What would make this relation fail cleanly?',
  'Which source road is doing the most unsupported work?',
  'What survives if the funniest interpretation is wrong?'
]
```

Return `{ overlap_tokens, pressure_question, promotion:'NONE' }`. If a single derived target is supplied by the global lever, use its stable JSON text as one side and any declared `parameters.context_text` as the other; when context is absent, return `UNRESOLVED` with a hostile question targeting the output itself rather than fabricating overlap.

- [ ] **Step 9: Register all eight modes and run focused tests**

`MODES` must now have exact keys:

```js
[
  'discontinuity',
  'walk-braid',
  'fiber',
  'compose',
  'pressure',
  'moving-origin',
  'quantumslinky',
  'maddclown'
]
```

Run:

```bash
node --test tests/maxhinal-modes.test.js tests/maxhinal-core.test.js
```

Expected: PASS.

- [ ] **Step 10: Commit Task 5**

```bash
git add artifacts/maxhinal/maxhinal-modes.js artifacts/maxhinal/maxhinal-core.js tests/maxhinal-modes.test.js tests/maxhinal-core.test.js
git commit -m "feat: complete Maxhinal v0 chamber set"
```

---

### Task 6: Add the agent CLI / JSON bench over the shared core

**Files:**
- Create: `scripts/maxhinal-cli.js`
- Create: `tests/maxhinal-cli.test.js`

**Interfaces:**
- Consumes: generated corpus payload, `maxhinal-core.js`, a direct one-operation invocation or JSON job, and optional existing `.maxhinal.json` ride.
- Produces: JSON ride or Markdown receipt to stdout/file; nonzero exit status + stderr on invalid invocation.

- [ ] **Step 1: Write failing CLI tests using child processes**

Create `tests/maxhinal-cli.test.js`:

```js
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const ROOT = path.resolve(__dirname, '..');
const CLI = path.join(ROOT, 'scripts', 'maxhinal-cli.js');

function run(args) {
  return spawnSync(process.execPath, [CLI, ...args], { cwd:ROOT, encoding:'utf8' });
}

test('CLI runs a JSON job and emits a parseable ride', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'maxhinal-cli-'));
  const job = path.join(dir, 'job.json');
  fs.writeFileSync(job, JSON.stringify({
    format:'maxhinal-job/v0', seed:'cli-seed',
    gas:[],
    operations:[{ mode:'quantumslinky', inputs:[], parameters:{N:72,m:5,k:364}, co_phase:'not-co' }]
  }));
  const result = run(['run','--job',job,'--json']);
  assert.equal(result.status, 0, result.stderr);
  const ride = JSON.parse(result.stdout);
  assert.equal(ride.operations[0].mode, 'quantumslinky');
  assert.equal(ride.outputs[0].value.orbit_length, 72);
});

test('CLI rejects malformed job JSON with nonzero status', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'maxhinal-cli-'));
  const job = path.join(dir, 'bad.json');
  fs.writeFileSync(job, '{not-json');
  const result = run(['run','--job',job,'--json']);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /invalid json/i);
});

test('CLI reports missing Slice refs rather than fabricating gas', () => {
  const result = run(['run','--mode','discontinuity','--gas','missing-a,missing-b','--seed','x','--json']);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /missing slice/i);
});

test('CLI can continue a browser-compatible ride file', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'maxhinal-cli-'));
  const ridePath = path.join(dir, 'ride.maxhinal.json');
  const first = run(['run','--mode','quantumslinky','--params','{"N":72,"m":5}','--seed','x','--json']);
  assert.equal(first.status, 0, first.stderr);
  fs.writeFileSync(ridePath, first.stdout);
  const second = run(['continue','--ride',ridePath,'--mode','quantumslinky','--params','{"N":72,"m":7}','--json']);
  assert.equal(second.status, 0, second.stderr);
  const ride = JSON.parse(second.stdout);
  assert.equal(ride.operations.length, 2);
});

test('CLI Markdown receipt preserves authority boundary', () => {
  const result = run(['run','--mode','quantumslinky','--params','{"N":72,"m":5}','--seed','x','--markdown']);
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Authority: none/);
  assert.match(result.stdout, /Promotion: NONE/);
});
```

- [ ] **Step 2: Run CLI tests and verify module-not-found / invocation failure**

Run:

```bash
node --test tests/maxhinal-cli.test.js
```

Expected: FAIL because `scripts/maxhinal-cli.js` does not exist.

- [ ] **Step 3: Implement a small dependency-free argv parser and command surface**

Support these exact v0 forms:

```text
node scripts/maxhinal-cli.js run --job <path> [--json|--markdown] [--out <path>]
node scripts/maxhinal-cli.js run --mode <mode> [--gas id1,id2] [--params <json>] [--co co|not-co|unknown] [--seed <seed>] [--json|--markdown] [--out <path>]
node scripts/maxhinal-cli.js continue --ride <path> --job <path> [--json|--markdown] [--out <path>]
node scripts/maxhinal-cli.js continue --ride <path> --mode <mode> [same direct flags]
```

Parse flags with a simple loop; reject unknown flags. Default output is `--json` when neither output flag is present.

- [ ] **Step 4: Load corpus + core and reject missing historical gas before running**

At top:

```js
const fs = require('node:fs');
const path = require('node:path');
const corpus = require('../generated/slice-corpus.js');
const Core = require('../artifacts/maxhinal/maxhinal-core.js');
```

Before direct execution, map `--gas a,b` to refs and verify every ID exists in `corpus.records`. Write `Missing Slice ref: <id>` to stderr and set exit code 2 if any are absent.

For a JSON job, verify listed `job.gas` and every `{kind:'slice'}` operation input before `Core.runJob`.

- [ ] **Step 5: Implement run/continue and output formats through the core only**

Construct direct jobs as:

```js
{
  format:Core.JOB_FORMAT,
  seed:flags.seed || (existingRide ? existingRide.seed : '0'),
  gas:gasIds,
  operations:[{
    mode:flags.mode,
    inputs:gasIds.map((slice_id) => ({kind:'slice',slice_id})),
    parameters:JSON.parse(flags.params || '{}'),
    co_phase:flags.co || 'unknown'
  }]
}
```

For `continue`, parse the ride, call `Core.hydrateRide`, then `Core.runJob(corpus, job, hydratedRide)`.

Output:

```js
const text = flags.markdown ? Core.markdownReceipt(ride) : Core.serializeRide(ride);
if (flags.out) fs.writeFileSync(path.resolve(flags.out), text);
else process.stdout.write(text);
```

- [ ] **Step 6: Run CLI + core tests**

Run:

```bash
node --test tests/maxhinal-cli.test.js tests/maxhinal-core.test.js
```

Expected: PASS.

- [ ] **Step 7: Verify a real repository-corpus CLI ride manually**

Run:

```bash
node scripts/maxhinal-cli.js run --mode quantumslinky --params '{"N":72,"m":5,"k":364}' --seed demo --json > /tmp/demo.maxhinal.json
node scripts/maxhinal-cli.js continue --ride /tmp/demo.maxhinal.json --mode quantumslinky --params '{"N":72,"m":7,"k":364}' --json > /tmp/demo2.maxhinal.json
node -e "const r=require('/tmp/demo2.maxhinal.json'); if(r.operations.length!==2) process.exit(1); console.log(r.ride_id,r.operations.length)"
```

Expected: prints one ride ID and `2`.

- [ ] **Step 8: Commit Task 6**

```bash
git add scripts/maxhinal-cli.js tests/maxhinal-cli.test.js
git commit -m "feat: add Maxhinal CLI bench"
```

---

### Task 7: Turn the existing Discontinuity HTML path into the human Maxhinal bench

**Files:**
- Modify: `artifacts/2026-08-25/hugh-jackman-discontinuity-machine.html`
- Create: `tests/maxhinal-browser-contract.test.js`

**Interfaces:**
- Consumes: browser globals `DAILY_SLICE`, `DAILY_SLICE_META`, `MaxhinalModes`, `MaxhinalCore`.
- Produces: one local browser bench with Fuel Rack, Chamber Selector, Workbench, global MADDCL0WN lever, Ride Strip, receipt sidecar, and ride import/export. The browser adapter invokes only public core/mode APIs.

- [ ] **Step 1: Write failing static browser contract tests**

Create `tests/maxhinal-browser-contract.test.js`:

```js
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const HTML_PATH = path.join(ROOT, 'artifacts', '2026-08-25', 'hugh-jackman-discontinuity-machine.html');
const html = () => fs.readFileSync(HTML_PATH, 'utf8');

test('Maxhinal browser loads generated corpus modes core and compatibility scripts locally', () => {
  const source = html();
  assert.match(source, /\.\.\/\.\.\/generated\/slice-corpus\.js/);
  assert.match(source, /\.\.\/maxhinal\/maxhinal-modes\.js/);
  assert.match(source, /\.\.\/maxhinal\/maxhinal-core\.js/);
  assert.match(source, /hugh-jackman-discontinuity-machine\.js/);
});

test('Maxhinal browser exposes all eight chamber controls and the global clown lever', () => {
  const source = html();
  for (const mode of ['discontinuity','walk-braid','fiber','compose','pressure','moving-origin','quantumslinky','maddclown']) {
    assert.match(source, new RegExp(`data-mode=["']${mode}["']`));
  }
  assert.match(source, /id=["']maddclown-lever["']/);
});

test('browser adapter contains no required network fetch or source-Slice mutation', () => {
  const source = html();
  assert.doesNotMatch(source, /\bfetch\s*\(/);
  assert.doesNotMatch(source, /XMLHttpRequest/);
  assert.doesNotMatch(source, /github\.com\/.*(?:POST|PATCH)/i);
});

test('browser keeps accessibility floor', () => {
  const source = html();
  assert.match(source, /:focus-visible/);
  assert.match(source, /prefers-reduced-motion/);
  assert.match(source, /aria-live/);
  assert.match(source, /type=["']file["']/);
});
```

- [ ] **Step 2: Run the browser contract tests and verify missing Maxhinal controls/scripts**

Run:

```bash
node --test tests/maxhinal-browser-contract.test.js
```

Expected: FAIL because the existing page is still the Discontinuity-only bench.

- [ ] **Step 3: Change script loading order but retain the historical artifact path**

At the end of the HTML, load in this exact order:

```html
<script src="../../generated/slice-corpus.js"></script>
<script src="../maxhinal/maxhinal-modes.js"></script>
<script src="../maxhinal/maxhinal-core.js"></script>
<script src="hugh-jackman-discontinuity-machine.js"></script>
<script>
  // Browser adapter only. No chamber semantics here.
</script>
```

The relative paths above are from `artifacts/2026-08-25/` and must resolve locally.

- [ ] **Step 4: Replace the masthead/workbench framing while preserving the rough machine aesthetic**

Rendered title:

```text
THE MADD HUGH JACKMAN MAXHINAL
A Daily Slice combustion engine
```

Required primary DOM anchors:

```html
<section id="fuel-rack">...</section>
<nav id="chamber-selector" aria-label="Maxhinal chambers">...</nav>
<section id="workbench" aria-live="polite">...</section>
<button id="maddclown-lever" type="button">MADDCL0WN</button>
<ol id="ride-strip" aria-label="Ride history"></ol>
<aside id="receipt-sidecar">...</aside>
<input id="ride-import" type="file" accept="application/json,.json,.maxhinal.json">
<button id="ride-export" type="button">EXPORT RIDE</button>
```

Eight selector buttons use exact `data-mode` values from the mode registry.

- [ ] **Step 5: Implement one shared browser state object and Fuel Rack selection**

The inline adapter keeps only UI/session state:

```js
const corpusPayload = { records:window.DAILY_SLICE || [], meta:window.DAILY_SLICE_META || {} };
let ride = MaxhinalCore.createRide(corpusPayload.meta, 'browser');
let activeMode = 'discontinuity';
let selectedGas = [];
let selectedOutput = null;
```

Reuse `MaxhinalModes.searchCorpus` and `suggestRelatives` for the search/results UI. When a Slice is loaded, add only its ID to `selectedGas`; do not copy/mutate the corpus row.

- [ ] **Step 6: Render bounded controls for each chamber without duplicating semantics**

The browser may collect parameters but must call `MaxhinalCore.runOperation`. Use one `renderControls(mode)` switch whose branches only emit inputs:

```text
discontinuity: verdict + reason, usually two selected gas refs
walk-braid: ordered step rows (slice/output ref, verb, co phase)
fiber: target text + optional representative ref
compose: order + free-text seam note/status
pressure: candidate kind
moving-origin: origin Slice select among loaded gas
quantumslinky: N, m, optional k; explicit twisted-boundary checkbox reveals L/n/mode_k
maddclown: selected gas/output + optional context text
```

No branch computes gcd, token compatibility, pressure questions, path diagnostics, or creative spins locally.

- [ ] **Step 7: Implement RUN CHAMBER and global MADDCL0WN through `runOperation`**

Normal run:

```js
ride = MaxhinalCore.runOperation(ride, corpusPayload, {
  mode:activeMode,
  inputs:collectInputRefs(activeMode),
  parameters:collectParameters(activeMode),
  co_phase:document.querySelector('[name="co-phase"]:checked')?.value || 'unknown'
});
```

Global lever:

```js
const target = selectedOutput || ride.outputs.at(-1)?.output_id;
ride = MaxhinalCore.runOperation(ride, corpusPayload, {
  mode:'maddclown',
  inputs:target ? [{kind:'derived',output_id:target}] : selectedGas.map((slice_id) => ({kind:'slice',slice_id})),
  parameters:{ intervention:'global', target_output_ref:target || null, context_text:collectVisibleContext() },
  co_phase:'unknown'
});
```

Always re-render Ride Strip + receipt after operations; prior entries remain visible.

- [ ] **Step 8: Preserve bad-spin rejection and deterministic respin behavior**

For creative Discontinuity output, expose:

```text
KEEP SPIN
BAD SPIN
RESPIN
```

`BAD SPIN` calls only:

```js
ride = MaxhinalCore.appendBadSpin(ride, { output_ref:selectedOutput, reason:reasonInput.value || 'rejected by witness' });
```

`RESPIN` appends another `discontinuity` operation with the same source refs and `parameters.respin_of = selectedOutput`; because operation count advances the seed offset, it produces a deterministic descendant without deleting the earlier output.

- [ ] **Step 9: Implement `.maxhinal.json` import/export in the browser**

Export via Blob only:

```js
const blob = new Blob([MaxhinalCore.serializeRide(ride)], { type:'application/json' });
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = `${ride.ride_id}.maxhinal.json`;
a.click();
URL.revokeObjectURL(url);
```

Import reads the selected local file using `file.text()`, parses JSON, then:

```js
ride = MaxhinalCore.hydrateRide(JSON.parse(text), corpusPayload.meta);
```

If `ride.replay.status === 'CORPUS_DRIFT'`, render the warning prominently and do not silently replace `ride.corpus.digest`.

- [ ] **Step 10: Run browser contract + full JS syntax checks**

Run:

```bash
node --test tests/maxhinal-browser-contract.test.js
node --check artifacts/maxhinal/maxhinal-modes.js
node --check artifacts/maxhinal/maxhinal-core.js
node --check artifacts/2026-08-25/hugh-jackman-discontinuity-machine.js
node - <<'NODE'
const fs=require('node:fs');
const html=fs.readFileSync('artifacts/2026-08-25/hugh-jackman-discontinuity-machine.html','utf8');
const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m)=>m[1]);
for (const source of scripts) new Function(source);
console.log(`checked ${scripts.length} inline scripts`);
NODE
```

Expected: tests PASS, syntax commands exit 0.

- [ ] **Step 11: Commit Task 7**

```bash
git add artifacts/2026-08-25/hugh-jackman-discontinuity-machine.html tests/maxhinal-browser-contract.test.js
git commit -m "feat: turn Discontinuity Machine into Maxhinal bench"
```

---

### Task 8: Prove browser/CLI semantic parity, portable ride continuation, seeded respins, and local-file contract

**Files:**
- Modify: `tests/maxhinal-core.test.js`
- Modify: `tests/maxhinal-cli.test.js`
- Modify: `tests/maxhinal-browser-contract.test.js`
- Modify: `artifacts/maxhinal/maxhinal-core.js` only if a failing parity test exposes a semantic adapter leak.
- Modify: `scripts/maxhinal-cli.js` only if a failing parity test exposes an adapter mismatch.
- Modify: `artifacts/2026-08-25/hugh-jackman-discontinuity-machine.html` only if a failing static contract exposes a browser mismatch.

**Interfaces:**
- Consumes: completed shared core + both adapters.
- Produces: explicit proof that the same semantic job/ride is portable and deterministic across both hands; no semantic fork.

- [ ] **Step 1: Add a canonical parity fixture job to core tests**

Use:

```js
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
```

Test that two `Core.runJob(PAYLOAD, PARITY_JOB)` runs have byte-identical `semanticSnapshot` and identical serialized rides.

- [ ] **Step 2: Add deterministic respin descendant test**

Append:

```js
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
```

- [ ] **Step 3: Add a CLI/core parity test using the real generated corpus with a no-gas QuantumSlinky job**

In `tests/maxhinal-cli.test.js`, import:

```js
const Core = require('../artifacts/maxhinal/maxhinal-core.js');
const corpus = require('../generated/slice-corpus.js');
```

Then:

```js
test('CLI semantic result matches direct core result for the same job', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'maxhinal-parity-'));
  const job = {
    format:'maxhinal-job/v0', seed:'parity', gas:[],
    operations:[{mode:'quantumslinky',inputs:[],parameters:{N:72,m:5,k:364},co_phase:'not-co'}]
  };
  const jobPath = path.join(dir, 'job.json');
  fs.writeFileSync(jobPath, JSON.stringify(job));
  const cli = run(['run','--job',jobPath,'--json']);
  assert.equal(cli.status, 0, cli.stderr);
  const cliRide = JSON.parse(cli.stdout);
  const directRide = Core.runJob(corpus, job);
  assert.equal(
    Core.stableStringify(Core.semanticSnapshot(cliRide)),
    Core.stableStringify(Core.semanticSnapshot(directRide))
  );
});
```

- [ ] **Step 4: Add cross-interface portable continuation fixture**

Create a ride with direct core, write it as if exported by browser, continue it through CLI, then hydrate CLI output back through core:

```js
test('browser-shaped ride can be continued by CLI and rehydrated without history loss', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'maxhinal-handoff-'));
  const browserRide = Core.runJob(corpus, {
    format:'maxhinal-job/v0', seed:'handoff', gas:[],
    operations:[{mode:'quantumslinky',inputs:[],parameters:{N:72,m:5},co_phase:'co'}]
  });
  const ridePath = path.join(dir, 'browser.maxhinal.json');
  fs.writeFileSync(ridePath, Core.serializeRide(browserRide));
  const cli = run(['continue','--ride',ridePath,'--mode','quantumslinky','--params','{"N":72,"m":7}','--co','co','--json']);
  assert.equal(cli.status, 0, cli.stderr);
  const returned = Core.hydrateRide(JSON.parse(cli.stdout), corpus.meta);
  assert.equal(returned.operations.length, 2);
  assert.equal(returned.operations[0].parameters.m, 5);
  assert.equal(returned.operations[1].parameters.m, 7);
  assert.equal(returned.operations[0].co_phase, 'co');
  assert.equal(returned.operations[1].co_phase, 'co');
});
```

- [ ] **Step 5: Strengthen browser local-file and semantic-owner contracts**

Add assertions that:

- every external `<script src>` is relative and exists under repository root;
- no inline browser code contains the formulas `Math.PI / L`, `gcd(`, or the fixed Pressure candidate strings (those belong in modes);
- no inline browser code calls `Math.random`;
- the page uses `MaxhinalCore.runOperation` and `MaxhinalCore.hydrateRide`.

Example:

```js
test('browser is an adapter over core rather than a second semantic implementation', () => {
  const source = html();
  assert.match(source, /MaxhinalCore\.runOperation/);
  assert.match(source, /MaxhinalCore\.hydrateRide/);
  assert.doesNotMatch(source, /Math\.random\s*\(/);
  assert.doesNotMatch(source, /function\s+gcd\s*\(/);
  assert.doesNotMatch(source, /What attributable road or carrier distinguishes lineage from resemblance\?/);
});
```

- [ ] **Step 6: Run all tests and fix only parity/local-contract defects revealed by them**

Run:

```bash
node --test tests/*.test.js
```

Expected: PASS with zero failures.

If this step fails because semantics exist in an adapter, move those semantics into `maxhinal-modes.js` or `maxhinal-core.js`; do not copy them into both adapters.

- [ ] **Step 7: Commit Task 8**

```bash
git add tests/maxhinal-core.test.js tests/maxhinal-cli.test.js tests/maxhinal-browser-contract.test.js artifacts/maxhinal/maxhinal-core.js scripts/maxhinal-cli.js artifacts/2026-08-25/hugh-jackman-discontinuity-machine.html
git commit -m "test: prove Maxhinal dual-interface replay parity"
```

---

### Task 9: Document the instrument contract and run final repository verification

**Files:**
- Create: `artifacts/maxhinal/README.md`
- Modify: `artifacts/README.md`
- Modify: `README.md` only if there is an existing artifact/navigation section that can receive one small link; do not restructure the repository homepage.
- Test: all `tests/*.test.js`

**Interfaces:**
- Consumes: completed implementation and spec.
- Produces: concise local usage for humans/agents plus fresh verification evidence covering tests, syntax, corpus rebuild determinism, no-network browser contract, and exact branch diff.

- [ ] **Step 1: Write `artifacts/maxhinal/README.md` as an operator contract**

Include these exact sections and commands:

```markdown
# MADD Hugh Jackman Maxhinal

The Maxhinal is a local Daily Slice instrument. It consumes Slice records as historical gas and emits derived projections plus append-only ride receipts. It does not mutate Slice history or grant evidence, authority, or promotion.

## Human bench

Open `../2026-08-25/hugh-jackman-discontinuity-machine.html` locally after cloning/downloading the repository.

## Agent / CLI bench

```bash
node scripts/maxhinal-cli.js run --mode quantumslinky --params '{"N":72,"m":5,"k":364}' --seed demo --json
```

Use `--job <file>` for multi-operation rides and `continue --ride <file>` to extend a prior `.maxhinal.json`.

## Shared contract

- same core, different hands;
- Slice gas != derived output;
- operation history is append-only;
- seeded spins are reproducible;
- corpus drift is explicit;
- refusal and unresolved are first-class;
- authority: none;
- promotion: NONE.
```

Do not include claims that the Maxhinal can write GitHub, call an LLM, prove a physical pattern, or automatically create Daily Slices.

- [ ] **Step 2: Update `artifacts/README.md` with the primary-instrument rule**

Preserve its existing provenance/authority language and append a short section:

```markdown
## Primary artifact species

Daily Slice artifacts are primarily usable instruments that consume one or more Slice records and return a projection, residual/refusal state, and attributable receipt.

Static diagrams and publication cards may remain as companions or exports. They do not become invalid retroactively.

> **IF IT DOES NOT EAT SLICES, IT PROBABLY IS NOT A PRIMARY DAILY SLICE ARTIFACT.**

The reference instrument is the MADD Hugh Jackman Maxhinal. Its browser and CLI surfaces use the same semantic core.
```

- [ ] **Step 3: Add one small root README road only if a natural artifact section exists**

Read `README.md`. If it already has an artifacts/tools/navigation list, add one bullet linking to `artifacts/maxhinal/README.md`. If no such section exists, leave the root README unchanged and record that no natural insertion point existed in the PR body; do not create a new homepage architecture for this task.

- [ ] **Step 4: Run the complete Node test suite**

Run:

```bash
node --test tests/*.test.js
```

Expected: zero failures.

- [ ] **Step 5: Run JavaScript syntax verification**

Run:

```bash
node --check scripts/build-slice-corpus.js
node --check scripts/maxhinal-cli.js
node --check artifacts/maxhinal/maxhinal-modes.js
node --check artifacts/maxhinal/maxhinal-core.js
node --check artifacts/2026-08-25/hugh-jackman-discontinuity-machine.js
node - <<'NODE'
const fs=require('node:fs');
const html=fs.readFileSync('artifacts/2026-08-25/hugh-jackman-discontinuity-machine.html','utf8');
for (const [, source] of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) new Function(source);
console.log('inline scripts syntax: ok');
NODE
```

Expected: all exit 0.

- [ ] **Step 6: Verify generated corpus is reproducible and leaves no diff after a second rebuild**

Run:

```bash
node scripts/build-slice-corpus.js .
git diff -- generated/slice-corpus.js
node scripts/build-slice-corpus.js .
git diff --exit-code -- generated/slice-corpus.js
```

Expected: after the generated file is committed in Task 1 and all current Slice indexes are included, the second rebuild exits 0 with no generated-corpus diff.

- [ ] **Step 7: Verify local/no-network and authority contracts explicitly**

Run:

```bash
node --test tests/maxhinal-browser-contract.test.js
! grep -R "Math.random(" artifacts/maxhinal artifacts/2026-08-25/hugh-jackman-discontinuity-machine.html scripts/maxhinal-cli.js
! grep -R "fetch(" artifacts/2026-08-25/hugh-jackman-discontinuity-machine.html artifacts/maxhinal
```

Expected: browser contract passes; both negated grep commands exit 0.

- [ ] **Step 8: Commit documentation and any intentional regenerated corpus update**

```bash
git add artifacts/maxhinal/README.md artifacts/README.md README.md generated/slice-corpus.js
git commit -m "docs: document Maxhinal shared instrument contract"
```

If `README.md` or `generated/slice-corpus.js` is unchanged, omit it from `git add` rather than creating noise.

- [ ] **Step 9: Run final full verification after the final commit**

Run fresh, after the commit:

```bash
node --test tests/*.test.js
node --check scripts/build-slice-corpus.js
node --check scripts/maxhinal-cli.js
node --check artifacts/maxhinal/maxhinal-modes.js
node --check artifacts/maxhinal/maxhinal-core.js
node --check artifacts/2026-08-25/hugh-jackman-discontinuity-machine.js
git diff --check
git status --short
```

Expected:

- all tests pass;
- all syntax checks pass;
- `git diff --check` exits 0;
- `git status --short` is empty.

- [ ] **Step 10: Compare the implementation branch to its base and verify scope**

Run:

```bash
git log --oneline --decorate --max-count=12
git diff --stat <merge-base>..HEAD
git diff --name-only <merge-base>..HEAD
```

Use the actual merge-base resolved by:

```bash
git merge-base HEAD origin/main
```

Expected scope is limited to:

```text
artifacts/2026-08-25/hugh-jackman-discontinuity-machine.html
artifacts/2026-08-25/hugh-jackman-discontinuity-machine.js
artifacts/maxhinal/*
generated/slice-corpus.js
scripts/build-slice-corpus.js
scripts/maxhinal-cli.js
tests/*.test.js
artifacts/README.md
README.md                         # only if a natural link was added
docs/superpowers/specs/2026-08-31-madd-hugh-jackman-maxhinal-design.md
docs/superpowers/plans/2026-08-31-madd-hugh-jackman-maxhinal.md
```

No source Slice Markdown, project authority docs outside this design/plan, GitHub workflow, credential, database, package dependency, or hosted-service file should be changed.

- [ ] **Step 11: Prepare the review receipt**

The final PR/review body must state fresh evidence only, including:

```text
- full node:test count and failures = 0
- syntax checks = green
- corpus rebuild = deterministic
- browser contract = local/no required fetch
- same-job CLI/core semantic parity = proven by test
- browser-shaped ride -> CLI continuation -> core rehydrate = proven by test
- authority:none / promotion:NONE preserved
- no source Slice mutation
- no new network/database/auth/model dependency
```

Do not claim perceptual browser rendering quality unless a browser witness was actually run separately.

---

## Plan Completion Gate

Before declaring the Maxhinal implemented, verify the spec acceptance criteria one by one against Tasks 1–9:

1. Stable historical browser path — Task 7.
2. Local generated corpus — Tasks 1, 7.
3. Select gas once and run multiple chambers — Task 7.
4. Eight bounded chambers — Tasks 2, 4, 5.
5. Global MADDCL0WN lever — Tasks 5, 7.
6. Append-only ride — Task 3.
7. `.maxhinal.json` export — Task 7.
8. Browser import preserves history — Tasks 7, 8.
9. CLI executes same core — Task 6.
10. CLI extends browser-exported ride — Tasks 6, 8.
11. Browser/CLI deterministic semantics — Tasks 3, 8.
12. Deterministic respin descendants — Tasks 3, 7, 8.
13. Every chamber preserves Slice refs — Tasks 3–5.
14. Derived intermediate != historical gas — Task 3.
15. Corpus mismatch explicit — Tasks 1, 3, 7.
16. Refusal/unresolved/bad-spin visible — Tasks 2, 3, 5, 7.
17. No network/database/auth/external model dependency — Global Constraints + Tasks 7, 9.
18. No source Slice mutation — core/browser architecture + Task 9 scope check.
19. No evidence/support/authority/canon promotion — Global Constraints + all chamber posture fields.
20. Full tests/syntax/contracts green — Tasks 8, 9.

If any acceptance item lacks fresh verification evidence, the implementation is not complete.
