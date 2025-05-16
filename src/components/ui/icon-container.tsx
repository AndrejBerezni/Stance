import { cn } from '@/lib/utils/cn';

export default function IconContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      aria-hidden={true}
      className={cn(
        'text-primary flex aspect-square h-12 w-12 items-center justify-center rounded-full shadow-[0px_0px_4px_var(--ink-400)]',
        className
      )}
    >
      {children}
    </span>
  );
}
