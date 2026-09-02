# Jubilee Engine LOADOUT Beacon Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add one LOADOUT docs beacon that pressures the little yes against existing availability/relevance/binding/authorization distinctions.

**Architecture:** The beacon lives under `docs/` and introduces no runtime object. It asks whether `lawful handoff available` is already expressible as bounded capability/relation availability or whether a future typed distinction is actually needed.

**Tech Stack:** Markdown; existing LOADOUT Python test surface.

**Spec:** `docs/superpowers/specs/2026-09-02-jubilee-engine-lighthouse-design.md`

## Global Constraints

- Preserve `Knowledge may load. Capability may bind. Authority does not silently expand.`
- `availability != relevance != binding != authorization != effect` remains visible.
- The beacon does not create a `little_yes` runtime type.

---

### Task 1: Write the LOADOUT beacon

**Files:**
- Create: `docs/jubilee-engine-lighthouse.md`

- [ ] Write sections:

```markdown
# Jubilee Engine Lighthouse — LOADOUT Port

**Status:** capability/binding pressure / no runtime adoption

## Source lighthouse
## Local jurisdiction
## Little-yes pressure
## Existing distinctions to reuse first
## Refusal tests
```

- [ ] `## Little-yes pressure` asks whether the candidate means only:

```text
from this constituted state, this next composition is available under the declared grammar
```

- [ ] `## Existing distinctions to reuse first` lists:

```text
availability
relevance
reachability
binding
fence
authorization source
owner gate
effect
receipt
```

- [ ] `## Refusal tests` includes:

```text
AVAILABLE HANDOFF != BOUND HANDOFF
BOUND HANDOFF != AUTHORIZED EFFECT
AUTHORIZED EFFECT != TAKEN EFFECT
RECEIPT != AUTHORITY
SOURCE PROPOSAL != DESTINATION EXECUTABLE EDGE
```

- [ ] State that a new primitive is rejected unless an existing LOADOUT distinction cannot represent a real discriminator exposed by at least two hostile specimens.

### Task 2: Verify

- [ ] Run:

```bash
pytest -q
git diff --check
```

Expected: pass.

- [ ] Confirm no changes under `src/`, `schemas/`, `fixtures/`, `evals/`, or tests.
- [ ] Commit:

```bash
git add docs/jubilee-engine-lighthouse.md
git commit -m "docs: add Jubilee Engine LOADOUT beacon"
```
