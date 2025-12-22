import { useEffect, useRef, useState } from 'react';

import CrossIcon from '@assets/icons/plus.svg';

import { STORY_PROGRESS_HEIGHT } from '../../../constants';
import { ProgressBarsProps } from './types';

const ProgressBars = ({
  isCurrentStorySlide,
  currentSlideIndex,
  slideIndexHandler,
  isLoading,
  stories,
  isOpenHandler,
}: ProgressBarsProps) => {
  const timer = useRef<NodeJS.Timeout>();
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    if (!isLoading && isCurrentStorySlide) {
      timer.current = setInterval(() => {
        if (progressPercent < 100) {
          setProgressPercent(progressPercent + 1);
        } else {
          slideIndexHandler(true);
          setProgressPercent(0);
        }
      }, 200);
    } else {
      setProgressPercent(0);
    }

    return () => {
      clearInterval(timer.current);
    };
  }, [progressPercent, isLoading, isCurrentStorySlide]);

  return (
    <div className="flex flex-col justify-between px-4 pt-4 z-20 relative" style={{ height: STORY_PROGRESS_HEIGHT }}>
      <div className="w-full flex items-center gap-2 pointer-events-none select-none pt-4">
        {stories.map((_: unknown, index: number) => {
          let translateProgress = 0;

          if (currentSlideIndex < index) {
            translateProgress = 100;
          } else if (currentSlideIndex > index) {
            translateProgress = 0;
          } else {
            translateProgress = 100 - progressPercent;
          }

          return (
            <div
              className="relative w-full h-1 rounded-full overflow-hidden shadow-[0_4px_10px_#00000044]  bg-impo_Surface_OutlineVariant"
              key={index}
            >
              <div
                dir="rtl"
                className="w-full h-full rounded-full duration-300 bg-impo_White"
                style={{ transform: `translateX(${translateProgress}%)` }}
              />
            </div>
          );
        })}
      </div>

      <div className="w-full flex items-center justify-end">
        <div className="w-12 h-12 flex items-center justify-center cursor-pointer" onClick={() => isOpenHandler(false)}>
          <CrossIcon className="w-6 h-auto rotate-45 bg-impo_Surface_OutlineVariant" />
        </div>
      </div>
    </div>
  );
};

export default ProgressBars;
