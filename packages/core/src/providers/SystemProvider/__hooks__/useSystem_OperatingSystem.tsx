import { useEffect, useState } from 'react';

import { OperatingSystemTypes } from '../types';

const useSystem_OperatingSystem = () => {
  const [operatingSystem, setOperatingSystem] = useState<OperatingSystemTypes>('windows');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAgent = navigator.userAgent.toLowerCase();

      if (!/mobile/i.test(userAgent)) {
        setOperatingSystem('windows');
      }

      if (/iphone|ipad|ipod|mac os/i.test(userAgent)) {
        setOperatingSystem('ios');
      }

      if (/android/i.test(userAgent)) {
        setOperatingSystem('android');
      }
    }
  }, []);

  return operatingSystem;
};

export default useSystem_OperatingSystem;
