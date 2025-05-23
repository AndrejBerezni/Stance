import Image from 'next/image';
import Link from 'next/link';

import { BLUR_DATA_URL } from '@/lib/constants';

export default function Brand() {
  return (
    <Link href="/" className="link-focus flex items-center gap-1">
      <Image
        src="/logo.svg"
        alt="Brand logo with text"
        width={32}
        height={32}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
      />
      <span className="font-bold">Stance</span>
    </Link>
  );
}
