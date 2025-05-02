import { Dispatch, SetStateAction } from 'react';

import { cn } from '@/lib/utils/cn';
import calculateThumbnailSize from '@/lib/utils/ui/calculate-thumbnail-size';

import Thumbnail from './thumbnail';
import { ProductImage } from '../../types';

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
      className={cn('w-full flex gap-4 no-scrollbar', {
        'overflow-x-scroll': images.length > 3,
        'overflow-x-hidden justify-between': images.length <= 3,
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
