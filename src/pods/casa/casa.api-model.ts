import { Review } from "#dals/review/review.model.js";

export interface Casa {
    id: string;
    name: string;
    summary: string;
    street: string;
    reviews: Review;
  }