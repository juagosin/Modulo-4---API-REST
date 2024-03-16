import { ObjectId } from "mongodb";
export interface Review {
    _id: ObjectId;
    autor: string;
    review: string;
    fecha: Date;
    casa_id: ObjectId;
  }