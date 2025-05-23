import Image from 'next/image';

import { ProductImage } from '@/features/product/types';
import { cn } from '@/lib/utils/cn';
import { BLUR_DATA_URL } from '@/lib/utils/constants';

import { thumbnailVariants } from './styles';

interface ThumbnailProps {
  selected: boolean;
  selectImage: () => void;
  image: ProductImage;
  size: 'lg' | 'md' | 'sm';
}

export default function Thumbnail({
  selected,
  selectImage,
  image,
  size,
}: ThumbnailProps) {
  return (
    <div
      className={cn(thumbnailVariants({ size, selected }))}
      aria-selected={selected}
      role="tab"
    >
      <Image
        src={image.image_url ?? '/images/no-image.jpg'}
        alt={image.product_id}
        onClick={selectImage}
        fill
        sizes="(max-width: 1024px) 30vw, (max-width: 1440px) 20vw, 164px"
        className={cn('object-cover object-center duration-300', {
          'group-hover:scale-105': !selected,
        })}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
      />
    </div>
  );
}
