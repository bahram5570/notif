import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { useAnalytics } from '../../../../hooks/useAnalytics';
import WidgetHintCardGenerator from './WidgetHintCardGenerator';
import useWidgetHintCardBackground from './WidgetHintCardGenerator/__hooks__/useWidgetHintCardBackground';
import { WidgetHintCardV2Props } from './types';

export const WidgetHintCardV2 = ({ data, phase }: WidgetHintCardV2Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { backgroundClassNames } = useWidgetHintCardBackground({ phase });
  const { inViewRef } = useAnalytics({ inView_eventName: 'HintWidgetSeenMoreThan5Secs' });

  const hasTwoSlides = data.list.length === 2;

  return (
    <div ref={inViewRef} className="w-full py-4">
      <Swiper
        loop={false}
        slidesPerView={1}
        spaceBetween={hasTwoSlides ? 0 : 16}
        style={{ direction: 'rtl', padding: '0px 16px' }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
      >
        {data.list.map((item, index) => (
          <SwiperSlide key={index} className="h-auto">
            <div className={`w-full h-full ${hasTwoSlides ? (index === 0 ? 'pl-[2px]' : 'pr-[2px]') : ''}`}>
              <WidgetHintCardGenerator
                {...item}
                isSelected={currentSlide === index}
                background={
                  hasTwoSlides
                    ? index === 0
                      ? backgroundClassNames.card1
                      : backgroundClassNames.card2
                    : backgroundClassNames.card1
                }
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
