import { useEffect, useState } from 'react';

const useSystem_BreakPoint = () => {
  const [breakPoint, setBreakPoint] = useState({
    mobile: true,
    tablet: true,
    laptop: true,
    desktop: false,
    wide: false,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleWidth = () => {
        const width = window.innerWidth;
        const result = { mobile: false, tablet: false, laptop: false, desktop: false, wide: false };

        const isSm = width <= 640;
        const isMd = width <= 768;
        const isLg = width <= 1024;
        const isWide = width >= 1536;

        if (isSm) {
          result.mobile = true;
        }
        if (isMd) {
          result.tablet = true;
        }
        if (isLg) {
          result.laptop = true;
        }
        if (!isSm && !isMd && !isLg) {
          result.desktop = true;
        }
        if (isWide) {
          result.wide = true;
        }

        setBreakPoint(result);
      };

      handleWidth();
      window.addEventListener('resize', handleWidth);

      return () => {
        window.removeEventListener('resize', handleWidth);
      };
    }
  }, []);

  return breakPoint;
};

export default useSystem_BreakPoint;
