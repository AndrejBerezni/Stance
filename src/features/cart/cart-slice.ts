import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { CartItem, Coupon } from './types';
import calculateSummary from './utils/calculateSummary';
import countTotalItems from './utils/countTotalItems';

interface CartState {
  items: Record<string, CartItem>;
  totalItems: number;
  summary: {
    subTotal: number;
    shipping: number;
    coupons: Coupon[];
    total: number;
  };
}

const initialState: CartState = {
  items: {} as Record<string, CartItem>,
  totalItems: 0,
  summary: {
    subTotal: 0,
    shipping: 0,
    coupons: [],
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

      state.totalItems = countTotalItems(state.items);

      const { subTotal, shipping, total } = calculateSummary(
        state.items,
        state.summary.coupons.reduce((acc, cur) => acc + cur.discount, 0)
      );
      state.summary.subTotal = subTotal;
      state.summary.shipping = shipping;
      state.summary.total = total;
    },
  },
});

export const { updateCartItem } = cartSlice.actions;

export default cartSlice.reducer;
