import Image from 'next/image';
import Link from 'next/link';

interface ProductCardImageProps {
  href: string;
  src: string;
  alt: string;
}

export default function ProductCardImage({
  href,
  src,
  alt,
}: ProductCardImageProps) {
  return (
    <Link href={href}>
      <div className="relative h-[300px] w-full overflow-hidden rounded-xl">
        <Image
          src={src ?? '/images/no-image.jpg'}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 280px"
          className="object-cover object-center duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>
    </Link>
  );
}
