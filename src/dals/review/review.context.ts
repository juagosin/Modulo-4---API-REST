import { db } from '#core/servers/index.js';
import { Review } from './review.model.js';

export const getReviewContext = () => db?.collection<Review>('reviews');