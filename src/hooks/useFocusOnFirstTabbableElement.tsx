import { RefObject, useEffect } from 'react';

import getTabbableElements from '@/lib/utils/get-tabbable-elements';

export default function useFocusOnFirstTabbableElement(
  elementRef: RefObject<HTMLElement | null>
) {
  useEffect(() => {
    const tabbableElements = getTabbableElements(elementRef);
    const firstElement = tabbableElements[0];
    if (firstElement instanceof HTMLElement) {
      firstElement.focus();
    }
  }, [elementRef]);
}
