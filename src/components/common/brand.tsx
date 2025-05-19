import Image from 'next/image';
import Link from 'next/link';

export default function Brand() {
  return (
    <Link href="/" className="link-focus flex items-center gap-1">
      <Image
        src="/logo.svg"
        alt="Brand logo with text"
        width={32}
        height={32}
      />
      <span className="font-bold">Stance</span>
    </Link>
  );
}
