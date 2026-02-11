import { useEffect, useState } from 'react';

const useMoodTrackerIsLargeScreen = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const el = document.documentElement;

    if (el) {
      const MAX_SCREEN_HEIGHT = 700;
      const isLarge = el.clientHeight > MAX_SCREEN_HEIGHT;
      setIsLargeScreen(isLarge);
    }
  }, []);

  return { isLargeScreen };
};

export default useMoodTrackerIsLargeScreen;
