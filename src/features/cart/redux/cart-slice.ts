import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { CartItem, Coupon } from '../types';
import { checkIfCouponAlreadyAdded, recalculateCartSummary } from './helpers';
import countTotalItems from '../utils/countTotalItems';

export interface CartState {
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
      recalculateCartSummary(state);
    },
    addCoupon: (state, action: PayloadAction<Coupon>) => {
      const couponAlreadyAdded = checkIfCouponAlreadyAdded(
        state,
        action.payload.code
      );

      if (!couponAlreadyAdded) {
        state.summary.coupons.push(action.payload);
        recalculateCartSummary(state);
      }
    },
    removeCoupon: (state, action: PayloadAction<Coupon>) => {
      state.summary.coupons = state.summary.coupons.filter(
        (coupon) => action.payload.code !== coupon.code
      );
      recalculateCartSummary(state);
    },
  },
});

export const { updateCartItem, addCoupon, removeCoupon } = cartSlice.actions;

export default cartSlice.reducer;
