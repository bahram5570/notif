import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

import { useSplashPageObserverTypes } from './types';

const useSplashPageObserver = ({ splashStatushHandler }: useSplashPageObserverTypes) => {
  const pathname = usePathname() || '';

  useEffect(() => {
    const isCyclePage = pathname.includes('protected/cycle');

    if (!isCyclePage) {
      splashStatushHandler('completing');
    }
  }, [pathname]);
};

export default useSplashPageObserver;
