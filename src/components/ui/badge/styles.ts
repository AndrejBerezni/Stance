import { cva } from 'class-variance-authority';

const badgeVariants = cva('rounded-full border-[1px] whitespace-nowrap', {
  variants: {
    variant: {
      neutral: 'bg-gray-50 border-border text-neutral-600',
      error: 'bg-red-50 border-red-200 text-red-600',
      warning: 'bg-amber-50 border-amber-200 text-amber-700',
      success: 'bg-green-50 border-green-200 text-green-700',
      brand: 'bg-primary/5 border-primary/20 text-primary',
    },
    size: {
      sm: 'text-xs px-1.5 py-0.5',
      md: 'text-sm px-2 py-0.5',
      lg: 'text-sm px-2.5 py-1',
    },
  },
  defaultVariants: {
    variant: 'brand',
    size: 'md',
  },
});

export default badgeVariants;
