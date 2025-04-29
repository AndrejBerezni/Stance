export interface IProduct {
  product_id: string;
  name: string;
  description: string;
  category: string;
  collection: string;
  created_at: string;
}

export type ClothingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ShoeSize = number;

export interface IInventoryItem {
  product_id: string;
  sku: string;
  color: string;
  size: ClothingSize | ShoeSize | null;
  list_price: number;
  discount: number | null;
  discount_percentage: number | null;
  sale_price: number | null;
  sold: number;
  stock: number;
}

export type ProductInfoTitle = 'Features' | 'Fabric & Care' | 'Shipping';

export interface IProductInfo {
  product_id: string;
  title: ProductInfoTitle;
  description: string[];
}

export interface IProductImage {
  product_id: string;
  color: string;
  image_url: string;
}
