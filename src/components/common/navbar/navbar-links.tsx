'use client';
import { useMemo } from 'react';

import clsx from 'clsx';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function NavbarLinks() {
  const translate = useTranslations('navigation');
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';

  const links = useMemo(
    () => [
      { id: 'shop-all-link', href: '/shop', text: translate('shopAll') },
      {
        id: 'latest-arrivals-link',
        href: '/latest-arrivals',
        text: translate('latestArrivals'),
      },
    ],
    []
  );

  return (
    <ul className="hidden lg:flex lg:items-center lg:gap-8">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={clsx(
            'active:text-primary hover:text-foreground disabled:text-disabled link-focus',
            {
              'text-foreground': pathname === link.href,
              'text-secondary-foreground': pathname !== link.href,
            }
          )}
        >
          {link.text}
        </Link>
      ))}
    </ul>
  );
}
