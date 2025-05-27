'use client';
import { useRef } from 'react';

import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

import useOnClickOutside from '@/hooks/useOnClickOutside';

import ModalHeader from './modal-header';

export interface ModalImplementationProps {
  children: React.ReactNode;
  title?: string;
}

export default function ModalImplementation({
  children,
  title,
}: ModalImplementationProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const { back } = useRouter();

  useOnClickOutside({ refs: modalRef, handleClick: back });

  return createPortal(
    <div className="fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center bg-black/50 px-4 py-16">
      <div
        role="dialog"
        ref={modalRef}
        className="bg-background z-20 flex h-full w-full max-w-[1008px] flex-col rounded-md px-6 pb-6 xl:px-8 xl:pb-8"
      >
        <ModalHeader title={title} handleClose={back} />
        <div className="no-scrollbar relative overflow-scroll">{children}</div>
      </div>
    </div>,
    document.body
  );
}
