import { useEffect, useState } from 'react';

import { useSystem } from '@repo/core/hooks/useSystem';

const useTabSizes = () => {
  const { breakPoint } = useSystem();
  const [tabSizes, setTabSizes] = useState({ totalDashArray: 374, rx: 22, height: 40, width: 170, isMobile: false });

  useEffect(() => {
    if (breakPoint.laptop) {
      setTabSizes({ totalDashArray: 374, rx: 22, height: 40, width: 170, isMobile: true });
    } else {
      setTabSizes({ totalDashArray: 374, rx: 22, height: 48, width: 163, isMobile: false });
    }
  }, [breakPoint]);

  return { tabSizes };
};

export default useTabSizes;
