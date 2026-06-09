# AGENTS.md - Mobile RV Detailers Website Build Guidance

## Mission

Build a premium, showroom-stopper static website for Mobile RV Detailers, a Canton, TX-based mobile RV detailing business. The website should feel like a high-end automotive/marine/RV-care brand, not a generic local-service template.

## Source of truth

Before coding, read:

1. `01_REQUIREMENTS_FILL_IN.md`
2. `asset_manifest_template.csv`
3. Any screenshots, image files, or notes placed in `references/`
4. Any logo/photo assets placed in `public/images/originals/`

If a requirement is marked `TBD`, make the best safe placeholder choice and add it to `TODO_LAUNCH_REVIEW.md`. Do not block the build unless the missing item prevents basic navigation or build completion.

## Technical constraints

- Use Astro for a static website.
- Use TypeScript where it improves clarity.
- Use custom CSS/design tokens; do not use a paid UI kit.
- No backend, database, customer accounts, or authentication.
- No custom payment processing code.
- No custom calendar/booking logic.
- Booking, quote, and payment CTAs should link to external tools configured in `src/data/site.ts`.
- Keep monthly software cost as close to $0 as possible.
- The site must deploy cleanly to Cloudflare Pages.

## Architecture expectations

Use this structure unless there is a strong reason not to:

```text
public/
  images/
    originals/
    optimized/
src/
  components/
  data/
  layouts/
  pages/
  styles/
```

Create or maintain these files:

```text
src/data/site.ts
src/data/services.ts
src/data/packages.ts
src/data/faqs.ts
src/data/gallery.ts
src/layouts/BaseLayout.astro
src/styles/global.css
```

Required pages:

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

## Design quality bar

This website should look custom, premium, and conversion-focused.

Required visual qualities:

- Cinematic dark hero using real RV imagery.
- Red/black/white brand system that feels refined, not loud.
- Strong typography and generous spacing.
- Premium service cards and package cards.
- Before/after proof section.
- Image-forward gallery.
- Subtle motion and hover polish.
- Mobile-first layout with sticky Call + Request Quote CTA.
- Clear trust signals: local, mobile, RV-specific, real results.

Avoid:

- Generic car wash visuals.
- Fake reviews.
- Invented service areas.
- Template-looking sections.
- Cheap coupon/banner styling.
- Hotlinking images from GoDaddy or any external site.
- Publishing exact prices unless the requirements file approves them.

## Content rules

- Keep copy direct, premium, local, and RV-specific.
- Do not overpromise removal/restoration outcomes.
- Do not claim licensed/insured unless explicitly confirmed.
- Do not create fake testimonials.
- Use “Request Quote” as the primary CTA unless the requirements file says otherwise.
- Mention “Canton, TX” and surrounding service area naturally, not keyword-stuffed.

## SEO requirements

- Add unique title and meta description for every page.
- Add canonical URLs based on `site.domain`.
- Add LocalBusiness/ProfessionalService JSON-LD where appropriate.
- Add FAQ schema if FAQ content is present.
- Use semantic headings in proper order.
- Optimize images with descriptive alt text.

## Accessibility and performance

- All interactive elements must be keyboard accessible.
- All images need useful alt text or empty alt text if decorative.
- Buttons and links must have clear labels.
- Avoid layout shift.
- Lazy-load non-critical images.
- Do not ship unnecessary JavaScript.
- Target Lighthouse 95+ for Performance, Accessibility, Best Practices, and SEO where local assets allow.

## Validation commands

Before declaring the task complete:

```bash
npm run build
```

If available, also run:

```bash
npm run check
npm run lint
npm run preview
```

If Playwright or a browser preview is available, visually inspect:

- 390px mobile
- 768px tablet
- 1440px desktop

## Done when

The task is done only when:

- Build passes.
- All required pages exist.
- Navigation works.
- CTAs point to configured quote/booking/payment URLs or safe placeholders.
- Mobile sticky CTA works.
- Images render from local files.
- No fake reviews or invented claims are present.
- `TODO_LAUNCH_REVIEW.md` lists any remaining placeholders or launch decisions.
