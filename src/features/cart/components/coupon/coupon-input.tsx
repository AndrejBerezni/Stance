import { useState } from 'react';

import { useTranslations } from 'next-intl';

import Button from '@/components/ui/button';
import TextInput from '@/components/ui/text-input';

export default function CouponInput() {
  const translate = useTranslations('cart');
  const [couponCode, setCouponCode] = useState<string>('');
  return (
    <div className="justif-center flex flex-wrap gap-2 sm:flex-nowrap sm:items-center">
      <TextInput
        id="coupon"
        name="coupon"
        value={couponCode}
        onValueChange={setCouponCode}
        clearInput={() => setCouponCode('')}
        label={translate('couponCode')}
        placeholder={translate('couponPlaceholder')}
      />
      <Button variant="secondary" size="sm" className="w-full sm:w-auto">
        {translate('apply')}
      </Button>
    </div>
  );
}
