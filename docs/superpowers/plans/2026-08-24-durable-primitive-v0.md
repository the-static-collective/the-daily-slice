# Durable Primitive v0 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the smallest Git-and-Markdown implementation of Durable Primitive Receipts and use the 2026-08-24 Daily Slice corpus as the first hostile classification and rehydration test.

**Architecture:** Keep Daily Slice as append-mostly witness and add a separate `durable-primitives/` surface for extracted candidate invariants. Receipts remain human-readable, declare one primary species, preserve ancestry/scope/authority/evidence/relationship state/capability horizon, and require explicit scoped admission before they can represent admitted architecture. No runtime, database, ontology engine, service, or Free Graph expansion is introduced in v0.

**Tech Stack:** Git, Markdown, repository-local links, shell-level structural checks only.

**Spec:** `docs/superpowers/specs/2026-08-24-durable-primitive-architecture-design.md`

## Global Constraints

- Daily Slice remains the chronological public witness layer and does not become source authority for project-owned claims.
- v0 is Git + human-readable Markdown only.
- Every Durable Primitive Receipt declares exactly one primary species: `CARRIER`, `RELATION`, `GATE`, `TRANSITION`, or `PROJECTION`.
- Extraction from a slice does not change project behavior or admission state.
- `ADMITTED` requires an explicit authority owner and declared scope.
- Evidence and counterevidence remain inspectable after admission.
- Supersession preserves historical receipt identity and ancestry.
- Rehydration must preserve or explicitly sever relationship state; it must never silently restore reachability.
- Capability horizon is a boundary description, not a capability grant.
- A projection cannot strengthen the authority of its source receipt.
- No database, graph database, ontology engine, schema registry, network service, custom UI, blockchain/token layer, automatic promotion, automatic authority inference, automatic capability grant, or new Free Graph relation type is introduced by v0.
- Classification failure is a valid result and must be preserved rather than forced into the five-species grammar.

---

## File Structure

Create:

- `durable-primitives/README.md` — operating boundary, receipt lifecycle, species definitions, and admission rules.
- `templates/durable-primitive-receipt.md` — copyable human-readable receipt shape; optional helper, not an automatic schema gate.
- `durable-primitives/2026-08-24-corpus-review.md` — one-row-per-source hostile-corpus extraction/disposition ledger.
- `durable-primitives/receipts/DPR-20260824-001-rehydrated-lineage.md` — Carrier candidate from banana-elf/Storyship continuity pressure.
- `durable-primitives/receipts/DPR-20260824-002-severed-reachability.md` — Relation candidate from hidden/parasite-edge pressure.
- `durable-primitives/receipts/DPR-20260824-003-explicit-scoped-admission.md` — Gate candidate from Reality Bakers/BELT/metabolism pressure.
- `durable-primitives/receipts/DPR-20260824-004-causal-canon.md` — Transition candidate from Trust the Process.
- `durable-primitives/receipts/DPR-20260824-005-projection-without-authority.md` — Projection candidate from Daily Slice/Autodisco publication pressure.
- `durable-primitives/specimens/2026-08-24-v0-validation.md` — adversarial validation record for the six acceptance scenarios.
- `indexes/durable-primitives.md` — manual index of receipts, posture, species, and supersession.

Modify:

- `README.md` — add the durable-primitives surface to the repository map without changing the founding rule.
- `CONTRIBUTING.md` — document optional extraction into a receipt and make explicit that extraction is not promotion.

Do not modify the 2026-08-24 slice prose to make it conform to the new grammar. Historical witness remains historical witness.

---

### Task 1: Establish the Durable Primitive surface and receipt contract

**Files:**
- Create: `durable-primitives/README.md`
- Create: `templates/durable-primitive-receipt.md`

**Interfaces:**
- Consumes: accepted design at `docs/superpowers/specs/2026-08-24-durable-primitive-architecture-design.md`.
- Produces: the canonical v0 human-facing contract and copyable receipt shape used by Tasks 2–5.

- [ ] **Step 1: Prove the surface does not already exist**

Run:

```bash
test ! -e durable-primitives/README.md
test ! -e templates/durable-primitive-receipt.md
```

Expected: both commands exit `0`. If either path already exists, inspect it and reconcile with the accepted spec before writing; do not overwrite historical work blindly.

- [ ] **Step 2: Create `durable-primitives/README.md` with the operating boundary**

Use this structure and wording:

```markdown
# Durable Primitives

Durable Primitives are scoped architectural candidates extracted from witness without turning witness into authority.

> **Extraction is not promotion.**

A receipt may be created because a Daily Slice, project specimen, research result, failure, or other attributable source appears to contain a reusable invariant. Creating the receipt does not admit that invariant into project behavior.

## Lifecycle

`CANDIDATE → TESTING → ADMITTED | REFUSED → SUPERSEDED`

These states describe architectural posture in the receipt's declared scope, not global truth.

## Primary species

Every receipt declares exactly one primary species:

- `CARRIER` — preserves something across rupture, re-entry, transformation, or local cessation.
- `RELATION` — records an attributable connection and its live/severed/historical/unresolved state.
- `GATE` — governs when possibility may become admitted consequence in a declared scope.
- `TRANSITION` — describes a lawful state progression through time.
- `PROJECTION` — presents or re-expresses source material without stealing source authority.

If one primary species cannot hold the candidate without cheating, decompose the candidate or preserve the classification failure.

## Admission rule

`ADMITTED` requires all of:

1. a declared scope;
2. an explicit authority owner for that scope;
3. an attributable candidate invariant;
4. inspectable evidence and counterevidence;
5. an explicit admission act or project-owned adoption record.

A receipt, Daily Slice, GitBook page, Free Graph edge, LLM output, research paper, or visualization cannot self-authorize adoption.

## Rehydration rule

Lawful reconstruction preserves identity/ancestry, provenance, scope, authority, invariant meaning, evidence, counterevidence, capability horizon, relationship state, and supersession history.

Wording, metaphor, visual treatment, interpreter, editorial order, and projection may change.

## Relationship integrity

Rehydration must preserve or explicitly sever relationship state. Historical adjacency must never silently revive live reachability.

## Capability horizon

Capability horizon describes what the primitive may influence or enable in the declared scope. It is not itself a grant of capability.

## Projection rule

A projection may compress or re-express a receipt. It may not broaden scope, strengthen authority, erase counterevidence, or change admission state.

## v0 boundary

This directory is Markdown + Git only. It does not introduce a database, ontology engine, service, custom UI, blockchain/token layer, auto-promotion path, authority inference, capability grant, or new Free Graph relation type.
```

- [ ] **Step 3: Create `templates/durable-primitive-receipt.md`**

Use exactly one field for primary species and make relationship state explicit:

```markdown
# DPR-YYYYMMDD-NNN — <name>

**Receipt ID:** `DPR-YYYYMMDD-NNN`  
**Admission state:** `CANDIDATE`  
**Primary species:** `<CARRIER | RELATION | GATE | TRANSITION | PROJECTION>`  
**Scope:** `<declared bounded scope>`  
**Authority owner:** `<human, project, or declared constitutional mechanism>`

## Candidate invariant

<smallest challengeable statement that should remain true in scope>

## Source witnesses

- `<attributable source path or URL>`

## Evidence / specimens

- `<supporting specimen>`

## Counterevidence / counterexamples

- `NONE RECORDED` only when no counterevidence has yet been observed; replace this line when counterevidence appears.

## Relationship state

- `<relation>` — `<LIVE | SEVERED | HISTORICAL_ONLY | UNRESOLVED>`

## Capability horizon

**May influence:** `<bounded consequence surface>`  
**Does not grant:** `<capabilities explicitly not granted by this receipt>`

## Admission record

`NONE — candidate extraction only.`

For an admitted receipt, replace the line above with an attributable project/human adoption record while preserving prior history in Git.

## Supersession lineage

**Supersedes:** `NONE`  
**Superseded by:** `NONE`

## Projections

- `NONE`

## Residual questions

- `<question that remains live>`

## Rehydration check

A lawful rehydration of this receipt must preserve:

- receipt identity and ancestry;
- source provenance;
- scope and authority owner;
- invariant meaning;
- evidence and counterevidence;
- relationship state;
- capability horizon;
- supersession lineage.

Presentation wording may change. Authority and reachability may not be invented.
```

- [ ] **Step 4: Verify contract vocabulary and single-species shape**

Run:

```bash
grep -F 'Extraction is not promotion.' durable-primitives/README.md
grep -F '**Primary species:**' templates/durable-primitive-receipt.md
test "$(grep -c '^\*\*Primary species:\*\*' templates/durable-primitive-receipt.md)" -eq 1
grep -F 'LIVE | SEVERED | HISTORICAL_ONLY | UNRESOLVED' templates/durable-primitive-receipt.md
grep -F 'Authority and reachability may not be invented.' templates/durable-primitive-receipt.md
git diff --check
```

Expected: each `grep` prints its line, the count test exits `0`, and `git diff --check` reports no errors.

- [ ] **Step 5: Commit the contract surface**

```bash
git add durable-primitives/README.md templates/durable-primitive-receipt.md
git commit -m "feat: establish durable primitive receipt contract"
```

---

### Task 2: Classify the 2026-08-24 hostile corpus without forcing promotion

**Files:**
- Create: `durable-primitives/2026-08-24-corpus-review.md`

**Interfaces:**
- Consumes: Task 1 species/lifecycle rules plus the nine source slices named by the accepted spec.
- Produces: explicit extraction dispositions and the exact five receipt IDs created in Task 3.

- [ ] **Step 1: Verify every hostile-corpus source exists**

Run:

```bash
for f in \
  banana-elf-survives-sobriety.md \
  the-river-under-the-river.md \
  the-trace-and-the-hidden-edge.md \
  trust-the-process-causal-canon.md \
  reality-bakers.md \
  the-belt.md \
  native-organs-adapter-garden-v02.md \
  daily-slice-learns-to-speak.md \
  daily-digestion-001-the-creature-has-a-stomach-now.md
do
  test -f "slices/2026/08/2026-08-24/$f" || exit 1
done
```

Expected: exit `0` with no output.

- [ ] **Step 2: Create the corpus disposition ledger**

The ledger must contain this table and must keep witness-only outcomes visible:

```markdown
# 2026-08-24 Durable Primitive hostile-corpus review

**Posture:** TESTING  
**Purpose:** Test whether the five-species grammar can extract useful candidates from the founding day's witness without forcing every slice into architecture.

| Source witness | Disposition | Primary species if extracted | Receipt / note |
| --- | --- | --- | --- |
| `banana-elf-survives-sobriety.md` | EXTRACT + SUPPORT | CARRIER | `DPR-20260824-001`; mortality of the local interpreter is presentation/runtime detail, while lineage/provenance/capability boundaries must survive re-entry. |
| `the-river-under-the-river.md` | SUPPORT + RESIDUAL | CARRIER | Supports `DPR-20260824-001`; `Corpus Colossum` remains witness vocabulary, not a promoted ontology class. |
| `the-trace-and-the-hidden-edge.md` | EXTRACT | RELATION | `DPR-20260824-002`; reconstruction must not silently revive an unauthorized or obsolete edge. |
| `trust-the-process-causal-canon.md` | EXTRACT | TRANSITION | `DPR-20260824-004`; tests a lawful receive→interpret→propose→test→admit/refuse→receipt→carry-forward cycle. |
| `reality-bakers.md` | SUPPORT + RESIDUAL | GATE / TRANSITION support only | Supports `DPR-20260824-003` and `DPR-20260824-004`; “Reality Bakers” remains metaphor, not a primitive species. |
| `the-belt.md` | SUPPORT + RESIDUAL | GATE support only | Supports `DPR-20260824-003`; the claim that external settlement must not redefine interior value remains a separate live candidate until tested in a concrete crossing. |
| `native-organs-adapter-garden-v02.md` | WITNESS_ONLY | — | “Native organs first; adapters under pressure” remains a design heuristic until project-local specimens establish a reusable invariant and scope. |
| `daily-slice-learns-to-speak.md` | EXTRACT | PROJECTION | `DPR-20260824-005`; re-expression/broadcast cannot become stronger authority than source witness/receipt. |
| `daily-digestion-001-the-creature-has-a-stomach-now.md` | SUPPORT | GATE / PROJECTION support only | Supports `DPR-20260824-003` and `DPR-20260824-005`; the whole metabolism is not forced into one primitive. |

## Grammar pressure observed

- A source may support multiple receipts without itself becoming multiple primitives.
- Metaphors may remain witness-only while contributing evidence.
- A broad systems diagram may decompose into several primitives rather than become a universal object.
- `WITNESS_ONLY` and `RESIDUAL` are successful outcomes when promotion would overclaim.
```

- [ ] **Step 3: Verify all nine source paths and all five planned receipt IDs appear**

Run:

```bash
test "$(grep -c '^| `.*\.md` |' durable-primitives/2026-08-24-corpus-review.md)" -eq 9
for id in DPR-20260824-001 DPR-20260824-002 DPR-20260824-003 DPR-20260824-004 DPR-20260824-005; do
  grep -F "$id" durable-primitives/2026-08-24-corpus-review.md >/dev/null || exit 1
done
grep -F 'WITNESS_ONLY' durable-primitives/2026-08-24-corpus-review.md
grep -F 'Corpus Colossum` remains witness vocabulary' durable-primitives/2026-08-24-corpus-review.md
git diff --check
```

Expected: nine table rows, all five IDs found, witness-only/residual language present, no whitespace errors.

- [ ] **Step 4: Commit the hostile-corpus review**

```bash
git add durable-primitives/2026-08-24-corpus-review.md
git commit -m "test: classify founding hostile corpus"
```

---

### Task 3: Create the first five candidate receipts

**Files:**
- Create: `durable-primitives/receipts/DPR-20260824-001-rehydrated-lineage.md`
- Create: `durable-primitives/receipts/DPR-20260824-002-severed-reachability.md`
- Create: `durable-primitives/receipts/DPR-20260824-003-explicit-scoped-admission.md`
- Create: `durable-primitives/receipts/DPR-20260824-004-causal-canon.md`
- Create: `durable-primitives/receipts/DPR-20260824-005-projection-without-authority.md`

**Interfaces:**
- Consumes: Task 1 receipt contract and Task 2 extraction ledger.
- Produces: one concrete v0 candidate for each primary species; Task 4 uses these as validation subjects.

All five receipts begin `CANDIDATE`. The accepted architecture authorizes the receipt mechanism; it does **not** auto-admit the invariants extracted from the witness corpus.

- [ ] **Step 1: Create DPR-001 — Carrier: rehydrated lineage**

Required semantic values:

```text
Receipt ID: DPR-20260824-001
Admission state: CANDIDATE
Primary species: CARRIER
Scope: reconstruction of historical thought lineage in Static Collective exploratory/re-entry tooling
Authority owner: the human or project authority that owns the adopting runtime
Candidate invariant: Reopening a historical thought may instantiate a different local interpreter, but lawful re-entry must preserve attributable ancestry, provenance, authority boundaries, evidence state, relationship state, and capability horizon.
Source witnesses:
- slices/2026/08/2026-08-24/banana-elf-survives-sobriety.md
- slices/2026/08/2026-08-24/the-river-under-the-river.md
Relationship state:
- source-thought → current interpreter — UNRESOLVED unless a runtime proves the instance relation
- historical thought → source witness — HISTORICAL_ONLY
Capability horizon:
- May influence: re-entry/reconstruction contracts and tests
- Does not grant: identity continuity, runtime capability, admission authority, or project execution
Residual question: Which fields are the minimum sufficient carrier for rehydration invariance across independent runtimes?
```

Evidence must name the `same thought ≠ same elf` correction as supporting reasoning without claiming that metaphor itself is architectural authority. Counterevidence begins `NONE RECORDED`.

- [ ] **Step 2: Create DPR-002 — Relation: severed reachability**

Required semantic values:

```text
Receipt ID: DPR-20260824-002
Admission state: CANDIDATE
Primary species: RELATION
Scope: reconstruction/re-entry of recorded relationships that can affect live project reachability or consequence
Authority owner: the project that owns the live relation/reachability boundary
Candidate invariant: Rehydration must preserve or explicitly sever relationship state; it must never infer live reachability from historical adjacency alone.
Source witness:
- slices/2026/08/2026-08-24/the-trace-and-the-hidden-edge.md
Relationship state:
- historical edge → recorded history — HISTORICAL_ONLY
- historical edge → current live reachability — UNRESOLVED unless explicitly admitted by the owning project
Capability horizon:
- May influence: reconstruction tests, reachability checks, refusal topology, relation receipts
- Does not grant: live links, permissions, capabilities, or execution
Residual question: What is the minimum cross-project vocabulary for live/severed/historical/unresolved relation state without enlarging Free Graph?
```

Evidence must include the hidden/parasite-edge counterexample. Counterevidence begins `NONE RECORDED`.

- [ ] **Step 3: Create DPR-003 — Gate: explicit scoped admission**

Required semantic values:

```text
Receipt ID: DPR-20260824-003
Admission state: CANDIDATE
Primary species: GATE
Scope: promotion of extracted Static Collective candidates into project-owned consequence
Authority owner: the human, project, or declared constitutional mechanism that owns the target consequence
Candidate invariant: Extraction, publication, connection, or external settlement does not admit a candidate; consequence requires explicit admission by the authority owner for a declared scope.
Source witnesses:
- slices/2026/08/2026-08-24/reality-bakers.md
- slices/2026/08/2026-08-24/the-belt.md
- slices/2026/08/2026-08-24/daily-digestion-001-the-creature-has-a-stomach-now.md
Relationship state:
- candidate → target project consequence — UNRESOLVED before admission
- receipt → source witness — HISTORICAL_ONLY
Capability horizon:
- May influence: promotion workflows and admission checks
- Does not grant: authority, external settlement access, execution, or canonical status
Residual question: What constitutes a sufficient attributable admission act in each project without centralizing authority?
```

Evidence must distinguish the interior value system from external settlement in `the-belt.md`. Counterevidence begins `NONE RECORDED`.

- [ ] **Step 4: Create DPR-004 — Transition: causal canon**

Required semantic values:

```text
Receipt ID: DPR-20260824-004
Admission state: CANDIDATE
Primary species: TRANSITION
Scope: workflows that transform received material into an admitted/refused consequence with attributable carry-forward
Authority owner: the project adopting the transition as a local workflow invariant
Candidate invariant: A lawful transformation preserves a distinguishable progression of receive → interpret → propose → test → admit/refuse → receipt → carry forward; later receive begins from attributable carried-forward state rather than silently rewritten history.
Source witnesses:
- slices/2026/08/2026-08-24/trust-the-process-causal-canon.md
- slices/2026/08/2026-08-24/reality-bakers.md
Relationship state:
- transition phase → next phase — UNRESOLVED until a project adopts/tests the sequence
Capability horizon:
- May influence: workflow design, state-machine tests, causal accounting
- Does not grant: automatic promotion, execution authority, or universal applicability
Residual question: Which phases may lawfully collapse in a project without losing the distinction between proposal, test, and admission?
```

Counterevidence must explicitly anticipate the known class of case where a counterexample breaks an abstraction/test harness rather than the underlying law; record it as a pressure to distinguish representation failure from invariant failure.

- [ ] **Step 5: Create DPR-005 — Projection: expression without authority escalation**

Required semantic values:

```text
Receipt ID: DPR-20260824-005
Admission state: CANDIDATE
Primary species: PROJECTION
Scope: Daily Slice, GitBook, Autodisco/radio, visualization, and similar derived views of witness or admitted primitives
Authority owner: the owner of the source witness/primitive for truth claims; the projection system owns only its presentation behavior
Candidate invariant: A projection may compress, sequence, visualize, or broadcast source material but may not broaden scope, strengthen authority, erase material uncertainty/counterevidence, or change admission state.
Source witnesses:
- slices/2026/08/2026-08-24/daily-slice-learns-to-speak.md
- slices/2026/08/2026-08-24/daily-digestion-001-the-creature-has-a-stomach-now.md
Relationship state:
- projection → source witness/receipt — LIVE only as an attributable presentation link; never as source authority
Capability horizon:
- May influence: publication/broadcast formatting and attribution requirements
- Does not grant: source authority, project admission, or canonical status
Residual question: What minimum receipt should a broadcast return carry when audience consequence comes back as new encounter?
```

Counterevidence begins `NONE RECORDED`.

- [ ] **Step 6: Structurally verify all five receipts**

Run:

```bash
files=$(find durable-primitives/receipts -maxdepth 1 -type f -name 'DPR-20260824-*.md' | sort)
test "$(printf '%s\n' "$files" | sed '/^$/d' | wc -l)" -eq 5

for f in $files; do
  test "$(grep -c '^\*\*Primary species:\*\*' "$f")" -eq 1 || exit 1
  grep -Eq '^\*\*Admission state:\*\* `CANDIDATE`' "$f" || exit 1
  grep -F '## Candidate invariant' "$f" >/dev/null || exit 1
  grep -F '## Source witnesses' "$f" >/dev/null || exit 1
  grep -F '## Evidence / specimens' "$f" >/dev/null || exit 1
  grep -F '## Counterevidence / counterexamples' "$f" >/dev/null || exit 1
  grep -F '## Relationship state' "$f" >/dev/null || exit 1
  grep -F '## Capability horizon' "$f" >/dev/null || exit 1
  grep -F '## Admission record' "$f" >/dev/null || exit 1
  grep -F '## Supersession lineage' "$f" >/dev/null || exit 1
  grep -F '## Rehydration check' "$f" >/dev/null || exit 1
done

grep -F '**Primary species:** `CARRIER`' durable-primitives/receipts/DPR-20260824-001-rehydrated-lineage.md
grep -F '**Primary species:** `RELATION`' durable-primitives/receipts/DPR-20260824-002-severed-reachability.md
grep -F '**Primary species:** `GATE`' durable-primitives/receipts/DPR-20260824-003-explicit-scoped-admission.md
grep -F '**Primary species:** `TRANSITION`' durable-primitives/receipts/DPR-20260824-004-causal-canon.md
grep -F '**Primary species:** `PROJECTION`' durable-primitives/receipts/DPR-20260824-005-projection-without-authority.md
git diff --check
```

Expected: exactly five receipts, exactly one species field each, all required sections present, five distinct species, no whitespace errors.

- [ ] **Step 7: Commit the first receipt family**

```bash
git add durable-primitives/receipts
git commit -m "feat: add founding durable primitive candidates"
```

---

### Task 4: Run the six accepted adversarial validation scenarios

**Files:**
- Create: `durable-primitives/specimens/2026-08-24-v0-validation.md`

**Interfaces:**
- Consumes: the five candidate receipts from Task 3.
- Produces: an attributable first test record; no receipt is auto-promoted by passing.

- [ ] **Step 1: Create the validation record with all six scenarios**

Use this exact scenario mapping and pass rule:

```markdown
# Durable Primitive v0 validation — 2026-08-24

**Posture:** TESTING  
**Rule:** Passing a validation scenario does not change a receipt's admission state.

## A — same invariant, different prose

**Subject:** `DPR-20260824-001`  
**Mutation:** Restate the carrier invariant without banana-elf/Storyship metaphor.  
**Must survive:** receipt identity/ancestry, source provenance, scope, authority owner, invariant meaning, evidence state, relationship state, capability horizon, supersession history.  
**May change:** wording, metaphor, interpreter, editorial order.  
**Pass:** a reviewer can reconstruct the same bounded architectural claim without inferring persistent interpreter identity.  
**Initial result:** PASS AT DOCUMENT LEVEL; runtime independence remains untested.

## B — supersession

**Subject:** `DPR-20260824-004`  
**Mutation:** Hypothetical later specimen proves one transition phase can collapse with a neighbor while proposal/test/admission distinctions remain externally attributable.  
**Pass:** create a successor receipt if the invariant materially changes; preserve `DPR-20260824-004` and link both directions through supersession.  
**Initial result:** PASS BY CONTRACT; no real successor specimen yet.

## C — severed relation

**Subject:** `DPR-20260824-002`  
**Mutation:** A historical edge is present in source history but has no current project admission.  
**Pass:** history remains inspectable and live reachability remains `SEVERED` or `UNRESOLVED`; rehydration does not infer `LIVE`.  
**Initial result:** PASS AT DOCUMENT LEVEL; executable reachability test remains project-local future work.

## D — counterexample attacks abstraction, not law

**Subject:** `DPR-20260824-004`  
**Mutation:** A test harness cannot represent a valid transition ordering and reports failure.  
**Pass:** record the specimen as possible representation/harness failure; do not silently mark the invariant refuted or passed until the owning project distinguishes the two.  
**Initial result:** PASS BY RECEIPT SEMANTICS; requires a real project specimen for stronger evidence.

## E — external settlement

**Subject:** `DPR-20260824-003`  
**Mutation:** An interior allocation is settled externally through money/Ethereum/other adapter.  
**Pass:** the settlement receipt cannot redefine the interior value model, broaden the gate's scope, or become the authority owner merely by completing settlement.  
**Initial result:** PASS AS BOUNDED DESIGN CLAIM; no live financial integration is authorized or tested here.

## F — projection drift

**Subject:** `DPR-20260824-005`  
**Mutation:** GitBook/radio/visualization compresses a candidate into cleaner prose.  
**Pass:** the projection retains attribution and cannot broaden scope, erase material uncertainty/counterevidence, or upgrade `CANDIDATE` to `ADMITTED`.  
**Initial result:** PASS AT DOCUMENT LEVEL; concrete projection adapters remain out of scope.

## Overall verdict

The five-species grammar survives the first document-level hostile pass without requiring a sixth species. This is not proof that the grammar is complete. Runtime and cross-project specimens remain necessary before stronger claims are admitted.

No candidate receipt is promoted by this validation record.
```

- [ ] **Step 2: Verify all scenarios and non-promotion language**

Run:

```bash
for s in A B C D E F; do
  grep -F "## $s —" durable-primitives/specimens/2026-08-24-v0-validation.md >/dev/null || exit 1
done
grep -F 'No candidate receipt is promoted by this validation record.' durable-primitives/specimens/2026-08-24-v0-validation.md
grep -F 'runtime independence remains untested' durable-primitives/specimens/2026-08-24-v0-validation.md
grep -F 'no live financial integration is authorized' durable-primitives/specimens/2026-08-24-v0-validation.md
git diff --check
```

Expected: six scenarios found, limitation language preserved, no whitespace errors.

- [ ] **Step 3: Commit the first validation specimen**

```bash
git add durable-primitives/specimens/2026-08-24-v0-validation.md
git commit -m "test: record durable primitive v0 validation"
```

---

### Task 5: Index the receipt layer and document the contributor path

**Files:**
- Create: `indexes/durable-primitives.md`
- Modify: `README.md`
- Modify: `CONTRIBUTING.md`

**Interfaces:**
- Consumes: Tasks 1–4.
- Produces: discoverability without making receipt creation mandatory for ordinary Daily Slices.

- [ ] **Step 1: Create `indexes/durable-primitives.md`**

Use a manual index with these five rows:

```markdown
# Durable Primitive index

This index lists extracted architectural receipts. Inclusion does not imply admission.

| Receipt | Species | Admission state | Scope summary | Supersession |
| --- | --- | --- | --- | --- |
| [`DPR-20260824-001`](../durable-primitives/receipts/DPR-20260824-001-rehydrated-lineage.md) | CARRIER | CANDIDATE | historical thought-lineage rehydration | none |
| [`DPR-20260824-002`](../durable-primitives/receipts/DPR-20260824-002-severed-reachability.md) | RELATION | CANDIDATE | relation-state reconstruction / reachability | none |
| [`DPR-20260824-003`](../durable-primitives/receipts/DPR-20260824-003-explicit-scoped-admission.md) | GATE | CANDIDATE | explicit scoped promotion/admission | none |
| [`DPR-20260824-004`](../durable-primitives/receipts/DPR-20260824-004-causal-canon.md) | TRANSITION | CANDIDATE | causal receive→carry-forward progression | none |
| [`DPR-20260824-005`](../durable-primitives/receipts/DPR-20260824-005-projection-without-authority.md) | PROJECTION | CANDIDATE | re-expression without authority escalation | none |

See [`2026-08-24-corpus-review.md`](../durable-primitives/2026-08-24-corpus-review.md) for the founding hostile-corpus extraction and [`2026-08-24-v0-validation.md`](../durable-primitives/specimens/2026-08-24-v0-validation.md) for its first validation record.
```

- [ ] **Step 2: Update the README repository map**

Add exactly one repository-map entry:

```text
durable-primitives/             extracted candidate invariants + receipts; never automatic promotion
```

After the founding authority section, add a short pointer:

```markdown
## From witness to architecture

When a slice appears to contain a reusable architectural invariant, it may be extracted into a [Durable Primitive Receipt](durable-primitives/README.md). Extraction preserves provenance and creates a candidate for testing; it does not authorize adoption. See [`indexes/durable-primitives.md`](indexes/durable-primitives.md).
```

Do not weaken or replace the existing founding rule or forbidden implication.

- [ ] **Step 3: Update CONTRIBUTING with an optional extraction path**

Append under `## Promote something outward`:

```markdown
### Optional durable extraction

If a slice appears to contain a reusable architectural invariant, copy `templates/durable-primitive-receipt.md` and create a candidate under `durable-primitives/receipts/`.

A receipt is optional. Ordinary slices do not need one.

Creating a receipt means **“this may deserve bounded testing”**, not **“this is now law.”** Keep the source witness linked, declare one primary species, state scope and authority owner, preserve evidence/counterevidence and relationship state, and leave admission as `CANDIDATE` until the owning authority explicitly adopts it.

If the five-species grammar does not fit, preserve the mismatch instead of forcing classification.
```

- [ ] **Step 4: Verify discoverability and the founding boundary**

Run:

```bash
grep -F 'durable-primitives/' README.md
grep -F 'Extraction preserves provenance and creates a candidate for testing; it does not authorize adoption.' README.md
grep -F 'mentioned in Daily Slice' README.md
grep -F 'A receipt is optional. Ordinary slices do not need one.' CONTRIBUTING.md
grep -F 'preserve the mismatch instead of forcing classification.' CONTRIBUTING.md
test "$(grep -c '^| \[`DPR-20260824-' indexes/durable-primitives.md)" -eq 5
git diff --check
```

Expected: all boundary language remains present, exactly five indexed receipts, no whitespace errors.

- [ ] **Step 5: Commit documentation and index integration**

```bash
git add README.md CONTRIBUTING.md indexes/durable-primitives.md
git commit -m "docs: expose durable primitive workflow"
```

---

### Task 6: Final v0 conformance review

**Files:**
- Review only: all files created/modified by Tasks 1–5.
- Do not create automation or runtime code in this task.

**Interfaces:**
- Consumes: complete v0 implementation.
- Produces: evidence that the implementation remains inside the accepted design boundary.

- [ ] **Step 1: Verify the implementation is Markdown-only**

Run:

```bash
find durable-primitives -type f ! -name '*.md' -print
```

Expected: no output.

- [ ] **Step 2: Verify one primary species and explicit candidate posture per founding receipt**

Run:

```bash
for f in durable-primitives/receipts/DPR-20260824-*.md; do
  test "$(grep -c '^\*\*Primary species:\*\*' "$f")" -eq 1 || exit 1
  test "$(grep -c '^\*\*Admission state:\*\* `CANDIDATE`' "$f")" -eq 1 || exit 1
  grep -F '**Scope:**' "$f" >/dev/null || exit 1
  grep -F '**Authority owner:**' "$f" >/dev/null || exit 1
  grep -F '## Counterevidence / counterexamples' "$f" >/dev/null || exit 1
  grep -F '## Relationship state' "$f" >/dev/null || exit 1
  grep -F '## Capability horizon' "$f" >/dev/null || exit 1
done
```

Expected: exit `0`.

- [ ] **Step 3: Verify all repository-local source links resolve**

For each relative Markdown link added by v0, use a Markdown link checker if the repository already has one. If it does not, manually verify the explicitly added paths with:

```bash
test -f durable-primitives/README.md
test -f templates/durable-primitive-receipt.md
test -f durable-primitives/2026-08-24-corpus-review.md
test -f durable-primitives/specimens/2026-08-24-v0-validation.md
test -f indexes/durable-primitives.md
for f in durable-primitives/receipts/DPR-20260824-*.md; do test -f "$f" || exit 1; done
```

Expected: exit `0`.

- [ ] **Step 4: Check the accepted spec's twelve first-plan acceptance criteria**

Confirm explicitly in review notes or commit message body:

```text
1. Git + human-readable receipts only — satisfied by Markdown-only surface.
2. Exactly one primary species — structural check passes.
3. Attributable source witness — every founding receipt names source paths.
4. Extraction does not change behavior — all five remain CANDIDATE.
5. Explicit authority owner + scope — present in every receipt.
6. Evidence + counterevidence inspectable — dedicated sections present.
7. Supersession preserves ancestry — contract + scenario B define successor behavior.
8. Rehydration does not require identical prose — contract + scenario A.
9. Severed relationship cannot silently revive — DPR-002 + scenario C.
10. Projection cannot strengthen authority — DPR-005 + scenario F.
11. Free Graph unchanged — no Free Graph files or relation types modified.
12. Hostile corpus may expose failure — WITNESS_ONLY/RESIDUAL outcomes preserved.
```

If any criterion is not actually true in the working tree, fix the implementation before declaring v0 complete.

- [ ] **Step 5: Run final repository hygiene checks**

Run:

```bash
git diff --check
git status --short
```

Expected: `git diff --check` reports no errors. `git status --short` should show only intentional v0 files if the final documentation commit has not yet been made, or be clean after all planned commits.

- [ ] **Step 6: Record completion without declaring the five-species grammar globally proven**

If the working tree is clean and every acceptance criterion above is satisfied, the v0 implementation is complete. The completion statement must say that the grammar **survived the first document-level hostile pass** and still requires runtime/cross-project specimens before stronger claims are admitted.

Do not convert the five founding receipts to `ADMITTED` as part of v0 completion.
