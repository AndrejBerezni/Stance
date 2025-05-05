'use client';
import { useState } from 'react';

import Image from 'next/image';

import { cn } from '@/lib/utils/cn';

interface StarRatingProps {
  max?: number;
  initial?: number;
  name?: string;
  locked?: boolean;
}

interface StarProps {
  filled: 'full' | 'half' | 'empty';
}

function Star({ filled }: StarProps) {
  return (
    <Image
      src={
        filled === 'full'
          ? '/icons/star-full.svg'
          : filled === 'half'
            ? '/icons/star-half.svg'
            : '/icons/star-empty.svg'
      }
      width={20}
      height={20}
      alt={`${filled} star`}
    />
  );
}

export default function StarRating({
  max = 5,
  initial = 0,
  name = 'rating',
  locked = false,
}: StarRatingProps) {
  const [rating, setRating] = useState<number>(initial);
  const [hovered, setHovered] = useState<number | null>(null);

  const handleClick = (star: number) => setRating(star);

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
          tabIndex={0}
          onMouseEnter={() => {
            if (!locked) setHovered(star);
          }}
          onMouseLeave={() => {
            if (!locked) setHovered(null);
          }}
          onClick={() => handleClick(star)}
          className={cn('', {
            'hover:cursor-pointer hover:drop-shadow-[0px_0px_1px_var(--foreground)]':
              !locked,
          })}
        >
          <Star filled={handleFill(star)} />
        </span>
      ))}
    </div>
  );
}
