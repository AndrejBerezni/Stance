import { useTranslations } from 'next-intl';

import Button from '@/components/ui/button';

import StarRating from './star-rating';

export default function ProductRating() {
  const translate = useTranslations('productPage');
  return (
    <div className="flex items-center gap-2 mt-3">
      <p className="text-xl">4.1</p>
      <StarRating locked initial={4.1} />
      <Button variant="link" className="text-sm">
        {translate('seeAll')} 61 {translate('reviews')}
      </Button>
    </div>
  );
}
