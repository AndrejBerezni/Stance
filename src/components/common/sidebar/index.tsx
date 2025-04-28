'use client';
import clsx from 'clsx';

import { useSidebar } from '@/lib/providers/sidebar-provider';

import ModalOuter from '../modal/modal-outer';
import NavigationLinks from '../navigation-links';
import SidebarHeader from './sidebar-header';

export default function Sidebar() {
  const { isOpen, closeSidebar } = useSidebar();
  return (
    <>
      <nav
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={clsx(
          'z-20 fixed flex flex-col gap-6 top-0 right-0 ease-in transition-transform transform origin-right duration-500 w-screen max-w-[359px] h-screen bg-background p-4 pt-8',
          {
            'translate-x-0': isOpen,
            'translate-x-full pointer-events-none': !isOpen,
          }
        )}
      >
        <SidebarHeader />
        <NavigationLinks className="flex-col flex p-3 gap-8" />
      </nav>
      <ModalOuter closeModal={closeSidebar} show={isOpen} />
    </>
  );
}
