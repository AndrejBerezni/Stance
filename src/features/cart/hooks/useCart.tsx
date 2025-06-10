import { useEffect, useState } from 'react';

import { InventoryItem } from '@/features/product/types';
import { useAppDispatch } from '@/hooks/redux-hooks';

import { updateCartItem } from '../redux/cart-slice';
import { CartItemDetails } from '../types';

/* This hooks is used to handle increment/decrement items on product page, and then adding them to cart
and handling amount of items in the cart when they are already added
*/

interface UseCartParams {
  item: InventoryItem | null;
  itemDetails: CartItemDetails;
  max: number;
  initialAmount: number;
  disabled?: boolean;
}

export default function useCart({
  item,
  itemDetails,
  max,
  initialAmount,
  disabled = false,
}: UseCartParams) {
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState<number>(initialAmount);
  const [isItemAdded, setIsItemAdded] = useState<boolean>(false);

  // When user adds item, we want to disable add button and change text on it
  useEffect(() => {
    setIsItemAdded(false);
  }, [amount]);

  const increment = (cart?: 'cart') => {
    if (amount < max && !disabled && item) {
      const newAmount = amount + 1;
      setAmount(newAmount);
      if (cart === 'cart') {
        dispatch(updateCartItem({ item, details: itemDetails, quantity: 1 }));
      }
    }
  };

  const decrement = (cart?: 'cart') => {
    if (amount > 1 && !disabled && item) {
      const newAmount = amount - 1;
      setAmount(newAmount);
      if (cart === 'cart') {
        dispatch(updateCartItem({ item, details: itemDetails, quantity: -1 }));
      }
    }
  };

  const removeFromCart = () => {
    if (amount >= 1 && item) {
      setAmount(0);
      dispatch(updateCartItem({ item, details: itemDetails, quantity: 0 }));
    }
  };

  useEffect(() => {
    if (amount > max) {
      setAmount(max);
    }
  }, [max]);

  const addToCart = () => {
    if (item) {
      dispatch(
        updateCartItem({ item, details: itemDetails, quantity: amount })
      );
    }
  };

  return {
    amount,
    increment,
    decrement,
    removeFromCart,
    addToCart,
  };
}
