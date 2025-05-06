import { useTranslations } from 'next-intl';

import Button from '@/components/ui/button';

// Creating separate component to handle logic of opening create review modal

export default function LeaveFirstReview() {
  const translate = useTranslations('productPage');
  return (
    <div className="text-sm flex gap-1">
      <p>{translate('noReviews')}</p>
      <Button variant="link" className="text-sm">
        {translate('beFirst')}
      </Button>
    </div>
  );
}
