import { useEffect, useRef } from 'react';

import { INFINITE_LIST_DELAY_LOADING } from '../../constants';

const useLockRenderingRef = (isLoading: boolean | undefined) => {
  const lockRenderingRef = useRef(false);

  useEffect(() => {
    if (!isLoading && lockRenderingRef.current) {
      const timer = setTimeout(() => {
        lockRenderingRef.current = false;
      }, INFINITE_LIST_DELAY_LOADING);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return lockRenderingRef;
};

export default useLockRenderingRef;
