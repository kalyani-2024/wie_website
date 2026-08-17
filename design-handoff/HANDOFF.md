# Handoff: IEEE WIE BPDC — Chapter Website (Home)

## Overview
Public website for the IEEE Women in Engineering student affinity group at BITS Pilani, Dubai Campus. Goals, in priority order: showcase past events and impact, act as the official info hub (events, council, contact), and attract industry sponsors. Primary audiences are prospective student members, industry sponsors, other WIE chapters, and prospective students/parents.

This handoff covers all **seven pages**: Home, About/Mission, Events (upcoming + past), Gallery, Council, Join us, and Partner/Contact. Home is the canonical source for the design language; the six subpages reuse it exactly.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing intended look and behavior, not production code to copy directly. The task is to **recreate these designs in the target codebase's existing environment** (React, Vue, Astro, etc.) using its established patterns, component library, and routing. If no codebase exists yet, pick the framework that fits (a static site generator is a good fit — the content is mostly editorial with no auth or app state) and implement there.

`Home.dc.html` is written for a component runtime and is not a plain standalone page. Read it as a spec: the markup structure and every inline style value are accurate and should be lifted verbatim into your own components/CSS.

## Fidelity
**High-fidelity.** Colors, typography, spacing, photo treatments, and animation timings are final. Recreate pixel-accurately using the codebase's own primitives. All factual content the chapter has not yet supplied is a visible bracketed placeholder (see Content placeholders) — keep them as placeholders, do not invent values.

## Screens / Views

### Home
**Purpose:** Establish credibility at a glance (real event photography + numbers), route visitors to events, council, sponsorship, and the membership form.

**Page shell**
- Max content width `1320px`, centered. Horizontal page padding `48px`. Body background `#F7F2F4`, body text `#1A1220`.
- Sections are separated by `1px solid rgba(26,18,32,.18)` top borders, not by shadow or card edges. There are no rounded corners anywhere on the page — every rectangle is square.
- Two sections are dark (photo bands): the hero and the membership CTA. Everything else is light.

**1. Hero (dark, full-bleed photo)**
- Container: `position: relative; min-height: 92vh; display: grid; grid-template-rows: auto 1fr auto; overflow: hidden`. Base background `#120A18`.
- Photo stack: four `<img>` absolutely positioned to fill, `object-fit: cover`. They crossfade automatically (see Interactions).
- Duotone treatment, two layers over the stack in this order:
  1. `background: #4A1263; mix-blend-mode: color; opacity: .82`
  2. `background: linear-gradient(to top, rgba(18,10,24,.94) 4%, rgba(18,10,24,.55) 46%, rgba(18,10,24,.72))`
- Header row (`padding: 24px 48px`, flex, space-between):
  - Left: WIE mark `40×40px` `object-fit: contain`, gap `13px`, then wordmark "WIE BPDC" — Gloock 19px, letter-spacing `.01em`, "WIE" `#F2E9F7`, "BPDC" `#D8A7F0`.
  - Right: nav links About / Events / Gallery / Council / Partner / Join. Jost 13px, weight 400, letter-spacing `.2em`, uppercase, gap `32px`. Links `#F2E9F7`; "Join" `#D8A7F0`.
- Headline block (`align-self: center; padding: 40px 48px; max-width: 1180px`):
  - Eyebrow: "IEEE Women in Engineering · BITS Pilani, Dubai Campus" — 12px, weight 500, letter-spacing `.34em`, uppercase, `#D8A7F0`, margin-bottom `28px`.
  - H1: "The women / engineering / what comes next." (three hard line breaks) — Gloock 400, `clamp(50px, 8vw, 122px)`, line-height `.95`, letter-spacing `-.02em`, `#F2E9F7`.
  - Body: Jost 300, 18px, line-height `1.66`, `rgba(242,233,247,.8)`, `max-width: 50ch`, margin-top `32px`.
  - Buttons row, gap `34px`, margin-top `40px`:
    - Primary: `padding: 17px 34px`, background `#F2E9F7`, text `#120A18`, 13px/500, letter-spacing `.18em`, uppercase, square corners.
    - Secondary: text link, `#F2E9F7`, same type, `border-bottom: 1px solid rgba(242,233,247,.4)`, `padding-bottom: 6px`.
- Caption line (bottom of hero, `padding: 0 48px 14px`): 11.5px, letter-spacing `.22em`, uppercase, `rgba(242,233,247,.72)`. Four captions are absolutely stacked at the same coordinates and crossfade in sync with the photos.
- Stats bar (bottom row of hero, still over the dark band): `display: grid; grid-template-columns: repeat(4, 1fr)`, `border-top: 1px solid rgba(242,233,247,.16)`, each cell `padding: 22px 28px` with `border-right: 1px solid rgba(242,233,247,.16)` except the last. Value: Gloock 34px, line-height 1, `#F2E9F7`. Label: 11px, letter-spacing `.22em`, uppercase, `rgba(242,233,247,.6)`, margin-top `4px`. Cells: Members `XXX` / Events run `XX` / Partners `XX` / Founded `20XX`.

**2. About (light)**
- `max-width: 1320px; padding: 108px 48px; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center`.
- Left column: eyebrow "Why we exist" (12px, letter-spacing `.3em`, uppercase, `#7A2496`); H2 Gloock 400 `clamp(30px, 3.9vw, 54px)`, line-height `1.12`, letter-spacing `-.015em`; body Jost 300 17px, line-height `1.74`, `rgba(26,18,32,.78)`, `text-wrap: pretty`; text link "Read our mission →" 13px, letter-spacing `.18em`, uppercase, `border-bottom: 1px solid rgba(26,18,32,.42)`, `padding-bottom: 6px`, margin-top `30px`.
- Right column: 2×2 photo grid, `gap: 16px`, every image `aspect-ratio: 4/3`, `object-fit: cover`, square corners. All four are the same size — this was an explicit request; do not stagger or feature one.

**3. Events (light)**
- `border-top: 1px solid rgba(26,18,32,.18); padding: 92px 48px`, inner `max-width: 1320px`.
- Header row: H2 "Selected events" Gloock 400 `clamp(32px, 4.4vw, 62px)`, letter-spacing `-.015em`; right-aligned link "Full archive →" 13px, letter-spacing `.18em`, uppercase, `#7A2496`. Margin-bottom `54px`.
- Grid: `repeat(3, 1fr)`, `gap: 24px`, `align-items: start`. All three cards are identical in structure and size — equal poster heights was an explicit request.
- Each card:
  - Poster plate: `aspect-ratio: 3/4`, background `#EDE3EA`, `display: grid; place-items: center; overflow: hidden`; the poster image is `width/height: 100%` with **`object-fit: contain`**. This is deliberate — the posters are the chapter's own artwork at mixed ratios, and `cover` clipped their printed copy. Never crop them.
  - Caption below the plate, never over it: kicker 11px letter-spacing `.24em` uppercase `#7A2496` (margin `18px 0 6px`); title Gloock 400 22px; description Jost 300 15px, line-height `1.55`, `rgba(26,18,32,.7)`.

**4. Membership CTA (dark, full-bleed photo)**
- `position: relative; overflow: hidden; padding: 118px 48px; text-align: center`. Base `#120A18`.
- Single background photo filling the section, then the same two duotone layers as the hero: `#4A1263` at `mix-blend-mode: color; opacity: .86`, then a flat `rgba(18,10,24,.68)`.
- Content `max-width: 760px`, centered: H2 Gloock 400 `clamp(32px, 4.6vw, 64px)`, line-height `1.06`, `#F2E9F7`; body Jost 300 17px `rgba(242,233,247,.8)`; primary button `padding: 18px 38px`, background `#F2E9F7`, text `#120A18`, 13px/500, letter-spacing `.18em`, uppercase.
- The button links to the chapter's **Google Form** (URL to be supplied).

**5. Footer (light)**
- `border-top: 1px solid rgba(26,18,32,.18); padding: 40px 48px`, flex space-between, wrap, gap `30px`.
- Left: BITS Pilani logo and IEEE WIE mark, both `height: 36px`, gap `18px`, unfiltered (see Assets).
- Right: single line, 12px, letter-spacing `.16em`, uppercase, `rgba(26,18,32,.62)`.

## Subpage pattern
Every page other than Home follows one shell, so build it once as a layout component:
1. **Header** — a flat `#120A18` bar, `padding: 24px 48px`, flex space-between. Left: WIE mark 40×40 + "WIE BPDC" wordmark, linking Home. Right: the six nav links, Jost 13px/400, letter-spacing `.2em`, uppercase, gap `32px`, `#F2E9F7`; the **current page** is `#D8A7F0`. Not sticky.
2. **Page-title band** — dark full-bleed photo section, `padding: 92px 48px 84px` (Join uses `100px 48px 92px`), same two duotone layers as Home's hero (`#4A1263` at `mix-blend-mode: color; opacity: .82`, then `linear-gradient(to top, rgba(18,10,24,.94) 4%, rgba(18,10,24,.62) 50%, rgba(18,10,24,.74))`). Inside: an eyebrow (12px/500, ls `.34em`, uppercase, `#D8A7F0`) and an H1 Gloock 400 `clamp(40px, 6.4vw, 96px)`, lh `.98`, ls `-.02em`, `#F2E9F7`, capped at 24–26ch. The entrance uses the same `gFade` animation. Each page uses a different photo: About → `genai-1`, Events → `escape-2`, Gallery → `btf-3`, Council → `genai-3`, Join → `btf-1`, Contact → `genai-2`.
3. **Light content sections** — `max-width: 1320px`, `padding: 84px 48px`, separated by `border-top: 1px solid rgba(26,18,32,.18)`. The recurring editorial pattern is a two-column `1fr 1fr` grid with `gap: 80px`: heading + eyebrow left, body/list right.
4. **Row lists** — used for the FAQ, Join's numbered steps, Contact's details, and Events' "also held" index. Each row is a grid with `padding: 22–26px 0` and a `1px solid rgba(26,18,32,.18)` top border; the last row also takes a bottom border. Hoverable rows get `background: #EDE3EA`.
5. **Closing CTA** — dark photo band, centered, `padding: 96–104px 48px`, duotone plus a flat `rgba(18,10,24,.68)`; H2 Gloock `clamp(28–30px, 4–4.2vw, 52–56px)` and one light button. Present on Home, About, Gallery, Join.
6. **Footer** — identical on all pages (see Home, section 5).

Page-specific notes:
- **Events** — "Coming up" is a 2-up grid of `#EDE3EA` panels holding placeholder events; "Past events" is a 3-up grid of the same poster-plate card as Home (`aspect-ratio: 3/4`, `object-fit: contain`, `#EDE3EA` plate) covering all six real posters; "Also held" is a `150px 1fr 150px` row index for events with no poster.
- **Gallery** — one section per event, each with a heading + date rule, then a `repeat(6, 1fr)` grid where images span 2–4 columns. Empty `#EDE3EA` tiles labelled "Photo placeholder" mark where more album photos go — keep them until filled.
- **Council** — two 4-up grids (core team, leads) of `aspect-ratio: 4/5` `#EDE3EA` plates. **No portraits exist yet**; each plate centers the WIE mark at `width: 38%; opacity: .45` as the placeholder. Swap for real photos when supplied.
- **Join** — the primary button and the closing button both point at the chapter's Google Form (URL to be supplied). The three-step list and FAQ are row lists.
- **Contact** — sponsorship two-column with a 2×2 stat grid, a 4-up "Partner logo" placeholder row (`aspect-ratio: 5/2`), and a contact table as a row list.

## Interactions & Behavior
- **Hero photo carousel (CSS-only, no JS).** Four images share one 26s loop; each is offset by `-6.5s` so exactly one is at full opacity at a time.
  - `@keyframes slide4 { 0%, 20% { opacity: 1 } 27%, 93% { opacity: 0 } 100% { opacity: 1 } }`
  - Applied as `animation: slide4 26s ease-in-out <delay> infinite, kb 26s linear <delay> infinite`, delays `0s, -19.5s, -13s, -6.5s`.
  - `@keyframes kb { from { transform: scale(1) } to { transform: scale(1.08) } }` — a slow Ken Burns push, one per cycle.
  - The four captions use `@keyframes cap4 { 0%, 20% { opacity: 1 } 26%, 94% { opacity: 0 } 100% { opacity: 1 } }` with the same delays, so caption and photo change together. They are absolutely positioned at the same coordinates — that stacking is intentional.
  - Reimplementation note: a JS/state carousel is acceptable if your framework prefers it, but keep the 6.5s dwell, the crossfade, and the paired caption change. Honor `prefers-reduced-motion: reduce` by holding the first photo and its caption.
- **Hero entrance.** `@keyframes gFade { from { opacity: 0; transform: translateY(20px) } to { opacity: 1; transform: none } }` on the headline block: `1.1s cubic-bezier(.16,.84,.3,1) .15s both`.
- **Links.** Default `#1A1220`; hover `#7A2496`. Define both globally — the chapter will add links later. On dark bands, links are `#F2E9F7` / `#D8A7F0`.
- **Nav.** Links are relative file paths between the seven pages (`About.dc.html` etc.) — convert to your router's routes. The current page is marked by color only (`#D8A7F0`), no underline or background. The header is not sticky in this direction.
- **Responsive.** Not yet designed. The layout is desktop-first at these values; the two-column About, the 4-column stats bar, and the 3-up events grid all need mobile stacking rules. Confirm breakpoints with the designer before shipping, and note phones are likely the dominant device for a student audience.
- No loading, error, or form-validation states — membership goes out to an external Google Form.

## State Management
None. The page is fully static; the carousel is CSS-driven. If the events list becomes CMS- or JSON-backed, model an event as: `title`, `kicker` (category · date), `description`, `posterUrl`, `href`.

## Design Tokens

**Colors**
| Token | Value | Use |
|---|---|---|
| Ground | `#F7F2F4` | Page background |
| Ink | `#1A1220` | Body text on light |
| Plum | `#7A2496` | Accent on light: eyebrows, kickers, links |
| Plate | `#EDE3EA` | Poster plate / photo placeholder fill |
| Dark ground | `#120A18` | Dark band base |
| Duotone | `#4A1263` | Photo tint, `mix-blend-mode: color` |
| Light ink | `#F2E9F7` | Text and buttons on dark |
| Light accent | `#D8A7F0` | Accent on dark |
| Rule (light) | `rgba(26,18,32,.18)` | Section and cell borders |
| Rule (dark) | `rgba(242,233,247,.16)` | Borders on dark bands |
| Body muted | `rgba(26,18,32,.7)` – `.78` | Secondary text on light |
| Body muted (dark) | `rgba(242,233,247,.6)` – `.8` | Secondary text on dark |

**Typography** — two families only.
- Display: **Gloock** (400 only). H1 `clamp(50px, 8vw, 122px)` / lh `.95` / ls `-.02em`; H2 `clamp(30px, 3.9vw, 54px)`–`clamp(32px, 4.4vw, 62px)` / lh `1.06–1.12` / ls `-.015em`; card title 22px; stat value 34px.
- Text/UI: **Jost** (300, 400, 500). Lead 18px/300/lh 1.66; body 17px/300/lh 1.7–1.74; small 15px/300/lh 1.55; UI 13px/400–500 ls `.18em–.2em` uppercase; eyebrow 12px/500 ls `.26em–.34em` uppercase; micro 11–11.5px ls `.22em–.24em` uppercase.
- Both from Google Fonts: `family=Gloock&family=Jost:wght@300;400;500`.

**Spacing** — section padding `92–118px` vertical / `48px` horizontal; column gap `80px`; grid gaps `16px` (photos) and `24px` (cards); stat cell padding `22px 28px`.

**Border radius** — `0` everywhere. **Shadows** — none.

## Assets
In `assets/` of this bundle. All supplied by the chapter.
- `wie-mark.png` — IEEE WIE roundel. **Render unfiltered.** It has an opaque filled disc, so `filter: brightness(0) invert(1)` collapses it to a blank white circle; it already reads on the dark bands as-is.
- `wie-bpdc-logo.png` — alternate chapter lockup, unused on Home.
- `bits-logo.png` — BITS Pilani logo, footer only.
- `posters/` — real event posters: `beyond-the-degree.png`, `escape-room.png`, `unsung-heroes.jpg`, `tech-taboo.png`, `lost-code.jpg`, `btf-x-wie.png`. Mixed aspect ratios; always `object-fit: contain` on a `#EDE3EA` plate.
- `photos/` — event photography: `genai-1/2/3.jpg`, `escape-1/2/3.jpg`, `btf-1/2/3.jpg`. Safe to crop with `cover`. Not yet optimized — compress and serve responsive sizes.
- No council portraits exist yet. Council cards use the WIE mark at `width: 40%; opacity: .5` on an `#EDE3EA` plate as a placeholder portrait; real photos come later.
- No icon set is used. Arrows are the literal character `→`.

## Content placeholders
Keep these visible and bracketed until the chapter supplies real values: founding year (`20XX`), member count (`XXX`), events count (`XX`), partner count (`XX`), mission statement, contact email, Instagram handle, semester label, Google Form URL, council names and roles, and details for Tech Taboo, The Lost Code, BTF × WIE, and Unsung HERoes.

## Files
All seven pages, in nav order. Each is component-runtime HTML — read as spec, not as shippable code.
- `Home.dc.html` — Home (approved direction; the source of every token below).
- `About.dc.html` — About / Mission.
- `Events.dc.html` — Events: coming up, past events poster grid, "also held" index.
- `Gallery.dc.html` — Gallery, grouped by event.
- `Council.dc.html` — Council: core team, leads, faculty advisor.
- `Join.dc.html` — Join us: benefits, three-step process, FAQ.
- `Contact.dc.html` — Partner & contact: sponsorship, past collaborators, contact table.
- `assets/` — logos, posters, event photography.
- Earlier explorations remain in the design project as `Home Direction A…I.dc.html` and `Directions.dc.html`. They are superseded and not included here. Direction G is Home's dark-palette ancestor if you want to see where the duotone came from.
