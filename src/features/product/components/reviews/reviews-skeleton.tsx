import Skeleton from '@/components/ui/skeleton';

export default function ReviewsSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-10 xl:grid-cols-3 xl:gap-8">
      <section className="flex flex-col gap-6">
        <div>
          <Skeleton className="mb-2 h-8 w-1/3" />
          <Skeleton className="h-7 w-1/2" />
        </div>
        <div className="flex flex-col-reverse justify-evenly gap-4">
          {Array.from({ length: 5 }, (_, index) => index).map((bar) => (
            <Skeleton key={bar} className="h-6 w-full rounded-full" />
          ))}
        </div>
        <div className="flex justify-center">
          <Skeleton className="mx-4 h-11 w-38" />
        </div>
      </section>
      <section className="col-span-1 flex flex-col gap-6 md:gap-8 xl:col-span-2">
        {Array.from({ length: 6 }, (_, index) => index).map((card) => (
          <article key={card} className="flex flex-col gap-4">
            <div className="flex gap-4">
              <Skeleton className="h-12 w-12 !rounded-full" />
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-5 w-16" />
                </div>
                <Skeleton className="h-8 w-32" />
              </div>
            </div>
            <Skeleton className="h-8 w-full" />
          </article>
        ))}
      </section>
    </div>
  );
}
