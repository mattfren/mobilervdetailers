# Step-by-Step Execution - Mobile RV Detailers Website Build

Follow these steps in order. Do not skip ahead unless the item is clearly not applicable.

---

# Part A - Fill the inputs

## Step 1 - Open the requirements file

Open:

```text
01_REQUIREMENTS_FILL_IN.md
```

Fill every **[FILL IN]** field you can. Use **TBD** only when you do not know the answer.

Minimum required before Codex build:

- Phone number
- Email address
- City/service area
- Primary CTA decision
- Quote form or placeholder
- Booking link or placeholder
- Payment link or placeholder
- Logo file name
- Hero image file name
- At least 3-6 service descriptions

## Step 2 - Decide the primary website flow

Choose the main conversion path:

```text
Recommended: Website -> Request Quote -> Review photos/details -> Send invoice/deposit -> Schedule job
```

Use direct online booking only for estimate calls or tightly scoped services.

## Step 3 - Confirm what should NOT be shown

Before assets/copy go to Codex, decide:

- Are exact prices allowed online?
- Is licensed/insured language true?
- Are faith-based elements allowed on Home, About only, or not at all?
- Are owners/founders named publicly?
- Are customer reviews approved for use?

---

# Part B - Gather assets

## Step 4 - Create the asset folder

Inside the website project, create:

```text
public/images/originals/
public/images/optimized/
references/
```

## Step 5 - Add logo files

Add the highest-quality logo files you have.

Recommended names:

```text
logo-mobile-rv-detailers.png
logo-mobile-rv-detailers-dark.png
logo-mobile-rv-detailers-light.png
favicon-source.png
```

## Step 6 - Add website photos

Add the best real photos you have.

Minimum recommended:

```text
rv-hero-main.jpg
rv-before-after-01.jpg
rv-service-exterior-wash.jpg
rv-service-roof-cleaning.jpg
rv-service-awning-cleaning.jpg
rv-service-black-streaks.jpg
rv-service-wax-protection.jpg
rv-team-or-mobile-setup.jpg
```

## Step 7 - Complete asset manifest

Open:

```text
asset_manifest_template.csv
```

For every image, fill:

```text
filename
asset_type
priority
intended_use
alt_text
notes
```

Codex will use this to avoid guessing which images belong where.

## Step 8 - Add visual references

Optional but useful. Add screenshots or links in the requirements file.

Good references can come from:

- premium car detailing websites
- marine detailing websites
- luxury RV dealers
- high-end outdoor brands
- service businesses with excellent mobile design

Do not tell Codex to copy a website exactly. Tell it what quality/feel to borrow.

---

# Part C - Prepare the repo

## Step 9 - Create a GitHub repository

Recommended repo name:

```text
mobile-rv-detailers-site
```

Use a private repo while building.

## Step 10 - Upload the build packet

At the repository root, add:

```text
AGENTS.md
01_REQUIREMENTS_FILL_IN.md
02_CODEX_MASTER_BUILD_PROMPT.md
03_STEP_BY_STEP_EXECUTION.md
asset_manifest_template.csv
```

Also add:

```text
public/images/originals/[your images]
references/[optional screenshots]
```

## Step 11 - Open the repo in Codex

Open Codex with this repository selected.

Recommended mode:

```text
Plan first / higher reasoning / safe approvals
```

---

# Part D - Build with Codex

## Step 12 - Paste the master prompt

Open:

```text
02_CODEX_MASTER_BUILD_PROMPT.md
```

Copy the entire **Master prompt** section and paste it into Codex.

Review Codex's initial plan. If it proposes backend/payment/calendar code, stop it and restate:

```text
Do not build backend, payment, or calendar logic. Use external quote/booking/payment URLs only.
```

## Step 13 - Let Codex implement the first build

Codex should create or update:

```text
Astro project files
src/components/
src/data/
src/pages/
src/styles/global.css
TODO_LAUNCH_REVIEW.md
```

## Step 14 - Require a clean build

Ask Codex to run:

```bash
npm run build
```

If it fails, paste:

```text
Fix the build errors without changing the business requirements. Keep the site static and Cloudflare Pages compatible. Then rerun npm run build.
```

## Step 15 - Preview locally

Run:

```bash
npm run dev
```

Open the local preview. Review these screen widths:

```text
390px mobile
768px tablet
1440px desktop
```

---

# Part E - Polish prompts

Use these one at a time after the first build.

## Prompt 1 - Make it more premium

```text
Review the current site visually and make it feel more premium and custom. Improve spacing, typography, hero composition, service cards, package cards, gallery presentation, and CTA hierarchy. Keep the brand red/black/white, but make it refined and high-end rather than loud. Do not change the business facts or add fake claims. Run npm run build when done.
```

## Prompt 2 - Mobile conversion pass

```text
Optimize the mobile experience specifically. The site should feel intentional at 390px width, with clear hero hierarchy, easy tap targets, no cramped cards, fast scrolling, and a sticky bottom CTA with Call and Request Quote. Check the header menu, CTA buttons, service cards, gallery, FAQ, and footer. Run npm run build when done.
```

## Prompt 3 - SEO/local trust pass

```text
Improve local SEO and trust without keyword stuffing. Confirm every page has unique title/description, canonical URL, semantic headings, image alt text, LocalBusiness or ProfessionalService JSON-LD, and FAQ schema where relevant. Emphasize Canton, TX and mobile RV detailing naturally. Do not invent service areas or reviews. Run npm run build when done.
```

## Prompt 4 - Gallery/proof pass

```text
Make the gallery and before/after proof sections stronger. Use the asset manifest to select the best real images. Create clear captions and alt text. The page should communicate real results, RV-specific expertise, and premium care. Do not use stock photos or hotlinked assets. Run npm run build when done.
```

## Prompt 5 - Final QA pass

```text
Perform a final launch-readiness review. Check navigation, broken links, placeholders, mobile sticky CTA, quote/booking/payment links, page metadata, accessibility, image loading, and Cloudflare Pages compatibility. Update TODO_LAUNCH_REVIEW.md with anything Matt still needs to fill in. Run npm run build and summarize exactly what changed.
```

---

# Part F - Launch prep

## Step 16 - Read TODO_LAUNCH_REVIEW.md

Fix every item that blocks launch.

Common blockers:

- Missing email address
- Missing quote form URL
- Missing booking URL
- Missing payment link
- Weak hero image
- Fake placeholder reviews
- Service areas not confirmed
- Pricing language not approved

## Step 17 - Create the quote form

Recommended free/low-cost route:

```text
Tally form -> collect RV details + photos -> email notification to you
```

After the form is live, paste the URL into:

```text
src/data/site.ts
01_REQUIREMENTS_FILL_IN.md
```

## Step 18 - Create the booking link

Recommended route:

```text
Square Appointments -> estimate call / quote appointment / known services
```

After the booking page is live, paste the URL into:

```text
src/data/site.ts
01_REQUIREMENTS_FILL_IN.md
```

## Step 19 - Create or confirm payment link

Recommended route:

```text
Square invoices or payment link
```

Paste the public link only if you want a visible Pay button.

## Step 20 - Final local QA

Check every page:

```text
/
/services
/gallery
/about
/service-areas
/contact
/book
/privacy
/terms
```

Check every CTA:

```text
Call Now
Request Quote
Book Online
Pay Invoice
Social links
Google review link
```

---

# Part G - Deploy

## Step 21 - Connect GitHub to Cloudflare Pages

Cloudflare Pages settings:

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Root directory: /
```

## Step 22 - Test the preview URL

Use the Cloudflare preview domain first. Do not switch DNS until the preview is correct.

## Step 23 - Connect the custom domain

Add:

```text
mobilervdetailers.com
www.mobilervdetailers.com
```

Keep GoDaddy hosting active during the DNS switch.

## Step 24 - Preserve email DNS records

Before changing nameservers, copy all existing DNS records, especially:

```text
MX
TXT
SPF
DKIM
DMARC
CNAME records for email or verification
```

## Step 25 - Launch review

After the domain points to Cloudflare Pages, test:

- Homepage loads
- `www` redirects correctly
- Contact form works
- Booking link works
- Payment link works
- Phone links work on mobile
- Email still works
- Google Business Profile website link is updated

---

# Part H - Post-launch

## Step 26 - Monitor for 2-4 weeks

Do not cancel GoDaddy hosting immediately. Keep it until:

- DNS is stable
- Email works
- Website traffic is reaching the new site
- Quote form submissions are received
- Booking/payment links are confirmed

## Step 27 - Cancel only the unnecessary GoDaddy services

Cancel website hosting only after the new site is stable. Do not cancel the domain unless you intentionally transfer it.

## Step 28 - Revisit and optimize

After launch, review:

- Which CTA gets clicks
- Which page gets traffic
- Which form questions confuse customers
- Which services produce quotes
- Which images perform best

Then improve copy, photos, and SEO pages.
