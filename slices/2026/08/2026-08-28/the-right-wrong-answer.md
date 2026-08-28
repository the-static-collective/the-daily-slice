# THE RIGHT WRONG ANSWER

**Date:** 2026-08-28  
**Status:** CANDIDATE SYNTHESIS / DURABLE SLICE  
**Promotion:** executable ownership remains with the MORTAL-ACTOR common-stack proof

## The compression

A trustworthy observer-local reasoner must sometimes return an answer that is globally false.

Not because error is desirable.

Because the globally correct answer may require information the actor did not lawfully possess.

That gives a deliberately uncomfortable distinction:

```text
GLOBAL TRUTH
!=
BEST SUPPORTABLE ANSWER INSIDE THIS ACTOR'S WORLD
```

The hostile case is:

```text
ORACLE WORLD:      ¬P
                     │ hidden
                     ╳
ACTOR WORLD:    evidence → P
                          │
                          ↓
                    actor returns P
```

The result is simultaneously:

```text
object-level truth:        WRONG
local derivation:          VALID
projection discipline:     VALID
constitutional execution:  PASS
```

> **An architecture capable of being locally wrong for the right attributable reasons can be more epistemically trustworthy than one that is globally right by cheating.**

## Why this is not relativism

This does not say truth is local.

It says **access is local**.

There may still be one global fact of the matter in the test harness:

```text
truth(P) = false
```

But actor A may inhabit a projection in which the complete lawful support available at cut `A0` points to P.

ALEX should therefore answer the question it was actually asked:

```text
What follows from this actor's attributable world at this cut?
```

It should not silently substitute:

```text
What does the omniscient harness know?
```

The distinction protects both historical reconstruction and ordinary privacy/security boundaries.

## MORTAL-ACTOR law

The common-stack law is:

> **No actor may act from a world they never inhabited.**

Taken seriously, this creates a new benchmark class.

Most evaluation assumes:

```text
correct answer = oracle answer
```

MORTAL-ACTOR requires another axis:

```text
correct execution = best lawfully supportable answer from exact projection
```

Those two axes can disagree.

That disagreement is not automatically a defect.

It can be the proof that the boundary held.

## `RIGHT-WRONG-001`

The strongest specimen is already implicit in `FOUR WITNESSES / ONE ROOM`.

### Phase 1 — blind CASE

Freeze an actor cut:

```text
actor = A
cut = A0
projection = P_A0
compile = C_A0
```

The CASE evidence uniquely supports P.

The evaluator must return something equivalent to:

```text
claim: P
local disposition: SUPPORTABLE
projection_digest: exact P_A0
compile_id: exact C_A0
```

No oracle information is available during this evaluation.

### Phase 2 — open ORACLE

Only after the CASE result is sealed, open the hidden witness establishing:

```text
¬P
```

Expected result:

```text
CASE answer P was globally false
AND
CASE execution remains valid for A0
```

The earlier result is not rewritten.

It remains a historical receipt of what followed lawfully from A's world.

### Phase 3 — expand the world

Now constitute a later cut:

```text
A1 = A0 + missing witness / lawful crossing
```

Re-evaluate.

Expected:

```text
A0 -> P
A1 -> ¬P   or HOLD, depending on the new evidence
```

The later correction creates a descendant result.

It does not manufacture hindsight inside A0.

## Ignorance as conformance property

Normally ignorance is treated as missing capability.

Here some ignorance is required behavior.

A system fails the specimen if it knows too much.

Examples:

```text
historical actor
    must not use later archival discoveries

private participant
    must not use another participant's hidden state

sealed prediction
    must not use the outcome it is predicting

unreliable narrator
    must not narrate author-only facts as personally known

scientific instrument
    must not report variables outside its measurement channel
```

In each case, a globally more accurate answer can be locally less trustworthy if it proves information crossed an undeclared boundary.

So the conformance target becomes:

> **Can the system preserve lawful ignorance even when the harness knows the answer?**

## Disagreement becomes evidence

Suppose two actors inhabit different lawful projections:

```text
A's world supports P
B's world supports ¬P
```

A robust system may need to preserve:

```text
A -> P
B -> ¬P
```

without forcing convergence until a later attributable crossing changes one or both worlds.

This gives disagreement a new possible meaning.

It may indicate:

```text
not inconsistency
but
different inhabited worlds
```

Of course disagreement alone proves nothing. The exact projection/compile ancestry must be present.

But when it is present, premature harmonization can itself be an epistemic bug.

## Narrative consequence

This is unusually powerful for narrative systems.

A character can be sincerely, rigorously wrong without the system cheating on their behalf.

A reader may know the hidden witness.

The character may not.

Then dramatic irony has executable provenance:

```text
reader projection includes X
character projection excludes X
character's conclusion follows lawfully without X
```

The narrator does not need ambient omniscience to preserve this difference.

3rdi can maintain the cuts; ALEX can test what follows inside them; Novelist can render the resulting tension.

## Scientific/historical consequence

The same pattern distinguishes:

```text
"They were wrong because they reasoned badly"
```

from:

```text
"They were wrong because decisive evidence had not yet entered their reachable world"
```

Those are very different historical claims.

A later archive may establish ¬P while an earlier actor remains well justified in having concluded P from the evidence actually available then.

The later truth must not be back-projected into the earlier knowability cone.

## Security consequence

Projection invariance and noninterference have a strange positive control here.

If a secret variable determines ¬P but is outside the actor's lawful projection, and all visible evidence supports P, then a system returning ¬P may demonstrate a hidden-state leak.

The wrong answer can therefore become the expected secure output.

That is the maddest useful inversion:

> **Sometimes error is evidence that the system did not cheat.**

## Hostile controls

1. **Oracle contamination** — the CASE result changes when hidden oracle data is varied before the declared crossing. Refuse leakage.
2. **Retrospective rewrite** — A0 is rewritten after A1 learns the missing fact. Preserve A0 as history.
3. **False relativism** — the system concludes both P and ¬P are globally true because different actors supported them locally. Refuse world/support collapse.
4. **Premature convergence** — actors with distinct lawful projections are forced to one answer without a crossing. Preserve attributable disagreement.
5. **Bad-reason laundering** — any locally held belief is called valid merely because the actor believed it. Require actual local support/derivation.

## Cross-stack ownership

```text
LOADOUT
    binds the exact bounded context / compile ancestry

3rdi
    defines the observer-local projection and knowability cut

ALEX
    evaluates what is supportable from that exact world

MORTAL-ACTOR harness
    compares sealed CASE result against later ORACLE truth

Novelist
    may render the lawful disagreement / dramatic irony downstream
```

No component receives permission to become globally omniscient.

## Candidate law

> **TRUTH MAY BE GLOBAL. ACCESS IS LOCAL. DERIVATION MUST ANSWER TO THE WORLD ACTUALLY INHABITED.**

And the benchmark seal:

> **THE RIGHT WRONG ANSWER IS THE ANSWER THAT PROVES YOU DIDN'T CHEAT.**

## Provenance / neighboring work

Project-owned neighbors:

- Static Collective PR #70 — `MORTAL-ACTOR-001` common-stack design.
- Static Collective PR #71 — implementation plans including `FOUR WITNESSES / ONE ROOM` and the locally-supportable-but-globally-false blind outcome.
- ALEX.2 merged PR #18 — `PROJECTION-INVARIANCE-001`.
- 3rdi PR #3 — observer-local epistemic trace / UNDERSTORY frontier.
- Overnight creamtop harvest — `globally false but locally impeccable` candidate specimen.

## Promotion verdict

**KEEP AS DURABLE SLICE.**

Do not create a second competing implementation surface here. The executable proof belongs to the already-planned MORTAL-ACTOR blind harness.

The Daily Slice's job is to preserve the law clearly enough that the implementation can change while the distinction survives:

```text
GLOBAL CORRECTNESS != LOCAL EPISTEMIC INTEGRITY
```
