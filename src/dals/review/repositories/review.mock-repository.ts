import { ObjectId } from "mongodb";
import { ReviewRepository } from "./review.repository.js";
import { Review } from "../review.model.js";
import { db } from "../../mock-data.js";

const insertReview = (review: Review) => {
  const _id = new ObjectId();
  const newReview: Review = {
    ...review,
    _id,
  };

  db.reviews = [...db.reviews, newReview];
  return newReview;
};




export const mockRepository: ReviewRepository = {

  saveReview: async (review: Review) =>
  insertReview(review)

};
