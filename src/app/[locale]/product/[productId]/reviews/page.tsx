import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import Reviews from '@/features/product/components/reviews';
import { fetchReviewsForProduct } from '@/features/product/data/client';
import getQueryClient from '@/lib/get-query-client';

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['reviews', productId],
    queryFn: async () =>
      await fetchReviewsForProduct({
        productId,
        sort: 'created_at',
        limit: 10,
        page: 1,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="section-wrapper">
        <Reviews productId={productId} />
      </div>
    </HydrationBoundary>
  );
}
