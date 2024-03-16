import { Review } from "../review.model.js";

export interface ReviewRepository {
    saveReview: (review: Review) => Promise<Review>;  
}
