'use client';
import useSummaryItems from '../../hooks/useSummaryItems';
import Coupon from '../coupon';
import CartSummaryItem from './cart-summary-item';

export default function CartSummaryItemsList({
  isCheckout = false,
}: {
  isCheckout?: boolean;
}) {
  const list = useSummaryItems();

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
