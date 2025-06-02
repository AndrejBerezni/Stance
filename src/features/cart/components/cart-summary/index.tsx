'use client';
import { useTranslations } from 'next-intl';

import Button from '@/components/ui/button';
import Separator from '@/components/ui/separator';

import CartSummaryItemsList from './cart-summary-items-list';
import CartTotal from './cart-total';

export default function CartSummary() {
  const translate = useTranslations('cart');

  return (
    <article className="sticky top-0 flex h-fit flex-col gap-8 rounded-xl border p-8 xl:min-w-[400px]">
      <h2 className="text-2xl font-semibold">{translate('summary')}</h2>
      <CartSummaryItemsList />
      <Separator />
      <CartTotal />
      {/* TO DO: implement checkout: */}
      <Button>{translate('checkout')}</Button>
    </article>
  );
}
