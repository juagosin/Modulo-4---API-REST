
import { ObjectId } from "mongodb";
export interface Casa {
    _id: ObjectId;
    name: string;
    summary: string;
    street: string;
    reviews: Review;
  }
  export interface Review {
    _id: ObjectId;
    autor: string;
    review: string;
    fecha: Date;

  }