import Skeleton from '@/components/ui/skeleton';

export default function ProductCardSkeleton() {
  return (
    <div>
      <Skeleton className="w-full rounded-xl h-[300px]" />
      <div className="py-4 flex flex-col gap-3">
        <div>
          <Skeleton className="h-4 w-14 mb-1" />
          <Skeleton className="h-6 w-24" />
        </div>
        <Skeleton className="h-7 w-14" />
        <div className="rounded-full aspect-square overflow-hidden h-6 w-6">
          <Skeleton className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
