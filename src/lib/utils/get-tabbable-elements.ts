import { RefObject } from 'react';

const getTabbableElements = (elementRef: RefObject<HTMLElement | null>) => {
  if (elementRef.current == null) {
    return [];
  }

  return elementRef.current.querySelectorAll(
    'button:not([disabled]), a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]):not([disabled])'
  );
};

export default getTabbableElements;
