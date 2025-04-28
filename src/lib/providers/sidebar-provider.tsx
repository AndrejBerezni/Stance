'use client';

import { createContext, useState, use } from 'react';

const SidebarContext = createContext({
  isOpen: false,
  toggleSidebar: () => {},
  closeSidebar: () => {},
});

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  return (
    <SidebarContext value={{ isOpen, toggleSidebar, closeSidebar }}>
      {children}
    </SidebarContext>
  );
}

export const useSidebar = () => use(SidebarContext);
