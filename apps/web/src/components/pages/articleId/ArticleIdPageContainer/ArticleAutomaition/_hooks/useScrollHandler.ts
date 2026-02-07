'use client';

import { useEffect, useRef, useState } from 'react';

export function useScrollHandler(threshold = 50) {
  const [reached, setReached] = useState(false);
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;

    const onScroll = () => {
      if (fired.current) return;

      const percent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (percent >= threshold) {
        fired.current = true;
        setReached(true);
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return reached;
}
