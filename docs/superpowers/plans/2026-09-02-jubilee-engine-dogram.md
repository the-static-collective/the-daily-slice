# Jubilee Engine Dogram Beacon Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add one Dogram research beacon that defines the exact finite calculations to pressure while preserving `meaning = none`.

**Architecture:** The first landing is documentation only under `research/`. It does not add a public operator or specimen yet; it defines the future calculation queue and the assumptions that must be ablated before a 12-field result can survive.

**Tech Stack:** Markdown; Dogram Python 3.12+ repository for later execution.

**Spec:** `docs/superpowers/specs/2026-09-02-jubilee-engine-lighthouse-design.md`

## Global Constraints

- `DO THE MATH. SHOW THE DELTA. KEEP THE RECEIPT. DO NOT DECIDE WHAT IT MEANS.`
- Graph reachability does not establish history, cause, morality, theology, or authority.
- No public Dogram operator changes in the beacon PR.

---

### Task 1: Write the finite-math beacon

**Files:**
- Create: `research/JUBILEE-ENGINE-LIGHTHOUSE-001.md`

- [ ] Write sections:

```markdown
# JUBILEE-ENGINE-LIGHTHOUSE-001

**Status:** finite pressure queue / meaning none

## Source lighthouse
## Local jurisdiction
## Exact counts
## Assumptions to ablate
## Future smallest specimens
## Refusal boundary
```

- [ ] `## Exact counts` states only:

```text
|{P,F,C}| = 3
C(3,2) = 3 unordered pairs
3 primitives + 3 pair products = 6 explicit labels
one separately declared coherent whole gives the 6/7 presentation
3 vertices x degree 2 = 6 vertex-edge incidences in K3
6 incidences x 2 directed traversals = 12 candidate directed incidences IF reverse traversal is admitted
```

- [ ] `## Assumptions to ablate` lists:

```text
commutativity of pair composition
independence of P/F/C
uniqueness of the three pair labels
existence/non-redundancy of the seventh coherent whole
reversibility of each incidence
equivalence or non-equivalence of reverse handoffs
whether 12 counts directed incidence or a stronger semantic handoff object
```

- [ ] `## Future smallest specimens` proposes only future candidates, not implementations:

```text
JUBILEE-K3-COUNT-001
JUBILEE-PAIR-ABLATION-001
JUBILEE-SEVENTH-WHOLE-001
JUBILEE-DIRECTION-001
JUBILEE-REVERSE-SEMANTICS-001
```

- [ ] `## Refusal boundary` includes:

```text
COUNT != MEANING
GRAPH EDGE != LAWFUL AGREEMENT
DIRECTED INCIDENCE != CONSENT
12 != PROOF OF TWELVE-FIELD ONTOLOGY
```

### Task 2: Verify

- [ ] Run the current Dogram suite:

```bash
python -m unittest discover -s tests -v || pytest -q
git diff --check
```

Use the test runner actually configured on the target branch; do not add a dependency merely to satisfy this docs-only change.

- [ ] Confirm only `research/JUBILEE-ENGINE-LIGHTHOUSE-001.md` changed.
- [ ] Commit:

```bash
git add research/JUBILEE-ENGINE-LIGHTHOUSE-001.md
git commit -m "docs: add Jubilee Engine Dogram beacon"
```
