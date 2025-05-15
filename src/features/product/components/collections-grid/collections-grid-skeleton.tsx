import Skeleton from '@/components/ui/skeleton';

export default function CollectionsGridSkeleton() {
  return (
    <section className="section-wrapper">
      <Skeleton className="mb-8 h-9 w-36" />
      <div className="grid grid-cols-1 grid-rows-4 gap-7 sm:grid-cols-2 sm:grid-rows-2">
        {Array.from({ length: 3 }, (_, index) => index).map((item) => (
          <Skeleton
            key={item}
            className="col-span-1 min-h-[276px] overflow-hidden rounded-xl first:row-span-2"
          />
        ))}
      </div>
    </section>
  );
}
