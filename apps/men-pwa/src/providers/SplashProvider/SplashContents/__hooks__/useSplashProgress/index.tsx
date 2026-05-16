import { useEffect, useRef, useState } from 'react';

import { UseSplashProgressTypes } from './types';

const useSplashProgress = ({ splashStatushHandler, splashStatus }: UseSplashProgressTypes) => {
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout>();

  const progressHandler = () => {
    const EXTRA_LOADING_PERCENT = 20;

    if (progress >= 100 + EXTRA_LOADING_PERCENT) {
      splashStatushHandler('finish');
      clearInterval(timerRef.current);
      return;
    }

    if (splashStatus === 'pending' && progress >= 55) {
      return;
    }

    setProgress((state) => state + 1);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      progressHandler();
    }, 50);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [progress, splashStatus]);

  const progressPercent = progress < 100 ? progress : 100;

  return { progressPercent };
};

export default useSplashProgress;
