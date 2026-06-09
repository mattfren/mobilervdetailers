# Codex Master Build Prompt - Copy/Paste

Paste this into Codex after you have added these files to the repository root:

- `AGENTS.md`
- `01_REQUIREMENTS_FILL_IN.md`
- `asset_manifest_template.csv`
- all selected logo/photo assets under `public/images/originals/`

---

## Master prompt

You are building the new Mobile RV Detailers website.

First, read and follow these files as the source of truth:

- `AGENTS.md`
- `01_REQUIREMENTS_FILL_IN.md`
- `asset_manifest_template.csv`
- any files in `references/`
- all assets in `public/images/originals/`

Goal: Build a premium, showroom-stopper, mobile-first static website for Mobile RV Detailers using Astro. This should look like a high-end RV/automotive/marine detailing brand, not a generic local-service template. It must be deployable to Cloudflare Pages and should avoid monthly software costs.

Critical constraints:

- Use Astro.
- No backend.
- No database.
- No customer login/account system.
- No custom payment processing code.
- No custom calendar logic.
- Booking, quote, and payment actions must use external URLs from the requirements file.
- Use local images only; do not hotlink GoDaddy or third-party assets.
- Do not create fake reviews, fake service areas, fake certifications, or fake insurance claims.
- Do not publish exact prices unless the requirements file explicitly approves them.
- If a field is `TBD`, use a safe placeholder and document it in `TODO_LAUNCH_REVIEW.md`.

If this repository is empty or does not have an Astro app, initialize a minimal Astro project in the current directory and keep it lightweight.

Build requirements:

1. Create the full page set:
   - `/`
   - `/services`
   - `/gallery`
   - `/about`
   - `/service-areas`
   - `/contact`
   - `/book`
   - `/privacy`
   - `/terms`

2. Create a strong reusable architecture:
   - `src/data/site.ts`
   - `src/data/services.ts`
   - `src/data/packages.ts`
   - `src/data/faqs.ts`
   - `src/data/gallery.ts`
   - `src/layouts/BaseLayout.astro`
   - reusable components for Header, Footer, Hero, ServiceCard, PackageCard, GalleryGrid, CTA, FAQ, Reviews, TrustChips, StickyMobileCTA, and SEO/JSON-LD.

3. Design direction:
   - dark cinematic hero
   - red/black/white premium brand system
   - big confident typography
   - real RV images
   - high-end service cards
   - before/after proof section
   - subtle animation and hover polish
   - mobile sticky Call + Request Quote bar
   - fast, clean, professional layout

4. Homepage sections:
   - hero with primary and secondary CTA
   - trust chips
   - before/after proof
   - services overview
   - package cards
   - how it works
   - about preview
   - gallery preview
   - reviews or review placeholder if no real reviews were provided
   - FAQ
   - final CTA

5. Integrations:
   - Configure quote form, booking, payment, phone, email, and social links in `src/data/site.ts`.
   - If a URL is missing, use `#todo` and list it in `TODO_LAUNCH_REVIEW.md`.

6. SEO/accessibility/performance:
   - Unique page titles/descriptions.
   - Canonical URLs.
   - LocalBusiness or ProfessionalService JSON-LD.
   - FAQ schema where appropriate.
   - Semantic headings.
   - Accessible buttons/links.
   - Optimized image usage.
   - Minimal JavaScript.
   - Responsive at mobile, tablet, and desktop breakpoints.

7. Validation:
   - Run `npm run build`.
   - Run any available check/lint commands.
   - If browser preview or Playwright is available, inspect mobile/tablet/desktop and iterate on visual issues.
   - Create/update `TODO_LAUNCH_REVIEW.md` with any remaining missing inputs or assumptions.

Done when:

- The site builds successfully.
- Every required page exists.
- The design feels premium and custom.
- Navigation and CTAs work.
- No fake claims or fake reviews were added.
- Missing inputs are clearly listed.
- The project is ready to connect to Cloudflare Pages.

Start by summarizing your implementation plan in 10 bullets, then implement the build.
