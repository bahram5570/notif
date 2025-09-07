import { useEffect, useState } from 'react';

const useActivationIsLargeScreen = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const el = document.documentElement;

    if (el) {
      const MAX_SCREEN_HEIGHT = 650;
      const isLarge = el.clientHeight > MAX_SCREEN_HEIGHT;
      setIsLargeScreen(isLarge);
    }
  }, []);

  return { isLargeScreen };
};

export default useActivationIsLargeScreen;
