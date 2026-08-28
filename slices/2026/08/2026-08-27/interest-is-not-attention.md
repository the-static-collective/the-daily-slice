# INTEREST IS NOT ATTENTION

**Posture:** CANDIDATE / RESEARCH-BACKED METHOD  
**Date:** 2026-08-27  
**Project pressure:** Project0 / causal envelopes / Narrative Walkthrough / Stigmergic Field  
**Promotion:** none

## The turn

A proposed Project0 successor-envelope started with three relational coordinates:

```text
WHEN       temporal relation
CAUSE      causal relation
INTEREST   observer-local relevance / pull
```

The immediate attraction was good: `value` belongs inside a state transition, while `interest` could explain why a participant entered or returned to some topic without pretending that chronology or shared subject matter implies causation.

But `interest` becomes dangerous if the system silently infers an inner state from mere behavior.

So the candidate sharpened:

> **Interest should travel as an attributable claim or witness relation, not as omniscient telemetry about a mind.**

## Existing project neighbor

The Static Collective already has a nearby executable pattern: **Stigmergic Field v0.1**. Its six field channels are:

```text
attention
receptivity
saturation
inhibition
tension
return
```

Those channels are derived from accepted events and explicitly grant no authority. The linked specimen also records an important correction: repeated positive recognition by one participant is `return`, while a later negative encounter remains `tension`; field channels describe attributable history, not an invisible psychological essence.

That makes `interest` look less like a seventh low-level field channel and more like a higher-level, actor-local relation that may be supported by some combination of declaration, encounter, attention, receptivity, return, question-asking, or other bounded evidence.

## Candidate notation

Let `e` be an attributable interaction occurrence, `a` an actor/observer, and `q` a topic, object, question, or relation.

```text
S_e : W_before -> W_after
```

`S_e` receipts an attributable state transition constituted by occurrence `e`.

Then:

```text
I_e(a,q | b)
```

means:

> actor `a` is recorded as interested in `q` at occurrence `e`, with basis `b`.

The basis matters.

Possible basis classes:

```text
DECLARED      actor explicitly says interest exists
WITNESSED     an attributable witness reports an interest expression
BEHAVIORAL    behavior is offered only as fallible evidence of interest
DERIVED       a bounded rule derives an interest hypothesis from declared inputs
UNKNOWN       interest is asserted but basis is not recoverable
```

`BEHAVIORAL` and `DERIVED` should remain epistemically weaker than `DECLARED`; they must never silently become knowledge of an actor's internal state.

## Hard separations

```text
I_e(a,q) != a caused q
I_e(a,q) != q caused e
I_e(a,q) != attention(a,q)
I_e(a,q) != relevance(q)
I_e(a,q) != preference(a,q)
I_e(a,q) != agreement(a,q)
I_e(a,q) != evidence(q)
I_e(a,q) != authority(a,q)
```

Interest may help explain traversal without becoming evidence for the traversed thing.

## A / B / A specimen

```text
eA1 := A writes Slice 1

eB  := B writes Slice 2
       without seeing eA1

eA3 := A writes Slice 3
       case 1: without seeing eB
       case 2: after encountering eB
```

The same history can legitimately support three projections.

### Chronology

```text
eA1 @ t1 < eB @ t2 < eA3 @ t3
```

### Causality — independent case

```text
eA1 < eA3

eB || eA1
eB || eA3
```

where `||` means causally incomparable for the declared model.

### Interest

```text
I_eA1(A,q | b1)
I_eB (B,q | b2)
I_eA3(A,q | b3)
```

If A actually encounters B's second slice before writing the third, that encounter may create a causal carrier into `eA3`; chronology alone cannot.

## Candidate interaction envelope

```text
E(e) = {
  actor,
  occurred_at,
  causal_parents,
  available_set,
  noticed_set,
  interest_claims,
  transition,
  outputs,
  refusals,
  unresolved
}
```

This envelope can preserve separate answers to:

- When did this happen?
- What causally preceded it?
- What information was available?
- What was actually noticed?
- What did the actor declare or exhibit interest in?
- On what basis do we say so?
- What changed?
- What was refused or not adopted?
- What remains unknown?

## External pressure test

Information-science research treats interest as strongly person- and context-relative rather than an intrinsic property of an object. Situational interest can vary within the same person over time and across different people, and is associated with curiosity, exploration, and deeper processing. This supports modeling interest as a local relation rather than a global property of content.

The harder warning is measurement. Eye behavior and other interaction traces can correlate with reported interest, but the same behavioral signals are influenced by multiple lower- and higher-order processes. One 2022 study reported that eye-tracking features explained only part of the variance in self-reported interest and explicitly warned that eye behavior is not causally tied one-to-one to higher-order constructs. Therefore:

> **observable attention may support an interest hypothesis; it does not entitle a system to assert an actor's interest as fact.**

Relevant scholarly neighbors:

- Glassey & Azzopardi (2012), *Finding interest in the stream*, DOI `10.1002/meet.2011.14504801297`.
- van der Sluis et al. (2014), *When complexity becomes interesting*, DOI `10.1002/asi.23095`.
- Sluis & van den Broek (2022), *Feedback beyond accuracy: Using eye-tracking to detect comprehensibility and interest during reading*, DOI `10.1002/asi.24657`.
- Saracevic (2007), *Relevance: A review... Part II*, DOI `10.1002/asi.20682`; useful adjacent warning that relevance itself is relational, contextual, inferred, and interaction-dependent.

## Why this matters for Project0

Project0 already treats relationships as part of decompression and protects attribution, uncertainty, stable identity, and retrieval-not-authority. It also freezes its canonical node kinds and warns against introducing ontology primitives before a demonstrated semantic distinction exists.

So the conservative candidate is:

```text
INTEREST is not yet a node kind.
INTEREST is not yet a canonical field channel.
INTEREST begins as an attributable, basis-bearing relation/projection.
```

This gives Project0 a possible way to preserve **what was pulling whom** without claiming access to private mental states and without converting shared attention into causality, evidence, consensus, or authority.

## Candidate law

> **Interest may explain traversal without becoming evidence for the traversed thing.**

Stronger privacy boundary:

> **Interest is witnessed, declared, or hypothesized from bounded evidence; it is never silently read from a person.**

## Next specimen

`INTEREST-ENVELOPE-001` should replay the A / B / A case with four variants:

```text
1. DECLARED_INTEREST
2. WITNESSED_EXPRESSION
3. BEHAVIOR_ONLY
4. NO_INTEREST_CLAIM
```

The verifier should prove that identical chronology and identical output artifacts do not force identical interest relations, and that an inferred/behavioral interest claim remains distinguishable from a declaration.

## Promotion verdict

**HOLD.**

This is sufficiently coherent to test, but not sufficiently independent of the existing Stigmergic Field channels to justify a Project0 ontology change. The first useful move is an adversarial fixture, not a new constitutional noun.
