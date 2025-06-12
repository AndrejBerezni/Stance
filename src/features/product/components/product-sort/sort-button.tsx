import { cn } from '@/lib/utils/cn';

interface SortButtonProps {
  handleSort: () => void;
  label: string;
  selected: boolean;
}

export default function SortButton({
  handleSort,
  label,
  selected,
}: SortButtonProps) {
  return (
    <button
      type="button"
      role="menuitemradio"
      aria-checked={selected}
      onClick={handleSort}
      className={cn(
        'focus:bg-ink-50 hover:bg-ink-50 align-start w-full px-4 py-2 text-start hover:cursor-pointer focus:outline-0',
        {
          'text-primary': selected,
          'text-ink-600': !selected,
        }
      )}
    >
      {label}
    </button>
  );
}
