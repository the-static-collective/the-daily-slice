# MADD Hugh Jackman Maxhinal

The Maxhinal is a local Daily Slice instrument. It consumes Slice records as historical gas and emits derived projections plus append-only ride receipts. It does not mutate Slice history or grant evidence, authority, or promotion.

> **SAME MACHINE. DIFFERENT HANDS.**
>
> **THE MACHINE MAY BURN THE SLICES. IT MAY NOT BURN THE RECEIPTS.**

## Human bench

Open [`../2026-08-25/hugh-jackman-discontinuity-machine.html`](../2026-08-25/hugh-jackman-discontinuity-machine.html) locally after cloning or downloading the repository.

The historical Hugh Jackman artifact path remains the human entry point. It now exposes one Fuel Rack, eight bounded chambers, a global MADDCL0WN lever, one append-only Ride Strip, and `.maxhinal.json` import/export.

## Agent / CLI bench

```bash
node scripts/maxhinal-cli.js run --mode quantumslinky --params '{"N":72,"m":5,"k":364}' --seed demo --json
```

Use `--job <file>` for multi-operation rides and `continue --ride <file>` to extend a prior `.maxhinal.json`.

Example continuation:

```bash
node scripts/maxhinal-cli.js continue \
  --ride demo.maxhinal.json \
  --mode quantumslinky \
  --params '{"N":72,"m":7}' \
  --co co \
  --json
```

## Chambers

- `discontinuity` — continuity / lineage / successor / unresolved pressure plus deterministic creative sidecar;
- `walk-braid` — verb + co-phase walk receipts without falsely assuming noncommutativity;
- `fiber` — retain multiple roads compatible with one visible target;
- `compose` — make an attributable composition without promoting it to evidence;
- `pressure` — ask a bounded discriminating next question;
- `moving-origin` — move the current cut without rewriting occurrence anchors;
- `quantumslinky` — exact cyclic / gcd / winding / optional twisted-boundary calculations;
- `maddclown` — adversarial collision and counterpressure, including lawful refusal.

## Shared contract

- same core, different hands;
- Slice gas != derived output;
- operation history is append-only;
- seeded spins are reproducible;
- corpus drift is explicit;
- refusal and unresolved are first-class;
- co-phase does not imply agreement, evidence, support, authority, or canon;
- authority: `none`;
- promotion: `NONE`.

The browser and CLI both call the same `maxhinal-core.js` / mode registry. Browser code collects parameters and renders state; it does not own chamber semantics.

## Ride files

A `.maxhinal.json` ride preserves corpus identity, seed, loaded gas references, operation order, co-phase, derived outputs, residuals, bad spins, and the authority boundary. A ride may be moved between the browser and CLI and extended without rewriting earlier operations.

## Corpus identity

The current committed `generated/slice-corpus.js` is the older 27-record browser projection. `generated/slice-corpus-meta.js` gives that historical projection an explicit digest so rides can diagnose drift instead of silently rebinding it.

`scripts/build-slice-corpus.js` now emits the deterministic dual-environment `daily-slice-corpus/v1` format. A real repository rebuild should replace the legacy bridge with the current indexed corpus; the bridge is compatibility, not a claim that 27 records are current.

## Boundaries

The Maxhinal does not:

- call an LLM or other external model;
- require network access, a server, account, database, or auth layer;
- execute Slice content as code;
- write GitHub or mutate source Slice Markdown;
- automatically create or promote a Slice;
- turn composition into evidence;
- turn a math transform into a claim about nature.
