import { useRef, useState } from 'react';

import { Swiper as SwiperTypes } from 'swiper/types';

import { CurrentSlideHandlerTypes } from './types';

const useActivationCalendarSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef<SwiperTypes | null>(null);

  const currentSlideHandler: CurrentSlideHandlerTypes = (v) => {
    let slideIndex = 0;
    const totalSlides = swiperRef.current?.slides.length || 0;

    switch (v) {
      case 'nextSlide':
        slideIndex = currentSlide + 1;
        break;

      case 'previousSlide':
        slideIndex = currentSlide - 1;
        break;

      default:
        slideIndex = v;
        break;
    }

    if (slideIndex < totalSlides && slideIndex > -1) {
      setCurrentSlide(slideIndex);
      swiperRef.current?.slideTo(slideIndex);
    }
  };

  return { swiperRef, currentSlide, currentSlideHandler };
};

export default useActivationCalendarSlide;
