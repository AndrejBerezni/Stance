import { Draft } from '@reduxjs/toolkit';

import { CartState } from './cart-slice';
import calculateSummary from '../utils/calculateSummary';

export const recalculateCartSummary = (state: Draft<CartState>) => {
  const { subTotal, shipping, total } = calculateSummary(
    state.items,
    state.summary.coupons.reduce((acc, cur) => acc + cur.discount, 0)
  );
  state.summary.subTotal = subTotal;
  state.summary.shipping = shipping;
  state.summary.total = total;
};

export const checkIfCouponAlreadyAdded = (
  state: Draft<CartState>,
  newCouponCode: string
) => {
  return state.summary.coupons.find((coupon) => coupon.code === newCouponCode);
};
