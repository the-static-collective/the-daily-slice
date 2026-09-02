# Jubilee Engine 3rdi Beacon Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add one 3rdi research beacon that pressures the difference between structural handoff presence and observer-local availability, attention, interpretation, and action.

**Architecture:** The beacon lives under `research/` and changes no projection compiler behavior. It defines observer-cut questions that can later lower to existing 3rdi specimens if they expose a real discriminator.

**Tech Stack:** Markdown; 3rdi Python 3.11+ validation surface.

**Spec:** `docs/superpowers/specs/2026-09-02-jubilee-engine-lighthouse-design.md`

## Global Constraints

- Preserve: `Occurrence is anchored. Availability changes. Attention moves. Relevance can grow. Causation does not rewrite itself.`
- Structural presence, observer availability, attention, decoding, acceptance, and action remain distinct.
- Beacon PR changes no kernel/runtime behavior.

---

### Task 1: Write the observer-cut beacon

**Files:**
- Create: `research/JUBILEE-ENGINE-LIGHTHOUSE-001.md`

- [ ] Write sections:

```markdown
# JUBILEE-ENGINE-LIGHTHOUSE-001

**Status:** observer-cut pressure / no promotion

## Source lighthouse
## Local jurisdiction
## Required cuts
## Candidate discriminators
## Refusal boundary
```

- [ ] `## Required cuts` asks for at least these future views:

```text
edge structurally exists, observer cannot access it
edge available, observer does not attend to it
edge attended, decoder cannot classify it
edge decoded, observer rejects it
edge accepted, edge is still not taken
later decoder reveals a relation that was unavailable at the earlier cut
```

- [ ] `## Candidate discriminators` includes:

```text
STRUCTURAL_EDGE
AVAILABLE_EDGE
ATTENDED_EDGE
DECODED_EDGE
ACCEPTED_EDGE
TAKEN_EDGE
```

and states these are research labels only until existing 3rdi fields prove insufficient.

- [ ] `## Refusal boundary` includes:

```text
STRUCTURAL != AVAILABLE
AVAILABLE != ATTENDED
ATTENDED != DECODED
DECODED != ACCEPTED
ACCEPTED != TAKEN
LATER RELEVANCE != EARLIER CAUSE
PROJECTION != AUTHORITY
```

### Task 2: Verify

- [ ] Run:

```bash
python3 -m unittest discover -s tests -v
python3 skills/3rdi/scripts/run_labs.py --check
git diff --check
```

If the host skill validator is available in the execution environment, additionally run the existing repository command documented in `AGENTS.md`; do not make it a new CI dependency.

- [ ] Confirm only `research/JUBILEE-ENGINE-LIGHTHOUSE-001.md` changed.
- [ ] Commit:

```bash
git add research/JUBILEE-ENGINE-LIGHTHOUSE-001.md
git commit -m "docs: add Jubilee Engine 3rdi beacon"
```
