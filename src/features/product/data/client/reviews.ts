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

  const responsePromise = await fetch(`/api/reviews?${params}`);
  const response = await responsePromise.json();

  if (response.error) {
    throw new Error(response.error);
  }

  return response;
};
