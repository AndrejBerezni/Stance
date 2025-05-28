import Image from 'next/image';

import { BLUR_DATA_URL } from '@/lib/constants';

interface CartItemImageProps {
  src: string;
  alt: string;
}

export default function CartItemImage({ src, alt }: CartItemImageProps) {
  return (
    <div className="relative h-[200px] w-full overflow-hidden rounded-xl md:max-w-[280px]">
      <Image
        src={src ?? '/images/no-image.jpg'}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 280px"
        className="object-cover object-center duration-300 hover:scale-105"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
      />
    </div>
  );
}
