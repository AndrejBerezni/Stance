export interface Product {
  product_id: string;
  name: string;
  description: string;
  category: string;
  collection: string;
  created_at: Date;
  sizing_convention: string | null;
  available_colors: string[];
  stripe_id: string | null;
  number_of_reviews: number;
  rating: number;
  list_price: number;
  updated_at: Date;
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
export interface ExtendedProduct extends Product {
  inventory: InventoryItem[];
  images: ProductImage[];
  product_info: ProductInfo[];
}

export interface ProductsResponse {
  data: ExtendedProduct[];
  meta: {
    page: number;
    totalPages: number;
    pageSize: number;
    totalItems: number;
  };
}
