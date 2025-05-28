import { useTranslations } from 'next-intl';

import Button from '@/components/ui/button';

import ReviewCard from './review-card';
import { Review } from '../../types';

interface ReviewsListProps {
  reviews: Review[];
  loadMore: () => void;
  isLoadingMore: boolean;
  hasMore: boolean;
}

export default function ReviewsList({
  reviews,
  loadMore,
  isLoadingMore,
  hasMore,
}: ReviewsListProps) {
  const translate = useTranslations('reviews');
  return (
    <section className="flex flex-1 flex-col gap-6 pb-4 md:gap-8">
      <ul className="flex w-full flex-col gap-6 md:gap-8">
        {reviews.map((review: Review) => (
          <li key={review.id}>
            <ReviewCard review={review} />
          </li>
        ))}
      </ul>
      {hasMore && (
        <Button
          disabled={isLoadingMore}
          onClick={() => loadMore()}
          aria-label="Load more reviews"
          variant="secondary"
          size="sm"
        >
          {translate('loadMore')}
        </Button>
      )}
    </section>
  );
}
