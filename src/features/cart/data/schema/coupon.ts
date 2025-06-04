import { z } from 'zod';

import { Coupon } from '../../types';

export const CouponSchema = z.object({
  code: z.string().min(5).max(30),
});

export type CouponState =
  | {
      success?: boolean;
      errors?: { code?: string[] };
      coupon?: Coupon;
    }
  | undefined;
