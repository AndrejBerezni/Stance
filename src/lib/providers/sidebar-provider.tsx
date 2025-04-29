'use client';

import { createContext, useState, use, useEffect, useCallback } from 'react';

const SidebarContext = createContext({
  isOpen: false,
  toggleSidebar: () => {},
  closeSidebar: () => {},
});

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeSidebar = useCallback(() => setIsOpen(false), []);

  const handleEscapeKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeSidebar();
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener('keydown', handleEscapeKeyDown);
    return () => {
      document.removeEventListener('keydown', handleEscapeKeyDown);
    };
  }, [isOpen]);

  return (
    <SidebarContext value={{ isOpen, toggleSidebar, closeSidebar }}>
      {children}
    </SidebarContext>
  );
}

export const useSidebar = () => use(SidebarContext);
