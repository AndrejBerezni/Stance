'use client';

import { useTranslations } from 'next-intl';

import Button from '@/components/ui/button';
import CartControl from '@/features/cart/components/cart-control';
import useAddToCart from '@/features/cart/hooks/useAddToCart';

interface AddToCartProps {
  productId: string;
  max: number;
  disabled: boolean;
}

export default function AddToCart({
  productId,
  max,
  disabled,
}: AddToCartProps) {
  const {
    amount,
    increment: handleIncrement,
    decrement: handleDecrement,
    addToCart,
  } = useAddToCart({ productId, max, initialAmount: 1 });
  const translate = useTranslations('productPage');
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2
          id={`quantity-selector-heading`}
          className="text-sm text-tertiary-foreground"
        >
          {translate('quantity')}
        </h2>
        <CartControl
          max={max}
          amount={amount}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </div>

      <Button
        className="mb-2"
        onClick={addToCart}
        aria-label={`Add ${amount} of ${productId} to cart`}
        disabled={disabled}
      >
        {translate('addToCart')}
      </Button>
    </>
  );
}
