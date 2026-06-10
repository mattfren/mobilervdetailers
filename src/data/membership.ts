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
    startingPrice: "Quote required",
    summary: "Keep your RV looking clean and road-ready.",
    includes: ["Hand wash exterior", "Bug removal", "Wheels cleaned", "Tire dressing", "Final rinse and spot check"]
  },
  {
    title: "Wash + Roof or Awning",
    eyebrow: "Popular maintenance",
    startingPrice: "Quote required",
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
    startingPrice: "Quote required",
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
  eyebrow: "Pending approval",
  startingPrice: "Pending owner approval",
  summary:
    "Membership details are not published until pricing, benefits, service-credit rules, and terms are approved.",
  benefits: [
    "Benefits pending owner approval",
    "Terms pending owner approval",
    "Enrollment pending owner approval"
  ],
  pricing: ["Pending owner approval"],
  savingsExample: {
    title: "Savings example pending approval",
    retail: "Retail price pending approval",
    member: "Member price pending approval",
    savings: "Savings claim pending approval"
  },
  annualSavings: "Annual savings claim pending approval."
};
