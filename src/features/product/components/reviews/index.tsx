'use client';

import { useQuery } from '@tanstack/react-query';

import OverallRating from './overall-rating';
import ReviewsList from './reviews-list';
import { fetchReviewsForProduct } from '../../data/client';

interface ReviewsProps {
  productId: string;
}

export default function Reviews({ productId }: ReviewsProps) {
  const { data, error } = useQuery({
    queryKey: ['reviews', productId],
    queryFn: async () =>
      await fetchReviewsForProduct({
        productId,
        sort: 'created_at',
        limit: 10,
        page: 1,
      }),
  });

  if (error) {
    console.log(error.message);
    return <div>{error.message}</div>;
  }
  if (data) {
    console.log('data:', data);
    return (
      <div className="grid grid-cols-1 gap-10 xl:grid-cols-3 xl:gap-8">
        <OverallRating
          statistics={data.data.statistics}
          total={data.data.total}
        />
        <ReviewsList reviews={data.data.reviews} />
      </div>
    );
  }
}
