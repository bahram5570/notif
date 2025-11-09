import { useState } from 'react';

import styles from './styles.module.css';

import useAnalytics from '@hooks/useAnalytics';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import WidgetHintCardGenerator from './WidgetHintCardGenerator';
import { WidgetHintCardProps } from './types';

const WidgetHintCard = ({ data }: WidgetHintCardProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { inViewRef } = useAnalytics({ inView_eventName: 'HintWidgetSeenMoreThan5Secs' });

  return (
    <div className={styles.wrapper} ref={inViewRef}>
      <Swiper
        initialSlide={0}
        pagination={true}
        modules={[Pagination]}
        style={{ direction: 'rtl', paddingBottom: '24px' }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
      >
        {data.list.map((item, index) => (
          <SwiperSlide className="h-auto" key={index}>
            <WidgetHintCardGenerator
              {...item}
              isSelected={currentSlide === index}
              minReadingDuration={data.minReadingDuration}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WidgetHintCard;
