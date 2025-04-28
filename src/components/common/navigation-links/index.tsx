'use client';
import { HTMLAttributes, useMemo } from 'react';

import clsx from 'clsx';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useTranslations } from 'next-intl';

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
    <ul {...props}>
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={clsx(
            'active:text-primary text-sm lg:text-base hover:text-foreground disabled:text-disabled link-focus',
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
