'use client';

import { useEffect } from 'react';

import ErrorSection from '@/components/common/error-section';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    //To be implemented - reporting service
    console.error(error);
  }, [error]);

  return <ErrorSection reset={reset} />;
}
