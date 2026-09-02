# Jubilee Engine National Treasure Beacon Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add one National Treasure thread beacon that points to the Daily Slice lighthouse and frames only cross-case/adversarial research pressure.

**Architecture:** Use `threads/`, not `cases/`, so the beacon cannot impersonate landed case state. The file contains no source aggregation upgrade and no root README change.

**Tech Stack:** Markdown; National Treasure repository rules.

**Spec:** `docs/superpowers/specs/2026-09-02-jubilee-engine-lighthouse-design.md`

## Global Constraints

- Create only `threads/jubilee-engine-lighthouse.md`.
- Do not touch `cases/**` or root `README.md`.
- Resemblance may nominate a clue; it may not establish ancestry.
- The beacon is `CANDIDATE PRESSURE / NO PROMOTION`.

---

### Task 1: Write the beacon

**Files:**
- Create: `threads/jubilee-engine-lighthouse.md`

- [ ] Write these sections:

```markdown
# Jubilee Engine Lighthouse — National Treasure Port

**Status:** candidate pressure / no promotion

## Source lighthouse
## Local jurisdiction
## Pressure questions
## Adversarial controls
## Refusal boundary
```

- [ ] `## Source lighthouse` links to the Daily Slice dated lighthouse.
- [ ] `## Local jurisdiction` says National Treasure owns cross-case structural/symbolic comparison only.
- [ ] `## Pressure questions` asks exactly:

```text
Can relation-before-judgment be found in independent domains without importing this vocabulary?
Can a lawful next edge remain available without compulsion?
Can pairwise relations support a coherent whole without the whole erasing pairwise differences?
Can a later classification be shown to have been retrojected as primitive?
Can handoff preserve ancestry while enabling novelty?
```

- [ ] `## Adversarial controls` requires at least one negative specimen for each surviving positive pattern.
- [ ] `## Refusal boundary` includes:

```text
RESEMBLANCE != ANCESTRY
CROSS-CASE COHERENCE != SHARED SOURCE
LIGHTHOUSE != NATIONAL TREASURE LAW
```

### Task 2: Verify

- [ ] Run:

```bash
node --test tools/case-registry/check.test.mjs
node tools/case-registry/check.mjs
git diff --check
```

Expected: pass; no case-registry violation.

- [ ] Confirm changed paths contain only `threads/jubilee-engine-lighthouse.md`.
- [ ] Commit:

```bash
git add threads/jubilee-engine-lighthouse.md
git commit -m "docs: add Jubilee Engine National Treasure beacon"
```
