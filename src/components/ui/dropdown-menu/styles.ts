import { cva } from 'class-variance-authority';

export const dropdownVariants = cva(
  'absolute z-50 overflow-y-hidden flex flex-col gap-2 text-ink-600 text-sm bg-background whitespace-nowrap shadow-sm text-xs font-medium rounded-md',
  {
    variants: {
      position: {
        top: '-translate-y-[calc(100%_+_4px)]',
        bottom: 'translate-y-[4px]',
        left: '-translate-x-[calc(100%_+_4px)]',
        right: 'translate-x-[4px]',
      },
      align: {
        center: null,
        top: null,
        bottom: null,
        left: null,
        right: '-translate-x-full',
      },
    },
    compoundVariants: [
      {
        position: 'top',
        align: 'center',
        className: '-translate-x-1/2 -translate-y-[calc(100%_+_4px)]',
      },
      {
        position: 'bottom',
        align: 'center',
        className: '-translate-x-1/2 translate-y-[4px]',
      },
    ],
    defaultVariants: {
      position: 'bottom',
      align: 'left',
    },
  }
);
