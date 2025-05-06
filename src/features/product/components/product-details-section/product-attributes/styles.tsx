import { cva } from 'class-variance-authority';

export const colorSelectVariants = cva(
  'rounded-full aspect-square w-[38px] h-[38px] flex justify-center items-center text-background hover:border-2 hover:border-primary/12 dark:hover:border-primary dark:focus:outline-primary/50 hover:cursor-pointer focus:outline-[9px] focus:outline-primary/12',
  {
    variants: {
      color: {
        white: 'bg-white ring-[1px] ring-foreground hover:ring-0',
        pink: 'bg-fuchsia-300',
        beige: 'bg-[#EDE8D0]',
        green: 'bg-green-700',
        black: 'bg-black dark:ring-[1px] dark:ring-foreground',
        orange: 'bg-orange-600',
        yellow: 'bg-yellow-500',
        brown: 'bg-amber-800',
        red: 'bg-red-500',
        blue: 'bg-sky-600',
      },
      selected: {
        true: 'border-2 border-background outline-[1px] outline-primary',
        false: null,
      },
    },
    defaultVariants: {
      color: 'white',
      selected: false,
    },
  }
);
