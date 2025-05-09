import { cva } from 'class-variance-authority';

export const tooltipVariants = cva(
  'absolute z-50 whitespace-nowrap pointer-events-none bg-ink-900 text-background tracking-wide px-3 text-xs font-medium py-2 rounded-md',
  {
    variants: {
      position: {
        top: '-translate-x-1/2 -translate-y-[130%]',
        bottom: '-translate-x-1/2 translate-y-[30%]',
        left: '-translate-x-[110%] -translate-y-1/2',
        right: '-translate-y-1/2 translate-x-[10%]',
      },
    },
    defaultVariants: {
      position: 'bottom',
    },
  }
);

export const arrowVariants = cva('absolute h-0 w-0', {
  variants: {
    position: {
      top: 'left-1/2 -translate-x-1/2 -translate-y-1/4 top-full border-l-9 border-l-transparent border-t-9 border-t-ink-900 border-r-9 border-r-transparent',
      bottom:
        'left-1/2 -translate-x-1/2 translate-y-1/4 bottom-full border-l-9 border-l-transparent border-b-9 border-b-ink-900 border-r-9 border-r-transparent',
      left: 'left-full -translate-x-1/4 top-1/2 -translate-y-1/2 border-t-9 border-t-transparent border-l-9 border-l-ink-900 border-b-9 border-b-transparent',
      right:
        'right-full translate-x-1/4 top-1/2 -translate-y-1/2 border-t-9 border-t-transparent border-r-9 border-r-ink-900 border-b-9 border-b-transparent',
    },
  },
});
