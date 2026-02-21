import { useEffect, useState } from 'react';

import { BrowserInfoTypes } from '../types';

const useSystem_BrowserInfo = () => {
  const [browserInfo, setBrowserInfo] = useState<BrowserInfoTypes>({ browser: 'Other', version: '' });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAgent = navigator.userAgent.toLowerCase();
      let result: BrowserInfoTypes = { browser: 'Other', version: '' };

      if (
        userAgent.includes('instagram') ||
        userAgent.includes('telegram') ||
        userAgent.includes('twitter') ||
        userAgent.includes('webview') ||
        userAgent.includes('fbav') ||
        userAgent.includes('wv')
      ) {
        result = { browser: 'WebView', version: '' };
      } else if (
        !userAgent.includes('samsungbrowser') &&
        !userAgent.includes('chrome') &&
        !userAgent.includes('crios') &&
        userAgent.includes('safari')
      ) {
        result = { browser: 'Safari', version: userAgent.match(/version\/([\d.]+)/)?.[1] || '' };
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
        result = { browser: 'Chrome', version: userAgent.match(/(?:chrome|crios)\/([\d.]+)/)?.[1] || '' };
      }

      setBrowserInfo(result);
    }
  }, []);

  return browserInfo;
};

export default useSystem_BrowserInfo;
