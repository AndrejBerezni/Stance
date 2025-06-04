import { cn } from '@/lib/utils/cn';

import AddCouponForm from './add-coupon-form';
import AppliedCoupons from './applied-coupons';
import ShowCouponFormButton from './show-coupon-form-button';
import useCoupons from '../../hooks/useCoupons';

export default function Coupon() {
  const { isFormVisible, showForm } = useCoupons();
  return (
    <div
      className={cn('flex w-full flex-col', {
        'justify-end': isFormVisible,
      })}
    >
      {isFormVisible ? (
        <div className="flex flex-col gap-2">
          <AddCouponForm />
          <AppliedCoupons />
        </div>
      ) : (
        <ShowCouponFormButton addFirstCoupon={showForm} />
      )}
    </div>
  );
}
