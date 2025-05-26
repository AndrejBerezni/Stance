import sql from '@/lib/db/connect';

import { Review } from '../types';
import {
  numberOfReviewsQuery,
  reviewsPerProductQuery,
} from './queries/reviews';

export const getReviewsForProduct = async ({
  productId,
  sort,
  limit,
  page,
}: {
  productId: string;
  sort: 'rating' | 'created_at';
  limit: number;
  page: number;
}) => {
  try {
    const offset = (page - 1) * limit;

    const [reviewsResult, countResult] = await sql.transaction([
      reviewsPerProductQuery({
        productId,
        sort,
        limit,
        offset,
      }),
      numberOfReviewsQuery(productId),
    ]);

    const totalItems = Number(countResult[0].number_of_reviews);
    const totalPages = Math.ceil(totalItems / limit);

    return {
      data: reviewsResult,
      meta: {
        page,
        totalPages,
        pageSize: limit,
        totalItems,
      },
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error fetching products:`, error.message);
    }

    return {
      data: [] as Review[],
      meta: {
        page: 1,
        totalPages: 1,
        pageSize: 6,
        totalItems: 0,
      },
    };
  }
};
