import { ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';

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
  children: React.ReactNode;
}

export default function Button({
  size = 'md',
  variant = 'primary',
  iconOnly = false,
  children,
  ...props
}: ButtonProps) {
  const sizeClasses =
    !iconOnly &&
    clsx({
      'text-sm px-3.5 py-2.5 gap-1': size === 'sm',
      'text-base px-4 py-2.5 gap-1.5': size === 'md',
      'text-base px-5 py-3 gap-1.5': size === 'lg',
      'text-lg px-6 py-4 gap-2.5': size === 'xl',
    });

  const iconSizeClasses =
    iconOnly &&
    clsx('aspect-square', {
      'px-2.5 py-2.5': size === 'sm',
      'px-3 py-3': size === 'md',
      'px-3.5 py-3.5': size === 'lg',
      'px-4 py-4': size === 'xl',
    });

  const variantClasses = clsx({
    'bg-primary hover:bg-primary-hover text-background shadow-sm':
      variant === 'primary',
    'bg-background hover:bg-disabled border-[1px] border-disabled shadow-sm':
      variant === 'secondary',
    'bg-transparent hover:bg-disabled text-primary focus:bg-disabled':
      variant === 'tertiary',
    'bg-transparent text-primary !p-0 hover:text-primary-hover':
      variant === 'link',
    'bg-transparent !p-0 text-secondary-foreground hover:text-foreground':
      variant === 'link-gray',
    'bg-destructive shadow-md text-background hover:bg-destructive/80':
      variant === 'destructive',
  });

  return (
    <button
      {...props}
      className={clsx(
        `${props.className} hover:cursor-pointer rounded-md justify-center flex items-center font-medium tracking-wide link-focus disabled:text-muted disabled:bg-disabled disabled:shadow-none disabled:hover:cursor-default duration-150`,
        sizeClasses,
        iconSizeClasses,
        variantClasses
      )}
    >
      {children}
    </button>
  );
}
