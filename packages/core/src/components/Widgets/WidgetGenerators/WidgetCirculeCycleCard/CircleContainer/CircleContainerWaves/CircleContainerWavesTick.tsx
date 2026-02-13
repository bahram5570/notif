import { useEffect, useRef } from 'react';

import circularCycleLoadingTick from '@assets/shared/lottie/circularCycleLoadingTick.json';

import { LottieJson } from '../../../../../../lib/LottieJson';

const CircleContainerWavesTick = () => {
  const tickRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = tickRef.current;

    if (el) {
      const pathElements = el.querySelectorAll('path');

      pathElements.forEach((item) => {
        item.classList.add('dark:!stroke-impo_Neutral_OnBackground');
      });
    }
  }, []);

  return (
    <div ref={tickRef} className="w-12 h-12">
      <LottieJson animationData={circularCycleLoadingTick} loop={false} className="w-full h-auto" />
    </div>
  );
};

export default CircleContainerWavesTick;
