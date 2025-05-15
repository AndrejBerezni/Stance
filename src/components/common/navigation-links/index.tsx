'use client';
import { HTMLAttributes, useMemo } from 'react';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { cn } from '@/lib/utils/cn';

/* Since NavigationLinks is reusable component (at the moment of it's creation it is being used on navbar and sidebar),
to comply to Open/Closed principle, we pass styles as props, instead of defining styles
for each use case inside the component.
This way, when we have new use case for NavigationLinks, we won't need to edit this component (CLOSED FOR MODIFICATION)
but instead we will pass styles suitable for it's use case (OPEN FOR EXTENSION) */

export default function NavigationLinks({
  ...props
}: HTMLAttributes<HTMLUListElement>) {
  const translate = useTranslations('navigation');
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';

  const links = useMemo(
    () => [
      { id: 'shop-all-link', href: '/products', text: translate('shopAll') },
      {
        id: 'latest-arrivals-link',
        href: '/products?collection=latestArrivals',
        text: translate('latestArrivals'),
      },
    ],
    []
  );

  return (
    <nav>
      <ul {...props}>
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={cn(
              'active:text-primary hover:text-ink-900 disabled:text-disabled link-focus text-sm lg:text-base',
              {
                'text-ink-900': pathname === link.href,
                'text-ink-600': pathname !== link.href,
              }
            )}
          >
            {link.text}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
