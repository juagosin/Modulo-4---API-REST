import { ObjectId } from "mongodb";
import { CasaRepository } from "./casa.repository.js";
import { Casa } from "../casa.model.js";
import { getCasaContext } from '../casa.context.js';

export const dbRepository: CasaRepository = {
  getCasaList: async (page?: number, pageSize?: number) => {
    const skip = Boolean(page) ? (page - 1) * pageSize : 0;
    const limit = pageSize ?? 0;
    return await getCasaContext()
    .find()
    .skip(skip)
    .limit(limit)
    .toArray();
  },
  getCasa: async (id: string) => {
    return await getCasaContext().findOne({
         _id: new ObjectId(id),
       });
  },
  saveCasa: async (casa: Casa) => {
    return await getCasaContext().findOneAndUpdate(
      {
        _id: casa._id,
      },
      { $set: casa },
      { upsert: true, returnDocument: 'after' }
    );
  },
  deleteCasa: async (id: string) => {
    throw new Error("Not implemented");
  },
};
