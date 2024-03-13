import { ObjectId } from "mongodb";
export interface Casa {
    _id: ObjectId;
    name: string;
    summary: string;
    street: string;
  }
  