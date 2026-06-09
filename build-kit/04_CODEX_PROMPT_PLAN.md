# Codex Prompt Plan - Copy/Paste Prompts

Use these prompts in order. The master prompt may be enough for the first build, but these phased prompts give you more control and better quality.

---

# Prompt 0 - Planning mode

```text
Before coding, read AGENTS.md, 01_REQUIREMENTS_FILL_IN.md, and asset_manifest_template.csv. Produce a concise implementation plan for a premium Astro static website for Mobile RV Detailers. Identify missing inputs, assumptions, page structure, component structure, and validation steps. Do not code yet.
```

---

# Prompt 1 - Initial build

```text
Implement the website according to AGENTS.md and 01_REQUIREMENTS_FILL_IN.md. If no Astro app exists, initialize a minimal Astro project in the current directory. Build all required pages, data files, components, global styles, metadata, JSON-LD, responsive navigation, sticky mobile CTA, service cards, package cards, gallery, FAQ, contact, book, privacy, and terms pages. Use only local assets. Use external URLs for quote, booking, and payment. No backend, no database, no auth, no custom calendar, and no custom payment processing. Create TODO_LAUNCH_REVIEW.md for missing inputs. Run npm run build when complete.
```

---

# Prompt 2 - Premium design pass

```text
Make the site look like a showroom-stopper. Improve the design system, spacing, typography, hero treatment, service cards, package cards, gallery, before/after section, CTA hierarchy, mobile layout, and hover/motion polish. The style should feel premium automotive/marine/RV-care: refined black, red, white, strong images, high trust, not generic. Do not change factual content or invent claims. Run npm run build when complete.
```

---

# Prompt 3 - Mobile-first conversion pass

```text
Review and optimize the mobile experience at roughly 390px width. Make the hero clear, CTAs thumb-friendly, menu clean, services easy to scan, gallery attractive, and the sticky bottom Call + Request Quote bar reliable. Remove anything cramped or noisy. Run npm run build when complete.
```

---

# Prompt 4 - SEO and trust pass

```text
Perform an SEO and trust pass. Ensure every page has a unique title, description, canonical URL, semantic heading structure, local business schema, useful alt text, and natural local RV detailing copy. Add FAQ schema where appropriate. Do not keyword stuff. Do not invent service areas, certifications, or reviews. Run npm run build when complete.
```

---

# Prompt 5 - Asset and gallery pass

```text
Review the asset manifest and all local images. Ensure the best image is used for the hero, the before/after proof section is strong, service cards use relevant images, and the gallery is organized and captioned. Convert or reference optimized images where appropriate. Do not hotlink external images. Run npm run build when complete.
```

---

# Prompt 6 - Launch QA pass

```text
Do a launch-readiness QA pass. Check all routes, nav links, CTAs, phone links, quote form links, booking links, payment links, social links, metadata, JSON-LD, responsive layout, accessibility basics, image loading, and Cloudflare Pages compatibility. Update TODO_LAUNCH_REVIEW.md with every unresolved placeholder. Run npm run build and provide a clear launch checklist.
```

---

# Emergency correction prompts

## If Codex builds a generic template

```text
This looks too generic. Rework the visual direction to feel premium, custom, and RV-specific. Use stronger typography, stronger hero composition, more cinematic image treatment, tighter spacing, richer card design, better before/after proof, and more confident CTA hierarchy. Avoid coupon-style or generic cleaning-company patterns. Keep all content truthful. Run npm run build.
```

## If Codex invents claims

```text
Remove any invented claims, reviews, certifications, service areas, insurance language, prices, or guarantees that are not explicitly present in 01_REQUIREMENTS_FILL_IN.md. Replace them with safe wording or TODO placeholders. Run npm run build.
```

## If Codex adds backend/payment/calendar code

```text
Remove all backend, database, custom payment, custom calendar, and authentication code. This must be a static Astro site. Quote, booking, and payment actions must be external links or embeds from configured URLs only. Run npm run build.
```

## If the mobile site is weak

```text
Rebuild the mobile layout quality. At 390px width, the site should feel intentional and premium, with clear hierarchy, generous spacing, readable text, strong CTAs, and no cramped cards. The sticky mobile CTA must be visible without covering important content. Run npm run build.
```

## If images are poor or broken

```text
Audit all image usage. Use only local images that exist in the repo. Replace broken images with safe placeholders and list missing assets in TODO_LAUNCH_REVIEW.md. Improve alt text and captions. Run npm run build.
```
