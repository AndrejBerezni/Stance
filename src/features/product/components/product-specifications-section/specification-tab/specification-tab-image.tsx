import Image from 'next/image';

interface SpecificationTabImageProps {
  src: string;
  alt: string;
}

export default function SpecificationTabImage({
  src,
  alt,
}: SpecificationTabImageProps) {
  return (
    <div className="relative aspect-3/2 overflow-hidden rounded-xl w-full lg:min-w-1/3 lg:max-w-1/3 max-h-[400px] lg:max-h-auto">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 30vw, 384px"
        className="object-cover object-center"
        loading="lazy"
      />
    </div>
  );
}
