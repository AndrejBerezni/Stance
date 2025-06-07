'server only';

import stripe from '@/lib/stripe-config';

//TO DO: improve this function, add error handling, trim code - although, inserting wrong value will just return empty array
export const validateCoupon = async (code: string) =>
  await stripe.promotionCodes.list({ code });
