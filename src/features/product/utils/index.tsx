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

export const getSizes = (sizing_convention: string | null) => {
  if (sizing_convention === null) return null;
  switch (sizing_convention) {
    case 'clothes':
      return ['xs', 'sm', 'md', 'lg', 'xl'];
    case 'shoes':
      return [
        '4',
        '4.5',
        '5',
        '5.5',
        '6',
        '6.5',
        '7',
        '7.5',
        '8',
        '8.5',
        '9',
        '9.5',
        '10',
        '10.5',
        '11',
        '11.5',
        '12',
      ];
    default:
      return null;
  }
};
