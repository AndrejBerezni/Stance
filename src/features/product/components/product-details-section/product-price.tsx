'use client';
import { useTranslations } from 'next-intl';

import Badge from '@/components/ui/badge';
import Skeleton from '@/components/ui/skeleton';

import useInventory from '../../hooks/useInventory';
import { Product } from '../../types';
import { formatPrice, getDiscountText } from '../../utils';

export default function ProductPrice({ product }: { product: Product }) {
  const translate = useTranslations('productPage');
  const { item } = useInventory(product);

  /* Item will be absent until hook for determining item finishes running.
  Since we are handling redirecting to existing item in cases where
  invalid criteria is entered, item will always be present, and therefore the
  following line will display skeleton until that is all handled.
  */
  if (!item) return <Skeleton className="h-9 w-1/2" />;

  /* We are checking discount only after we have the item: */

  const onDiscount = !!item?.sale_price;
  let discountText = '';
  if (onDiscount) {
    discountText = `${getDiscountText(item)} ${translate('discount')}`;
  }

  return (
    <>
      <p className="text-3xl font-medium mb-2">
        {onDiscount
          ? formatPrice(item.sale_price!)
          : formatPrice(item.list_price!)}
        {onDiscount && (
          <span className="line-through text-lg text-muted ml-2">
            {formatPrice(item.list_price)}
          </span>
        )}
      </p>
      {onDiscount && <Badge text={discountText} variant="warning" size="lg" />}
    </>
  );
}
