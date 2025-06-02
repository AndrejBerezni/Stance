'use client';
import { useTranslations } from 'next-intl';

import Button from '@/components/ui/button';
import { formatPrice } from '@/features/product/utils';
import { useAppSelector } from '@/hooks/redux-hooks';
import { RootState } from '@/lib/store';

import AddCoupon from './add-coupon';
import CartSummaryItem from './cart-summary-item';
import { Coupon } from '../../types';

export default function CartSummary() {
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
  return (
    <article className="sticky top-0 flex h-fit flex-col gap-8 rounded-xl border p-8 xl:min-w-[400px]">
      <h2 className="text-2xl font-semibold">{translate('summary')}</h2>
      <ul className="flex flex-col gap-4">
        {summaryItems.map((item) => (
          <li key={item.id}>
            <CartSummaryItem
              label={item.label}
              amount={item.amount}
              isCoupon={item.isCoupon}
            />
          </li>
        ))}
        <AddCoupon />
      </ul>
      <div className="bg-border h-[1px] w-full"></div>
      <p className="flex items-center justify-between">
        <span className="text-2xl font-medium">{translate('total')}</span>
        <span className="text-4xl font-semibold">
          {formatPrice(summary.total)}
        </span>
      </p>
      <Button>{translate('checkout')}</Button>
    </article>
  );
}
