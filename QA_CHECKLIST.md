# QA Checklist - Final Production Polish

## Automated Gates

- [x] `npm run build`
- [x] `npm run audit:production`
- [x] `npm audit --audit-level=moderate`
- [x] No `npm run check` script is defined.
- [x] No `npm run lint` script is defined.

## Responsive Layout

- [x] 320 width
- [x] 390 width
- [x] 768 width
- [x] 1024 width
- [x] 1440 width
- [x] No horizontal overflow detected.
- [x] No clipped CTA text detected.
- [x] Mobile sticky CTA does not overlap page content.
- [x] Service-area map scrolls cleanly under the sticky header.
- [x] Mobile menu opens and exposes the expected navigation/actions.

## Business Safety

- [x] Exact public prices hidden while `pricesApproved=false`.
- [x] RV Care Club pricing, discounts, service credits, savings claims, inspections, and locked-in pricing hidden while `careClubApproved=false`.
- [x] Review/testimonial content hidden while `reviewsApproved=false`.
- [x] Licensed/insured language hidden while `licensedInsuredApproved=false`.
- [x] Quote, booking, payment, review, email, and social actions use `src/data/site.ts`.
- [x] No custom backend, database, auth, payment code, or calendar logic added.

## Content And Links

- [x] `Canton,TX` corrected to `Canton, TX`.
- [x] `wax soap hand drying` corrected to `wax soap and hand drying` or `Wax Soap + Hand Dry`.
- [x] No lorem ipsum or placeholder content in built pages.
- [x] No localhost URLs in built pages.
- [x] No `#todo` links in built pages.
- [x] Internal links validated by production audit.
- [x] External action links checked; Yelp blocks automated fetch with 403 but uses the owner-provided URL.
- [x] Images have alt attributes.
- [x] Below-the-fold images lazy load.

## SEO And Accessibility

- [x] Unique page titles.
- [x] Meta descriptions.
- [x] Canonical URLs.
- [x] Open Graph metadata.
- [x] LocalBusiness/ProfessionalService JSON-LD.
- [x] FAQ JSON-LD where FAQ content is present.
- [x] One H1 per page.
- [x] Focus states present.
- [x] `robots.txt` present.
- [x] `sitemap.xml` present.

## Visual Evidence

- [x] Screenshots saved under `qa-screenshots/final-polish/`.
- [x] Home, Services, Gallery, Service Areas, and Contact captured at 320, 390, 768, 1024, and 1440 widths.
- [x] Service Areas map scroll recapture saved after prior overlap regressions.
