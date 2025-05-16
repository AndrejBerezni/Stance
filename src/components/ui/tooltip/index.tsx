import React from 'react';

import useFloatingElement, {
  FloatingElementPosition,
} from '@/hooks/useFloatingElement';
import { cn } from '@/lib/utils/cn';

import { arrowVariants, tooltipVariants } from './styles';
import Portal from '../portal';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: FloatingElementPosition;
  delay?: number;
}

export default function Tooltip({
  content,
  children,
  position = 'bottom',
  delay = 150,
}: TooltipProps) {
  const {
    visible,
    targetRef,
    showElement,
    hideElement,
    elementStyles: tooltipStyles,
  } = useFloatingElement({ position, delay });

  return (
    <>
      <div
        ref={targetRef}
        onMouseEnter={showElement}
        onMouseLeave={hideElement}
        className="max-h-fit max-w-fit hover:cursor-pointer"
      >
        {children}
      </div>

      {visible && (
        <Portal>
          <div
            id="tooltip"
            role="tooltip"
            style={tooltipStyles}
            className={cn(tooltipVariants({ position }))}
          >
            {content}
            <div className={cn(arrowVariants({ position }))}></div>
          </div>
        </Portal>
      )}
    </>
  );
}
