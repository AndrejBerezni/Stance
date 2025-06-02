import { cn } from '@/lib/utils/cn';

export default function Separator({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('bg-border h-[1px] w-full', className)} {...props} />
  );
}
