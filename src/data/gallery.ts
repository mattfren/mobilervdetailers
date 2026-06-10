export type GalleryItem = {
  title: string;
  category: string;
  image: string;
  alt: string;
  caption: string;
};

export const galleryItems: GalleryItem[] = [
  {
    title: "Clean Class C Exterior",
    category: "Exterior finish",
    image: "/images/optimized/hero-rv-exterior.webp",
    alt: "Clean Class C RV exterior side after detailing",
    caption: "Clean Class C exterior finish after mobile RV service."
  },
  {
    title: "Exterior Before / After",
    category: "Before / After",
    image: "/images/optimized/proof-before-after.webp",
    alt: "Before and after RV exterior cleaning result",
    caption: "Side-panel comparison showing visible exterior improvement after service."
  },
  {
    title: "Exterior Wash",
    category: "Exterior care",
    image: "/images/optimized/service-exterior-wash.webp",
    alt: "Before and after RV lower side and wheel area exterior wash result",
    caption: "Lower side panel and wheel-area comparison after exterior wash work."
  },
  {
    title: "Roof Cleaning",
    category: "Roof care",
    image: "/images/optimized/service-roof-cleaning.webp",
    alt: "Before and after RV roof cleaning result",
    caption: "Roof surface comparison after condition-based cleaning."
  },
  {
    title: "Front Cap Cleaning",
    category: "Front cap proof",
    image: "/images/optimized/gallery-front-cap-before-after.webp",
    alt: "Before and after RV front cap cleaning result",
    caption: "Front-cap comparison for road film and exterior buildup."
  },
  {
    title: "Wheel Detail",
    category: "Detail work",
    image: "/images/optimized/gallery-wheel-detail.webp",
    alt: "Before and after RV wheel detailing result",
    caption: "Wheel-area detail comparison with a cleaner high-visibility finish."
  },
  {
    title: "Awning Cleaning",
    category: "Awning care",
    image: "/images/optimized/gallery-awning-cleaning.webp",
    alt: "RV awning cleaning in progress",
    caption: "Awning cleaning in progress with Mobile RV Detailers."
  },
  {
    title: "Roof Seal Area",
    category: "Roof detail",
    image: "/images/optimized/gallery-roof-seal-before-after.webp",
    alt: "Before and after RV roof seal area cleaning",
    caption: "Close-up roof and seal-area cleanup proof."
  },
  {
    title: "Rear Exterior",
    category: "Before / After",
    image: "/images/optimized/gallery-rear-exterior-before-after.webp",
    alt: "Before and after rear RV exterior cleaning result",
    caption: "Rear exterior comparison showing cleaner exterior panels."
  }
];
