'use client';

import { useTranslations } from 'next-intl';

import AttributeSelector from '@/features/product/components/attribute-selector.tsx';
import SizeSelectorButton, {
  Size,
} from '@/features/product/components/attribute-selector.tsx/size-select-button';

const sizes: Size[] = [
  { name: 'xs', inStock: true },
  { name: 's', inStock: true },
  { name: 'm', inStock: false },
  { name: 'l', inStock: true },
  { name: 'xl', inStock: false },
];
// const colors = [
//   { name: 'green', inStock: true },
//   { name: 'beige', inStock: true },
// ];

export default function Home() {
  const translate = useTranslations('productPage');
  return (
    <section className="section-wrapper">
      <AttributeSelector
        attribute="size"
        heading={translate('availableSizes')}
        options={sizes}
        getOptionValue={(size) => size.name.toString()}
        renderOption={(size, selected, handleSelect) => (
          <SizeSelectorButton
            size={size}
            selected={selected}
            handleSelect={handleSelect}
          />
        )}
      />
    </section>
  );
}
