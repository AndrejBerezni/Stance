import { X } from 'lucide-react';

import Button from '@/components/ui/button';
import { useAppSelector } from '@/hooks/redux-hooks';
import { RootState } from '@/lib/store';

import { Coupon } from '../../types';

export default function AppliedCoupons() {
  const coupons = useAppSelector(
    (state: RootState) => state.cart.summary.coupons
  );
  return (
    <ul>
      {coupons.map((coupon: Coupon) => (
        <li
          key={coupon.code}
          className="bg-ink-300 flex w-fit gap-1 rounded-md px-2 py-1 text-sm font-medium uppercase"
        >
          {coupon.code}
          <Button variant="ghost" size="sm" iconOnly>
            <X size={18} />
          </Button>
        </li>
      ))}
    </ul>
  );
}
