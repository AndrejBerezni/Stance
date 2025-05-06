import Button from '@/components/ui/button';
import { cn } from '@/lib/utils/cn';

import CartButton from './cart-button';
import SidebarTrigger from '../sidebar/sidebar-trigger';

interface NavbarButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  smallScreenOnly?: boolean;
}

export function NavbarButton({
  children,
  smallScreenOnly = false,
  ...props
}: NavbarButtonProps) {
  return (
    <Button
      variant="ghost"
      {...props}
      className={cn('relative', {
        'lg:hidden': smallScreenOnly,
      })}
    >
      {children}
    </Button>
  );
}

export default function NavbarButtons() {
  return (
    <div className="ml-auto flex items-center gap-4">
      <CartButton />
      <SidebarTrigger />
    </div>
  );
}
