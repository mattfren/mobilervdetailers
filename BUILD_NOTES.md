# Build Notes - Mobile RV Detailers

## Stack

- Astro static site
- TypeScript data files
- Custom CSS design system
- Optimized local WebP assets from the provided photo set
- Node.js pinned to `22.16.0` with `.node-version`, `.nvmrc`, and `package.json` engines for Cloudflare Pages
- No backend
- No database
- No auth
- No custom payment code
- No custom booking/calendar code

## Commands run

```bash
npm install
npm install astro@^6.4.3
npm run build
npm audit --audit-level=moderate
```

The first install surfaced one moderate Astro advisory. Astro was upgraded to `^6.4.3`, `npm run build` still passes, and `npm audit --audit-level=moderate` now reports `found 0 vulnerabilities`.

## Pages built

- `/`
- `/services`
- `/gallery`
- `/about`
- `/service-areas`
- `/contact`
- `/book`
- `/privacy`
- `/terms`

## Components built

- `src/layouts/BaseLayout.astro`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/components/Hero.astro`
- `src/components/TrustChips.astro`
- `src/components/ServiceCard.astro`
- `src/components/PackageCard.astro`
- `src/components/GalleryGrid.astro`
- `src/components/CTASection.astro`
- `src/components/FAQ.astro`
- `src/components/Reviews.astro`
- `src/components/StickyMobileCTA.astro`
- `src/components/SEO.astro`

## Data files created

- `src/data/site.ts`
- `src/data/services.ts`
- `src/data/packages.ts`
- `src/data/faqs.ts`
- `src/data/gallery.ts`

## Assets

- `Pictures.zip` was extracted into `public/images/originals/pictures-import/`.
- The supplied logo SVG, profile image, RV photos, before/after shots, awning image, roof images, wheel detail, and exterior photos were reviewed.
- Optimized WebP derivatives were generated in `public/images/optimized/`.
- The site now uses real supplied imagery for the hero, proof section, service cards, gallery, logo, and favicon.
- The homepage proof section uses separately cropped before/after panels generated from the supplied proof photo for cleaner alignment.
- Local Facebook, Instagram, Yelp, Google, and Google Reviews SVG logo assets are configured for social/review links.
- The selected source and optimized files are listed in `asset_manifest.csv`.
- Owner approval is still recommended for final crops, captions, and any customer-permission concerns.

## Assumptions

- Phone number is `(903) 502-4242`.
- Primary location is Canton, TX.
- Quote-first flow is the safest default.
- Service Areas now uses a guide with two approximate drive-time zones from Canton: about 30 minutes with no travel fee and about 1 hour with a travel fee.
- Service Areas now uses a client-side Leaflet/OpenStreetMap map centered on Canton with map-native service circles; the site still has no backend or custom routing logic.
- Starting package prices and RV Care Club membership pricing are now shown from `mobile-rv-detailers-membership-section.md`.
- Quote requests route to the published Tally form.
- Booking intentionally routes to the contact page because new work starts with quote review, not direct scheduling.
- Google Business and exact Google review links are published. Public email is not published yet.
- Yelp, Facebook, Instagram, Google Business, Google Reviews, and payment links are configured.
- The social proof section now uses an Instagram-style local photo grid and a slow rotating Facebook recommendation gallery.
- All five public Facebook recommendation snippets visible in the current GoDaddy-era Mobile RV Detailers review widget are included and should be owner-approved before launch.
- No licensed/insured, certification, guarantee, or faith-based claims are published as confirmed facts.
- The approved founder and family-business story is published.
- Canton, TX is the confirmed base; drive-time zones are shown as approximate and quote-confirmed instead of fixed city lists.

## Validation

- `npm run build` passes.
- `npm run audit:production` passes.
- `npm audit --audit-level=moderate` passes with zero vulnerabilities.
- Browser QA checked desktop `1440x1000`, tablet `768x1000`, and mobile `390x900`.
- Required routes were opened in the browser.
- Route QA confirmed unique page titles, canonical URLs, JSON-LD presence, no missing image alt attributes, no horizontal overflow, and no console errors.
- Mobile menu opens and exposes Home, Services, Gallery, About, Service Areas, Contact, Book, Call, and Request Quote links.
- QA screenshots are saved in `qa-screenshots/`.

## Run locally

```bash
npm install
npm run dev
```

Local preview used during QA:

```text
http://127.0.0.1:4321/
```

## Build for production

```bash
npm run build
```

The production output directory is:

```text
dist
```

## Cloudflare Pages deployment

Use these settings:

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Root directory: /
Node version: 22.16.0
```

The repo includes `wrangler.jsonc` with the Pages output directory. Workers-only settings such as `observability` do not belong in this static Pages config.

Test the Cloudflare preview URL before pointing `mobilervdetailers.com` or `www.mobilervdetailers.com` at the new site.

## Next steps

1. Connect Cloudflare Pages with build command `npm run build` and output directory `dist`.
2. Test the Cloudflare preview URL before DNS cutover.
3. Preserve existing email DNS records before any domain DNS change.
4. Re-run `npm run audit:production` after content and asset updates.
