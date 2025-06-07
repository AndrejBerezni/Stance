'use server';

import { validateCoupon } from '../../stripe';
import { CouponSchema, CouponState } from '../schema';

export const getCoupon = async (
  state: CouponState,
  formData: FormData
): Promise<CouponState> => {
  try {
    const code = formData.get('coupon') as string;
    const validatedFields = CouponSchema.safeParse({ code });

    if (!validatedFields.success || !code) {
      return { success: false };
    }

    const validatedCoupon = await validateCoupon(code);

    if (validatedCoupon.data.length === 0 || !validatedCoupon.data) {
      return { success: false };
    }

    return {
      success: true,
      coupon: {
        code,
        discount: validatedCoupon.data[0].coupon.amount_off
          ? validatedCoupon.data[0].coupon.amount_off / 100
          : 0,
      },
    };
  } catch {
    return { success: false };
  }
};
