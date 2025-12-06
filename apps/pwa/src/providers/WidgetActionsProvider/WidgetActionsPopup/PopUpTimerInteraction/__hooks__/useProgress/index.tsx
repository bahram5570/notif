import { useEffect, useState } from 'react';

import { UseProgressPropsType } from './type';

const useProgress = ({ second }: UseProgressPropsType) => {
  const [progress, setProgress] = useState(100);
  const [canStartTimer, setCanStartTimer] = useState(false);

  const startTimerHandler = () => {
    setCanStartTimer(true);
  };

  useEffect(() => {
    // if (!canStartTimer) return;
    const tickInterval = 30;
    const totalTicks = (second * 1000) / tickInterval;
    const decrement = 100 / totalTicks;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - decrement;
      });
    }, tickInterval);

    return () => clearInterval(interval);
  }, [second]);

  return { progress, canStartTimer, startTimerHandler };
};

export default useProgress;
