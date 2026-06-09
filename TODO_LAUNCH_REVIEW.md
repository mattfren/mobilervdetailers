# TODO Launch Review - Mobile RV Detailers

This site builds and previews, but the following items must be filled or approved before public launch.

## Missing business inputs

- Confirm phone number: `(903) 502-4242` and `tel:+19035024242`.
- Add primary email address in `src/data/site.ts`.
- Confirm public service address, or confirm that no public street address should be shown.
- Founded year, Carl and Jana Fields, and family-owned language are approved and published.
- Confirm whether faith-based language is allowed, and where.
- Confirm licensed/insured status before adding any such claim.
- Confirm guarantee, satisfaction, warranty, refund, cancellation, no-show, deposit, and weather policies.

## Conversion URLs

- Tally quote form build instructions were added in `TALLY_QUOTE_FORM_BUILD.md`.
- Quote requests use the published Tally form: `https://tally.so/r/xXvkqJ`.
- Facebook Messenger remains available as a secondary contact option: `https://m.me/105565861892684`.
- Booking currently routes to the contact page because no approved booking/calendar URL has been provided.
- Payment URL restored from previous GoDaddy site: `https://pay.mobilervdetailers.com/`. Confirm this is still the desired public invoice/payment link.
- Google Business link added in `src/data/site.ts`.
- Exact Google review link added in `src/data/site.ts`.
- Facebook connector restored from previous GoDaddy site: `https://www.facebook.com/105565861892684`.
- Instagram connector restored from previous GoDaddy site: `https://www.instagram.com/etxmobilervdetailers/?hl=en`.
- Yelp profile URL added: `https://www.yelp.com/biz/mobile-rv-detailers-canton?osq=Mobile+RV+Detailers&override_cta=Request+pricing+%26+availability`.

## Missing service-area approvals

- Canton, TX is used as the confirmed local base.
- Confirm Van Zandt County language before using it in customer-facing copy.
- Travel-zone structure is now published as approximate drive time: within about 30 minutes of Canton has no travel fee; within about 1 hour has a travel fee.
- Confirm exact travel fee amount, route exceptions, and whether any locations outside 1 hour can be quoted case by case.
- Interactive OpenStreetMap/Leaflet map is embedded for orientation, with an outbound Google Maps link. Confirm this third-party map/tile usage is approved for launch.
- Confirm approved nearby cities and communities.
- Confirm whether homes, RV parks, campgrounds, and storage facilities are all approved service locations.
- Do not add city pages until service areas are approved.

## Pricing and membership approvals

- Starting package prices are now published from `mobile-rv-detailers-membership-section.md`.
- RV Care Club membership pricing is now published from `mobile-rv-detailers-membership-section.md`.
- Confirm that Normal Wash starting at `$300` / `$10/ft`, Wash + Roof or Awning starting at `$450` / `$15/ft`, Full Exterior Detail starting at `$600` / `$15-$20/ft`, and RV Care Club `$79-$99/month` are final.
- Confirm membership terms, service-credit rules, cancellation terms, member discount eligibility, annual inspection scope, storm damage inspection scope, and locked-in pricing terms.

## Asset approvals

- `Pictures.zip` was imported into `public/images/originals/pictures-import/`.
- Optimized WebP/logo derivatives were created in `public/images/optimized/`.
- Real supplied photos now replace the temporary hero, proof, service, and gallery placeholders.
- Homepage proof comparison now uses separate optimized before/after panels generated from the supplied proof image.
- Local Facebook, Instagram, and Yelp SVG logo assets were added for social links.
- Owner should still approve selected crops, captions, and logo treatment before launch.
- Confirm whether any supplied photo should be excluded for privacy, customer-permission, or quality reasons.

## Missing review proof

- All five Facebook recommendation snippets visible in the current public GoDaddy-era Mobile RV Detailers review widget were restored.
- Owner should approve the review snippets before launch and replace them with full direct Facebook review links or screenshots if preferred.
- No Google reviews were provided.
- Add only real, approved Google/Facebook/customer reviews before launch.

## Copy needing owner approval

- Hero headline and subheadline.
- Service descriptions and included service list.
- Package names and package includes.
- About page story.
- Mission, values, and any faith-based copy.
- Quote checklist and quote-first flow language.
- Service-area page language.
- Privacy and terms policy language.

## Technical launch tasks

- Google review-share URL is configured.
- Add primary email URL if that channel should be public.
- Review selected photo crops and captions.
- Confirm analytics choice before adding scripts.
- If analytics/cookies are added, update the privacy policy.
- Connect repository to Cloudflare Pages with build command `npm run build` and output directory `dist`.
- Test Cloudflare preview URL before switching DNS.
- Preserve existing email DNS records before any domain DNS change.
