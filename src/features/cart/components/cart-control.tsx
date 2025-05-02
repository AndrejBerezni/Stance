import { Plus, Minus } from 'lucide-react';

import Button from '@/components/ui/button';

interface CartControlProps {
  max: number;
  amount: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

export default function CartControl({
  max,
  amount,
  handleIncrement,
  handleDecrement,
}: CartControlProps) {
  return (
    <div
      role="group"
      aria-label="Quantity selector"
      className="rounded-lg bg-disabled border-[1px] border-border flex px-1.5 py-2 w-[125px] items-center"
    >
      <Button
        variant="ghost"
        disabled={amount === 1}
        onClick={handleDecrement}
        aria-label="Decrease quantity"
      >
        <Minus size={20} />
      </Button>
      <span className="text-sm font-medium mx-auto w-[49px] flex justify-center items-center">
        {amount}
      </span>
      <Button
        variant="ghost"
        disabled={amount === max}
        onClick={handleIncrement}
        aria-label="Increase quantity"
      >
        <Plus size={20} />
      </Button>
    </div>
  );
}
