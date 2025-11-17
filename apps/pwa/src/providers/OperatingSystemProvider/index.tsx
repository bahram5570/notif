'use client';

import { createContext, useEffect, useState } from 'react';

import { BrowserInfoTypes, IsAddToHomeTypes, OperatingSystemContextTypes, OperatingSystemTypes } from './types';

const initialValues: OperatingSystemContextTypes = {
  browserInfo: { browser: 'Other', version: '' },
  operatingSystem: 'windows',
  isAddToHome: null,
};

export const OperatingSystemContext = createContext<OperatingSystemContextTypes>(initialValues);

const OperatingSystemProvider = ({ children }: { children: React.ReactNode }) => {
  const [operatingSystem, setOperatingSystem] = useState<OperatingSystemTypes>(initialValues.operatingSystem);
  const [isAddToHome, setIsAddToHome] = useState<IsAddToHomeTypes>(initialValues.isAddToHome);
  const [browserInfo, setBrowserInfo] = useState<BrowserInfoTypes>(initialValues.browserInfo);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAgent = navigator.userAgent.toLowerCase();

      // # Operating system
      if (!/mobile/i.test(userAgent)) {
        setOperatingSystem('windows');
      } else if (/iphone|ipad|ipod|mac os/i.test(userAgent)) {
        setOperatingSystem('ios');
      } else if (/android/i.test(userAgent)) {
        setOperatingSystem('android');
      } else {
        setOperatingSystem('windows');
      }

      // # is on 'add to home screen' mode
      setIsAddToHome(window.matchMedia('(display-mode: standalone)').matches);

      // # browser info
      if (
        userAgent.includes('instagram') ||
        userAgent.includes('telegram') ||
        userAgent.includes('twitter') ||
        userAgent.includes('webview') ||
        userAgent.includes('fbav') ||
        userAgent.includes('wv')
      ) {
        setBrowserInfo({ browser: 'WebView', version: '' });
      } else if (
        !userAgent.includes('samsungbrowser') &&
        !userAgent.includes('chrome') &&
        !userAgent.includes('crios') &&
        userAgent.includes('safari')
      ) {
        setBrowserInfo({ browser: 'Safari', version: userAgent.match(/version\/([\d.]+)/)?.[1] || '' });
      } else if (
        (userAgent.includes('chrome') || userAgent.includes('crios')) &&
        !userAgent.includes('samsungbrowser') &&
        !userAgent.includes('hwbrowser') &&
        !userAgent.includes('vivaldi') &&
        !userAgent.includes('huawei') &&
        !userAgent.includes('brave') &&
        !userAgent.includes('miui') &&
        !userAgent.includes('edg') &&
        !userAgent.includes('opr')
      ) {
        setBrowserInfo({ browser: 'Chrome', version: userAgent.match(/(?:chrome|crios)\/([\d.]+)/)?.[1] || '' });
      }
    }
  }, []);

  return (
    <OperatingSystemContext.Provider value={{ operatingSystem, isAddToHome, browserInfo }}>
      <>{children}</>
    </OperatingSystemContext.Provider>
  );
};

export default OperatingSystemProvider;
