import ReviewCard from './review-card';
import { Review } from '../../types';

interface ReviewsListProps {
  reviews: Review[];
}

export default function ReviewsList({ reviews }: ReviewsListProps) {
  return (
    <section className="col-span-1 flex flex-col gap-6 md:gap-8 xl:col-span-2">
      {reviews.map((review: Review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </section>
  );
}
