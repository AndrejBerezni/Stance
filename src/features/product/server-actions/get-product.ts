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

import {
  IInventoryItem,
  IProduct,
  IProductImage,
  IProductInfo,
} from '../types';

const inventory = rawInventory as IInventoryItem[];
const productsInformation = rawProductsInformation as IProductInfo[];

export const getProduct = async (
  product_id: string
): Promise<IProduct | undefined> =>
  products.find((product) => product.product_id === product_id);

export const getProductInfo = async (
  product_id: string
): Promise<IProductInfo[] | undefined> => {
  const productInfo: IProductInfo[] = productsInformation.filter(
    (product) => product.product_id === product_id
  );
  return productInfo.length > 0 ? productInfo : undefined;
};

export const getProductInventory = async (
  productId: string
): Promise<IInventoryItem[] | undefined> =>
  inventory.filter((product) => product.product_id === productId);

export const getProductImages = async (
  productId: string,
  color: string
): Promise<IProductImage[] | undefined> =>
  productImages.filter(
    (image) => image.product_id === productId && image.color === color
  );
