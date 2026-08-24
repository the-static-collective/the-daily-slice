# Toastloaf 001 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish the first braided Toastloaf as a same-day Daily Slice projection that composes selected atomic slices without replacing them, then make it discoverable from the daily index and chronology.

**Architecture:** Add one new Markdown publication beside the 2026-08-24 atomic slices. The loaf carries its own source links, counterpressure, synthesis, radio-addressable score, and serving receipt; existing source slices remain unchanged. Then add minimal navigation references to the daily index and chronology. No template, automation, or radio integration is introduced.

**Tech Stack:** Markdown, GitHub repository content, existing Daily Slice directory conventions.

**Spec:** `docs/superpowers/specs/2026-08-24-toastloaf-braided-edition-design.md`

## Global Constraints

- Atomic slices remain the historical units.
- Toastloaf does not replace `slices/2026/08/2026-08-24/index.md`.
- Toastloaf 001 uses epistemic posture `PROJECTION / SYNTHESIS`.
- Counterpressure must appear inside the loaf, not only in metadata.
- The score is radio-addressable, not a finished broadcast script.
- Source slices remain unchanged.
- Human/project-local admission remains outside the Toastloaf layer.
- `PROMOTION: NONE`.
- Do not add a reusable template, automation, or radio integration in this implementation.

---

### Task 1: Bake Toastloaf 001

**Files:**
- Create: `slices/2026/08/2026-08-24/toastloaf-001-the-creature-learns-to-bake.md`
- Read only: `slices/2026/08/2026-08-24/daily-digestion-001-the-creature-has-a-stomach-now.md`
- Read only: `slices/2026/08/2026-08-24/reality-bakers.md`
- Read only: `slices/2026/08/2026-08-24/trust-the-process-causal-canon.md`
- Read only: `slices/2026/08/2026-08-24/the-river-under-the-river.md`
- Read only: `slices/2026/08/2026-08-24/banana-elf-survives-sobriety.md`
- Read only: `slices/2026/08/2026-08-24/the-trace-and-the-hidden-edge.md`
- Read only: `slices/2026/08/2026-08-24/daily-slice-learns-to-speak.md`

**Interfaces:**
- Consumes: existing atomic Daily Slice Markdown files and their declared epistemic/authority boundaries.
- Produces: one Markdown publication with stable section headings `THE CRUST`, `THE INGREDIENTS`, `THE KNEAD`, `THE OVEN`, `THE CRUMB`, `THE SCORE`, `FALLEN LOAVES`, `CRUMBS FOR TOMORROW`, and `SERVING RECEIPT`.

- [ ] **Step 1: Verify every required source file exists and record its exact filename**

Run:

```bash
for f in \
  daily-digestion-001-the-creature-has-a-stomach-now.md \
  reality-bakers.md \
  trust-the-process-causal-canon.md \
  the-river-under-the-river.md \
  banana-elf-survives-sobriety.md \
  the-trace-and-the-hidden-edge.md \
  daily-slice-learns-to-speak.md; do
  test -f "slices/2026/08/2026-08-24/$f" || exit 1
done
```

Expected: exit status `0` and no output.

- [ ] **Step 2: Create the loaf with the required publication skeleton**

Create `slices/2026/08/2026-08-24/toastloaf-001-the-creature-learns-to-bake.md` beginning with:

```markdown
# TOASTLOAF 001 — The Creature Learns to Bake

**Date:** 2026-08-24  
**Status:** PROJECTION / SYNTHESIS  
**Promotion:** NONE

> **Same song. Different measure. Shared history. Bake strange things. Keep the receipts.**

## THE CRUST

## THE INGREDIENTS

## THE KNEAD

## THE OVEN

## THE CRUMB

## THE SCORE

## FALLEN LOAVES

## CRUMBS FOR TOMORROW

## SERVING RECEIPT
```

Expected: all nine section headings are present exactly once.

- [ ] **Step 3: Fill `THE INGREDIENTS` with direct links to all seven required source slices**

Use relative links in this form:

```markdown
- [DAILY DIGESTION 001 — The Creature Has a Stomach Now](daily-digestion-001-the-creature-has-a-stomach-now.md)
- [Reality Bakers](reality-bakers.md)
- [Trust the process — the causal canon](trust-the-process-causal-canon.md)
- [The river under the river](the-river-under-the-river.md)
- [Banana elf survives sobriety](banana-elf-survives-sobriety.md)
- [The trace and the hidden edge](the-trace-and-the-hidden-edge.md)
- [The Daily Slice learns to speak](daily-slice-learns-to-speak.md)
```

Expected: every required filename appears at least once in the loaf.

- [ ] **Step 4: Write `THE KNEAD` around the approved braid without claiming shared implementation**

The section must include this reading sequence:

```text
encounter
  → hatch
  → carry
  → test
  → admit / refuse
  → receipt
  → expression
  → return
```

Immediately state that this is a composition/reading device and not proof that every project implements one pipeline.

Expected: the sequence is present and the non-equivalence boundary is explicit.

- [ ] **Step 5: Write `THE OVEN` with all required counterpressure**

The section must explicitly preserve:

```text
shared vocabulary may manufacture apparent convergence
metaphor may outrun executable specimens
node integrity does not guarantee relationship integrity
changed rendering / rebirth / carried residue does not prove exact identity
narrative coherence does not promote candidate vocabulary into canon
```

Expected: all five pressures are stated in prose and none is resolved merely for narrative neatness.

- [ ] **Step 6: Write `THE CRUMB` as a bounded inference**

Include the center candidate:

```markdown
> **Continuity is increasingly looking less like “one thing persists” and more like “attributable transformation survives local death.”**
```

Follow it with an explicit statement that this is an inference from the selected slices, not shared law.

Expected: both the candidate and its epistemic limitation are present.

- [ ] **Step 7: Write `THE SCORE` as eight radio-addressable movements**

Use exactly these movement labels in order:

```markdown
1. Encounter
2. Hatch
3. Carry
4. Test
5. Admit / Refuse
6. Receipt
7. Expression
8. Return
```

For each movement, link at least one source slice and add 1–3 sentences of framing. Do not write a finished announcer script, lyrics, or production instructions.

Expected: eight ordered movements, each with source attribution.

- [ ] **Step 8: Write the failure, future-pressure, and receipt sections**

`FALLEN LOAVES` must preserve at least three ideas that did not survive cleanly. `CRUMBS FOR TOMORROW` must contain three to five unresolved pressures. `SERVING RECEIPT` must include:

```text
Date: 2026-08-24
Loaf: TOASTLOAF 001
Posture: PROJECTION / SYNTHESIS
Source slices unchanged: YES
Promotion: NONE
Authority: atomic slices remain historical units; source projects retain local authority
Radio boundary: later broadcast consequences are new attributable events and do not retroactively modify this loaf
```

Expected: all receipt fields are present in human-readable form.

- [ ] **Step 9: Run structural validation**

Run:

```bash
python - <<'PY'
from pathlib import Path
p = Path('slices/2026/08/2026-08-24/toastloaf-001-the-creature-learns-to-bake.md')
text = p.read_text()
sections = [
    '## THE CRUST', '## THE INGREDIENTS', '## THE KNEAD', '## THE OVEN',
    '## THE CRUMB', '## THE SCORE', '## FALLEN LOAVES',
    '## CRUMBS FOR TOMORROW', '## SERVING RECEIPT'
]
sources = [
    'daily-digestion-001-the-creature-has-a-stomach-now.md',
    'reality-bakers.md', 'trust-the-process-causal-canon.md',
    'the-river-under-the-river.md', 'banana-elf-survives-sobriety.md',
    'the-trace-and-the-hidden-edge.md', 'daily-slice-learns-to-speak.md'
]
assert all(text.count(s) == 1 for s in sections)
assert all(s in text for s in sources)
assert 'PROMOTION' in text.upper() and 'NONE' in text.upper()
assert 'PROJECTION / SYNTHESIS' in text
print('toastloaf structure: PASS')
PY
```

Expected: `toastloaf structure: PASS`.

- [ ] **Step 10: Commit the loaf**

```bash
git add slices/2026/08/2026-08-24/toastloaf-001-the-creature-learns-to-bake.md
git commit -m "slice: bake Toastloaf 001"
```

Expected: one commit containing only the new loaf file.

---

### Task 2: Add the loaf to the daily issue

**Files:**
- Modify: `slices/2026/08/2026-08-24/index.md`
- Read: `slices/2026/08/2026-08-24/toastloaf-001-the-creature-learns-to-bake.md`

**Interfaces:**
- Consumes: the completed Toastloaf 001 Markdown publication.
- Produces: one discoverable daily-index entry that clearly labels the loaf as a projection rather than an atomic slice.

- [ ] **Step 1: Add a `TOASTLOAF` section without removing or reordering existing atomic entries**

Add a section near `DAILY DIGESTION` / `Late edition` with this link target:

```markdown
## TOASTLOAF

### [TOASTLOAF 001 — The Creature Learns to Bake](toastloaf-001-the-creature-learns-to-bake.md)
```

Follow with a short paragraph explaining that this is a braided projection of selected same-day slices and that the atomic slices remain the historical units.

Expected: existing slice links and existing sections remain intact.

- [ ] **Step 2: Add the Toastloaf center line to the carried-lines area**

Add:

```markdown
> **Same song. Different measure. Shared history. Bake strange things. Keep the receipts.**
```

Do not delete or replace the existing carried lines.

Expected: the existing lines remain and the Toastloaf line is additive.

- [ ] **Step 3: Validate index references**

Run:

```bash
python - <<'PY'
from pathlib import Path
p = Path('slices/2026/08/2026-08-24/index.md')
text = p.read_text()
assert '## TOASTLOAF' in text
assert '(toastloaf-001-the-creature-learns-to-bake.md)' in text
assert 'atomic slices remain the historical units' in text.lower()
print('daily index toastloaf entry: PASS')
PY
```

Expected: `daily index toastloaf entry: PASS`.

- [ ] **Step 4: Commit the daily-index update**

```bash
git add slices/2026/08/2026-08-24/index.md
git commit -m "index: add Toastloaf 001"
```

Expected: one commit containing only the daily index change.

---

### Task 3: Record the publication projection in chronology

**Files:**
- Modify: `indexes/chronology.md`

**Interfaces:**
- Consumes: the published Toastloaf 001 path and its projection status.
- Produces: one chronology addition that records the loaf without treating it as source authority.

- [ ] **Step 1: Extend the 2026-08-24 chronology entry with the Toastloaf event**

Add a concise clause that states all of the following:

```text
Toastloaf 001 was created as the first braided publication projection
it composes selected same-day slices
it preserves counterpressure and provenance
it exposes an eight-movement radio-addressable score
it does not replace the atomic slices or promote their candidates
```

Expected: the chronology remains one navigational record of the day, not a new canonical summary.

- [ ] **Step 2: Validate chronology wording**

Run:

```bash
python - <<'PY'
from pathlib import Path
text = Path('indexes/chronology.md').read_text()
assert 'Toastloaf 001' in text
assert 'projection' in text.lower()
assert 'atomic' in text.lower()
print('chronology toastloaf entry: PASS')
PY
```

Expected: `chronology toastloaf entry: PASS`.

- [ ] **Step 3: Commit the chronology update**

```bash
git add indexes/chronology.md
git commit -m "chronology: record Toastloaf 001"
```

Expected: one commit containing only the chronology change.

---

### Task 4: Verify the loaf did not alter its ingredients

**Files:**
- Verify only: all seven required source slices
- Verify: `slices/2026/08/2026-08-24/toastloaf-001-the-creature-learns-to-bake.md`
- Verify: `slices/2026/08/2026-08-24/index.md`
- Verify: `indexes/chronology.md`

**Interfaces:**
- Consumes: commits from Tasks 1–3.
- Produces: final evidence that the implementation is additive and bounded.

- [ ] **Step 1: Inspect the branch diff against the pre-implementation base**

Run:

```bash
git diff --name-status <BASE_SHA>..HEAD
```

Replace `<BASE_SHA>` with the commit at which implementation began.

Expected changed paths only:

```text
A  slices/2026/08/2026-08-24/toastloaf-001-the-creature-learns-to-bake.md
M  slices/2026/08/2026-08-24/index.md
M  indexes/chronology.md
```

No atomic source slice may appear as modified.

- [ ] **Step 2: Re-run all structural validations together**

Run the validation snippets from Tasks 1–3.

Expected: all three print `PASS`.

- [ ] **Step 3: Manually review the loaf against the failure conditions in the spec**

Confirm in the review notes:

```text
not merely a longer index: PASS / FAIL
source slices directly reachable: PASS / FAIL
counterpressure visible: PASS / FAIL
candidate terms remain provisional: PASS / FAIL
no shared implementation grammar claimed: PASS / FAIL
score does not promote or rewrite: PASS / FAIL
source slices unchanged: PASS / FAIL
new relation-level value is explicit: PASS / FAIL
```

Expected: all eight checks are `PASS` before completion is claimed.

- [ ] **Step 4: Record final verification in the pull request**

Post the three automated validation outputs plus the eight manual review results in the PR conversation.

Expected: the PR contains an attributable verification receipt before merge.
