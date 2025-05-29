import { TicketPercent } from 'lucide-react';
import { useTranslations } from 'next-intl';

import Button from '@/components/ui/button';
import { useAppSelector } from '@/hooks/redux-hooks';
import { RootState } from '@/lib/store';
import { cn } from '@/lib/utils/cn';

export default function AddCoupon() {
  const translate = useTranslations('cart');
  const coupons = useAppSelector(
    (state: RootState) => state.cart.summary.coupons
  );

  return (
    <div
      className={cn('flex w-full flex-col', {
        'justify-end': coupons.length === 0,
      })}
    >
      {coupons.length === 0 ? (
        <Button
          variant="link"
          size="md"
          className="self-end max-[392px]:text-xs"
        >
          <TicketPercent className="max-[392px]:h-4" />
          {translate('addCoupon')}
        </Button>
      ) : (
        <p>handle coupons</p>
      )}
    </div>
  );
}
