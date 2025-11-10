import { useEffect, useRef, useState } from 'react';

import waveJson from '@assets/lottie/cycleWave.json';
import { colorFormatConverter } from '@utils/scripts';

import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';
import { LottieJson } from '@lib/LottieJson';

import { CycleCardWaveProps } from './types';

const CycleCardWave = ({ color }: CycleCardWaveProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const { colors } = useTheme();

  useEffect(() => {
    const el = containerRef.current;

    if (el) {
      const pathElements = el.getElementsByTagName('path');
      const updatedColor = colorFormatConverter(color || colors.Pink_500);

      if (pathElements[0]) {
        pathElements[0].style.fill = updatedColor;
      }
      if (pathElements[1]) {
        pathElements[1].style.fill = updatedColor;
      }

      const containerRatio = el.clientWidth / el.clientHeight;

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
      <div className="min-w-[2500px] min-h-[2500px] w-[2500px] h-[2500px] rounded-full flex justify-center items-end overflow-hidden relative">
        <LottieJson animationData={waveJson} className="w-[100dvw]" style={{ maxWidth: MAX_SCREEN_WIDTH, transform }} />
      </div>
    </div>
  );
};

export default CycleCardWave;
