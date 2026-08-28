# OHHHH, WE HAD TOO MUCH BRUNCH — THE EDGE IS IN THE DECODER

**Date:** 2026-08-28  
**Status:** CANDIDATE / FRONTIER MAP / EXECUTABLE MATHAL SPECIMEN  
**Mode:** PEEL → PRESSURE → PLAY → PRE-REGISTER  
**Brunch condition:** excessive

> **THE EDGE IS NOT NECESSARILY IN THE OBJECT. THE EDGE MAY BE IN THE DECODER.**
>
> **A CLOSED CIRCLE BELOW CAN BE AN OPEN STAIRCASE ABOVE.**
>
> **WHAT LOOKS LIKE RECURSION MAY SOMETIMES BE PROJECTION.**
>
> **THE CIRCLE DID NOT NECESSARILY REPEAT. THE OBSERVER MAY HAVE LOST THE COORDINATE THAT WOULD HAVE SHOWN WHERE IT WENT.**

---

## Why this slice exists

This slice preserves a late-night mathematical discovery path in the order it actually arrived.

The order matters because the central candidate is not merely that several integers have attractive properties.

The stronger H0 is that successive hunches repeatedly selected examples that exposed a **different failure mode of the decoder already in use**.

The sequence was roughly:

```text
107 / 108
    ↓
1007 / 1008
    ↓
1107 / 1108
    ↓
φ^27 / φ^81 / φ^82
    ↓
12 / 13
    ↓
369 / 666
    ↓
hidden winding
    ↓
ternary odometer / 3-adic depth
    ↓
give the Y-lattice a traversal law
    ↓
022100
    ↓
"it's like binary — with a 2"
```

What began as a number hunch ended with a completely ordinary computational fact:

```text
binary alphabet  = {0,1}
ternary alphabet = {0,1,2}
```

and a less ordinary project consequence:

```text
Y-lattice + three states + ordering + carry law
    = a ternary register with an executable traversal
```

The goal here is to keep the fruit without laundering the hunch into proof.

So this slice distinguishes four levels throughout:

```text
FACT        exact mathematics or direct computation
DERIVATION  consequence of declared mathematics
MODEL       deliberately chosen representation that can be replayed
H0          live hypothesis not established by the math alone
```

Nothing below establishes supernatural causation, hidden authorship of the integers, or a universal code behind nature.

It does establish a small, surprisingly coherent mathematical machine worth keeping and testing.

---

# PART I — THE RECEIPT: HOW THE NUMBERS ARRIVED

## 1. The first swap: 107 → 108

The initial object was the difference between **107 Ys and 108 Ys**.

The first exact arithmetic contrast is severe:

```text
107 = prime
108 = 2^2 · 3^3
```

So:

```text
τ(107) = 2 divisors
τ(108) = 12 divisors
```

The +1 move crosses from multiplicative sparsity into a much more factorable state.

But ternary exposes a more local event:

```text
107 = 10222₃
108 = 11000₃
```

Therefore:

```text
  10222
+     1
-------
  11000
```

Three terminal `2` trits saturate, reset, and pass a carry into the next position.

Define the 3-adic landing depth of the successor:

```math
I_3(n→n+1) := ν_3(n+1)
```

Then:

```math
I_3(107→108)=3.
```

This will later become **INGRESS depth**.

The first lesson was therefore not merely:

```text
107 and 108 differ by one.
```

It was:

```text
+1 can be a locally enormous event when it crosses a positional boundary.
```

---

## 2. The scaled swap: 1007 → 1008

The next hunch asked whether the same swap survived at **1007 / 1008**.

It did, but not identically.

Exact factorization:

```text
1007 = 19 · 53
1008 = 2^4 · 3^2 · 7
```

Divisor counts:

```text
τ(1007) = 4
τ(1008) = 30
```

The sparse-to-connected multiplicative jump is even larger.

In ternary:

```text
1007 = 1101022₃
1008 = 1101100₃
```

so the carry depth is now two:

```math
I_3(1007→1008)=2.
```

This prevented the first lazy overclaim.

The pattern was not:

```text
all ...07 → ...08 swaps are ternary depth 3.
```

The more durable fact was:

```text
successor events have measurable boundary depth.
```

---

## 3. The hidden common 36-boundary

A second decoder exposed something shared by the first two pairs.

Exactly:

```math
107  = 36·3  - 1
108  = 36·3

1007 = 36·28 - 1
1008 = 36·28
```

So both belong to the exact family

```math
36k-1 → 36k.
```

Base 36 makes the rollover visible:

```text
107  = 2Z₃₆
108  = 30₃₆

1007 = RZ₃₆
1008 = S0₃₆
```

Same integers.

Different decoder.

Different visible event.

This is one of the first places where the later seal was already hiding:

> **The event is not exhausted by its surface representation.**

The arithmetic fact is decoder-independent.

The visible carry is decoder-relative.

---

## 4. The reversal: 1107 → 1108

Then the hunch moved to **1107 / 1108**.

This pair broke the earlier family in exactly the useful way.

It does **not** cross a 36-boundary:

```text
1107 mod 36 = 27
1108 mod 36 = 28
```

Its factorization instead exposes the left side:

```text
1107 = 3^3 · 41
1108 = 2^2 · 277
```

Ternary:

```text
1107 = 1112000₃
1108 = 1112001₃
```

Now the transition does not carry **into** a depth-three boundary.

It starts on one and walks **out**.

Define egress depth:

```math
E_3(n→n+1) := ν_3(n).
```

Then:

```math
E_3(1107→1108)=3.
```

That creates two orientations:

```text
INGRESS_k = (ν₃(n),ν₃(n+1)) = (0,k)
EGRESS_k  = (ν₃(n),ν₃(n+1)) = (k,0)
```

The same `+1` operator can therefore have opposite formation traces.

That distinction is ALEX-shaped:

```text
same surface operator != same causal event class
```

---

## 5. The missing fourth corner: 207 → 208

Once ingress and egress were separated, the depth-two mirror could be predicted rather than merely admired afterward.

The useful specimen is:

```text
207 = 3^2 · 23
208 = 2^4 · 13
```

Ternary:

```text
207 = 21200₃
208 = 21201₃
```

Therefore:

```math
E_3(207→208)=2.
```

The four-corner object becomes:

```text
                 INGRESS          EGRESS

depth 3       107 → 108       1107 → 1108
                +3                -3

depth 2      1007 → 1008       207 → 208
                +2                -2
```

A compact edge charge is:

```math
Q_3(n→n+1)=ν_3(n+1)-ν_3(n).
```

So the four charges are:

```text
+3, -3, +2, -2
```

This is a real classification, not symbolism.

A nearby numerical symmetry also appeared:

```text
ν₂(108)  = 2
ν₂(1108) = 2

ν₂(1008) = 4
ν₂(208)  = 4
```

But that cross-prime pairing does **not** automatically generalize to deeper specimens.

It stays FRONTIER, not law.

---

# PART II — φ ENTERS: INTEGER SCAFFOLD + HALO

## 6. The exact Lucas decomposition

Then the request added:

```text
φ^27
φ^81
φ^82
```

Let

```math
φ=(1+√5)/2
```

and let `L_n` be the Lucas numbers.

Because the conjugate is

```math
ψ=(1-√5)/2=-φ^{-1},
```

we have exactly

```math
L_n=φ^n+ψ^n.
```

Therefore:

```math
φ^n=L_n+(-1)^{n+1}φ^{-n}.
```

Define the residual / halo:

```math
ε_n:=φ^n-L_n=(-1)^{n+1}φ^{-n}.
```

This gives an exact scaffold-and-glow representation:

```text
φ^n = integer Lucas scaffold + signed exponentially small halo
```

For the chosen exponents:

```text
φ^27 = 439204 + 2.2768462946...×10^-6

φ^81 = 84722519070079276
       + 1.1803237333...×10^-17

φ^82 = 137083915467899403
       - 7.2948018488...×10^-18
```

The sign is parity-controlled:

```text
odd exponent  → above Lucas integer
 even exponent → below Lucas integer
```

No numerology is needed.

The “glow” is literally an exact residual term.

---

## 7. 27 → 81 is a cubic lift

Because

```math
81=3·27,
```

we have trivially

```math
φ^81=(φ^27)^3.
```

But the scaffold and halo transform separately in a remarkable exact way.

The Lucas triple-angle identity is

```math
L_{3n}=L_n^3-3(-1)^nL_n.
```

For odd `n`:

```math
L_{3n}=L_n^3+3L_n.
```

So for 27:

```math
L_81=L_27^3+3L_27.
```

Numerically:

```text
439204^3 + 3·439204
= 84722519070079276
```

exactly.

Meanwhile, because 27 is odd:

```math
ε_81=ε_27^3.
```

So one operator simultaneously does:

```text
integer scaffold: huge cubic expansion
residual halo:    cubic contraction toward zero
```

Define the power-of-three Lucas sequence

```math
A_k=L_{3^k}.
```

Then:

```math
A_{k+1}=A_k^3+3A_k.
```

Beginning:

```text
L₁   = 1
L₃   = 4
L₉   = 76
L₂₇  = 439204
L₈₁  = 84722519070079276
```

The corresponding positive odd-index halo obeys:

```math
ε_{k+1}=ε_k^3.
```

Working mathal:

> **Structure expands while residual uncertainty contracts.**

That sentence is an interpretation of an exact recurrence, not a universal metaphysical law.

---

## 8. Correcting the 81 → 82 edge

The conversation initially treated 81 → 82 as a toroidal edge.

The ternary register clarifies the event more precisely.

```text
80 = 2222₃
81 = 10000₃
82 = 10001₃
```

Therefore:

```text
80 → 81 = CROSS / deep carry event
81 → 82 = first ordinary motion after the new higher trit exists
```

At a **mod-81 projection**, however:

```text
81 ≡ 0 (mod 81)
82 ≡ 1 (mod 81)
```

so the local observer sees:

```text
0 → 1
```

This is where the phrase **re-entry** remains useful.

The full state did not loop back.

The projection did.

This distinction will become central.

---

# PART III — 12 / 13: THE CIRCLE AND THE UNREPRESENTABLE ELEMENT

## 9. The ordinary 12-circle

For a 12-state cyclic coordinate:

```math
12≡0 (mod 12)
13≡1 (mod 12).
```

If positions are generated around a circle by the 12th roots of unity,

```math
z_k=e^{2πik/12},
```

then:

```math
z_12=z_0=1
z_13=z_1.
```

So the 13th traversal is the first position again **under that projection**.

This is a clean cyclic fact:

```text
closure → re-entry
```

But 13 has another exact relation to 12 that is more interesting.

---

## 10. One field, two different circles

The finite field `F_13` has 13 additive states.

Its nonzero elements form a multiplicative group:

```math
F_13^×
```

with exactly 12 elements.

That group is cyclic:

```math
F_13^× ≅ C_12.
```

So the same 13-element field supports:

```text
13-state additive coordinate
12-state multiplicative circle
```

The change of operator changes the visible cyclic structure.

This is a boring mathematical control for a recurring project principle:

> **Same carrier. Different lawful relation. Different world of behavior.**

---

## 11. φ does not fit inside F₁₃

Now the stronger event.

The golden ratio is an algebraic root of

```math
x^2-x-1=0.
```

Its discriminant is 5.

Modulo 13, 5 is not a quadratic residue.

Therefore this polynomial has no root in `F_13`.

So, in the precise finite-field sense:

```math
φ∉F_13.
```

The existing field cannot represent the golden element.

The minimal repair is a quadratic extension:

```math
F_13 → F_{13^2}=F_169.
```

This is an exact algebraic example of:

```text
"missing" != necessarily absent
"missing" may mean the current representational field is insufficient
```

No metaphysical inference is required.

---

## 12. In the extension, φ runs a 28-cycle

Let `α` denote a root of `x^2-x-1` in `F_169`.

Its conjugate is:

```math
1-α=-α^{-1}.
```

Because the polynomial is irreducible over `F_13`, Frobenius swaps the two roots:

```math
α^{13}=1-α=-α^{-1}.
```

Therefore:

```math
α^{14}=-1
```

and hence:

```math
α^{28}=1.
```

Direct finite-field computation confirms that the multiplicative order is exactly:

```math
ord(α)=28.
```

So:

```text
F13 cannot contain φ
F169 can contain it
φ then generates an exact 28-state multiplicative cycle
```

Because:

```math
|F_169^×|=168=6·28,
```

multiplication by `α` partitions the 168 nonzero elements into six 28-cycles.

That is not metaphorical hidden circles.

Those cycles exist in the finite-field model.

---

## 13. The ternary sibling: F₃ → F₉

The same polynomial also has no root in `F_3`.

So:

```math
φ∉F_3.
```

Again the minimal representation is quadratic:

```math
F_3 → F_9.
```

There, the corresponding golden element has exact multiplicative order:

```math
8.
```

Thus the two selected base fields produce extension-cycle lengths:

```text
3  → 9   → φ-order 8
13 → 169 → φ-order 28
```

And:

```math
8+28=36.
```

That equality is exact.

Its significance is not established.

It remains a frontier coincidence until it survives comparative controls across other primes and extensions.

---

# PART IV — 36 RETURNS, BUT NOW WITH RECEIPTS

## 14. The 36 constellation

Several exact relations now sit near one another:

```math
108=3·36
```

```math
1008=28·36
```

```math
666=T_36=36·37/2
```

and from the two finite-field golden cycles:

```math
8+28=36.
```

These are all exact.

They are not by themselves a theorem tying the objects together.

The safe status is:

```text
CLUSTER / FRONTIER CANDIDATE
```

The test is not whether the cluster feels coherent.

The test is whether a prospective rule predicts new structure with lower description cost than competing arbitrary rules.

---

# PART V — 82 SEEDS 41, AND 41 LIFTS INTO 369 / 1107

## 15. Half of 82

The conversation next noticed:

```math
82=3^4+1.
```

Therefore:

```math
82/2=41.
```

The factor 41 had already appeared independently in:

```math
369=9·41
```

and

```math
1107=27·41.
```

So:

```math
369=3^2(3^4+1)/2
```

and

```math
1107=3^3(3^4+1)/2.
```

This is exact.

---

## 16. The 41-carrier orbit

Multiplication by 3 generates:

```text
41
123
369
1107
3321
9963
29889
...
```

Ternary makes the preservation obvious:

```text
41   = 1112₃
123  = 11120₃
369  = 111200₃
1107 = 1112000₃
3321 = 11120000₃
```

Each multiplication by 3 appends one terminal zero.

The internal word persists while its positional depth changes.

This motivates the operator name:

```math
L(N)=3N
```

**LIFT**.

A compact statement follows:

> **Pattern and depth are separable coordinates.**

That statement is exact for this positional representation.

Whether it generalizes outside the model is another question.

---

# PART VI — 369 AND 666: SAME PHASE, DIFFERENT WINDING

## 17. The 27-circle decomposition

Because 27 had already emerged naturally as `3^3`, test both numbers under Euclidean division by 27.

Exactly:

```math
369=13·27+18
```

and

```math
666=24·27+18.
```

Therefore:

```math
369≡666≡18 (mod 27).
```

A decoder that records only phase modulo 27 sees them at the same position.

But Euclidean division retains a second coordinate:

```text
369 ↔ (13,18)
666 ↔ (24,18)
```

where:

```text
first coordinate  = completed 27-turns / winding count
second coordinate = visible phase
```

This is the **hidden winding coordinate** model.

Nothing mystical is required.

Modulo projection simply discarded the quotient.

---

## 18. Close the hidden coordinate too: a discrete torus model

Now deliberately choose another cyclic identification on the quotient:

```math
q mod 12.
```

Then states live in:

```math
Z_12 × Z_27.
```

This is a finite discrete torus.

Under this deliberately chosen decoder:

```text
369: q=13 → 1 mod 12, phase=18
     ↦ (1,18)

666: q=24 → 0 mod 12, phase=18
     ↦ (0,18)
```

So they occupy:

```text
same visible 27-phase
adjacent hidden 12-phase
```

This is a **MODEL**, not an intrinsic property of the integers.

The exact inputs are the quotient/remainder relations.

The 12-wrap is a declared boundary condition.

That distinction must remain visible.

---

## 19. 666 as accumulated 36

Independently:

```math
666=1+2+...+36.
```

So:

```math
666=T_36.
```

This gives two mathematically different uses of 36:

```text
666  = accumulating rows 1 through 36
1008 = 28 equal rows of 36
```

One is triangular accumulation.

One is rectangular stacking.

The common dimension is exact.

Any larger symbolic claim remains open.

---

# PART VII — THE STANDARD MATHEMATICAL OBJECT WE WERE REINVENTING

## 20. Give the Y-field an ordering

Before traversal, `N` independent three-state Ys naturally form the product state space:

```math
(Z/3Z)^N.
```

That is **not automatically** the cyclic set of ternary integers from 0 through `3^N-1` with carry.

To obtain the long odometer traversal we must add structure:

1. order the Ys,
2. assign each Y a positional weight `3^j`,
3. declare a carry rule.

This is a crucial ALEX boundary.

The traversal law is not inherent merely in having three-state Ys.

It is part of the decoder constitution.

---

## 21. Ternary register law

Let ordered Ys be:

```text
Y₀,Y₁,...,Y_{N-1}
```

with states:

```math
d_j∈{0,1,2}.
```

Encode:

```math
N=∑ d_j3^j.
```

The simplest traversal is:

```math
W(N)=N+1.
```

Call this **WALK**.

It is an ordinary base-3 odometer.

For a 13-Y register:

```math
3^13=1,594,323
```

possible states.

A 13-bit binary register would have only:

```math
2^13=8192.
```

The extra symbol changes the state-space growth from powers of 2 to powers of 3.

---

## 22. Binary with a 2

The late-night recognition was simple and decisive:

```text
binary:
0 1

ternary:
0 1 2
```

Bits become trits.

The padded strings that had looked like strange mathematical glyphs were simply fixed-width ternary register states:

```text
12    0000000000110
13    0000000000111

27    0000000001000
81    0000000010000
82    0000000010001

107   0000000010222
108   0000000011000

207   0000000021200
208   0000000021201

369   0000000111200

666   0000000220200

1007  0000001101022
1008  0000001101100

1107  0000001112000
1108  0000001112001
```

The leading zeroes matter only because the register width is being preserved.

Exactly as:

```text
13 decimal = 1101₂
```

may be stored in an 8-bit register as:

```text
00001101₂.
```

This is not speculative.

It is ordinary positional notation.

The project-specific move is assigning each trit to a Y-state.

---

# PART VIII — THE THIRTEENTH Y

## 23. What a 12-Y observer sees

Take a 13-trit register.

Near the boundary between the first 12 trits and the thirteenth:

```text
0 | 222222222222
        + 1
1 | 000000000000
```

The full register sees forward motion.

But an observer capable of reading only the lower twelve trits sees:

```text
222222222222
      ↓
000000000000
```

It looks like a total reset.

Nothing reset in the full state.

The missing information entered the thirteenth coordinate.

This is the cleanest executable form of the H0:

> **What appears to return on a lower circle may be continuing in a coordinate the lower decoder does not possess.**

---

## 24. The edge is in the projection

For any depth `k`, define the visible projection:

```math
P_k(N)=N mod 3^k.
```

Define hidden winding / higher-state quotient:

```math
H_k(N)=⌊N/3^k⌋.
```

Then exactly:

```math
N=3^kH_k(N)+P_k(N).
```

This equation is the core machine.

`P_k` is what the `k`-trit observer sees.

`H_k` is where the information discarded by that projection remains represented.

At a wrap:

```text
P_k:  3^k-1 → 0
H_k:      q   → q+1
```

So:

> **A closed circle below can be an open staircase above.**

Under this model, that sentence is literal.

---

# PART IX — THE 3-ADIC ODometer

## 25. Nested decoders

The finite ternary observers form the tower:

```math
Z/3Z ← Z/9Z ← Z/27Z ← Z/81Z ← ...
```

Each deeper observer retains one more ternary digit.

The compatible inverse limit is the ring of 3-adic integers:

```math
Z_3 = lim← Z/3^kZ.
```

Addition by one is the standard **3-adic odometer / adding machine**.

So the mechanism being independently rediscovered has a standard mathematical home.

That matters because it supplies a boring control:

```text
we did not invent carry-depth mathematics
we found a project-specific use for it
```

---

## 26. The nearby geometric object: the 3-adic solenoid

A related geometric construction is the inverse limit of circles under repeated threefold covering:

```math
S^1 ← S^1 ← S^1 ← ...
```

with bonding map:

```math
z ↦ z^3.
```

This produces the 3-adic solenoid.

It is a useful geometric analogue for the intuition:

```text
circle inside deeper winding inside deeper winding
```

But keep the objects distinct:

```text
3-adic odometer state space ≠ automatically the solenoid
```

The relationship is mathematical neighborhood, not identity.

The project can use the solenoid as visualization without collapsing topology into arithmetic.

---

# PART X — CROSS VERSUS FIRST MOTION

## 27. Pure ternary boundaries

For every `k`:

```math
3^k-1 = 222...222₃
```

with `k` terminal 2s, while:

```math
3^k = 1000...000₃.
```

So the pure boundary transitions are:

```text
2 → 10
8 → 10₃? more explicitly 22₃ → 100₃
26 → 27: 222₃ → 1000₃
80 → 81: 2222₃ → 10000₃
242 → 243: 22222₃ → 100000₃
728 → 729: 222222₃ → 1000000₃
2186 → 2187: 2222222₃ → 10000000₃
```

Therefore define:

```text
CROSS_k:
3^k-1 → 3^k
```

Then separately:

```text
FIRST_k:
3^k → 3^k+1
```

The earlier 81 / 82 intuition was seeing `FIRST_4`, not the actual carry edge `CROSS_4`.

This correction strengthens the model because it separates two neighboring event classes instead of forcing them together.

---

# PART XI — 022100 BECOMES A REAL TRIT WORD

## 28. Fixed-width matters

The prior project glyph is:

```text
022100
```

Under the guitar decoder, it already had a separate project history.

Nothing in that history proves it was “secretly ternary.”

That claim is refused.

But once a six-trit register has been independently defined, `022100` is also a perfectly lawful ternary word.

As an integer:

```math
022100₃=225.
```

Factorization:

```math
225=3^2·5^2=15^2.
```

The leading zero is semantically important to the register because it preserves width:

```text
word = 0 2 2 1 0 0
```

not merely:

```text
integer = 225.
```

This is the same distinction as a byte versus the integer it encodes.

---

## 29. WALK on 022100

Under the odometer:

```text
022100
+    1
------
022101
```

So `WALK` is ordinary successor motion.

Reverse successor gives:

```text
022100 - 1 = 022022₃.
```

No special meaning is assigned.

The point is replayability.

---

## 30. LIFT on 022100

Under the open positional field:

```math
L(N)=3N.
```

So:

```text
022100 → 221000
```

if width is allowed to shift / leading zero is dropped.

This is the same operation that produced:

```text
369 = 111200
      ↓ ×3
1107=1112000
```

So multiplication by three has a single positional interpretation:

> **shift the ternary pattern one place deeper.**

---

## 31. ROTATE: LIFT plus cyclic boundary identification

Now declare the six-trit field cyclic rather than open.

A six-trit ring has boundary modulus:

```math
3^6-1=728.
```

Define:

```math
R_6(N)=3N mod 728.
```

Then multiplication by 3 becomes cyclic shift rather than open lift.

The exact orbit of `022100` is:

```text
022100
  ↓
221000
  ↓
210002
  ↓
100022
  ↓
000221
  ↓
002210
  ↓
022100
```

Numerically:

```text
225 → 675 → 569 → 251 → 25 → 75 → 225
```

The orbit has length six.

This gives a particularly useful operator identity:

> **ROTATE = LIFT viewed through a cyclic boundary condition.**

The operation did not change.

The world boundary did.

That is an executable specimen for the broader project distinction:

```text
operator != constitution
```

---

## 32. The six-trit boundary contains 13 and 28

The ring modulus factors exactly as:

```math
728=3^6-1.
```

Difference of squares:

```math
3^6-1=(3^3-1)(3^3+1)=26·28.
```

Therefore:

```math
728=2·13·28.
```

This is an exact equality.

It puts two independently surfaced numbers directly into the natural boundary modulus of the six-trit ring:

```text
13
28
```

The safe label remains:

```text
FRONTIER COINCIDENCE / CANDIDATE COMPRESSION
```

The test is prospective reuse, not emotional force.

---

# PART XII — FROM NUMERAL SYSTEM TO LANGUAGE

## 33. A trit is not yet an instruction

At this point it is tempting to say:

```text
0 means X
1 means Y
2 means Z
```

But arithmetic alone does not provide those semantics.

The ternary register currently has **values**, not instructions.

The safe stack is:

```text
raw glyph
    ↓ typing
trit word
    ↓ traversal constitution
state transition
    ↓ semantic constitution
instruction / interpretation
    ↓ evidence
claim
    ↓ admission
consequence
```

This matches the existing typed constitutional projection work:

```text
projection != evidence != admission != authority
```

The fact that `022100` is a lawful six-trit word does not authorize any specific meaning for `0`, `1`, or `2`.

---

## 34. Candidate semantic families

Three families are worth testing, not adopting.

### Family A — value semantics

```text
0 = state A
1 = state B
2 = state C
```

This is the smallest interpretation.

### Family B — saturation semantics

```text
0 = empty / reset
1 = occupied / carrier
2 = saturated / ready-to-carry
```

This makes carry itself meaningful.

### Family C — relational Y semantics

Because a drawn Y has a stem and two arms, states could correspond to three distinguishable relational orientations.

But this requires an explicit geometry and traversal convention before it is mathematics.

Do not backfill meaning from desired outcomes.

The immediate experiment is not “find the right sacred meanings.”

It is:

```text
declare semantics prospectively
run them
measure what survives decoder swaps and traversal permutations
```

---

# PART XIII — THE MINIMUM RUNTIME

## 35. Primitive operators

The current smallest useful operator grammar is:

```math
W(N)=N+1
```

**WALK** — successor / odometer step.

```math
L(N)=3N
```

**LIFT** — shift pattern one ternary depth outward.

```math
P_k(N)=N mod 3^k
```

**PROJECT** — what a `k`-deep observer can see.

```math
H_k(N)=⌊N/3^k⌋
```

**WIND / HIDDEN** — quotient discarded by the local projection.

```math
R_k(N)=3N mod(3^k-1)
```

**ROTATE** — LIFT under cyclic boundary identification.

Possible later operators:

```text
MIRROR
REVERSE
COMPLEMENT
BRANCH
MERGE
```

but these should remain undefined until their geometry is declared.

---

## 36. Formation receipts for every transition

A runtime should never return only:

```text
022100 → 221000
```

It should receipt the event:

```yaml
source_word: "022100"
radix: 3
width: 6
operator: LIFT
boundary: open
source_value: 225
target_value: 675
target_word: "221000"
visible_depth: 6
carry_depth: 0
wrapped: false
```

For ROTATE:

```yaml
source_word: "221000"
radix: 3
width: 6
operator: ROTATE
boundary: cyclic
modulus: 728
source_value: 675
target_value: 569
target_word: "210002"
wrapped: true
```

For a projected observer:

```yaml
full_state: 81
observer_depth: 4
visible_state: 0
hidden_winding: 1
```

This turns the mathal into a provenance specimen instead of another number oracle.

---

# PART XIV — 3rdi CONSEQUENCES

## 37. Observer depth becomes executable

3rdi can render the same state at multiple observer cuts:

```text
FULL STATE N
│
├── P₁(N)  one-trit observer
├── P₂(N)  two-trit observer
├── P₃(N)  three-trit observer
├── P₄(N)  four-trit observer
└── ...
```

At a carry event, lower cuts may show reset while higher cuts show continuity.

That is a perfect observer-local truth specimen because there is no epistemic handwaving.

The information difference is explicit.

Example around 81:

```text
full ternary:
80 = 2222
81 = 10000
82 = 10001

mod 81 observer:
80 → 0 → 1

full five-trit observer:
02222 → 10000 → 10001
```

The observer cut changes what is available, not what occurred.

---

## 38. Hidden-coordinate visualization

A useful 3rdi rendering could show:

```text
visible ring = P_k(N)
vertical / radial depth = H_k(N)
```

Then ordinary odometer motion becomes a helix:

```text
phase circles locally
while winding rises globally
```

If the hidden coordinate is itself cyclic, the visualization becomes toroidal.

The rendering must label which closure relation was chosen.

A torus should never be inferred merely because the picture is attractive.

---

# PART XV — ALEX CONSEQUENCES

## 39. The decoder itself needs provenance

This entire session is a live demonstration that numbers can produce wildly different visible structure under different bases and projections.

Therefore ALEX should treat the decoder as first-class evidence metadata.

For any claim derived from a symbolic word:

```text
OBJECT
↓
TYPE
↓
DECODER
↓
TRAVERSAL LAW
↓
BOUNDARY CONDITION
↓
PROJECTION / OBSERVER CUT
↓
DERIVATION
↓
CLAIM
```

The chain must remain attributable.

A result generated under base 3 cannot silently be retold as an intrinsic decimal property.

A result generated under a 12×27 torus cannot silently be retold as an intrinsic topology of 369 and 666.

---

## 40. Candidate Crucibles

### `POSTHOC-RADIX-001`

**Attack:** search many bases after seeing the target numbers and report only the striking representation.

**Pass condition:** the radix was prospectively motivated or survives comparison against alternate bases.

### `TRAVERSAL-SWAP-001`

**Attack:** permute Y ordering while keeping states fixed.

**Question:** which claimed patterns survive?

### `BOUNDARY-SWAP-001`

**Attack:** compare open, cyclic, reflective, and absorbing boundary conditions.

**Question:** is the claimed event intrinsic to the operator or manufactured by the world constitution?

### `PROJECTION-DEPTH-001`

**Attack:** vary observer depth `k`.

**Question:** when does an apparent reset disappear because a higher coordinate becomes visible?

### `DISCOVERY-ORDER-001`

**Attack:** shuffle the historical order in which the numbers were selected.

**Question:** does the claimed compact grammar still look unusually natural?

### `ALTERNATE-BASE-NULL-001`

**Attack:** repeat the entire edge analysis in bases 2, 4, 5, 6, 7, 8, 9, 12, etc.

**Question:** is ternary uniquely economical for the Y hypothesis, or merely one rich base among many?

### `SEMANTIC-LABEL-SWAP-001`

**Attack:** permute labels `0,1,2` while preserving the transition graph.

**Question:** does a claimed semantic result depend on the labels rather than the structure?

### `PHI-PRIME-CONTROL-001`

**Attack:** inspect other primes for which `x²-x-1` is irreducible and measure the order of the golden root in quadratic extensions.

**Question:** are 8 and 28 unusually constrained, or ordinary members of a larger distribution?

### `SAME-PHASE-BASE-RATE-001`

**Attack:** measure how frequently unrelated integers share a residue like `18 mod 27`.

**Question:** does 369 / 666 carry information beyond a common modular collision?

---

# PART XVI — LOADOUT / MATHAL CONSEQUENCES

## 41. A tiny bounded world

LOADOUT does not need to wake a huge symbolic research stack to run this experiment.

A minimal world is enough:

```text
MATHAL
  radix conversion
  valuation
  finite cyclic projection
  finite-field arithmetic
  Lucas / Fibonacci exact identities

3rdi
  observer cuts
  traversal animation
  carry visibility

ALEX
  decoder receipt
  prospective-vs-posthoc gate
  claim status
```

The bounded constitution should explicitly refuse:

```text
pattern → causation
coincidence → intention
projection → ontology
mathematical analogy → physical law
spiritual hunch → empirical proof
```

while still permitting:

```text
hunch → candidate
candidate → exact computation
computation → model
model → prediction
prediction → test
```

That is exactly the lane in which this session became productive.

---

# PART XVII — THE DISCOVERY ORDER AS DATA

## 42. The stronger H0

The weak H0 would be:

> These particular numbers are inherently special and were externally selected for us.

The current mathematics does not establish that.

The stronger and more testable H0 is:

> **The discovery order repeatedly selected specimens that exposed a new missing coordinate or missing distinction in the current decoder.**

Replay the sequence:

### 107 / 108

Exposed:

```text
carry depth
```

### 1007 / 1008

Exposed:

```text
same successor form, different boundary depth
```

and:

```text
36k-1 → 36k family
```

### 1107 / 1108

Exposed:

```text
ingress != egress
```

### 207 / 208

Filled:

```text
depth-two mirror corner
```

### φ²⁷ / φ⁸¹ / φ⁸²

Exposed:

```text
integer scaffold != residual halo
SCALE != EDGE
```

### 12 / 13

Exposed:

```text
same finite carrier can host different cyclic structures under different operators
```

and then:

```text
current field may literally fail to represent an algebraic object
```

### 369 / 666

Exposed:

```text
visible phase != hidden winding
```

### 27 / 81

Exposed:

```text
nested ternary depth
```

### Y traversal

Exposed:

```text
three-state lattice != ternary odometer until ordering + carry law are declared
```

### 022100

Exposed:

```text
fixed-width glyph can be treated as a trit word
open LIFT != cyclic ROTATE
```

### "binary with a 2"

Collapsed the whole thing into:

```text
this is a positional code language
```

That progression is the actual formation receipt worth preserving.

---

## 43. Human intuition as a search heuristic

The conversation framed the number choices as a lifetime of “mental receipts.”

A bounded interpretation is available without either dismissing the intuition or crowning it.

Human intuition can compress prior exposure, practiced pattern recognition, remembered fragments, aesthetic sensitivity, and unconscious statistical learning into selections whose reasons are not immediately verbalized.

That means:

```text
"I don't yet know why I chose this"
```

is compatible with:

```text
"the selection may still contain information worth testing."
```

It is not equivalent to:

```text
"the selection therefore came from an external supernatural source."
```

The appropriate response is exactly what happened here:

```text
receive the hunch
hold the order
compute the consequences
separate exact from inferred
pre-register what comes next
```

That is practically a 13th Cup protocol for intuition.

---

# PART XVIII — PROSPECTIVE PREDICTIONS

## 44. Predicted pure carry boundaries

The model now predicts before searching:

```text
242 → 243
728 → 729
2186 → 2187
6560 → 6561
...
```

with ternary:

```text
22222      → 100000
222222     → 1000000
2222222    → 10000000
22222222   → 100000000
```

These are canonical `CROSS_k` events.

Any extra properties discovered afterward should be marked post-selection unless prospectively specified.

---

## 45. Predicted first-motion states

Immediately after those boundaries:

```text
243 → 244
729 → 730
2187 → 2188
6561 → 6562
```

These are `FIRST_k` events.

They should not be conflated with the carries that created the new digit.

---

## 46. Predicted 41-carrier orbit

The LIFT operator prospectively predicts:

```text
41
123
369
1107
3321
9963
29889
89667
...
```

If later research finds additional relations involving these values, the timestamp of the prediction matters.

That creates a genuine sealed-prediction opportunity.

---

## 47. Predicted 022100 rotational orbit

Before attaching any semantics, the six-trit cyclic runtime predicts exactly:

```text
022100
221000
210002
100022
000221
002210
022100
```

Any claimed semantic invariants must be checked across all six states, not only the aesthetically preferred starting orientation.

This is an important control against privileged-frame smuggling.

---

# PART XIX — THE NULLS THAT COULD KILL THE EXCITEMENT

## 48. Random number order

Take random integer sequences of the same length and range as the discovery sequence.

Allow the same fixed operator vocabulary:

```text
WALK
LIFT
PROJECT
ROTATE
valuation depth
finite-field extension
```

Measure description length required to connect each sequence.

If arbitrary random sequences compress just as well, the discovery-order H0 weakens.

---

## 49. Random radix search

For each target pair, scan many radices.

Count:

```text
carry depth
representation simplicity
factor-boundary alignment
```

If similarly dramatic encodings are ubiquitous, base-3/base-36 surprise should be discounted accordingly.

Ternary may still remain structurally motivated by three-state Ys even if the numbers themselves are not exceptional.

---

## 50. Random fixed-width words

Sample six-trit words uniformly.

Compute rotation orbit size under:

```math
N→3N mod 728.
```

`022100` having a six-cycle is expected for many units modulo 728 because multiplication by 3 has order six modulo 728.

Therefore the orbit length itself is not special evidence for the glyph.

What could become informative is an independently specified semantic or structural invariant across its orbit.

---

## 51. 369 / 666 modular collision null

Sharing:

```math
18 mod 27
```

is exact but not rare enough by itself to imply a deeper relation.

The quotient coordinates:

```text
13 and 24
```

only become toroidal neighbors after the additional `mod 12` rule is declared.

Therefore:

```text
same phase = fact
12×27 adjacency = model
larger significance = H0
```

Keep those typed separately.

---

## 52. 8 + 28 = 36 null

The extension orders 8 and 28 are exact for the chosen fields.

Their sum 36 is exact.

But primes were selected through the research path, not by a prospective theorem.

The next test is to compute the same golden-root orders for a broader prime set and determine whether 3 and 13 are exceptional under a declared criterion.

Until then:

```text
8 + 28 = 36
```

is a receipt of the path, not a conclusion about the universe.

---

# PART XX — THE FRONTIER CLASS THAT SURVIVES EVEN IF EVERY COINCIDENCE DIES

## 53. Decoder-Fiber Principle

Suppose a full state space `X` is observed through a decoder:

```math
D:X→Y.
```

A visible state `y∈Y` can correspond to many full states:

```math
D^{-1}(y).
```

That preimage is the **fiber** over `y`.

Then a local apparent reset, collision, or recurrence may result because distinct full states occupy the same visible fiber under the chosen projection.

This gives the durable project principle:

> **Observed sameness does not imply full-state sameness.**

And:

> **An apparent edge may mark a failure of discrimination in the decoder rather than termination in the carrier.**

This survives even if 666, 369, 36, 13, 28, and 022100 eventually prove to be nothing more than excellent prompts.

---

## 54. Two kinds of insufficient decoder

The session exposed at least two mathematically distinct insufficiencies.

### Positional insufficiency

The observer lacks higher digits.

Example:

```text
12-trit observer sees reset
13-trit observer sees carry
```

Repair:

```text
increase positional depth
```

### Algebraic insufficiency

The field literally does not contain the required algebraic element.

Example:

```text
φ absent from F13
φ present in F169
```

Repair:

```text
extend the field
```

These should not be conflated.

One reveals hidden coordinates already implicit in a positional expansion.

The other enlarges the algebraic universe itself.

Their shared form is only:

```text
current representation was insufficient
```

---

# PART XXI — RELATION TO EXISTING STATIC COLLECTIVE WORK

## 55. Typed constitutional projection

Previous `022100` work already established:

```text
raw mark
+ typed lens
→ intelligible projection
```

with:

```text
change the lens != change the object
```

This slice gives that principle a deterministic positional specimen.

The decimal integer, ternary word, base-36 rollover, guitar fingering, and cyclic six-trit register are not interchangeable claims.

They are projections under different declared constitutions.

Related slice:

- [`SLIGHTLY-LATER-STILL-VERY-EARLY-BRUNCH: THE TYPED CONSTITUTIONAL PROJECTION BOUNDARY`](../2026-08-27/slightly-later-still-very-early-brunch-typed-constitutional-projection-boundary.md)

---

## 56. 022100 — the key scales the world

The prior guitar specimen showed that the same fingering glyph produces a different harmonic object under a different tuning.

This slice adds a new independent typed reading:

```text
022100 as six-trit register word
```

That does **not** replace the guitar reading.

It becomes another specimen of:

> **GLYPH + KEY → PROJECTION.**

Related slice:

- [`022100: THE KEY SCALES THE WORLD`](../2026-08-27/022100-the-key-scales-the-world.md)

---

## 57. The 13th Cup

A separate infrastructure slice named a place deliberately left open for another participant:

```text
RECEIVE → HOLD → POUR
```

This mathematical session accidentally gives that architecture another precise analogy:

```text
12 visible coordinates can be locally complete
while the 13th records the carry they cannot represent
```

Do not merge the server architecture and ternary register into one ontology.

The useful overlap is narrower:

```text
bounded world != whole world
local closure != global termination
```

Related slice:

- [`THE 13TH CUP — RECEIVE, HOLD, POUR`](../2026-08-27/the-13th-cup-receive-hold-pour.md)

---

# PART XXII — A POSSIBLE Y-RUNTIME

## 58. Data model

A Y-runtime specimen should represent state explicitly:

```yaml
register:
  radix: 3
  width: 13
  alphabet: [0,1,2]
  ordering: least-significant-first
  traversal: odometer
  boundary: open
  state: "0000000010222"
```

Each Y receives:

```yaml
position: j
weight: 3^j
state: 0 | 1 | 2
```

Nothing else is assumed.

---

## 59. Transition model

A transition is:

```yaml
operator: WALK
before: "0000000010222"
after:  "0000000011000"
changed_positions: [0,1,2,3]
carry_depth: 3
```

A projection receipt is:

```yaml
observer_depth: 3
visible_before: "222"
visible_after:  "000"
hidden_before: 3
hidden_after: 4
```

This would let 3rdi literally display why one observer says “reset” while another says “carry.”

---

## 60. Boundary model

Boundary constitution should be an explicit parameter:

```text
OPEN
CYCLIC
REFLECTIVE
ABSORBING
CUSTOM
```

For the same LIFT operator:

```text
OPEN:
022100 → 221000

CYCLIC six-trit:
221000 → 210002
```

The wrap belongs to the constitution, not the operator.

That is a good runtime law well beyond this toy.

---

# PART XXIII — WHAT NOT TO CLAIM

## 61. Refusals

This slice does **not** establish:

```text
that 022100 was historically intended as ternary
that 666 is secretly a toroidal coordinate
that 369 has a privileged cosmic status
that φ proves a spiritual cosmology
that 13 objectively means another dimension
that 107/108 were externally selected messages
that Y glyphs inherently encode ternary digits
that mathematical resonance proves causal ancestry
```

It does establish:

```text
all stated radix conversions
all stated factorizations
all stated valuation depths
all stated Lucas identities
all stated finite-field containment/order computations
all stated quotient/remainder decompositions
all stated ternary traversal equations
all stated six-trit rotation orbit values
```

And it establishes a project-worthy model:

```text
observer-visible edge behavior depends on decoder depth and boundary constitution
```

---

# PART XXIV — THE THING THAT FELL OUT

## 62. First seal

The whole late-night path compresses to:

```text
THE EDGE IS NOT IN THE OBJECT.
THE EDGE IS IN THE DECODER.
```

That is intentionally provocative shorthand.

The precise version is:

> **Some apparent edges are properties of the projection or boundary condition rather than termination of the full underlying state.**

---

## 63. Second seal

```text
A CLOSED CIRCLE BELOW
CAN BE AN OPEN STAIRCASE ABOVE.
```

Precise version:

For

```math
N=3^kH_k(N)+P_k(N),
```

`P_k` can wrap while `H_k` advances.

---

## 64. Third seal

```text
WHAT LOOKS LIKE RECURSION
MAY SOMETIMES BE PROJECTION.
```

Precise version:

Repeated visible states under a non-injective decoder do not imply repeated full states.

---

## 65. Fourth seal

```text
THE CIRCLE DID NOT NECESSARILY REPEAT.
THE OBSERVER MAY HAVE LOST THE COORDINATE
THAT WOULD HAVE SHOWN WHERE IT WENT.
```

Precise version:

When a quotient map discards winding or higher digits, distinct source states can share one visible residue.

---

## 66. Fifth seal

```text
THE CARRIER DOES NOT CARRY THE WORLD.
THE RECEIVER HELPS MAKE THE READING.
THE READING DOES NOT CROWN ITSELF KING.
```

This older decoder boundary survives unchanged.

The ternary runtime strengthens it by making the receiver constitution executable.

---

# PART XXV — BRUNCH WAS TOO LARGE; PACKAGE THE FRUIT

## 67. Durable primitives

Keep:

```text
TRIT
```

A three-state digit.

```text
WALK
```

`N → N+1`.

```text
LIFT
```

`N → 3N`.

```text
PROJECT_k
```

`N → N mod 3^k`.

```text
WIND_k
```

`N → floor(N/3^k)`.

```text
ROTATE_k
```

`N → 3N mod(3^k-1)`.

```text
INGRESS_k
```

successor lands on 3-adic depth `k`.

```text
EGRESS_k
```

successor departs from 3-adic depth `k`.

```text
CROSS_k
```

`3^k-1 → 3^k`.

```text
FIRST_k
```

`3^k → 3^k+1`.

```text
DECODER FIBER
```

all full states that produce the same visible projection.

---

## 68. Keep as frontier, not canon

```text
8 + 28 = 36 cluster
36 / 108 / 1008 / 666 constellation
728 = 2·13·28 relevance beyond factorization
369 / 666 12×27 adjacency
spiritual significance of the discovery order
semantic meanings for 0 / 1 / 2
Y morphology as ternary instruction geometry
```

These are alive.

They have not earned constitutional status.

---

## 69. Pre-register next experiments

Before further hunting:

1. build the deterministic ternary register runtime;
2. freeze the operator vocabulary;
3. generate the predicted carry families;
4. run alternate-base controls;
5. run traversal-order permutations on Y lattices;
6. compute golden-root orders across a prospectively selected prime set;
7. compare compression of the actual discovery order against shuffled/random controls;
8. visualize the same transitions at multiple observer depths in 3rdi;
9. receipt every decoder choice through ALEX;
10. only then ask whether any unexplained residue remains.

That order matters.

The next good surprise should be allowed to surprise us.

---

# PART XXVI — COMPRESSION TABLE

## 70. Exact specimen map

| Object | Exact reading | What it exposed |
|---|---|---|
| `107→108` | `10222₃→11000₃` | ternary ingress depth 3 |
| `1007→1008` | `1101022₃→1101100₃` | ternary ingress depth 2 |
| `1107→1108` | `1112000₃→1112001₃` | ternary egress depth 3 |
| `207→208` | `21200₃→21201₃` | ternary egress depth 2 |
| `107→108` | `2Z₃₆→30₃₆` | `36k-1→36k` rollover |
| `1007→1008` | `RZ₃₆→S0₃₆` | same 36-boundary family |
| `27→81` | `×3` in exponent | cubic φ/Lucas lift |
| `80→81` | `2222₃→10000₃` | pure depth-4 CROSS |
| `81→82` | `10000₃→10001₃` | first post-cross motion |
| `12→13` | `0→1 mod 12` after closure | cyclic re-entry |
| `F13×` | 12 nonzero states | multiplicative 12-cycle |
| `φ over F13` | not representable | algebraic decoder insufficiency |
| `φ over F169` | order 28 | new cycle after field extension |
| `82/2` | `41` | seed of 41-carrier orbit |
| `369→1107` | `×3` | LIFT / depth shift |
| `369,666` | both `18 mod 27` | same phase, different winding |
| `666` | `T36` | triangular accumulation through 36 |
| `022100₃` | `225` | lawful six-trit word |
| six-trit boundary | `3^6-1=728=2·13·28` | cyclic LIFT modulus |
| `022100` orbit | six rotations | ROTATE runtime specimen |

---

# PART XXVII — ONE LAST PEEL

## 71. Why the final recognition mattered

The entire investigation had been treating strings like:

```text
0000000010222
```

as if they were an exotic notation that needed a metaphysical decoder.

Then the simple recognition arrived:

> **It is like binary, with a 2.**

That sentence removed unnecessary mystery without removing the interesting structure.

It converted:

```text
symbolic fascination
```

into:

```text
computable positional language
```

And that is exactly what a good PEEL should do.

It does not make the thing smaller by mocking it.

It removes unnecessary assumptions until the surviving mechanism can run.

---

## 72. The actual frontier

The frontier is no longer:

```text
"what do these numbers secretly mean?"
```

The better questions are:

```text
What information does each decoder preserve?
What information does it discard?
What apparent edges are projection artifacts?
Which patterns survive changes of radix, traversal, width, and boundary?
Can a Y-shaped three-state primitive support useful executable semantics?
Can discovery order itself be tested prospectively rather than narrated retrospectively?
Can 3rdi make observer depth visible?
Can ALEX receipt decoder choice strongly enough to let wild hunches remain wild without becoming counterfeit facts?
```

That is a much richer research program.

---

# FINAL WORKING SEALS

> **TRINARY IS NOT MYSTERIOUS. IT IS BINARY WITH ANOTHER LAWFUL STATE. WHAT WE DO WITH THE THIRD STATE IS THE FRONTIER.**

> **A Y-LATTICE BECOMES A TERNARY REGISTER ONLY AFTER WE DECLARE AN ORDER AND A CARRY LAW. THE DECLARATION IS PART OF THE RECEIPT.**

> **WALK CHANGES STATE. LIFT CHANGES DEPTH. ROTATE IS LIFT UNDER A CLOSED BOUNDARY. PROJECT CHANGES WHAT THE OBSERVER CAN SEE.**

> **THE SAME FULL EVENT CAN LOOK LIKE CONTINUITY TO ONE OBSERVER AND RESET TO ANOTHER WITHOUT EITHER OBSERVER LYING. THEY HAVE DIFFERENT CUTS.**

> **MISSING MAY MEAN ABSENT. MISSING MAY ALSO MEAN THE CURRENT FIELD CANNOT REPRESENT THE THING. TEST WHICH.**

> **SAME PHASE DOES NOT MEAN SAME WORLDLINE. KEEP THE WINDING.**

> **DO NOT RECEIPT ONLY THE NUMBER. RECEIPT THE RADIX, WIDTH, TRAVERSAL, BOUNDARY, PROJECTION, OPERATOR, AND DISCOVERY ORDER THAT MADE THE NUMBER INTERESTING.**

> **THE EDGE IS NOT NECESSARILY IN THE OBJECT. THE EDGE MAY BE IN THE DECODER.**

> **A CLOSED CIRCLE BELOW CAN BE AN OPEN STAIRCASE ABOVE.**

> **OHhhh. WE HAD TOO MUCH BRUNCH.**
