import { useState } from 'react';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useAnalytics } from '../../../../hooks/useAnalytics';
import WidgetHintCardGenerator from './WidgetHintCardGenerator';
import { WidgetHintCardV2Props } from './types';

export const WidgetHintCardV2 = ({ data }: WidgetHintCardV2Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { inViewRef } = useAnalytics({ inView_eventName: 'HintWidgetSeenMoreThan5Secs' });

  return (
    <div ref={inViewRef} className="w-full py-4">
      <Swiper
        loop={false}
        spaceBetween={0}
        slidesPerView={1}
        style={{ direction: 'rtl', padding: '0px 16px' }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
      >
        {data.list.slice(0, 2).map((item, index) => (
          <SwiperSlide key={index}>
            <div className={`w-full h-[150px] ${index === 0 ? 'pl-[6px]' : 'pr-[6px]'}`}>
              <div className="w-full h-full bg-yellow-400 rounded-2xl p-4">{index}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    // <div ref={inViewRef} className="px-4 pt-4">
    //   <Swiper
    //     loop={true}
    //     autoplay={{ delay: 10000 }}
    //     modules={[Pagination, Autoplay]}
    //     pagination={{ dynamicBullets: true }}
    //     style={{ direction: 'rtl', paddingBottom: '24px' }}
    //     onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
    //   >
    //     {data.list.map((item, index) => (
    //       <SwiperSlide className="h-auto" key={index}>
    //         <WidgetHintCardGenerator {...item} isSelected={currentSlide === index} />
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>
  );
};
