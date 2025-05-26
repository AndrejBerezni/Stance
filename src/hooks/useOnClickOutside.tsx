import { useEffect } from 'react';

interface UseOnClickOutsideProps {
  refs:
    | React.RefObject<HTMLElement | null>
    | React.RefObject<HTMLElement | null>[];
  handleClick: () => void;
  visible?: boolean;
}

export default function useOnClickOutside({
  refs,
  handleClick,
  visible = true,
}: UseOnClickOutsideProps) {
  const refList = Array.isArray(refs) ? refs : [refs];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedOutsideAll = refList.every(
        (ref) => ref.current && !ref.current.contains(target)
      );
      if (visible && clickedOutsideAll) {
        handleClick();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [visible, handleClick, refs]);
}
