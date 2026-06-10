# Final Punchlist

Date: June 10, 2026

Status: code/site punchlist cleared. Remaining items are business or platform actions that should be completed outside the static Astro repo before final domain cutover.

## Fixed in this audit pass

- Raw source photos were deployed from `public/images/originals`, adding about 25 MB of unnecessary public payload and exposing original files. Source assets were moved to `source-assets/images/originals`, the manifest was updated, and `scripts/production-audit.mjs` now fails if raw originals return to `public/`.
- Contact and Book pages still put a phone-call button beside the quote form. Those primary-card call buttons were removed so Request Quote remains the dominant conversion path. The phone number remains available in the header and footer.
- The default CTA headline was generic. It now reinforces the quote-first action: "Get a clear RV detailing quote before the work starts."
- About-page copy used soft claims like "more affordable" and ambiguous "full-service" wording. It now uses safer, more precise language.
- The AI call assistant knowledge base had stale pricing guidance. It now states that exact prices are not public and RV Care Club is not public-facing until owner approval.

## Remaining launch gates outside this repo

- Confirm Tally notifications and owner workflow for `https://tally.so/r/xXvkqJ`.
- Decide whether to keep or replace `https://pay.mobilervdetailers.com/` before publishing the new site broadly.
- Preserve existing email/DNS records before moving `mobilervdetailers.com` and `www.mobilervdetailers.com` to Cloudflare Pages.
- Attach production custom domains in Cloudflare Pages only after DNS is ready.
- Keep prices, reviews, RV Care Club, and licensed/insured language hidden unless separately approved and verifiable.
- Owner should give final approval that all displayed RV photos can be used publicly.

## Cleared checks

- `npm run build` passed.
- `npm run audit:production` passed.
- `npm audit --audit-level=moderate` passed with zero vulnerabilities.
- Browser QA passed across 9 routes at 320, 390, 768, 1024, and 1440 px widths.
