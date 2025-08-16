import { useEffect } from 'react';

import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

const DiscountLoading = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className="absolute inset-0 z-[100] flex items-center justify-center bg-black/25 backdrop-blur-sm min-h-[100dvh] mx-auto"
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
    >
      <div
        className="w-10 h-10 rounded-full animate-spin bg-[conic-gradient(#FFFFFF50,#F24F7A)]
          [mask:radial-gradient(farthest-side,transparent_calc(100%-3px),black_calc(100%-3px))]
          "
      />
    </div>
  );
};

export default DiscountLoading;
