# Jubilee Engine Megazord Coordinator Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Land one dated Jubilee Engine Lighthouse Slice and six thin repo-local beacons without duplicating canon or changing any runtime/authority semantics.

**Architecture:** The Daily Slice owns the full formation witness. National Treasure, MEMENTO, ALEX.2, Dogram, LOADOUT, and 3rdi each receive one small beacon in a native orientation/research location containing only a pointer, local jurisdiction, local pressure questions, refusal boundaries, and explicit non-promotion language. Each repo lands independently so one rejected port does not block the others.

**Tech Stack:** Markdown, Git/GitHub, repository-local validation commands only; no runtime/code/schema changes.

**Spec:** `docs/superpowers/specs/2026-09-02-jubilee-engine-lighthouse-design.md`

## Global Constraints

- The candidate remains `LIGHTHOUSE / CANDIDATE / NOT FROZEN LAW`.
- The full `3 -> 6/7 -> 12` formation witness exists once in The Daily Slice.
- Beacons MUST NOT copy the full formation text or create competing canonical versions.
- `P = Protection`, `F = Faithfulness`, `C = Connection`, the pairwise Love mathals, the `A -> Y` rebase, the `little yes`, and the `12` count remain pressureable candidates.
- `HANDOFF != OUTCOME`, `AVAILABLE EDGE != TAKEN EDGE`, and `ABILITY TO MERGE != OBLIGATION TO MERGE` remain explicit.
- No theological mapping is promoted to doctrine.
- No repo gains another repo's authority by linking the lighthouse.
- No implementation changes may be mixed into beacon PRs.
- Every PR must run that repository's existing validation surface plus `git diff --check` where applicable.

---

## File Structure

### Daily Slice
- Create: `slices/2026/09/2026-09-02/jubilee-engine-lighthouse.md`
- Create: `slices/2026/09/2026-09-02/index.md`
- Create: `threads/jubilee-engine-lighthouse.md`
- Modify: `indexes/chronology.md`

### National Treasure
- Create: `threads/jubilee-engine-lighthouse.md`

### MEMENTO
- Create: `front-room/jubilee-engine-lighthouse.md`

### ALEX.2
- Create: `research/JUBILEE-ENGINE-LIGHTHOUSE-001.md`

### Dogram
- Create: `research/JUBILEE-ENGINE-LIGHTHOUSE-001.md`

### LOADOUT
- Create: `docs/jubilee-engine-lighthouse.md`

### 3rdi
- Create: `research/JUBILEE-ENGINE-LIGHTHOUSE-001.md`

## Public Interface

Every beacon must expose the same four-section minimum contract:

```text
SOURCE LIGHTHOUSE
LOCAL JURISDICTION
PRESSURE QUESTIONS / REFUSAL TESTS
NON-PROMOTION BOUNDARY
```

The Daily Slice thread is the human navigation hub and lists all landed beacon PRs after they exist.

---

### Task 1: Land the Daily Slice lighthouse witness

**Plan:** `docs/superpowers/plans/2026-09-02-jubilee-engine-daily-slice.md`

- [ ] Execute the Daily Slice plan exactly.
- [ ] Verify the dated Slice, daily index, chronology entry, and thread all link correctly.
- [ ] Confirm the Slice says `CANDIDATE / LIGHTHOUSE / NOT FROZEN LAW` near the top.
- [ ] Open one Daily Slice implementation PR against `main` after the design PR is merged or otherwise available on the target branch.

### Task 2: Land National Treasure beacon

**Plan:** `docs/superpowers/plans/2026-09-02-jubilee-engine-national-treasure.md`

- [ ] Execute the National Treasure plan.
- [ ] Confirm the change does not touch `cases/**` or root `README.md`.
- [ ] Open one docs-only PR.

### Task 3: Land MEMENTO beacon

**Plan:** `docs/superpowers/plans/2026-09-02-jubilee-engine-memento.md`

- [ ] Execute the MEMENTO plan.
- [ ] Confirm the front-room beacon does not create a crossing, ledger entry, or admission.
- [ ] Open one docs-only PR.

### Task 4: Land ALEX.2 beacon

**Plan:** `docs/superpowers/plans/2026-09-02-jubilee-engine-alex.md`

- [ ] Execute the ALEX.2 plan.
- [ ] Confirm the beacon is a research pressure packet and does not overwrite historical source layers.
- [ ] Open one docs-only PR.

### Task 5: Land Dogram beacon

**Plan:** `docs/superpowers/plans/2026-09-02-jubilee-engine-dogram.md`

- [ ] Execute the Dogram plan.
- [ ] Confirm the beacon asks Dogram to calculate finite structure without semantic promotion.
- [ ] Open one docs-only PR.

### Task 6: Land LOADOUT beacon

**Plan:** `docs/superpowers/plans/2026-09-02-jubilee-engine-loadout.md`

- [ ] Execute the LOADOUT plan.
- [ ] Confirm `lawful handoff available` remains distinct from binding, permission, and authority.
- [ ] Open one docs-only PR.

### Task 7: Land 3rdi beacon

**Plan:** `docs/superpowers/plans/2026-09-02-jubilee-engine-3rdi.md`

- [ ] Execute the 3rdi plan.
- [ ] Confirm occurrence/availability/attention/relevance boundaries remain intact.
- [ ] Open one docs-only PR.

### Task 8: Close the Megazord loop

**Files:**
- Modify: `threads/jubilee-engine-lighthouse.md`

- [ ] Add the six landed beacon PR/file links under a `## Ports` section.
- [ ] Add one line per port stating its jurisdiction only; do not summarize its findings.
- [ ] Run a link scan by opening each relative link in GitHub or using repository-local Markdown/link tooling if present.
- [ ] Run:

```bash
git diff --check
```

Expected: no whitespace errors.

- [ ] Commit with:

```bash
git add threads/jubilee-engine-lighthouse.md
git commit -m "docs: connect Jubilee Engine lighthouse ports"
```

## Completion Receipt

The Megazord landing is complete only when:

```text
1 canonical dated Slice exists
6 local beacons exist
0 runtime semantics changed
0 authority grants were added
all beacons point back to the same lighthouse witness
all local refusal boundaries remain visible
```

Research begins after the lighthouse is visible; research results do not need to agree.