import { useEffect, useState } from 'react';

import { InventoryItem } from '@/features/product/types';
import { useAppDispatch } from '@/hooks/redux-hooks';

import { updateCartItem } from '../cart-slice';

/* This hooks is used to handle increment/decrement items on product page, and then adding them to cart
and handling amount of items in the cart when they are already added
*/

interface UseAddToCartParams {
  item: InventoryItem | null;
  max: number;
  initialAmount: number;
  disabled?: boolean;
}

export default function useAddToCart({
  item,
  max,
  initialAmount,
  disabled = false,
}: UseAddToCartParams) {
  const dispatch = useAppDispatch();
  // TO BE IMPLEMENTED: when we have cart store, this will handle adding products to cart, now we are just handling it for UI updates
  const [amount, setAmount] = useState<number>(initialAmount);

  const handleIncrement = (cart?: boolean) => {
    if (amount < max && !disabled && item) {
      const newAmount = amount + 1;
      setAmount(newAmount);
      if (cart) {
        dispatch(updateCartItem({ item, quantity: newAmount }));
      }
    }
  };

  const handleDecrement = (cart?: boolean) => {
    if (amount > 1 && !disabled && item) {
      const newAmount = amount - 1;
      setAmount(newAmount);
      if (cart) {
        dispatch(updateCartItem({ item, quantity: newAmount }));
      }
    }
  };

  const handleRemoveFromCart = () => {
    if (amount >= 1 && item) {
      setAmount(0);
      dispatch(updateCartItem({ item, quantity: 0 }));
    }
  };

  useEffect(() => {
    if (amount > max) {
      setAmount(max);
    }
  }, [max]);

  const addToCart = () => {
    if (item) {
      dispatch(updateCartItem({ item, quantity: amount }));
    }
  };

  return {
    amount,
    increment: handleIncrement,
    decrement: handleDecrement,
    removeFromCart: handleRemoveFromCart,
    addToCart,
  };
}
