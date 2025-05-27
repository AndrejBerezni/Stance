import { cva } from 'class-variance-authority';

const barVariants = cva('h-full rounded-full', {
  variants: {
    grade: {
      excellent: 'bg-green-700',
      good: 'bg-green-500',
      average: 'bg-yellow-300',
      belowAverage: 'bg-orange-300',
      poor: 'bg-red-600',
    },
  },
  defaultVariants: {
    grade: 'average',
  },
});

export default barVariants;
