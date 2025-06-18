import Image from 'next/image';

import { BLUR_DATA_URL } from '@/lib/constants';
import { cn } from '@/lib/utils/cn';

interface CartItemImageProps {
  src: string | null | undefined;
  alt: string;
  isCheckout?: boolean;
}

export default function CartItemImage({
  src,
  alt,
  isCheckout = false,
}: CartItemImageProps) {
  const sizes = isCheckout
    ? '(max-width: 768px) 56px, 80px'
    : '(max-width: 768px) 100vw, 280px';

  return (
    <div
      className={cn('relative overflow-hidden rounded-xl', {
        'h-[200px] w-full md:max-w-[280px]': !isCheckout,
        'h-[56px] w-[56px] md:h-[80px] md:w-[80px]': isCheckout,
      })}
    >
      <Image
        src={src ?? '/images/no-image.jpg'}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover object-center duration-300 hover:scale-105"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
      />
    </div>
  );
}
