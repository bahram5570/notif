import { ReactElement, useEffect, useState } from 'react';

import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';
import { useCountDown } from '@repo/core/hooks/useCountDown';
import { useSignDateState } from '@repo/core/hooks/useSignDateState';
import { LottieCanvas } from '@repo/core/lib/LottieCanvas';

const SignsChangedToast = () => {
  const [showStatus, setShowStatus] = useState(false);
  const [el, setEl] = useState<ReactElement | null>(null);
  const { hasSignsChanged } = useSignDateState();

  const { startCounter: startShow } = useCountDown({
    time: 7,
    onCallBack: () => {
      setShowStatus(false);
    },
  });

  useEffect(() => {
    if (hasSignsChanged) {
      startShow();
      setShowStatus(true);

      setEl(
        <div
          className="fixed left-0 right-0 px-4 w-full mx-auto animate-signsChangedToast z-40"
          style={{ maxWidth: MAX_SCREEN_WIDTH }}
        >
          <LottieCanvas src={'/assets/lottie/hasSignsChanged.lottie'} autoplay={true} />
        </div>,
      );
    }
  }, []);

  return <>{showStatus !== null && el}</>;
};

export default SignsChangedToast;
