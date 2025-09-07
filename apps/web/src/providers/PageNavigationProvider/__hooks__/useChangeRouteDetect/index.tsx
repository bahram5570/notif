'use client';

import { useEffect } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';

const useChangeRouteDetect = (onChange: (b: boolean) => void) => {
  if (typeof window === 'undefined') {
    return;
  }

  const path = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // # Disables loadings on changing of page or query param
    onChange(false);

    return () => {
      onChange(false);
    };
  }, [path, searchParams]);
};

export default useChangeRouteDetect;
