# THE BODY CANNOT MAKE ITS OWN MEMORY RETROACTIVE

**Date:** 2026-09-18  
**Status:** CANDIDATE

## What was noticed

The first BODY-EMERGENCE rollout immediately exposed a temporal provenance seam.

Free Graph PR #15 introduces two distinct layers:

```text
owner-published body surface
        ↓
occurrence-bound local chart
        ↓
no-promotion body projection
```

The current `BODY-PULSE-001` implementation validates a supplied body surface by digest, accepts an independently supplied repository occurrence SHA, and derives a chart that binds the two.

That establishes:

```text
this is the surface we used
+
this is the repository cut we described
```

It does **not** by itself establish:

```text
this surface declaration existed at that repository cut
```

The smallest seal is:

> **SURFACE DIGEST + OCCURRENCE PIN != HISTORICAL VALIDITY.**

A chart therefore has at least two histories that must not be silently collapsed:

```text
SUBJECT HISTORY
    the repository occurrence being described

DECLARATION HISTORY
    when the interface declaration became attributable
```

A third coordinate may also matter:

```text
APPLICATION HISTORY
    when a particular chart bound the declaration to the subject occurrence
```

Those times may coincide. They do not have to.

## Why it matters

BODY-EMERGENCE is specifically designed to let local organs expose bounded interfaces without surrendering local authority.

That same no-promotion law now has a temporal form:

> **A global pulse may describe a local past. It must not silently become what that local past had declared.**

This does **not** mean retrospective charts are invalid.

A later owner declaration may accurately describe an earlier repository state. That can be useful and lawful.

But:

```text
RETROSPECTIVE APPLICABILITY
!=
CONTEMPORANEOUS AVAILABILITY
```

The danger is chronology laundering, not retrospective analysis.

The reverse case matters too.

An authentic old declaration may have been valid at `t0`, while the repository changes materially at `t1`.

Therefore:

```text
AUTHENTIC OLD DECLARATION
!=
VALID DECLARATION FOR EVERY LATER CUT
```

And stable declarations must also be allowed to persist without forced churn:

```text
SURFACE NOT INTRODUCED AT O
!=
SURFACE INVALID AT O
```

The missing object is not commit co-location. It is an attributable **validity/binding relation** between declaration and subject occurrence.

## Smallest executable discriminator

ALEX.2 issue #130 freezes the first bounded pressure test.

### A — contemporaneous owner surface

The target occurrence demonstrably contains or otherwise attests the exact owner surface being used.

Expected result: strongest local binding.

### B — later surface applied retrospectively

```text
t0  repository occurrence exists
t1  owner publishes body surface
t2  pulse applies that surface to t0
```

Expected result: retrospective description may remain lawful, but its receipt must not imply the declaration existed at `t0`.

The larger hostile set also preserves:

- copied/provisional surfaces;
- stale owner surfaces applied after material change;
- lawful persistence of an unchanged stable declaration.

No temporal database or general schema expansion is earned yet.

## BODY DELTA consequence

Once real owner surfaces land, comparing two pulses will require more than:

```text
BODY(t1) - BODY(t0)
```

A superficially identical topology change could result from different causes:

```text
repo changed
surface changed
surface validity/binding changed
overlap changed
projection algorithm changed
```

Those deltas are not equivalent.

In particular, a body projection could gain an edge without either underlying repository changing if a previously unresolved historical binding becomes attributable.

That would mean:

```text
BODY DELTA
!=
WORLD DELTA
```

Sometimes the change is in what the projection can lawfully know about the world.

## Source roads

- Free Graph PR #15 — `BODY-EMERGENCE-001`, `BODY-OVERLAP-001`, and `BODY-PULSE-001`: https://github.com/the-static-collective/free-graph/pull/15
- ALEX.2 issue #130 — `SURFACE-DECLARATION-NOT-OCCURRENCE-001`: https://github.com/the-static-collective/ALEX.2/issues/130
- Current BODY-PULSE implementation on the Free Graph proposal branch: `scripts/body_pulse.py`
- The 2026-09-18 Narrative Walkthrough that first isolated the temporal distinction.

## Epistemic split

**Documented fact:** `BODY-PULSE-001` currently verifies surface identity by digest and binds that surface to an independently supplied occurrence coordinate when deriving a chart. Free Graph PR #15 and the owner-surface rollout remain proposed/open rather than silently promoted to landed adoption.

**Inference:** BODY requires an attributable binding/validity relation if it is later expected to distinguish contemporaneous owner declarations, retrospective application, provisional external description, stale declaration, and lawful persistence across unchanged occurrences.

**Speculation:** A future BODY DELTA could become a useful multi-axis temporal instrument if repository change, declaration change, binding change, overlap change, and projection-algorithm change remain separately receipted.

## Projects touched

- Free Graph
- ALEX.2
- 3rdi
- Dogram
- LOADOUT
- the wider BODY surface rollout

## Threads touched

- None yet.

## Authority / canonical home

Free Graph PR #15 owns the proposed BODY-EMERGENCE mechanism.

ALEX.2 issue #130 owns the temporal provenance research frontier.

This Daily Slice records the moment the distinction became visible. It does not promote a runtime, schema, binding-mode vocabulary, or historical-validity claim into either project.

## Relations

- `pressures` → Free Graph PR #15
- `research-frontier` → ALEX.2 issue #130
- `refines` → `surface != occurrence`
- `preserves` → `retrospective applicability != contemporaneous availability`
- `future-pressure` → multi-axis BODY DELTA

## Working seals

> **BINDING A DECLARATION TO A HISTORICAL CUT CREATES A RECEIPT OF THE BINDING. IT DOES NOT BY ITSELF CREATE A RECEIPT THAT THE DECLARATION EXISTED AT THAT CUT.**

> **KEEP THE SURFACE. KEEP THE CUT. KEEP THE MOMENT THEY WERE JOINED.**

> **LET THE BODY EMERGE WITHOUT MAKING ITS OWN MEMORY RETROACTIVE.**
