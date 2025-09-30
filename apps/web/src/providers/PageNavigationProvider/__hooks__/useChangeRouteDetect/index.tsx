'use client';

import { useEffect } from 'react';

import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { usePathname } from 'next/navigation';

const useChangeRouteDetect = (onComplete: (b: boolean) => void) => {
  if (typeof window === 'undefined') {
    return;
  }

  const path = usePathname();
  const { searchParams } = useQueryParamsHandler();

  useEffect(() => {
    // # Disables loadings on changing of page or query param
    onComplete(false);

    return () => {
      onComplete(false);
    };
  }, [path, searchParams]);
};

export default useChangeRouteDetect;
