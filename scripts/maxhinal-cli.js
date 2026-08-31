#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
require('../artifacts/maxhinal/maxhinal-chambers.js');
const Core = require('../artifacts/maxhinal/maxhinal-core.js');

function loadCorpus() {
  const corpusPath = path.join(__dirname, '..', 'generated', 'slice-corpus.js');
  try {
    const payload = require(corpusPath);
    if (payload && Array.isArray(payload.records) && payload.meta) return payload;
  } catch (error) {
    if (!(error instanceof ReferenceError) && !/window is not defined/i.test(String(error && error.message))) throw error;
  }
  const source = fs.readFileSync(corpusPath, 'utf8');
  const sandbox = { window:{} };
  vm.runInNewContext(source, sandbox, { filename:'slice-corpus.js' });
  const records = sandbox.window.DAILY_SLICE || [];
  let meta = null;
  try { meta = require('../generated/slice-corpus-meta.js'); } catch (_) { meta = null; }
  return { records, meta:meta || { format:'daily-slice-corpus/v0-legacy', digest:'legacy:unknown', record_count:records.length } };
}

const corpus = loadCorpus();

function fail(message, code=2) {
  process.stderr.write(`${message}\n`);
  process.exitCode = code;
  return null;
}

function parseArgs(argv) {
  const args = argv.slice();
  const command = args.shift();
  if (!['run','continue'].includes(command)) throw new Error('Usage: maxhinal-cli.js run|continue [flags]');
  const flags = { command, json:false, markdown:false };
  const booleanFlags = new Set(['--json','--markdown']);
  const valueFlags = new Set(['--job','--mode','--gas','--params','--co','--seed','--out','--ride']);
  while (args.length) {
    const flag = args.shift();
    if (booleanFlags.has(flag)) {
      flags[flag.slice(2).replace(/-/g,'_')] = true;
      continue;
    }
    if (!valueFlags.has(flag)) throw new Error(`Unknown flag: ${flag}`);
    if (!args.length) throw new Error(`Missing value for ${flag}`);
    flags[flag.slice(2).replace(/-/g,'_')] = args.shift();
  }
  if (!flags.json && !flags.markdown) flags.json = true;
  if (flags.json && flags.markdown) throw new Error('Choose only one of --json or --markdown.');
  if (command === 'continue' && !flags.ride) throw new Error('continue requires --ride <path>.');
  return flags;
}

function readJsonFile(filePath, label) {
  let text;
  try {
    text = fs.readFileSync(path.resolve(filePath), 'utf8');
  } catch (error) {
    throw new Error(`${label} read failed: ${error.message}`);
  }
  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error(`Invalid JSON in ${label}: ${error.message}`);
  }
}

function parseJsonText(text, label) {
  try {
    return JSON.parse(text || '{}');
  } catch (error) {
    throw new Error(`Invalid JSON in ${label}: ${error.message}`);
  }
}

function gasIds(flags) {
  return String(flags.gas || '').split(',').map((value) => value.trim()).filter(Boolean);
}

function sliceRefsFromJob(job) {
  const ids = new Set(Array.isArray(job.gas) ? job.gas : []);
  for (const operation of Array.isArray(job.operations) ? job.operations : []) {
    for (const ref of Array.isArray(operation.inputs) ? operation.inputs : []) {
      if (ref && ref.kind === 'slice') ids.add(ref.slice_id);
    }
  }
  return [...ids];
}

function assertSlicesExist(ids) {
  const known = new Set((corpus.records || []).map((row) => row.id));
  for (const id of ids) {
    if (!known.has(id)) throw new Error(`Missing Slice ref: ${id}`);
  }
}

function directJob(flags, existingRide) {
  if (!flags.mode) throw new Error('Direct invocation requires --mode <mode>.');
  const ids = gasIds(flags);
  assertSlicesExist(ids);
  const co = flags.co || 'unknown';
  if (!['co','not-co','unknown'].includes(co)) throw new Error(`Invalid --co value: ${co}`);
  return {
    format:Core.JOB_FORMAT,
    seed:flags.seed || (existingRide ? existingRide.seed : '0'),
    gas:ids,
    operations:[{
      mode:flags.mode,
      inputs:ids.map((slice_id) => ({kind:'slice',slice_id})),
      parameters:parseJsonText(flags.params || '{}', '--params'),
      co_phase:co
    }]
  };
}

function loadJob(flags, existingRide) {
  if (flags.job) {
    const job = readJsonFile(flags.job, 'job');
    if (!job.format) job.format = Core.JOB_FORMAT;
    if (existingRide && job.seed == null) job.seed = existingRide.seed;
    assertSlicesExist(sliceRefsFromJob(job));
    return job;
  }
  return directJob(flags, existingRide);
}

function writeOutput(flags, ride) {
  const text = flags.markdown ? Core.markdownReceipt(ride) : Core.serializeRide(ride);
  if (flags.out) fs.writeFileSync(path.resolve(flags.out), text);
  else process.stdout.write(text);
}

function main(argv) {
  let flags;
  try {
    flags = parseArgs(argv);
    let existingRide = null;
    if (flags.command === 'continue') {
      const rawRide = readJsonFile(flags.ride, 'ride');
      existingRide = Core.hydrateRide(rawRide, corpus.meta);
    }
    const job = loadJob(flags, existingRide);
    const ride = Core.runJob(corpus, job, existingRide);
    writeOutput(flags, ride);
    return 0;
  } catch (error) {
    fail(error.message || String(error));
    return 2;
  }
}

if (require.main === module) main(process.argv.slice(2));

module.exports = { loadCorpus, parseArgs, directJob, sliceRefsFromJob, main };
