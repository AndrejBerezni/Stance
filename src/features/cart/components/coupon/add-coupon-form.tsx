'use client';
import { useActionState, useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';

import Button from '@/components/ui/button';
import TextInput from '@/components/ui/text-input';
import { useAppDispatch } from '@/hooks/redux-hooks';

import { getCoupon } from '../../data/server';
import { addCoupon } from '../../redux/cart-slice';

export default function AddCouponForm() {
  const translate = useTranslations('cart');
  const dispatch = useAppDispatch();
  const [couponCode, setCouponCode] = useState<string>('');
  const [state, formAction, isPending] = useActionState(getCoupon, undefined);

  useEffect(() => {
    if (state?.success && state.coupon) {
      dispatch(addCoupon(state.coupon));
      setCouponCode('');
    }
  }, [state]);

  return (
    <form
      action={formAction}
      className="justif-center flex flex-wrap gap-2 sm:flex-nowrap sm:items-start"
    >
      <TextInput
        id="coupon"
        name="coupon"
        value={couponCode}
        onValueChange={setCouponCode}
        clearInput={() => setCouponCode('')}
        label={translate('couponCode')}
        placeholder={translate('couponPlaceholder')}
        disabled={isPending}
        required
        error={state?.success === false ? translate('invalidCoupon') : ''}
      />
      <Button
        submit
        variant="secondary"
        size="sm"
        className="w-full sm:mt-5 sm:w-auto"
      >
        {translate('apply')}
      </Button>
    </form>
  );
}
