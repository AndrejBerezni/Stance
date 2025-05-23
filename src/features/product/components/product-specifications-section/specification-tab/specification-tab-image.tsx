import Image from 'next/image';

import { BLUR_DATA_URL } from '@/lib/utils/constants';

interface SpecificationTabImageProps {
  src: string;
  alt: string;
}

export default function SpecificationTabImage({
  src,
  alt,
}: SpecificationTabImageProps) {
  return (
    <div className="lg:max-h-auto relative aspect-3/2 max-h-[400px] w-full overflow-hidden rounded-xl lg:max-w-1/3 lg:min-w-1/3">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 30vw, 384px"
        className="object-cover object-center"
        loading="lazy"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
      />
    </div>
  );
}
