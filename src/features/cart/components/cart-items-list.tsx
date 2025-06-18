'use client';
import { ComponentType, HTMLAttributes } from 'react';

import { useAppSelector } from '@/hooks/redux-hooks';
import { RootState } from '@/lib/store';

import { CartItem as ICartItem } from '../types';

interface CartItemsListProps {
  itemComponent: ComponentType<{ cartItem: ICartItem }>;
  itemComponentProps?: HTMLAttributes<HTMLElement>;
}

export default function CartItemsList({
  itemComponent: Component,
  itemComponentProps: props,
}: CartItemsListProps) {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const cartItemsArr: ICartItem[] = Object.values(cartItems);
  return (
    <ul className="flex flex-col gap-8">
      {cartItemsArr.map((cartItem) => (
        <li
          key={cartItem.item.sku}
          className="border-b-[1px] pb-8 last:border-none"
        >
          <Component cartItem={cartItem} {...props} />
        </li>
      ))}
    </ul>
  );
}
