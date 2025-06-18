import { useTranslations } from 'next-intl';

import ProductCardPrice from '@/features/product/components/product-card/product-card-price';

import { CartItem as ICartItem } from '../../types';
import CartItemImage from '../cart-item/cart-item-image';

export default function CheckoutCartItem({
  cartItem,
}: {
  cartItem: ICartItem;
}) {
  const translateColor = useTranslations('colors');
  const translate = useTranslations('checkout');

  return (
    <article className="flex flex-col gap-6 sm:flex-row">
      <div className="flex flex-1 gap-6">
        <CartItemImage
          src={cartItem.details.image_url}
          alt={cartItem.details.name}
          isCheckout
        />
        <div className="flex flex-1 flex-col gap-2">
          <h2 className="font-medium md:text-xl">{cartItem.details.name}</h2>
          <p className="text-ink-600 text-sm font-medium md:text-base">
            {translateColor(cartItem.item.color)}
            {cartItem.item.size && (
              <span className="uppercase">{` • ${cartItem.item.size}`}</span>
            )}
          </p>
          <p className="text-ink-600 text-sm font-medium md:text-base">
            {translate('quantity')}: {cartItem.quantity}
          </p>
        </div>
      </div>
      <ProductCardPrice
        price={{
          list_price: cartItem.item.list_price * cartItem.quantity,
          sale_price: cartItem.item.sale_price
            ? cartItem.item.sale_price * cartItem.quantity
            : null,
        }}
        isCheckout
      />
    </article>
  );
}
