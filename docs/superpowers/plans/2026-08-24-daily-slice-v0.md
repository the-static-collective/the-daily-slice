# Daily Slice v0 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Establish the first usable Daily Slice v0 as a Markdown-only, append-mostly public witness layer with one real founding day, atomic slices, explicit provenance, durable threads, and no automatic canon promotion.

**Architecture:** The repository is a chronological witness surface, not a source-of-truth database. Project repositories retain local authority; GitBook remains the curated orientation layer; Daily Slice preserves dated cross-project becoming and may only point toward later promotion. v0 uses plain Markdown, manual links, and reversible conventions so real use can reveal what later automation is actually justified.

**Tech Stack:** Git, GitHub, Markdown only. No generator, database, schema engine, static-site framework, package manager, runtime dependency, or publication automation in v0.

**Spec:** `docs/superpowers/specs/2026-08-24-daily-slice-breathing-chronicle-design.md`

## Global Constraints

- A Daily Slice records what was visible from here, then. It does not retroactively become the authority for what it observed.
- Project-owned canonical sources remain authoritative for project claims.
- GitBook remains curated and orientation-first; Daily Slice must not auto-promote into GitBook.
- v0 is Markdown only.
- v0 uses dated folders, atomic slices, a daily index, manual cross-links, a small status vocabulary, explicit source roads, and explicit authority pointers.
- No mandatory YAML schema.
- No generator, database, CMS, custom app, ontology engine, automatic summarization, automatic authority inference, or complex publishing pipeline.
- Later corrections add links, slices, or thread updates rather than silently rewriting historical identity.
- Status labels describe historical/epistemic posture, not global truth.
- Historical identity is distinct from later semantic equivalence.
- Every task must preserve human readability when only Git and Markdown are available.

---

## File Structure Locked for v0

The implementation will create the following focused files:

- `README.md` — public entrypoint; explains role, boundaries, repository map, and how to read or add a slice.
- `CONTRIBUTING.md` — minimal human workflow for adding, correcting, linking, and promoting slices without hidden authority.
- `templates/slice.md` — optional copyable slice shape; intentionally prose-first rather than mandatory machine schema.
- `templates/thread.md` — optional copyable cross-slice continuity shape.
- `slices/2026/08/2026-08-24/index.md` — first daily issue and newsletter projection for the founding day.
- `slices/2026/08/2026-08-24/breathing-chronicle-founded.md` — first atomic slice recording the architectural decision and its provenance.
- `slices/2026/08/2026-08-24/in-out-newsletter.md` — atomic slice recording the in/out newsletter interpretation without promoting it beyond its evidence.
- `threads/daily-slice.md` — first durable thread linking the project’s own cross-day continuity.
- `indexes/chronology.md` — manual human-readable chronology, seeded with 2026-08-24 only.
- `indexes/projects.md` — manual project pointer index, seeded only with sources actually referenced by the first slices.
- `indexes/threads.md` — manual thread index, seeded with the Daily Slice thread.
- `artifacts/README.md` — states how visual cards/publication artifacts relate to slices and that artifacts never replace provenance.

Directories with no durable content are not created merely for symmetry; Git only receives files with actual responsibilities.

---

### Task 1: Public Entry Point and Constitutional Boundary

**Files:**
- Create: `README.md`
- Create: `CONTRIBUTING.md`

**Interfaces:**
- Consumes: the accepted architecture in `docs/superpowers/specs/2026-08-24-daily-slice-breathing-chronicle-design.md`.
- Produces: the repository-level public contract that every later slice, thread, artifact, and index must obey.

- [ ] **Step 1: Read the accepted design and extract only the v0 rules needed at the repository entrance**

Read:

```text
docs/superpowers/specs/2026-08-24-daily-slice-breathing-chronicle-design.md
```

Verify the entrypoint preserves these exact ideas:

```text
Project repos preserve what each organ did.
The Daily Slice preserves what the creature was becoming.

A Daily Slice records what was visible from here, then.
It does not retroactively become the authority for what it observed.
```

- [ ] **Step 2: Create `README.md` with the complete public entry contract**

Use this structure and copy:

```markdown
# The Daily Slice

The Daily Slice is the chronological public witness layer of the Static Collective.

> **Project repos preserve what each organ did. The Daily Slice preserves what the creature was becoming.**

It collects dated, human-readable slices of what the wider eCODEsystem was noticing, making, testing, refusing, questioning, or becoming at a particular moment.

It is also an **in / out newsletter**: material enters from conversations, repositories, research, songs, experiments, failures, and stray observations; it is sliced into durable public history; that output may generate new questions, responses, tests, or artifacts that later return as new input.

## Founding rule

> **A Daily Slice records what was visible from here, then. It does not retroactively become the authority for what it observed.**

A slice may remain useful after being refuted, superseded, clarified, split, or reinterpreted.

## What this repository is

- a dated public chronicle;
- an append-mostly witness layer;
- a place for atomic slices plus daily newsletter-style issues;
- a continuity surface across projects and conversations;
- a home for publication artifacts that retain links back to provenance;
- a place where provisional and falsifiably weird ideas can remain attributable without becoming canon.

## What this repository is not

- the canonical documentation for other projects;
- a replacement for project Git history;
- a replacement for GitBook;
- a database or ontology engine;
- an automatic promotion path into shared law;
- proof that a thing is true merely because it was published here.

## Authority boundary

```text
project source / encounter / witness
                ↓
           Daily Slice
                ↓
      public orientation / question
                ↓
      later project-owned response
```

The forbidden implication is:

```text
mentioned in Daily Slice
        ≠
canonical in source project
```

## Repository map

```text
slices/YYYY/MM/YYYY-MM-DD/   atomic slices + one daily index
threads/                     durable cross-slice continuity pointers
artifacts/                   visual/newsletter companions
indexes/                     manual chronology/project/thread indexes
templates/                   optional copyable Markdown shapes
docs/superpowers/            accepted architecture and implementation plans
```

## Slice posture

Useful starting labels are:

`OBSERVATION` · `QUESTION` · `SPECULATION` · `CANDIDATE` · `TESTED` · `REFUTED` · `SUPERSEDED`

They describe the posture of a historical record, not global truth.

## Start reading

Begin with [`indexes/chronology.md`](indexes/chronology.md), or open the latest dated folder under `slices/`.

## Add or correct a slice

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

---

**Starting place in time, not source of truth.**
```

- [ ] **Step 3: Create `CONTRIBUTING.md` with the minimal manual workflow**

Use:

```markdown
# Contributing to The Daily Slice

The goal is to preserve a useful historical trace with as little ceremony as possible.

## Add a slice

1. Create a Markdown file under the correct dated folder: `slices/YYYY/MM/YYYY-MM-DD/<short-slug>.md`.
2. Start from `templates/slice.md` if it helps; the template is optional, not a schema gate.
3. State what was observed or proposed in plain language.
4. Separate documented fact, inference, and speculation when the distinction matters.
5. Link the source roads that bear on the slice.
6. Name the canonical or authoritative home for any project-owned claim.
7. Link relevant threads when they already exist.
8. Add the slice to that day's `index.md` and to `indexes/chronology.md`.

## Correct an earlier slice

Prefer a new slice or explicit backward link over silently rewriting historical meaning.

Small repairs that do not change the historical claim — spelling, broken links, formatting — may edit the original file directly.

A substantive correction should preserve both events:

```text
earlier slice
    ↓ tested / refuted / superseded / deepened by
later slice
```

## Create or extend a thread

A thread links related slices across time. It does not declare them equivalent or canonical.

Use `templates/thread.md` when useful.

## Promote something outward

Daily Slice may point toward a GitBook page, project issue, repository document, experiment, or candidate law.

Promotion is always explicit. Merely appearing here does not authorize adoption elsewhere.

## Artifacts

Visual cards and newsletter assets belong under `artifacts/` and must link back to the slices they compress or present.

An artifact may simplify presentation. It must not simplify away provenance, uncertainty, refusal, or authority boundaries that materially change meaning.
```

- [ ] **Step 4: Validate README and contributing boundaries manually**

Check all of the following:

```text
README says Daily Slice is chronological witness, not source of truth.
README explicitly keeps project authority local.
README distinguishes Daily Slice from GitBook.
README contains no automation promise.
CONTRIBUTING requires source roads and authority pointers when relevant.
CONTRIBUTING tells substantive corrections to add history rather than erase it.
No YAML, generator, framework, or dependency is required.
```

Expected result: every line is true.

- [ ] **Step 5: Commit Task 1**

```bash
git add README.md CONTRIBUTING.md
git commit -m "docs: establish Daily Slice public contract"
```

---

### Task 2: Optional Slice and Thread Shapes

**Files:**
- Create: `templates/slice.md`
- Create: `templates/thread.md`

**Interfaces:**
- Consumes: repository contract from Task 1.
- Produces: optional human-readable patterns for later Task 3 and all future manual additions.

- [ ] **Step 1: Create `templates/slice.md` without a mandatory schema**

Use:

```markdown
# <Slice title>

**Date:** YYYY-MM-DD  
**Status:** OBSERVATION | QUESTION | SPECULATION | CANDIDATE | TESTED | REFUTED | SUPERSEDED

## What was noticed

<Plain-language account of the thing that became visible.>

## Why it matters

<What pressure, connection, consequence, or possibility makes this worth preserving?>

## Source roads

- <source / conversation / repository / artifact / research witness>

## Epistemic split

**Documented fact:** <facts directly supported by sources, or “None asserted.”>  
**Inference:** <reasoned interpretation, or “None asserted.”>  
**Speculation:** <unproved possibility, or “None asserted.”>

## Projects touched

- <project or “None yet.”>

## Threads touched

- <thread link or “None yet.”>

## Residual questions

- <what remains unresolved?>

## Authority / canonical home

<Where the authoritative project-owned claim lives, or “This slice is currently only an attributable Daily Slice witness.”>

## Relations

- `<relation>` → <earlier/later slice, project source, thread, or artifact>
```

- [ ] **Step 2: Create `templates/thread.md` as a continuity pointer rather than a canon page**

Use:

```markdown
# <Thread name>

**Thread status:** LIVE | DORMANT | CLOSED

## What this thread follows

<The recurring question, lineage, project, motif, or experiment family.>

## Boundary

This thread links related historical records. Inclusion does not mean the linked slices are equivalent, mutually consistent, or canonical.

## Slices

- YYYY-MM-DD — [slice title](../slices/...)

## Current pressure

<What is presently unresolved or developing?>

## Authority map

- <project / source> — <what remains locally authoritative there>

## Notes on change

<Brief record of major turns in the thread without rewriting the linked slices.>
```

- [ ] **Step 3: Validate that templates remain optional and prose-first**

Inspect both files and confirm:

```text
No parser is required.
No front matter is required.
No field claims universal mandatory status.
A slice can say “None asserted” instead of inventing content.
Thread inclusion explicitly does not imply equivalence or canon.
```

Expected result: every line is true.

- [ ] **Step 4: Commit Task 2**

```bash
git add templates/slice.md templates/thread.md
git commit -m "docs: add optional slice and thread shapes"
```

---

### Task 3: First Real Founding Day

**Files:**
- Create: `slices/2026/08/2026-08-24/breathing-chronicle-founded.md`
- Create: `slices/2026/08/2026-08-24/in-out-newsletter.md`
- Create: `slices/2026/08/2026-08-24/index.md`

**Interfaces:**
- Consumes: Task 1 repository contract, Task 2 slice shape, accepted design spec, and the actual 2026-08-24 founding conversation/commit history.
- Produces: the first concrete proof that one day can contain multiple atomic slices plus one newsletter-like daily issue.

- [ ] **Step 1: Create `breathing-chronicle-founded.md` as an attributable decision witness**

Use:

```markdown
# Breathing Chronicle founded

**Date:** 2026-08-24  
**Status:** OBSERVATION

## What was noticed

The Static Collective had reached a point where individual project repositories preserved local work correctly but no single surface preserved the dated cross-project history of what the wider eCODEsystem was becoming.

The selected response was **Approach C — Breathing Chronicle**: an append-mostly public witness layer made of atomic slices, daily issues, durable threads, and publication artifacts.

## Why it matters

This creates a collected historical surface without asking project repositories, GitBook, or a future corpus/database layer to become something they are not.

The distinction established here is:

> **Project repos preserve what each organ did. The Daily Slice preserves what the creature was becoming.**

## Source roads

- Accepted design: [`../../../../docs/superpowers/specs/2026-08-24-daily-slice-breathing-chronicle-design.md`](../../../../docs/superpowers/specs/2026-08-24-daily-slice-breathing-chronicle-design.md)
- Founding design commit: `3721ea68ccc12360d4517a686cbaa2b41a93b06a`
- Static Collective GitBook Front Room — orientation remains distinct from retrieval and source authority.

## Epistemic split

**Documented fact:** The Daily Slice repository was created, Approach C was selected, and the accepted design was committed on 2026-08-24.  
**Inference:** A chronological witness layer is now useful because cross-project continuity has become materially important.  
**Speculation:** The newsletter rhythm may later become one of the primary public interfaces into the wider eCODEsystem.

## Projects touched

- The Daily Slice
- Static Collective GitBook
- the broader eCODEsystem as a cross-project field

## Threads touched

- [`Daily Slice`](../../../../threads/daily-slice.md)

## Residual questions

- Which slice rhythms will prove useful under real daily use?
- Which ideas deserve durable threads rather than remaining isolated slices?
- What publication tooling, if any, will real retrieval pressure eventually justify?

## Authority / canonical home

The accepted Daily Slice architecture lives in the design spec linked above. Project-owned claims mentioned by future slices remain authoritative in their source repositories.

## Relations

- `constitutes` → the first architectural witness of the Daily Slice repository
- `bears-on` → future daily issues and publication artifacts
```

- [ ] **Step 2: Create `in-out-newsletter.md` as a separate atomic slice**

Use:

```markdown
# The Daily Slice as an in / out newsletter

**Date:** 2026-08-24  
**Status:** CANDIDATE

## What was noticed

The Daily Slice is more than a blog-like publication surface. Its useful shape is cyclical:

```text
IN
conversation / repo change / research / song / failure / observation
        ↓
      slice
        ↓
OUT
newsletter / visual card / public history / question / seed
        ↓
new encounter / response / evidence
        ↓
IN ...
```

The newsletter is therefore a projection of historical witness and a feedback membrane into new work.

## Why it matters

A one-way publication model would lose the relationship between public expression and the later consequences that expression creates.

Treating OUT as potential future IN preserves the ecosystem’s actual rhythm without making newsletter output authoritative.

## Source roads

- [`Breathing Chronicle founded`](breathing-chronicle-founded.md)
- Accepted design: [`../../../../docs/superpowers/specs/2026-08-24-daily-slice-breathing-chronicle-design.md`](../../../../docs/superpowers/specs/2026-08-24-daily-slice-breathing-chronicle-design.md)

## Epistemic split

**Documented fact:** The accepted design defines Daily Slice as an in/out publication membrane and explicitly describes OUT returning as new IN.  
**Inference:** A newsletter can function as an encounter surface rather than merely a distribution endpoint.  
**Speculation:** Reader responses, artifacts, or public counterexamples may eventually become deliberately receipted inputs to later slices.

## Projects touched

- The Daily Slice

## Threads touched

- [`Daily Slice`](../../../../threads/daily-slice.md)

## Residual questions

- What kinds of OUT deserve explicit return receipts?
- When does a response become a new slice versus a source road on an existing thread?

## Authority / canonical home

This is a Daily Slice architectural interpretation. It does not authorize any external project behavior.

## Relations

- `descends-from` → [`Breathing Chronicle founded`](breathing-chronicle-founded.md)
- `bears-on` → future newsletter projections
```

- [ ] **Step 3: Create the first `index.md` as a newsletter projection, not a replacement for slices**

Use:

```markdown
# The Daily Slice — 2026-08-24

The repository found its shape today.

Not as a blog. Not as another source-of-truth database. As a **breathing chronicle**: a dated public witness layer for what the wider ecosystem was becoming.

## What changed

### [Breathing Chronicle founded](breathing-chronicle-founded.md)

Approach C was selected and committed as the founding architecture. The central boundary is simple: Daily Slice preserves historical visibility without stealing authority from the sources it observes.

### [The Daily Slice as an in / out newsletter](in-out-newsletter.md)

The publication surface is cyclical rather than terminal. Conversation, experiments, repositories, research, music, failures, and stray observations become slices; slices become public expression; public expression can create new encounters that return as later input.

## The line worth carrying

> **Project repos preserve what each organ did. The Daily Slice preserves what the creature was becoming.**

## Still unresolved

- how much metadata real use actually needs;
- what deserves a durable thread;
- what visual-card grammar should emerge;
- whether later RSS/newsletter machinery is justified by actual reading pressure.

## Source roads

- [`Daily Slice breathing chronicle design`](../../../../docs/superpowers/specs/2026-08-24-daily-slice-breathing-chronicle-design.md)
- founding design commit `3721ea68ccc12360d4517a686cbaa2b41a93b06a`

---

This issue is a projection of the linked slices. The atomic slices remain the historical units.
```

- [ ] **Step 4: Validate the first day against the founding rules**

Check:

```text
There are two atomic slices and one daily index.
The index links to, rather than duplicates away, the atomic records.
Fact, inference, and speculation are separated where material.
Project authority remains external.
The in/out interpretation is CANDIDATE rather than silently promoted to universal law.
No historical claim is retroactively rewritten.
```

Expected result: every line is true.

- [ ] **Step 5: Commit Task 3**

```bash
git add slices/2026/08/2026-08-24
git commit -m "content: publish first Daily Slice issue"
```

---

### Task 4: Durable Thread and Manual Indexes

**Files:**
- Create: `threads/daily-slice.md`
- Create: `indexes/chronology.md`
- Create: `indexes/projects.md`
- Create: `indexes/threads.md`

**Interfaces:**
- Consumes: first-day slice paths from Task 3.
- Produces: low-tech re-entry paths proving chronology and continuity work without generated indexes.

- [ ] **Step 1: Create `threads/daily-slice.md`**

Use:

```markdown
# Daily Slice

**Thread status:** LIVE

## What this thread follows

The development of The Daily Slice itself: its role as chronological witness, its in/out newsletter behavior, its authority boundary, and the forms that real use teaches it to adopt.

## Boundary

This thread links related historical records. Inclusion does not mean the linked slices are equivalent, mutually consistent, or canonical.

## Slices

- 2026-08-24 — [`Breathing Chronicle founded`](../slices/2026/08/2026-08-24/breathing-chronicle-founded.md)
- 2026-08-24 — [`The Daily Slice as an in / out newsletter`](../slices/2026/08/2026-08-24/in-out-newsletter.md)

## Current pressure

The architecture is accepted; the current experiment is whether a manual Markdown chronicle remains legible and useful under actual daily use before automation is added.

## Authority map

- `the-daily-slice` design spec — accepted architecture for this repository.
- project repositories referenced by future slices — retain authority for their local claims.
- Static Collective GitBook — curated orientation, not automatic downstream publication target.

## Notes on change

- 2026-08-24 — Approach C selected; breathing chronicle founded.
- 2026-08-24 — in/out newsletter behavior identified as a useful projection of the same architecture.
```

- [ ] **Step 2: Create `indexes/chronology.md`**

Use:

```markdown
# Chronology

A manual index of Daily Slice issues. This index is a navigation aid, not a canonical summary of the linked days.

## 2026

### August

- [2026-08-24 — The Daily Slice](../slices/2026/08/2026-08-24/index.md) — Breathing Chronicle founded; in/out newsletter behavior named.
```

- [ ] **Step 3: Create `indexes/projects.md` with only actually referenced homes**

Use:

```markdown
# Projects

A manual pointer index for projects and public memory surfaces actually referenced by Daily Slice records.

Inclusion means “appears in the historical record,” not “is governed by Daily Slice.”

## The Daily Slice

- Repository-local architecture: [`../docs/superpowers/specs/2026-08-24-daily-slice-breathing-chronicle-design.md`](../docs/superpowers/specs/2026-08-24-daily-slice-breathing-chronicle-design.md)
- Thread: [`../threads/daily-slice.md`](../threads/daily-slice.md)
- First issue: [`2026-08-24`](../slices/2026/08/2026-08-24/index.md)

## Static Collective GitBook

Referenced as the curated orientation surface. GitBook promotion from Daily Slice remains explicit rather than automatic.
```

- [ ] **Step 4: Create `indexes/threads.md`**

Use:

```markdown
# Threads

Durable cross-slice continuity pointers.

A thread preserves relation through time; it does not make every linked slice equivalent or canonical.

- [`Daily Slice`](../threads/daily-slice.md) — the repository’s own architecture, use, and publication rhythm.
```

- [ ] **Step 5: Validate all manual re-entry links**

Open each path from the repository root and verify:

```text
README → indexes/chronology.md
chronology → first daily index
daily index → both atomic slices
both atomic slices → threads/daily-slice.md
threads/daily-slice.md → both atomic slices
indexes/projects.md → accepted design spec, Daily Slice thread, first issue
indexes/threads.md → Daily Slice thread
```

Expected result: every path resolves inside the repository, except deliberately external source roads such as GitBook references.

- [ ] **Step 6: Commit Task 4**

```bash
git add threads indexes
git commit -m "docs: add Daily Slice continuity indexes"
```

---

### Task 5: Artifact Boundary and Repository Smoke Test

**Files:**
- Create: `artifacts/README.md`
- Verify: all files created by Tasks 1–4

**Interfaces:**
- Consumes: the full v0 structure.
- Produces: an explicit artifact/provenance boundary and a final evidence-backed readiness check for v0.

- [ ] **Step 1: Create `artifacts/README.md`**

Use:

```markdown
# Artifacts

This directory stores publication-oriented companions to Daily Slice records: visual cards, diagrams, downloadable boxes, images, or later newsletter assets.

Artifacts are projections of historical material, not replacements for it.

Each artifact should identify or link the slice or slices it presents.

A useful artifact may compress wording, but it must not materially erase:

- source roads;
- uncertainty;
- refusal or refutation;
- historical sequence;
- the location of project-owned authority.

If a visual simplification would change the claim, create a new slice explaining that interpretation instead of letting the artifact silently become the new record.
```

- [ ] **Step 2: Run a no-tooling smoke test from a clean reader perspective**

Without using a generator or custom script, start at `README.md` and answer these questions only by following Markdown links:

```text
What is The Daily Slice?
What is it explicitly not?
Where do I find the first day?
What were the two first atomic slices?
Where does their authority live?
How do I follow the idea across days?
How would I add a correction without erasing history?
Where would a visual card live and what must it preserve?
```

Expected: every question has an unambiguous answer from the repository itself.

- [ ] **Step 3: Run a broken-link inspection for all repository-relative Markdown links**

Use a simple local shell check if available; no permanent tooling is added:

```bash
python - <<'PY'
from pathlib import Path
import re

root = Path('.')
missing = []
for md in root.rglob('*.md'):
    text = md.read_text(encoding='utf-8')
    for target in re.findall(r'\[[^\]]*\]\(([^)]+)\)', text):
        if '://' in target or target.startswith('#') or target.startswith('mailto:'):
            continue
        path = target.split('#', 1)[0]
        if not path:
            continue
        resolved = (md.parent / path).resolve()
        if not resolved.exists():
            missing.append((md.as_posix(), target))

if missing:
    for source, target in missing:
        print(f'MISSING {source} -> {target}')
    raise SystemExit(1)
print('All repository-relative Markdown links resolve.')
PY
```

Expected output:

```text
All repository-relative Markdown links resolve.
```

- [ ] **Step 4: Check v0 against every implementation acceptance criterion from the spec**

Confirm:

```text
1. README explains the repository role.
2. A slice can be added with Git + Markdown only.
3. 2026-08-24 contains multiple atomic slices and one daily issue.
4. Slices distinguish fact, inference, speculation, and authority location where relevant.
5. CONTRIBUTING defines correction-by-link rather than history erasure.
6. threads/daily-slice.md spans multiple slices without declaring them canonical.
7. artifacts/README.md defines visual companions without replacing historical records.
8. GitBook promotion is explicitly non-automatic.
9. No runtime, generator, database, or framework is required.
```

Expected result: all nine are true.

- [ ] **Step 5: Commit Task 5**

```bash
git add artifacts/README.md
git commit -m "docs: define Daily Slice artifact boundary"
```

- [ ] **Step 6: Record final implementation evidence**

Capture:

```text
current branch
final head SHA
commit list for Tasks 1–5
broken-link smoke-test output
manual acceptance-criteria result
```

Do not describe v0 as complete until those checks are observed on the final head.

---

## Plan Self-Review

### Spec coverage

- Chronological witness role → Tasks 1, 3, 4.
- Append-mostly historical identity → Tasks 1, 2, 3, 4.
- Project authority remains local → Tasks 1, 2, 3, 4, 5.
- GitBook remains curated orientation → Tasks 1, 3, 4.
- Atomic slices + daily issue → Task 3.
- Durable thread → Task 4.
- Artifact companions → Task 5.
- Small status vocabulary → Tasks 1, 2, 3.
- Manual cross-links and re-entry → Tasks 3, 4, 5.
- No database/generator/schema engine → Global Constraints and all tasks.
- Newsletter as projection, not authority → Tasks 1 and 3.
- Correction without silent overwrite → Tasks 1, 2, 5.
- No automatic GitBook promotion → Global Constraints, Tasks 1 and 4.

### Deferred by design, not omitted

The following accepted-spec v1/later candidates are intentionally not implemented by this plan:

- generated indexes;
- RSS;
- static-site publication machinery;
- validation tooling committed to the repository;
- reusable visual-card renderer;
- machine-readable provenance sidecars;
- graph visualization;
- search/index services;
- publication automation.

Real use must create pressure before those receive their own design/plan cycle.
