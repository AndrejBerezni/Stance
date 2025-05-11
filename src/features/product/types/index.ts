export interface Product {
  product_id: string;
  name: string;
  description: string;
  category: string;
  collection: string;
  created_at: string;
  sizing_convention: string | null;
  available_colors: string[];
}

export interface ProductWithInventory extends Product {
  inventory: InventoryItem[];
}

export interface ProductCard {
  product: Product;
  images: Record<string, string>;
  prices: Record<string, { list_price: number; sale_price: number | null }>;
}

export interface InventoryItem {
  product_id: string;
  sku: string;
  color: string;
  size: string | null;
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

export interface Collection {
  collection_id: string;
  name: string;
  description: string;
  image_url: string;
  created_at: string;
}
