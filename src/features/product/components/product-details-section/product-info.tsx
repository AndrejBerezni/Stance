import { useTranslations } from 'next-intl';

import Accordion from '@/components/ui/accordion';

import { ProductInfo as IProductInfo } from '../../types';

interface ProductInfoProps {
  productId: string;
  info: IProductInfo[];
}

export default function ProductInfo({ productId, info }: ProductInfoProps) {
  const translate = useTranslations('productPage');
  if (info) {
    const accordionItems = info
      .map((section) => ({
        id: `${productId}-${section.title}`,
        title: translate(section.title),
        content: (
          <ul className="list-inside list-disc">
            {section.description.map((line) => (
              <li key={line} className="text-ink-600">
                {line}
              </li>
            ))}
          </ul>
        ),
      }))
      .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));

    return <Accordion items={accordionItems} className="mt-6" />;
  }
}
