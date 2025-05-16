import { useEffect, useId, useRef } from 'react';

import useFloatingElement, {
  FloatingElementAlign,
  FloatingElementPosition,
} from '@/hooks/useFloatingElement';
import { cn } from '@/lib/utils/cn';

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        visible &&
        !targetRef.current?.contains(target) &&
        !menuRef.current?.contains(target)
      ) {
        hideElement();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [visible, hideElement, targetRef, menuRef]);

  return (
    <>
      <div
        ref={targetRef}
        aria-haspopup="menu"
        aria-expanded={visible}
        aria-controls={id}
        onClick={toggle}
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
