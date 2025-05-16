import StarRating from '@/components/ui/star-rating';
import useModifySearchParam from '@/hooks/useModifySearchParam';
import { cn } from '@/lib/utils/cn';

export default function RatingFilter() {
  const { setSearchParam, currentValue, isPending } =
    useModifySearchParam('rating');

  return (
    <div className={cn({ 'opacity-50': isPending })}>
      <StarRating
        rating={currentValue ? +currentValue : 0}
        handleClick={(rating: number) => setSearchParam(rating.toString())}
        locked={isPending}
      />
    </div>
  );
}
