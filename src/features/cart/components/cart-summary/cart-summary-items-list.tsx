'use client';
import useIsCheckout from '../../hooks/useIsCheckout';
import useSummaryItems from '../../hooks/useSummaryItems';
import Coupon from '../coupon';
import CartSummaryItem from './cart-summary-item';

export default function CartSummaryItemsList() {
  const isCheckout = useIsCheckout();
  const list = useSummaryItems();
  console.log(isCheckout);
  return (
    <ul className="flex flex-col gap-4">
      {list.map((item) => (
        <li key={item.id}>
          <CartSummaryItem
            label={item.label}
            amount={item.amount}
            isCoupon={item.isCoupon}
          />
        </li>
      ))}
      {!isCheckout && <Coupon />}
    </ul>
  );
}
