import { Lock } from 'lucide-react';
import { useTranslations } from 'next-intl';

import Button from '@/components/ui/button';

export default function CheckoutButton() {
  const translate = useTranslations('checkout');

  return (
    <Button>
      <Lock size={16} />
      {translate('confirmOrder')}
    </Button>
  );
}
