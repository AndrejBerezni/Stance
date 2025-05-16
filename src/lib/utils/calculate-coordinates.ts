import {
  FloatingElementAlign,
  FloatingElementPosition,
} from '@/hooks/useFloatingElement';

export interface Coordinates {
  top: number;
  left: number;
}

const calculateCoordinates = (
  rect: DOMRect,
  position: FloatingElementPosition,
  align: FloatingElementAlign = 'center'
): Coordinates => {
  const { top, left, width, height } = rect;

  const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;

  let computedTop = 0;
  let computedLeft = 0;

  switch (position) {
    case 'top':
      computedTop = top + scrollY;
      break;
    case 'bottom':
      computedTop = top + height + scrollY;
      break;
    case 'left':
    case 'right':
      // vertical alignment
      if (align === 'top') {
        computedTop = top + scrollY;
      } else if (align === 'bottom') {
        computedTop = top + height + scrollY;
      } else {
        computedTop = top + height / 2 + scrollY;
      }
      break;
  }

  switch (position) {
    case 'left':
      computedLeft = left + scrollX;
      break;
    case 'right':
      computedLeft = left + width + scrollX;
      break;
    case 'top':
    case 'bottom':
    default:
      if (align === 'left') {
        computedLeft = left + scrollX;
      } else if (align === 'right') {
        computedLeft = left + width + scrollX;
      } else {
        computedLeft = left + width / 2 + scrollX;
      }
      break;
  }

  return {
    top: computedTop,
    left: computedLeft,
  };
};
export default calculateCoordinates;
