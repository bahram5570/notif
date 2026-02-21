import { useEffect, useState } from 'react';

import { IsAddToHomeTypes } from '../types';

const useSystem_IsAddToHome = () => {
  const [isAddToHome, setIsAddToHome] = useState<IsAddToHomeTypes>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const result = window.matchMedia('(display-mode: standalone)').matches;
      setIsAddToHome(result);
    }
  }, []);

  return isAddToHome;
};

export default useSystem_IsAddToHome;
