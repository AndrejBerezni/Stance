'use client';
import { useTranslations } from 'next-intl';

import Separator from '@/components/ui/separator';

import CartSummaryItemsList from './cart-summary-items-list';
import CartTotal from './cart-total';
import CreateCheckoutButton from './create-checkout-button';

export default function CartSummary() {
  const translate = useTranslations('cart');

  return (
    <article className="sticky top-0 flex h-fit flex-col gap-8 rounded-xl border p-8 xl:min-w-[400px]">
      <h2 className="text-2xl font-semibold">{translate('summary')}</h2>
      <CartSummaryItemsList />
      <Separator />
      <CartTotal />
      <CreateCheckoutButton />
    </article>
  );
}
