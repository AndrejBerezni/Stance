'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';

import { useSidebar } from '@/lib/providers/sidebar-provider';

export default function Brand() {
  const { closeSidebar } = useSidebar();
  const locale = useLocale();
  return (
    <Link
      href={`/${locale}`}
      onClick={closeSidebar}
      className="link-focus flex items-center gap-1"
    >
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
