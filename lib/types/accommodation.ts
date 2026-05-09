export type AccommodationListing = {
  id: string;
  country: string;
  place: string;
  name: string;
  roomType: string;
  totalPricePerNightCents: number;
  splitCount: number;
  imageSrc?: string;
};
