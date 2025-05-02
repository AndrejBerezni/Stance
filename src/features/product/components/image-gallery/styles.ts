import { cva } from 'class-variance-authority';

export const thumbnailVariants = cva(
  'relative rounded-xl overflow-hidden h-auto min-w-[90px] group',
  {
    variants: {
      size: {
        lg: 'min-w-[calc((100%-16px)/2)] aspect-square sm:aspect-[5/4] lg:aspect-auto lg:h-[190px]',
        md: 'min-w-[calc((100%-32px)/3)] min-h-[120px] aspect-square sm:aspect-[5/4] lg:aspect-auto lg:h-[190px]',
        sm: 'max-[375px]:min-w-[80px] min-w-[calc((100%-48px)/3.5)] min-h-[120px] sm:h-[190px]',
      },
      selected: {
        true: 'border-[3px] border-primary',
        false: 'hover:cursor-pointer',
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  }
);
