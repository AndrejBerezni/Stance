'use client';

import { useTranslations } from 'next-intl';

import Button from '@/components/ui/button';
import CartControl from '@/features/cart/components/cart-control';
import useCart from '@/features/cart/hooks/useCart';
import { CartItemDetails } from '@/features/cart/types';

import useInventory from '../../hooks/useInventory';
import { InventoryItem } from '../../types';

interface AddToCartProps {
  inventory: InventoryItem[];
  sizingConvention: string | null;
  itemDetails: CartItemDetails;
}

export default function AddToCart({
  inventory,
  sizingConvention,
  itemDetails,
}: AddToCartProps) {
  const translate = useTranslations('productPage');

  const { item, max, disabled } = useInventory(inventory, sizingConvention);
  const { amount, increment, decrement, addToCart, isItemAdded } = useCart({
    item,
    itemDetails,
    max,
    initialAmount: 1,
    disabled: disabled || !item,
  });

  return (
    <>
      <div className="flex flex-col gap-4">
        <h3 id={`quantity-selector-heading`} className="text-ink-500 text-sm">
          {translate('quantity')}
        </h3>
        <CartControl
          max={disabled ? 1 : max}
          amount={amount}
          handleIncrement={increment}
          handleDecrement={decrement}
        />
      </div>

      <Button
        className="mb-2"
        onClick={addToCart}
        aria-label={`Add ${amount} of ${item?.sku} to cart`}
        disabled={disabled || isItemAdded}
      >
        {isItemAdded ? translate('productAdded') : translate('addToCart')}
      </Button>
    </>
  );
}
