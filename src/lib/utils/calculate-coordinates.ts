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

  // Get the scroll position
  const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;

  // Calculate positions with scroll offsets
  switch (position) {
    case 'top':
      return {
        top: top + scrollY,
        left: left + width / 2 + scrollX,
      };
    case 'bottom':
      return {
        top: top + height + scrollY,
        left: left + width / 2 + scrollX,
      };
    case 'left':
      return {
        top: top + height / 2 + scrollY,
        left: left + scrollX,
      };
    case 'right':
      return {
        top: top + height / 2 + scrollY,
        left: left + width + scrollX,
      };
    default:
      return {
        top: top + height + scrollY,
        left: left + width / 2 + scrollX,
      };
  }
};

export default calculateCoordinates;
