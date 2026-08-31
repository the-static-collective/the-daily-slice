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
    '# 2026-08-31','',
    '### [Alpha](alpha.md)','',
    'First summary.','',
    'The line worth carrying is **ALPHA LAW.**','',
    '### [Beta](beta.md)','',
    'Second summary.'
  ].join('\n'));
  return root;
}

test('parseIndex still returns dated Slice records', () => {
  const rows = parseIndex('### [Alpha](alpha.md)\n\nSummary.', 'slices/2026/08/2026-08-31/index.md');
  assert.equal(rows[0].id, '2026-08-31:alpha');
});

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
