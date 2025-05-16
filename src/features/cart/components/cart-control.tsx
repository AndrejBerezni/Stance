import { Plus, Minus } from 'lucide-react';

import Button from '@/components/ui/button';

interface CartControlProps {
  max: number;
  amount?: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
  disabled?: boolean;
}

export default function CartControl({
  max,
  amount = 1,
  handleIncrement,
  handleDecrement,
  disabled = false,
}: CartControlProps) {
  return (
    <div
      role="group"
      aria-label="Quantity selector"
      className="bg-disabled border-border flex w-[125px] items-center rounded-lg border-[1px] px-1.5 py-2"
    >
      <Button
        variant="ghost"
        disabled={amount === 1}
        onClick={handleDecrement}
        aria-label="Decrease quantity"
      >
        <Minus size={20} />
      </Button>
      <span className="mx-auto flex w-[49px] items-center justify-center text-sm font-medium">
        {amount}
      </span>
      <Button
        variant="ghost"
        disabled={amount === max || disabled}
        onClick={handleIncrement}
        aria-label="Increase quantity"
      >
        <Plus size={20} />
      </Button>
    </div>
  );
}
