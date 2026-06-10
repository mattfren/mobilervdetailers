# Cloudflare Cutover Checklist

Date: June 10, 2026

## Current Cloudflare state

- Cloudflare Pages project: `mobile-rv-detailers`
- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version environment variable: `22.16.0`
- Current Pages URL: `https://mobile-rv-detailers.pages.dev/`
- Latest production deployment should be checked in Cloudflare Pages before cutover; the project is connected to `main` and deploys on each push.
- Zone: `mobilervdetailers.com`
- Zone status: active
- Cloudflare nameservers: `aragorn.ns.cloudflare.com`, `serenity.ns.cloudflare.com`
- Pages custom domains currently attached: none

## Current DNS records that matter for cutover

Web records currently point to the old GoDaddy-hosted site:

- `mobilervdetailers.com` `A` `13.248.243.5`
- `mobilervdetailers.com` `A` `76.223.105.230`
- `www.mobilervdetailers.com` `CNAME` `mobilervdetailers.com`

Records to preserve unless the owner intentionally changes email/payment providers:

- Microsoft/Outlook mail: `MX`, `autodiscover`, `enterpriseenrollment`, `enterpriseregistration`, `lyncdiscover`, `sip`, and `_sip` / `_sipfederationtls` records.
- SPF: `v=spf1 include:spf.em.secureserver.net include:spf.protection.outlook.com -all`
- DMARC: `_dmarc.mobilervdetailers.com`
- Google site verification TXT.
- Payment subdomain: `pay.mobilervdetailers.com` currently points to `paylinks.commerce.godaddy.com`.

## Do not do until ready to make the new site public

- Do not replace the root GoDaddy `A` records.
- Do not change `www`.
- Do not attach Pages custom domains if the goal is to keep the old public site live for now.

## Final cutover steps

1. Confirm the latest Pages preview is good:
   - `https://mobile-rv-detailers.pages.dev/`
   - `https://mobile-rv-detailers.pages.dev/services/`
   - `https://mobile-rv-detailers.pages.dev/contact/`
   - `https://mobile-rv-detailers.pages.dev/book/`

2. In Cloudflare Pages, add custom domains to the `mobile-rv-detailers` project:
   - `mobilervdetailers.com`
   - `www.mobilervdetailers.com`

3. Replace only the web DNS records:
   - Remove the two root GoDaddy `A` records.
   - Point the root domain to the Pages project using the Cloudflare Pages custom-domain flow. Cloudflare supports apex-domain CNAME flattening.
   - Point `www` to the Pages project using the Pages custom-domain flow or a CNAME to `mobile-rv-detailers.pages.dev`.

4. Wait for the Pages custom-domain certificate status to become active.

5. Smoke test:
   - `https://mobilervdetailers.com/`
   - `https://www.mobilervdetailers.com/`
   - `/services/`
   - `/gallery/`
   - `/service-areas/`
   - `/contact/`
   - `/book/`
   - `/privacy/`
   - `/terms/`

6. Verify business-safe launch conditions:
   - Request Quote opens Tally.
   - No exact prices are published.
   - RV Care Club is not visible.
   - No licensed/insured claim is visible.
   - Email and payment DNS still work as intended.

## Post-cutover SEO steps

1. Add a Cloudflare Redirect Rule so `www.mobilervdetailers.com/*` 301-redirects to `https://mobilervdetailers.com/$1` (Pages `_redirects` cannot redirect by hostname). Canonical tags already point at the apex domain, but the explicit redirect consolidates signals.
2. Verify the domain in Google Search Console (the existing Google site verification TXT record should make Domain verification immediate), then submit `https://mobilervdetailers.com/sitemap.xml`.
3. In Search Console, use URL Inspection → Request Indexing for `/`, `/services/`, and `/service-areas/` to speed up replacement of the old GoDaddy pages in the index.
4. Update the Google Business Profile website link to `https://mobilervdetailers.com/` and confirm the profile category, phone `(903) 502-4242`, and Canton, TX service area match the site. The Business Profile is the dominant ranking factor for "RV detailing near me" map-pack results.
5. Confirm Cloudflare bot protection (Bot Fight Mode / managed challenge) is not blocking `Googlebot` or `Bingbot` — the zone currently returns 403 to unknown user agents, so check Security → Events after cutover for blocked verified crawlers.
6. Verify Facebook, Instagram, and Yelp profiles all link to `https://mobilervdetailers.com/` (consistent NAP citations).

## Reference

- Cloudflare Pages custom domains: `https://developers.cloudflare.com/pages/configuration/custom-domains/`
- Cloudflare DNS CNAME flattening/proxy behavior: `https://developers.cloudflare.com/dns/proxy-status/`
