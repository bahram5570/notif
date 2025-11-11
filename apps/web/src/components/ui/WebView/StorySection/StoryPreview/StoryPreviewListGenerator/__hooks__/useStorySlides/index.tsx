import { useEffect, useState } from 'react';

import { SlideIndexHandlerTypes, StoryEventsImageTypes, StoryEventsVideoTypes, UseStorySlidesProps } from './types';

const useStorySlides = ({ storyItems, navigateStoryHandler }: UseStorySlidesProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const initialIndex = 0;
    setCurrentSlideIndex(initialIndex);
  }, [storyItems]);

  const slideIndexHandler: SlideIndexHandlerTypes = (goToNextSlide) => {
    if (goToNextSlide) {
      if (currentSlideIndex >= storyItems.length - 1) {
        navigateStoryHandler(true);
      } else {
        setCurrentSlideIndex(currentSlideIndex + 1);
        setIsLoading(true);
      }
    } else {
      if (currentSlideIndex <= 0) {
        navigateStoryHandler(false);
      } else {
        setCurrentSlideIndex(currentSlideIndex - 1);
        setIsLoading(true);
      }
    }
  };

  let image = null as StoryEventsImageTypes;
  let video = null as StoryEventsVideoTypes;

  switch (storyItems[currentSlideIndex].type) {
    case 'Image':
      image = storyItems[currentSlideIndex].url.trim();
      break;
    case 'video':
      video = storyItems[currentSlideIndex].url.trim();
      break;
  }

  console.log(storyItems[currentSlideIndex]);

  const isLoadingHandler = () => {
    setIsLoading(false);
  };

  return { currentSlideIndex, slideIndexHandler, isLoading, isLoadingHandler, image, video };
};

export default useStorySlides;
