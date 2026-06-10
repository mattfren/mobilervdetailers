export const brand = {
  red: "#D71920",
  ink: "#0B0D10",
  charcoal: "#171B21",
  ivory: "#F7F5EF",
  paper: "#FFFFFF",
  steel: "#64707D",
  ember: "#C4893A"
};

export const site = {
  name: "Mobile RV Detailers",
  tagline: "Premium mobile RV detailing in Canton, TX",
  domain: "mobilervdetailers.com",
  baseUrl: "https://mobilervdetailers.com",
  phone: "(903) 502-4242",
  phoneHref: "tel:+19035024242",
  email: "",
  emailHref: "",
  location: {
    city: "Canton",
    state: "TX",
    county: "Van Zandt County"
  },
  quoteFormUrl: "https://tally.so/r/xXvkqJ",
  bookingUrl: "",
  paymentUrl: "https://pay.mobilervdetailers.com/",
  googleBusinessUrl: "https://www.google.com/maps/search/?api=1&query=Mobile%20RV%20Detailers%20Canton%20TX",
  googleReviewsUrl: "https://g.page/r/Caj5p3wjHiU9EAI/review",
  facebookUrl: "https://www.facebook.com/105565861892684",
  messengerUrl: "https://m.me/105565861892684",
  facebookReviewsUrl: "https://facebook.com/105565861892684/reviews",
  instagramUrl: "https://www.instagram.com/etxmobilervdetailers/?hl=en",
  yelpUrl: "https://www.yelp.com/biz/mobile-rv-detailers-canton?osq=Mobile+RV+Detailers&override_cta=Request+pricing+%26+availability",
  mapSearchUrl: "https://www.google.com/maps/search/?api=1&query=Canton%2C%20TX",
  mapCenter: {
    lat: 32.5565,
    lng: -95.8633
  },
  serviceAreas: ["Canton, TX"],
  travelZones: [
    {
      label: "Local zone",
      time: "Within about 30 minutes of Canton",
      fee: "No travel fee",
      note: "Best fit for standard local mobile RV detailing appointments."
    },
    {
      label: "Extended zone",
      time: "Within about 1 hour of Canton",
      fee: "Travel fee applies",
      note: "Available by quote when route, schedule, and service scope work."
    }
  ],
  hours: ["By appointment"],
  primaryCta: "Request Quote",
  secondaryCta: "Call (903) 502-4242",
  images: {
    logo: "/images/optimized/logo-mobile-rv-detailers.svg",
    hero: "/images/optimized/hero-rv-exterior.webp",
    proof: "/images/optimized/proof-before-after.webp",
    proofBefore: "/images/optimized/proof-before-panel.webp",
    proofAfter: "/images/optimized/proof-after-panel.webp"
  },
  trustChips: [
    "Mobile Service",
    "RV-Specific Cleaning",
    "Roof or Awning Care",
    "Wax Soap + Hand Dry",
    "Canton, TX Based"
  ],
  nav: [
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ]
};

export const launchApprovals = {
  pricesApproved: false,
  careClubApproved: false,
  reviewsApproved: false,
  licensedInsuredApproved: false
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const isTodoLink = (url?: string) => !url || url === "#todo";

export const isConfiguredUrl = (url?: string) => !isTodoLink(url);

export const getQuoteAction = () => {
  const href = !isTodoLink(site.quoteFormUrl) ? site.quoteFormUrl : "/contact";
  const external = href.startsWith("http");

  return {
    href,
    label: "Request Quote",
    external
  };
};

export const getMessengerAction = () => ({
  href: site.messengerUrl,
  label: "Message on Facebook",
  external: true
});

export const getTextAction = () => ({
  href: "sms:+19035024242",
  label: "Text Photos",
  external: false
});

export const getBookingAction = () => {
  const hasBookingUrl = !isTodoLink(site.bookingUrl);
  const href = hasBookingUrl ? site.bookingUrl : "/contact";
  const external = href.startsWith("http");

  return {
    href,
    label: external ? "Book Online" : "Request Scheduling",
    external
  };
};

export const absoluteUrl = (path = "/") => {
  if (path.startsWith("http")) return path;
  return new URL(path, site.baseUrl).toString();
};

export const localBusinessJsonLd = () => {
  const sameAs = [site.googleBusinessUrl, site.facebookUrl, site.instagramUrl, site.yelpUrl].filter(
    (url) => !isTodoLink(url)
  );

  const description = launchApprovals.careClubApproved
    ? "Premium mobile RV washing, roof or awning care, black streak removal, Full Exterior Detail packages, RV Care Club membership, and custom RV detail requests based in Canton, Texas."
    : "Premium mobile RV washing, roof or awning care, black streak removal, Full Exterior Detail packages, and custom RV detail requests based in Canton, Texas.";

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.baseUrl,
    telephone: site.phone,
    image: absoluteUrl(site.images.hero),
    ...(launchApprovals.pricesApproved ? { priceRange: "Quote-based" } : {}),
    description,
    areaServed: site.serviceAreas.map((area) => ({
      "@type": "City",
      name: area
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressRegion: site.location.state,
      addressCountry: "US"
    },
    sameAs
  };
};

export const faqJsonLd = (items: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
});
