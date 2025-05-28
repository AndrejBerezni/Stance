import { RefObject } from 'react';

import getTabbableElements from '@/lib/utils/get-tabbable-elements';

import useOnKeyDown from './useOnKeyDown';

export default function useFocusTrap(
  elementRef: RefObject<HTMLElement | null>
) {
  const trapFocus = (event: KeyboardEvent) => {
    if (elementRef.current === null) {
      return;
    }

    const tabbableElements = getTabbableElements(elementRef);
    const firstElement = tabbableElements[0];
    const lastElement = tabbableElements[tabbableElements.length - 1];

    // if active element is the first element, focus last element
    if (event.shiftKey) {
      if (
        document.activeElement === firstElement &&
        lastElement instanceof HTMLElement
      ) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      if (
        document.activeElement === lastElement &&
        firstElement instanceof HTMLElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  };

  useOnKeyDown({ key: 'Tab', handleKeyDown: trapFocus });
}
