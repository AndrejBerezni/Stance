import { RefObject } from 'react';

import {
  FloatingElementAlign,
  FloatingElementPosition,
} from '@/hooks/useFloatingElement';
import useFocusOnFirstTabbableElement from '@/hooks/useFocusOnFirstTabbableElement';
import useFocusTrap from '@/hooks/useFocusTrap';
import useOnKeyDown from '@/hooks/useOnKeyDown';
import { cn } from '@/lib/utils/cn';
import handleKeyPress from '@/lib/utils/handle-key-press';

import Portal from '../portal';
import { dropdownVariants } from './styles';

interface DropdownMenuPortalProps {
  menuRef: RefObject<HTMLUListElement | null>;
  id: string;
  elementStyles: {
    top: number;
    left: number;
  };
  position?: FloatingElementPosition;
  align?: FloatingElementAlign;
  toggle: () => void;
  items: React.ReactNode[];
}

export default function DropdownMenuPortal({
  menuRef,
  id,
  elementStyles,
  position = 'bottom',
  align = 'left',
  toggle,
  items,
}: DropdownMenuPortalProps) {
  useFocusOnFirstTabbableElement(menuRef);
  useFocusTrap(menuRef);
  useOnKeyDown({ key: 'Escape', handleKeyDown: toggle });

  return (
    <Portal>
      <ul
        id={id}
        ref={menuRef}
        role="menu"
        style={elementStyles}
        className={cn(dropdownVariants({ position, align }))}
        onClick={toggle}
        onKeyDown={(e) => handleKeyPress(e, toggle, 'Enter')}
      >
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Portal>
  );
}
