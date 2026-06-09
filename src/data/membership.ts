export type MembershipPackage = {
  title: string;
  eyebrow: string;
  startingPrice: string;
  perFootPrice?: string;
  summary: string;
  includes: string[];
};

export const membershipPackages: MembershipPackage[] = [
  {
    title: "Normal Wash",
    eyebrow: "Road-ready exterior",
    startingPrice: "Starting at $300",
    perFootPrice: "Starting at $10/ft",
    summary: "Keep your RV looking clean and road-ready.",
    includes: ["Hand wash exterior", "Bug removal", "Wheels cleaned", "Tire dressing", "Final rinse and spot check"]
  },
  {
    title: "Wash + Roof or Awning",
    eyebrow: "Popular maintenance",
    startingPrice: "Starting at $450",
    perFootPrice: "Starting at $15/ft",
    summary: "Our most popular maintenance add-on package.",
    includes: [
      "Everything in Normal Wash",
      "Roof cleaning or awning cleaning",
      "Black streak treatment",
      "Mold and mildew removal"
    ]
  },
  {
    title: "Full Exterior Detail",
    eyebrow: "Complete exterior",
    startingPrice: "Starting at $600",
    perFootPrice: "Starting at $15-$20/ft",
    summary: "The complete exterior package for wash, roof, awning, and condition-based exterior attention.",
    includes: [
      "Everything in Normal Wash",
      "Roof cleaning",
      "Awning cleaning",
      "Black streak and bug/tar attention",
      "Window detailing",
      "Final hand-dry finish"
    ]
  }
];

export const careClub = {
  title: "RV Care Club",
  eyebrow: "Most popular",
  startingPrice: "Starting at $79/month",
  summary:
    "Protect your RV year-round while saving on every service. Build service credits every month and enjoy exclusive member benefits.",
  benefits: [
    "Earn service credits every month",
    "15% off detailing services",
    "Priority scheduling",
    "Annual roof and seal inspection",
    "Storm damage inspections",
    "Locked-in member pricing",
    "Cancel anytime"
  ],
  pricing: ["Up to 35 ft - $79/month", "36-45 ft - $99/month"],
  savingsExample: {
    title: "40 ft RV Exterior Wash",
    retail: "Retail Price: $400",
    member: "Member Price: $340",
    savings: "You save $60 every visit."
  },
  annualSavings: "Average member saves $150-$500+ per year while keeping their RV in better condition."
};
