import { useEffect, useState } from 'react';

import { isDevelopeMode } from '../../../../utils/system';

import { useSystem } from '../../../../hooks/useSystem';

const useAddToHomeScreen = () => {
  const [showAddToHome, setShowAddToHome] = useState(false);
  const { isAddToHome, operatingSystem, browserInfo } = useSystem();

  useEffect(() => {
    if (isDevelopeMode()) {
      setShowAddToHome(false);
      return;
    }

    if (operatingSystem === 'windows' || isAddToHome !== false || browserInfo.browser === 'WebView') {
      setShowAddToHome(false);
    } else {
      setShowAddToHome(true);
    }
  }, [isAddToHome, operatingSystem, browserInfo]);

  return { showAddToHome };
};

export default useAddToHomeScreen;
