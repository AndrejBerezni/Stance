import { useTranslations } from 'next-intl';

import Button from '@/components/ui/button';

export default function CreateCheckoutButton() {
  const translate = useTranslations('cart');

  return <Button>{translate('checkout')}</Button>;
}
