import StarRating from '@/components/ui/star-rating';

import LeaveFirstReview from './leave-first-review';
import SeeAllReviews from './see-all-reviews';
import { getProductRating } from '../../../server-actions';

export default async function ProductRating({
  productId,
}: {
  productId: string;
}) {
  const { rating, total } = await getProductRating(productId);

  return (
    <div className="flex items-center gap-2 mt-3">
      <p className="text-xl">{rating}</p>
      <StarRating locked initial={Number(rating)} />
      {total === 0 ? <LeaveFirstReview /> : <SeeAllReviews total={total} />}
    </div>
  );
}
