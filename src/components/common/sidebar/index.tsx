'use client';

import { useSidebar } from '@/lib/providers/sidebar-provider';
import { cn } from '@/lib/utils/cn';

import SidebarOuter from '../../ui/sidebar-outer';
import NavigationLinks from '../navigation-links';
import SidebarHeader from './sidebar-header';

export default function Sidebar() {
  const { isOpen, closeSidebar } = useSidebar();
  return (
    <>
      <aside
        id="sidebar"
        aria-hidden={!isOpen} //inert is not supported at all browsers at the moment of creation of this component, so we are adding aria-hidden as well
        inert={!isOpen}
        className={cn(
          'bg-background fixed top-0 right-0 z-20 flex h-screen w-screen max-w-[359px] origin-right transform flex-col gap-6 p-4 pt-8 transition-transform duration-500 ease-in',
          {
            'translate-x-0': isOpen,
            'pointer-events-none translate-x-full': !isOpen,
          }
        )}
      >
        <SidebarHeader />
        <NavigationLinks className="flex flex-col gap-8 p-3" />
      </aside>
      <SidebarOuter closeModal={closeSidebar} show={isOpen} />
    </>
  );
}
