export type LandingTestimonial = {
  id: string;
  quote: string;
  name: string;
  detail: string;
  initials: string;
};

export const landingTestimonials: LandingTestimonial[] = [
  {
    id: "t1",
    quote:
      "Splitting a Lisbon loft with two matched travelers cut my nightly rate in half. The AI summary matched my noise tolerance perfectly.",
    name: "Samira K.",
    detail: "Barcelona · solo traveler",
    initials: "SK",
  },
  {
    id: "t2",
    quote:
      "I was skeptical about roommate matching, but profiles felt human and reviews were real. Booking took one evening.",
    name: "Marcus L.",
    detail: "Remote worker · EU trips",
    initials: "ML",
  },
  {
    id: "t3",
    quote:
      "Finally an assistant that remembers I want walkable neighborhoods and daylight in the room — not just price sorting.",
    name: "Elena V.",
    detail: "Architecture tours · 34",
    initials: "EV",
  },
];
