# Contribution-Backed History

**Date:** 2026-09-16  
**Status:** Daily Slice / design seed / non-canonical  
**Intent:** Incentivize creative participation without collapsing contribution into price, authority, or human worth.

## Seed

A contribution can leave behind more than a commit.

It can leave an attributable, semi-durable marker that says:

> This work happened. It changed this shared system from this exact parent state to this exact descendant state. Here is how it was verified. Here is what later history did with it.

Call the marker a **Workmark**.

A Workmark is not initially money.

It is not a universal reputation score.

It is not proof that the contribution was wise, beautiful, canonical, or permanently valuable.

It is a durable historical claim that a bounded contribution occurred and passed whatever explicit gates its owner required at the time.

The motivating question is economic:

> Can attributable creative contribution become a form of historical backing for optional future claims without turning the contributor into a score and without forcing the work itself to become currency?

## Compression

```text
contribution
  -> attributable delta
  -> verification
  -> accepted owner-local history
  -> Workmark
  -> later survival / reuse / repair / supersession / challenge
  -> richer contribution history
  -> optional economic interpretation
```

Core law:

> **CONTRIBUTION CREATES EVIDENCE OF VALUE. COMMUNITIES DECIDE WHAT CLAIMS THAT EVIDENCE MAY SUPPORT.**

And:

> **HISTORY MAY BACK A CLAIM WITHOUT HISTORY BECOMING A PRICE.**

## Why this exists

The immediate purpose is not financial engineering.

The purpose is to create a reason for people to participate creatively in a shared system while preserving a truthful record of what they actually added.

A healthy incentive system should notice more than raw output count.

It should be able to distinguish, for example:

- a tiny repair that quietly survives for years;
- an ambitious experiment that fails but teaches the next generation something important;
- a review that prevents a destructive merge;
- a refactor that preserves semantics while making later work possible;
- a creative artifact that becomes a seed for later work;
- a contribution that is merged and immediately reverted;
- a contribution that becomes infrastructural ancestry for many descendants.

These are all forms of participation, but they are not identical.

## Workmark

A Workmark is a provenance object for a contribution.

Candidate fields:

```text
workmark_id
contributor_ref
owner_ref
contribution_ref
parent_cut
resulting_cut
delta_digest
formation_receipt
verification_refs[]
acceptance_ref
created_at
status
history_refs[]
```

The exact schema is intentionally unresolved.

The important distinction is semantic:

```text
WORKMARK != REWARD
WORKMARK != CURRENCY
WORKMARK != AUTHORITY
WORKMARK != HUMAN WORTH
```

A Workmark says that a contribution entered attributable history.

It does not decide what anyone owes the contributor.

## Semi-durable value

The marker may persist while its interpreted significance changes.

Possible lifecycle language:

```text
PROVISIONAL
PROVEN
CARRIED
ROOTED
SUPERSEDED
CHALLENGED
RETIRED
```

These are historical dispositions, not rankings.

Example:

```text
WM-0042
  born: PROVEN
  later: CARRIED
  later: ROOTED
```

The contribution was not retroactively made better in the past.

New descendants simply produced new evidence about its later role.

This permits a useful asymmetry:

> The future may strengthen our evidence that a contribution mattered without rewriting what was known when it was made.

## xWM — executable Workmark

An optional executable form may carry or reference bounded verification logic.

```text
xWM = Workmark + replayable verification hooks
```

An xWM might be able to inspect:

- whether its ancestry is still present;
- whether its original tests still pass;
- whether descendants explicitly depend on it;
- whether its exact code survived;
- whether its semantic role survived a refactor;
- whether it was superseded or reverted;
- whether later evidence challenged its original assumptions.

The xWM does not grade itself.

It emits evidence.

```text
SELF-INSPECTION != SELF-VALUATION
```

## Proof of useful retained work

This idea is a play on proof-of-work mining.

Classic proof of work demonstrates expenditure.

This candidate substrate instead asks whether a contribution produced a useful retained delta.

```text
attention
+ craft
+ attributable change
+ verification
+ survival through history
        -> contribution evidence
```

The best current compression is:

> **Work mines the marker. Time assays the ore.**

That does not imply that only long-lived work matters. A failed experiment can remain extremely valuable as negative knowledge, a discriminator, or a preserved dead end.

The system therefore must not equate survival with worth.

```text
SURVIVAL != VALUE
REVERSION != WORTHLESSNESS
POPULARITY != UTILITY
USE != ENDORSEMENT
```

## Optional economic layer

A Workmark may later become one input to an economic arrangement.

The marker itself remains historical evidence.

A separate layer may choose to recognize that evidence for bounded purposes such as:

- contributor revenue sharing;
- bounties;
- patronage distribution;
- reciprocal labor credit;
- project-specific governance eligibility;
- stewardship credentials;
- access to contributor pools;
- cooperative surplus allocation;
- grants for continued maintenance;
- retrospective rewards.

The economic interpretation must name its own rules.

```text
WORKMARK = historical evidence
CREDIT = interpretation of that evidence
CLAIM = optional economic instrument
PRICE = separate judgment
```

No economic layer inherits truth merely because it consumes Workmarks.

## No universal social score

This architecture should resist a global scalar score for a person.

Do not reduce:

```text
person -> 873
```

Prefer a graph of attributable relations:

```text
participant
  -> contributed to X
  -> repaired Y
  -> reviewed Z
  -> maintained A
  -> created experiment B
  -> descendants depend on C
  -> dispute D remains unresolved
```

A project may derive one contextual view.

Another project may derive another.

A third may ignore the substrate entirely.

```text
ONE CONTEXT != ALL CONTEXTS
REPUTATION != IDENTITY
REPUTATION != AUTHORITY
REPUTATION != HUMAN WORTH
```

Participation in reputation aggregation should remain optional wherever technically possible.

## Creative participation is the target

The purpose of this seed is explicitly cultural as much as technical.

A good system should make it more attractive to:

- make something weird;
- repair something neglected;
- document an obscure edge;
- review another person's work carefully;
- preserve a failed experiment;
- contribute music, writing, visuals, code, research, tests, tooling, translation, explanation, or maintenance;
- create a useful branch that another person later carries somewhere unexpected.

If the substrate rewards only merged code, it has already failed.

The relevant primitive is broader:

> **Attributable contribution to a shared becoming.**

Code is one specimen.

## Adversarial pressure

Any implementation should assume people will optimize whatever metric becomes legible.

Hostile cases include:

- splitting trivial work into many contributions;
- self-review loops;
- circular dependency farms;
- artificial downstream references;
- preserving obsolete code only to maintain status;
- contribution laundering through alternate identities;
- popularity masquerading as usefulness;
- reviewer cartels;
- economic layers quietly converting contextual reputation into universal access control;
- old Workmarks becoming hereditary status objects detached from present contribution.

Therefore:

```text
COUNT != VALUE
MERGE != VALUE
DESCENDANT COUNT != VALUE
SELF-ATTESTATION != EXTERNAL VERIFICATION
HISTORY != ENTITLEMENT
```

The contributor should not be able to unilaterally mint the interpreted value of their own contribution.

They may produce the work and its evidence.

Other bounded processes may recognize, challenge, carry, or ignore it.

## Relation to STATIC-NODE-001

The always-in Static Node creates a natural experimental environment.

A node that continually builds candidate children can generate contribution ancestry without inventing a token economy.

```text
Parent N
  -> candidate child
  -> bounded delta
  -> tests / pressure
  -> accepted or held
  -> Workmark emitted
  -> later descendants provide additional evidence
```

The first specimen does not need exchange value.

It only needs to prove that an attributable creative contribution can receive a persistent marker whose history remains inspectable across descendant generations.

## First falsifiable specimen

`WORKMARK-001`

Take one bounded contribution to one Static Collective repository and produce:

1. an exact parent identity;
2. an exact resulting identity;
3. a deterministic delta digest;
4. attributable contributor identity or pseudonymous contributor reference;
5. explicit verification receipts;
6. explicit owner-local acceptance / hold / rejection disposition;
7. a Workmark object if and only if the contribution crosses the declared historical-entry gate;
8. one later follow-up event that updates the Workmark's history without rewriting the original record.

No currency.

No blockchain requirement.

No exchange rate.

No universal reputation score.

No governance authority.

No automatic reward.

Just a durable proof that the contribution entered history and that later history can speak about it without altering its birth record.

## Questions left deliberately open

- Is a Workmark best represented in Git, a content-addressed store, Corpus OS, or a dedicated ledger?
- What counts as the historical-entry gate for non-code creative work?
- How should collaborative contributions divide or share attribution without forcing false precision?
- Can anonymous or pseudonymous contribution remain useful without collapsing anti-gaming protections?
- What later evidence should be mechanically derivable versus explicitly attested?
- How do we represent contribution that becomes valuable precisely because it was rejected?
- Can economic interpretations remain forkable and plural rather than converging into one dominant score?
- How should a contributor revoke identity linkage while leaving the historical contribution intact?

## Seal

> **Work mines the marker. Time assays the ore.**

> **Contribution creates evidence of value. Communities decide what claims that evidence may support.**

> **History may back a claim without history becoming a price.**

The intended destination is not a machine that grades people.

It is a shared world that gets better at remembering who helped make it possible—and can choose to reward that participation without pretending that the reward defines the person.
