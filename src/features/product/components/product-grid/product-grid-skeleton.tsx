import { cn } from '@/lib/utils/cn';

import ProductCardSkeleton from '../product-card/product-card-skeleton';

interface ProductGridSkeletonProps {
  items?: number;
  fullWidth?: boolean;
}

export default function ProductGridSkeleton({
  items = 4,
  fullWidth = true,
}: ProductGridSkeletonProps) {
  return (
    <div
      className={cn('grid grid-cols-1 sm:grid-cols-2 gap-8', {
        'xl:grid-cols-4': fullWidth,
        'xl:grid-cols-3': !fullWidth,
      })}
    >
      {Array.from({ length: items }, (_, index) => index).map((item) => (
        <ProductCardSkeleton key={item} />
      ))}
    </div>
  );
}
