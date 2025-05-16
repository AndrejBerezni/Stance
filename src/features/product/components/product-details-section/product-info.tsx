import Accordion from '@/components/ui/accordion';

import { getProductInfo } from '../../server-actions';

export default async function ProductInfo({
  productId,
}: {
  productId: string;
}) {
  const info = await getProductInfo(productId);

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
