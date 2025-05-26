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
}) => {
  const params = new URLSearchParams({
    productId,
    sort,
    limit: limit.toString(),
    page: page.toString(),
  });

  const response = await fetch(`/api/reviews?${params}`);

  if (!response.ok) {
    throw new Error('Failed to fetch reviews');
  }

  return response.json();
};
