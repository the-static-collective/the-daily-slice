# Toastloaf 001 Braided Brioche Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish TOASTLOAF 001 — The Creature Learns to Bake as a braided Daily Slice projection and expose it through the existing daily index and chronology.

**Architecture:** Keep the loaf historically local to 2026-08-24. The loaf composes selected atomic slices through a thin narrative braid, preserves counterpressure and uncertainty, and provides an eight-movement radio-addressable score without changing source authority. Only the loaf, daily index, and chronology remain in the final publication diff.

**Tech Stack:** Markdown, GitHub repository links, existing Daily Slice conventions.

**Spec:** `docs/superpowers/specs/2026-08-24-toastloaf-braided-edition-design.md`

## Global Constraints

- Atomic slices remain unchanged historical units.
- Toastloaf posture is `PROJECTION / SYNTHESIS`.
- `PROMOTION: NONE`.
- The loaf must preserve disagreement, uncertainty, counterpressure, and project-local authority.
- The `THE SCORE` section is radio-addressable but is not a finished broadcast script.
- Do not create a reusable template, automation, radio integration, or new top-level Toastloaf directory.
- Final publication diff contains exactly three files: the loaf, the 2026-08-24 index, and `indexes/chronology.md`.

---

### Task 1: Bake Toastloaf 001

**Files:**
- Create: `slices/2026/08/2026-08-24/toastloaf-001-the-creature-learns-to-bake.md`
- Read only: the seven source slices named in the spec

**Interfaces:**
- Consumes: selected atomic Daily Slice witnesses from 2026-08-24.
- Produces: one linked publication projection with nine required sections and an eight-movement score.

- [ ] **Step 1: Read the seven source slices and record each slice's posture, strongest claim, uncertainty, and useful relation to the braid.**
- [ ] **Step 2: Draft THE CRUST and THE INGREDIENTS without summarizing the entire day or changing source posture.**
- [ ] **Step 3: Draft THE KNEAD around the candidate reading sequence `encounter → hatch → carry → test → admit/refuse → receipt → expression → return`.**
- [ ] **Step 4: Draft THE OVEN with all five required counterpressures from the design spec.**
- [ ] **Step 5: Draft THE CRUMB around the bounded inference that continuity increasingly resembles attributable transformation surviving local death, explicitly labeling it as inference rather than shared law.**
- [ ] **Step 6: Draft THE SCORE with exactly eight named movements: Encounter, Hatch, Carry, Test, Admit / Refuse, Receipt, Expression, Return; each movement links one or more source slices and remains framing rather than script.**
- [ ] **Step 7: Draft FALLEN LOAVES, CRUMBS FOR TOMORROW, and SERVING RECEIPT; include all required receipt fields and `PROMOTION: NONE`.**
- [ ] **Step 8: Verify headings and required boundary phrases by reading the completed file. Expected: all nine sections present; all seven source paths linked; no statement promotes candidate vocabulary into canon.**
- [ ] **Step 9: Commit the loaf.**

### Task 2: Wire the loaf into the day's navigation

**Files:**
- Modify: `slices/2026/08/2026-08-24/index.md`
- Modify: `indexes/chronology.md`

**Interfaces:**
- Consumes: `toastloaf-001-the-creature-learns-to-bake.md`.
- Produces: one clearly labeled daily-index entry and one chronology note identifying the loaf as a publication projection.

- [ ] **Step 1: Fetch the current daily index and chronology from the implementation branch.**
- [ ] **Step 2: Add a clearly labeled `TOASTLOAF 001` entry to the daily index without replacing DAILY DIGESTION or the late-edition slices. The copy must say it braids selected slices and preserves their authority boundaries.**
- [ ] **Step 3: Extend the 2026-08-24 chronology entry with a concise note that the first Toastloaf was created as a braided publication projection and is radio-addressable without being radio-owned.**
- [ ] **Step 4: Re-read both files and verify all existing entries remain present and the new links resolve by repository-relative path.**
- [ ] **Step 5: Commit the navigation updates.**

### Task 3: Verify publication boundaries and prepare the PR

**Files:**
- Verify: `slices/2026/08/2026-08-24/toastloaf-001-the-creature-learns-to-bake.md`
- Verify: `slices/2026/08/2026-08-24/index.md`
- Verify: `indexes/chronology.md`
- Remove before PR: `docs/superpowers/plans/2026-08-24-toastloaf-001-braided-brioche.md`

**Interfaces:**
- Consumes: completed publication changes.
- Produces: a PR whose final diff contains exactly the three publication files.

- [ ] **Step 1: Compare `main...feat/toastloaf-001-braided-brioche`. Expected before cleanup: the three publication files plus this temporary execution plan.**
- [ ] **Step 2: Confirm no atomic source slice was modified.**
- [ ] **Step 3: Confirm the loaf contains `PROJECTION / SYNTHESIS`, `PROMOTION: NONE`, the eight score movements, visible counterpressure, and the center line `Same song. Different measure. Shared history. Bake strange things. Keep the receipts.`**
- [ ] **Step 4: Delete this temporary execution-plan file so the final publication diff contains exactly three files.**
- [ ] **Step 5: Compare refs again. Expected: exactly three changed files, all intended.**
- [ ] **Step 6: Open a PR to `main` describing the loaf as the first braided Daily Slice projection and explicitly stating that atomic slices remain unchanged and authoritative in their own scopes.**
