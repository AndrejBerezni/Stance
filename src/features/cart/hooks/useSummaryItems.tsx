import { useTranslations } from 'next-intl';

import { useAppSelector } from '@/hooks/redux-hooks';
import { RootState } from '@/lib/store';

import { Coupon } from '../types';

export default function useSummaryItems() {
  const translate = useTranslations('cart');
  const summary = useAppSelector((state: RootState) => state.cart.summary);

  const summaryItems = [
    {
      id: 'subtotal',
      label: translate('subtotal'),
      amount: summary.subTotal,
      isCoupon: false,
    },
    {
      id: 'shipping',
      label: translate('shipping'),
      amount:
        summary.shipping === 0
          ? translate('free').toLocaleUpperCase()
          : summary.shipping,
      isCoupon: false,
    },

    ...summary.coupons.map((coupon: Coupon) => ({
      id: coupon.code,
      label: coupon.code,
      amount: -coupon.discount,
      isCoupon: true,
    })),
  ];

  return summaryItems;
}
