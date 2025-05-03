export interface Product {
  product_id: string;
  name: string;
  description: string;
  category: string;
  collection: string;
  created_at: string;
}

export interface InventoryItem {
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

export interface ProductInfo {
  product_id: string;
  title: ProductInfoTitle;
  description: string[];
}

export interface ProductImage {
  product_id: string;
  color: string;
  image_url: string;
}

// TO DO: When we implement db, need to think how to store available attributes for each product
export type ClothingSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export type ShoeSize =
  | 4
  | 4.5
  | 5
  | 5.5
  | 6
  | 6.5
  | 7
  | 7.5
  | 8
  | 8.5
  | 9
  | 9.5
  | 10
  | 10.5
  | 11
  | 11.5
  | 12;

export type ProductColor =
  | 'white'
  | 'pink'
  | 'beige'
  | 'green'
  | 'black'
  | 'orange'
  | 'yellow'
  | 'brown'
  | 'red'
  | 'blue';
