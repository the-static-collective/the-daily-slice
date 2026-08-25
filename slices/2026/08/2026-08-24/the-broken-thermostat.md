# The Broken Thermostat

**Date:** 2026-08-24  
**Status:** OBSERVATION / CANDIDATE ARCHITECTURAL INVARIANT

## What was noticed

It started with a broken thermostat.

A person walks to the wall, sees the familiar interface, and turns the temperature to 72°.

The thermostat accepts the command.

The number changes.

Maybe there is even a little click.

And yet the room stays cold.

The interesting thing is not merely that the thermostat is broken.

It is that the person can still perform almost every visible ritual of control.

```text
desire
  ↓
choose setpoint
  ↓
touch control
  ↓
interface accepts command
  ↓
72°
```

Everything above the wall plate may look normal.

But the actual chain is longer.

```text
person
  ↓
control surface
  ↓
controller
  ↓
relay / communication
  ↓
furnace / actuator
  ↓
heat transfer
  ↓
room
  ↓
sensor
  ↓
feedback
  └──────────────→ controller
```

Break enough of that chain and 72° becomes a statement about the thermostat rather than a fact about the room.

That gives us the first hard distinction:

> **Control surface ≠ causal control.**

And then the stronger one:

> **Authority over an interface does not imply authority over the condition the interface appears to govern.**

## The human mistake

The person does not ordinarily think:

> I possess bounded input authority over one component participating in a conditional feedback loop whose capacity to alter room temperature depends upon power, sensing, communication, actuation, fuel, airflow, thermal transfer, and the state of the surrounding environment.

They think:

> I control the temperature.

Usually that compression is useful.

The whole machine has been built so they *can* think that way.

But the compression hides something important.

Their authority is conditional.

The thermostat works only because a chain beyond the person continues to carry the command into consequence.

So the deeper error is not:

```text
I thought the thermostat worked.
```

It is:

```text
I mistook access to the command surface
for possession of the causal chain.
```

That is a much larger mistake.

## Conditional authority

This sharpens an earlier formulation:

> **Perception of authority over conditions without accurate perception of conditional authority.**

The person does have authority.

They are not imagining the dial.

They may be fully authorized to select the setpoint.

What they do **not** possess is unconditional authority over the resulting physical state.

Their effective authority exists only while several conditions remain true.

```text
authority to request
        +
lawful reach
        +
working carrier
        +
capable actuator
        +
real consequence
        +
observable return
        =
effective control
```

Remove one and the meaning changes.

The command may still exist.

The permission may still exist.

The interface may still accept it.

The intention may still be perfectly clear.

But:

```text
command ≠ consequence
permission ≠ capacity
setpoint ≠ state
interface ≠ reality
```

## The broken thermostat problem

The most deceptive broken thermostat is not the one with a blank screen.

That one declares its failure.

The dangerous one lights up.

It accepts the command.

It says **72°**.

It provides all the familiar gestures by which the human has learned to recognize control.

But the causal chain has broken somewhere outside the visible surface.

Now the interface has become a theater of authority.

Not because anyone necessarily designed it to deceive.

Simply because the representation of control has outlived the control itself.

```text
CONTROL SURFACE
     │
     │ accepts command
     ▼
   "72°"
     │
     X   ← causal break
     │
     ▼
ROOM: 51°
```

The interface can continue telling a coherent story after reality has stopped participating.

## This is a feedback problem

Control theory gives the metaphor unusually solid bones.

A feedback controller does not merely declare a desired state. It compares a measured condition with a setpoint, calculates the difference, acts upon the process, then observes what happened.

In simplified form:

```text
desired condition
       │
       ▼
    setpoint
       │
       ▼
   comparison ◀──────── measured reality
       │                     ▲
       ▼                     │
     error                   │
       │                     │
       ▼                     │
   controller                │
       │                     │
       ▼                     │
    actuator                 │
       │                     │
       ▼                     │
     world ──────────────────┘
```

The return path matters as much as the outgoing command.

Rantanen and Khinast describe the ordinary engineering structure directly: measurement enters a controller; the controller produces an action; an actuator changes the process; feedback lets the system compare the resulting state against the setpoint ([Rantanen & Khinast, 2015](https://doi.org/10.1002/jps.24594)).

The implication is simple:

> **A command without witnessed return is not yet evidence of control.**

It is evidence that a command was issued.

That is a different fact.

## The operator can be inside the illusion too

Human-factors research makes the broken thermostat more interesting.

Eskandari, Dumont, and Wang frame a user as an observer who must receive enough information through an interface to perceive, comprehend, and predict relevant system state. If the interface cannot make the necessary state observable, correct control decisions can fail even when the operator is competent ([Eskandari, Dumont & Wang, 2015](https://doi.org/10.1049/iet-cta.2014.0879)).

Experiments with automated telerobotic systems have found a related failure mode: increasing automation can improve normal performance while reducing operator situation awareness, leaving people significantly worse at detecting and responding when the automation fails ([Kaber, Onal & Endsley, 2000](https://doi.org/10.1002/1520-6564%28200023%2910%3A4%3C409%3A%3AAID-HFM4%3E3.0.CO%3B2-V)).

There is therefore a peculiar seam between:

```text
experience of control
```

and:

```text
demonstrated causal control
```

Those things often coincide.

They do not have to.

A human can issue a meaningful command and experience themselves as acting while lacking sufficient evidence that their action reached the world they intended to alter.

The wall still has buttons.

The buttons still move.

The causal connection may be gone.

## Authority therefore has topology

Authority cannot be understood only as a property attached to the person at the beginning of the chain.

It has to survive the path.

Suppose:

```text
A ──authorizes──▶ B ──commands──▶ C ──acts-on──▶ D
```

Knowing that A had authority over B tells us almost nothing, by itself, about D.

We need to know:

- whether B could lawfully reach C;
- whether C existed and was capable of acting;
- whether the carrier between them remained intact;
- whether the act actually occurred;
- whether the resulting condition can be witnessed.

Effective authority therefore looks less like a crown and more like a traversable graph.

```text
declared authority
      ↓
available interface
      ↓
admissible command
      ↓
lawful reach
      ↓
carrier survives
      ↓
actuator capable
      ↓
consequence occurs
      ↓
witness returns
```

Authority that cannot traverse the chain may remain valid in one sense while being ineffective in another.

That distinction matters.

A king can order a bridge lowered.

If the messenger never leaves the castle, the order may be perfectly authentic.

The bridge remains up.

## The receipt closes the loop

This lands directly on a pattern already developing elsewhere in the Collective:

```text
declare
  ↓
attempt
  ↓
reach
  ↓
consequence
  ↓
witness
  ↓
receipt
```

The receipt is not bureaucracy added after the interesting part.

It is what prevents a successful command from being inferred merely because the command surface behaved correctly.

Without the return witness:

```text
"I told it to happen"
```

can silently become:

```text
"it happened."
```

Those are different statements.

The receipt preserves the difference.

So the stronger invariant may be:

> **No authority claim should silently inherit consequence from its control surface.**

Or, in shorter form:

> **Do not receipt the dial. Receipt the room.**

That one may be worth keeping.

## The political and institutional shape

The thermostat metaphor scales, but it should scale carefully.

A bureaucracy can contain offices empowered to issue instructions while lacking the carriers, resources, jurisdiction, cooperation, or physical capacity required to produce the named condition.

A corporation can have dashboards whose green indicators certify process completion while the underlying process has diverged.

A software system can accept an API request, return `200 OK`, and still fail downstream.

A person can possess legal permission that does not confer physical ability.

A model can produce a statement that looks like an action without having authority to alter the external system being described.

The same structural error appears in each case:

```text
successful interaction with representation
          mistaken for
successful alteration of represented reality
```

This slice does **not** claim those domains are identical.

It claims they can share the same failure geometry.

## A candidate invariant

The architectural version is now fairly small:

```text
INTENT
  ↓
COMMAND
  ↓
INTERFACE
  ↓
REACH
  ↓
ACTUATION
  ↓
CONSEQUENCE
  ↓
WITNESS
  ↓
RECEIPT
```

Every arrow is conditional.

Every transition can fail.

No earlier node automatically proves a later node.

Therefore:

```text
intent      ≠ command
command     ≠ admission
admission   ≠ reach
reach       ≠ actuation
actuation   ≠ intended consequence
consequence ≠ witnessed consequence
claim       ≠ receipt
```

And perhaps most importantly:

```text
control surface ≠ controlled reality
```

## The test

Whenever something appears to possess authority, ask:

**Where is its thermostat?**

Then ask:

**Where is its furnace?**

Then:

**Where is the room?**

And finally:

**Who checked the temperature?**

If those questions cannot be answered, the word *control* may be doing more work than the causal structure can support.

## Epistemic split

**Documented fact:** Feedback-control systems depend on measured state, controller action, actuation, and return information rather than setpoint declaration alone. Human-factors research also documents degraded situation awareness and failure response when operators lose sufficient visibility into automated system state.

**Inference:** The thermostat is a useful model for distinguishing formal or interface-level authority from effective causal authority because it exposes the carriers and conditions that must survive between command and consequence.

**Speculation:** “Broken thermostat” may be useful as durable Static Collective vocabulary for systems in which an actor retains a convincing control surface after meaningful causal reach has been lost.

## Projects / organs touched

- The Daily Slice
- Corpus OS / Causal Accounting
- Lawful Reachability
- Free Graph
- MADDCL0WN
- Haunted Toaster admission / witness architecture
- any future authority or capability model

## Residual questions

- Should **effective authority** be modeled explicitly as authority × reach × carrier × actuation rather than as one property?
- Does every consequential command need a returned witness, or can some domains admit bounded inference?
- How should a system represent **unknown consequence** without collapsing it into success or failure?
- Can a control surface expose the conditions of its own authority instead of merely exposing commands?
- Is “broken thermostat” a special case of a larger **dead control surface** or **orphaned command** pattern?
- When does delayed feedback become functionally indistinguishable from broken feedback?
- What constitutes an adequate witness when the controlled condition is distributed, probabilistic, or only partially observable?

## Authority / canonical home

This slice records a candidate architectural distinction.

It does not establish a universal theory of political, legal, technical, or institutional authority.

Its strongest supported claim is narrower:

> **The ability to issue a command through an accepted interface is not sufficient evidence that the commanded condition was produced.**

Everything beyond that remains available for testing.

## Relations

- `connects` → Causal Accounting by separating command from consequence
- `connects` → Lawful Reachability by making the path between authority and effect explicit
- `connects` → receipts by requiring returned witness rather than inference from command acceptance
- `bears-on` → human/model/tool authority boundaries
- `tests` → whether a claimed controller actually possesses a surviving causal path into the condition it names
- `refuses` → silent promotion from **“command accepted”** to **“reality changed”**

## Pocket version

```text
PERSON:   Make it 72°.
DIAL:     72°. ✓

                    ← most systems stop looking here

FURNACE:  ...
ROOM:     51°.
WITNESS:  51°.

VERDICT:
command accepted
consequence not established
```

> **Do not receipt the dial. Receipt the room.**
