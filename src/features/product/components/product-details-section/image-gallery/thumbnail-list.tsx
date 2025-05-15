import { Dispatch, SetStateAction } from 'react';

import { ProductImage } from '@/features/product/types';
import calculateThumbnailSize from '@/lib/utils/calculate-thumbnail-size';
import { cn } from '@/lib/utils/cn';

import Thumbnail from './thumbnail';

interface ThumbnailListProps {
  images: ProductImage[];
  currentImage: number;
  selectImage: Dispatch<SetStateAction<number>>;
}

export default function ThumbnailList({
  images,
  currentImage,
  selectImage,
}: ThumbnailListProps) {
  return (
    <div
      className={cn('no-scrollbar flex w-full gap-4', {
        'overflow-x-scroll': images.length > 3,
        'justify-between overflow-x-hidden': images.length <= 3,
      })}
    >
      {images.map((image, index) => (
        <Thumbnail
          key={image.image_url}
          image={image}
          selected={currentImage === index}
          selectImage={() => selectImage(index)}
          size={calculateThumbnailSize(images.length)}
        />
      ))}
    </div>
  );
}
