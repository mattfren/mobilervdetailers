export type Service = {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  detail: string;
  bullets: string[];
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    id: "exterior-rv-wash",
    title: "Exterior RV Wash",
    eyebrow: "Road grime removal",
    summary: "RV-focused exterior washing for dirt, dust, bugs, road film, and general buildup.",
    detail:
      "A careful exterior wash helps remove travel grime while respecting the size, shape, seams, and finish concerns that make RVs different from ordinary vehicles.",
    bullets: ["Road film and dust", "Bug residue", "Windows and trim", "RV-safe process"],
    image: "/images/optimized/service-exterior-wash-centered.webp",
    alt: "Before and after RV front cap cleaning"
  },
  {
    id: "roof-cleaning",
    title: "Roof Cleaning",
    eyebrow: "Top-side care",
    summary: "Cleaning for dirt, debris, mold, and buildup on RV roof surfaces.",
    detail:
      "Roof cleaning is quoted with access, surface condition, and weather in mind so the work can be planned carefully.",
    bullets: ["Roof buildup", "Debris removal", "Condition review", "Quote-first planning"],
    image: "/images/optimized/service-roof-cleaning.webp",
    alt: "Before and after RV roof cleaning result"
  },
  {
    id: "black-streak-removal",
    title: "Black Streak Removal",
    eyebrow: "High-visibility proof",
    summary: "Treatment for dark runoff streaks that stain and dull RV exterior panels.",
    detail:
      "Black streak work is condition-dependent. Photos help set expectations and choose the right level of service before scheduling.",
    bullets: ["Runoff streaks", "Panel staining", "Targeted treatment", "Photo-based quoting"],
    image: "/images/optimized/service-exterior-wash.webp",
    alt: "Before and after RV lower side and wheel area exterior wash result"
  },
  {
    id: "wax-soap-hand-dry",
    title: "Wax Soap & Hand Dry",
    eyebrow: "Wash finish",
    summary: "A cleaner exterior finish using wax soap during the wash and hand drying after the rinse.",
    detail:
      "This is the finish step for the standard wash. It is not polish, buffing, paint correction, ceramic coating, or oxidation restoration.",
    bullets: ["Wax soap wash process", "Hand dry finish", "Cleaner exterior look", "No polish or paint correction"],
    image: "/images/optimized/service-wax-soap-finish.webp",
    alt: "Before and after RV roof detail area showing a cleaner wash finish"
  },
  {
    id: "awning-cleaning",
    title: "Awning Cleaning",
    eyebrow: "Fabric and hardware",
    summary: "Cleaning for dirt, mildew, mold, and stains on awning fabric and hardware.",
    detail:
      "Awning care is handled with attention to material condition, staining, and access so the owner understands what can be improved.",
    bullets: ["Awning fabric", "Hardware areas", "Mildew and stains", "Condition-aware care"],
    image: "/images/optimized/service-awning-cleaning.webp",
    alt: "Mobile RV Detailers cleaning an RV awning"
  },
  {
    id: "bug-tar-removal",
    title: "Bug & Tar Removal",
    eyebrow: "Front cap focus",
    summary: "Targeted removal of bug residue and tar before buildup becomes harder on exterior surfaces.",
    detail:
      "Bug and tar removal is often paired with exterior washing for RVs coming back from travel.",
    bullets: ["Front cap residue", "Tar spots", "Travel grime", "Wash add-on"],
    image: "/images/optimized/service-black-streak.webp",
    alt: "Before and after RV front cap cleaning proof photo"
  },
  {
    id: "custom-interior-requests",
    title: "Custom Interior Requests",
    eyebrow: "Case-by-case",
    summary: "Interior cleaning is not a standard package yet, but it can be discussed for the right scope and price.",
    detail:
      "Interior work is reviewed case by case. Photos, condition, expectations, and price need to be clear before it is accepted.",
    bullets: ["By request only", "Photos required", "Condition-based quote", "Accepted when scope fits"],
    image: "/images/optimized/service-maintenance.webp",
    alt: "Mobile RV Detailers service setup beside an RV"
  }
];
