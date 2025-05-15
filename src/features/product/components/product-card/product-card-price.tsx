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
    <p className="text-ink-600 flex items-center gap-2">
      <span className="text-lg">
        {onDiscount
          ? formatPrice(price.sale_price ?? 0)
          : formatPrice(price.list_price ?? 0)}
      </span>
      {onDiscount && (
        <span className="text-xs line-through">
          {formatPrice(price.list_price ?? 0)}
        </span>
      )}
    </p>
  );
}
