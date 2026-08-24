# The Daily Slice — Breathing Chronicle Design

**Date:** 2026-08-24  
**Repository:** `the-static-collective/the-daily-slice`  
**Design status:** Proposed for written-spec review. The user selected **Approach C — Breathing Chronicle**. Implementation has not begun.

## 1. Context

The Static Collective has reached a point where project repositories no longer tell the whole story of the work.

Individual repositories correctly preserve project-owned implementation history, decisions, evidence, and local authority. GitBook provides a curated public orientation surface. Conversations, experiments, songs, research, failures, observations, and speculative ideas also produce important continuity that may cross several projects before any one project owns the result.

The Daily Slice exists to preserve that cross-project historical layer without becoming a new authority center.

Its central role is:

> **Project repos preserve what each organ did. The Daily Slice preserves what the creature was becoming.**

The Daily Slice is therefore a chronological public witness surface and an in/out publication membrane for the broader eCODEsystem.

## 2. Decision

Adopt **Approach C — Breathing Chronicle**.

The Daily Slice will be an **append-mostly, dated, human-readable witness layer** that receives material from the ecosystem, preserves what was visible at the time, emits public-facing slices and newsletter-like artifacts, and accepts later responses or evidence as new input.

It will not replace:

- project-owned canonical documentation;
- Git history in source repositories;
- GitBook as the curated orientation surface;
- Corpus or any future structured memory/database layer;
- project-local authority, admission, or execution rules.

## 3. Founding constitutional rule

> **A Daily Slice records what was visible from here, then. It does not retroactively become the authority for what it observed.**

A slice may remain historically useful after it is refuted, superseded, clarified, split, or reinterpreted.

Historical identity must not collapse merely because later understanding converges.

## 4. System role

The Daily Slice behaves as a breathing membrane:

```text
IN
raw reality
experiments
conversation
research
failure
songs
repo changes
stray speculative thought

        ↓ digestion

THE DAILY SLICE

        ↓ expression

OUT
newsletter issue
visual cards
public history
questions
seeds
cross-project pointers

        ↓

responses / later evidence / consequences
        ↓
       IN ...
```

This is a feedback loop, not a one-way publishing pipeline.

## 5. Authority and dependency direction

The Daily Slice is downstream of evidence and upstream only of attention, questions, and proposals.

```text
project source / encounter / witness
                ↓
           Daily Slice
                ↓
      public orientation / question
                ↓
      later project-owned response
```

The following implication is forbidden:

```text
mentioned in Daily Slice
        ≠
canonical in source project
```

When a slice points to a project-owned claim, the project source remains authoritative for that claim.

When a slice contains speculation, the speculation remains attributable to the slice and does not inherit authority from adjacent verified material.

## 6. Relationship to GitBook

GitBook and The Daily Slice have complementary roles.

### GitBook

- curated;
- relatively stable;
- orientation-first;
- good for durable vocabulary, patterns, evidence, frontiers, and doors into deeper context;
- explicitly a starting place, not a source of truth.

### The Daily Slice

- chronological;
- append-mostly;
- preserves change over time;
- records provisional and superseded states without erasing them;
- carries the public rhythm of the ecosystem;
- may point toward GitBook when a slice matures into a durable pattern, frontier, evidence specimen, or vocabulary item.

The Daily Slice should not automatically publish every item into GitBook. Promotion must remain explicit.

## 7. Repository structure

Initial target shape:

```text
the-daily-slice/
├── README.md
├── docs/
│   └── superpowers/
│       └── specs/
├── slices/
│   └── YYYY/
│       └── MM/
│           └── YYYY-MM-DD/
│               ├── index.md
│               ├── <slice>.md
│               └── ...
├── threads/
│   └── <durable-cross-slice-thread>.md
├── artifacts/
│   └── <visual-cards-and-publication-assets>
└── indexes/
    ├── chronology.md
    ├── projects.md
    └── threads.md
```

This structure is intentionally simple and reversible.

No generator, database, static-site framework, schema engine, or automation is required for v0.

## 8. Core domain objects

### 8.1 Slice

A **slice** is the smallest durable public historical unit.

A slice should answer, where applicable:

- What was noticed?
- When was it noticed?
- What kind of statement is this?
- What evidence or source roads bear on it?
- Which projects or threads does it touch?
- What remains unresolved?
- Where does authority actually live?
- What later event superseded, tested, refuted, or deepened it?

A slice is not required to be polished prose. It should be legible enough for later re-entry.

### 8.2 Daily issue

A **daily issue** is the dated `index.md` for a day.

It is a curated arrangement of that day's slices, not a replacement for them.

It may read like a newsletter while preserving links to the atomic slices and their source roads.

### 8.3 Thread

A **thread** is a durable cross-slice continuity pointer.

Threads exist for ideas that recur or develop across days, such as a project, unresolved question, conceptual lineage, experiment family, or recurring motif.

A thread must not imply that every linked slice is equivalent or mutually consistent.

### 8.4 Artifact

An **artifact** is a publication-oriented companion: visual card, diagram, image, downloadable box, or other presentation object associated with one or more slices.

Artifacts may compress a slice for human reading but must not erase its provenance or uncertainty.

## 9. Slice state vocabulary

Slices may carry a small status vocabulary. Initial values:

- `OBSERVATION`
- `QUESTION`
- `SPECULATION`
- `CANDIDATE`
- `TESTED`
- `REFUTED`
- `SUPERSEDED`

These labels describe epistemic or historical posture, not global truth.

A later slice should normally change the graph by linking to an earlier slice rather than silently rewriting the earlier record.

## 10. Minimal slice contract

A slice should support the following minimal fields in human-readable Markdown. Exact serialization is intentionally not frozen yet.

```text
Title
Date / time if useful
Status
Summary
Source roads / evidence
Projects touched
Threads touched
What is documented fact?
What is inference?
What is speculation?
Residual questions
Authority / canonical home
Relations to earlier or later slices
```

Not every field must be populated when it adds no value.

The contract exists to preserve reconstructibility, not to impose form-filling ceremony.

## 11. Provenance relations

Initial relation vocabulary should stay small.

Useful candidates:

- `observes`
- `bears-on`
- `tests`
- `descends-from`
- `supersedes`
- `refutes`
- `constitutes`
- `points-to-authority`

Where Free Graph already provides a relevant relation, reuse that relation rather than inventing a newsletter-specific synonym.

Cross-project relation does not imply cross-project authority.

## 12. Temporal and graph model

The simplest formal model is a temporal directed graph.

Let each durable slice be a node `s_i` with a creation timestamp `t_i`.

Relations form directed edges `e = (s_i, r, x)` where `r` names the relation and `x` may be another slice, project source, artifact, thread, or external witness.

Two invariants matter from the beginning:

### Invariant A — historical append

For an existing published slice `s_i`, later interpretation should normally add a new node or edge rather than destructively replacing the historical claim.

### Invariant B — identity is not equivalence

Two slices may later be judged semantically equivalent or mutually explanatory while remaining historically distinct events.

```text
same / equivalent interpretation
        ≠
same historical occurrence
```

This matches the broader Collective distinction between lineage identity and normalized meaning.

## 13. Newsletter behavior

The newsletter is a projection of the historical layer, not a second content authority.

A daily issue may arrange slices into sections such as:

- what changed;
- what we noticed;
- what broke;
- what got stranger;
- what survived testing;
- open questions;
- artifacts worth carrying forward.

The exact section names should remain editorial rather than constitutional.

The newsletter may become prettier later without changing the historical storage contract.

## 14. In / Out behavior

### IN can include

- conversation-derived observations;
- GitHub changes;
- GitBook changes;
- research findings;
- experiments and test results;
- songs and creative artifacts;
- failures and refusals;
- speculative or heterodox ideas;
- external feedback;
- later corrections.

### OUT can include

- atomic slices;
- daily issues;
- visual cards;
- questions routed back to project repos;
- candidate GitBook promotions;
- project seeds;
- public calls for counterexample or evidence.

OUT becoming new IN is expected behavior.

## 15. Non-goals for v0

Do not build these yet:

- a database;
- a CMS;
- a custom web application;
- an ontology engine;
- a mandatory YAML schema;
- automatic cross-project canon promotion;
- automated summarization that rewrites history;
- automatic authority inference;
- a complex publishing pipeline;
- a universal issue taxonomy;
- a replacement for GitBook or project docs.

## 16. Failure conditions

The design is failing if:

- the repo becomes a miscellaneous dump with no re-entry path;
- slices silently overwrite earlier uncertainty;
- newsletter prose becomes stronger authority than source evidence;
- every fleeting thought is forced into a permanent ontology;
- every Daily Slice item is automatically promoted into GitBook;
- project-local distinctions collapse into one ecosystem-wide vocabulary without proof;
- polishing removes failed, refused, or superseded states needed to understand lineage;
- chronology is preserved but provenance is not;
- provenance is preserved but the material becomes unreadable by humans;
- the publication machinery becomes more important than the slices.

If this happens, simplify the system before adding machinery.

## 17. Evolution strategy

### v0 — breathing chronicle

- Markdown only;
- dated folders;
- atomic slices;
- daily index;
- manual cross-links;
- small status vocabulary;
- explicit source roads and authority pointers.

### v1 candidates only after real use

- generated chronology/project/thread indexes;
- RSS or newsletter projection;
- lightweight validation of links and dates;
- reusable visual-card template;
- helper tooling to seed a slice from a receipt or conversation;
- bounded GitBook promotion workflow.

### Later only if pressure proves real

- structured event export;
- graph visualization;
- machine-readable provenance sidecars;
- search/index services;
- publication automation.

No later stage is pre-authorized by this design.

## 18. Initial architectural decision record

# ADR-001: Use a breathing chronicle instead of a blog or canonical database

## Status

Accepted direction; implementation pending written-spec review.

## Context

The ecosystem needs a durable cross-project history and public rhythm, but project authority must remain local and provisional thinking must be preservable without premature canonization.

## Decision

Use an append-mostly chronological Markdown repository whose primary objects are slices, daily issues, threads, and artifacts.

## Consequences

### Easier

- reconstructing what was visible at a particular time;
- preserving weird or provisional ideas without canonizing them;
- linking project work into one public history;
- producing newsletter-like output from historical material;
- retaining failed and superseded states;
- later graph analysis.

### Harder

- enforcing perfectly uniform metadata;
- guaranteeing every cross-link is current;
- querying the corpus before indexing tools exist;
- keeping editorial compression from drifting away from source nuance.

These costs are accepted for v0 because the architecture prioritizes truthful history and low ceremony over query sophistication.

## 19. Acceptance criteria for the first implementation plan

A future implementation plan should be considered valid only if it can produce a v0 where:

1. A new reader can understand the repo's role from `README.md`.
2. A slice can be added without running a generator or installing tooling.
3. One day can contain multiple atomic slices plus one daily issue.
4. A slice can clearly distinguish fact, inference, speculation, and authority location when relevant.
5. A later correction can link to an earlier slice without rewriting its historical identity.
6. A recurring idea can span multiple days through a thread without being declared canonical.
7. Visual/newsletter artifacts can live beside the historical record without replacing it.
8. GitBook promotion remains explicit rather than automatic.
9. The structure remains usable when only Git and Markdown are available.

## 20. Open design questions for implementation planning

These are intentionally deferred until after written-spec review:

- Whether slice filenames should carry a time or sequence number when several slices occur on one day.
- Whether v0 metadata should be prose-only, Markdown front matter, or a minimal hybrid.
- Whether the first daily issue should begin on 2026-08-24 or backfill selected earlier milestones.
- Whether visual cards are stored directly under `artifacts/YYYY/MM/DD/` or adjacent to each slice.
- Whether generated indexes belong in v0 or should wait until enough slices exist to reveal actual retrieval pressure.

None of these questions changes the founding architecture.
