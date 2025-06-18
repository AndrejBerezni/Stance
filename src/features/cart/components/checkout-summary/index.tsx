'use client';
import { useTranslations } from 'next-intl';

import Separator from '@/components/ui/separator';

import CheckoutButton from './checkout-button';
import CartItemsList from '../cart-items-list';
import CheckoutCartItem from './checkout-cart-item';
import CartSummaryItemsList from '../cart-summary/cart-summary-items-list';
import CartTotal from '../cart-summary/cart-total';

export default function CheckoutSummary() {
  const translate = useTranslations('checkout');

  return (
    <section className="flex min-h-full w-full flex-col gap-8 rounded-xl border p-8 xl:w-1/2">
      <h2 className="text-xl font-semibold">{translate('summary')}</h2>
      <CartItemsList itemComponent={CheckoutCartItem} />
      <Separator className="-mt-8" />
      <CartSummaryItemsList isCheckout />
      <div className="mt-auto flex flex-col gap-8">
        <Separator />
        <CartTotal />
        <CheckoutButton />
      </div>
    </section>
  );
}
