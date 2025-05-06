import { useEffect, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { InventoryItem, Product } from '../types';

/* This hook is used to determine, based on color and size,
whether item can be added to cart, what is the maximum number of items,
and to provide cart with sku for that product */

export default function useInventory(product: Product) {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [max, setMax] = useState<number>(1);
  const [item, setItem] = useState<InventoryItem | null>(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    const color = searchParams.get('color');
    const size = searchParams.get('size');
    const newItem = product.inventory.find(
      (item) =>
        item.color === color &&
        (!product.sizing_convention ? true : item.size?.toString() === size) // handling also products that don't have size (like sunglasses, socks...)
    );
    if (!newItem || newItem.stock === 0) {
      setDisabled(true);
      setItem(null);
      setMax(1);
    } else {
      setDisabled(false);
      setItem(newItem);
      setMax(newItem.stock);
    }
  }, [searchParams, product]);

  return { item, max, disabled };
}
