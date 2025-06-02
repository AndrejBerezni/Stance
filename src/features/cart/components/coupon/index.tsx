import { cn } from '@/lib/utils/cn';

import AddCouponButton from './add-coupon-button';
import AppliedCoupons from './applied-coupons';
import CouponInput from './coupon-input';
import useCoupons from '../../hooks/useCoupons';

export default function Coupon() {
  const { isInputVisible, showInput } = useCoupons();
  return (
    <div
      className={cn('flex w-full flex-col', {
        'justify-end': isInputVisible,
      })}
    >
      {isInputVisible ? (
        <div>
          <CouponInput />
          <AppliedCoupons />
        </div>
      ) : (
        <AddCouponButton addFirstCoupon={showInput} />
      )}
    </div>
  );
}
