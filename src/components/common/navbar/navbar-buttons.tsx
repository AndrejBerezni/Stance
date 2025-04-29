import clsx from 'clsx';

import CartButton from './cart-button';
import SidebarTrigger from '../sidebar/sidebar-trigger';

interface INavbarButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  smallScreenOnly?: boolean;
}

export function NavbarButton({
  children,
  smallScreenOnly = false,
  ...props
}: INavbarButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        'hover:cursor-pointer relative link-focus disabled:*:opacity-60',
        {
          'lg:hidden': smallScreenOnly,
        }
      )}
    >
      {children}
    </button>
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
