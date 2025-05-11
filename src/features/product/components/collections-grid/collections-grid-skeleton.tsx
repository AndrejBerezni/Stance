import Skeleton from '@/components/ui/skeleton';

export default function CollectionsGridSkeleton() {
  return (
    <section className="section-wrapper">
      <Skeleton className="h-9 w-36 mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 gap-7">
        {Array.from({ length: 3 }, (_, index) => index).map((item) => (
          <Skeleton
            key={item}
            className="rounded-xl overflow-hidden first:row-span-2 col-span-1 min-h-[276px]"
          />
        ))}
      </div>
    </section>
  );
}
