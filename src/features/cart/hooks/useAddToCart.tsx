import { useEffect, useState } from 'react';

// TO CONSIDER: This hook might handle both adding to cart and editing amount of items in the cart

interface UseAddToCartParams {
  sku: string;
  max: number;
  initialAmount: number;
  disabled?: boolean;
}

export default function useAddToCart({
  sku,
  max,
  initialAmount,
  disabled = false,
}: UseAddToCartParams) {
  // TO BE IMPLEMENTED: when we have cart store, this will handle adding products to cart, now we are just handling it for UI updates
  const [amount, setAmount] = useState<number>(initialAmount);

  const handleIncrement = () => {
    if (amount < max && !disabled) setAmount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    if (amount > 1 && !disabled) setAmount((prev) => prev - 1);
  };

  useEffect(() => {
    if (amount > max) {
      setAmount(max);
    }
  }, [max]);

  const addToCart = () => {
    // TO DO: cart logic
    console.log(`${amount} of ${sku} added to cart.`);
  };

  return {
    amount,
    increment: handleIncrement,
    decrement: handleDecrement,
    addToCart,
  };
}
