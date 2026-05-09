import type { UserProfile } from "@/lib/types/profile";

export const mockProfile: UserProfile = {
  displayName: "Jordan Martinez",
  age: 29,
  gender: "Non-binary",
  bio: "Slow-travel fan who prefers walkable neighborhoods, sunny balconies, and hosts who share local tips.",
  interests: ["architecture walks", "specialty coffee", "film festivals"],
  avatarSrc:
    "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&q=80",
  reviews: [
    {
      id: "rev-1",
      authorName: "Priya",
      rating: 5,
      comment:
        "Clear communicator and respectful roommate split — we'd share a stay again.",
    },
    {
      id: "rev-2",
      authorName: "Leo",
      rating: 4,
      comment:
        "Friendly and punctual with payments. Enjoyed talking itineraries over breakfast.",
    },
  ],
};
