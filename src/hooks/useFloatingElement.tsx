'use client';
import { useState, useRef, useEffect } from 'react';

import calculateCoordinates, {
  Coordinates,
} from '@/lib/utils/calculate-coordinates';

export type FloatingElementPosition = 'top' | 'bottom' | 'left' | 'right';
export type FloatingElementAlign = FloatingElementPosition | 'center';

interface UseFloatingElementParams {
  position: FloatingElementPosition;
  align?: FloatingElementAlign;
  delay: number;
}

export default function useFloatingElement({
  position,
  align = 'center',
  delay,
}: UseFloatingElementParams) {
  const [visible, setVisible] = useState<boolean>(false);
  const [coords, setCoords] = useState<Coordinates>({ top: 0, left: 0 });
  const targetRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const showElement = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Set a timeout to show the element after the delay
    timeoutRef.current = setTimeout(() => {
      if (!targetRef.current) return;

      const rect = targetRef.current.getBoundingClientRect();
      const newCoordinates = calculateCoordinates(rect, position, align);

      setCoords(newCoordinates);
      setVisible(true);
      timeoutRef.current = null;
    }, delay);
  };

  const hideElement = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Set a timeout to hide the element after the delay
    timeoutRef.current = setTimeout(() => {
      setVisible(false);
      timeoutRef.current = null;
    }, delay);
  };

  const toggle = () => (visible ? hideElement() : showElement());

  const elementStyles = {
    top: coords.top,
    left: coords.left,
  };

  return {
    visible,
    targetRef,
    showElement,
    hideElement,
    toggle,
    elementStyles,
  };
}
