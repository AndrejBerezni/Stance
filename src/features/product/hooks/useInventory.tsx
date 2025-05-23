'use client';
import { useEffect, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { InventoryItem } from '../types';

/* This hook is used to determine, based on color and size,
whether item can be added to cart, what is the maximum number of items,
and to provide cart with sku for that product */

export default function useInventory(
  inventory: InventoryItem[],
  sizing_convention: string | null
) {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [max, setMax] = useState<number>(1);
  const [item, setItem] = useState<InventoryItem | null>(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    const color = searchParams.get('color');
    const size = searchParams.get('size');
    const newItem = inventory.find(
      (item) =>
        item.color === color &&
        (!sizing_convention ? true : item.size?.toString() === size) // handling also products that don't have size (like sunglasses, socks...)
    );
    if (!newItem) {
      setItem(null);
    } else {
      const outOfStock = newItem.stock === 0;
      const newMax = outOfStock ? 1 : newItem.stock;
      setDisabled(outOfStock);
      setItem(newItem);
      setMax(newMax);
    }
  }, [searchParams, inventory, sizing_convention]);

  return { item, max, disabled };
}
