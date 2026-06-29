# Alicia Underwater — Landing Page Plan

## Project summary

Landing page for a friend's photography/freediving community-business in Costa Brava, Spain (built/maintained from Barcelona). She combines underwater photography/videography with freediving, serving four audiences: photographers with no diving experience, divers with no photography experience, people with both, and tourists wanting either/both experiences.

This file is the locked scope from planning. Implementation has not started — do not build until explicitly asked.

## Content / page structure

Single page, anchor-linked sections:

1. **Navbar** — transparent over the hero, becomes solid on scroll. Logo, anchor links to sections below, EN/ES language toggle.
2. **Hero** — full-bleed underwater photo/video background, tagline, CTA button (e.g. "Book an experience" or scroll-to-contact).
3. **Story / About** — who she (and the project) is, why this photography+freediving combo exists.
4. **What we offer** — short cards for the distinct audience types: photography lessons for divers, dive intro for photographers, combined sessions, tourist day experiences in Costa Brava.
5. **Portfolio** — photo/video grid of her work.
6. **Contact** — form, location (Costa Brava; based in Barcelona), social links.
7. **Footer**.

Open items (not yet decided — confirm before/during implementation):
- Actual business/brand name (placeholder: "Alicia Underwater", from project folder name).
- Final copy for story, offerings, and CTA text.
- Source photos/videos for the portfolio and hero background.
- Designer's mockup/Figma — design comes from an external designer; build should match it pixel-for-pixel via Tailwind utility classes.

## Technical decisions

- **Framework**: Next.js, App Router, default rendering (no `output: 'export'`). Routes render static at build time automatically as long as no dynamic functions (`cookies()`, `headers()`, uncached `fetch`) are used — true for every section of this page, so the whole site is static with zero extra config.
- **Styling**: Tailwind CSS, for full pixel-level control matching the designer's mockup.
- **Components**: shadcn/ui for accessible primitives (mobile nav drawer, dialog, form inputs) — copy-paste, unstyled by default, restyled with Tailwind to match the design rather than fighting it.
- **i18n**: English + Spanish. Lightweight approach — JSON dictionaries + a manual language toggle, not a full i18n routing library (overkill for a single page).
- **Contact form**: Formspree (free tier). Chosen over Netlify Forms because Netlify Forms requires static-HTML-detectable forms at build time, which is awkward with Next.js client components.
- **Portfolio content management**: static, managed via git/code by the developer (v1). No CMS — simplest option, revisit later if the friend needs to self-update.
- **Deployment**: Netlify free tier, via Netlify's official Next.js build plugin (`@netlify/plugin-nextjs`). Handles the App Router's default static/server split automatically — no manual export step.

