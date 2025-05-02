import { useState } from 'react';

import CurrentImage from './current-image';
import ThumbnailList from './thumbnail-list';
import { ProductImage } from '../../types';

interface ImageGalleryProps {
  images: ProductImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState<number>(0);
  return (
    <div className="w-full lg:w-1/2">
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
