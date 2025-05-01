import Image from 'next/image';

import { cn } from '@/lib/utils/cn';

import { NavbarButton } from './navbar-buttons';

// Temporary number for display until we implement cart logic
const TEMP_ITEMS = 82;

function NumberOfItems({ items }: { items: number }) {
  //TO BE IMPLEMENTED: useCart in parent will provide number of items
  return (
    <div
      className={cn(
        'absolute -top-2 h-[18px] w-[18px] p-1 text-xs flex items-center justify-center rounded-full aspect-square -right-2 bg-primary text-background font-semibold',
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
      <Image src="/icons/cart.svg" alt="Cart button." width={24} height={24} />
      {TEMP_ITEMS > 0 && <NumberOfItems items={TEMP_ITEMS} />}
    </NavbarButton>
  );
}
