import { ButtonHTMLAttributes } from 'react';

import { cn } from '@/lib/utils/cn';

import buttonVariants from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'link'
    | 'link-gray'
    | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  iconOnly?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  size = 'md',
  variant = 'primary',
  iconOnly = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, size, iconOnly, className }))}
    >
      {children}
    </button>
  );
}
