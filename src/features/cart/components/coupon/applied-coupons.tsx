import { X } from 'lucide-react';

import Button from '@/components/ui/button';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { RootState } from '@/lib/store';

import { removeCoupon } from '../../cart-slice';
import { Coupon } from '../../types';

export default function AppliedCoupons() {
  const dispatch = useAppDispatch();
  const coupons = useAppSelector(
    (state: RootState) => state.cart.summary.coupons
  );

  return (
    <ul className="flex flex-wrap gap-2">
      {coupons.map((coupon: Coupon) => (
        <li
          key={coupon.code}
          className="bg-ink-200 flex w-fit gap-1 rounded-md border-[1px] px-2 py-1 text-sm font-medium uppercase"
        >
          {coupon.code}
          <Button
            variant="ghost"
            size="sm"
            iconOnly
            onClick={() => dispatch(removeCoupon(coupon))}
          >
            <X size={18} />
          </Button>
        </li>
      ))}
    </ul>
  );
}
