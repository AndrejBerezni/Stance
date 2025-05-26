'use client';

import { useQuery } from '@tanstack/react-query';

import { fetchReviewsForProduct } from '../../data/client';
import { Review } from '../../types';

interface ReviewsProps {
  productId: string;
}

export default function Reviews({ productId }: ReviewsProps) {
  const { data } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () =>
      await fetchReviewsForProduct({
        productId,
        sort: 'created_at',
        limit: 10,
        page: 1,
      }),
  });
  if (data) {
    return (
      <>
        {data.data.reviews.map((review: Review) => (
          <p key={review.id}>{review.content}</p>
        ))}
      </>
    );
  }
}
