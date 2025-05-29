import Badge from '@/components/ui/badge';
import { formatPrice } from '@/features/product/utils';

interface CartSummaryItemProps {
  label: string;
  amount: number | string;
  isCoupon: boolean;
}

export default function CartSummaryItem({
  label,
  amount,
  isCoupon,
}: CartSummaryItemProps) {
  return (
    <div className="flex items-center justify-between">
      {isCoupon ? (
        <Badge text={label.toLocaleUpperCase()} />
      ) : (
        <span className="text-ink-600">{label}</span>
      )}

      <span className="text-lg font-semibold">
        {typeof amount === 'string' ? amount : formatPrice(amount)}
      </span>
    </div>
  );
}
