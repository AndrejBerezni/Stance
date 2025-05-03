import { useTranslations } from 'next-intl';

import Badge from '@/components/ui/badge';
import Button from '@/components/ui/button';

import StarRating from '../star-rating';

export default function ProductMetadata() {
  const translate = useTranslations('productPage');
  return (
    <>
      <p className="text-3xl font-medium mb-2">
        $76<span className="line-through text-lg text-muted ml-2">$95</span>
      </p>
      <Badge text="20% OFF" variant="warning" size="lg" />
      <div className="flex items-center gap-2 mt-3">
        <p className="text-xl">4.1</p>
        <StarRating locked initial={4.1} />
        <Button variant="link" className="text-sm">
          {translate('seeAll')} 61 {translate('reviews')}
        </Button>
      </div>
    </>
  );
}
