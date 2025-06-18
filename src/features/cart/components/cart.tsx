'use client';

import { useTranslations } from 'next-intl';

import { useAppSelector } from '@/hooks/redux-hooks';
import { RootState } from '@/lib/store';

import CartEmpty from './cart-empty';
import CartItem from './cart-item';
import CartItemsList from './cart-items-list';
import CartSummary from './cart-summary';

export default function Cart() {
  const translate = useTranslations('cart');
  const itemsInCart = useAppSelector(
    (state: RootState) => state.cart.totalItems
  );

  return (
    <section className="section-wrapper flex flex-col gap-16">
      <h1 className="text-3xl font-semibold md:text-5xl">
        {translate('shoppingCart')}
      </h1>
      {itemsInCart > 0 ? (
        <div className="relative flex flex-col gap-8 xl:flex-row">
          <CartItemsList itemComponent={CartItem} />
          <CartSummary />
        </div>
      ) : (
        <CartEmpty />
      )}
    </section>
  );
}
