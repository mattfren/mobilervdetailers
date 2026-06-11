export type Package = {
  title: string;
  label: string;
  bestFor: string;
  description: string;
  includes: string[];
  priceLabel: string;
};

export const packages: Package[] = [
  {
    title: "Normal Wash",
    label: "Core service",
    bestFor: "A cleaner, road-ready RV exterior.",
    description:
      "Main exterior surfaces, wheels, tires, bugs, and a final spot check.",
    includes: ["Hand wash exterior", "Bug removal", "Wheels + tire dressing", "Final rinse + spot check"],
    priceLabel: "Quote required"
  },
  {
    title: "Wash + Roof or Awning",
    label: "Maintenance package",
    bestFor: "A normal wash plus one top-side area.",
    description:
      "Add roof cleaning or awning cleaning when one area needs extra attention.",
    includes: ["Everything in Normal Wash", "Roof or awning cleaning", "Black streak treatment", "Mold + mildew removal"],
    priceLabel: "Quote required"
  },
  {
    title: "Full Exterior Detail",
    label: "Complete exterior",
    bestFor: "The complete exterior cleaning package.",
    description:
      "Normal wash, roof, awning, streak, bug, tar, and window attention where applicable.",
    includes: ["Everything in Normal Wash", "Roof cleaning", "Awning cleaning", "Streak + bug/tar attention", "Window detailing"],
    priceLabel: "Quote required"
  },
  {
    title: "Custom RV Detail Quote",
    label: "Special requests",
    bestFor: "Heavy grime, staining, interiors, or unusual requests.",
    description:
      "Quoted case by case when the scope is clear.",
    includes: ["Photo-based scope review", "Interior by quote only", "Custom price before scheduling"],
    priceLabel: "Quote required"
  }
];

export const pricingDisclaimer =
  "Final scope depends on RV length, condition, location, access, roof or awning needs, streaks, bugs, road film, and photos.";
