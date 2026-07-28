# Phase 6 Handoff — Pending Items

Everything code-side that Phase 6 covers without a real browser or
your input is done and committed. What's left needs either your
browser (audits/walkthroughs) or your input (content/business
decisions). Nothing here blocks continuing to use the site locally —
these are launch blockers, not dev blockers.

## Needs your browser (see step-by-step guide from Claude)

| # | Item | Owner |
|---|---|---|
| 1 | Re-run Lighthouse in an **Incognito window** (no extensions) for a clean Performance number — prior runs were flagged by Lighthouse itself as skewed by installed Chrome extensions | You, guided |
| 2 | Confirm "buttons lack accessible name" / "tabindex > 0" findings from the extension-affected Lighthouse run — a clean axe-core scan (headless, no extensions) found 0 instances of either across all pages and interaction states, so these are likely extension-injected content, not app bugs. Re-check in Incognito | You, guided |
| 3 | Keyboard-only navigation walkthrough (Tab/Shift+Tab/Enter/Escape) | You, guided |
| 4 | Responsive breakpoint check (375px / 768px / 992px / 1440px) | You, guided |
| 5 | Cross-browser check (Chrome, Firefox, Safari) | You |

## Needs your content/sign-off (business decisions, not code)

| # | Item | Impact |
|---|---|---|
| 6 | Real counter values (Years Experience, Power Houses Served, Services Provided) | Currently placeholder numbers in `data/stats.ts` |
| 7 | Needle Valve product image | Card/detail page shows placeholder |
| 8 | Real social media URLs | Social icons hidden until `data/site.ts` `socials` is populated |
| 9 | Getty Images licence confirmation (hero slide photos) | Hero images cannot ship without proof of licence or replacement |
| 10 | Client logo authenticity confirmation | Logo marquee cannot ship until each logo is confirmed as a real client |
| 11 | Real project case studies | `data/projects.ts` has placeholder entries |
| 12 | Real contact form endpoint (Formspree/Web3Forms/Netlify/serverless) | Form UI works but doesn't actually deliver messages yet — see `FORM_ENDPOINT` in `components/forms/ContactForm.tsx` |
| 13 | Confirm Google Maps embed pin location | Currently a generic area query for Sector-79, Greater Faridabad — not a precise pin |
| 14 | Quality Statement / mission photographs | Currently placeholder image paths in `data/about.ts` |
| 15 | CTA band background photograph | Currently a placeholder path in `CtaBand.tsx` |
| 16 | Inner-page banner background photograph | Currently a placeholder path in `PageBanner.tsx`; also the cause of one open axe contrast finding on the breadcrumb text — resolves once a real image is supplied |

## Done in Phase 6 (code)

- Scroll-reveal motion (`useScrollReveal` + `RevealCard`) across About, Products, ProductDetail, Contact, and homepage sections; respects `prefers-reduced-motion`
- `:focus-visible` keyboard focus rings
- Route-level code splitting (`React.lazy`/`Suspense`)
- Fixed a WCAG AA contrast failure (white/amber text on amber background, ~2:1) found in 5 places: both `Button` variants, the ProductDetail sidebar header and active nav link, the back-to-top button, and the Footer "About Company" link hover state
- Fixed an infinite network-request storm: every broken placeholder image's `onError` fallback had no guard against the fallback itself failing, and browsers retry a load when `src` is reassigned to the same value after a failed attempt — this made the whole site unusable (page appeared to hang/go blank) and broke Lighthouse entirely. Shared `imageFallback()` helper now guards every instance (13 files)
- Fixed a second, unrelated WCAG AA contrast failure via axe-core: amber used as readable text (not background) in nav links, eyebrow labels, and "read more" links. Added `--color-primary-text` (a darker AA-compliant amber) for text contexts, left backgrounds/borders untouched
- Fixed empty `<title>` on all 7 product detail pages — `react-helmet-async` doesn't concatenate multi-child `<title>` content correctly; needed a template literal instead of `{expr} text` mixed children
- One contrast finding intentionally left as-is: the PageBanner breadcrumb's active-page text sits on a dark image overlay by design and is correct there — it only fails right now because the real banner background image doesn't exist yet, so the overlay renders over plain white. Resolves on its own once a real image ships (see item 9-style blockers below); do not "fix" this by darkening the text, that would break it once the real image loads
