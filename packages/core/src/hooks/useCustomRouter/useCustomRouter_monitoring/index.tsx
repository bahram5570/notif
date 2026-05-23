import { useEffect, useRef } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';

import { useMonitoring } from '../../useMonitoring';
import { StartingPointTypes } from './types';

const useCustomRouter_monitoring = () => {
  const pathname = usePathname() || '';
  const { navigation } = useMonitoring();
  const startingPoint = useRef<StartingPointTypes | null>(null);
  const searchParams = typeof window === 'undefined' ? undefined : useSearchParams();

  const startingPointHandler = (v: StartingPointTypes) => {
    startingPoint.current = v;
  };

  useEffect(() => {
    const data = startingPoint.current;

    if (data) {
      navigation({
        to: data.to,
        from: data.from,
        date: new Date().toLocaleString(),
        duration: new Date().getTime() - data.start,
      });

      startingPoint.current = null;
    }
  }, [pathname, searchParams]);

  return startingPointHandler;
};

export default useCustomRouter_monitoring;
