# Launch Review - Mobile RV Detailers

Current status: production-ready for Cloudflare Pages from the static website repo.

This file is kept as the launch-review record required by the project instructions. It should list only true operational decisions or future enhancements, not blockers already solved in the site.

## Verified For Launch

- Static Astro site only.
- `npm run build` outputs to `dist`.
- Quote requests use the published Tally form: `https://tally.so/r/xXvkqJ`.
- Phone and text actions use `(903) 502-4242` / `+19035024242`.
- Payment link is presented as invoice/payment-request only: `https://pay.mobilervdetailers.com/`.
- Google Business, Google review, Facebook, Instagram, and Yelp links are configured in `src/data/site.ts`.
- Canton, TX is the confirmed base.
- Service-area language uses approximate drive-time zones instead of unsupported city pages.
- Customer-location water and electricity are stated as required.
- Package ladder is aligned to the approved model:
  - Normal Wash: starting at `$300` / `$10 per ft`
  - Wash + Roof or Awning: starting at `$450` / `$15 per ft`
  - Full Exterior Detail: starting at `$600` / `$15-$20 per ft`
  - Custom RV Detail Quote: quote required
- RV Care Club pricing is listed as `$79/month` up to 35 ft and `$99/month` for 36-45 ft.
- Real supplied photos are used for hero, proof, service cards, gallery, logo, and favicon.
- Public placeholder SVG assets were removed from `public/images/optimized`.
- No licensed/insured, certification, guaranteed-result, fake service-area, fake review, or unsupported restoration claims are published as confirmed facts.
- `robots.txt` and `sitemap.xml` are present.

## Owner-Controlled Operational Decisions

These do not block the static site from launching because the site uses safe quote-first wording.

- Public email is intentionally not listed unless the owner decides to publish one later.
- No public street address is shown; the site identifies Canton, TX as the base.
- Exact travel-fee amount and route exceptions are confirmed during quote review.
- Deposit, cancellation, no-show, refund, warranty, satisfaction, and weather-policy details are confirmed during quote/scheduling until formal policy text is approved.
- Membership service-credit rules and edge-case terms should be confirmed directly before enrollment.
- Review snippets and selected photo crops should continue to be owner-approved as the gallery evolves.
- Analytics are not installed. If Cloudflare Web Analytics, GA4, pixels, or cookies are added later, update the privacy policy first.

## Production Commands

```bash
npm run build
npm run audit:production
npm audit --audit-level=moderate
```
