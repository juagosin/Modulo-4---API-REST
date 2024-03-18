import { ObjectId } from "mongodb";
import * as model from "#dals/index.js";
import * as apiModel from "./review.api-model.js";

export const mapReviewFromModelToApi = (review: model.Review): apiModel.Review => ({
  id: review._id.toHexString(),
  autor: review.autor,
  review: review.review,
  fecha: review.fecha,  
});

export const mapReviewListFromModelToApi = (
    reviewList: model.Review[]
): apiModel.Review[] => reviewList.map(mapReviewFromModelToApi);

export const mapReviewFromApiToModel = (review: apiModel.Review): model.Review => ({
  _id: new ObjectId(review.id),
   autor: review.autor,
   review: review.review,
   fecha: review.fecha,
   
 });
