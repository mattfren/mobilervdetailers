export type InstagramTile = {
  title: string;
  image: string;
  alt: string;
  caption: string;
};

export type FacebookReview = {
  name: string;
  date: string;
  initial: string;
  excerpt: string;
};

export const instagramTiles: InstagramTile[] = [
  {
    title: "Class C Finish",
    image: "/images/optimized/hero-rv-exterior.webp",
    alt: "Clean Class C RV exterior side after detailing",
    caption: "Clean exterior finish"
  },
  {
    title: "Awning Care",
    image: "/images/optimized/service-awning-cleaning.webp",
    alt: "Mobile RV Detailers cleaning an RV awning",
    caption: "Awning cleaning in progress"
  },
  {
    title: "Roof Result",
    image: "/images/optimized/service-roof-cleaning.webp",
    alt: "Before and after RV roof cleaning result",
    caption: "Roof cleaning proof"
  },
  {
    title: "Front Cap",
    image: "/images/optimized/gallery-front-cap-before-after.webp",
    alt: "Before and after RV front cap cleaning result",
    caption: "Front-cap cleanup"
  },
  {
    title: "Wheel Detail",
    image: "/images/optimized/gallery-wheel-detail.webp",
    alt: "Before and after RV wheel detailing result",
    caption: "Wheel and trim detail"
  },
  {
    title: "Exterior Wash",
    image: "/images/optimized/service-exterior-wash.webp",
    alt: "Before and after RV lower side and wheel area exterior wash result",
    caption: "Exterior wash result"
  }
];

export const facebookReviews: FacebookReview[] = [
  {
    name: "GD Trout",
    date: "6/18/2024",
    initial: "GD",
    excerpt: "You want someone who takes pride in doing a good job and someone who actually cares abo..."
  },
  {
    name: "Gary Trout",
    date: "6/17/2024",
    initial: "G",
    excerpt: "This business is owned and operated by good people who always do their best for every clie..."
  },
  {
    name: "Russell Spillers",
    date: "11/11/2025",
    initial: "R",
    excerpt: "Five-Star Mobile RV Detailing! (Canton, TX) I highly recommend this mobile RV detail..."
  },
  {
    name: "Devin Holt",
    date: "7/21/2024",
    initial: "D",
    excerpt: "These people surpassed all my hopes and expectations. They were prompt, professional, enga..."
  },
  {
    name: "Tony Fitzgerald",
    date: "6/18/2024",
    initial: "T",
    excerpt: "They detailed my fifth wheel and did a phenomenal job on both the inside and the outside! 10/10"
  }
];

export const facebookSummary = {
  label: "Mobile RV Detailers",
  rating: "100% recommend",
  note: "Based on the opinion of 5 people"
};
