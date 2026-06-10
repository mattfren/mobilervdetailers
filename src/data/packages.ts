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
    bestFor: "Owners who want a cleaner, road-ready RV exterior without extra roof, awning, or custom work.",
    description:
      "The standard exterior wash covers the main outside surfaces and common travel grime so the RV looks cleaner and better maintained.",
    includes: ["Hand wash exterior", "Bug removal", "Wheels cleaned", "Tire dressing", "Final rinse and spot check"],
    priceLabel: "Quote required"
  },
  {
    title: "Wash + Roof or Awning",
    label: "Maintenance package",
    bestFor: "RVs that need the normal wash plus either roof cleaning or awning cleaning.",
    description:
      "Add one higher-attention area to the normal wash when the roof or awning needs condition-based cleaning.",
    includes: ["Everything in Normal Wash", "Roof cleaning or awning cleaning", "Black streak treatment", "Mold and mildew removal"],
    priceLabel: "Quote required"
  },
  {
    title: "Full Exterior Detail",
    label: "Complete exterior",
    bestFor: "Owners who want the complete exterior package with wash, roof cleaning, awning cleaning, and condition-based exterior attention.",
    description:
      "Full Exterior Detail includes the normal wash plus both roof and awning cleaning, with black streak, bug, tar, window, and hand-dry finish attention when applicable.",
    includes: ["Everything in Normal Wash", "Roof cleaning", "Awning cleaning", "Black streak and bug/tar attention", "Window detailing"],
    priceLabel: "Quote required"
  },
  {
    title: "Custom RV Detail Quote",
    label: "Special requests",
    bestFor: "Owners who need something outside the standard wash, roof or awning package, or Full Exterior Detail.",
    description:
      "Custom requests are quoted case by case. Interior cleaning or unusual exterior conditions can be discussed when the scope is clear.",
    includes: ["Photo-based scope review", "Interior requests by quote only", "Extra-heavy grime or staining", "Custom quote before scheduling"],
    priceLabel: "Quote required"
  }
];

export const pricingDisclaimer =
  "Service categories help frame the quote, and the final scope depends on RV length, condition, service location, roof or awning condition, black streaks, bugs, road film, and any custom requests. Photos help Mobile RV Detailers quote accurately.";
