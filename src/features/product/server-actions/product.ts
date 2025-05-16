'use server';

/* 
TO BE IMPLEMENTED: while building UI, we are using dummy data,
and therefore we are writing these dummy server actions,
not paying much attention to the way they are written or executed,
which later we will replace with appropriate data fetching
*/

import rawInventory from '@/lib/temp-data/inventory.json';
import productImages from '@/lib/temp-data/product-images.json';
import rawProductsInformation from '@/lib/temp-data/product-info.json';
import reviews from '@/lib/temp-data/product-reviews.json';
import products from '@/lib/temp-data/products.json';

import {
  InventoryItem,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductWithInventory,
} from '../types';

const inventoryList = rawInventory as InventoryItem[];
const productsInformation = rawProductsInformation as ProductInfo[];

export const getProduct = async (
  productId: string
): Promise<ProductWithInventory | undefined> => {
  const product = products.find((product) => product.product_id === productId);
  if (!product) return undefined;

  const inventory = inventoryList.filter(
    (item) => item.product_id === productId
  );

  return { ...product, inventory };
};

export const getProductInfo = async (
  productId: string
): Promise<ProductInfo[] | undefined> => {
  const productInfo: ProductInfo[] = productsInformation.filter(
    (product) => product.product_id === productId
  );
  return productInfo.length > 0 ? productInfo : undefined;
};

export const getProductImages = async (
  productId: string,
  color: string
): Promise<ProductImage[] | undefined> => {
  // await new Promise((resolve) => setTimeout(resolve, 500));
  const images = productImages.filter(
    (image) => image.product_id === productId && image.color === color
  );
  return images.length > 0 ? images : undefined;
};

export const getProductRating = async (productId: string) => {
  const productReviews = reviews.filter(
    (review) => review.product_id === productId
  );
  let rating = '0';
  if (productReviews.length > 0) {
    rating = (
      productReviews.reduce((acc, cur) => acc + cur.rating, 0) /
      productReviews.length
    ).toFixed(1);
  }

  return { rating, total: productReviews.length };
};

export const getRelatedProductCards = async (
  productId: string,
  collection: string
): Promise<ProductCard[]> => {
  const relatedProducts = products
    .filter((p) => p.collection === collection && p.product_id !== productId)
    .slice(0, 4);

  return relatedProducts.map((related) => {
    // Map images by color
    const imageMap: Record<string, string> = {};
    related.available_colors.forEach((color) => {
      const img = productImages.find(
        (i) => i.product_id === related.product_id && i.color === color
      );
      if (img) {
        imageMap[color] = img.image_url;
      }
    });

    // Map prices by color
    const priceMap: Record<
      string,
      { list_price: number; sale_price: number | null }
    > = {};
    related.available_colors.forEach((color) => {
      const inv = rawInventory.find(
        (i) => i.product_id === related.product_id && i.color === color
      );
      if (inv) {
        priceMap[color] = {
          list_price: inv.list_price,
          sale_price: inv.sale_price,
        };
      }
    });

    return {
      product: related,
      images: imageMap,
      prices: priceMap,
    };
  });
};

export const getLatestArrivals = async (p?: {
  collection?: string | string[] | undefined;
  category?: string | string[] | undefined;
  color?: string | string[] | undefined;
  rating?: string | undefined;
}): Promise<ProductCard[] | undefined> => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  let latestProducts;
  if (p?.collection === 'latestArrivals') {
    latestProducts = products
      .sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      )
      .slice(0, 8);
  } else {
    latestProducts = products
      .sort(
        (a, b) =>
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      )
      .slice(0, 8);
  }

  return latestProducts.map((related) => {
    // Map images by color
    const imageMap: Record<string, string> = {};
    related.available_colors.forEach((color) => {
      const img = productImages.find(
        (i) => i.product_id === related.product_id && i.color === color
      );
      if (img) {
        imageMap[color] = img.image_url;
      }
    });

    // Map prices by color
    const priceMap: Record<
      string,
      { list_price: number; sale_price: number | null }
    > = {};
    related.available_colors.forEach((color) => {
      const inv = rawInventory.find(
        (i) => i.product_id === related.product_id && i.color === color
      );
      if (inv) {
        priceMap[color] = {
          list_price: inv.list_price,
          sale_price: inv.sale_price,
        };
      }
    });

    return {
      product: related,
      images: imageMap,
      prices: priceMap,
    };
  });
};
