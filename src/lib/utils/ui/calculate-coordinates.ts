import { TooltipPosition } from '@/components/ui/tooltip';

export interface Coordinates {
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

export default calculateCoordinates;
