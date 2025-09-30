'use client';

import { createContext, useEffect, useState } from 'react';

import { OperatingSystemContextTypes, OperatingSystemProviderTypes, OperatingSystemTypes } from './types';

export const OperatingSystemContext = createContext<OperatingSystemContextTypes>({
  operatingSystem: 'windows',
});

const OperatingSystemProvider = ({ children }: OperatingSystemProviderTypes) => {
  const [operatingSystem, setOperatingSystem] = useState<OperatingSystemTypes>('android');

  useEffect(() => {
    const agent = navigator.userAgent.toLowerCase();
    let os: OperatingSystemTypes = 'windows';

    if (/iphone|ipad|ipod|macintosh|mac os|mac os x/.test(agent)) {
      os = 'ios';
    } else if (/android/.test(agent)) {
      os = 'android';
    }

    setOperatingSystem(os);
  }, []);

  return (
    <OperatingSystemContext.Provider value={{ operatingSystem }}>
      <>{children}</>
    </OperatingSystemContext.Provider>
  );
};

export default OperatingSystemProvider;
