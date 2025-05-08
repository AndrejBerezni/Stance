import Skeleton from '@/components/ui/skeleton';

import ProductCardSkeleton from '../product-card/product-card-skeleton';

export default function RelatedProductsSectionSkeleton() {
  return (
    <section className="section-wrapper">
      <Skeleton className="h-8 md:h-9 w-48 mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </div>
    </section>
  );
}
