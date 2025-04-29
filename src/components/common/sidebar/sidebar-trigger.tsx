'use client';
import Image from 'next/image';

import { useSidebar } from '@/lib/providers/sidebar-provider';

import { NavbarButton } from '../navbar/navbar-buttons';

export default function SidebarTrigger() {
  const { isOpen, toggleSidebar } = useSidebar();
  return (
    <NavbarButton
      onClick={toggleSidebar}
      smallScreenOnly
      aria-expanded={isOpen}
      aria-controls="sidebar"
    >
      <Image
        src="/icons/menu.svg"
        alt="Button to open side menu"
        height={24}
        width={24}
      />
    </NavbarButton>
  );
}
