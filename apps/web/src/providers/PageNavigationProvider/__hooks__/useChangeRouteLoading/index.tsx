'use client';

import { useEffect, useRef, useState } from 'react';

const useChangeRouteLoading = () => {
  if (typeof window === 'undefined') {
    return;
  }

  const timer = useRef<NodeJS.Timeout>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      timer.current = setTimeout(() => {
        setIsLoading(false);
      }, 10000);
    }

    return () => clearTimeout(timer.current);
  }, [isLoading]);

  const navigationHandler = (b: boolean) => {
    setIsLoading(b);
  };

  return { navigationHandler, isLoading };
};

export default useChangeRouteLoading;
