'use client';
import { useTranslations } from 'next-intl';

import AttributeSelector from '../attribute-selector';
import ColorSelectButton, {
  Color,
} from '../attribute-selector/color-select-button';
import SizeSelectButton, {
  Size,
} from '../attribute-selector/size-select-button';

const sizes: Size[] = [
  { name: 'xs', inStock: true },
  { name: 's', inStock: true },
  { name: 'm', inStock: false },
  { name: 'l', inStock: true },
  { name: 'xl', inStock: false },
];

const colors: Color[] = [
  { name: 'green', inStock: true },
  { name: 'beige', inStock: false },
  { name: 'yellow', inStock: false },
  { name: 'black', inStock: true },
  { name: 'white', inStock: true },
  { name: 'blue', inStock: true },
  { name: 'pink', inStock: false },
];

export default function ProductAttributes() {
  const translate = useTranslations('productPage');
  return (
    <>
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
    </>
  );
}
