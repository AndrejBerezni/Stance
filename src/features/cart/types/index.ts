import { InventoryItem } from '@/features/product/types';

export interface CartItem {
  item: InventoryItem;
  quantity: number;
}
