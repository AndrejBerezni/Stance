import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

import Tooltip from '@/components/ui/tooltip';
import { cn } from '@/lib/utils/cn';

import { colorSelectVariants } from './styles';

export type AvailableColor =
  | 'white'
  | 'pink'
  | 'beige'
  | 'green'
  | 'black'
  | 'orange'
  | 'yellow'
  | 'brown'
  | 'red'
  | 'blue'
  | null
  | undefined;

export interface Color {
  name: string;
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
    <div
      className="relative flex h-[56px] w-[56px] items-center justify-center"
      data-testid={`${color.name}-select`}
    >
      {/* Displaying tooltip with color name for color-blind users */}
      <Tooltip content={translate(color.name)} position="bottom">
        <button
          type="button"
          onClick={handleSelect}
          role="radio"
          aria-label={`${color.name} color${!color.inStock ? ' (out of stock)' : ''}`}
          aria-checked={selected}
          className={cn(
            colorSelectVariants({
              color: color.name as AvailableColor,
              selected,
            })
          )}
          data-testid={`${color.name}-button`}
        >
          {selected && color.inStock && (
            <Check
              size={26}
              className={cn({
                'text-background':
                  color.name !== 'white' && color.name !== 'black',
                'text-ink-900 dark:text-background': color.name === 'white',
                'text-background dark:text-ink-900': color.name === 'black',
              })}
              data-testid="check-icon"
            />
          )}
        </button>
      </Tooltip>

      {/* Diagonal line over the button if color is out of stock */}
      {!color.inStock && (
        <div
          className="bg-ink-600 pointer-events-none absolute top-1/2 left-1 h-0.5 w-[48px] -rotate-45"
          data-testid="out-of-stock"
        ></div>
      )}
    </div>
  );
}
