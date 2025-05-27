import Image from 'next/image';

import { BLUR_DATA_URL } from '@/lib/constants';
import { cn } from '@/lib/utils/cn';
interface CustomerAvatarProps {
  size?: 'sm' | 'md';
  src: string;
  customer: string;
}
export default function CustomerAvatar({
  size = 'sm',
  src,
  customer,
}: CustomerAvatarProps) {
  return (
    <Image
      src={src ?? '/images/no-image.jpg'}
      alt={`${customer}'s avatar`}
      width={48}
      height={48}
      placeholder="blur"
      blurDataURL={BLUR_DATA_URL}
      className={cn('rounded-full', {
        'h-18 w-18': size === 'md',
        'h-12 w-12': size === 'sm',
      })}
    />
  );
}
