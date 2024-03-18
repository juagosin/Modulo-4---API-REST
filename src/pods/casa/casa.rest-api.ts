import { Router } from "express";
import { casaRepository, reviewRepository } from "#dals/index.js";
import { mapCasaListFromModelToApi, mapCasaFromModelToApi, mapCasaFromApiToModel } from "./casa.mappers.js";
import { mapReviewListFromModelToApi, mapReviewFromModelToApi, mapReviewFromApiToModel } from "#pods/review/review.mappers.js";

export const casasApi = Router();

casasApi
  .get("/", async (req, res, next) => {
    try {
      const page = Number(req.query.page);
      const pageSize = Number(req.query.pageSize);
      const casaList = await casaRepository.getCasaList(page, pageSize);

      res.send(mapCasaListFromModelToApi(casaList));
    } catch (error) {
      next(error);
    }
  })
.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const casa = await casaRepository.getCasa(id);
    if (casa) {
      res.send(mapCasaFromModelToApi(casa));
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
})  
.post("/", async (req, res, next) => {
  try {
    const casa = mapCasaFromApiToModel(req.body);
    const newCasa = await casaRepository.saveCasa(casa);     
    res.status(201).send(mapCasaFromModelToApi(newCasa));
  } catch (error) {
    next(error);
  }
  })
.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const casa = mapCasaFromApiToModel({ ...req.body, id });
    await casaRepository.saveCasa(casa);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
})
.post("/:id/reviews/", async (req, res, next) => {
  try {
    const { id } = req.params;
    const review = mapReviewFromApiToModel(req.body);
    const newReview = await reviewRepository.saveReview(review);    
    res.sendStatus(201).send(mapReviewFromModelToApi(newReview));
  } catch (error) {
    next(error);
  }
})
.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await casaRepository.deleteCasa(id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});
