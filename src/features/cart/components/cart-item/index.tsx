import { useTranslations } from 'next-intl';

import Button from '@/components/ui/button';
import ProductCardPrice from '@/features/product/components/product-card/product-card-price';

import useCart from '../../hooks/useCart';
import { CartItem as ICartItem } from '../../types';
import CartControl from '../cart-control';
import CartItemImage from './cart-item-image';

export default function CartItem({ cartItem }: { cartItem: ICartItem }) {
  const translateColor = useTranslations('colors');
  const translate = useTranslations('cart');

  const { amount, increment, decrement, removeFromCart } = useCart({
    item: cartItem.item,
    itemDetails: cartItem.details,
    max: cartItem.item.stock,
    initialAmount: cartItem.quantity,
  });

  return (
    <article className="flex flex-col gap-4 md:flex-row md:gap-8">
      <CartItemImage
        src={cartItem.details.image_url}
        alt={cartItem.details.name}
      />

      {/* Name, variant, and description: */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-medium">{cartItem.details.name}</h2>
        <p className="text-ink-600 font-medium">
          {translateColor(cartItem.item.color)}
          {cartItem.item.size && ` • ${cartItem.item.size}`}
        </p>
        <p className="text-ink-600 text-sm">{cartItem.details.description}</p>

        {/* Cart controls and price: */}
        <div className="flex w-full flex-wrap justify-between gap-4">
          <div className="flex items-center gap-4">
            <CartControl
              max={cartItem.item.stock}
              amount={amount}
              handleIncrement={() => increment('cart')}
              handleDecrement={() => decrement('cart')}
            />
            <Button variant="ghost" size="sm" onClick={removeFromCart}>
              {translate('remove')}
            </Button>
          </div>
          <div className="ml-auto flex items-center">
            <ProductCardPrice
              price={{
                list_price: cartItem.item.list_price * cartItem.quantity,
                sale_price: cartItem.item.sale_price
                  ? cartItem.item.sale_price * cartItem.quantity
                  : null,
              }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
