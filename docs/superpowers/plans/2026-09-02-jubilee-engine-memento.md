# Jubilee Engine MEMENTO Beacon Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add one MEMENTO front-room beacon for Timefork/descendant-memory pressure without admitting any new MEMENTO state.

**Architecture:** `front-room/` is the native bounded orientation surface. The beacon is retrieval/orientation only: no source card, crossing, ledger mutation, or chapter admission is created by the beacon itself.

**Tech Stack:** Markdown; MEMENTO repository validation.

**Spec:** `docs/superpowers/specs/2026-09-02-jubilee-engine-lighthouse-design.md`

## Global Constraints

- `SOURCE != STORY CANON` and `proposed != admitted` remain hard boundaries.
- Later interpretation may not rewrite earlier testimony.
- The beacon MUST NOT create or imply an admitted relation.

---

### Task 1: Write the front-room beacon

**Files:**
- Create: `front-room/jubilee-engine-lighthouse.md`

- [ ] Write these sections:

```markdown
# Jubilee Engine Lighthouse — MEMENTO Port

**Status:** orientation / admission none

## Source lighthouse
## Local jurisdiction
## HughJackmanJournal pressure
## Timefork questions
## Refusal boundary
```

- [ ] `## Local jurisdiction` says MEMENTO owns descendant-memory, relation birthdays, and later-reading-without-rewrite pressure only.
- [ ] `## HughJackmanJournal pressure` asks for a future traversal that walks backward through attributable formation, then forward with hindsight removed at each cut.
- [ ] `## Timefork questions` asks:

```text
Which relations existed at the earlier cut?
Which relations were discovered later?
Which later readings became future causal inputs without becoming past causes?
Can a correction remain a descendant rather than an edit to predecessor testimony?
```

- [ ] `## Refusal boundary` includes:

```text
BEACON != CROSSING
ORIENTATION != ADMISSION
LATER READING != EARLIER CAUSE
CHAPTER != AUTHORITY
```

### Task 2: Verify

- [ ] Run:

```bash
node --test
node scripts/validate.mjs
node scripts/compile-context-pack.mjs --world same-room-a0 --depth 1
git diff --check
```

Expected: pass.

- [ ] Confirm no paths under `crossings/`, `ledger/`, `sources/`, or `chapters/` changed.
- [ ] Commit:

```bash
git add front-room/jubilee-engine-lighthouse.md
git commit -m "docs: add Jubilee Engine MEMENTO beacon"
```
