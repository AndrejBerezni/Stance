'use client';

import { Menu } from 'lucide-react';

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
      aria-label="Toggle sidebar"
    >
      <Menu size={32} />
    </NavbarButton>
  );
}
