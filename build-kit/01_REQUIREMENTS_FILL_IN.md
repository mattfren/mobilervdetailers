# Mobile RV Detailers Website Requirements - Fill-In Document

**Purpose:** Fill this out before asking Codex to build the website. This file becomes the source of truth for the website build.

**Business:** Mobile RV Detailers  
**Domain:** mobilervdetailers.com  
**Build goal:** A premium, showroom-stopper static website that costs as close to $0/month as possible and uses third-party booking/payment tools rather than custom payment/calendar code.

---

## How to use this document

1. Fill in every **REQUIRED** field.
2. Use **TBD** only when you truly do not know the answer yet.
3. Put final image/logo files in `public/images/originals/` and list them in `asset_manifest_template.csv`.
4. Do not invent reviews, service areas, certifications, insurance, or prices. If something is not confirmed, leave it blank or mark **TBD**.
5. After this file is complete, upload it to the website repository and paste the master prompt from `02_CODEX_MASTER_BUILD_PROMPT.md` into Codex.

---

# 1. Build decisions

| Field | Answer |
|---|---|
| **Primary build style** | Static Astro website |
| **Hosting target** | Cloudflare Pages |
| **Booking system** | Square Appointments or other: **[FILL IN]** |
| **Payment system** | Square, Stripe, or other: **[FILL IN]** |
| **Quote form tool** | Tally, Square form, custom static form endpoint, or other: **[FILL IN]** |
| **Use exact pricing on website?** | Yes / No / Starting at only: **[FILL IN]** |
| **Allow online booking without quote?** | Yes / No / Only for estimate calls: **[FILL IN]** |
| **Use customer account/login features?** | No unless required by booking tool |
| **Monthly software budget target** | $0/month excluding domain and payment processing fees |

---

# 2. Business identity

| Field | Answer |
|---|---|
| **Legal/business name** | Mobile RV Detailers |
| **Public display name** | Mobile RV Detailers |
| **Primary domain** | mobilervdetailers.com |
| **Phone number** | (903) 502-4242 - verify |
| **Phone link format** | tel:+19035024242 - verify |
| **Primary email** | **[FILL IN]** |
| **City/state** | Canton, TX - verify |
| **Full mailing/service address, if public** | **[FILL IN or leave private]** |
| **Business type** | Mobile RV detailing / RV washing / RV exterior care |
| **Founded** | 2021 - verify |
| **Owners/founders to mention?** | Carl & Jana Fields - verify / edit if needed |
| **Family-owned?** | Yes / No / Do not mention: **[FILL IN]** |
| **Faith-based language allowed?** | Yes / About page only / No: **[FILL IN]** |
| **Licensed and insured?** | Yes / No / TBD. Only display if true: **[FILL IN]** |

---

# 3. One-sentence positioning

Write the single clearest sentence that should define the business.

**Required positioning sentence:**

> **[FILL IN]**

Recommended default:

> Premium mobile RV detailing in Canton, TX - professional RV washing, roof cleaning, black streak removal, waxing, awnings, and exterior protection performed wherever your RV is parked.

---

# 4. Brand personality and design direction

## 4.1 Desired feel

Mark the best options.

- [ ] Premium
- [ ] Rugged
- [ ] Clean
- [ ] High-end automotive
- [ ] Marine/RV protection
- [ ] Local family business
- [ ] Faith-forward
- [ ] Luxury service
- [ ] Friendly and approachable
- [ ] Other: **[FILL IN]**

## 4.2 Words the site should NOT feel like

- [ ] Cheap
- [ ] Coupon-heavy
- [ ] Generic car wash
- [ ] Template-based
- [ ] Overly corporate
- [ ] Cartoonish
- [ ] Cluttered
- [ ] Other: **[FILL IN]**

## 4.3 Color direction

| Role | Preferred value |
|---|---|
| Current logo colors | Red / white / black |
| Primary brand red | `#D71920` unless updated |
| Dark background | `#0B0D10` |
| Light background | `#F7F5EF` |
| Body text dark | `#1F2933` |
| Body text light | `#F8F7F2` |
| Alternate accent color, if any | **[FILL IN]** |
| Colors to avoid | **[FILL IN]** |

## 4.4 Typography direction

| Use | Preferred font |
|---|---|
| Headings | Oswald or Archivo |
| Body | Inter or Source Sans 3 |
| Use Google Fonts? | Yes / No: **[FILL IN]** |
| Alternative font preference | **[FILL IN]** |

## 4.5 Visual references

Add 2-5 websites or screenshots that show the quality bar. These do not need to be RV companies; automotive, marine, aviation, luxury service, and outdoor brands are useful.

| Reference | What to copy | What to avoid |
|---|---|---|
| **[URL or screenshot filename]** | **[FILL IN]** | **[FILL IN]** |
| **[URL or screenshot filename]** | **[FILL IN]** | **[FILL IN]** |
| **[URL or screenshot filename]** | **[FILL IN]** | **[FILL IN]** |
| **[URL or screenshot filename]** | **[FILL IN]** | **[FILL IN]** |
| **[URL or screenshot filename]** | **[FILL IN]** | **[FILL IN]** |

---

# 5. Logo and image assets

## 5.1 Logo files

Place logo files in `public/images/originals/`.

| Asset | Filename | Notes |
|---|---|---|
| Highest-resolution logo, transparent background | **[FILL IN]** | Must use if available |
| Dark-background logo | **[FILL IN]** | For dark header/footer |
| Light-background logo | **[FILL IN]** | For light sections if needed |
| Icon/favicon source | **[FILL IN]** | Could be simplified logo mark |

## 5.2 Required image categories

Provide at least one strong image per category if possible.

| Category | Required? | Filename(s) | Notes |
|---|---:|---|---|
| Hero image - best polished RV exterior | Yes | **[FILL IN]** | Needs to look premium on desktop and mobile |
| Before/after result | Yes | **[FILL IN]** | Real result only |
| Awning cleaning | Preferred | **[FILL IN]** | Good for service card |
| Roof cleaning | Preferred | **[FILL IN]** | Good for service card |
| Black streak removal | Preferred | **[FILL IN]** | High-conversion proof |
| Wax/protection shine | Preferred | **[FILL IN]** | High-end finish image |
| Team/founder/family photo | Optional | **[FILL IN]** | About page only if professional |
| Truck/trailer/mobile setup | Optional | **[FILL IN]** | Builds trust for mobile service |
| Review screenshots | Optional | **[FILL IN]** | Use only real public reviews |

## 5.3 Image rules for Codex

- Do not hotlink images from GoDaddy.
- Use local images only from `public/images/` or `src/assets/`.
- Convert large images to optimized `.webp` files.
- Keep original uploads in `public/images/originals/`.
- Every public image must have descriptive alt text.
- Do not use fake stock photos unless explicitly approved here: **[APPROVED / NOT APPROVED]**.

---

# 6. Services

Use the exact services you want customers to see. Delete or mark services that should not be offered.

| Service | Display? | Short description | Quote/book rule | Image filename |
|---|---:|---|---|---|
| Exterior RV Wash | Yes / No | Remove dirt, road grime, bugs, dust, and buildup using RV-safe methods. | Quote / Book / Existing only | **[FILL IN]** |
| Roof Cleaning | Yes / No | Clean dirt, debris, mold, and buildup from the RV roof. | Quote / Book / Existing only | **[FILL IN]** |
| Black Streak Removal | Yes / No | Treat dark runoff streaks that stain RV exterior surfaces. | Quote / Book / Existing only | **[FILL IN]** |
| Waxing & Protection | Yes / No | Add exterior protection against UV, oxidation, fading, and grime. | Quote / Book / Existing only | **[FILL IN]** |
| Awning Cleaning | Yes / No | Remove dirt, mildew, mold, and stains from awning fabric and hardware. | Quote / Book / Existing only | **[FILL IN]** |
| Seals & Gaskets | Yes / No | Clean and condition key seals to help reduce drying, cracking, and leaks. | Quote / Book / Existing only | **[FILL IN]** |
| Bug & Tar Removal | Yes / No | Remove bugs and tar before they damage exterior surfaces. | Quote / Book / Existing only | **[FILL IN]** |
| Interior RV Detail | Yes / No | **[FILL IN]** | Quote / Book / Existing only | **[FILL IN]** |
| Maintenance Plan | Yes / No | Recurring RV exterior care for repeat customers. | Quote / Existing only | **[FILL IN]** |
| Other | Yes / No | **[FILL IN]** | **[FILL IN]** | **[FILL IN]** |

---

# 7. Packages and pricing strategy

## 7.1 Pricing decision

Choose one:

- [ ] No prices online - quote required
- [ ] Starting-at prices only
- [ ] Price ranges by RV length
- [ ] Full online pricing
- [ ] Existing customers can book exact services; new customers request quote first

**Chosen approach:** **[FILL IN]**

## 7.2 Package cards

| Package | Show? | Best for | Includes | Price display | CTA |
|---|---:|---|---|---|---|
| Exterior Refresh | Yes / No | Routine exterior cleanup | **[FILL IN]** | Quote / Starting at / Range | Request Quote |
| Protection Detail | Yes / No | Wash + wax/protection | **[FILL IN]** | Quote / Starting at / Range | Request Quote |
| Roof & Awning Care | Yes / No | Roof, awnings, seals | **[FILL IN]** | Quote / Starting at / Range | Request Quote |
| Full-Service RV Detail | Yes / No | Complete exterior care | **[FILL IN]** | Quote / Starting at / Range | Request Quote |
| Maintenance Plan | Yes / No | Recurring customers | **[FILL IN]** | Quote / Starting at / Range | Request Quote |

## 7.3 Pricing disclaimers

Add any rules Codex should display near pricing or quote CTAs.

**Pricing disclaimer:**

> **[FILL IN]**

Recommended default:

> Final pricing depends on RV length, condition, oxidation, service location, roof/awning condition, and selected add-ons. Photos help us quote accurately.

---

# 8. Booking, quote, and payment flow

## 8.1 Primary conversion path

Choose one primary CTA:

- [ ] Request a Quote
- [ ] Book Online
- [ ] Call Now
- [ ] Text Us

**Primary CTA:** **[FILL IN]**

## 8.2 Quote form

| Field | Answer |
|---|---|
| Quote form URL | **[FILL IN]** |
| Form provider | Tally / Square / Other: **[FILL IN]** |
| Embed form on contact page? | Yes / No: **[FILL IN]** |
| Open form in new tab? | Yes / No: **[FILL IN]** |
| Allow photo uploads? | Yes / No: **[FILL IN]** |

## 8.3 Booking

| Field | Answer |
|---|---|
| Square Appointments URL or booking link | **[FILL IN]** |
| Show booking page in nav? | Yes / No: **[FILL IN]** |
| Booking CTA wording | Book Online / Schedule Estimate / Request Appointment: **[FILL IN]** |
| Services available for direct booking | **[FILL IN]** |

## 8.4 Payment

| Field | Answer |
|---|---|
| Payment processor | Square / Stripe / Other: **[FILL IN]** |
| Public payment link, if any | **[FILL IN]** |
| Deposit required? | Yes / No / Case-by-case: **[FILL IN]** |
| No-show/cancellation fee? | Yes / No / TBD: **[FILL IN]** |
| Payment CTA wording | Pay Invoice / Make Payment / Pay Deposit: **[FILL IN]** |

## 8.5 Quote form fields

Use these unless you want edits.

- First and last name
- Phone
- Email
- Preferred contact method
- RV type
- RV length
- Year/make/model
- Location / ZIP code
- Where RV is parked
- Services wanted
- Condition level
- Photo uploads
- Preferred timing
- Anything else we should know

**Fields to add/remove:** **[FILL IN]**

---

# 9. Service area

Do not invent cities. Only list places you actually serve.

| Field | Answer |
|---|---|
| Primary city | Canton, TX - verify |
| Primary county | Van Zandt County - verify |
| Maximum travel radius | **[FILL IN] miles** |
| Travel fee rule | **[FILL IN]** |
| Communities served | **[FILL IN list]** |
| Places you do NOT serve | **[FILL IN list]** |
| Serve RV parks/campgrounds? | Yes / No: **[FILL IN]** |
| Serve storage facilities? | Yes / No: **[FILL IN]** |
| Serve customer homes? | Yes / No: **[FILL IN]** |

---

# 10. Trust proof

## 10.1 Reviews

Use real reviews only.

| Review source | URL or text | Permission/notes |
|---|---|---|
| Google Business Profile | **[FILL IN]** | **[FILL IN]** |
| Facebook | **[FILL IN]** | **[FILL IN]** |
| Yelp / other | **[FILL IN]** | **[FILL IN]** |
| Customer quote 1 | **[FILL IN]** | Use only with permission |
| Customer quote 2 | **[FILL IN]** | Use only with permission |
| Customer quote 3 | **[FILL IN]** | Use only with permission |

## 10.2 Trust badges

Only check what is true.

- [ ] Family-owned
- [ ] Local Canton, TX business
- [ ] Licensed and insured
- [ ] Mobile service
- [ ] RV-specific products/methods
- [ ] Roof-safe cleaning
- [ ] Storage facility service
- [ ] RV park/campground service
- [ ] Satisfaction guarantee
- [ ] Other: **[FILL IN]**

## 10.3 Warranty/guarantee language

**Guarantee statement:**

> **[FILL IN or leave blank]**

---

# 11. Page requirements

## 11.1 Required pages

- [x] Home
- [x] Services
- [x] Gallery
- [x] About
- [x] Service Areas
- [x] Contact
- [x] Book / Schedule
- [x] Privacy Policy
- [x] Terms

## 11.2 Homepage sections

- [x] Premium hero with image/video-like motion treatment
- [x] Trust chips
- [x] Before/after proof section
- [x] Service cards
- [x] Package cards
- [x] How it works
- [x] About preview
- [x] Gallery preview
- [x] Reviews/social proof
- [x] FAQ
- [x] Final CTA
- [x] Sticky mobile CTA bar

## 11.3 Navigation

| Item | Show? | URL |
|---|---:|---|
| Home | Yes | `/` |
| Services | Yes | `/services` |
| Gallery | Yes | `/gallery` |
| About | Yes | `/about` |
| Service Areas | Yes | `/service-areas` |
| Contact | Yes | `/contact` |
| Request Quote | Yes | Quote form URL or `/contact` |
| Book Online | Yes / No | **[FILL IN]** |
| Pay Invoice | Yes / No | **[FILL IN]** |

---

# 12. Copywriting inputs

## 12.1 Hero headline options

Choose one or write a new one.

- [ ] Premium Mobile RV Detailing in Canton, TX
- [ ] Mobile RV Detailing That Protects Your Investment
- [ ] Make Your RV Look Trip-Ready Without Moving It
- [ ] Professional RV Detailing Wherever Your Rig Is Parked
- [ ] Custom: **[FILL IN]**

## 12.2 Hero subheadline

> **[FILL IN]**

Recommended default:

> Professional RV washing, roof cleaning, black streak removal, waxing, awning care, and exterior protection performed at your home, storage facility, RV park, or campsite.

## 12.3 About story edits

Current story to verify/edit:

> Mobile RV Detailers was founded in 2021 by Carl & Jana Fields after they bought their first RV and could not find someone to detail it. Out of necessity, they set out to create an easier and more affordable way for RV owners to protect their investment.

**Approved About story:**

> **[FILL IN]**

## 12.4 Mission statement

> **[FILL IN]**

## 12.5 Values

- Integrity: **[KEEP / EDIT / REMOVE]**
- Respect: **[KEEP / EDIT / REMOVE]**
- Perfection/high-quality work: **[KEEP / EDIT / REMOVE]**
- Other: **[FILL IN]**

---

# 13. FAQ inputs

Use, edit, or remove these.

| Question | Answer |
|---|---|
| Do I need to move my RV? | **[FILL IN]** |
| Do you clean RV roofs? | **[FILL IN]** |
| Can you remove black streaks? | **[FILL IN]** |
| Do you clean awnings? | **[FILL IN]** |
| How do you price RV detailing? | **[FILL IN]** |
| Do you need water or power? | **[FILL IN]** |
| How long does service take? | **[FILL IN]** |
| Do you require a deposit? | **[FILL IN]** |
| What areas do you serve? | **[FILL IN]** |
| What if it rains? | **[FILL IN]** |

---

# 14. SEO inputs

## 14.1 Primary SEO targets

| Page | Target keyword | Page title |
|---|---|---|
| Home | mobile RV detailing Canton TX | Premium Mobile RV Detailing in Canton, TX - Mobile RV Detailers |
| Services | RV washing roof cleaning black streak removal | RV Washing, Roof Cleaning, Waxing & Black Streak Removal |
| Gallery | RV detailing before and after | RV Detailing Before & After Gallery |
| About | Mobile RV Detailers Canton TX | About Mobile RV Detailers |
| Service Areas | RV detailing near Canton TX | Mobile RV Detailing Service Areas |
| Contact | RV detailing quote Canton TX | Request an RV Detailing Quote |

## 14.2 Additional local SEO pages for later

Check if Codex should create now.

- [ ] `/rv-detailing-canton-tx`
- [ ] `/rv-roof-cleaning-canton-tx`
- [ ] `/rv-waxing-canton-tx`
- [ ] `/rv-black-streak-removal`
- [ ] `/rv-awning-cleaning`
- [ ] Not now; add later

## 14.3 Google Business Profile

| Field | Answer |
|---|---|
| Google Business Profile URL | **[FILL IN]** |
| Google review link | **[FILL IN]** |
| Google Maps link | **[FILL IN]** |

---

# 15. Social links

| Platform | URL | Show in header? | Show in footer? |
|---|---|---:|---:|
| Facebook | **[FILL IN]** | Yes / No | Yes / No |
| Instagram | **[FILL IN]** | Yes / No | Yes / No |
| YouTube | **[FILL IN]** | Yes / No | Yes / No |
| TikTok | **[FILL IN]** | Yes / No | Yes / No |
| Google Business Profile | **[FILL IN]** | Yes / No | Yes / No |

---

# 16. Legal and policy inputs

| Field | Answer |
|---|---|
| Privacy policy needed? | Yes |
| Terms page needed? | Yes |
| Use cookie banner? | No unless analytics/cookies require it |
| Analytics tool | Cloudflare Web Analytics / GA4 / None: **[FILL IN]** |
| Collect personal data on site? | No direct backend; quote form handled by external form tool |
| Display cancellation policy? | Yes / No: **[FILL IN]** |
| Cancellation policy | **[FILL IN]** |
| Deposit/refund policy | **[FILL IN]** |

---

# 17. Technical build requirements

| Requirement | Value |
|---|---|
| Framework | Astro |
| Language | TypeScript where helpful |
| Styling | Custom CSS with design tokens; no paid UI kit |
| Hosting | Cloudflare Pages |
| Backend | None |
| Database | None |
| Auth | None |
| Payment code | None; external payment processor only |
| Calendar code | None; external booking tool only |
| Forms | External form embed/link only |
| Image optimization | Local optimized WebP assets |
| Accessibility target | WCAG-conscious semantic HTML; Lighthouse accessibility target 95+ |
| Performance target | Lighthouse performance target 95+ on mobile where assets allow |
| SEO target | Lighthouse SEO target 95+ |
| Browser support | Current Chrome, Safari, Edge, Firefox; mobile Safari/Chrome |

---

# 18. Component requirements

Codex should build these reusable components.

- Header
- Mobile menu
- Sticky mobile CTA bar
- Footer
- Hero
- Trust chips
- Button
- Service card
- Package card
- Before/after proof block
- Gallery grid
- Quote CTA section
- FAQ section
- Review card
- Service area block
- SEO metadata component
- JSON-LD schema component

---

# 19. Showroom-stopper design requirements

Codex must treat this as a premium design build, not a generic template.

## Required polish

- Dark cinematic hero with real RV photography.
- Strong red/black/white brand contrast without overwhelming the page.
- Large, confident typography.
- Subtle motion: fade/slide on load, hover lifts, CTA microinteractions.
- Visual hierarchy that feels like a premium automotive/marine detailer.
- Gallery that makes results feel tangible.
- Mobile layout that looks intentional, not stacked by accident.
- Sticky mobile CTA for Call + Request Quote.
- No cheap coupon banners.
- No fake testimonials.
- No generic car stock images.
- No GoDaddy-style account/sign-in clutter.

## Design acceptance test

The final website should pass this subjective test:

> If a customer owns a $75K-$250K RV, the website should look credible enough that they would trust Mobile RV Detailers to work on it.

---

# 20. Launch checklist inputs

| Field | Answer |
|---|---|
| GitHub repo name | **[FILL IN]** |
| Cloudflare account email | **[FILL IN]** |
| Cloudflare Pages project name | **[FILL IN]** |
| Preview URL | **[FILL IN]** |
| Production domain | mobilervdetailers.com |
| `www` domain should redirect? | Yes / No: **[FILL IN]** |
| Existing email provider | GoDaddy / Google Workspace / Microsoft 365 / Other: **[FILL IN]** |
| Must preserve email DNS records? | Yes |
| Date to switch DNS | **[FILL IN]** |
| GoDaddy hosting cancellation date | **[FILL IN after new site is stable]** |

---

# 21. Final approvals

Before launch, Matt must approve:

- [ ] Logo usage
- [ ] Hero image
- [ ] Service descriptions
- [ ] Package names
- [ ] Pricing/quote language
- [ ] Phone number
- [ ] Email address
- [ ] Service areas
- [ ] Reviews/testimonials
- [ ] Booking link
- [ ] Payment link
- [ ] Privacy/terms pages
- [ ] Mobile layout
- [ ] Desktop layout
- [ ] Gallery images
- [ ] Final SEO titles/descriptions

---

# 22. Open issues / notes

Use this space for anything Codex should know.

```text
[FILL IN]
```
