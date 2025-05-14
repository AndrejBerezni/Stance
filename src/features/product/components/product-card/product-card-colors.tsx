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
      className="flex gap-1 flex-wrap max-w-full"
    >
      {colors.map((color) => (
        <button
          key={color}
          role="radio"
          aria-checked={displayedColor === color}
          aria-label={translate(color)}
          className="w-6 h-6 flex items-center justify-center"
          onClick={() => setDisplayedColor(color)}
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
