import { useEffect, useRef } from 'react';

// todo
import { LottieJson } from '../../../../lib/LottieJson';

// import dotsLoading from '@assets/lottie/dotsLoading.json';

const WidgetCycleCardDots = () => {
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = dotsRef.current;

    if (el) {
      const pathElements = el.querySelectorAll('path');

      pathElements.forEach((item) => {
        item.classList.add('dark:!fill-impo_Neutral_OnBackground');
      });
    }
  }, []);

  return (
    <div ref={dotsRef} className="w-14">
      {/* <LottieJson animationData={dotsLoading} className="w-full h-auto" /> */}
    </div>
  );
};

export default WidgetCycleCardDots;
