import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ClinicWidgetGenerator from './ClinicWidgetGenerator';
import WidgetClinicCardV2Heading from './WidgetClinicCardV2Heading';
import { WidgetClinicCardV2Props } from './types';

export const WidgetClinicCardV2 = ({ data }: WidgetClinicCardV2Props) => {
  return (
    <div dir="rtl" className="w-full py-8">
      <WidgetClinicCardV2Heading title={data.title} description={data.description} cta={data.cta} />

      <Swiper slidesPerView={'auto'} freeMode={true} modules={[FreeMode]} spaceBetween={12} className="px-4">
        {data.items.map((item, index) => (
          <SwiperSlide className="w-[224px] h-auto" key={index}>
            <ClinicWidgetGenerator {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
