import { useEffect, useRef, useState } from 'react';

import ImpoIcon from '@assets/shared/icons/impoLogo.svg';
import CrossIcon from '@assets/shared/icons/plus.svg';

import { useCustomRouter } from '../../../../../../../hooks/useCustomRouter';
import { CustomTypography } from '../../../../../../ui/CustomTypography';
import { STORY_PROGRESS_HEIGHT } from '../../../constants';
import { ProgressBarsProps } from './types';

const ProgressBars = ({
  isCurrentStorySlide,
  currentSlideIndex,
  slideIndexHandler,
  viewStoryHandler,
  isLoading,
  stories,
}: ProgressBarsProps) => {
  const router = useCustomRouter();
  const timer = useRef<NodeJS.Timeout>();
  const [progressPercent, setProgressPercent] = useState(0);

  const currentSlide = stories[currentSlideIndex];
  const isCallable = !currentSlide.isViewed && progressPercent >= 50;

  useEffect(() => {
    if (!isLoading && isCurrentStorySlide) {
      timer.current = setInterval(() => {
        if (progressPercent < 100) {
          setProgressPercent(progressPercent + 1);
        } else {
          slideIndexHandler(true);
          setProgressPercent(0);
        }
      }, currentSlide.time / 100);
    } else {
      setProgressPercent(0);
    }

    return () => {
      clearInterval(timer.current);
    };
  }, [currentSlide.time, progressPercent, isLoading, isCurrentStorySlide]);

  useEffect(() => {
    if (isCallable) {
      const slideId = currentSlide.id;
      viewStoryHandler(slideId);
    }
  }, [isCallable, currentSlide.id]);

  return (
    <div className="flex flex-col justify-between px-4 pt-4 z-20" style={{ height: STORY_PROGRESS_HEIGHT }}>
      <div className="w-full flex items-center gap-2 pointer-events-none select-none">
        {stories.map((_, index) => {
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
              key={index}
              className="
                          relative 
                          w-full 
                          h-[2px] 
                          rounded-full 
                          overflow-hidden 
                          shadow-[0_4px_10px_#00000044] 
                          bg-impo_Surface_Outline 
                          dark:bg-impo_Surface_OutlineVariant
                        "
            >
              <div
                dir="rtl"
                style={{ transform: `translateX(${translateProgress}%)` }}
                className="w-full h-full rounded-full duration-300 bg-impo_White"
              />
            </div>
          );
        })}
      </div>

      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-4 pointer-events-none select-none">
          <ImpoIcon className="w-12 h-12" />

          <div>
            <CustomTypography
              className="text-impo_Surface_Outline dark:text-impo_Surface_OutlineVariant"
              fontSize="Body_Small"
            >
              بازبینی شده توسط
            </CustomTypography>

            <CustomTypography className="text-impo_Black" fontSize="Body_Medium">
              تیم تولید محتوای ایمپو
            </CustomTypography>
          </div>
        </div>

        <div className="w-12 h-12 flex items-center justify-center cursor-pointer" onClick={() => router.back()}>
          <CrossIcon className="w-8 h-auto rotate-45 stroke-impo_Surface_Outline" />
        </div>
      </div>
    </div>
  );
};

export default ProgressBars;
