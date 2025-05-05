'use client';
import { useTranslations } from 'next-intl';

import AttributeSelector from './attribute-selector';
import { InventoryItem } from '../../types';
import ColorSelectButton from './attribute-selector/color-select-button';
import SizeSelectButton from './attribute-selector/size-select-button';
import { getSizes, checkColorStock, checkSizeStock } from '../../utils';

interface ProductAttributesProps {
  sizing_convention: string | null;
  available_colors: string[];
  inventory: InventoryItem[];
  currentColor: string;
}

export default function ProductAttributes({
  sizing_convention,
  available_colors,
  inventory,
  currentColor,
}: ProductAttributesProps) {
  const translate = useTranslations('productPage');
  const sizes = getSizes(sizing_convention);
  return (
    <>
      <AttributeSelector
        attribute="color"
        heading={translate('availableColors')}
        options={available_colors.map((color) => ({
          name: color,
          inStock: checkColorStock(inventory, color),
        }))}
        getOptionValue={(color) => color.name.toString()}
        renderOption={(color, selected, handleSelect) => (
          <ColorSelectButton
            color={color}
            selected={selected}
            handleSelect={handleSelect}
          />
        )}
      />
      {sizes && (
        <AttributeSelector
          attribute="size"
          heading={translate('availableSizes')}
          options={sizes.map((size) => ({
            name: size,
            inStock: checkSizeStock(inventory, currentColor, size),
          }))}
          getOptionValue={(size) => size.name.toString()}
          renderOption={(size, selected, handleSelect) => (
            <SizeSelectButton
              size={size}
              selected={selected}
              handleSelect={handleSelect}
            />
          )}
        />
      )}
    </>
  );
}
