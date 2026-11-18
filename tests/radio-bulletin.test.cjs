const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const { test } = require('node:test');
const { candidateFromSlice, verifyReturn } = require('../scripts/radio-bulletin.cjs');

const digest = value => createHash('sha256').update(value).digest('hex');
const selection = {
  revision: 'a'.repeat(40), path: 'slices/2026/09/2026-09-17/example.md',
  credit: 'The Daily Slice', title: 'Example', script: 'A possible reading.',
};
const source = Buffer.from('# Example\r\n\r\n**Status:** SPECULATION / working note\r\n');

test('exports an atomic slice with exact source bytes and source-declared posture', () => {
  const result = candidateFromSlice(selection, (revision, path) => {
    assert.equal(revision, selection.revision);
    assert.equal(path, selection.path);
    return source;
  });
  assert.equal(result.source.sha256, digest(source));
  assert.equal(result.posture, 'SPECULATION');
  assert.equal(result.schema, 'static-collective.crossover-record/v1');
  assert.throws(() => candidateFromSlice({ ...selection, revision: 'main' }, assert.fail), /pinned/);
  assert.throws(() => candidateFromSlice({ ...selection, posture: 'OBSERVATION' }, assert.fail), /Expected revision/);
  assert.throws(() => candidateFromSlice(selection, () => Buffer.concat([source, source])), /one explicit/);
});

test('verifies a return against the original bytes and strips review metadata and host copy', () => {
  const candidate = candidateFromSlice(selection, () => source);
  const bytes = Buffer.from(JSON.stringify(candidate));
  const rundown = 'private host copy';
  const receipt = {
    schema: 'humkin.crossover-receipt/v1', producer: 'the-static-collective/HUMKIN',
    destination: candidate.source.repository, disposition: 'PRIVATE_TEXT_PREVIEW',
    source: candidate.source, candidateSha256: digest(bytes),
    rundownSha256: digest(rundown), broadcastAuthorized: false,
  };
  assert.deepEqual(verifyReturn(bytes, { receipt: { ...receipt, private: 'discard' }, rundown }), receipt);
  assert.throws(() => verifyReturn(bytes, { receipt, rundown: 'tampered' }), /does not match/);
  assert.throws(() => verifyReturn(bytes, { rundown, receipt: { ...receipt, broadcastAuthorized: true } }),
    /does not match/);
  assert.throws(() => verifyReturn(Buffer.concat([bytes, Buffer.from('\n')]), { receipt, rundown }),
    /does not match/);
});
