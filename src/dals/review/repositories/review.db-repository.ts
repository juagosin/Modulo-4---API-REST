import { ObjectId } from "mongodb";
import { ReviewRepository } from "./review.repository.js";
import { Review } from "../review.model.js";
import { getReviewContext } from '../review.context.js';

export const dbRepository: ReviewRepository = {

  saveReview: async (review: Review) => {
    throw new Error("Not implemented");
  },
  getReview: async (id: string) => {
    return await getReviewContext().findOne({
         _id: new ObjectId(id),
       });
  },
};
