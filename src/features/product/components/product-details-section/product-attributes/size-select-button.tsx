import Button from '@/components/ui/button';
import { cn } from '@/lib/utils/cn';

const sizeDisplayMap: Record<string, string> = {
  sm: 's',
  md: 'm',
  lg: 'l',
};

export interface Size {
  name: string;
  inStock: boolean;
}

interface SizeSelectButtonProps {
  size: Size;
  handleSelect: () => void;
  selected: boolean;
}

export default function SizeSelectButton({
  size,
  handleSelect,
  selected,
}: SizeSelectButtonProps) {
  const displayName = sizeDisplayMap[size.name] ?? size.name; // s, m, and l have values sm, md, and lg in database, so here we are handling displaying wanted strings
  return (
    <Button
      variant="secondary"
      className={cn('h-12 w-16 uppercase shadow-none focus:outline-none', {
        'border-primary': selected,
        'border-border': !selected,
        'text-ink-400 bg-disabled': !size.inStock,
        'border-none': !size.inStock && !selected,
      })}
      onClick={handleSelect}
      role="radio"
      aria-label={`Size ${size.name}${!size.inStock ? ' (out of stock)' : ''}`}
      aria-checked={selected}
    >
      {displayName}
    </Button>
  );
}
