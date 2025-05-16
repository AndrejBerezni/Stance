// TO DO: Consider making color-select-button reusable and used instead of this component in the future

import { Dispatch, SetStateAction } from 'react';

import { useTranslations } from 'next-intl';

import { cn } from '@/lib/utils/cn';

import { colorButtonVariants } from './styles';
import { AvailableColor } from '../product-details-section/product-attributes/color-select-button';

// TO DO: when we have backend and fetch data properly, we need to handle out of stock colors like we do on product page

interface ProductCardColorsProps {
  colors: string[];
  displayedColor: string;
  setDisplayedColor: Dispatch<SetStateAction<string>>;
}

export default function ProductCardColors({
  colors,
  displayedColor,
  setDisplayedColor,
}: ProductCardColorsProps) {
  const translate = useTranslations('colors');
  return (
    <div
      role="radiogroup"
      aria-label={translate('chooseColor')}
      className="flex max-w-full flex-wrap gap-1"
    >
      {colors.map((color) => (
        <button
          type="button"
          key={color}
          role="radio"
          aria-checked={displayedColor === color}
          aria-label={translate(color)}
          className="flex h-6 w-6 items-center justify-center"
          onClick={() => setDisplayedColor(color)}
          title={translate(color)}
        >
          <span
            className={cn(
              colorButtonVariants({
                color: color as AvailableColor,
              })
            )}
          ></span>
        </button>
      ))}
    </div>
  );
}
