# Phase 6 Handoff — Pending Items

Everything code-side that Phase 6 covers without a real browser or
your input is done and committed. What's left needs either your
browser (audits/walkthroughs) or your input (content/business
decisions). Nothing here blocks continuing to use the site locally —
these are launch blockers, not dev blockers.

## Needs your browser (see step-by-step guide from Claude)

| # | Item | Owner |
|---|---|---|
| 1 | Lighthouse scoring (Performance/Accessibility/Best Practices/SEO) on production build | You, guided |
| 2 | `axe` DevTools accessibility scan on all 6 pages | You, guided |
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

## Done in Phase 6 (code)

- Scroll-reveal motion (`useScrollReveal` + `RevealCard`) across About, Products, ProductDetail, Contact, and homepage sections; respects `prefers-reduced-motion`
- `:focus-visible` keyboard focus rings
- Route-level code splitting (`React.lazy`/`Suspense`)
- Fixed a WCAG AA contrast failure (white/amber text on amber background, ~2:1) found in 5 places: both `Button` variants, the ProductDetail sidebar header and active nav link, the back-to-top button, and the Footer "About Company" link hover state
