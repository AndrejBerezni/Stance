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
        'text-primary h-12 w-12 flex items-center justify-center rounded-full aspect-square shadow-[0px_0px_4px_var(--ink-400)]',
        className
      )}
    >
      {children}
    </span>
  );
}
