#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const { validatePacket } = require('../artifacts/lineage/transfer-packet-zero.js');

function main(argv) {
  if (argv.length !== 1) {
    process.stderr.write('usage: node scripts/validate-transfer-packet-zero.js <packet.json>\n');
    return 2;
  }

  let packet;
  try {
    packet = JSON.parse(fs.readFileSync(argv[0], 'utf8'));
  } catch (error) {
    process.stderr.write(`${error.message}\n`);
    return 2;
  }

  const result = validatePacket(packet);
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  return result.ok ? 0 : 1;
}

if (require.main === module) process.exitCode = main(process.argv.slice(2));
module.exports = { main };
