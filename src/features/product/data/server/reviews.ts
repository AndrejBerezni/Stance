'server only';
import sql from '@/lib/db/connect';

import { Review, ReviewsResponse } from '../../types';
import {
  ratingStatisticsQuery,
  reviewsPerProductQuery,
} from '../queries/reviews';

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
}): Promise<ReviewsResponse> => {
  try {
    const offset = (page - 1) * limit;

    const [reviewsResult, statisticsResult] = await sql.transaction([
      reviewsPerProductQuery({
        productId,
        sort,
        limit,
        offset,
      }),
      ratingStatisticsQuery(productId),
    ]);

    const totalItems = statisticsResult.reduce((acc, cur) => {
      return acc + cur.count;
    }, 0);
    const totalPages = Math.ceil(totalItems / limit);

    return {
      data: {
        reviews: reviewsResult as Review[],
        statistics: statisticsResult,
      },
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
      data: {
        reviews: [],
        statistics: [],
      },
      meta: {
        page: 1,
        totalPages: 1,
        pageSize: 6,
        totalItems: 0,
      },
    };
  }
};
