# MADD Hugh Jackman Maxhinal — Dual-Interface Slice Combustion Engine

**Date:** 2026-08-31  
**Status:** APPROVED ARCHITECTURE · SPECIFICATION · IMPLEMENTATION NOT STARTED  
**Repository:** `the-static-collective/the-daily-slice`

## Purpose

Turn the existing Hugh Jackman Discontinuity Machine into the single primary Daily Slice artifact instrument: a deterministic, local-first machine that consumes Daily Slice records as fuel, performs declared transformations, and emits attributable projections plus a complete portable ride receipt.

The same engine must be equally usable by a human in the browser and by an agent through a CLI / JSON surface.

Working name:

> **THE MADD HUGH JACKMAN MAXHINAL**  
> *a Daily Slice combustion engine*

The Maxhinal is not a gallery, publication renderer, truth engine, ontology service, or authority surface.

It is a toolbench.

```text
SLICE GAS
    ↓
DECLARED OPERATION
    ↓
PROJECTION + RESIDUAL + RECEIPT
```

Core seal:

> **THE MACHINE MAY BURN THE SLICES. IT MAY NOT BURN THE RECEIPTS.**

---

# 1. Existing floor

The current Discontinuity Machine already establishes several required properties:

- local Slice corpus search;
- local weird-relative suggestion;
- explicit relation verdicts;
- MADDCL0WN pressure questions;
- creative sidecar output including refusal;
- retained bad spins;
- no required network access;
- `file://` usability;
- generated `window.DAILY_SLICE` corpus projection;
- local rebuild script for that corpus;
- receipt-oriented witness posture;
- `authority:none` and `promotion:NONE` boundaries.

The Maxhinal extends this floor instead of replacing it with a separate app.

The existing Discontinuity workflow becomes the first chamber of the larger machine.

---

# 2. Artifact contract

The Daily Slice artifact species is narrowed by this design.

A primary artifact SHOULD be a usable tool that consumes one or more Daily Slice records.

```text
artifact tool
    consumes slice refs
    performs declared operation(s)
    emits projection(s)
    preserves source roads
    preserves uncertainty / refusal / residual
    emits a receipt
```

A static visual may still exist as an export or companion, but the default artifact species is an instrument.

Candidate rule:

> **IF IT DOES NOT EAT SLICES, IT PROBABLY IS NOT A PRIMARY DAILY SLICE ARTIFACT.**

This rule is architectural guidance, not a retroactive deletion rule for existing SVG / HTML companions.

---

# 3. Constitutional invariants

The Maxhinal must preserve these distinctions across every chamber and interface.

```text
slice gas != generated output
output != new slice
composition != evidence
similarity != lineage
endpoint != formation walk
projection != source record
receipt != authority
MADDCL0WN survival != promotion
math transform != claim about nature
browser interface != semantic owner
CLI interface != semantic owner
random-looking output != unreceipted randomness
```

Further:

```text
source slices are immutable gas
operations append to ride history
bad spins remain attributable
refusal is a first-class output
hidden source material does not become visible by inference
later knowledge does not rewrite earlier observer state
co-phase does not imply agreement, evidence, support, or authority
```

Authority remains:

```text
authority: none
promotion: none
```

unless a separate owning-project process explicitly admits something elsewhere.

---

# 4. Architectural shape

The Maxhinal has one deterministic semantic core and two peer interfaces.

```text
             generated/slice-corpus.js
                       ↓
                maxhinal-core.js
                 ↙           ↘
        browser bench       CLI / JSON bench
                 ↘           ↙
               .maxhinal.json
               ride / receipt
```

## 4.1 Core owns semantics

`maxhinal-core.js` owns:

- corpus search and selection helpers;
- operation definitions;
- operation sequencing;
- deterministic random stream / seed handling;
- ride-state transitions;
- receipt generation;
- input validation;
- chamber transforms;
- residual / refusal representation;
- serialization / deserialization of portable rides.

The browser MUST call the core.

The CLI MUST call the same core.

No semantic rule may exist only in the browser or only in the CLI.

## 4.2 Browser owns interaction

The browser surface owns:

- corpus search / browsing;
- fuel rack selection;
- controls for chamber parameters;
- visualizations;
- MADDCL0WN lever;
- receipt inspection;
- ride import/export;
- local download / copy conveniences.

It does not own semantic transforms.

## 4.3 CLI owns machine invocation

The CLI surface owns:

- reading a job JSON or command-line arguments;
- loading the generated corpus;
- invoking the core;
- printing JSON / Markdown receipts;
- reading and extending prior `.maxhinal.json` rides;
- deterministic noninteractive execution.

It does not own semantic transforms.

---

# 5. Fuel model

A loaded Slice record is `gas`.

A minimal gas reference is:

```json
{
  "slice_id": "2026-08-31/the-walk-braid",
  "corpus_digest": "<digest>",
  "title": "THE WALK BRAID"
}
```

The ride MAY retain selected excerpts or extracted candidate values, but the original Slice record remains addressable separately.

Gas rules:

1. loading gas does not mutate the Slice;
2. removing gas from the current rack does not erase prior ride history;
3. every operation records exactly which gas refs it consumed;
4. generated output never silently becomes gas from the historical corpus;
5. a generated output may be explicitly fed into a later operation as `derived_input`, with ancestry retained;
6. derived input remains distinguishable from historical Slice gas.

```text
historical gas != derived intermediate
```

---

# 6. Ride model

A complete Maxhinal session is a first-class portable artifact:

```text
*.maxhinal.json
```

A ride is append-only at the semantic level.

Minimal conceptual shape:

```json
{
  "format": "maxhinal/v0",
  "ride_id": "...",
  "created_at": "...",
  "corpus": {
    "digest": "...",
    "record_count": 0
  },
  "seed": "...",
  "gas": [],
  "operations": [],
  "outputs": [],
  "residuals": [],
  "bad_spins": [],
  "authority": "none",
  "promotion": "NONE"
}
```

Each operation record carries at minimum:

```json
{
  "operation_id": "...",
  "mode": "walk-braid",
  "inputs": [],
  "parameters": {},
  "co_phase": "co|not-co|unknown",
  "seed_offset": 0,
  "output_refs": [],
  "residual_refs": [],
  "receipt": {}
}
```

The exact v0 schema is implementation-owned and may be smaller than this illustration, but the distinctions above must survive.

---

# 7. Human / agent parity

The same ride must be movable between human and agent without prose reconstruction.

```text
HUMAN RIDE
   ↓ export
.maxhinal.json
   ↓ load
AGENT RIDE
   ↓ extend
.maxhinal.json
   ↓ load
HUMAN RIDE
```

Required properties:

- browser can import a valid ride;
- CLI can import the same ride;
- both reproduce the same completed operation history;
- either may append new operations;
- prior operations remain unchanged;
- exported rides contain sufficient seed and corpus identity to diagnose replay drift;
- a corpus mismatch is surfaced explicitly rather than silently ignored.

The Maxhinal therefore becomes a shared instrument, not two implementations with similar names.

---

# 8. Determinism and randomness

The current creative spinner uses runtime randomness. Maxhinal v0 makes randomness seeded and receipted.

Required law:

```text
same corpus digest
+ same ride input
+ same operation sequence
+ same parameters
+ same seed
= same deterministic outputs
```

A `RESPIN` action does not overwrite an earlier spin.

It appends a new operation or bad-spin descendant with a new deterministic seed position / derived seed.

```text
BAD SPINS ARE REPRODUCIBLE BAD SPINS.
```

Implementation may use a small local PRNG with an explicit seed rather than platform `Math.random()`.

No cryptographic claim is implied by deterministic replay.

---

# 9. Chambers

The first Maxhinal cut contains eight small chambers over the same shared fuel / ride engine.

The goal is not maximal feature depth per chamber. The goal is one interoperable machine whose chambers can be composed.

## 9.1 DISCONTINUITY

Existing workflow retained and adapted to the shared engine.

Inputs:

- usually two Slice refs;
- optional reason / verdict context.

Operations:

- search;
- weird-relative suggestion;
- continuity / lineage / successor / new occurrence / unresolved verdict;
- pressure question;
- creative spin / refusal;
- bad-spin retention.

Output:

- relation projection;
- pressure question;
- optional creative sidecar;
- receipt.

## 9.2 WALK BRAID

Consumes selected slices or derived occurrences and places them on the working grammar:

```text
PREDICT -> COMPOSE -> CONSTRUCT -> CREATE
```

with relational phase:

```text
not-co / co / unknown
```

The chamber records walk order separately from endpoint state.

Hard control:

```text
V x Z2 grid alone does not imply noncommutativity.
```

If verb lift and co-toggle are independent, the square may commute.

The chamber preserves the distinct path receipt unless an explicit quotient is requested.

Output:

- endpoint projection;
- walk receipt;
- commuting-square / order-sensitive diagnostic;
- residuals.

## 9.3 FIBER

Consumes one target projection / claim plus selected Slice gas.

Purpose:

- show multiple roads compatible with the same visible endpoint;
- preserve unresolved multiplicity;
- distinguish source set from chosen representative.

Output:

- compatible-road set;
- exclusions with declared reason where possible;
- optional representative selection marked as policy;
- receipt.

Hard law:

```text
ARGMIN / REPRESENTATIVE CHOICE != THE FIBER ITSELF.
```

## 9.4 COMPOSE

Consumes 2+ Slice gas records or derived intermediates.

Purpose:

- create an attributable composition without silently promoting it;
- preserve source ordering and roads;
- permit manual rearrangement;
- emit a composed packet that can feed later chambers.

Output:

- composed intermediate;
- source map;
- declared ordering;
- residual disagreements / unresolved seams;
- receipt.

Hard law:

```text
COMPOSITION != EVIDENCE.
```

## 9.5 PRESSURE CRUCIBLE

Consumes a candidate relation, composition, fiber, or selected Slice set.

Purpose:

- generate the smallest discriminating next question / hostile test;
- preserve refusal when no useful discriminator is available;
- keep candidate explanation separate from promotion.

Output:

- pressure question;
- candidate probe;
- counterpressure;
- `NONE_OF_THE_ABOVE` / refusal where appropriate;
- receipt.

Hard law:

```text
STRANGE HYPOTHESES SHOULD PAY FOR THEIR NEXT QUESTION.
```

## 9.6 MOVING ORIGIN

Consumes a selected Slice as current origin plus attributable related Slice roads.

Purpose:

- reorganize visible before / now / after relations around a movable current cut;
- preserve original occurrence anchors;
- avoid rewriting chronology when focus changes.

Output:

- current-origin projection;
- carried past / future-facing relation set;
- unavailable / unresolved roads;
- receipt.

Hard law:

```text
NEW CURRENT != OLD CURRENT REWRITTEN.
```

## 9.7 QUANTUMSLINKY

Consumes numeric / interval candidates explicitly selected or extracted from Slice gas.

The chamber never treats extracted numbers as evidence of physical or historical meaning by default.

V0 calculations include:

```math
P_m(j)=j+m \pmod N
```

```math
\#components=\gcd(N,m)
```

```math
orbit\_length=\frac{N}{\gcd(N,m)}
```

```math
k=Nw+r
```

and, when the twisted-boundary model is explicitly selected,

```math
\kappa_{n,k}^{(m)}=\frac{2\pi}{L}\left(n+\frac{km}{N}\right).
```

Output:

- exact arithmetic results;
- selected model name;
- source provenance for each input value;
- model assumptions;
- residual / interpretation warning;
- receipt.

Hard law:

```text
MATH TRANSFORM != CLAIM ABOUT NATURE.
```

## 9.8 MADDCL0WN

MADDCL0WN exists both as a chamber and as a cross-machine intervention.

As a chamber:

- deliberately collide selected gas / intermediates;
- find suspicious relatives;
- generate hostile relation questions;
- permit absurd composition;
- preserve what survives pressure;
- preserve refusal / bad spins.

As a global lever:

- acts on the currently selected operation or derived output;
- appends counterpressure rather than replacing the prior result.

Hard law:

```text
MADDCL0WN SURVIVAL != PROMOTION.
```

---

# 10. Chamber composition

A ride may pass outputs from one chamber into another.

Example:

```text
SLICE GAS
  -> FIBER
  -> COMPOSE
  -> WALK BRAID
  -> PRESSURE
  -> MADDCL0WN
  -> QUANTUMSLINKY
```

Each step appends to the same ride receipt.

The machine must distinguish:

```text
historical slice input
from
prior chamber output
```

The operation graph may branch.

V0 does not require arbitrary visual graph editing; an append-only linear operation list with references to prior outputs is sufficient if it can represent branching ancestry.

---

# 11. Co-phase

`co` is a phase on an operation, not a separate AI mode and not an authority claim.

An operation may record:

```text
co
not-co
unknown
```

This may describe whether the operation was performed collaboratively / relationally under the declared session rules.

It does not imply:

```text
agreement
shared belief
evidence
support
authority
consent outside the scoped operation
canon
```

A human can perform a not-co operation.

An agent can perform a not-co operation.

A shared ride can explicitly record a co-operation when the session declares that relation.

The receipt must preserve when co-phase entered or left the walk.

---

# 12. Corpus identity and replay drift

Portable rides must bind to the corpus they consumed sufficiently to diagnose replay.

The generated Slice corpus should expose a deterministic corpus digest derived from its normalized indexed content or from a deterministic manifest used to generate it.

A ride stores that digest.

On import:

```text
ride corpus digest == local corpus digest
    -> exact corpus replay eligible

ride corpus digest != local corpus digest
    -> drift warning
```

Drift does not automatically invalidate the historical ride.

The imported ride remains a receipt of what happened under its original corpus identity.

The user / agent may choose to:

- inspect historical ride only;
- re-run against current corpus as a new descendant ride;
- explicitly map missing / changed Slice refs.

No silent rebinding.

---

# 13. CLI / JSON surface

The CLI should support both direct invocation and job files.

Illustrative command:

```text
node scripts/maxhinal-cli.js run \
  --gas 2026-08-31/the-walk-braid \
  --mode walk-braid \
  --seed 12345 \
  --json
```

Illustrative job:

```json
{
  "format": "maxhinal-job/v0",
  "gas": [
    "2026-08-31/the-walk-braid",
    "2026-08-31/another-slice"
  ],
  "seed": "12345",
  "operations": [
    {"mode": "fiber", "parameters": {}},
    {"mode": "compose", "parameters": {}},
    {"mode": "pressure", "parameters": {}},
    {"mode": "quantumslinky", "parameters": {"N": 72, "m": 5}}
  ]
}
```

CLI outputs should support:

```text
--json
--markdown
--ride <path>
```

Exact flags may change during implementation if the resulting surface is smaller and clearer.

The required contract is semantic parity with the browser, not preservation of these exact spellings.

---

# 14. Browser surface

The browser remains a single local-first artifact page.

Primary regions:

```text
MASTHEAD / MACHINE STATUS

FUEL RACK
  search corpus
  selected gas
  weird relatives

CHAMBER SELECTOR
  Discontinuity
  Walk Braid
  Fiber
  Compose
  Pressure
  Moving Origin
  QuantumSlinky
  MADDCL0WN

WORKBENCH
  chamber-specific controls + visualization

GLOBAL MADDCL0WN LEVER

RIDE STRIP
  operation history
  bad spins
  residuals
  co-phase changes

RECEIPT SIDECAR
  inspect / copy / export / import
```

The UI may keep the current rough editorial / machine aesthetic.

One shared visual style is not required for every internal visualization.

Accessibility floor:

- keyboard-operable controls;
- visible focus;
- responsive layout;
- reduced-motion respect;
- readable non-color-only state distinctions;
- no essential information available only through animation.

---

# 15. Error and refusal model

Expected non-success outcomes are first-class.

Examples:

- Slice ref absent from current corpus;
- imported ride corpus drift;
- invalid operation parameters;
- insufficient gas for a chamber;
- no discriminating pressure question;
- QuantumSlinky missing required declared model parameter;
- unsupported derived-input type;
- malformed ride file;
- deterministic replay mismatch;
- creative refusal / `NO SONG`;
- MADDCL0WN finds no useful surviving relation.

These return typed residual / refusal records where practical.

They do not silently disappear.

The machine should prefer:

```text
UNRESOLVED
REFUSED
INSUFFICIENT_INPUT
CORPUS_DRIFT
INVALID_MODEL
```

over fabricated completion.

---

# 16. Persistence

V0 adds no database, server, account system, or network persistence.

Persistence is file-based:

- generated Slice corpus in repo;
- browser import/export of `.maxhinal.json`;
- CLI read/write of ride files;
- optional Markdown receipt export.

The browser may use in-memory session state.

LocalStorage is not required for v0.

---

# 17. Security / authority boundary

The Maxhinal is a local interpretive / computational tool.

It must not:

- execute arbitrary code contained in Slice content;
- treat Slice HTML as executable input;
- call external services by default;
- receive repository credentials;
- mutate source Slice Markdown;
- open PRs or promote results by itself;
- claim that a generated relation is evidence;
- claim that a math pattern is physically instantiated;
- claim that co-phase grants authority;
- hide source provenance to make an output look cleaner.

Agent use of the Maxhinal occurs through the CLI / JSON interface plus whatever separate authorized repository tools are available to the agent.

The Maxhinal itself does not gain GitHub write authority.

---

# 18. Proposed file layout

The implementation should prefer a small set of explicit files.

```text
artifacts/2026-08-25/
  hugh-jackman-discontinuity-machine.html
  hugh-jackman-discontinuity-machine.js   # compatibility shim or core import boundary if useful

artifacts/maxhinal/
  maxhinal-core.js
  maxhinal-modes.js                       # optional if core would otherwise become too large
  README.md                               # local usage, not architecture authority

generated/
  slice-corpus.js

scripts/
  build-slice-corpus.js
  maxhinal-cli.js

tests/
  maxhinal-core.test.js
  maxhinal-cli.test.js
```

Exact placement may be adjusted during implementation to match the repository's existing test layout and avoid unnecessary directory proliferation.

One important compatibility constraint:

> Existing paths to the Discontinuity Machine should remain valid if reasonably possible.

The HTML path should therefore preferably stay stable while its rendered title becomes the Maxhinal.

---

# 19. Migration from HJDM

The upgrade should be evolutionary.

Preserve:

- existing corpus search behavior unless a tested change improves it;
- weird-relative semantics unless explicitly revised;
- existing continuity verdict meanings;
- MADDCL0WN pressure behavior as the seed of the global lever;
- creative forms / refusal as a chamber capability;
- current local-first contract;
- existing source Slice roads;
- bad-spin history semantics.

Refactor:

- randomness -> seeded deterministic PRNG;
- HJDM-specific core -> shared Maxhinal core;
- one workflow state -> generic ride state;
- one receipt -> append-only ride receipt;
- browser-only control flow -> browser adapter over core;
- no agent interface -> CLI / JSON adapter over same core.

Do not preserve accidental implementation coupling merely for backwards compatibility.

---

# 20. Testing strategy

Implementation follows TDD for behavior changes.

Minimum core tests:

1. same seed + same job + same corpus -> byte-equivalent semantic result;
2. different respin appends descendant without rewriting prior spin;
3. browser adapter and CLI adapter produce equivalent core result for same job;
4. ride export -> import -> export preserves semantic history;
5. corpus digest mismatch produces explicit drift status;
6. historical Slice gas remains distinct from derived intermediates;
7. every operation records consumed gas / derived refs;
8. MADDCL0WN appends pressure rather than replacing the target;
9. refusal / unresolved results survive serialization;
10. authority and promotion remain `none` / `NONE` by default.

Minimum chamber tests:

### Discontinuity

- existing search and relation pressure regressions remain green;
- creative refusal deterministic under seed.

### Walk Braid

- same endpoint may preserve distinct path words;
- independent verb/co operators are not falsely claimed noncommutative.

### Fiber

- multiple compatible roads remain multiple;
- representative selection is separate metadata.

### Compose

- source refs survive output;
- conflicting source statements are not silently flattened.

### Pressure

- candidate can return discriminator, refusal, or unresolved;
- no auto-promotion.

### Moving Origin

- changing current focus does not mutate occurrence anchors.

### QuantumSlinky

- `gcd(N,m)` / orbit calculations exact;
- invalid `N` / `m` rejected cleanly;
- provenance retained for numeric inputs;
- model output labeled model output.

### MADDCL0WN

- global lever targets current output and appends counterpressure;
- no useful relation may lawfully return refusal.

Minimum CLI tests:

- valid JSON job;
- malformed JSON job;
- missing Slice ref;
- ride continuation;
- JSON output parseable;
- Markdown receipt stable enough for human use;
- nonzero exit status on invalid invocation.

Minimum local-file tests:

- browser artifact makes no required network fetch;
- relative script paths resolve in repository layout;
- `file://` contract retained where supported by browser restrictions.

---

# 21. Acceptance criteria

The first Maxhinal implementation is successful when all of the following are true:

1. the existing Discontinuity Machine path opens the Maxhinal interface;
2. the generated Daily Slice corpus loads locally;
3. a user can select Slice gas once and run at least two different chambers without reloading the corpus;
4. all eight named chambers exist in bounded v0 form;
5. the global MADDCL0WN intervention works against the current chamber output;
6. operation history is appended to one ride;
7. a ride exports as `.maxhinal.json`;
8. that ride imports back into the browser without losing prior operation history;
9. the CLI can load the same corpus and execute an equivalent job through the shared core;
10. the CLI can load and extend a browser-exported ride;
11. browser and CLI deterministic replay agree for the same corpus / seed / job;
12. respins are deterministic descendants rather than destructive replacements;
13. every chamber preserves source Slice references;
14. derived intermediates remain distinct from historical gas;
15. corpus mismatch is explicit;
16. refusal / unresolved / bad-spin outcomes remain visible;
17. no network service, database, auth system, or external model dependency is required;
18. no source Slice is mutated;
19. no output silently gains evidence, support, authority, or canonical status;
20. the full test suite and repository-local syntax / contract checks pass.

---

# 22. Explicit non-goals

V0 does not include:

- hosted web deployment;
- accounts or synchronization server;
- collaborative real-time editing;
- arbitrary plugin architecture;
- model / LLM API calls from the artifact;
- automatic GitHub mutation;
- automatic Slice creation from outputs;
- automatic canon promotion;
- historical artifact migration;
- static artifact gallery redesign;
- generalized graph database;
- production cryptographic signing;
- physical simulation beyond declared lightweight math models;
- claim that the walk braid is topologically noncommutative without an earned transition law;
- claim that spring / yuga / calendar correspondences are historically or physically established.

These may be revisited only after real use pressure.

---

# 23. Recommended implementation sequence

This is design sequencing, not the implementation plan.

A later implementation plan should probably stage the work as:

```text
1. extract deterministic shared core
2. add ride + receipt model
3. adapt existing Discontinuity workflow
4. add CLI parity
5. add remaining bounded chambers
6. add global MADDCL0WN lever
7. add import/export + corpus drift handling
8. verify browser / CLI deterministic equivalence
```

The implementation plan may reorder steps if TDD or dependency analysis shows a smaller route.

---

# 24. Final seal

The Maxhinal is a shared machine for human and agent co-use.

The Slice supplies historical gas.

The core performs declared transforms.

The browser and CLI are two hands on the same mechanism.

The ride remembers the order.

The receipt preserves the road.

```text
SLICE GAS
  -> OPERATION
  -> OPERATION
  -> MADDCL0WN
  -> OPERATION
  -> PROJECTION
  + RESIDUAL
  + RECEIPT
```

> **SAME MACHINE. DIFFERENT HANDS.**
>
> **BAD SPINS ARE REPRODUCIBLE BAD SPINS.**
>
> **CO IS A PHASE ON THE OPERATION, NOT A SPECIAL AI MODE.**
>
> **THE MACHINE MAY BURN THE SLICES. IT MAY NOT BURN THE RECEIPTS.**
