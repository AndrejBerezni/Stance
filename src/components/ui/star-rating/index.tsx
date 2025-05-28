'use client';
import { useState } from 'react';

import { cn } from '@/lib/utils/cn';

import Star from './star';

interface StarRatingProps {
  max?: number;
  rating?: number;
  name?: string;
  handleClick?: (star: number) => void;
  locked?: boolean;
}

export default function StarRating({
  max = 5,
  rating = 0,
  name = 'rating',
  handleClick,
  locked = false,
}: StarRatingProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  const handleFill = (star: number) => {
    const activeRating = hovered ?? rating;

    if (activeRating >= star) return 'full';
    if (rating >= star - 0.5 && hovered === null) return 'half';
    return 'empty';
  };

  return (
    <div aria-label="Star Rating" role="radiogroup" className="flex">
      {!locked && <input type="hidden" name={name} value={rating} />}
      {Array.from({ length: max }, (_, index) => index + 1).map((star) => (
        <span
          key={star}
          tabIndex={locked ? -1 : 0}
          onMouseEnter={() => {
            if (!locked) setHovered(star);
          }}
          onMouseLeave={() => {
            if (!locked) setHovered(null);
          }}
          onClick={() => {
            if (handleClick) {
              handleClick(star);
            }
          }}
          className={cn('', {
            'hover:cursor-pointer hover:drop-shadow-[0px_0px_1px_var(--ink-900)]':
              !locked,
          })}
        >
          <Star filled={handleFill(star)} />
        </span>
      ))}
    </div>
  );
}
