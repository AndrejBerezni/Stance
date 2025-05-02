import Button from '@/components/ui/button';
import { cn } from '@/lib/utils/cn';

import { ClothingSize, ShoeSize } from '../../types';

export interface Size {
  name: ClothingSize | ShoeSize;
  inStock: boolean;
}

interface SizeSelectorButtonProps {
  size: Size;
  handleSelect: () => void;
  selected: boolean;
}

export default function SizeSelectorButton({
  size,
  handleSelect,
  selected,
}: SizeSelectorButtonProps) {
  return (
    <Button
      variant="secondary"
      className={cn('w-16 h-12 uppercase focus:outline-none shadow-none', {
        'border-primary': selected,
        'border-border': !selected,
        'text-muted bg-disabled ': !size.inStock,
        'border-none': !size.inStock && !selected,
      })}
      onClick={handleSelect}
      role="radio"
      aria-label={`Size ${size.name}${!size.inStock ? ' (out of stock)' : ''}`}
      aria-checked={selected}
    >
      {size.name}
    </Button>
  );
}
