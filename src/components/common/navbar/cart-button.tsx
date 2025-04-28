import Image from 'next/image';

import { NavbarButton } from './navbar-buttons';

// Temporary number for display until we implement cart logic
const TEMP_ITEMS = 8;

export default function CartButton() {
  // TO BE IMPLEMENTED: useCart hook that we will use on this button

  return (
    <NavbarButton>
      <Image src="/icons/cart.svg" alt="Cart button." width={24} height={24} />
    </NavbarButton>
  );
}
