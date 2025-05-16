import Skeleton from '@/components/ui/skeleton';

export default function ProductCardSkeleton() {
  return (
    <div>
      <Skeleton className="h-[300px] w-full rounded-xl" />
      <div className="flex flex-col gap-3 py-4">
        <div>
          <Skeleton className="mb-1 h-4 w-14" />
          <Skeleton className="h-6 w-24" />
        </div>
        <Skeleton className="h-7 w-14" />
        <div className="aspect-square h-6 w-6 overflow-hidden rounded-full">
          <Skeleton className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
