import StarRating from '@/components/ui/star-rating';
import useModifySearchParam from '@/hooks/useModifySearchParam';

export default function RatingFilter() {
  const { setSearchParam, currentValue } = useModifySearchParam('rating');

  return (
    <StarRating
      rating={currentValue ? +currentValue : 0}
      handleClick={(rating: number) => setSearchParam(rating.toString())}
    />
  );
}
