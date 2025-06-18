import { cn } from '@/lib/utils/cn';

import { formatPrice } from '../../utils';

export default function ProductCardPrice({
  price,
  isCheckout = false,
}: {
  price: { list_price: number; sale_price: number | null };
  isCheckout?: boolean;
}) {
  const onDiscount = !!(
    price.sale_price && price.sale_price !== price.list_price
  );
  return (
    <p
      className={cn('text-ink-600 flex items-center gap-2', {
        'ml-auto flex-col': isCheckout,
      })}
      data-testid="price"
    >
      <span
        className={cn('text-ink-900 text-lg', {
          'font-medium': !isCheckout,
          'font-semibold': isCheckout,
        })}
        data-testid="current-price"
      >
        {onDiscount
          ? formatPrice(price.sale_price ?? 0)
          : formatPrice(price.list_price ?? 0)}
      </span>
      {onDiscount && (
        <span
          className={cn('line-through', {
            'text-xs': !isCheckout,
            'text-lg': isCheckout,
          })}
          data-testid="previous-price"
        >
          {formatPrice(price.list_price ?? 0)}
        </span>
      )}
    </p>
  );
}
