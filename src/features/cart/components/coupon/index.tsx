import { useAppSelector } from '@/hooks/redux-hooks';
import { RootState } from '@/lib/store';
import { cn } from '@/lib/utils/cn';

import AddCouponButton from './add-coupon-button';

export default function Coupon() {
  const coupons = useAppSelector(
    (state: RootState) => state.cart.summary.coupons
  );
  return (
    <div
      className={cn('flex w-full flex-col', {
        'justify-end': coupons.length === 0,
      })}
    >
      {coupons.length === 0 ? <AddCouponButton /> : <p>handle coupons</p>}
    </div>
  );
}
