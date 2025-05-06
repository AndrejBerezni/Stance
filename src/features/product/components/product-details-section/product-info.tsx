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
      content: section.description,
    }));

    return <Accordion items={accordionItems} />;
  }
}
