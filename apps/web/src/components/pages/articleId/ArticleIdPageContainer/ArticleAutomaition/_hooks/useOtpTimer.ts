import { useEffect, useState } from 'react';

export function useOtpTimer(initial = 120) {
  const [timer, setTimer] = useState(initial);

  useEffect(() => {
    if (timer <= 0) return;
    const id = setInterval(() => setTimer((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(id);
  }, [timer]);

  const formatTimer = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const resetTimer = (seconds = initial) => setTimer(seconds);

  return { timer, formatTimer, resetTimer };
}
