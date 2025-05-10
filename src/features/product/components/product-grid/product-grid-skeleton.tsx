import Skeleton from '@/components/ui/skeleton';

import ProductCardSkeleton from '../product-card/product-card-skeleton';

export default function ProductGridSkeleton({ items = 4 }: { items?: number }) {
  return (
    <section className="section-wrapper">
      <Skeleton className="h-8 md:h-9 w-48 mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {Array.from({ length: items }, (_, index) => index).map((item) => (
          <ProductCardSkeleton key={item} />
        ))}
      </div>
    </section>
  );
}
