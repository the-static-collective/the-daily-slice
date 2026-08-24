# Artifact Capture / Postcard Architecture

**Date:** 2026-08-24  
**Status:** Approved design, pending written-spec review before ingest  
**Repository:** `the-static-collective/the-daily-slice`

## Purpose

Give visual boxes, saved ChatGPT pages, diagrams, and newsletter-ready interactive HTML a durable native home inside The Daily Slice without confusing historical capture with cleaned publication artifact.

The repository already defines `artifacts/` as the home for publication-oriented companions. This design specializes that directory into two durable species.

## Core rule

> **Preserve the historical file exactly first. Derive a portable postcard only when portability is actually true.**

```text
artifact != canonical law
capture  != postcard
postcard != source of truth
derived  != original
```

## Directory layout

```text
artifacts/
  captures/
    YYYY-MM-DD/
      <exact uploaded html files>

  postcards/
    YYYY-MM-DD/
      <standalone newsletter-ready html files>

indexes/
  artifacts.md
```

The first ingest uses `2026-08-24` because that is the date these files were handed into The Daily Slice.

## Artifact kinds

### CAPTURE

An exact historical file preserved as received.

A capture may be a browser-saved ChatGPT page and may reference companion `_files/` assets that are not present. That does **not** make the capture invalid; it means portability is unproven.

Rules:

- preserve bytes/text as received;
- preserve the original filename unless GitHub path safety requires a reversible normalization;
- do not rewrite links, styles, scripts, titles, or ChatGPT metadata inside the capture;
- do not label a capture standalone unless it has been independently verified standalone;
- missing companion resources remain an attributable limitation, not a reason to manufacture completeness.

### POSTCARD

A standalone, portable HTML artifact intended for direct reading, download, or newsletter reuse.

Rules:

- must render without depending on an absent sibling resource directory;
- should preserve the visual claim and the uncertainty posture of its source material;
- must not silently promote speculation, candidate structure, or metaphor into canonical law;
- should include or be index-linked to provenance and project roads where known.

### DERIVED

A postcard created by extracting, cleaning, or rebuilding a useful visual from a historical capture.

Rules:

- the source capture remains unchanged;
- the artifact index records the capture → postcard derivation;
- derivation may simplify presentation but may not erase material uncertainty, refusal, or authority boundaries;
- if cleaning changes the claim rather than merely the presentation, create a new slice instead of silently changing the artifact.

## Artifact index

`indexes/artifacts.md` is the human-browsable ledger for visual/newsletter material.

Each row should carry, where known:

```text
title
date
kind
status
source slice / thread
project roads
capture path
derived postcard path
notes / portability limitations
```

The index is orientation, not authority.

## First ingest set

Preserve all 19 files supplied on 2026-08-24 under `artifacts/captures/2026-08-24/`:

1. `Idea Harvest Compression(1).html`
2. `HANDOFF001.html`
3. `Fix Atmosphere Alpha.html`
4. `eCODE × Cloudflare Control Boundary(1).html`
5. `Design Three Custom Skills.html`
6. `Design Sigil Topologies.html`
7. `Convergence Map Analysis.html`
8. `Consequence - Authority Field(1).html`
9. `braided hard slice.html`
10. `Autodisco - eCODE Lyric Analysis.html`
11. `Architectural Proof Obligations.html`
12. `Analyze Math Paste.html`
13. `Toaster Future Vision.html`
14. `Static Collective — Merge Sweep & Emerging Weave(1).html`
15. `Relational Sigil Model.html`
16. `Recommend Free Graph Repo.html`
17. `Radio slice update.html`
18. `New Idea Sift.html`
19. `Lattice Table Pivot.html`

No automatic postcard extraction is required for first ingest. The goal is durable preservation plus a truthful index.

## Known file-shape distinction

The supplied set contains at least two shapes:

1. full browser-saved ChatGPT HTML documents that can reference sibling asset directories;
2. self-contained visual fragments with inline HTML/CSS/JS.

Examples observed during design review include a full saved ChatGPT page for Idea Harvest Compression and an inline visual fragment for the eCODE × Cloudflare control-boundary artifact.

This distinction justifies the capture/postcard split and prevents false portability claims.

## Naming and path policy

For first ingest, keep filenames human-recognizable. GitHub supports spaces and Unicode paths, so normalization is not required merely for style consistency.

If a later tooling constraint requires normalized names, record the original filename in the artifact index and preserve a reversible mapping.

## Provenance policy

When provenance is known, the index should point outward to the relevant Daily Slice, thread, issue, project repository, or other native owner.

The Daily Slice does not absorb project authority merely by storing or presenting an artifact.

```text
project-owned source
      ↓
Daily Slice capture / postcard
      ↓
public orientation / reuse
```

Forbidden implication:

```text
stored here == canonical there
```

## First-ingest success criteria

The ingest is successful when:

1. all 19 supplied HTML files exist under the dated capture directory;
2. file contents match the supplied files used for ingest;
3. `indexes/artifacts.md` lists all 19 captures;
4. the index does not claim standalone portability for unverified browser captures;
5. the index distinguishes known self-contained fragments from full saved pages where that distinction can be established directly;
6. no project-owned source is rewritten or annexed;
7. no automatic postcard extraction changes or replaces an original capture.

## Failure handling

- If one supplied file cannot be read, do not omit it silently; record the failure and leave the rest of the ingest intact.
- If a filename collides with an existing capture, do not overwrite it silently; preserve both with an explicit reversible suffix and note the collision in the index.
- If a file is too large for the normal repository-content write path, use a Git blob/tree commit path rather than altering the artifact.
- If a capture depends on absent `_files/` assets, keep the capture and mark portability as `DEPENDENCY_MISSING` or equivalent in the index.

## Non-goals

This design does not:

- recover missing browser asset directories;
- sanitize or rewrite historical ChatGPT exports;
- automatically convert every capture into a standalone postcard;
- create a newsletter renderer or website;
- promote visual claims into shared law;
- move project-native documentation into The Daily Slice.

## Future extension

A later bounded slice may add postcard extraction for selected captures. That work should operate as explicit derivation:

```text
CAPTURE
   ↓ attributed extraction / cleanup
DERIVED POSTCARD
```

The original capture remains the historical witness.
