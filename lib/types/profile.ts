export type ProfileReview = {
  id: string;
  authorName: string;
  rating: number;
  comment: string;
};

export type UserProfile = {
  displayName: string;
  age: number;
  gender: string;
  bio: string;
  interests: string[];
  avatarSrc?: string;
  reviews: ProfileReview[];
};
