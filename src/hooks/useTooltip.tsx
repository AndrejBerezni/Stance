'use client';
import { useState, useRef, useEffect } from 'react';

import { TooltipPosition } from '@/components/ui/tooltip';
import calculateCoordinates, {
  Coordinates,
} from '@/lib/utils/ui/calculate-coordinates';

interface UseTooltipParams {
  position: TooltipPosition;
  delay: number;
}

export default function useTooltip({ position, delay }: UseTooltipParams) {
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

  return { visible, targetRef, showTooltip, hideTooltip, tooltipStyles };
}
