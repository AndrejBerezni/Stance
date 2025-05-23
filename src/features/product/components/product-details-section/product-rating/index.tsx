import StarRating from '@/components/ui/star-rating';

import LeaveFirstReview from './leave-first-review';
import SeeAllReviews from './see-all-reviews';

interface ProductRatingProps {
  numberOfReviews: number;
  rating: number;
}

export default function ProductRating({
  numberOfReviews,
  rating,
}: ProductRatingProps) {
  return (
    <div className="mt-3 flex items-center gap-2">
      <p className="text-xl">{rating}</p>
      <StarRating locked rating={Number(rating)} />
      {numberOfReviews === 0 ? (
        <LeaveFirstReview />
      ) : (
        <SeeAllReviews total={numberOfReviews} />
      )}
    </div>
  );
}
