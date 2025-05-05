'use client';

import { useTranslations } from 'next-intl';

import Button from '@/components/ui/button';
import CartControl from '@/features/cart/components/cart-control';
import useAddToCart from '@/features/cart/hooks/useAddToCart';

import useInventory from '../../hooks/useInventory';
import { Product } from '../../types';

interface AddToCartProps {
  product: Product;
}

export default function AddToCart({ product }: AddToCartProps) {
  const translate = useTranslations('productPage');

  const { sku, max, disabled } = useInventory(product);
  const {
    amount,
    increment: handleIncrement,
    decrement: handleDecrement,
    addToCart,
  } = useAddToCart({ sku, max, initialAmount: 1 });

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
          max={disabled ? 1 : max}
          amount={amount}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </div>

      <Button
        className="mb-2"
        onClick={addToCart}
        aria-label={`Add ${amount} of ${sku} to cart`}
        disabled={disabled}
      >
        {translate('addToCart')}
      </Button>
    </>
  );
}
