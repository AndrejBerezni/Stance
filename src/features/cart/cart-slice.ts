import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { CartItem } from './types';
import calculateSummary from './utils/calculateSummary';

interface CartState {
  items: Record<string, CartItem>;
  summary: {
    subTotal: number;
    shipping: number;
    coupon: string | null;
    discount: number;
    total: number;
  };
}

const initialState: CartState = {
  items: {} as Record<string, CartItem>,
  summary: {
    subTotal: 0,
    shipping: 0,
    coupon: null,
    discount: 0,
    total: 0,
  },
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCartItem: (state, action: PayloadAction<CartItem>) => {
      const cartItem = action.payload;

      if (cartItem.quantity <= 0) {
        delete state.items[cartItem.item.sku];
      } else {
        state.items[cartItem.item.sku] = cartItem;
      }

      const { subTotal, shipping, total } = calculateSummary(
        state.items,
        state.summary.discount
      );
      state.summary.subTotal = subTotal;
      state.summary.shipping = shipping;
      state.summary.total = total;
    },
  },
});

export const { updateCartItem } = cartSlice.actions;

export default cartSlice.reducer;
