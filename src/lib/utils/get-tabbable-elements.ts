import { RefObject } from 'react';

const getTabbableElements = (elementRef: RefObject<HTMLElement | null>) => {
  if (elementRef.current == null) {
    return [];
  }

  return elementRef.current.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export default getTabbableElements;
