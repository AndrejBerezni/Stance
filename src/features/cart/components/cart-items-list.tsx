import { useAppSelector } from '@/hooks/redux-hooks';
import { RootState } from '@/lib/store';

import CartItem from './cart-item';
import { CartItem as ICartItem } from '../types';

export default function CartItemsList() {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const cartItemsArr: ICartItem[] = Object.values(cartItems);
  return (
    <ul className="flex flex-1 flex-col gap-8">
      {cartItemsArr.map((cartItem) => (
        <li
          key={cartItem.item.sku}
          className="border-b-[1px] pb-8 last:border-none"
        >
          <CartItem cartItem={cartItem} />
        </li>
      ))}
    </ul>
  );
}
