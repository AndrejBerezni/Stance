'server only';
import sql from '@/lib/db/connect';

import {
  Review,
  ReviewsResponse,
  StatisticsItem,
  TotalReviews,
} from '../../types';
import {
  numberOfReviewsQuery,
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

    const [reviewsResult, statisticsResult, totalResult] =
      await sql.transaction([
        reviewsPerProductQuery({
          productId,
          sort,
          limit,
          offset,
        }),
        ratingStatisticsQuery(productId),
        numberOfReviewsQuery(productId),
      ]);

    const totalItems = totalResult[0].number_of_reviews;
    const totalPages = Math.ceil(totalItems / limit);

    return {
      data: {
        reviews: reviewsResult as Review[],
        statistics: statisticsResult as StatisticsItem[],
        total: totalResult[0] as TotalReviews,
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
        total: { number_of_reviews: 0, rating: 0 },
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
