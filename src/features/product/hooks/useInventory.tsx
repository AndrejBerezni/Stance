import { useEffect, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { Product } from '../types';

/* This hook is used to determine, based on color and size,
whether item can be added to cart, what is the maximum number of items,
and to provide cart with sku for that product */

export default function useInventory(product: Product) {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [max, setMax] = useState<number>(5);
  const [sku, setSku] = useState<string>('');
  const searchParams = useSearchParams();

  useEffect(() => {
    const color = searchParams.get('color');
    const size = searchParams.get('size');
    const item = product.inventory.find(
      (item) =>
        item.color === color &&
        (!product.sizing_convention ? true : item.size === size) // handling also products that don't have size (like sunglasses, socks...)
    );
    if (!item || item.stock === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
      setSku(item.sku);
      setMax(item.stock);
    }
  }, [searchParams]);
  return { sku, max, disabled };
}
