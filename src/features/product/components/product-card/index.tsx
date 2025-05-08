'use client';

import { useMemo, useState } from 'react';

import ProductCardColors from './product-card-colors';
import ProductCardHeader from './product-card-header';
import ProductCardImage from './product-card-image';
import ProductCardPrice from './product-card-price';
import { ProductCard as IProductCard } from '../../types';
import { generateProductLink } from '../../utils';

export default function ProductCard({ cardData }: { cardData: IProductCard }) {
  const { product, images, prices } = cardData;

  const [displayedColor, setDisplayedColor] = useState<string>(
    product.available_colors[0]
  );

  const href = useMemo(
    () => generateProductLink(product, displayedColor),
    [displayedColor]
  );

  return (
    <article>
      <ProductCardImage
        img={images[displayedColor]}
        alt={product.name}
        href={href}
      />
      <div className="py-4 flex flex-col gap-3">
        <ProductCardHeader
          displayedColor={displayedColor}
          name={product.name}
          href={href}
        />
        <ProductCardPrice price={prices[displayedColor]} />
        <ProductCardColors
          colors={product.available_colors}
          displayedColor={displayedColor}
          setDisplayedColor={setDisplayedColor}
        />
      </div>
    </article>
  );
}
