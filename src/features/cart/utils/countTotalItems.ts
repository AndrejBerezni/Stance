import { CartItem } from '../types';

const countTotalItems = (items: Record<string, CartItem>) => {
  let totalItems = 0;
  for (const cartItem of Object.values(items)) {
    totalItems += cartItem.quantity;
  }
  return totalItems;
};

export default countTotalItems;
