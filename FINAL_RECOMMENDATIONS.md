# Final Recommendations

Date: June 10, 2026

## Launch recommendation

Publish the new site after DNS and form/payment operations are confirmed. The static website itself is ready for Cloudflare Pages.

## Conversion

- Keep Request Quote as the primary action everywhere.
- Keep phone visible in the header and footer, but do not restore it as a competing primary card CTA.
- Keep the Book page quote-first. Do not add public self-scheduling until the business is ready to manage calendar conflicts, weather, access, deposits, and route planning.

## Business safety

- Do not publish exact prices until the owner approves pricing and how exceptions will be handled.
- Do not publish RV Care Club pricing, service credits, discounts, inspections, or savings claims until terms are final.
- Do not publish reviews/testimonials until the exact review source, wording, and permission posture are approved.
- Do not mention licensed/insured, certifications, guarantees, or restoration outcomes unless separately verified.

## Billing

- The current site keeps payment external and quote-led, which matches the static-site constraint.
- If moving away from the current GoDaddy-hosted payment link, use a lightweight external option such as Stripe Payment Links, Stripe Invoices, Square Invoices, or another hosted invoice/pay-link product. Do not build custom payment code for launch.
- Keep the website copy as "Pay Invoice" and only send payment links after quote/invoice review.

## Cloudflare Pages

- Framework preset: Astro.
- Build command: `npm run build`.
- Output directory: `dist`.
- Node version: `22.16.0`.
- Do not add Workers-only `observability` config to `wrangler.jsonc`; the current Pages config only needs `pages_build_output_dir`.
- Current audit changes must be committed and pushed to `main` before Cloudflare Pages publishes them.

## Post-launch

- After the custom domain is live, run one real production smoke test for Home, Services, Gallery, Service Areas, Contact, Book, Privacy, and Terms.
- If Cloudflare Web Analytics or GA4 is added later, update `src/pages/privacy.astro`.
- Periodically rerun `npm run audit:production` after content, link, or asset updates.
