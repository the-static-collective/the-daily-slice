# SAME INGREDIENTS /nul SAME RECIPE

**Date:** 2026-09-23  
**Status:** CANDIDATE

## What was noticed

During a conversation about the Bible as a **provenance knot** and The Static Collective's distinct YouTube, Bandcamp, and Auto Disco v20 editorial canons, the artist supplied a compact corrective:

> **same ingredients /nul same recipe**

The spelling `/nul` is preserved as the artist's inscription. Here it operates as an informal **non-equivalence / inference-blocking mark**: having the same ingredients does *not* establish having the same recipe. It is not being asserted as a formal null operator, mathematical identity, or newly adopted programming syntax.

This corrects a tempting collapse in the provenance-knot model. Identifying shared source material is only the *beginning* of the comparison.

## Three independently receiptable layers

```text
INGREDIENTS   what entered: source text, track, audio master, voices, stems, ideas
RECIPE        how selected, ordered, edited, arranged, attributed, timed, combined
OCCURRENCE    this particular performance, upload, edition, broadcast, or encounter
```

[
oxed{	ext{WHAT ENTERED}
eq	ext{HOW IT WAS COMPOSED}
eq	ext{WHAT ACTUALLY HAPPENED}}
]

These are different **questions**, not a universal claim that their values are always unequal. They can coincide in a specimen. They must not be *assumed equivalent* merely because one layer matches.

For instance, two track lists may have exactly the same set of recordings but different track order. Conversely, two performances can follow the same score and still be distinct occurrences, with different dates, performers, acoustics, or audiences.

This also names an important fourth layer: **the receiver's available context**. Two listeners may hear bit-identical audio with different preceding tracks or prior memories. The source remains the same while the encounter can differ.

## The Auto Disco specimen

The artist reports that the YouTube and Bandcamp presentations differ in **order, composition, and attribution**, and names Auto Disco v20 as a further distinct curatorial world. These differences are an artist's report at this cut, not a completed item-by-item external metadata audit.

A first honest comparison must independently receipt, for each surface:

| Layer | Minimum field |
| --- | --- |
| Ingredient | exact source/work candidate ID, provider item locator, and media identity when available |
| Recipe | album, playlist, program, order, edits, neighboring pieces, arrangement, and credit **claims by role and source** |
| Occurrence | particular upload, publication revision, performance, or broadcast ID; event time distinguished from observation time |
| Receiver | what this listener, viewer, or bounded DJ was actually permitted to know at this encounter |

The same title is insufficient to conclude that two items are the same recording. The same recording is insufficient to conclude that two ordered releases are the same edition. The same edition is insufficient to conclude that two people underwent the same encounter.

**Specific guardrail:** a platform's uploader, a recording's performer, a composition's writer, an arranger, a curator, and an AI radio DJ are distinct attribution roles. Reordering material does not transfer the original author's credit to the curator; curating can nonetheless have its *own* attributable creative history.

Auto Disco v20's [First-Listen Radio implementation marker](https://github.com/the-static-collective/The-AutodiscoV.20.-question-marks-/blob/main/FIRST-LISTEN-RADIO.md) points to the separate [First-Listen Radio canon](https://github.com/the-static-collective/the-autodisco/blob/main/canon/FIRST-LISTEN-RADIO.md): **the station remembers; the DJs arrive**. That is an especially clear receiver-context control. A first-listen DJ must not silently inherit the station's catalog memory even when the station programs a returning track.

## The Bible crossing

Luke 4's reception of Isaiah gives a related but **not identical** example:

- an earlier source-text tradition supplies material;
- Luke's written account composes a narrated reading and declaration for its own audience;
- later translations and paraphrases make further editorial/linguistic choices;
- a modern song adaptation changes stress, timing, performance, and its audience's encounter.

A modern musical setting does not retroactively become an ancient witness, and sharing scriptural wording does not automatically establish which printed translation or original-language edition the musician used.

The analogy is about **typed transmission and reception**, not an equation between biblical canon formation and a streaming platform's catalog or a claim about scriptural truth.

The independent research specimen is [National Treasure: PROVENANCE-KNOT-001](https://github.com/the-static-collective/national-treasure/pull/79); it leaves specific cross-platform song matches **held** until actual item or audio/master evidence is established.

## The minimum counterexample

Freeze a two-recording inventory:

[
I={A,B}.
]

Then declare two edition recipes:

[
R_1=(A,B),qquad R_2=(B,A).
]

As multisets of ingredients, they agree:

[
operatorname{bag}(R_1)=operatorname{bag}(R_2)=I.
]

As ordered sequences, they do not, provided (A) and (B) are distinguishable:

[
R_1
eq R_2.
]

If a listener hears a continuous program, the transition (Aightarrow B) is also not the same ordered transition as (Bightarrow A). This demonstrates a compositional difference **without proving** that it changed any particular listener's experience. That effect would require its own encounter evidence.

A second counterexample keeps the recipe fixed and varies the occurrence:

[
R_1=R_2,qquad O_1
eq O_2
]

for two performances of the same score. The recipe's sameness does not erase the performances' separate time, place, attribution, or witness history.

## Hostile controls

- **Identical ingredient multiset, different recipe:** preserve ordered incidence and transformations instead of storing only a set or count.
- **Identical recipe, different event:** preserve occurrence IDs and source-specific witness receipts.
- **Title collision / different master:** refuse work or recording identity without a positive bridge.
- **Different credit statements:** preserve source-attributed, role-specific claims without choosing one solely by platform order or silently copying an attribution.
- **Identical audio, different listening window:** do not attribute a change of listener interpretation to changed audio bytes.
- **Unverified historical descent:** resemblance of an ancient passage and a modern lyric is not automatic proof of every proposed transmission edge.
- **No meaningful recipe delta:** when sequences, transformations, attributions and declared contexts match, record a null compositional difference rather than manufacturing novelty.

## Today's seal

[
oxed{	ext{SAME INGREDIENTS};/nul;	ext{SAME RECIPE}}
]

**The ingredients can survive the crossing. The recipe can change. The new encounter is its own event.**

## Source roads

- 2026-09-23 conversation: the artist's exact phrase “same ingredients /nul same recipe” following the Bible / Auto Disco provenance-knot inquiry.
- [PREVIOUSLY UNSEEN OR MEASURED](./previously-unseen-or-measured.md) — a prior slice about noticing and receipting a distinction before forcing its meaning.
- [National Treasure's PROVENANCE-KNOT-001 draft](https://github.com/the-static-collective/national-treasure/pull/79) — a typed Luke 4 × YouTube/Bandcamp/Auto Disco research specimen.
- [Static Collective Radio — First-Listen Canon Slice](https://github.com/the-static-collective/the-autodisco/blob/main/canon/FIRST-LISTEN-RADIO.md) — the station/first-listen receiver memory boundary.
- [The Daily Slice learns to speak](../../08/2026-08-24/daily-slice-learns-to-speak.md) — the prior proposed Daily Slice → Auto Disco → broadcast → new encounter loop.

## Epistemic split

**Documented fact:** The artist made the quoted distinction in this conversation and reports differences across their publishing surfaces. The cited repositories hold the first-listen and research contracts described above.  
**Inference:** Inventory identity alone cannot entail ordered recipe identity or occurrence identity; those dimensions need separate source-bound receipts.  
**Speculation:** A compositional-delta ledger comparing independently captured YouTube, Bandcamp, and Auto Disco cuts could reveal how encounter context changes the ways a common song is heard, once actual item matches and listening evidence are available.

## Projects touched

- The Daily Slice (historical witness)
- National Treasure (research/provenance knot)
- The Autodiscography / Static Collective Radio
- Auto Disco v20
- Dogram / MEMENTO (possible future modeling, **no adoption implied**)

## Residual questions

- What is the smallest song-and-two-edition specimen with a verified common audio master?
- Which edit, ordering, credit, or adjacent-track difference actually changes a later receiver's observation?
- When a curator changes an arrangement, which additional creative claims become independently attributable without rewriting source authorship?
- Can we find a clear **null**: equal ingredients, equal declared recipe, different occurrence but no demonstrated change of reception?

## Authority / canonical home

Only this dated Daily Slice witness is created here. National Treasure's #79 research remains a separate draft. YouTube, Bandcamp and Auto Disco metadata and source-project canon are not revised by this slice.

## Relations

- `deepens` → [PREVIOUSLY UNSEEN OR MEASURED](./previously-unseen-or-measured.md)
- `tests` → [PROVENANCE-KNOT-001](https://github.com/the-static-collective/national-treasure/pull/79)
- `bears-on` → [First-Listen Radio canon](https://github.com/the-static-collective/the-autodisco/blob/main/canon/FIRST-LISTEN-RADIO.md)
