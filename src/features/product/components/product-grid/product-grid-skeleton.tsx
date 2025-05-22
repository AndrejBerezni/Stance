import Skeleton from '@/components/ui/skeleton';
import { cn } from '@/lib/utils/cn';

import ProductCardSkeleton from '../product-card/product-card-skeleton';

interface ProductGridSkeletonProps {
  items?: number;
  fullWidth?: boolean;
  withHeader?: boolean;
}

export default function ProductGridSkeleton({
  items = 4,
  fullWidth = true,
  withHeader = false,
}: ProductGridSkeletonProps) {
  return (
    <>
      {withHeader && <Skeleton className="mb-8 h-9 w-50" />}
      <div
        className={cn('grid grid-cols-1 gap-8 sm:grid-cols-2', {
          'xl:grid-cols-4': fullWidth,
          'xl:grid-cols-3': !fullWidth,
        })}
      >
        {Array.from({ length: items }, (_, index) => index).map((item) => (
          <ProductCardSkeleton key={item} />
        ))}
      </div>
    </>
  );
}
