'use client';

import { useTranslations } from 'next-intl';

import AttributeSelector from '@/features/product/components/attribute-selector.tsx';
import ColorSelectButton, {
  Color,
} from '@/features/product/components/attribute-selector.tsx/color-select-button';
import SizeSelectButton, {
  Size,
} from '@/features/product/components/attribute-selector.tsx/size-select-button';

const sizes: Size[] = [
  { name: 'xs', inStock: true },
  { name: 's', inStock: true },
  { name: 'm', inStock: false },
  { name: 'l', inStock: true },
  { name: 'xl', inStock: false },
];

const shoeSizes: Size[] = [
  { name: 4, inStock: true },
  { name: 4.5, inStock: true },
  { name: 5, inStock: false },
  { name: 5.5, inStock: true },
  { name: 6, inStock: false },
];
const colors: Color[] = [
  { name: 'green', inStock: true },
  { name: 'beige', inStock: false },
  { name: 'yellow', inStock: false },
  { name: 'black', inStock: true },
  { name: 'white', inStock: true },
  { name: 'orange', inStock: true },
  { name: 'red', inStock: true },
  { name: 'blue', inStock: true },
  { name: 'pink', inStock: true },
  { name: 'brown', inStock: true },
];

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
          <SizeSelectButton
            size={size}
            selected={selected}
            handleSelect={handleSelect}
          />
        )}
      />
      <AttributeSelector
        attribute="size"
        heading={translate('availableSizes')}
        options={shoeSizes}
        getOptionValue={(size) => size.name.toString()}
        renderOption={(size, selected, handleSelect) => (
          <SizeSelectButton
            size={size}
            selected={selected}
            handleSelect={handleSelect}
          />
        )}
      />
      <AttributeSelector
        attribute="color"
        heading={translate('availableColors')}
        options={colors}
        getOptionValue={(color) => color.name.toString()}
        renderOption={(color, selected, handleSelect) => (
          <ColorSelectButton
            color={color}
            selected={selected}
            handleSelect={handleSelect}
          />
        )}
      />
    </section>
  );
}
