import { ReviewsResponse } from '../../types';

export const fetchReviewsForProduct = async ({
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
  const params = new URLSearchParams({
    productId,
    sort,
    limit: limit.toString(),
    page: page.toString(),
  });

  const response = await fetch(`/api/reviews?${params}`);
  const data = await response.json();

  if (data.error) {
    throw new Error(data.error);
  }

  return data;
};
