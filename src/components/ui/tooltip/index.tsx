import React from 'react';

import ReactDOM from 'react-dom';

import useTooltip from '@/hooks/ui/useTooltip';
import { cn } from '@/lib/utils/cn';

import { arrowVariants, tooltipVariants } from './styles';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: TooltipPosition;
  delay?: number;
}

const TooltipPortal: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return ReactDOM.createPortal(children, document.body);
};

export default function Tooltip({
  content,
  children,
  position = 'bottom',
  delay = 150,
}: TooltipProps) {
  const { visible, targetRef, showTooltip, hideTooltip, tooltipStyles } =
    useTooltip({ position, delay });

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
            className={cn(tooltipVariants({ position }))}
          >
            {content}
            <div className={cn(arrowVariants({ position }))}></div>
          </div>
        </TooltipPortal>
      )}
    </>
  );
}
