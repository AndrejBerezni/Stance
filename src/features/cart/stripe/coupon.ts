'server only';

import stripe from '@/lib/stripe-config';

export const validateCoupon = async (code: string) =>
  await stripe.promotionCodes.list({ code });
