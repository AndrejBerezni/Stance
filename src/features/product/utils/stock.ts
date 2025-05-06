import { InventoryItem } from '../types';

export const checkColorStock = (inventory: InventoryItem[], color: string) => {
  return !!inventory.find((item) => item.color === color && item.stock > 0);
};

export const checkSizeStock = (
  inventory: InventoryItem[],
  color: string,
  size: string
) => {
  const item = inventory.find(
    (item) => item.color === color && item.size == size
  );
  return item ? item.stock > 0 : false;
};
