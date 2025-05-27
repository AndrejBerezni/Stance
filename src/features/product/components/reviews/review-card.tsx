import { memo } from 'react';

import StarRating from '@/components/ui/star-rating';
import CustomerAvatar from '@/features/customer/components/customer-avatar';

import { Review } from '../../types';
import { formatDate } from '../../utils';

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex flex-col gap-4">
      <div className="flex gap-4">
        <CustomerAvatar src={review.user_avatar} customer={review.user_name} />
        <div className="flex flex-1 flex-col gap-1">
          <div className="flex items-center justify-between">
            <p className="font-semibold">{review.user_name}</p>
            <p className="text-ink-600 text-xs">
              {formatDate(review.created_at)}
            </p>
          </div>
          <StarRating rating={review.rating} locked />
        </div>
      </div>
      <p className="text-ink-600">{review.content}</p>
    </article>
  );
}

export default memo(ReviewCard);
