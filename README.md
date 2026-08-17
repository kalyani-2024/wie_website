# IEEE WIE BPDC — chapter website

Public website for the IEEE Women in Engineering student affinity group at BITS Pilani,
Dubai Campus. Seven pages: Home, About, Events, Gallery, Council, Join us, and
Partner & contact.

Built with [Astro](https://astro.build) as a fully static site — the content is editorial,
with no auth, forms or app state. The membership flow goes out to an external Google Form.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built site
```

Node 20+ is required.

## How it is organised

```
src/
  assets/          photos, posters and logos (optimised at build time)
  components/      SiteHeader, SiteFooter, PageHero, CtaBand, PosterCard
  layouts/Base     <head>, fonts, global stylesheet
  pages/           one file per route
  styles/global.css  design tokens and every shared primitive
  site.ts          nav, the Google Form URL, and the unfilled placeholders
design-handoff/    the original design references and HANDOFF.md
```

`src/styles/global.css` is the single source of design truth. Every colour, size and
timing in it comes verbatim from the handoff. Tokens live on `:root`; the rest of the file
is the primitives the pages compose (`.h2`, `.plate`, `.row-step`, `.stats`, …).

The six subpages share one shell: `SiteHeader` + `PageHero` + light sections + optional
`CtaBand` + `SiteFooter`. To add a page, copy the smallest existing one (`council.astro`)
and add the route to `nav` in `src/site.ts`.

## Content still to be supplied

These are deliberately visible and bracketed on the live site. Do not invent values —
replace them when the chapter supplies the real ones.

| What | Where |
|---|---|
| Google Form URL | `FORM_URL` in `src/site.ts` (used on Home, Join ×2) |
| Email, Instagram, LinkedIn | `placeholders` in `src/site.ts`, plus `contact.astro` |
| Member / event / partner counts, founding year | `placeholders` in `src/site.ts` |
| Mission statement | `index.astro`, `about.astro` |
| Council names, roles, portraits, term, faculty advisor | `council.astro` |
| Upcoming events | `events.astro` |
| Details for Tech Taboo, The Lost Code, BTF × WIE, Unsung HERoes | `events.astro` |
| Sponsorship tiers, partner logos | `contact.astro` |
| More album photos | the `.tile` placeholders in `gallery.astro` |

Council portraits: each plate currently centres the WIE mark at 38% / opacity .45. Swap in
a real photo and drop the `.portrait img` sizing.

## Images

Source photography is unoptimised (up to 3.7MB a frame). Astro's `<Image>` downscales it
and emits webp with `srcset` at build time — the largest hero frame ships at ~420kB
instead of 3.7MB. Because of this, images must be imported from `src/assets/`, not
referenced from `public/`.

Event posters are always `object-fit: contain` on an `#EDE3EA` plate. This is deliberate:
they are the chapter's own artwork at mixed aspect ratios, and `cover` clipped the printed
copy. Never crop them.

## Deviations from the handoff

Everything else is pixel-faithful. Three things are additions rather than reproductions:

1. **Responsive rules.** The handoff states responsive was not yet designed and asks that
   breakpoints be confirmed with the designer. The desktop values are untouched; stacking
   rules at 1080 / 860 / 560px are at the end of `global.css`, in one block, ready to be
   revised. **These still need the designer's sign-off**, and phones are likely the
   dominant device for a student audience.
2. **Accessibility.** A skip link, visible focus rings, `aria-current` on the active nav
   item, and a `<main>` landmark. None are in the handoff; none change the visual design.
3. **"Also held" rows** on Events are static rows, not links — in the design they pointed
   back at the Events page itself. They keep the hover tint and become links once each
   event has somewhere to go.

Two implementation notes worth knowing if you edit the CSS:

- Astro stamps intrinsic `width`/`height` attributes on every `<img>`. Those are
  presentational hints with a real used value, so `aspect-ratio` is silently ignored unless
  the height is explicitly `auto`. Any image sized by ratio needs the `height: auto` rule
  near the top of `global.css`.
- The hero carousel is CSS-only, per the handoff: one 26s loop, four photos offset by
  -6.5s each, captions on a matching keyframe so photo and caption change together.
  `prefers-reduced-motion: reduce` holds the first photo and its caption.

## Deployment

Deployed on Vercel from this repository. Pushes to `main` deploy to production;
`vercel.json` pins the framework, output directory and clean URLs.
