import { CartItem } from '../types';

const calculateSummary = (items: Record<string, CartItem>, discount = 0) => {
  let subTotal = 0;
  for (const cartItem of Object.values(items)) {
    subTotal +=
      (cartItem.item.sale_price ?? cartItem.item.list_price) *
      cartItem.quantity;
  }

  const shipping = subTotal === 0 ? 0 : subTotal > 50 ? 0 : 5;
  const total = subTotal + shipping - discount;

  return {
    subTotal,
    shipping,
    total,
  };
};

export default calculateSummary;
