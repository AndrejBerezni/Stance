// Invokes a function when key is pressed

import { useEffect } from 'react';

interface UseOnKeyDownProps {
  key: string;
  handleKeyDown: (event: KeyboardEvent) => void;
}

export default function useOnKeyDown({
  key,
  handleKeyDown,
}: UseOnKeyDownProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === key) {
        handleKeyDown(event);
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [handleKeyDown]);
}
