const test = require('node:test');
const assert = require('node:assert/strict');
const { validatePacket } = require('../artifacts/lineage/transfer-packet-zero.js');

function packet(overrides = {}) {
  const base = {
    format: 'transfer-packet-zero/v0',
    packet_id: 'tpz-test-001',
    source_slice: 'slices/2026/09/2026-09-05/new-rocket-step-daughters-home.md',
    root: { ref: 'fixture:root-a', digest: 'sha256:root' },
    crossing: {
      kind: 'declared-branch',
      participants: [{ ref: 'fixture:human-a', role: 'performer' }],
      receipt_refs: ['receipt:crossing-001']
    },
    descendant: { ref: 'fixture:child-a', parent_ref: 'fixture:root-a', digest: 'sha256:child' },
    delta: {
      inherited: ['lyrics'],
      changed: ['arrangement'],
      added: [],
      refused: [],
      unknown: []
    },
    receipts: [{ kind: 'local', ref: 'receipt:crossing-001' }],
    carriers: [{ kind: 'local-file', ref: 'fixture:child-a.wav' }],
    boundary: { authority: 'none', promotion: 'NONE', receiver_obligation: 'none' }
  };
  return { ...base, ...overrides };
}

test('accepts a minimal single-parent lineage packet without granting authority', () => {
  const result = validatePacket(packet());
  assert.equal(result.ok, true);
  assert.deepEqual(result.errors, []);
  assert.equal(result.authority, 'none');
  assert.equal(result.promotion, 'NONE');
});

test('rejects a descendant whose declared parent does not match the packet root', () => {
  const input = packet({ descendant: { ref: 'fixture:child-a', parent_ref: 'fixture:other-root' } });
  const result = validatePacket(input);
  assert.equal(result.ok, false);
  assert.ok(result.errors.some((entry) => entry.code === 'PARENT_ROOT_MISMATCH'));
});

test('refuses multi-parent claims as outside Transfer Packet Zero scope', () => {
  const input = packet({ parents: ['fixture:root-a', 'fixture:root-b'] });
  const result = validatePacket(input);
  assert.equal(result.ok, false);
  assert.ok(result.errors.some((entry) => entry.code === 'MULTI_PARENT_OUT_OF_SCOPE'));
});

test('preserves byte-identical parent and descendant as a residual rather than invalidating lineage', () => {
  const input = packet({ descendant: { ref: 'fixture:child-a', parent_ref: 'fixture:root-a', digest: 'sha256:root' } });
  const result = validatePacket(input);
  assert.equal(result.ok, true);
  assert.ok(result.residuals.some((entry) => entry.code === 'SAME_CONTENT_DIGEST'));
});

test('does not require a content carrier when receipts survive', () => {
  const input = packet({ carriers: [] });
  const result = validatePacket(input);
  assert.equal(result.ok, true);
  assert.ok(result.residuals.some((entry) => entry.code === 'NO_LIVE_CARRIER'));
});

test('allows human-only, agent-assisted, and unknown participants without changing authority', () => {
  for (const participants of [
    [{ ref: 'fixture:human-a', role: 'performer' }],
    [{ ref: 'fixture:human-a', role: 'performer' }, { ref: 'fixture:agent-a', role: 'proposal-tool' }],
    [{ ref: 'unknown', role: 'unknown' }]
  ]) {
    const input = packet({ crossing: { kind: 'declared-branch', participants, receipt_refs: [] } });
    const result = validatePacket(input);
    assert.equal(result.ok, true);
    assert.equal(result.authority, 'none');
  }
});

test('rejects any attempt to promote packet authority or receiver obligation', () => {
  for (const boundary of [
    { authority: 'lineage-authority', promotion: 'NONE', receiver_obligation: 'none' },
    { authority: 'none', promotion: 'CANON', receiver_obligation: 'none' },
    { authority: 'none', promotion: 'NONE', receiver_obligation: 'must-respond' }
  ]) {
    const result = validatePacket(packet({ boundary }));
    assert.equal(result.ok, false);
    assert.ok(result.errors.some((entry) => entry.code === 'BOUNDARY_ESCALATION'));
  }
});

test('does not decide whether a large musical delta is authentic lineage', () => {
  const input = packet({
    delta: { inherited: [], changed: ['harmony', 'rhythm', 'timbre', 'structure'], added: ['new-lyrics'], refused: ['root-tempo'], unknown: ['relation-meaning'] }
  });
  const result = validatePacket(input);
  assert.equal(result.ok, true);
  assert.ok(result.residuals.some((entry) => entry.code === 'SEMANTIC_LINEAGE_UNDECIDED'));
});

test('hostile fixture corpus preserves expected errors and residuals', () => {
  const fs = require('node:fs');
  const path = require('node:path');
  const fixturePath = path.join(__dirname, '..', 'artifacts', '2026-09-05', 'transfer-packet-zero', 'hostile-fixtures.json');
  const fixtureSet = JSON.parse(fs.readFileSync(fixturePath, 'utf8'));

  for (const entry of fixtureSet.cases) {
    const result = validatePacket(entry.packet);
    assert.equal(result.ok, entry.ok, entry.name);
    const codes = [...result.errors, ...result.residuals].map((item) => item.code);
    for (const code of entry.expect_codes) assert.ok(codes.includes(code), `${entry.name}: expected ${code}`);
  }
});

test('CLI returns machine-readable validation and a failing exit code for invalid packets', () => {
  const fs = require('node:fs');
  const os = require('node:os');
  const { spawnSync } = require('node:child_process');
  const path = require('node:path');
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'tpz-'));
  const fixture = path.join(dir, 'boundary-escalation.json');
  fs.writeFileSync(fixture, JSON.stringify(packet({ boundary: { authority: 'lineage-authority', promotion: 'CANON', receiver_obligation: 'must-respond' } })));
  const cli = path.join(__dirname, '..', 'scripts', 'validate-transfer-packet-zero.js');
  const result = spawnSync(process.execPath, [cli, fixture], { encoding: 'utf8' });
  fs.rmSync(dir, { recursive: true, force: true });
  assert.equal(result.status, 1);
  const payload = JSON.parse(result.stdout);
  assert.equal(payload.ok, false);
  assert.ok(payload.errors.some((entry) => entry.code === 'BOUNDARY_ESCALATION'));
});
