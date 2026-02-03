import { useEffect, useRef } from 'react';

import { colorFormatConverter } from '@repo/core/utils/scripts';

import { UseLottieWavesColorProps } from './types';

const useLottieWavesColor = ({ forgroundColor }: UseLottieWavesColorProps) => {
  const wavesRef = useRef<HTMLDivElement>(null);

  const waveColor = colorFormatConverter(forgroundColor || '#F24F7A');

  useEffect(() => {
    const el = wavesRef.current;

    if (el) {
      const pathElements = el.querySelectorAll('path');

      pathElements.forEach((item) => {
        item.style.fill = waveColor;
      });
    }
  }, [waveColor, wavesRef.current]);

  return { wavesRef };
};

export default useLottieWavesColor;
