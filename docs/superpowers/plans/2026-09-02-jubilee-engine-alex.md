# Jubilee Engine ALEX.2 Beacon Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add one ALEX.2 research beacon that turns the lighthouse into a provenance/rebase research queue without overwriting source layers.

**Architecture:** Place the beacon under `research/` as a pressure packet. It points outward to exact formation witnesses and asks ALEX to separate occurrence, later interpretation, current compression, and external scholarship.

**Tech Stack:** Markdown; ALEX provenance conventions.

**Spec:** `docs/superpowers/specs/2026-09-02-jubilee-engine-lighthouse-design.md`

## Global Constraints

- Preserve ALEX constitutional chain from historical object through claim.
- No descendant silently overwrites the layer before it.
- Research output is not promotion.

---

### Task 1: Write the ALEX research beacon

**Files:**
- Create: `research/JUBILEE-ENGINE-LIGHTHOUSE-001.md`

- [ ] Write sections:

```markdown
# JUBILEE-ENGINE-LIGHTHOUSE-001

**Status:** research queue / no promotion

## Source lighthouse
## Local jurisdiction
## Formation witnesses to recover
## External source families
## Required separations
## Kill / narrowing conditions
```

- [ ] `## Formation witnesses to recover` lists:

```text
inverse-Unforgivable-Curses Love kernel
Protection / Faithfulness / Connection formation
A -> Y hotfix / rebase
little yes / next lawful agreement
June Jubilee Engine material
Timefork / Yellow Yarn formation
```

- [ ] `## External source families` lists relational/process and Trinitarian theology, covenant/hesed/agape/kenosis/perichoresis/freedom, with denominational/historical separation and primary sources preferred.
- [ ] `## Required separations` includes:

```text
source occurrence != later interpretation
later interpretation != current compression
theological analogy != mathematical identity
current name != historical name
research support != authority
```

- [ ] `## Kill / narrowing conditions` requires narrowing if historical or conceptual source material does not support the proposed relation, if mappings depend on retrospective vocabulary, or if independent source families contradict the compression.

### Task 2: Verify

- [ ] Confirm the beacon does not modify existing research packets or source layers.
- [ ] Run the repository's existing test/validation surface used by the current branch, plus:

```bash
git diff --check
```

- [ ] Commit:

```bash
git add research/JUBILEE-ENGINE-LIGHTHOUSE-001.md
git commit -m "docs: add Jubilee Engine ALEX research beacon"
```
