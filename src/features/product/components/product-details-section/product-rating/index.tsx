'use client';

import StarRating from '@/components/ui/star-rating';

import ReviewsAction from './reviews-action';

interface ProductRatingProps {
  productId: string;
  numberOfReviews: number;
  rating: number;
  reviewsOpen?: boolean;
}

export default function ProductRating({
  productId,
  numberOfReviews,
  rating,
  reviewsOpen = false,
}: ProductRatingProps) {
  return (
    <div className="mt-3 flex items-center gap-2">
      <p className="text-xl">{rating}</p>
      <StarRating locked rating={Number(rating)} />
      <ReviewsAction
        productId={productId}
        total={numberOfReviews}
        reviewsOpen={reviewsOpen}
      />
    </div>
  );
}
