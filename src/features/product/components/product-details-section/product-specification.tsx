import Accordion from '@/components/ui/accordion';

import { getProductInfo } from '../../server-actions';

export default async function ProductSpecification({
  productId,
}: {
  productId: string;
}) {
  const specification = await getProductInfo(productId);

  if (specification) {
    const accordionItems = specification.map((spec) => ({
      id: `${productId}-${spec.title}`,
      title: spec.title,
      content: spec.description,
    }));

    return <Accordion items={accordionItems} />;
  }
}
