import Accordion from '@/components/ui/accordion';

import { ProductInfo as IProductInfo } from '../../types';

interface ProductInfoProps {
  productId: string;
  info: IProductInfo[];
}

export default function ProductInfo({ productId, info }: ProductInfoProps) {
  if (info) {
    const accordionItems = info.map((section) => ({
      id: `${productId}-${section.title}`,
      title: section.title,
      content: (
        <ul className="list-inside list-disc">
          {section.description.map((line) => (
            <li key={line} className="text-ink-600">
              {line}
            </li>
          ))}
        </ul>
      ),
    }));

    return <Accordion items={accordionItems} className="mt-6" />;
  }
}
