import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'hover:cursor-pointer rounded-md justify-center flex items-center font-medium tracking-wide link-focus disabled:text-muted disabled:bg-disabled disabled:shadow-none disabled:hover:cursor-default duration-150',
  {
    variants: {
      variant: {
        primary: 'bg-primary hover:bg-primary-hover text-background shadow-sm',
        secondary:
          'bg-background hover:bg-disabled border-[1px] border-disabled shadow-sm',
        tertiary:
          'bg-transparent hover:bg-disabled text-primary focus:bg-disabled',
        link: 'bg-transparent text-primary !p-0 hover:text-primary-hover',
        'link-gray':
          'bg-transparent !p-0 text-secondary-foreground hover:text-foreground',
        destructive:
          'bg-destructive shadow-md text-background hover:bg-destructive/80',
      },
      size: {
        sm: null, // We'll handle size in the compoundVariants
        md: null,
        lg: null,
        xl: null,
      },
      iconOnly: {
        true: 'aspect-square',
        false: '',
      },
    },
    compoundVariants: [
      {
        iconOnly: false,
        size: 'sm',
        className: 'text-sm px-3.5 py-2.5 gap-1',
      },
      {
        iconOnly: false,
        size: 'md',
        className: 'text-base px-4 py-2.5 gap-1.5',
      },
      {
        iconOnly: false,
        size: 'lg',
        className: 'text-base px-5 py-3 gap-1.5',
      },
      {
        iconOnly: false,
        size: 'xl',
        className: 'text-lg px-6 py-4 gap-2.5',
      },
      {
        iconOnly: true,
        size: 'sm',
        className: 'px-2.5 py-2.5',
      },
      {
        iconOnly: true,
        size: 'md',
        className: 'px-3 py-3',
      },
      {
        iconOnly: true,
        size: 'lg',
        className: 'px-3.5 py-3.5',
      },
      {
        iconOnly: true,
        size: 'xl',
        className: 'px-4 py-4',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      iconOnly: false,
    },
  }
);

export default buttonVariants;
