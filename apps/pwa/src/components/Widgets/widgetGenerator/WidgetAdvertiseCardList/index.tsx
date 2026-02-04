import { CustomImage } from '@repo/core/components/ui/CustomImage';

import useAnalytics from '@hooks/useAnalytics';
import useWidgetActions from '@hooks/useWidgetActions';
import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { WidgetAdvertiseCardListProps } from './types';

const WidgetAdvertiseCardList = ({ data }: WidgetAdvertiseCardListProps) => {
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
      autoplay={{ delay: 10000 }}
      modules={[Pagination, Autoplay]}
      pagination={{ dynamicBullets: true }}
      style={{ direction: 'rtl', paddingBottom: '24px' }}
      className="px-4 pt-4"
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

export default WidgetAdvertiseCardList;
