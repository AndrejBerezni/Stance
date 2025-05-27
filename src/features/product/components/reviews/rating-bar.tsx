import { useTranslations } from 'next-intl';

import { cn } from '@/lib/utils/cn';

import barVariants from './styles';
import { Grade } from '../../types';

interface RatingBarProps {
  grade: Grade;
  percentage: number;
}
export default function RatingBar({ grade, percentage }: RatingBarProps) {
  const translate = useTranslations('reviews');
  return (
    <div className="flex items-center gap-4">
      <span className="text-ink-600 w-32 font-medium">{translate(grade)}</span>
      <div
        role="progresbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${percentage}% of all reviews are rated ${grade}`}
        className="h-3 flex-1 rounded-full bg-gray-200"
        aria-hidden="true"
      >
        <div
          className={cn(barVariants({ grade }))}
          style={{ width: `${percentage}%` }}
          aria-hidden="true"
        ></div>
      </div>
      <span className="text-ink-600 w-8 text-right" aria-hidden="true">
        {percentage}%
      </span>
    </div>
  );
}
