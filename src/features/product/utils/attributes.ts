import { CLOTHES_SIZES, SHOES_SIZES } from '@/lib/utils/constants';

import { ExtendedProduct } from '../types';

export const getSizes = (sizing_convention: string | null) => {
  if (sizing_convention === null) return null;
  switch (sizing_convention) {
    case 'clothes':
      return CLOTHES_SIZES;
    case 'shoes':
      return SHOES_SIZES;
    default:
      return null;
  }
};

/* This function is used to set searchParams for product page if they are not set already,
in order to have default inventory item selected, 
instead of having 'add to cart' button disabled until user selects something */
export const setDefaultColorAndSize = async (
  searchParams: Promise<{ color: string; size: string | undefined }>,
  product: ExtendedProduct
) => {
  let { color, size } = await searchParams;
  let needsRedirect = false;
  const updatedParams = new URLSearchParams();

  if (!color || !product.available_colors.includes(color)) {
    color = product.available_colors[0];
    updatedParams.set('color', color);
    needsRedirect = true;
  } else {
    updatedParams.set('color', color);
  }

  if (product.sizing_convention) {
    const availableSizes = getSizes(product.sizing_convention);

    if (!size || !availableSizes?.includes(size)) {
      size = availableSizes?.[0];
      if (size) {
        updatedParams.set('size', size);
        needsRedirect = true;
      }
    } else {
      updatedParams.set('size', size);
    }
  }

  return { color, needsRedirect, updatedParams };
};

export const generateProductLink = (
  product_id: string,
  available_colors: string[],
  sizing_convention: string | null,
  selectedColor?: string
): string => {
  const searchParams = new URLSearchParams();

  const color = selectedColor ?? available_colors[0];
  if (color) {
    searchParams.set('color', color);
  }

  if (sizing_convention) {
    const availableSizes = getSizes(sizing_convention);
    if (availableSizes && availableSizes.length > 0) {
      searchParams.set('size', availableSizes[0]);
    }
  }

  return `/${product_id}?${searchParams.toString()}`;
};
