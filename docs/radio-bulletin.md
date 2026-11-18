# Export a Daily Slice bulletin for HUMKIN

The pilot copies an explicitly selected slice's posture and provenance into a private handoff. It reads the exact committed Git blob. The script text is written or reviewed by an editor. Use source-owner-approved material, safe credit, and plain single-line copy. Keep selections, reviews and results outside both checkouts and all public web roots.

Create a UTF-8 selection file with these fields. This example points to a historical candidate slice and supplies sample host copy for local testing.

```json
{
  "revision": "23c3d4bf7e4febb89919a3d54b6e8aaf3a764120",
  "path": "slices/2026/09/2026-09-17/aperture-hold-the-meanings-open.md",
  "credit": "The Daily Slice",
  "title": "Aperture",
  "script": "A Daily Slice entry proposes keeping several possible readings of an ambiguous phrase open before choosing one."
}
```

```sh
node scripts/radio-bulletin.cjs export /private/selection.json > /private/candidate.json
node --test tests/radio-bulletin.test.cjs
```

Use Node.js 20+ and Git. Fetch the selected commit if your checkout is shallow. Transfer the candidate as exact UTF-8 bytes. For the separate HUMKIN review and preview, see `docs/STATIC-COLLECTIVE-CROSSOVER.md` in HUMKIN. The preview defaults off. Send the result back privately and check its source and digests with the original export.

```sh
node scripts/radio-bulletin.cjs verify-return /private/candidate.json /private/result.json > /private/receipt.json
```

The output can be retained locally as HUMKIN-origin evidence of a private preview. The tool neither edits slice history nor publishes a new slice. The receipt verifies consistency with the transferred files. Use a trusted handoff to establish who generated them. Public use or a change of destination requires its own review.
