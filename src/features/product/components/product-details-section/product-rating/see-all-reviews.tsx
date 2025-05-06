import { useTranslations } from 'next-intl';

import Button from '@/components/ui/button';

// Creating separate component to handle logic of opening reviews modal

export default function SeeAllReviews({ total }: { total: number }) {
  const translate = useTranslations('productPage');
  return (
    <Button variant="link" className="text-sm">
      {translate('seeAll')} {total} {translate('reviews')}
    </Button>
  );
}
