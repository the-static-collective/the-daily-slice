# Durable Primitive Architecture — Witness to Admitted Structure

**Date:** 2026-08-24  
**Repository:** `the-static-collective/the-daily-slice`  
**Status:** Accepted design; implementation not begun

## 1. Context

The Daily Slice has already established a strong constitutional boundary:

> A slice records what was visible from here, then. It does not retroactively become the authority for what it observed.

The first full day of use exposed a second problem. A chronological witness layer can preserve discoveries, failures, metaphors, questions, and candidate principles, but some of those observations will later deserve durable architectural expression.

Direct promotion from newsletter prose into shared architecture would collapse witness into authority. Converting the Daily Slice itself into a database or ontology engine would violate its founding purpose.

The system therefore needs a small intermediate contract that can extract reusable structure from historical witness without silently promoting that structure into law.

The architectural loop is:

```text
encounter
   ↓
Daily Slice witness
   ↓ extract
candidate primitive
   ↓ test
specimen / evidence / counterexample
   ↓ explicit admission
scoped durable primitive
   ↓ projectable into
GitBook / project ADRs / executable tests / Free Graph / Storyship / other views
   ↓ consequence, failure, contradiction, surprise
new Daily Slice witness
```

The governing distinction is:

> **Extraction is not promotion.**

## 2. Decision

Introduce a **Durable Primitive Receipt** as the smallest durable bridge between historical witness and admitted architecture.

A Durable Primitive Receipt records a proposed reusable invariant, its ancestry, scope, evidence, counterevidence, authority owner, relationship state, capability horizon, and admission state.

The receipt does not execute anything and does not create authority by existing.

A primitive becomes durable only through explicit scoped admission by the project or human authority that owns the relevant consequence.

## 3. Constitutional flow

```text
WITNESS
historical identity remains intact
        │
        │ extract
        ▼
CANDIDATE
possible reusable structure
        │
        │ test / challenge / counterexample
        ▼
SPECIMEN
real consequence or failure
        │
        │ explicit admission
        ▼
DURABLE PRIMITIVE
scoped invariant with attributable authority
        │
        ├── projection → GitBook
        ├── projection → project spec / ADR
        ├── projection → executable invariant / test
        ├── projection → Free Graph relation surface
        └── projection → Storyship / re-entry score / other views

later consequence
        │
        └──────────────────────────────→ new WITNESS
```

A projection may compress, format, visualize, or operationalize a primitive. It may not silently strengthen the primitive's authority or erase its provenance.

## 4. Five primitive species

The initial grammar has exactly five primary species.

### 4.1 Carrier

A **Carrier** preserves something across rupture, re-entry, transformation, or local cessation.

Examples from the current field include Storyship, hatch-specs, historical corpus, and other continuity-bearing substrates.

Question:

> What is able to survive or be reconstructed across the boundary?

### 4.2 Relation

A **Relation** describes an attributable connection, influence, dependency, ancestry, permission, refusal, or other edge between independently meaningful things.

Examples include Free Graph roads and the candidate `parasite edge` distinction.

Question:

> How are these things connected, and what is the status of that connection?

### 4.3 Gate

A **Gate** determines when a candidate state may become admitted consequence in a declared scope.

Examples include human admission and external settlement crossings.

Question:

> Where does possibility become locally consequential, and who owns that decision?

### 4.4 Transition

A **Transition** describes a lawful state progression through time.

Examples include the causal canon and the reality-baking sequence of proposal, testing, admission/refusal, receipt, and return.

Question:

> What change is allowed, in what order, under what conditions?

### 4.5 Projection

A **Projection** is a view, expression, index, broadcast, rendering, or other derived presentation of historical or admitted material.

Examples include Daily Slice issues, GitBook pages, radio output, visualizations, and project status views.

Question:

> What view is being produced, from which source, without stealing source authority?

## 5. Species invariant

Each Durable Primitive Receipt MUST declare exactly one **primary species**.

If a candidate appears to require multiple primary species, the preferred response is to decompose it into smaller primitives joined by explicit relations.

If decomposition materially destroys the candidate's meaning, that is evidence against the five-species grammar. Preserve the failure rather than forcing classification.

This makes the first corpus a real test of the grammar rather than a taxonomy exercise.

## 6. Durable Primitive Receipt contract

The first implementation should remain human-readable and tool-independent.

A receipt must preserve these semantic fields, regardless of eventual serialization:

```text
identity
primary species
name
source witnesses
scope
authority owner
candidate invariant
evidence / specimens
counterevidence / counterexamples
admission state
relationship state
capability horizon
supersession lineage
projections
residual questions
```

### 6.1 Identity

A stable identifier for the primitive receipt.

The identifier names the historical receipt, not an eternal concept. If later work materially changes the invariant, create a successor receipt rather than pretending the earlier receipt always meant the newer thing.

### 6.2 Source witnesses

Pointers to the Daily Slice entries, project evidence, research, encounters, or other attributable sources from which the candidate was extracted.

Source witness is ancestry, not automatic authority.

### 6.3 Scope

The exact domain in which the invariant is being proposed or admitted.

Examples:

- one repository;
- one runtime boundary;
- one protocol;
- one experiment family;
- one cross-project interface.

No receipt may imply universal scope merely because its wording sounds general.

### 6.4 Authority owner

The human, project, or explicit constitutional mechanism authorized to admit consequence for the declared scope.

The Daily Slice, GitBook, Free Graph, an LLM, a research paper, or a visualization does not become the authority owner merely by describing the candidate.

### 6.5 Candidate invariant

The smallest statement that should remain true if the primitive is valid in its scope.

The invariant should be testable or challengeable where possible.

### 6.6 Evidence and counterevidence

Evidence records supporting specimens.

Counterevidence records failures, adversarial cases, boundary conditions, or observations that weaken the invariant.

A receipt must not delete counterevidence after admission.

### 6.7 Admission state

Initial states:

- `CANDIDATE` — extracted but not admitted;
- `TESTING` — under active specimen or counterexample pressure;
- `ADMITTED` — explicitly accepted for the declared scope;
- `REFUSED` — explicitly not admitted;
- `SUPERSEDED` — historically retained but replaced by a successor receipt.

These states describe the receipt's architectural posture, not global truth.

### 6.8 Relationship state

The receipt must preserve the status of relations that matter to reconstruction.

At minimum, a significant relation must be distinguishable as:

- currently live/reachable in the declared scope;
- explicitly severed/refused;
- historical-only;
- unresolved.

The first implementation should reuse existing Free Graph relations or project-native relation vocabularies where they already fit. It must not enlarge Free Graph merely to satisfy this contract.

### 6.9 Capability horizon

The receipt records what the primitive is allowed to influence or enable in its scope.

This is a boundary description, not a capability grant.

### 6.10 Supersession lineage

Later receipts may supersede earlier receipts but must preserve the ancestry chain.

Supersession changes current architectural posture without erasing historical identity.

### 6.11 Projections

A receipt may point to GitBook pages, project ADRs, tests, visualizations, Storyship scores, radio outputs, or other representations generated from it.

Projection does not alter the receipt's admission state.

## 7. Rehydration invariance

A durable primitive should survive destruction of its presentation layer.

The reconstruction test is:

> Can another bounded interpreter reconstruct the primitive's architectural meaning without inventing ancestry, authority, capability, or relation state?

The following should survive lawful rehydration:

```text
identity / ancestry
provenance
scope
authority
invariant
evidence
counterevidence
capability horizon
relationship state
supersession history
```

The following may change:

```text
wording
metaphor
visual treatment
current interpreter
editorial order
current projection
```

This is **rehydration invariance**.

## 8. Relationship integrity invariant

Node reconstruction alone is insufficient.

A system can reconstruct the correct entity while accidentally restoring an unauthorized or obsolete edge.

Therefore:

> **Rehydration must preserve or explicitly sever relationship state; it must not silently revive reachability.**

A receipt that cannot distinguish historical relation from live relation is insufficient for admitted architecture.

This is the general architectural form of the `parasite edge` discovery from the 2026-08-24 witness corpus.

## 9. Ownership boundaries

### Daily Slice owns

- chronological witness;
- historical identity of slices;
- source roads;
- public account of what was visible at a time.

It does not own durable architectural admission.

### Durable Primitive layer owns

- candidate extraction receipts;
- scoped invariant statements;
- admission posture;
- explicit provenance from witness to admitted structure;
- rehydration and relationship integrity requirements.

It does not own project execution.

### Project repositories own

- executable consequences;
- project-local invariants;
- tests;
- runtime behavior;
- project-local authority.

### Free Graph owns

- portable relational inspection where its existing grammar applies.

It is not automatically enlarged by the Durable Primitive layer.

### GitBook owns

- curated orientation and durable public projections.

It does not become the source authority merely by publishing a primitive.

### Storyship / Autodisco / other expressive systems own

- re-expression, encounter, sequencing, or re-entry behavior within their own scopes.

They may generate new consequence or witness but do not rewrite primitive ancestry.

### Human / declared project authority owns

- admission into consequence where the relevant scope requires human or project judgment.

## 10. Adapter rule

The architecture retains the existing principle:

> **Native organs first. Adapters only when real pressure appears.**

No new service, database, queue, ontology engine, blockchain, graph database, or external platform is justified by this design alone.

The first implementation should be possible with Git and human-readable files.

## 11. Initial hostile test corpus

The 2026-08-24 Daily Slice issue is the first test corpus.

At minimum, the grammar should attempt to account for candidate primitives extracted from:

- `banana-elf-survives-sobriety.md`;
- `the-river-under-the-river.md`;
- `the-trace-and-the-hidden-edge.md`;
- `trust-the-process-causal-canon.md`;
- `reality-bakers.md`;
- `the-belt.md`;
- `native-organs-adapter-garden-v02.md`;
- `daily-slice-learns-to-speak.md`;
- `daily-digestion-001-the-creature-has-a-stomach-now.md`.

The corpus is hostile in the sense that the architecture must not force every metaphor into a primitive.

Valid outcomes include:

- one or more durable candidates extracted;
- candidate remains witness-only;
- candidate decomposes into several primitives;
- candidate exposes a missing species or a flaw in the grammar;
- candidate is refused after testing.

## 12. First validation scenarios

### Scenario A — same invariant, different prose

Two interpreters produce different wording for the same admitted primitive.

Pass condition: identity, ancestry, scope, authority, invariant meaning, evidence, relationship state, and capability horizon remain reconstructible.

### Scenario B — supersession

A later specimen weakens an admitted invariant.

Pass condition: a successor receipt can supersede the earlier receipt without rewriting the earlier historical record.

### Scenario C — severed relation

A historical primitive once had a relation that is no longer live.

Pass condition: rehydration preserves the historical edge while proving live reachability remains severed.

### Scenario D — counterexample attacks abstraction, not law

A specimen invalidates the current expression or test harness but not necessarily the underlying invariant.

Pass condition: the receipt can preserve that distinction without silently declaring success or global refutation.

### Scenario E — external settlement

An interior resource allocation crosses through an external adapter such as money or Ethereum.

Pass condition: the external settlement receipt cannot redefine the interior value system or expand the primitive's scope.

### Scenario F — projection drift

A GitBook page, visualization, or radio segment compresses the primitive.

Pass condition: the projection remains attributable to the receipt and cannot become stronger authority than the receipt and its project-owned sources.

## 13. Failure conditions

The design is failing if:

- every good slice is pressured into becoming a primitive;
- metaphor names silently become ontology classes;
- the five species become a universal taxonomy by assertion;
- candidate extraction automatically changes project behavior;
- an LLM can self-admit its own proposed invariant without delegated authority;
- a projection becomes stronger authority than its source receipt;
- supersession rewrites old witness;
- rehydration revives severed relationships;
- capability horizon is inferred from adjacency rather than declared scope;
- Free Graph is expanded merely because the receipt format needs another field;
- a database or service becomes necessary to create or inspect the first receipts;
- the receipt format becomes more important than testing the invariants it carries.

When these failures appear, simplify before adding machinery.

## 14. Non-goals for v0

Do not build yet:

- a database;
- a graph database;
- an ontology engine;
- a central schema registry;
- automatic Daily Slice → GitBook promotion;
- automatic Daily Slice → project implementation;
- automatic authority inference;
- automatic capability grants;
- new Free Graph relation types solely for this feature;
- a blockchain or token layer;
- a network service;
- a custom UI;
- a universal primitive taxonomy beyond the five-species experiment.

## 15. Evolution strategy

### v0 — receipt experiment

- human-readable receipts;
- explicit pointers to witness;
- one primary species per receipt;
- manual admission state;
- manual evidence/counterevidence;
- manual relationship state;
- test the full 2026-08-24 corpus;
- preserve classification failures.

### v1 candidates only after corpus pressure

- lightweight validation;
- generated indexes;
- deterministic rehydration checks;
- project-local helper tooling;
- bounded GitBook projection workflow.

### Later only if real pressure proves it

- machine-readable sidecars;
- richer temporal graph export;
- query services;
- visual graph inspection;
- cross-project receipt exchange protocol.

No later stage is pre-authorized by this design.

## 16. ADR-002: Insert an admitted primitive layer between witness and architecture

### Status

Accepted.

### Context

Daily Slice must remain a historical witness layer, yet recurring discoveries need a truthful path into durable architecture without making newsletter prose authoritative.

### Decision

Use Durable Primitive Receipts to carry candidate reusable invariants from witness through testing and explicit scoped admission into projectable architecture.

The first grammar uses five primary species: Carrier, Relation, Gate, Transition, and Projection.

### Consequences

#### Easier

- preserving ancestry while changing interpretation;
- testing a candidate before canonizing it;
- keeping project authority local;
- preserving failed and refused candidates;
- rebuilding architecture from durable meaning rather than prose presentation;
- distinguishing node continuity from relationship continuity;
- deriving multiple projections without creating multiple sources of truth.

#### Harder

- promotion requires deliberate admission rather than convenience;
- some attractive metaphors will remain witness-only;
- classification failures must be preserved rather than hidden;
- cross-project concepts may require several small receipts instead of one broad statement.

These costs are accepted because they protect the architecture from narrative overreach.

## 17. Acceptance criteria for the first implementation plan

A valid first implementation plan must produce a bounded v0 where:

1. A receipt can be created and understood using only Git and human-readable files.
2. Every receipt has exactly one primary species.
3. Every receipt points to attributable source witness.
4. Candidate extraction does not change project behavior.
5. Admission requires an explicit authority owner and declared scope.
6. Evidence and counterevidence remain inspectable after admission.
7. Supersession preserves historical identity and ancestry.
8. Rehydration can preserve the admitted invariant without requiring identical prose.
9. Rehydration cannot silently restore a severed relationship.
10. A projection cannot silently strengthen source authority.
11. Free Graph need not change for v0.
12. The 2026-08-24 hostile corpus can expose grammar failure without forcing a pass.

## 18. Architectural line worth carrying

> **Witness remembers what happened. A primitive proposes what may endure. A specimen gives it consequence. Admission gives it scope. Projection gives it form. Nothing in that sequence is allowed to impersonate the next step.**
