import { cva } from 'class-variance-authority';

export const colorButtonVariants = cva(
  'rounded-full aspect-square w-4 h-4 hover:cursor-pointer',
  {
    variants: {
      color: {
        white: 'bg-white ring-[1px] ring-ink-900',
        pink: 'bg-fuchsia-300',
        beige: 'bg-[#EDE8D0]',
        green: 'bg-green-700',
        black: 'bg-black dark:ring-[1px] dark:ring-ink-900',
        orange: 'bg-orange-600',
        yellow: 'bg-yellow-500',
        brown: 'bg-amber-800',
        red: 'bg-red-500',
        blue: 'bg-sky-600',
      },
    },
    defaultVariants: {
      color: 'white',
    },
  }
);
