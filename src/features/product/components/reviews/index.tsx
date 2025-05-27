'use client';

import { useQuery } from '@tanstack/react-query';

import OverallRating from './overall-rating';
import ReviewsList from './reviews-list';
import ReviewsSkeleton from './reviews-skeleton';
import { fetchReviewsForProduct } from '../../data/client';

interface ReviewsProps {
  productId: string;
}

export default function Reviews({ productId }: ReviewsProps) {
  const { data, error, isLoading } = useQuery({
    queryKey: ['reviews', productId],
    queryFn: async () =>
      await fetchReviewsForProduct({
        productId,
        sort: 'created_at',
        limit: 10,
        page: 1,
      }),
  });

  if (isLoading) return <ReviewsSkeleton />;

  if (error) {
    // This error will be caught by error boundary and error page will be displayed
    throw new Error(error.message);
  }

  if (data) {
    return (
      <div className="flex flex-col gap-10 xl:flex-row xl:gap-8">
        <OverallRating
          statistics={data.data.statistics}
          total={data.data.total}
        />
        <ReviewsList reviews={data.data.reviews} />
      </div>
    );
  }
}
