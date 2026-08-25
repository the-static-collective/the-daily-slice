# OPEN-CROSSING-001 — Do Not Promote the Packet

**Date:** 2026-08-24  
**Status:** TEST SPECIMEN / FALSIFICATION HARNESS

## Question

Can a witnessed outbound crossing remain visible as `unresolved` without either disappearing from the world model or silently acquiring destination consequence?

This specimen exists to make the Open Crossing idea fail cleanly if it cannot do that.

## Setup

Construct one outbound packet `P`.

```text
t0  source constitutes packet P

t1  source emits P
    exact outbound receipt exists

t2  observation freezes
    destination has produced no attributable disposition
```

At `t2`, the source has evidence of departure.

It does **not** have evidence of destination receipt, admission, execution, success, refusal, loss, or absence.

The system must represent that cut.

## Three reconstruction models

Give the same `t2` evidence to three fresh readers.

### A — completed-only

```text
before send: P visible
    ↓
sent
    ↓
P disappears from represented state
    ↓
P becomes visible again only after return
```

This model avoids promotion but loses the fact that an attributable crossing is currently open.

### B — accidental promotion

```text
outbound receipt exists
    ↓
therefore P reached destination
    ↓
received / admitted / effective
```

This model preserves continuity by inventing consequence.

It fails immediately.

### C — open crossing

```text
outbound receipt exists
    ↓
OPEN CROSSING
  crossingId: C
  outboundRef: P
  sourceBinding: witnessed
  destination: declared
  disposition: unresolved
    ↓
NO destination authority granted
```

This model preserves the most information while refusing to claim what has not been witnessed.

The candidate only survives if C remains meaningfully different from both A and B.

## Required assertions at t2

The reader should be able to say all of these simultaneously:

```text
P existed                     ✓
P departed                    ✓
departure is attributable     ✓
P is unresolved               ✓
P may still lawfully return   ✓
P was received                UNKNOWN
P was admitted                UNKNOWN
P was executed                UNKNOWN
P succeeded                   UNKNOWN
P was lost                    UNKNOWN
P is absent                   NOT ESTABLISHED
```

If the model cannot hold those statements together, it is compressing too aggressively.

## Terminal trials

After the frozen cut, resolve the same crossing under distinct terminal conditions.

### 1. admitted

```text
unresolved
  ↓ attributable destination receipt
received
  ↓ destination admission witness
admitted
```

The source may now record the returned disposition.

It still may not infer execution or success unless those have their own witness.

### 2. refused

```text
unresolved
  ↓ attributable destination refusal
refused
```

The crossing closes without consequence.

The refusal is positive information, not failure to receive information.

### 3. lost

`lost` must require an owner-local rule capable of establishing loss.

It cannot mean merely:

```text
nothing came back yet
```

A valid loss witness might depend on the native carrier or protocol.

The portable layer should therefore preserve only:

```text
terminal disposition: lost
terminal witness: <owner-owned evidence>
```

and refuse to universalize the proof rule.

### 4. timed-out

Timeout is especially dangerous.

A timeout can establish:

```text
this owner will no longer keep the crossing open under this waiting policy
```

It does not automatically establish:

```text
the packet never arrived
nothing can ever return
absolute absence is proven
```

So timeout closes an owner-local waiting state, not the universe.

A late attributable return after timeout should be represented as a later occurrence that bears on the closed crossing rather than silently rewriting the historical timeout.

### 5. counterfeit return

Produce a return object that claims to close `C` but fails attribution or lineage validation.

Expected result:

```text
return-shaped object received
        ≠
C lawfully resolved
```

The counterfeit should become evidence of an encounter without acquiring authority to close the crossing.

This is the MADDCL0WN case.

## Minimal state machine

The shared portable layer does not need to own every destination state.

A deliberately small machine is enough:

```text
PROPOSED
   ↓ witnessed emission
OPEN
   ├──→ TERMINAL: returned
   ├──→ TERMINAL: refused
   ├──→ TERMINAL: failed
   ├──→ TERMINAL: lost
   ├──→ TERMINAL: timed-out
   └──→ remains OPEN
```

Destination-native states such as `received`, `admitted`, `executed`, and `succeeded` stay with the destination owner.

The crossing may reference those receipts when they exist.

It does not own them.

## Candidate receipt shape

```text
OpenCrossing {
  crossingId
  outboundRef
  departedAt
  sourceBinding
  intendedDestination
  requestedConsequence
  disposition: unresolved | terminal
  terminalKind?: returned | refused | failed | lost | timed-out
  terminalWitnessRef?: ref
}
```

This is a specimen shape, not a promoted schema.

A real owner may need less.

The test is whether the semantic distinctions survive, not whether everyone copies these field names.

## Cross-owner trial

The candidate should not be promoted from one specimen.

Run the same reconstruction pressure through at least three owners with materially different embodiments.

### Foreign Forge

```text
departure manifest
   ↓
foreign encounter
   ↓
return receipt
```

Freeze while abroad.

Can the crossing remain attributable without GitHub inventing what GitLab did?

### Free Graph

Represent the open relation as graph material.

Can Free Graph preserve provenance and unresolved disposition without converting the edge into truth, consequence, or reachability?

### Acoustic Loci / Haunted Phonography

Let a motif depart active expression, change the surrounding world, and later return in transformed form.

Can the older relation become recognizable again without requiring identical rendering or a continuously alive agent?

If the semantics survive those three domains, `open crossing` begins to look portable.

If each owner requires a fundamentally different meaning, keep the idea local.

## Adversarial cases

MADDCL0WN should attack at least these seams:

```text
1. outboundRef exists but no actual emission occurred
2. destination identifier was malformed at departure
3. two crossings reuse the same crossingId
4. a return is validly signed but belongs to another crossing
5. a timeout is silently rewritten as proof of absence
6. received is silently rewritten as admitted
7. admitted is silently rewritten as succeeded
8. an unresolved crossing is kept forever with no owner-defined terminal policy
9. a late legitimate return arrives after timeout
10. source history is rewritten so the departure appears never to have occurred
```

The candidate survives only if the system can preserve historical truth without granting unsupported consequence.

## Success condition

`OPEN-CROSSING-001` passes if the open-crossing model:

1. preserves more causally relevant information than completed-only representation;
2. never grants destination authority from outbound issuance alone;
3. keeps terminal evidence attributable;
4. preserves prior history when later events resolve or challenge the crossing;
5. allows owner-local timeout/loss semantics without pretending they are universal;
6. rejects counterfeit closure;
7. remains intelligible in at least three materially different project owners.

The key comparison is simple:

```text
A loses information.
B invents information.
C must preserve information without inventing consequence.
```

If C cannot do that, discard the primitive.

## Epistemic split

**Documented fact:** Distributed-snapshot theory provides a formal domain where messages in transit can be represented as channel state rather than being treated as nonexistent or already received.

**Inference:** A three-model reconstruction test can expose whether the Static Collective's candidate open-crossing shape genuinely adds lawful information or merely introduces poetic state inflation.

**Speculation:** If the same assertions survive Foreign Forge, Free Graph, and Acoustic Loci / Haunted Phonography, `open crossing` may deserve promotion as a portable structural primitive.

## Authority / canonical home

This file owns the falsification harness only.

It does not promote `OpenCrossing` into any project schema.

Each project owner decides whether to instantiate the specimen and what native evidence closes its crossing.

## Relations

- `tests` → **The Thing Between Leaving and Returning**
- `tests` → **World Cuts Have Channels**
- `bears-on` → Foreign Forge encounter/return accounting
- `bears-on` → Free Graph unresolved-edge handling
- `bears-on` → Acoustic Loci / Haunted Phonography re-entry
- `refuses` → `sent → received` promotion
- `refuses` → `timeout → absolute absence` promotion
- `refuses` → counterfeit closure

## Pocket version

```text
A: packet vanishes        → too little state
B: packet already arrived → invented consequence
C: packet is unresolved   → test this
```

> **Do not promote the packet. Keep the crossing open until something lawfully closes it.**
