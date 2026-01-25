import { useState } from 'react';

import useAnalytics from '@hooks/useAnalytics';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import WidgetHintCardGenerator from './WidgetHintCardGenerator';
import { WidgetHintCardV2Props } from './types';

const WidgetHintCardV2 = ({ data }: WidgetHintCardV2Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { inViewRef } = useAnalytics({ inView_eventName: 'HintWidgetSeenMoreThan5Secs' });

  return (
    <div ref={inViewRef} className="px-4 pt-4">
      <Swiper
        loop={true}
        autoplay={{ delay: 10000 }}
        modules={[Pagination, Autoplay]}
        pagination={{ dynamicBullets: true }}
        style={{ direction: 'rtl', paddingBottom: '24px' }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
      >
        {data.list.map((item, index) => (
          <SwiperSlide className="h-auto" key={index}>
            <WidgetHintCardGenerator {...item} isSelected={currentSlide === index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WidgetHintCardV2;
