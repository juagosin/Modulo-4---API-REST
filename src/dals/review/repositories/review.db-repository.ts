import { ObjectId } from "mongodb";
import { ReviewRepository } from "./review.repository.js";
import { Review } from "../review.model.js";
import { getReviewContext } from '../review.context.js';

export const dbRepository: ReviewRepository = {

  saveReview: async (review: Review) => {
    return await getReviewContext().findOneAndUpdate(
      {
        _id: review._id,
      },
      { $set: review },
      { upsert: true, returnDocument: 'after' }
    );
  },
  getReview: async (id: string) => {
    return await getReviewContext().findOne({
         _id: new ObjectId(id),
       });
  },
};
