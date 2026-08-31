const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ROOT = path.resolve(__dirname, '..');
const HTML_PATH = path.join(ROOT,'artifacts','2026-08-25','hugh-jackman-discontinuity-machine.html');
const JS_PATH = path.join(ROOT,'artifacts','maxhinal','maxhinal-bench.js');
const html = fs.readFileSync(HTML_PATH,'utf8');
const js = fs.readFileSync(JS_PATH,'utf8');

test('historical browser path loads one local Maxhinal stack', () => {
  for (const src of ['../../generated/slice-corpus.js','../../generated/slice-corpus-meta.js','../maxhinal/maxhinal-modes.js','../maxhinal/maxhinal-chambers.js','../maxhinal/maxhinal-core.js','hugh-jackman-discontinuity-machine.js','../maxhinal/maxhinal-bench.js']) assert.match(html, new RegExp(src.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')));
});

test('browser exposes all eight chambers and shared ride controls', () => {
  for (const mode of ['discontinuity','walk-braid','fiber','compose','pressure','moving-origin','quantumslinky','maddclown']) assert.match(html,new RegExp(`data-mode="${mode}"`));
  for (const id of ['fuel-rack','workbench','maddclown-lever','ride-strip','receipt-sidecar','ride-import','ride-export']) assert.match(html,new RegExp(`id="${id}"`));
});

test('browser adapter delegates semantics to core and keeps local/no-network contract', () => {
  assert.match(js,/Core\.runOperation/);
  assert.match(js,/Core\.hydrateRide/);
  assert.match(js,/Core\.serializeRide/);
  assert.doesNotMatch(js,/\bfetch\s*\(/);
  assert.doesNotMatch(js,/XMLHttpRequest/);
  assert.doesNotMatch(js,/Math\.random\s*\(/);
  assert.doesNotMatch(js,/function\s+gcd\s*\(/);
  assert.doesNotMatch(js,/What attributable road or carrier distinguishes lineage from resemblance\?/);
});

test('all external browser resources are relative and repository-local', () => {
  const refs = [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map((m)=>m[1]);
  for (const ref of refs) {
    assert.ok(!/^https?:/i.test(ref), `network resource: ${ref}`);
    const absolute = path.resolve(path.dirname(HTML_PATH), ref);
    if (ref.endsWith('.js') || ref.endsWith('.css')) assert.ok(fs.existsSync(absolute), `missing local resource ${ref}`);
  }
});

test('browser keeps accessibility floor', () => {
  assert.match(html,/aria-live/);
  assert.match(html,/type="file"/);
  const css=fs.readFileSync(path.join(ROOT,'artifacts','maxhinal','maxhinal-bench.css'),'utf8');
  assert.match(css,/:focus-visible/);
  assert.match(css,/prefers-reduced-motion/);
});
