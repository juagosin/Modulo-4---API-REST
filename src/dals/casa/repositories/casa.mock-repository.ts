import { ObjectId } from "mongodb";
import { CasaRepository } from "./casa.repository.js";
import { Casa } from "../casa.model.js";
import { db } from "../../mock-data.js";

const insertCasa = (casa: Casa) => {
  const _id = new ObjectId();
  const newCasa: Casa = {
    ...casa,
    _id,
  };

  db.casas = [...db.casas, newCasa];
  return newCasa;
};

const updateCasa = (casa: Casa) => {
  db.casas = db.casas.map((b) => (b._id.toHexString() === casa._id.toHexString() ? { ...b, ...casa } : b));
  return casa;
};
const paginateCasaList = (
  casaList: Casa[],
  page: number,
  pageSize: number
): Casa[] => {
  let paginatedCasaList = [...casaList];
  if (page && pageSize) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, paginatedCasaList.length);
    paginatedCasaList = paginatedCasaList.slice(startIndex, endIndex);
}

  return paginatedCasaList;
};

export const mockRepository: CasaRepository = {
  getCasaList: async (page?: number, pageSize?: number) =>
  paginateCasaList(db.casas, page, pageSize),
  getCasa: async (id: string) => db.casas.find((b) => b._id.toHexString() === id),
  saveCasa: async (casa: Casa) =>
  db.casas.some((b) => b._id.toHexString() === casa._id.toHexString()) ? updateCasa(casa) : insertCasa(casa),
  deleteCasa: async (id: string) => {
    const exists = db.casas.some((b) => b._id.toHexString() === id);
    db.casas = db.casas.filter((b) => b._id.toHexString() !== id);
    return exists;
  },
};
