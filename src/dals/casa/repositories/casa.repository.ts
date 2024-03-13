import { Casa } from "../casa.model.js";

export interface CasaRepository {
  getCasaList: (page?: number, pageSize?: number) => Promise<Casa[]>;
  getCasa: (id: string) => Promise<Casa>;
  saveCasa: (casa: Casa) => Promise<Casa>;
  deleteCasa: (id: string) => Promise<boolean>;
}
