import Badge from '@/components/ui/badge';

import { Product } from '../../types';

export default function ProductPrice({ product }: { product: Product }) {
  return (
    <>
      <p className="text-3xl font-medium mb-2">
        $76<span className="line-through text-lg text-muted ml-2">$95</span>
      </p>
      <Badge text="20% OFF" variant="warning" size="lg" />
    </>
  );
}
