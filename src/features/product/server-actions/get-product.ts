'use server';

/* 
TO BE IMPLEMENTED: while building UI, we are using dummy data,
and therefore we are writing these dummy server actions
which later we will replace with appropriate data fetching

*/

import rawInventory from '@/lib/temp-data/inventory.json';
import productImages from '@/lib/temp-data/product-images.json';
import rawProductsInformation from '@/lib/temp-data/product-info.json';
import products from '@/lib/temp-data/products.json';

import { InventoryItem, Product, ProductImage, ProductInfo } from '../types';

const inventoryList = rawInventory as InventoryItem[];
const productsInformation = rawProductsInformation as ProductInfo[];

export const getProduct = async (
  productId: string
): Promise<Product | undefined> => {
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
  const images = productImages.filter(
    (image) => image.product_id === productId && image.color === color
  );
  return images.length > 0 ? images : undefined;
};
