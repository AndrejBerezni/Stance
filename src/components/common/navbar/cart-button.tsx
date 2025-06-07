'use client';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

import buttonVariants from '@/components/ui/button/styles';
import { useAppSelector } from '@/hooks/redux-hooks';
import type { RootState } from '@/lib/store';
import { cn } from '@/lib/utils/cn';

function NumberOfItems({ items }: { items: number }) {
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
  const itemsInCart = useAppSelector(
    (state: RootState) => state.cart.totalItems
  );
  const locale = useLocale();

  return (
    <Link
      href={`/${locale}/cart`}
      aria-label="Cart button"
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'md' }),
        'relative'
      )}
    >
      <ShoppingBag size={24} />
      {itemsInCart > 0 && <NumberOfItems items={itemsInCart} />}
    </Link>
  );
}
