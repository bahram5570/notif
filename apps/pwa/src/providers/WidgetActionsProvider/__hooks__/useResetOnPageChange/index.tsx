import { useEffect, useRef } from 'react';

import { isDevelopeMode } from '@repo/core/utils/system';

import { usePathname } from 'next/navigation';

const useResetOnPageChange = (onReset: () => void) => {
  const pathname = usePathname() || '';
  const isFirstTime = useRef(isDevelopeMode());

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
    } else {
      onReset();
    }
  }, [pathname]);
};

export default useResetOnPageChange;
