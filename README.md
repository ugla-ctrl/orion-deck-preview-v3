# Orion Deck — Draft Workspace

> **This is a draft/working repo**, forked from the Orion fundraise deck
> (`ugla-ctrl/imxp-fundraise-deck`, live at orion.imxp.org) as of the Oct 3
> 2026 advisor-feedback rewrite. The live site was rolled back to the prior
> version; this repo holds the in-progress rewrite so it can be iterated on
> without touching production. Not deployed anywhere yet.

---

# IMXP — Info Deck

A hand-coded, editorial web deck for IMXP's raise. Built verbatim from the
storyboard tab of the IMXP Content Editor (Google Sheet): the full investor
narrative — hook → proof → reach → market → problem → solution → business →
team → horizon.

## Design — its own identity

Deliberately distinct from IMXP's other decks (which run Archivo + a pastel
"Canva pill" palette on dark cinematic photo slides). This one is an
**editorial / archival-cosmic** system:

- **Type:** Fraunces (high-contrast display serif, italic accents) + Space
  Grotesk (labels & body). Big figures set in the serif.
- **Palette:** warm bone paper, near-black ink, and a single solar-gold accent
  (with muted sky-blue / rust / sage for data), photography carrying the rest.
- **Layout:** magazine masthead + running foot, hairline rules, a giant index
  numeral, big serif numbers, and a **photographer credit** on every photo
  slide. A warm duotone grade unifies many different images into one deck.
- **8 slides**, 16:9, self-contained (one CDN dependency: Google Fonts).

## Photography

Fresh curation from the **IE26 Media Finder** library (7,752-file Iceland
Eclipse 2026 archive) — no images recycled from the other decks. Credited to
the original photographers (Whitney Petters, The Bailey Perspective, Andrianna
Kaimis, Monica Cazes, Daniel, and more). Team headshots in `media/people/`.

## View

```
https://ugla-ctrl.github.io/imxp-fundraise-deck/
```

## Navigation

- **← / →**, **Space / Page Down**, **Home / End**
- Swipe on touch, scroll / trackpad, or the dot rail
- Deep-link to any slide with `#<n>`

## Slide order

1. Cover — Scaling Human Experiences
2. Thesis — demand for real world experiences is growing
3. The Problem — tools aren't growing to match demand
4. The Solution — Orion, with the technology demo video
5. Where it Stands — live / in build / proving ground
6. All Upcoming Events — the full slate
7. The Team — the people who have already done this
8. Close — thank you

No funding ask on the page, per Mitch — the close is contact only.

## Editing

Content lives directly in `index.html` (the `.slide` sections). To swap a
photo, drop a new file into `media/photos/` and update the slide's `background-image`
and its footer credit.

## Open items (blanks from the storyboard, to fill from IMXP's own numbers)

Flagged in the source as "blanks you must fill" — **not** invented here:

- Engineering headcount today (Team).
- IMXP's own presale curve, repeat-purchase rate, blended acquisition cost
  (Business).
- The before-picture: production hours / headcount for Texas Eclipse (Problem).
