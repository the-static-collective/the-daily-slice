const { createHash } = require('node:crypto');
const { execFileSync } = require('node:child_process');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');

const repository = 'the-static-collective/the-daily-slice';
const digest = value => createHash('sha256').update(value).digest('hex');
const fields = ['revision', 'path', 'credit', 'title', 'script'];

function candidateFromSlice(selection, readSource) {
  if (!selection || Object.keys(selection).length !== fields.length
      || !fields.every(key => typeof selection[key] === 'string' && selection[key].trim() === selection[key])) {
    throw new Error('Expected revision, path, credit, title and script');
  }
  const { revision, path, credit, title, script } = selection;
  const match = path.match(/^slices\/(\d{4})\/(\d{2})\/(\d{4}-\d{2}-\d{2})\/[a-z0-9-]+\.md$/);
  if (!/^[a-f0-9]{40}$/.test(revision) || !match || !match[3].startsWith(match[1] + '-' + match[2] + '-')
      || path.endsWith('/index.md')) throw new Error('Select a pinned atomic slice');
  if (![credit, title, script].every((value, i) =>
    value.length > 0 && value.length <= [120, 160, 1200][i] && !/[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u.test(value))) {
    throw new Error('Expected bounded single-line editorial copy');
  }

  const bytes = readSource(revision, path);
  const postures = [...new TextDecoder('utf-8', { fatal: true }).decode(bytes).matchAll(
    /^\*\*Status:\*\*[ \t]+(OBSERVATION|QUESTION|SPECULATION|CANDIDATE|TESTED|REFUTED|SUPERSEDED)(?=[ \t\r]|$)/gm)];
  if (postures.length !== 1) throw new Error('Slice needs one explicit supported status');
  return {
    schema: 'static-collective.crossover-record/v1',
    kind: 'story',
    source: { repository, revision, path, sha256: digest(bytes) },
    posture: postures[0][1],
    credit, title, script,
  };
}

function verifyReturn(candidateBytes, result) {
  const candidate = JSON.parse(candidateBytes);
  const { receipt, rundown } = result;
  const sourceFields = ['repository', 'revision', 'path', 'sha256'];
  if (receipt?.schema !== 'humkin.crossover-receipt/v1'
      || receipt.producer !== 'the-static-collective/HUMKIN'
      || receipt.destination !== repository
      || receipt.disposition !== 'PRIVATE_TEXT_PREVIEW'
      || receipt.broadcastAuthorized !== false
      || receipt.candidateSha256 !== digest(candidateBytes)
      || !sourceFields.every(key => receipt.source?.[key] === candidate.source[key])
      || typeof rundown !== 'string' || receipt.rundownSha256 !== digest(rundown)) {
    throw new Error('Receipt does not match the candidate and rundown');
  }
  // Return only the source pointer and hashes, never the rundown or private review.
  return Object.fromEntries(['schema', 'producer', 'destination', 'disposition', 'source',
    'candidateSha256', 'rundownSha256', 'broadcastAuthorized'].map(key => [key, receipt[key]])
    .concat([['source', Object.fromEntries(sourceFields.map(key => [key, receipt.source[key]]))]]));
}

module.exports = { candidateFromSlice, verifyReturn };

if (require.main === module) {
  try {
    const [command, first, second] = process.argv.slice(2);
    let output;
    if (command === 'export' && first && process.argv.length === 4) {
      output = candidateFromSlice(JSON.parse(readFileSync(first)), (revision, path) =>
        execFileSync('git', ['cat-file', 'blob', revision + '^{commit}:' + path],
          { cwd: join(__dirname, '..'), stdio: ['ignore', 'pipe', 'ignore'], maxBuffer: 1024 * 1024 }));
    } else if (command === 'verify-return' && first && second && process.argv.length === 5) {
      output = verifyReturn(readFileSync(first), JSON.parse(readFileSync(second)));
    } else {
      throw new Error('Usage: radio-bulletin.cjs export SELECTION.json | verify-return CANDIDATE.json RESULT.json');
    }
    process.stdout.write(JSON.stringify(output, null, 2) + '\n');
  } catch (error) {
    console.error(error.code || error.status || error instanceof SyntaxError || error instanceof TypeError
      ? 'Could not read bulletin inputs or pinned slice' : error.message);
    process.exitCode = 1;
  }
}
