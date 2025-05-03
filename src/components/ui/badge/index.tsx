import { cn } from '@/lib/utils/cn';

import badgeVariants from './styles';

type BadgeVariant = 'neutral' | 'error' | 'warning' | 'success' | 'brand';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  text: string;
  variant: BadgeVariant;
  size: BadgeSize;
}

export default function Badge({
  text,
  variant = 'brand',
  size = 'md',
}: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, size }))}>{text}</div>;
}
