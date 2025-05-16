'use client';
import { useEffect, useState } from 'react';

export default function useIsDesktop(breakpoint = 1280): boolean {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const check = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    check();

    window.addEventListener('resize', check);

    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);

  return isDesktop;
}
