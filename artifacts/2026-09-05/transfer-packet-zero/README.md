# Transfer Packet Zero

**Status:** experimental structural specimen.  
**Source:** `slices/2026/09/2026-09-05/new-rocket-step-daughters-home.md`.

Transfer Packet Zero asks one narrow question:

> Can a small portable object preserve enough attributable structure to reconstruct `root -> crossing -> descendant` without becoming the authority that decides what the relation means?

It is intentionally not a Daughter's Home protocol, not a federation protocol, not a five-axis mutation grammar, and not a branch-authenticity engine.

## Packet shape

A `transfer-packet-zero/v0` packet carries:

- one `root` reference;
- one `descendant` with exactly one declared `parent_ref`;
- one `crossing` declaration with attributable participants and optional receipt references;
- a five-bucket **descriptive** delta (`inherited`, `changed`, `added`, `refused`, `unknown`), which is not the proposed five-nary music taxonomy;
- zero or more receipts;
- zero or more carriers;
- an inert boundary: `authority: none`, `promotion: NONE`, `receiver_obligation: none`.

The delta buckets are ordinary bookkeeping verbs. They do not assert that five dimensions are mathematically privileged.

## What the validator may decide

`artifacts/lineage/transfer-packet-zero.js` validates packet structure and preserves typed errors/residuals. It may reject a malformed single-parent packet or an explicit authority escalation.

It may **not** decide:

- whether the descendant is musically authentic;
- whether a declared lineage claim is historically true beyond the references supplied;
- whether the descendant is good, canonical, owned, licensed, or authorized;
- whether a human, agent, tool, receiver, carrier, Storyship voyage, Phonograph receipt, Band Runtime cut, Groove Room, Funkwhale object, or Dogram result has authority outside its own system.

Accordingly, structurally valid packets retain `SEMANTIC_LINEAGE_UNDECIDED` as a residual.

## Hostile fixture pack

`hostile-fixtures.json` exercises:

- ordinary human branch;
- agent-assisted branch;
- unknown participant;
- byte-identical copy;
- lost audio / surviving receipt;
- radical musical delta;
- multiple claimed parents;
- counterfeit/mismatched ancestry;
- attempted authority/promotion/receiver-obligation escalation;
- a gift whose receiver never responds.

Every fixture is synthetic. None claims a real Daughter's Home audio object or real-world ancestry.

## Run

```bash
node scripts/validate-transfer-packet-zero.js path/to/one-transfer-packet.json
node --test tests/transfer-packet-zero.test.js
```

Exit status is `0` for structurally valid packets, `1` for structurally invalid packets, and `2` for CLI/input errors.

## Working seal

```text
THE PACKET MAY PRESERVE THE CLAIM.
THE PACKET MAY NOT BECOME THE JUDGE.
THE RECEIVER OWES IT NOTHING.
```
