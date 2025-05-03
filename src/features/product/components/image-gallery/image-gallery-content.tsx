'use client';
import { useState } from 'react';

import CurrentImage from './current-image';
import ThumbnailList from './thumbnail-list';
import { ProductImage } from '../../types';

export default function ImageGalleryContent({
  images,
}: {
  images: ProductImage[];
}) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  return (
    <div className="w-full lg:min-w-1/2 lg:max-w-1/2">
      <CurrentImage image={images[currentImage]} />
      {images.length > 1 && (
        <ThumbnailList
          images={images}
          currentImage={currentImage}
          selectImage={setCurrentImage}
        />
      )}
    </div>
  );
}
