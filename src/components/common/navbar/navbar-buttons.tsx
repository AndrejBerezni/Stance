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
    <li className="flex items-center justify-center">
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
    </li>
  );
}

export default function NavbarButtons() {
  return (
    <ul className="ml-auto flex items-center gap-4">
      <CartButton />
      <SidebarTrigger />
    </ul>
  );
}
