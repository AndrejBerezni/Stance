import { InventoryItem } from '@/features/product/types';

export interface CartItemDetails {
  name: string;
  description: string;
  image_url: string;
}
export interface CartItem {
  item: InventoryItem;
  details: CartItemDetails;
  quantity: number;
}
