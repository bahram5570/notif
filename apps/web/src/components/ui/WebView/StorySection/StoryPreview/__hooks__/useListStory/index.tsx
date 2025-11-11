import { useEffect, useRef, useState } from 'react';

import { Swiper as SwiperTypes } from 'swiper/types';

import { NavigateStoryHandlerTypes, UseListStoryTypes } from './types';

const useListStory = (list: UseListStoryTypes) => {
  const swiperRef = useRef<SwiperTypes | null>(null);
  const [storyIndex, setCurrentStorySlide] = useState(-1);

  const storyIndexHandler = (s: number) => {
    setCurrentStorySlide(s);
  };

  const navigateStoryHandler: NavigateStoryHandlerTypes = (goToNextStory) => {
    if (goToNextStory) {
      if (storyIndex >= list.length - 1) {
        setCurrentStorySlide(-1);
      } else {
        setCurrentStorySlide(storyIndex + 1);
        swiperRef.current?.slideNext();
      }
    } else {
      if (storyIndex > 0) {
        setCurrentStorySlide(storyIndex - 1);
        swiperRef.current?.slidePrev();
      }
    }
  };

  useEffect(() => {
    setCurrentStorySlide(0);
  }, []);

  return { swiperRef, storyIndex, storyIndexHandler, navigateStoryHandler };
};

export default useListStory;
