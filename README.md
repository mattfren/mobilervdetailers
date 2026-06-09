# Mobile RV Detailers Website

Production static Astro website for Mobile RV Detailers, a Canton, TX mobile RV exterior care business.

## Stack

- Astro static output
- Local image assets only
- No backend, database, authentication, custom payment code, or custom calendar logic
- Cloudflare Pages target: `npm run build` with `dist` output
- Node.js pinned to `22.16.0` for Cloudflare Pages builds

## Commands

```bash
npm install
npm run dev
npm run build
npm run audit:production
```

`npm run audit:production` builds the site and checks generated output for required package language, CTA links, internal link health, metadata, robots/sitemap files, missing local assets, and public placeholder leakage.

## Deployment

Cloudflare Pages settings:

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Root directory: /
Node version: 22.16.0
```

Production domain:

```text
https://mobilervdetailers.com
```

## Business Configuration

All customer-facing action links live in `src/data/site.ts`.

- Quote form: Tally
- Phone/text: `(903) 502-4242`
- Payment: external invoice/payment portal only after a quote or invoice is confirmed
- Social/review links: Facebook, Instagram, Yelp, Google Business, Google Reviews

Cloudflare runtime/deployment settings live in `wrangler.jsonc`.

## Launch Guardrails

- Use starting prices only; final pricing is quote-confirmed.
- Customer-location water and electricity are currently required.
- Do not claim licensed/insured status unless separately confirmed.
- Do not promise guaranteed results or "like new" restoration.
- Do not claim polishing, buffing, ceramic coating, paint correction, gel coat restoration, heavy compounding, or full oxidation restoration.
- Interior cleaning is case-by-case only, not a standard package.
