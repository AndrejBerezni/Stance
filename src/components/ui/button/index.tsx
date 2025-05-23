import { ButtonHTMLAttributes } from 'react';

import { cn } from '@/lib/utils/cn';

import buttonVariants from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'link'
    | 'ghost'
    | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  iconOnly?: boolean;
  submit?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  size = 'md',
  variant = 'primary',
  iconOnly = false,
  submit = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={submit ? 'submit' : 'button'}
      className={cn(buttonVariants({ variant, size, iconOnly, className }))}
    >
      {children}
    </button>
  );
}
