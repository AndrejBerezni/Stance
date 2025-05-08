import Image from 'next/image';
import Link from 'next/link';

interface ProductCardImageProps {
  href: string;
  img: string;
  alt: string;
}

export default function ProductCardImage({
  href,
  img,
  alt,
}: ProductCardImageProps) {
  return (
    <Link href={href}>
      <div className="relative w-full rounded-xl h-[300px] overflow-hidden">
        <Image
          src={img}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 280px"
          className="object-cover object-center hover:scale-105 duration-300"
          loading="lazy"
        />
      </div>
    </Link>
  );
}
