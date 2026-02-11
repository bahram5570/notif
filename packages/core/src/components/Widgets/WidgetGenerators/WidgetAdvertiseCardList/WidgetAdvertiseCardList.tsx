import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useAnalytics } from '../../../../hooks/useAnalytics';
import { useWidgetActions } from '../../../../hooks/useWidgetActions';
import { ActionTypes } from '../../../../providers/WidgetActionsProvider';
import { CustomImage } from '../../../ui/CustomImage';
import { WidgetAdvertiseCardListProps } from './types';

export const WidgetAdvertiseCardList = ({ data }: WidgetAdvertiseCardListProps) => {
  const { callEvent } = useAnalytics();
  const { actionHandler } = useWidgetActions();

  const clickHandler = (action: ActionTypes) => {
    callEvent('Action_From_Media');
    actionHandler(action);
  };

  return (
    <Swiper
      loop={true}
      initialSlide={0}
      spaceBetween={16}
      className="px-4 pt-4"
      autoplay={{ delay: 10000 }}
      modules={[Pagination, Autoplay]}
      pagination={{ dynamicBullets: true }}
      style={{ direction: 'rtl', paddingBottom: '24px' }}
    >
      {data.items.map((item, index) => (
        <SwiperSlide className="h-auto" key={index}>
          <div onClick={() => clickHandler(item.action)}>
            <CustomImage src={item.url} className="rounded-2xl pb-[2px]" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
