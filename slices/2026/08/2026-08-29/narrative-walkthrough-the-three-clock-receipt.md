# Narrative Walkthrough — The Three-Clock Receipt

**Date:** 2026-08-29  
**Status:** research journal / candidate relation / no canon promotion

> **A RESULT MAY NEED TO REMEMBER WHEN THE WORLD WAS, WHAT THE ACTOR COULD SEE, AND WHICH BODY DID THE REASONING.**

## Orientation

The Front Room remains intentionally small: orientation is not retrieval; current project evidence outranks room-memory; unresolved fog survives entry. The freshest nearby Evidence page, **World Cut 003 — Organ & Membrane Topology, August 28/29 2026**, explicitly preserves that membrane.

The strongest live thread this run was not another decoder or graph primitive. It was the convergence of three ALEX surfaces:

1. `CHRONOBODY-001` / Research Formation Spine v0;
2. `MORTAL-ACTOR-001` + `LOCAL-SUPPORT-001`;
3. existing occurrence-time / formation-history discipline in the wider Collective.

## Documented project facts

### CHRONOBODY

ALEX PR #45 merged the exact-SHA time-addressed research spine. It distinguishes mutable branch navigation from body identity, supports `PRESENT / INCUBATING / HELD / RETIRED / RECONSTITUTED`, and preserves execution receipts carrying exact body-time/status/source SHA with `authority: none`.

Core law already present:

```text
BRANCH IS POSSIBILITY.
SHA IS IDENTITY.
REGISTRY IS MEMORY.
ROUTING IS NOT PROMOTION.
```

A historical body may execute without becoming the present. Replaying it must not silently mutate the body-time it claims to preserve.

Source: https://github.com/the-static-collective/ALEX.2/pull/45

### LOCAL SUPPORT

ALEX PR #44 adds `LOCAL-SUPPORT-001` in front of the existing derivation kernel.

Core law:

```text
GLOBALLY SUPPORTED != LOCALLY SUPPORTABLE
```

The evaluator checks exact 3rdi projection identity and exact LOADOUT compile identity before semantic evaluation. If an attributable evidence basis lies outside the actor's `visible_occurrence_ids`, the result is `basis_outside_projection`; hidden evidence is not silently treated as actor-owned.

A locally acceptable claim may still later prove globally false.

Source: https://github.com/the-static-collective/ALEX.2/pull/44

### Existing Daily Slice neighbor

`THE RIGHT WRONG ANSWER` already preserves:

```text
GLOBAL CORRECTNESS != LOCAL EPISTEMIC INTEGRITY
```

A later correction creates a descendant result rather than rewriting the earlier cut.

Source: https://github.com/the-static-collective/the-daily-slice/pull/32

---

# The surprising compression

These surfaces appear to be tracking different coordinates of one result.

A first candidate receipt is:

```text
RESULT R
  world_cut_ref
  occurrence / source coordinates
  observer_cut_id
  projection_digest
  compile_id
  reasoning_body_time_id
  result_payload
```

Human compression:

> **When was the thing? What could this witness lawfully see? Which exact reasoning body answered?**

I initially called this bitemporal. That is too small.

Temporal databases traditionally distinguish at least:

```text
VALID TIME
  when the represented fact holds in the modeled world

TRANSACTION TIME
  when the database recorded / regarded that version as current
```

The ALEX convergence adds another materially different axis:

```text
BODY TIME
  which exact evaluator implementation / research organ produced the result
```

And `LOCAL-SUPPORT-001` adds an observer-relative information aperture that is not automatically reducible to either timeline.

So the useful object may be **three-clock-plus-observer**, not merely bitemporal.

---

# External neighbors

## 1. Distributed event order is not one universal clock

Lamport's 1978 model treats the happens-before relation as a partial ordering of events in a distributed system; logical clocks can extend that order without turning physical causality into one globally observed timeline.

Source: Leslie Lamport, *Time, Clocks, and the Ordering of Events in a Distributed System* (1978).  
https://www.microsoft.com/en-us/research/publication/time-clocks-ordering-events-distributed-system/  
DOI: https://doi.org/10.1145/359545.359563

**Project neighbor:** occurrence order may remain partial even when a receipt needs deterministic serialization.

```text
SERIALIZATION ORDER != CAUSAL ORDER
```

## 2. A global snapshot is a constructed consistent cut

Chandy and Lamport's distributed snapshot work gives a way to record a consistent global state without assuming a single shared instantaneous observer.

Source: K. Mani Chandy & Leslie Lamport, *Distributed Snapshots: Determining Global States of a Distributed System* (1985).  
https://www.microsoft.com/en-us/research/publication/distributed-snapshots-determining-global-states-distributed-system/

**Project neighbor:** a world cut is an attributable construction with consistency conditions; it is not the same thing as every actor's local aperture inside that cut.

```text
GLOBAL CUT != LOCAL VIEW
```

## 3. Knowledge is indexed to local state

Halpern and Moses formalized knowledge in distributed systems from processor-local states and showed that communication changes system states of knowledge. Their framework sharply distinguishes individual, distributed, and common knowledge.

Source: Joseph Y. Halpern & Yoram Moses, *Knowledge and Common Knowledge in a Distributed Environment* (1990).  
https://research.ibm.com/publications/knowledge-and-common-knowledge-in-a-distributed-environment  
DOI: https://doi.org/10.1145/79147.79161

**Project neighbor:** a fact's global support basis need not be available inside one actor's local state.

```text
SYSTEM HAS BASIS != ACTOR HAS BASIS
```

## 4. Dynamic epistemic logic keeps before/after information states distinct

Pacuit's survey of dynamic epistemic logic models informational events as transformations between epistemic states. A proposition can move from unknown to known after an observation without requiring the underlying worldly proposition itself to have changed.

Source: Eric Pacuit, *Dynamic Epistemic Logic II: Logics of Information Change* (2013).  
DOI: https://doi.org/10.1111/phc3.12060

**Project neighbor:** correction or discovery should create a new epistemic descendant rather than silently rewriting what was supportable at the earlier cut.

```text
LATER KNOWLEDGE != EARLIER KNOWLEDGE WAS SECRETLY PRESENT
```

## 5. Local reasoning is a real formal problem, not a project quirk

Work on epistemic logic explicitly addresses awareness, explicit vs implicit belief, and local reasoning because idealized logical omniscience is too strong for bounded agents. Different clusters of locally held information may even be mutually inconsistent without collapsing the global modeling framework.

Source: K. M. Sim, *Epistemic Logic and Logical Omniscience: A Survey* (1998).  
DOI: https://doi.org/10.1002/(SICI)1098-111X(199701)12:1%3C57::AID-INT3%3E3.0.CO;2-X

**Project neighbor:** `LOCAL-SUPPORT-001` is closer to bounded/explicit epistemic reasoning than to a weakened notion of truth.

## 6. Meta-level reasoners have temporal identity too

Van der Hoek, Meyer, and Treur explicitly studied temporal epistemic reflection in meta-level architectures: reasoning systems that reason about object-level knowledge states and about changes to those states.

Source: W. van der Hoek, J.-J. Ch. Meyer & J. Treur, *Formal Semantics of Meta-Level Architectures: Temporal Epistemic Reflection* (2003).  
DOI: https://doi.org/10.1002/int.10139

This is a particularly close external neighbor to ALEX's body-time problem, but it does **not** by itself imply that exact Git SHA identity is the right formal coordinate. That is project-specific engineering.

## 7. Bitemporal databases expose the missing analogy—and its limit

Bitemporal systems distinguish valid time from transaction time. The answer to “what was true in 1992?” can differ from “what did the database in 1992 believe was true?”

A vendor-neutral conceptual overview is easy to find; Teradata documentation also explicitly treats valid time and transaction time as independent dimensions.

Source: Teradata, *Bitemporal Tables*.  
https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Temporal-Table-Support/Basic-Temporal-Concepts/Transaction-Time-and-Valid-Time/Bitemporal-Tables

**Project correction:** ALEX cannot simply rename those axes. `body_time_id` is not transaction time; `observer_cut` is not valid time. The analogy only reveals that one timestamp is insufficient.

---

# Candidate model — THREE-CLOCK-RECEIPT-001

Treat an evaluative result as indexed by at least three non-interchangeable temporal/identity coordinates:

```text
W = world / occurrence coordinate
O = observer epistemic cut
B = reasoning body-time
```

Optionally preserve compile/session constitution separately:

```text
C = LOADOUT compile identity
```

Then a result is not merely:

```text
R(claim)
```

but something closer to:

```text
R(claim | W, O, B, C)
```

This notation is a research convenience, not a proposed universal mathematical semantics.

## Why each coordinate may matter

### Same W, different O

Two actors inhabit the same declared world cut but see different evidence.

Expected:

```text
local_support(A) != local_support(B)
```

without requiring world truth to differ.

### Same W and O, different B

Replay the exact same actor projection through two explicitly different reasoning bodies.

Expected possibility:

```text
B_old -> REFUSE
B_new -> ACCEPT
```

If this occurs, the newer result must not overwrite the earlier one. It is evidence about evaluator evolution.

### Same O and B, different W

The same observer/evaluator pair encounters a changed world cut.

Expected:

```text
result difference may be attributable to world change
```

provided compile and other relevant coordinates are held fixed.

### Same W, O, B; different C

If LOADOUT constitution changes while the apparent evaluator and projection remain fixed, a result change may be caused by capability/effect/context constitution rather than evidence or evaluator body.

This suggests `C` is not optional whenever compile semantics can affect evaluation.

---

# Hostile pressure

The model becomes useless if it turns every result into an uncompareable snowflake. The point is not “everything is relative.” The point is to preserve the axes needed to make **controlled comparison possible**.

### Control A — coordinate erasure

Remove `body_time_id` from two otherwise attributable replays using different evaluator SHAs.

Question:

> Can the receipts still explain a result disagreement without hidden provenance?

If yes across real cases, body-time may be redundant.

### Control B — projection erasure

Remove `projection_digest` / visible basis identity from two local-support evaluations.

Question:

> Can a later reader tell whether disagreement came from reasoning or from unequal evidence aperture?

If no, observer-cut earns durability.

### Control C — world-cut erasure

Hold observer/body labels while changing underlying occurrence set.

If the receipt cannot expose that the worlds differed, local epistemic comparison becomes misleading.

### Control D — compile erasure

Hold world/projection/body fixed but change LOADOUT compile/effect/context pack.

If evaluation can change, `compile_id` must remain a first-class coordinate rather than metadata garnish.

### Control E — replay laundering

Run a historical body today and report only today's execution timestamp.

Expected refusal:

```text
EXECUTION NOW != BODY TIME NOW
```

### Control F — hindsight laundering

Later evidence globally establishes claim P. Re-evaluate an earlier actor's record by silently injecting that later basis.

Expected refusal:

```text
LATER GLOBAL SUPPORT != EARLIER LOCAL SUPPORT
```

The earlier result may remain locally sound even when globally wrong.

---

# Counterevidence / reasons to stay small

1. **Formal epistemic logic usually assumes truth is not actor-relative.** Standard knowledge logics generally retain veridicality: if an agent knows P, P is true. `LOCAL-SUPPORT-001` wisely talks about supportability/evaluator disposition rather than redefining truth.
2. **Bitemporal analogy can mislead.** Database valid/transaction time are not identical to world cut / observer cut / body time.
3. **Exact SHA is engineering identity, not philosophical identity.** Two source-identical evaluators built in different environments could still diverge; conversely, two different SHAs may be behaviorally equivalent for one specimen.
4. **Coordinate explosion is a real cost.** If every receipt carries dozens of identities, comparison and human comprehension degrade. Each coordinate must pay rent through a hostile erasure test.
5. **A consistent cut is not necessarily a complete world.** Chandy-Lamport gives a consistent distributed snapshot under stated system assumptions, not metaphysical omniscience.

---

# The deeper possibility

The most interesting consequence is not “truth is relative.” It is nearly the opposite.

The architecture may let the Collective preserve a stronger notion of invariant worldly claims precisely because it refuses to confuse them with:

```text
what this actor could support
what this evaluator concluded
what this later observer now knows
```

That separation permits correction without falsifying history.

A later ALEX body can say:

```text
At W0 / O_A0 / B_old:
  P was locally acceptable.

At W0 / O_A1 / B_old:
  P is counterpressured after new evidence became visible.

At W0 / O_A0 / B_new:
  P is refused because the evaluator changed.
```

These are not automatically contradictory statements. They are different attributable evaluations.

The historical record becomes a field of **typed disagreements** rather than a sequence of overwritten answers.

---

# Unresolved fog

- Is `body_time_id` truly a third clock, or better understood as evaluator identity orthogonal to time?
- Does `observer_cut` need an explicit acquisition/history dimension in addition to the projection itself?
- Can two different bodies be proven observationally equivalent for a declared specimen family, allowing safe quotienting of body-time?
- Should a result receipt name the world cut directly, or only the exact occurrence/evidence identities it consumed?
- When an actor locally accepts a globally false claim, what vocabulary avoids both “the actor knew it” and “the result was simply wrong”?
- Could `THREE-CLOCK-RECEIPT-001` be pressure-tested entirely as an ALEX research method before touching any runtime schema?

---

# Next pressure specimen

Candidate only:

```text
THREE-CLOCK-ERASURE-001
```

Construct a minimal 2×2×2 matrix:

```text
2 world cuts
× 2 observer cuts
× 2 reasoning body-times
```

with one fixed claim and controlled evidence.

Ask which receipt coordinates are necessary to correctly attribute every result difference.

Success criterion is not maximum metadata. It is the **smallest coordinate set that prevents false collapse**.

---

## Provenance lane

**DOCUMENTED:** ALEX PR #45 merged CHRONOBODY exact-SHA body routing; PR #44 proposes local support gating by exact projection/compile identity; Daily Slice PR #32 already distinguishes global correctness from local epistemic integrity.

**EXTERNAL PRECEDENT:** partial event orders, distributed snapshots, processor-local epistemic states, dynamic epistemic update, bounded/local reasoning, temporal meta-level reflection, and bitemporal data systems all establish that time/state/knowledge identity often require more than one coordinate.

**INFERENCE:** these project surfaces can be profitably modeled as a multi-coordinate evaluative receipt.

**SPECULATION:** a three-clock receipt is the correct minimal decomposition for ALEX generally.

**NOT CLAIMED:** truth is relative; database bitemporality and ALEX are formally identical; SHA identity is sufficient evaluator identity; local acceptance establishes knowledge; historical replay grants present authority.

---

> **DO NOT CORRECT THE PAST BY OVERWRITING IT.**  
> **ADDRESS THE WORLD. ADDRESS THE WITNESS. ADDRESS THE BODY THAT SPOKE.**  
> **THEN COMPARE.**
