'use client';

import { useSidebar } from '@/lib/providers/sidebar-provider';
import { cn } from '@/lib/utils/cn';

import ModalOuter from '../modal/modal-outer';
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
          'z-20 fixed flex flex-col gap-6 top-0 right-0 ease-in transition-transform transform origin-right duration-500 w-screen max-w-[359px] h-screen bg-background p-4 pt-8',
          {
            'translate-x-0': isOpen,
            'translate-x-full pointer-events-none': !isOpen,
          }
        )}
      >
        <SidebarHeader />
        <NavigationLinks className="flex-col flex p-3 gap-8" />
      </aside>
      <ModalOuter closeModal={closeSidebar} show={isOpen} />
    </>
  );
}
