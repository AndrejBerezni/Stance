'use client';

import { useRef, useState } from 'react';

import { useTranslations } from 'next-intl';

import useFocusOnFirstTabbableElement from '@/hooks/useFocusOnFirstTabbableElement';
import useFocusTrap from '@/hooks/useFocusTrap';

import Button from '../ui/button';

export default function UnderConstruction() {
  const translate = useTranslations('underConstruction');
  const [show, setShow] = useState<boolean>(true);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useFocusOnFirstTabbableElement(panelRef);
  useFocusTrap(panelRef);

  if (show)
    return (
      <div
        ref={panelRef}
        className="fixed top-0 left-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-black/70"
      >
        <article className="section-wrapper flex flex-col gap-4 text-center text-white text-shadow-md">
          <p className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            {translate('line1')}
          </p>
          <p className="font-bold text-white/90 sm:text-lg lg:text-xl">
            {translate('line2')} {translate('line3')}
          </p>
        </article>
        <Button
          variant="primary"
          size="md"
          onClick={() => setShow(false)}
          aria-label={translate('visitLabel')}
          className="-mt-4 md:-mt-8 lg:-mt-16"
          data-testid="close-under-construction"
        >
          {translate('visit')}
        </Button>
      </div>
    );
}
