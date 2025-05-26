import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { redirect } from 'next/navigation';

import Modal from '@/components/ui/modal';
import Reviews from '@/features/product/components/reviews';
import { fetchReviewsForProduct } from '@/features/product/data/client';
import getQueryClient from '@/lib/get-query-client';

export default async function ReviewsModal({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  if (!productId) redirect('/catalogue');

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['reviews'],
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
      <Modal open={true}>
        <Reviews productId={productId} />
      </Modal>
    </HydrationBoundary>
  );
}
