# AGENTS.md - Mobile RV Detailers Website

## Mission

Build and maintain a premium static Astro website for Mobile RV Detailers, a Canton, TX-based mobile RV detailing business.

## Source of truth

Use the build kit in `build-kit/` plus confirmed local assets as source material. If a business input is missing, use a safe placeholder and list it in `TODO_LAUNCH_REVIEW.md`.

## Hard constraints

- Static Astro site only.
- No backend, database, authentication, custom payment code, or custom calendar logic.
- Quote, booking, payment, review, email, and social actions must use configured links in `src/data/site.ts`.
- Use local assets only.
- Do not invent reviews, certifications, insurance claims, exact prices, or service areas.
- Optimize for Cloudflare Pages with `npm run build` and `dist` output.
