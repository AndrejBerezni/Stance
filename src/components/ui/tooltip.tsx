import React, { useState, useRef, useEffect } from 'react';

import clsx from 'clsx';
import ReactDOM from 'react-dom';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: TooltipPosition;
  delay?: number;
}

interface Coordinates {
  top: number;
  left: number;
}

const calculateCoordinates = (
  rect: DOMRect,
  position: TooltipPosition
): Coordinates => {
  const { top, left, width, height } = rect;

  switch (position) {
    case 'top':
      return { top, left: left + width / 2 };
    case 'bottom':
      return { top: top + height, left: left + width / 2 };
    case 'left':
      return { top: top + height / 2, left };
    case 'right':
      return { top: top + height / 2, left: left + width };
    default:
      return { top: top + height, left: left + width / 2 };
  }
};

const getPositionClasses = (position: TooltipPosition): string => {
  return clsx({
    '-translate-x-1/2 -translate-y-[130%]': position === 'top',
    '-translate-x-1/2 translate-y-[30%]': position === 'bottom',
    '-translate-x-[110%] -translate-y-1/2': position === 'left',
    '-translate-y-1/2 translate-x-[10%]': position === 'right',
  });
};

const getArrowClasses = (position: TooltipPosition): string => {
  return clsx('absolute h-0 w-0', {
    'right-full translate-x-1/4 top-1/2 -translate-y-1/2 border-t-9 border-t-transparent border-r-9 border-r-foreground border-b-9 border-b-transparent':
      position === 'right',
    'left-full -translate-x-1/4 top-1/2 -translate-y-1/2 border-t-9 border-t-transparent border-l-9 border-l-foreground border-b-9 border-b-transparent':
      position === 'left',
    'left-1/2 -translate-x-1/2 translate-y-1/4 bottom-full border-l-9 border-l-transparent border-b-9 border-b-foreground border-r-9 border-r-transparent':
      position === 'bottom',
    'left-1/2 -translate-x-1/2 -translate-y-1/4 top-full border-l-9 border-l-transparent border-t-9 border-t-foreground border-r-9 border-r-transparent':
      position === 'top',
  });
};

const TooltipPortal: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return ReactDOM.createPortal(children, document.body);
};

export default function Tooltip({
  content,
  children,
  position = 'bottom',
  delay = 300,
}: TooltipProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const [coords, setCoords] = useState<Coordinates>({ top: 0, left: 0 });
  const targetRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const showTooltip = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Set a timeout to show the tooltip after the delay
    timeoutRef.current = setTimeout(() => {
      if (!targetRef.current) return;

      const rect = targetRef.current.getBoundingClientRect();
      const newCoordinates = calculateCoordinates(rect, position);

      setCoords(newCoordinates);
      setVisible(true);
      timeoutRef.current = null;
    }, delay);
  };

  const hideTooltip = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Set a timeout to hide the tooltip after the delay
    timeoutRef.current = setTimeout(() => {
      setVisible(false);
      timeoutRef.current = null;
    }, delay);
  };

  const tooltipStyles = {
    top: coords.top,
    left: coords.left,
  };

  return (
    <>
      <div
        ref={targetRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        className="max-w-fit max-h-fit hover:cursor-pointer"
      >
        {children}
      </div>

      {visible && (
        <TooltipPortal>
          <div
            style={tooltipStyles}
            className={`absolute z-50 whitespace-nowrap pointer-events-none bg-foreground text-background tracking-wide px-3 text-xs font-medium py-2 rounded-md ${getPositionClasses(position)}`}
          >
            {content}
            <div className={getArrowClasses(position)}></div>
          </div>
        </TooltipPortal>
      )}
    </>
  );
}
