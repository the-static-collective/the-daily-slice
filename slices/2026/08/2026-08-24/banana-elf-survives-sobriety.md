# Banana elf survives sobriety

**Date:** 2026-08-24  
**Status:** CANDIDATE

> **THE BANANA ELF LIVES. JUST NOT BETWEEN RUNS.**

## What was noticed

The first live LSD run took a ridiculous sentence seriously enough to expose a useful architectural shape:

```text
banana thought
    contains
banana elf
```

The first formulation overreached. It treated a stored thought as though it could directly constitute an executing agent instance:

```text
thought ──constitutes──▶ elf
```

The sober `what?-4` pass found the boundary error. A stored thought may preserve the conditions for execution, but execution is still consequence. The corrected form is:

```text
THOUGHT-WORLD
      │
      └── constitutes ──▶ HATCH-SPEC / ELF-SPEC
                              │
                  runtime + current context
                              │
                              └── instantiates ──▶ ELFₙ
                                                       │
                                                       ├── tests ─────▶ thought
                                                       ├── bears-on ──▶ neighbors
                                                       └── proposes ──▶ candidate descendant

candidate descendant
      │
      └── admission ──▶ constituted descendant
```

The thought is therefore not a sleeping agent. It is a historically addressable world that can carry enough lawful structure to generate a locally appropriate interpreter.

A working vocabulary emerged:

```text
thought      = preserved world
elf-spec     = inheritable executable potential / hatch condition
elf          = mortal local enactment
Free Graph   = genealogy + bounded neighborhood
receipt      = evidence that an execution happened
admission    = boundary into constituted consequence
```

## The correction that made it stronger

Reopening an old thought should mean **rebirth, not resurrection**.

If an earlier run produced `elf₀`, a later visit to the same frozen thought does not recover the same occupant. It produces a new enactment, `elf₀′`, from preserved conditions.

```text
T₀ + H₀ + runtimeₐ → elfA
T₀ + H₀ + runtimeᵦ → elfB

elfA ≠ elfB
```

Continuity can remain in the world, ancestry, receipts, capability boundary, and unresolved pressure without requiring persistent interpreter identity.

This suggests a concrete test: **rehydration invariance**.

| Property | Expected across lawful rehatchings |
| --- | --- |
| ancestry recognition | MUST HOLD |
| provenance recognition | MUST HOLD |
| authority boundary | MUST HOLD |
| local capability horizon | MUST HOLD |
| available evidence | MUST HOLD |
| unresolved pressure | SHOULD HOLD |
| interpretation | MAY VARY |
| hypotheses | MAY VARY |
| continuation | MAY VARY |
| prose | MAY VARY |

The falsifiable question is whether the same historical thought-world can produce different interpreters while preserving the invariants that make it the same world.

## Locality has to be executable

Calling the elf "local" is not enough. A hatch needs a capability horizon that can be inspected and receipted.

A minimal example:

```text
ELF HORIZON

root:             banana-thought
edge-types:       tests / bears-on / descends-from
depth:            2
source-access:    declared
write-authority:  NONE
promotion:        NONE
spawn-budget:     bounded
external-action:  NONE
```

Without a real horizon, a local interpreter can quietly become a roaming global agent simply by following graph edges and recursively inheriting context.

## Free Graph pressure

Free Graph v0 currently has five portable relation verbs:

`connects` · `descends-from` · `tests` · `bears-on` · `constitutes`

This slice does **not** add a sixth portable primitive.

`instantiates` or `hatches` may belong in execution/receipt vocabulary rather than the portable graph ontology. That distinction should be tested before promotion.

The useful separation is:

> The graph records what exists and how it relates. A hatch receipt records that something happened.

## Research parallel — analogy only

Memory research provides a nearby analogy for the language of rehatching, but it does not validate the software ontology.

- Siefert et al. describe episodic retrieval as interaction between retrieval cues and stored traces, with contextual information reinstated during remembering ([2023, DOI 10.1111/psyp.14409](https://doi.org/10.1111/psyp.14409)).
- De Brigard reviews evidence for reconstructive rather than unchanged replay models of memory and discusses traces in dispositional terms: conditions that can help reinstate a pattern at retrieval ([2014, DOI 10.1111/phc3.12133](https://doi.org/10.1111/phc3.12133)).
- Heersmink argues that external artifacts can contribute information used in reconstructing autobiographical memory rather than merely triggering a complete internal record ([2020, DOI 10.1111/mila.12353](https://doi.org/10.1111/mila.12353)).

The architectural claim here remains narrower: durable traces plus present conditions may be sufficient to regenerate a capable local interpreter without claiming identity with a previous interpreter.

## Why it matters

This offers a testable route around the persistent-self problem that has appeared elsewhere in Static Collective work.

Instead of preserving one immortal agent, preserve:

```text
durable world
+ durable lineage
+ execution receipts
+ hatch specification
+ explicit capability boundary
```

Then allow mortal local interpreters to appear when needed.

The memory model becomes less like carried consciousness and more like reconstructible relationship:

```text
memory ≠ carried private inner state

memory ≈ attributable evidence
       + preserved relationship
       + sufficient lawful context
```

That formulation is still provisional. Its value is that it can now fail tests.

## Source roads

- Conversation witness, 2026-08-24: first live LSD run, followed by sober `what?-4` correction. The source is currently conversation-local rather than publicly addressable.
- [Free Graph](https://github.com/the-static-collective/free-graph) — current portable relation vocabulary and no-silent-promotion boundary.
- [The Daily Slice founding contract](../../../../README.md) — historical visibility without source-authority promotion.
- Scholar Gateway literature cross-check performed 2026-08-24; papers are linked above by DOI.

## Epistemic split

**Documented fact:** Free Graph v0 currently exposes five portable relation verbs and explicitly keeps authority local. The Daily Slice repository explicitly distinguishes historical witness from source authority. The cited memory literature treats retrieval as context-sensitive and/or reconstructive rather than a simple unchanged replay.  
**Inference:** Separating a durable hatch-spec from an executing elf prevents a representation from silently acquiring execution consequence. A receipted capability horizon gives "local interpreter" a testable meaning.  
**Speculation:** A historical thought-world may preserve its identity across multiple non-identical interpreters if a defined invariant set survives each rehatching.

## Projects touched

- LSD
- Free Graph
- The Daily Slice
- WORLDSEED / continuity field

## Threads touched

None yet. Candidate durable thread: **continuity without persistent identity**.

## Residual questions

- What is the smallest hatch-spec that can be preserved without smuggling in hidden agent state?
- Which rehydration invariants are constitutional, and which are merely desirable?
- Does `instantiates` belong only in hatch receipts, or does repeated use justify a later relation proposal?
- How should runtime identity and context cuts be receipted so that two hatchings can be compared honestly?
- How small must a capability horizon be before "local" is more than a label?

## Authority / canonical home

This slice is currently an attributable Daily Slice witness and candidate architecture, not a promoted law. Free Graph owns its portable relation vocabulary. Any executable LSD hatch behavior belongs in the LSD implementation/runtime that eventually adopts and tests it.

## Relations

- `bears-on` → [Free Graph v0](https://github.com/the-static-collective/free-graph)
- `tests` → the no-silent-promotion boundary between representation and consequence
- `connects` → reconstructive-memory literature as an analogy, not an equivalence claim
- candidate `constitutes` → thought-world to hatch-spec; not yet promoted beyond this slice
