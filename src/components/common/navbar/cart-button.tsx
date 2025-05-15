import { ShoppingBag } from 'lucide-react';

import { cn } from '@/lib/utils/cn';

import { NavbarButton } from './navbar-buttons';

// Temporary number for display until we implement cart logic
const TEMP_ITEMS = 82;

function NumberOfItems({ items }: { items: number }) {
  //TO BE IMPLEMENTED: useCart in parent will provide number of items
  return (
    <div
      className={cn(
        'bg-primary text-background absolute -top-2 -right-2 flex aspect-square h-[18px] w-[18px] items-center justify-center rounded-full p-1 text-xs font-semibold',
        { '-right-4': items > 99 }
      )}
    >
      {items > 99 ? '99+' : items}
    </div>
  );
}

export default function CartButton() {
  // TO BE IMPLEMENTED: useCart hook that we will use on this button

  return (
    <NavbarButton>
      <ShoppingBag size={24} />
      {TEMP_ITEMS > 0 && <NumberOfItems items={TEMP_ITEMS} />}
    </NavbarButton>
  );
}
