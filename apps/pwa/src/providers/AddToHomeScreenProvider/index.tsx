'use client';

import { useEffect, useState } from 'react';

import useOperatingSystem from '@hooks/useOperatingSystem';

import AddToHomeScreenContents from './AddToHomeScreenContents';

const AddToHomeScreenProvider = ({ children }: { children: React.ReactNode }) => {
  const [showContent, setShowContent] = useState(false);
  const { isAddToHome, operatingSystem, browserInfo } = useOperatingSystem();

  useEffect(() => {
    if (operatingSystem === 'windows' || isAddToHome !== false || browserInfo.browser === 'WebView') {
      setShowContent(false);
    } else {
      setShowContent(true);
    }
  }, [isAddToHome, operatingSystem, browserInfo]);

  if (showContent) {
    return <AddToHomeScreenContents browserInfo={browserInfo} operatingSystem={operatingSystem} />;
  }

  return <>{children}</>;
};

export default AddToHomeScreenProvider;
