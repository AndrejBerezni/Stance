import { useId, useRef } from 'react';

import useFloatingElement, {
  FloatingElementAlign,
  FloatingElementPosition,
} from '@/hooks/useFloatingElement';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { cn } from '@/lib/utils/cn';
import handleKeyPress from '@/lib/utils/handle-key-press';

import Portal from '../portal';
import { dropdownVariants } from './styles';

interface DropdownMenuProps {
  items: React.ReactNode[];
  trigger: React.ReactNode;
  position?: FloatingElementPosition;
  align?: FloatingElementAlign;
  delay?: number;
}

export default function DropdownMenu({
  items,
  trigger,
  position = 'bottom',
  align = 'left',
  delay = 0,
}: DropdownMenuProps) {
  const id = useId();
  const menuRef = useRef<HTMLUListElement | null>(null);

  const { visible, targetRef, toggle, hideElement, elementStyles } =
    useFloatingElement({
      position,
      align,
      delay,
    });

  useOnClickOutside({
    refs: [targetRef, menuRef],
    handleClick: hideElement,
    visible,
  });

  return (
    <>
      <div
        ref={targetRef}
        role="button"
        aria-haspopup="menu"
        aria-expanded={visible}
        aria-controls={id}
        onClick={toggle}
        onKeyDown={(e) => handleKeyPress(e, toggle, 'Enter')}
        tabIndex={0}
      >
        {trigger}
      </div>
      {visible && (
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
      )}
    </>
  );
}
