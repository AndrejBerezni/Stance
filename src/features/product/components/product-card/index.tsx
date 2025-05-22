'use client';
import React, { useMemo, useState } from 'react';

import ProductCardColors from './product-card-colors';
import ProductCardHeader from './product-card-header';
import ProductCardImage from './product-card-image';
import ProductCardPrice from './product-card-price';
import { ExtendedProduct } from '../../types';
import { generateProductLink, getInventoryPrice } from '../../utils';

export default function ProductCard({
  cardData,
}: {
  cardData: ExtendedProduct;
}) {
  const {
    product_id,
    name,
    available_colors,
    sizing_convention,
    images,
    inventory,
  } = cardData;

  const [displayedColor, setDisplayedColor] = useState<string>(
    available_colors[0]
  );

  const href = useMemo(
    () =>
      generateProductLink(
        product_id,
        available_colors,
        sizing_convention,
        displayedColor
      ),
    [displayedColor]
  );

  const price = useMemo(
    () => getInventoryPrice(inventory, displayedColor),
    [inventory, displayedColor]
  );

  const image = useMemo(
    () =>
      images.find((img) => img.color === displayedColor)?.image_url ??
      images[0].image_url,
    [images, displayedColor]
  );

  return (
    <article>
      <ProductCardImage src={image} alt={name} href={href} />
      <div className="flex flex-col gap-3 py-4">
        <ProductCardHeader
          displayedColor={displayedColor}
          name={name}
          href={href}
        />
        <ProductCardPrice price={price} />
        <ProductCardColors
          colors={available_colors}
          displayedColor={displayedColor}
          setDisplayedColor={setDisplayedColor}
        />
      </div>
    </article>
  );
}
