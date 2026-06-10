# Launch Review - Mobile RV Detailers

Current status: Cloudflare Pages preview is deployed and the static site is launch-ready for owner review. Production DNS cutover for `mobilervdetailers.com` and `www.mobilervdetailers.com` is still owner-controlled.

This file is the launch-review record required by the project instructions. It lists only true operational decisions, remaining approvals, and future enhancements.

## Verified For Launch

- Static Astro site only.
- `npm run build` outputs to `dist`.
- `npm run audit:production` passes.
- Quote requests use the published Tally form: `https://tally.so/r/xXvkqJ`.
- Phone and text actions use `(903) 502-4242` / `+19035024242`.
- Payment link is shown only as an invoice/payment-request action: `https://pay.mobilervdetailers.com/`.
- Google Business, Facebook, Instagram, Yelp, Messenger, and Google review URLs are configured in `src/data/site.ts`.
- Canton, TX is the confirmed base.
- Service-area language uses approximate drive-time zones instead of unsupported city pages.
- Customer-location water and electricity are stated as required.
- Package ladder is quote-only unless `pricesApproved=true`:
  - Normal Wash
  - Wash + Roof or Awning
  - Full Exterior Detail
  - Custom RV Detail Quote
- RV Care Club pricing, discounts, service credits, savings claims, inspections, and locked-in pricing are hidden unless `careClubApproved=true`.
- Review snippets/testimonials are hidden unless `reviewsApproved=true`.
- Licensed/insured language is hidden unless `licensedInsuredApproved=true`.
- Real supplied photos are used for hero, proof, service cards, gallery, logo, and favicon.
- No certification, guaranteed-result, fake service-area, fake review, exact-price, or unsupported restoration claims are published as confirmed facts.
- `robots.txt` and `sitemap.xml` are present.

## Owner Approvals Still Needed

- Approve DNS cutover from the old GoDaddy-hosted root/www records to the new Cloudflare Pages project.
- Confirm whether exact public starting prices should be shown, then set `pricesApproved=true` and restore approved price labels if desired.
- Confirm whether RV Care Club public pricing, discounts, benefits, inspection language, service-credit rules, and savings examples should be published, then set `careClubApproved=true` only after terms are final.
- Confirm whether review snippets/testimonials are approved for publication, then set `reviewsApproved=true`.
- Confirm licensed/insured status before setting `licensedInsuredApproved=true`.
- Decide whether to keep the current GoDaddy pay link or replace it with a new lightweight manual payment-link flow.
- Approve any formal deposit, cancellation, no-show, refund, guarantee, weather, and travel-fee policy language before adding stronger terms.
- Decide whether to publish a public email address.
- Approve future analytics before adding Cloudflare Web Analytics, GA4, pixels, or cookie-triggering scripts.

## Production Commands

```bash
npm run build
npm run audit:production
npm audit --audit-level=moderate
```
