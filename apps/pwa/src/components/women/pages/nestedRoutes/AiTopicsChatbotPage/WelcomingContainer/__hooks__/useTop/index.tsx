import { useEffect, useRef, useState } from 'react';

const useTop = () => {
  const lottieRef = useRef<HTMLDivElement | null>(null);
  const [top, setTop] = useState<number>(0);

  useEffect(() => {
    const updateTop = () => {
      if (!lottieRef.current) return;
      const rect = lottieRef.current.getBoundingClientRect();
      setTop(rect.height * 0.7);
    };

    updateTop();
    window.addEventListener('resize', updateTop);
    return () => window.removeEventListener('resize', updateTop);
  }, []);

  return { lottieRef, top };
};

export default useTop;
