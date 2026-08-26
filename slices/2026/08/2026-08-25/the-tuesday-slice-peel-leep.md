# THE TUESDAY SLICE — PEEL / LEEP

**Date:** 2026-08-25  
**Status:** CANDIDATE — exact mathematics, documented history, inference, and speculation are kept visibly separate

> **The surface is not the formation history. But sometimes the surface can carry a receipt for how it became.**

This slice began with a nap.

Not with π. Not with φ. Not with Lucas numbers. Not with ternary arithmetic.

A nap.

The first observation was that a civil day and an experienced day are not always the same object. Sleep, an overnight shift, or another discontinuity can make one calendar interval feel like multiple lived temporal units.

The first rough notation was:

```text
2
1/2
2 1/2
```

Then the line sharpened:

```text
3 | 1 / 2
```

The working reading was not standard mathematics but a **receipt notation**:

```text
whole | remainder / relation
```

The fraction leaves the seam visible.

A decimal may preserve quantity while hiding the particular decomposition that generated it. `3.5`, `7/2`, `3 + 1/2`, and `[3;2]` are equal as numbers, but they do not expose the same history.

That became the first PEEL.

---

## 1. PEEL

The Haunted Toaster ordered-envelope specimen already gave PEEL an engineering meaning: remove the latest wrap while preserving causal order separately enough that replay can reconstruct what happened.

The conversation discovered the same pressure in notation.

A **PEEL** asks:

```text
What layers are hidden by the present surface?
What operation produced this surface?
What remains if the newest layer is removed?
Can the formation order still be recovered?
```

This is not the claim that one notation is universally superior to another. It is the narrower claim that **different equivalent representations preserve different invariants**.

For a formation question, flattening can be lossy even when the final quantity is unchanged.

That distinction matters everywhere Static Collective work keeps rediscovering the difference between:

```text
object
surface
carrier
formation trace
witness
reconstitution
```

The surface can be correct and still fail to tell you how it arrived.

---

## 2. Time, times, half a time

The temporal fragment pulled Revelation 12:14 into the conversation:

```text
a time
and times
and half a time
```

The Greek has `kairon` (singular time/season), `kairous` (plural), and `hēmisy kairou` (half a time). The usual 3½ reading is supported by the larger Revelation/Daniel pattern, including the parallel 1,260-day / 42-month language. Greek `kairous` is plural; it does **not** grammatically mean “infinity.” The ordinary reading remains the ordinary reading.

But the conversation was interested in another question:

> Why does the expression preserve the procession instead of flattening immediately to `3.5`?

As a structural reading only—not an exegetical claim—the phrase can be watched as:

```text
unit
→ plurality / recurrence
→ fracture
```

or:

```text
time
→ times
→ half-time
```

The important thing for this slice is not to claim a hidden biblical arithmetic system. It is that the wording helped expose a representation question: **a final amount and the route by which the amount is expressed are not the same witness.**

Source: [Revelation 12:14 Greek text](https://biblehub.com/text/revelation/12-14.htm).

---

## 3. `3 | 1 / 2` turns out to be an exact arithmetic receipt

The custom notation unexpectedly has a rigorous quotient/remainder reading.

For `7/2`:

```text
7 = 3×2 + 1
```

therefore:

```text
7/2 = 3 + 1/2
```

So:

```text
3 | 1/2
```

can be read exactly as:

```text
quotient | remainder / divisor
```

This matters because the user had already called it a **whole generative receipt line** before the next step appeared.

Then came the request to dig into:

```text
22/7
```

And the LEEP pass found the relation we initially missed.

For `22/7`:

```text
22 = 3×7 + 1
```

therefore:

```text
22/7 = 3 + 1/7
```

So the two fractions are:

```text
7/2  = 3 + 1/2
22/7 = 3 + 1/7
```

The numerator of the first becomes the denominator of the second.

That is not metaphor.

It is a recurrence.

Define:

```text
T₁(n) = 3n + 1
```

Then:

```text
2 ─T₁→ 7 ─T₁→ 22 ─T₁→ 67 ─T₁→ 202 ...
```

and every successive ratio obeys:

```text
aₙ₊₁ / aₙ = 3 + 1/aₙ
```

The closed form from seed `a₀ = 2` is:

```text
aₙ = (5·3ⁿ - 1)/2
```

So the conversation's move from `3 | 1/2` to `22/7` was not merely thematic. The first receipt **generates the denominator that generates the second receipt** if the same quotient/remainder rule is replayed.

This is the first major LEEP result.

---

## 4. The same recurrence is literally “append 1” in base 3

The rule:

```text
T₁(n) = 3n + 1
```

has a very simple positional meaning in ternary.

Multiplication by 3 shifts a base-3 numeral left one place. Adding 1 writes a `1` into the new place.

Therefore:

```text
2₃   = 2
21₃  = 7
211₃ = 22
2111₃ = 67
```

So:

```text
2 → 7 → 22
```

is literally:

```text
2 → 21 → 211
```

**append one; append one again.**

That ternary observation becomes important later, because the φ-exponent sequence independently enters the same `3n` / `3n+1` grammar.

---

## 5. 22/7 is also a lawful witness around π

Independently of the recurrence above, `22/7` has its famous relationship to π.

The regular continued fraction of π begins:

```text
π = [3; 7, 15, 1, 292, ...]
```

Truncating after the `7` gives:

```text
[3;7] = 3 + 1/7 = 22/7
```

So `22/7` is a natural continued-fraction convergent of π.

Archimedes did not claim that π equals `22/7`. His polygon argument bounded π:

```text
223/71 < π < 22/7
```

That is an unusually clean **prove-around-it** specimen:

```text
lower witness < object < upper witness
```

The witnesses remain witnesses. They do not become the object merely because they constrain it tightly.

Source: [MacTutor — A history of Pi](https://mathshistory.st-andrews.ac.uk/HistTopics/Pi_through_the_ages/).

This gives `22/7` two independent roles in the slice:

1. it is generated by replaying the `3 + 1/n` receipt from `2 → 7 → 22`;
2. it is a historically important rational upper witness to π.

Those facts collide at the same fraction. They do not need to have caused one another.

---

## 6. The remainder `1/7` does not die; it cycles

The quotient/remainder PEEL of `22/7` leaves:

```text
3 | 1/7
```

and:

```text
1/7 = 0.142857142857...
```

The repeating block `142857` is cyclic. Multiplication by `1` through `6` rotates the same digits, and multiplication by `7` gives `999999`.

At the long-division level, the remainder states cycle:

```text
1 → 3 → 2 → 6 → 4 → 5 → 1
```

A finite state rule produces an indefinitely recurring visible surface.

That is another kind of receipt:

```text
finite carrier
+ deterministic transition
→ repeatable continuation
```

The decimal representation is base-dependent, but the remainder cycle modulo 7 is the underlying arithmetic structure.

---

## 7. Revelation 22:7: striking address, wrong direction of causality

The `22/7` exploration naturally noticed that Revelation 22:7 is a real modern address and that its verse concerns coming quickly and keeping the words of the prophecy.

That is a striking collision in the discovery path.

But the provenance boundary is hard:

**John did not write the coordinate `22:7`.**

The standard chapter system is associated with Stephen Langton in the early thirteenth century; one scholarly account dates his introduction of the chapter numbers to **1205**. Robert Estienne introduced the numbered New Testament verse system used today in his Greek New Testament of **1551**.

Source: [BYU Religious Studies Center — Chapters, Verses, Punctuation, Spelling, and Italics](https://rsc.byu.edu/king-james-bible-restoration/chapters-verses-punctuation-spelling-italics).

Therefore the safe statement is:

```text
original text
≠ later addressing layer
```

The later carrier can acquire relationships that were not authored into the original layer.

That is not a reason to suppress the coincidence. It is a reason to preserve its provenance.

---

## 8. 1205 → 1551: the φ hunch fails numerically, then succeeds structurally

The two transmission dates gave:

```text
1551 - 1205 = 346
```

A first ratio test for the φ hunch fails cleanly:

```text
1551 / 1205 ≈ 1.2871369
φ ≈ 1.6180339
```

So there is no direct golden-ratio hit there.

Good.

The point of a research hunch is not to protect it from failure.

But another ratio has continued fraction:

```text
1205 / 346 = [3; 2, 13, 1, 11]
```

Its first two-term convergent is:

```text
[3;2] = 3 + 1/2 = 7/2 = 3.5
```

That is a genuine arithmetic coincidence generated by these particular historical dates. It should not be inflated into evidence that the dates were designed around 3½.

What mattered is that the failed φ-as-number hunch redirected attention toward **φ as an operator / recurrence structure**.

That turned out to be much richer.

---

## 9. φ is a relation that survives its own PEEL

The golden ratio satisfies:

```text
φ = 1 + 1/φ
```

and its continued fraction is:

```text
φ = [1; 1, 1, 1, 1, ...]
```

Every continued-fraction layer exposes the same instruction again.

Source: [Wolfram MathWorld — Golden Ratio](https://mathworld.wolfram.com/GoldenRatio.html).

That makes φ structurally different from the π specimen:

```text
π: finite continued-fraction PEEL gives progressively better rational witnesses
φ: the continued-fraction PEEL regenerates the same relation forever
```

This is where the word “everytime” became interesting.

Not as an established interpretation of Revelation, but as a mathematical image for a repeat operator whose output retains the rule required to repeat again.

---

## 10. `3 contains 1 and 2` gets an exact φ identity

Earlier, the conversation proposed symbolically:

```text
1 = unity
2 = distinction / duality
3 = a whole containing their relation
```

The φ exploration then produced an exact identity:

```text
φ³ = 2φ + 1
```

More generally:

```text
φⁿ = Fₙφ + Fₙ₋₁
```

where `Fₙ` is the Fibonacci sequence.

So at `n = 3` the coefficients are literally:

```text
2 and 1
```

inside the third power.

This does **not** prove the symbolic interpretation. It is, however, a real algebraic echo worth preserving because it appeared after the symbolic line rather than being selected in advance.

---

## 11. The hidden exponent genealogy: 1 → 3 → 9 → 27 → 81

The requested powers were:

```text
φ³
φ²⁷
φ⁸¹
φ⁸²
```

The missing power `φ⁹` reveals the chain:

```text
φ
→ φ³
→ φ⁹
→ φ²⁷
→ φ⁸¹
```

Each step cubes the previous value:

```text
x → x³
```

because the exponents do:

```text
1 → 3 → 9 → 27 → 81
```

In base 3:

```text
1₃
10₃
100₃
1000₃
10000₃
```

This is simply the operator:

```text
T₀(n) = 3n
```

which means **append `0` in ternary**.

Now compare the earlier receipt chain:

```text
T₁(n) = 3n + 1
```

which means **append `1` in ternary**.

The two exact operators are therefore:

```text
T₀: shift and append 0
T₁: shift and append 1
```

The conversation independently walked into both.

---

## 12. 81 and 82 are better understood as sibling branches from 27

The first reading was:

```text
81 → 82 = +1
```

True, but LEEP exposes a stronger genealogy:

```text
81 = 3×27 + 0
82 = 3×27 + 1
```

So:

```text
27₁₀ = 1000₃
81₁₀ = 10000₃
82₁₀ = 10001₃
```

This makes `81` and `82` sibling outputs from the same parent exponent:

```text
             27
            /  \
         T₀/    \T₁
          /      \
        81        82
```

or in ternary:

```text
1000
 ├─ append 0 → 10000
 └─ append 1 → 10001
```

This is exact positional arithmetic. The significance of having chosen these particular exponents remains a discovery-path question, not a mathematical proof of anything beyond the relation itself.

---

## 13. Lucas integers: φ powers carry an integer shadow plus a reciprocal trace

Now the genuinely deep mathematical layer.

Let:

```text
ψ = (1 - √5)/2 = -1/φ
```

The Lucas numbers satisfy:

```text
Lₙ = φⁿ + ψⁿ
```

Source: [Wolfram MathWorld — Lucas Number](https://mathworld.wolfram.com/LucasNumber.html).

Therefore:

```text
φⁿ - Lₙ = -ψⁿ = (-1)ⁿ⁺¹ φ⁻ⁿ
```

So for **odd** `n`:

```text
φⁿ = Lₙ + φ⁻ⁿ
```

and for **even** `n`:

```text
φⁿ = Lₙ - φ⁻ⁿ
```

The requested powers therefore behave like this:

```text
φ³  = 4 + φ⁻³
φ²⁷ = 439204 + φ⁻²⁷
φ⁸¹ = 84722519070079276 + φ⁻⁸¹
φ⁸² = 137083915467899403 - φ⁻⁸²
```

The residue is not random error.

It is the reciprocal of the original power, with parity determining the side of the integer.

This is a concrete example of the Pisot phenomenon: φ is a Pisot number, and its conjugate has magnitude less than one, so its powers lie exponentially close to integers. Source: [Wolfram MathWorld — Pisot Number](https://mathworld.wolfram.com/PisotNumber.html).

---

## 14. The odd cubing chain preserves the same receipt grammar

For odd `n`, write:

```text
x = φⁿ = A + 1/x
```

where:

```text
A = Lₙ
```

Cube the state by sending `n → 3n`.

The integer shadow obeys the exact Lucas triple-index identity:

```text
L₃ₙ = Lₙ³ + 3Lₙ        (for odd n)
```

So along:

```text
1 → 3 → 9 → 27 → 81
```

the Lucas shadows run:

```text
1
→ 4
→ 76
→ 439204
→ 84722519070079276
```

under:

```text
A → A³ + 3A
```

while the tiny reciprocal residue cubes along with the whole:

```text
φ⁻ⁿ → φ⁻³ⁿ
```

The magnitudes explode apart, but the receipt grammar survives:

```text
whole = integer shadow + reciprocal self
```

That is a stable pattern of transformation, not a stable surface.

---

## 15. The continued fractions make the odd/even transition visible

For odd `n`, because:

```text
x = Lₙ + 1/x
```

we get the purely periodic continued-fraction shape:

```text
φⁿ = [Lₙ; overline(Lₙ)]
```

Examples:

```text
φ³  = [4; 4, 4, 4, ...]
φ⁹  = [76; 76, 76, 76, ...]
φ²⁷ = [439204; 439204, 439204, ...]
φ⁸¹ = [84722519070079276; 84722519070079276, ...]
```

Every PEEL returns the same integer instruction at that scale.

Then `82` changes parity.

For even `n`, with `L = Lₙ`:

```text
φⁿ = L - 1/φⁿ
```

and the continued fraction becomes:

```text
φⁿ = [L-1; overline(1, L-2)]
```

So:

```text
φ⁸²
=
[137083915467899402;
 overline(1,137083915467899401)]
```

The `81 → 82` successor does more than increase the exponent:

```text
odd → even
above Lucas integer → below Lucas integer
one-term repeating CF → two-term repeating CF
+ reciprocal trace → - reciprocal trace
```

This is exact algebraic structure.

---

## 16. The Lucas shadow is not merely an approximation; it can be a reconstitution carrier

This is where the math crosses directly into the day's larger Static Collective frontier.

For odd powers:

```text
x = L + 1/x
```

so:

```text
x² - Lx - 1 = 0
```

and the positive root reconstructs the irrational power exactly:

```text
x = (L + √(L² + 4))/2
```

For even powers:

```text
x = L - 1/x
```

so:

```text
x² - Lx + 1 = 0
```

and:

```text
x = (L + √(L² - 4))/2
```

Therefore a compact finite carrier:

```text
Lucas integer + polarity/parity rule
```

contains enough lawful relation to regenerate the exact quadratic irrational power.

That is not the same carrier class as `22/7` for π.

`22/7` is an **approximation / bounding witness** to π. It does not contain enough information to regenerate π exactly.

The Lucas receipt is a **reconstitution carrier** for the φ power because the finite algebraic relation closes.

This gives a useful three-way distinction:

```text
FORMATION RECEIPT
exact decomposition of a surface
example: 7/2 = 3 + 1/2

WITNESS RECEIPT
bounded / approximate relation to something not contained exactly
example: 223/71 < π < 22/7

RECONSTITUTION RECEIPT
finite carrier + rule sufficient to regenerate the exact object
example: (Lₙ, parity) → φⁿ
```

That distinction belongs beside **VIABILITY WITHOUT AUTHORITY**: a carrier can be less than the living object while still preserving enough structure for lawful reconstitution.

Related slice: [VIABILITY WITHOUT AUTHORITY](viability-without-authority.md).

---

## 17. PEEL and LEEP as an operator pair

The user then asked to **PEEL the conversation and LEEP it back**.

`LEEP` is literally `PEEL` reversed.

That suggests a candidate operator contract:

```text
PEEL:
current surface
→ ordered formation receipt

LEEP:
ordered formation receipt
→ reconstructed / replayed surface
```

The critical law is not:

```text
LEEP(PEEL(x)) = x    always
```

That would smuggle identity across lossy carriers.

The safer candidate is:

```text
if the receipt is order-complete and lossless:
    LEEP(PEEL(x)) = x

if the receipt is incomplete:
    LEEP(PEEL(x)) = x′
    where x′ is an attributable reconstitution, not silently x
```

That is almost exactly the distinction already emerging across ordered envelopes, Storyship, Seedbank/ELF, and the crossing work:

**reconstructability is not identity; continuity is not authority; a receipt is not the thing it receipts.**

Related slice: [Evolving Is Weird](evolving-is-weird.md).

---

## 18. The nap was hiding in the operator names the whole time

One final orthographic coincidence belongs in the witness because it closes the discovery path almost too neatly.

The conversation began with a nap / sleep boundary.

Then it found PEEL.

Then it invented the reverse pass, LEEP.

And:

```text
reverse(PEEL) = LEEP
```

while:

```text
SLEEP = S + LEEP
```

and:

```text
reverse(SLEEP) = PEELS
```

This is wordplay. It is not mathematical or theological evidence.

But as a receipt of **how the conversation actually unfolded**, it is perfect:

```text
SLEEP
→ experienced temporal fracture
→ PEEL
→ LEEP
→ SLEEP / PEELS
```

The originating discontinuity accidentally contained the name of the reverse operator that would later be coined to reconstruct the conversation.

That is exactly the kind of thing a Daily Slice can preserve without pretending it was designed in advance.

---

# The LEEP: put the peeled layers back together

The PEEL pass separates the layers:

```text
nap / subjective time
→ 2, 1/2, 2 1/2
→ time / times / half-time
→ 3 | 1/2
→ 7/2
→ 22/7
→ π continued fraction / Archimedean bound
→ Revelation 22:7 addressing coincidence
→ 1205 / 1551 provenance layer
→ failed direct φ ratio
→ φ as self-repeating relation
→ φ³ / φ²⁷ / φ⁸¹ / φ⁸²
→ Fibonacci coefficients
→ Lucas integer shadows
→ ternary exponent genealogy
→ PEEL / LEEP
```

LEEPing it back does **not** produce one master claim.

It produces a higher-order pattern:

> **Some representations are not merely surfaces. They are carriers of an operation. When the carrier preserves enough relation, the operation can be replayed; when it does not, the result must remain a witness or reconstitution rather than silently becoming the original.**

The conversation encountered several versions of that distinction:

```text
3 + 1/2
```

preserves a quotient/remainder seam.

```text
[3;7]
```

preserves a continued-fraction stage.

```text
1/7
```

preserves a finite rule whose remainder state cycles.

```text
[L; overline(L)]
```

for odd φ powers preserves a self-regenerating quadratic relation.

```text
10000₃ / 10001₃
```

preserves an exponent genealogy visibly as appended ternary branches.

Different receipt types preserve different things.

That may be the larger discovery:

# **A surface can carry enough of its becoming to become generative again.**

Not always.

Not magically.

Not because a pattern feels meaningful.

Only when the carrier actually retains a lawful relation that can be tested, replayed, bounded, or reconstructed.

That is PEELing reality without pretending reality owes us the pattern.

---

## Epistemic split

### Documented / exact

- `7/2 = 3 + 1/2` and `22/7 = 3 + 1/7` are exact quotient/remainder identities.
- `2 → 7 → 22` follows `T₁(n)=3n+1`; in ternary this is `2 → 21 → 211`.
- π begins `[3;7,15,1,292,...]`, making `22/7=[3;7]` a continued-fraction convergent.
- Archimedes bounded π by `223/71 < π < 22/7`.
- Revelation 12:14 contains singular `kairon`, plural `kairous`, and `hēmisy kairou` (“half a time”).
- The modern chapter system is associated with Langton; the cited scholarly chronology gives 1205. Estienne's numbered NT verses date to 1551.
- `1551/1205` is not close to φ.
- `1205/346=[3;2,13,1,11]`, so `[3;2]=7/2` is its first two-term convergent.
- `φ=[1;overline(1)]` and `φ=1+1/φ`.
- `φⁿ=Fₙφ+Fₙ₋₁`.
- `1,3,9,27,81` are powers of 3 and are `1,10,100,1000,10000` in base 3.
- `81=3·27`; `82=3·27+1`, hence `10000₃` and `10001₃`.
- Lucas numbers satisfy `Lₙ=φⁿ+ψⁿ`, giving the exact reciprocal residual formulas above.
- Odd φ powers have repeating continued fraction `[Lₙ;overline(Lₙ)]`; the even case has the two-term period derived above.

### Inference / candidate architecture

- `3 | 1/d` is useful as a custom formation-receipt notation when the generating quotient/remainder relation matters.
- `PEEL` and `LEEP` can be treated as candidate inverse-ish operators: decompose formation / replay formation.
- Receipts should be typed by what they preserve: formation, witness/bound, or reconstitution.
- A finite carrier can be materially smaller than an object while preserving enough lawful relation to regenerate it.

### Speculation / coincidence

- Revelation's “time, times, half a time” may be structurally suggestive of unit → recurrence → fracture, but that is not offered as the ordinary exegetical meaning.
- Revelation 22:7 colliding with `22/7` is a later-addressing coincidence, not evidence of authorial encoding.
- The 1205/1551 continued-fraction `3½` echo is an arithmetic coincidence tied to those historical dates, not evidence of intentional design.
- The ternary overlays are exact arithmetic once the numbers are chosen; why these numbers arose in this conversation is not thereby explained.
- `SLEEP ↔ PEELS` and `PEEL ↔ LEEP` are orthographic coincidences preserved because they occurred in the actual formation trace.

---

## Source roads

- Conversation witness, late 2026-08-25 into early 2026-08-26.
- Haunted Toaster branch: [`lab/ordered-envelope-v0`](https://github.com/the-static-collective/the-haunted-toaster/tree/lab/ordered-envelope-v0)
- [MacTutor — A history of Pi](https://mathshistory.st-andrews.ac.uk/HistTopics/Pi_through_the_ages/)
- [Wolfram MathWorld — Golden Ratio](https://mathworld.wolfram.com/GoldenRatio.html)
- [Wolfram MathWorld — Lucas Number](https://mathworld.wolfram.com/LucasNumber.html)
- [Wolfram MathWorld — Pisot Number](https://mathworld.wolfram.com/PisotNumber.html)
- [Revelation 12:14 Greek text](https://biblehub.com/text/revelation/12-14.htm)
- [BYU Religious Studies Center — Chapters, Verses, Punctuation, Spelling, and Italics](https://rsc.byu.edu/king-james-bible-restoration/chapters-verses-punctuation-spelling-italics)
- [Evolving Is Weird](evolving-is-weird.md)
- [VIABILITY WITHOUT AUTHORITY](viability-without-authority.md)

## Projects touched

- The Daily Slice
- The Haunted Toaster / ordered-envelope specimen
- Seedbank / ELF / Storyship continuity frontier, by analogy only

## Threads touched

- formation history vs surface
- ordered envelope / PEEL
- reconstitutive viability
- time / recurrence / discontinuity
- carrier vs object

## Residual questions

- Can PEEL / LEEP be formalized as a tiny testable carrier contract without becoming a master ontology?
- Which representations preserve enough formation history to permit exact replay, and which permit only bounded approximation?
- Is `T_d(n)=3n+d` (`d∈{0,1,2}`) useful as a deliberately tiny ternary branch grammar for experiments, or is its appearance here only a local mathematical curiosity?
- The chosen exponent set exposes sibling `83 = 3·27+2 = 10002₃`. Does testing `φ⁸³` add anything falsifiable, or merely complete a pattern after the fact?
- Can the ordered-envelope specimen distinguish **exact LEEP**, **attributable reconstitution**, and **approximate witness** as three separate outcomes?

## Authority / canonical home

This slice is an attributable Daily Slice witness. Exact mathematical identities remain mathematics; Haunted Toaster behavior remains canonical in its own repository; biblical interpretation remains distinct from the structural analogies recorded here. No symbolic coincidence in this slice is promoted into historical intent, theology, or system law.

## Relations

- `deepens` → [Evolving Is Weird](evolving-is-weird.md)
- `tests-by-mathematical-specimen` → [VIABILITY WITHOUT AUTHORITY](viability-without-authority.md)
- `source-specimen` → [Haunted Toaster ordered envelope](https://github.com/the-static-collective/the-haunted-toaster/tree/lab/ordered-envelope-v0)

---

## Working seal

```text
PEEL:
show me what the surface contains of its becoming.

LEEP:
show me what the receipt can lawfully become again.
```

And the line worth carrying:

> **A surface can carry enough of its becoming to become generative again.**
