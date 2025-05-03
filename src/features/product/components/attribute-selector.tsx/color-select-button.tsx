import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

import Tooltip from '@/components/ui/tooltip';
import { cn } from '@/lib/utils/cn';

import { colorSelectVariants } from './styles';
import { ProductColor } from '../../types';

export interface Color {
  name: ProductColor;
  inStock: boolean;
}

interface ColorSelectButtonProps {
  color: Color;
  handleSelect: () => void;
  selected: boolean;
}

export default function ColorSelectButton({
  color,
  handleSelect,
  selected,
}: ColorSelectButtonProps) {
  const translate = useTranslations('colors');
  return (
    <div className="relative flex items-center justify-center h-[56px] w-[56px]">
      {/* Displaying tooltip with color name for color-blind users */}
      <Tooltip content={translate(color.name)}>
        <button
          onClick={handleSelect}
          role="radio"
          aria-label={`${color.name} color${!color.inStock ? ' (out of stock)' : ''}`}
          aria-checked={selected}
          className={cn(colorSelectVariants({ color: color.name, selected }))}
        >
          {selected && color.inStock && <Check size={26} />}
        </button>
      </Tooltip>

      {/* Diagonal line over the button if color is out of stock */}
      {!color.inStock && (
        <div className="absolute pointer-events-none top-1/2 -rotate-45 left-1 w-[48px] h-0.5 bg-secondary-foreground"></div>
      )}
    </div>
  );
}
