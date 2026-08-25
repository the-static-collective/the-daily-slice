# World Cuts Have Channels

**Date:** 2026-08-24  
**Status:** EXTERNAL CONTROL / CANDIDATE WORLD-MODEL REFINEMENT

## The external control landed almost exactly on the seam

The Open Crossing idea initially arrived from inside the Static Collective ecosystem.

Distributed-systems theory supplies a surprisingly exact control.

Not proof of a universal law.

Not proof that every unresolved edge is meaningful.

A formal precedent for something narrower:

> **A coherent description of a distributed system may need to include not only local process state, but also state carried in communication channels between processes.**

That matters because it gives `in flight` a rigorous place to stand.

## Lamport: coherence does not require a shared now

Leslie Lamport's 1978 paper, *Time, Clocks, and the Ordering of Events in a Distributed System*, begins from the relation that one event can happen before another and shows that this relation defines a **partial ordering** of events in a distributed system.

The point is not that physical time disappears.

The point is that distributed causal coherence does not require every participant to share one globally authoritative wall-clock instant.

```text
process A:  a1 → a2 → a3
                  \
                   message
                     \
process B:  b1 → b2 → b3
```

Some event pairs are causally related.

Others can remain concurrent.

So a system can possess meaningful causal structure even when no single observer has a privileged synchronized view of every event.

That is a strong external control for the Causal Canon's working intuition:

> **same field does not require same phase.**

Source: Leslie Lamport, 1978, *Communications of the ACM* 21(7), 558–565. DOI: [10.1145/359545.359563](https://doi.org/10.1145/359545.359563).

## Chandy–Lamport: the channel itself can be part of state

K. Mani Chandy and Leslie Lamport's 1985 distributed-snapshot work goes one step closer to the current seam.

A distributed system cannot generally be frozen everywhere at one physical instant and read like a single-memory machine.

Their snapshot algorithm reconstructs a **consistent global state** from local process states plus communication-channel state while the distributed computation continues.

That last part is the important one.

Messages that have been sent but are not yet represented as received at the corresponding recorded state are not necessarily discarded from the snapshot.

They are represented as **channel state** — messages in transit.

```text
PROCESS A STATE
      │
      │ sent m
      ▼
CHANNEL A→B
   [ m ]        ← in transit belongs to the state description
      │
      ▼
PROCESS B STATE
```

A later scholarly treatment states the same idea plainly: the state of a channel can represent messages that have been sent but not yet received at the destination. Snapshot correctness also depends on correctly recording in-transit messages.

Sources:

- K. Mani Chandy & Leslie Lamport, 1985, *Distributed Snapshots: Determining Global States of Distributed Systems*, *ACM Transactions on Computer Systems* 3(1), 63–75. DOI: [10.1145/214451.214456](https://doi.org/10.1145/214451.214456).
- S. Pashazadeh, B. Z. Al-Basseer, J. Tanha & A. Galli, 2024, *Modeling Chandy–Lamport Distributed Snapshot Algorithm Using Colored Petri Net*, *IET Software*. DOI: [10.1049/2024/6582682](https://doi.org/10.1049/2024/6582682).
- J. Nakamura, Y. Kim, Y. Katayama & T. Masuzawa, 2020, *A cooperative partial snapshot algorithm for checkpoint-rollback recovery of large-scale and dynamic distributed systems and experimental evaluations*, *Concurrency and Computation: Practice and Experience*. DOI: [10.1002/cpe.5647](https://doi.org/10.1002/cpe.5647).

## The world-cut refinement

This suggests a refinement to the current eCODE notion of a world-cut.

A causally adequate cut may not be exhausted by:

```text
constituted local objects
+
completed receipts
+
settled dispositions
```

It may also need to expose witnessed relations whose terminal state is not yet known.

Candidate shape:

```text
WORLD CUT
├── constituted local occurrences
├── completed inbound/outbound dispositions
├── incompatible historical branches
└── OPEN CHANNEL STATE
      ├── crossingId
      ├── outboundRef
      ├── departedAt
      ├── sourceBinding
      ├── intendedDestination
      ├── requestedConsequence
      └── disposition: unresolved
```

That does **not** mean the packet has arrived.

It means the source-side system state still includes the fact that an attributable packet departed and has not lawfully terminated.

## This actually strengthens the authority boundary

At first glance, exposing an open crossing might seem like granting it more reality.

Architecturally, it does the opposite.

If the crossing disappears from state until a return occurs, later readers are tempted toward one of two errors:

```text
A. nothing is visible
   → therefore nothing exists

B. outbound send is visible
   → therefore destination received it
```

Explicit channel state supports a third representation:

```text
C. departure is witnessed
   destination consequence is unknown
   relation remains unresolved
```

So the open state protects the distinctions:

```text
sent       ≠ received
received   ≠ admitted
admitted   ≠ executed
executed   ≠ succeeded
```

This is not weaker accounting.

It is stricter accounting with one more legitimate state.

## A consistent cut is not a synchronized photograph

This also sharpens the word `cut`.

A causally consistent world-cut should not be imagined as a cosmic camera shutter that captures one globally simultaneous instant.

It is closer to a lawful cross-section through a distributed history.

```text
local history A ───────────────▶
                 │
local history B ────────▶      │
                     │         │
channel state        [ m ]─────┘
```

The cut is coherent because causal obligations are respected, not because every local clock says the same thing.

That lands directly beside the Causal Canon:

> **Global coherence need not imply synchronized local phase.**

## What the control does not prove

The distributed-systems analogy is unusually strong, but it has a boundary.

It does not prove:

- that every unresolved social or narrative relation is system state;
- that physical light propagation is machine memory;
- that delayed return preserves personal identity;
- that all world models should adopt one universal channel schema;
- that timeout semantics are globally interchangeable;
- that mathematical channel state establishes metaphysical continuity.

The external literature establishes a technical fact inside distributed systems:

> process-local state alone can be insufficient for a causally consistent global state; communication-channel state, including in-transit messages, can matter.

Everything beyond that remains an architectural inference to test locally.

## Candidate eCODE implication

The portable shape may therefore be smaller than a new graph verb.

```text
OPEN CROSSING
{
  identity,
  provenance,
  source binding,
  departure witness,
  intended exterior,
  disposition
}
```

The project owner decides what terminal states mean.

Free Graph can preserve the relation and provenance.

A world-cut can expose it.

No one silently promotes it.

## Epistemic split

**Documented fact:** Lamport's happened-before relation defines causal partial order in distributed systems. Chandy–Lamport distributed snapshots represent global state using local process states and communication-channel states; in-transit messages are part of that channel-state problem.

**Inference:** A Static Collective world-cut that omits all witnessed unresolved crossings may discard causally relevant information that a later traversal needs to reconstruct the field without inventing either absence or destination consequence.

**Speculation:** `open channel state` may become a reusable eCODE state shape across project owners if cross-owner specimens preserve its meaning.

## Authority / canonical home

The distributed-systems papers own the external formal precedent.

This slice owns the analogy and candidate world-model refinement only.

Project repos retain authority over native state machines, failures, timeouts, receipts, and consequence.

## Relations

- `tests` → **The Thing Between Leaving and Returning** by supplying a formal domain where in-flight relation genuinely belongs to system state
- `bears-on` → **Trust the process — the Causal Canon** through causal partial order without shared simultaneity
- `bears-on` → future **world-cut** definitions by requiring an explicit decision about channel/open-crossing state
- `refuses` → synchronized-photograph interpretations of distributed coherence
- `refuses` → promotion of technical analogy into universal metaphysical law

## Pocket version

```text
A world-cut is not only:

WHAT IS HERE
+
WHAT HAS FINISHED

It may also need:

WHAT LAWFULLY LEFT
AND HAS NOT YET RESOLVED
```

> **World cuts have channels.**
