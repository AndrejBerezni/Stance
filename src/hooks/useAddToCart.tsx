import { useState } from 'react';

// TO CONSIDER: This hook might handle both adding to cart and editing amount of items in the cart

interface UseAddToCartParams {
  productId: string;
  max: number;
  initialAmount: number;
}

export default function useAddToCart({
  productId,
  max,
  initialAmount,
}: UseAddToCartParams) {
  // TO BE IMPLEMENTED: when we have cart store, this will handle adding products to cart, now we are just handling it for UI updates
  const [amount, setAmount] = useState<number>(initialAmount);

  const handleIncrement = () => {
    if (amount < max) setAmount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    if (amount > 1) setAmount((prev) => prev - 1);
  };

  const addToCart = () => {
    // TO DO: cart logic
    console.log(`${amount} of ${productId} added to cart.`);
  };

  return {
    amount,
    increment: handleIncrement,
    decrement: handleDecrement,
    addToCart,
  };
}
