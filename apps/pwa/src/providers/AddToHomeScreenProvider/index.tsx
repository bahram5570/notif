'use client';

import { useEffect, useState } from 'react';

import { isDevelopeMode } from '@repo/core/utils/system';

import { useSystem } from '@repo/core/hooks/useSystem';

import AddToHomeScreenContents from './AddToHomeScreenContents';

const AddToHomeScreenProvider = ({ children }: { children: React.ReactNode }) => {
  const [showContent, setShowContent] = useState(false);

  const { isAddToHome, operatingSystem, browserInfo } = useSystem();

  useEffect(() => {
    if (isDevelopeMode()) {
      setShowContent(false);
      return;
    }

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
