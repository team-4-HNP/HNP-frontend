import type { AccommodationListing } from "@/lib/types/accommodation";

export const mockAccommodations: AccommodationListing[] = [
  {
    id: "stay-lisbon-riverside",
    country: "Portugal",
    place: "Lisbon · Alfama",
    name: "Riverside Loft Guesthouse",
    roomType: "Deluxe double · balcony",
    totalPricePerNightCents: 13400,
    splitCount: 4,
    imageSrc:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  },
  {
    id: "stay-barcelona-eixample",
    country: "Spain",
    place: "Barcelona · Eixample",
    name: "Casa Ros Modern Flat",
    roomType: "2-bedroom apartment",
    totalPricePerNightCents: 21250,
    splitCount: 5,
    imageSrc:
      "https://images.unsplash.com/photo-1523419409543-a9e57e783492?w=800&q=80",
  },
  {
    id: "stay-reykjavik-quiet",
    country: "Iceland",
    place: "Reykjavík · Vesturbær",
    name: "Nord Studio Suites",
    roomType: "Queen studio · kitchenette",
    totalPricePerNightCents: 18990,
    splitCount: 3,
    imageSrc:
      "https://images.unsplash.com/photo-1586495577886-b595d29ea83f?w=800&q=80",
  },
];
