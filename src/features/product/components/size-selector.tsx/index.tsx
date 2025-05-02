'use client';

import { useTranslations } from 'next-intl';

import SizeSelectorButton, { Size } from './size-selector-button';
import useChangeSearchParam from '../../../../hooks/useChangeSearchParam';

export default function SizeSelector({ sizes }: { sizes: Size[] }) {
  const translate = useTranslations('productPage');
  const { changeSearchParam: selectSize, currentValue: currentSize } =
    useChangeSearchParam('size');

  return (
    <div className="flex flex-col gap-4">
      <h2
        id="size-selector-heading"
        className="text-sm text-tertiary-foreground"
      >
        {translate('availableSizes')}
      </h2>

      <div
        className="flex gap-4 flex-wrap"
        role="radiogroup"
        aria-labelledby="size-selector-heading"
      >
        {sizes.map((size) => (
          <SizeSelectorButton
            key={size.name}
            size={size}
            handleSelect={() => selectSize(size.name.toString())}
            selected={currentSize === size.name}
          />
        ))}
      </div>
    </div>
  );
}
