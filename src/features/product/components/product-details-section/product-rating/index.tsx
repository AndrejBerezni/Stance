'use client';
import Link from 'next/link';
import { useLocale } from 'next-intl';

import StarRating from '@/components/ui/star-rating';

import LeaveFirstReview from './leave-first-review';
import SeeAllReviews from './see-all-reviews';

interface ProductRatingProps {
  productId: string;
  numberOfReviews: number;
  rating: number;
}

export default function ProductRating({
  productId,
  numberOfReviews,
  rating,
}: ProductRatingProps) {
  const locale = useLocale();
  return (
    <div className="mt-3 flex items-center gap-2">
      <p className="text-xl">{rating}</p>
      <StarRating locked rating={Number(rating)} />
      {numberOfReviews === 0 ? (
        <LeaveFirstReview />
      ) : (
        <SeeAllReviews total={numberOfReviews} />
      )}
      <Link href={`/${locale}/product/${productId}/reviews`}>
        {`/${locale}/product/${productId}/reviews`}
      </Link>
    </div>
  );
}
