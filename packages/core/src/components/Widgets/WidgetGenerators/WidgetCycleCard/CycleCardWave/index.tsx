import { useEffect, useRef, useState } from 'react';

import { colorFormatConverter } from '../../../../../utils/scripts';

// todo
// import waveJson from '@assets/shared/lottie/cycleWave.json';

import { LottieRefCurrentProps } from 'lottie-react';

import { MAX_SCREEN_WIDTH } from '../../../../../constants/app.constants';
import { LottieJson } from '../../../../../lib/LottieJson';
import { CycleCardWaveProps } from './types';

export const CycleCardWave = ({ color }: CycleCardWaveProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');

  useEffect(() => {
    const containerElement = containerRef.current;
    const lottieElement = lottieRef.current;

    if (containerElement && lottieElement) {
      lottieElement.setSpeed(0.3);

      const updatedColor = colorFormatConverter(color || '#F24F7A');
      const pathElements = containerElement.getElementsByTagName('path');

      if (pathElements[0]) {
        pathElements[0].style.fill = updatedColor;
      }
      if (pathElements[1]) {
        pathElements[1].style.fill = updatedColor;
      }

      const containerRatio = containerElement.clientWidth / containerElement.clientHeight;

      if (containerRatio >= 2) {
        setTransform('translate(25%, 125%) scale(2) rotate(25deg)');
      } else {
        setTransform('translate(20%, 90%) scale(2) rotate(25deg)');
      }
    }
  }, [color]);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-end overflow-hidden pointer-events-none"
    >
      <div className="min-w-[2500px] min-h-[2500px] w-[2500px] h-[2500px] rounded-full flex justify-center items-end overflow-hidden">
        {/* <LottieJson
          lottieRef={lottieRef}
          className="w-[100dvw]"
          animationData={waveJson}
          style={{ maxWidth: MAX_SCREEN_WIDTH, transform }}
        /> */}
      </div>
    </div>
  );
};
