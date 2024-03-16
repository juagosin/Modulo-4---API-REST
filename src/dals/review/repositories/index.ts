import { mockRepository } from "./review.mock-repository.js";
import { dbRepository } from "./review.db-repository.js";
import { envConstants } from "#core/constants/index.js";

export const reviewRepository = envConstants.isApiMock ? mockRepository : dbRepository;
