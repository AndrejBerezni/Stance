// Initializing formatter, not to be recreated on every function call

import { InventoryItem } from '../types';

// In the future, we can add more fdrmatters, but for now we have prices only in one currency
const eurFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const formatPrice = (price: number) => eurFormatter.format(price);

export const getDiscountText = (item: InventoryItem) => {
  if (item.discount) {
    return formatPrice(item.discount);
  }
  if (item.discount_percentage) {
    return `${item.discount_percentage}%`;
  }
  return '';
};

export const getInventoryPrice = (
  inventory: InventoryItem[],
  color: string
) => {
  if (!inventory.length) {
    return { list_price: 0, sale_price: null };
  }

  const item = inventory.find((item) => item.color === color);

  return item
    ? { list_price: item.list_price, sale_price: item.sale_price }
    : {
        list_price: inventory[0].list_price,
        sale_price: inventory[0].sale_price,
      };
};
