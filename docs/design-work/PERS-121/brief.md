---
issue: PERS-121
lane: marketing
surface: whole site (Home, जीवनी, Gallery, Videos, Media, Apni Rasoi, Contact)
viewports: 390 (primary), 768, 1280
date: 2026-09-11
---

# Brief

**Audience.** Constituents of Jalaun / Bundelkhand on low-end Android phones, reading Hindi. Second audience: press and party workers on desktop looking for the biography, photos and a phone number.

**Job.** Recognise the person in one second, reach him (call), and browse proof of work (timeline, photos, videos, press, Apni Rasoi).

**Desired action.** Tap Call. Secondary: read the biography.

**Constraints.** Static site, zero client framework, local media only (129 gallery + 121 press photos, 79 mp4, 10 CMS images). Hindi copy is the copy; nothing invented. No Twitter/Facebook embeds (they cost the first fold on 3G and the accounts may be dead).

**Non-goals.** No CMS, no contact form, no English translation, no news feed.

**Success signal.** Lighthouse mobile performance >= 90 on the built Home; the fold renders name + portrait + Call on a 390px viewport without scrolling.

**Ground truth.** 2023 site (Wayback 2023-01-26) and the Gatsby snapshot on `feat/static-content`: saffron gradient canvas, cut-out portrait, Hindi heading, bio card, timeline, gallery/video/press carousels, contact block. Long Hindi lines wrap badly at 390px in the old build; the timeline cards clipped text.

## Tools
- Rajdeep's saved Mobbin anchors — used: Tier 0 signature from the taste library (Wise, Moonly, Breathwrk, Life Reset, Quizlet/Klarna light-with-sky) | no new links pasted this session
- Mobbin MCP search — used: one `search_sections` pull (PayPal leadership, Wix Learn, MindMarket heroes) for hero composition; low value, cited only for the "portrait owns the fold" pattern
- Award galleries + taste library (Axis 1) — used: Emarat Realty (photo owns the fold, CSS-only motion), Aardvark Book Club (loud light canvas), Quizlet/Klarna (gradient sky fading to off-white)
- Taste skills (L1 floor; L4 palette if any) — used: `frontend-design`; no L4 palette
- Anti-slop pass (pipeline §9 + design-motion-principles audit) — used: one page-load choreography only, no per-section reveals, no eyebrow labels, no single-word accents
- shadcn/ui or rn-reusables — skipped: static Astro site, no component library needed
- Data inventory (## Data block) — none: the surface shows no data
- Charts — skipped: no data
- Remotion — skipped: no video to produce
- Motion → GSAP → Rive → Lenis — rung 1 (CSS keyframes, scroll-snap); reduced-motion turns the choreography off
- R3F / Spline / canvas-ui — skipped: mobile 3G budget; the portrait is the hero object

## References
- Axis 1 (taste): Emarat Realty — one photograph owns the fold, one line of serif, motion on rung 1. Borrow: the fold is the portrait, not a layout. Does not fit: sunset photography, we have a cut-out.
- Axis 1 (taste): Quizlet / Klarna home (Tier 0) — a gradient sky at the top fading into off-white. Borrow: light can carry atmosphere. Does not fit: card kits.
- Axis 1 (taste): Wise onboarding (Tier 0) — full-bleed brand colour, bold condensed type. Borrow: saffron as a canvas, not a button colour. Does not fit: full-bleed across a long reading site.
- Axis 2 (pattern): the 2023 site itself — nav Home / जीवनी / Gallery / Videos / Media / Apni Rasoi, contact block with address, phone, email. Structure kept; carousels dropped for scroll-snap rows.

## Comparable directions

| | A — Bhagwa poster | B — Jan Sevak (paper + saffron sky) | C — Bundelkhand dusk |
|---|---|---|---|
| Thesis | The party colour is the canvas; the site reads as a rally poster | A light, trustworthy page with a saffron sky over the fold; the portrait is the one glowing object | Dark charcoal with amber glow, portrait lit like a stage |
| Canvas | Full-bleed saffron `#F26B1D` with grain | Paper `#FBF7F0`; sky gradient saffron → paper in the top 60vh; radial glow behind the portrait | `#17130F` charcoal; amber `#F0A040` bloom |
| Type | Khand 700 (condensed) + Mukta | Martel 800 display + Mukta body | Khand 600 + Mukta, gold rules |
| Graphic device | Torn-paper edges between sections | Year seals on the timeline; tricolour hairline above the footer | Gold hairlines, glow rings |
| Motion | Hero slide-in from the left | One load choreography: glow blooms, portrait rises, three headline lines stagger | Glow pulse on load |
| Trade-off | Loud for 9,000 characters of biography; saffron text contrast on mobile is hard | Quietest of the three; relies on the portrait and type to carry character | Dark reads "app" not "public servant"; older phones render dark gradients with banding |

## Selection
Rajdeep delegated the pick this session ("you can be the designer… I can review the design fully"). **B — Jan Sevak.** Why: a public figure's site is a trust surface (his own rule: trust goes light), the biography is long-form reading, and the saffron sky plus glow keeps the atmosphere his taste asks for without a flat page. A and C are recorded here, not built; he can send it back to either.

## Implementation contract
- Canonical: this brief + the build on `feat/astro-rebuild`. Viewports 390 / 768 / 1280.
- Tokens: paper `#FBF7F0`, ink `#1B1A17`, saffron `#F26B1D`, deep saffron `#B8430F`, green `#1E7A4C` (tricolour rule only), gold `#D9A441` (seals only). Display Martel 700/800, body Mukta 400/600, self-hosted via fontsource (Devanagari + Latin), fold fonts preloaded.
- States: every page has content (no empty states); videos are poster images that swap to a player on tap (no video bytes before a tap); images lazy below the fold with width/height set.
- Accessibility: focus rings visible, Hindi `lang="hi"`, alt text from captions where they exist, otherwise decorative.
- Motion: CSS only; `prefers-reduced-motion` disables the load choreography and scroll-snap smoothness.
- Non-goals as above.

## Evidence (2026-09-11, built output via `astro preview`, Lighthouse 12 mobile preset, M-series Mac with other work running)

| Route | Perf | A11y | BP | SEO | LCP | Page weight |
|---|---|---|---|---|---|---|
| `/` (3 runs) | 77 / 82 / 92 | 100 | 100 | 100 | 3.3–4.8 s | 740 KiB |
| `/about` | 100 | 100 | 100 | 100 | 1.5 s | 410 KiB |
| `/gallery` | 98 | 100 | 100 | 100 | 2.4 s | 2,046 KiB |
| `/videos` | 100 | 100 | 100 | 100 | 1.8 s | 899 KiB |
| `/media` | 97 | 100 | 100 | 100 | 2.4 s | 807 KiB |
| `/apni-rasoi` | 85 | 100 | 100 | 100 | 4.0 s | 524 KiB |
| `/contact` | 87 | 100 | 100 | 100 | 3.2 s | 383 KiB |

Home run-to-run spread is the machine, not the page (FCP 0.8–3.3 s on an identical build). Re-measure on Vercel before reading more into it. Known: Apni Rasoi CLS 0.09 is the Devanagari font swap reflowing the text block.

Screenshots at 390 and 1280: `evidence/`. Old Gatsby build for comparison: Wayback 2023-01-26 and the `feat/static-content` branch.

## Cut on purpose
- Twitter timeline and embedsocial iframes (third-party, slow, accounts unverified).
- Terms / Privacy pages: never archived, nothing to restore.
- Footer credit "Social The VPM" replaced with the person's own name; agency credit can return if wanted.
