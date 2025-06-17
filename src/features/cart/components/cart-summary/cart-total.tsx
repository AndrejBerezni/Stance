'use client';
import { useTranslations } from 'next-intl';

import { formatPrice } from '@/features/product/utils';
import { useAppSelector } from '@/hooks/redux-hooks';
import { RootState } from '@/lib/store';

export default function CartTotal() {
  const translate = useTranslations('cart');

  const totalAmount = useAppSelector(
    (state: RootState) => state.cart.summary.total
  );

  return (
    <p className="flex items-center justify-between">
      <span className="text-2xl font-medium">{translate('total')}</span>
      <span className="text-4xl font-semibold">{formatPrice(totalAmount)}</span>
    </p>
  );
}
