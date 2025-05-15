import { useMemo } from 'react';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface LinksColumnProps {
  title: string;
  links: { id: string; href: string; text: string }[];
}

function LinksColumn({ title, links }: LinksColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-ink-500 text-sm uppercase">{title}</h4>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className="text-ink-600 hover:text-ink-900 font-medium"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FooterLinks() {
  const translate = useTranslations('footer');
  const links = useMemo(
    () => [
      {
        title: `${translate('shop')} ${translate('categories')}`,
        links: [
          {
            id: 'unisex-link',
            href: '/products?category=unisex',
            text: translate('unisex'),
          },
          {
            id: 'women-link',
            href: '/products?category=women',
            text: translate('women'),
          },
          {
            id: 'men-link',
            href: '/products?category=men',
            text: translate('men'),
          },
        ],
      },
      {
        title: `${translate('shop')} ${translate('collections')}`,
        links: [
          {
            id: 'latest-link',
            href: '/products?collection=latest',
            text: translate('latestArrivals'),
          },
          {
            id: 'urban-link',
            href: '/products?collection=urban',
            text: translate('urban'),
          },
          {
            id: 'cozy-link',
            href: '/products?collection=cozy',
            text: translate('cozy'),
          },
          {
            id: 'fresh-link',
            href: '/products?collection=fresh',
            text: translate('fresh'),
          },
        ],
      },
    ],
    [translate]
  );
  return (
    <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-2 xl:flex xl:justify-evenly">
      {links.map((linksCol) => (
        <LinksColumn
          key={linksCol.title}
          title={linksCol.title}
          links={linksCol.links}
        />
      ))}
    </div>
  );
}
