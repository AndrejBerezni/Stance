import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import buttonVariants from '@/components/ui/button/styles';
import { cn } from '@/lib/utils/cn';

interface ReviewsActionProps {
  productId: string;
  total: number;
  reviewsOpen: boolean;
}

export default function ReviewsAction({
  productId,
  total,
  reviewsOpen,
}: ReviewsActionProps) {
  const translate = useTranslations('productPage');
  const locale = useLocale();

  const noReviews = total === 0;

  if (reviewsOpen) {
    return (
      <>
        {!noReviews && (
          <p className="text-ink-600 text-sm">{`${translate('basedOn')} ${total} ${translate('reviews')}`}</p>
        )}
      </>
    );
  }

  return (
    <div className="flex gap-1 text-sm">
      {noReviews && <p>{translate('noReviews')}</p>}
      <Link
        href={
          noReviews
            ? `/${locale}/product/${productId}/add-review`
            : `/${locale}/product/${productId}/reviews`
        }
        className={cn(buttonVariants({ variant: 'link' }), 'text-sm')}
      >
        {noReviews
          ? translate('beFirst')
          : `${translate('seeAll')} ${total} ${translate('reviews')}`}
      </Link>
    </div>
  );
}
