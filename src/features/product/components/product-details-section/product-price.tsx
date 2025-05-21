'use client';
import { useTranslations } from 'next-intl';

import Badge from '@/components/ui/badge';
import Skeleton from '@/components/ui/skeleton';

import useInventory from '../../hooks/useInventory';
import { InventoryItem } from '../../types';
import { formatPrice, getDiscountText } from '../../utils';

interface ProductPriceProps {
  inventory: InventoryItem[];
  sizingConvention: string | null;
}

export default function ProductPrice({
  inventory,
  sizingConvention,
}: ProductPriceProps) {
  const translate = useTranslations('productPage');
  const { item } = useInventory(inventory, sizingConvention);

  /* Item will be absent until hook for determining item finishes running.
  Since we are handling redirecting to existing item in cases where
  invalid criteria is entered, item will always be present, and therefore the
  following line will display skeleton until that is all handled.
  */
  if (!item) return <Skeleton className="mb-2 h-9 w-1/2" />;

  /* We are checking discount only after we have the item: */

  const onDiscount = !!(
    item?.sale_price && item.sale_price !== item.list_price
  );
  let discountText = '';
  if (onDiscount) {
    discountText = `${getDiscountText(item)} ${translate('discount')}`;
  }

  return (
    <>
      <p className="mb-2 text-3xl font-medium">
        {onDiscount
          ? formatPrice(item.sale_price ?? 0)
          : formatPrice(item.list_price ?? 0)}
        {onDiscount && (
          <span className="text-ink-400 ml-2 text-lg line-through">
            {formatPrice(item.list_price ?? 0)}
          </span>
        )}
      </p>
      {onDiscount && <Badge text={discountText} variant="warning" size="lg" />}
    </>
  );
}
