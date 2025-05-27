import { useMemo } from 'react';

import { useTranslations } from 'next-intl';

import RatingBar from './rating-bar';
import { Grade, TotalReviews, StatisticsItem } from '../../types';
import ProductRating from '../product-details-section/product-rating';

interface OverallRatingProps {
  statistics: Record<string, any>;
  total: TotalReviews;
}

const GradeMap = new Map<number, string>([
  [1, 'poor'],
  [2, 'belowAverage'],
  [3, 'average'],
  [4, 'good'],
  [5, 'excellent'],
]);

export default function OverallRating({
  statistics,
  total,
}: OverallRatingProps) {
  const translate = useTranslations('reviews');

  const ratingBars = useMemo(
    () =>
      Array.from({ length: 5 }, (_, index) => index + 1).map((rating) => {
        const statisticsItem = statistics.find(
          (item: StatisticsItem) => item.rating === rating
        );
        const count = statisticsItem?.count ?? 0;
        console.log(count, rating);
        return {
          grade: GradeMap.get(rating),
          percentage: Math.floor((count / total.number_of_reviews) * 100),
        };
      }),
    [total, statistics]
  );

  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold">{translate('overallRating')}</h2>
        <ProductRating
          rating={total.rating}
          numberOfReviews={total.number_of_reviews}
          reviewsOpen
        />
      </div>
      <div className="flex flex-col-reverse justify-evenly gap-4">
        {ratingBars.map((bar) => (
          <RatingBar
            key={bar.grade}
            grade={bar.grade as Grade}
            percentage={bar.percentage}
          />
        ))}
      </div>
      <div>{/* TO DO: add write review button */}</div>
    </section>
  );
}
