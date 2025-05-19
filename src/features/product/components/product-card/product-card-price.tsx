import { formatPrice } from '../../utils';

export default function ProductCardPrice({
  price,
}: {
  price: { list_price: number; sale_price: number | null };
}) {
  const onDiscount = !!(
    price.sale_price && price.sale_price !== price.list_price
  );
  return (
    <p className="text-ink-600 flex items-center gap-2" data-testid="price">
      <span className="text-lg" data-testid="current-price">
        {onDiscount
          ? formatPrice(price.sale_price ?? 0)
          : formatPrice(price.list_price ?? 0)}
      </span>
      {onDiscount && (
        <span className="text-xs line-through" data-testid="previous-price">
          {formatPrice(price.list_price ?? 0)}
        </span>
      )}
    </p>
  );
}
