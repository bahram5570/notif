import { useRef } from 'react';

import ArrowIcon from '@assets/icons/arrow2.svg';

import styles from './styles.module.css';

import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { ArrowGeneratorTypes, ValuesSmallScreenTypes } from './types';

const ValuesSmallScreen = ({ list }: ValuesSmallScreenTypes) => {
  const ref = useRef<SwiperRef>(null);

  const slidesHandler = (isNextSlide: boolean) => {
    const el = ref.current;

    if (el) {
      isNextSlide ? el.swiper.slideNext() : el.swiper.slidePrev();
    }
  };

  return (
    <div className="relative w-full h-[160px] overflow-hidden">
      <Swiper
        ref={ref}
        loop={true}
        autoplay={true}
        spaceBetween={12}
        pagination={true}
        slidesPerView={'auto'}
        modules={[Autoplay, Pagination]}
        className={`w-[calc(100%_+_24px)] pr-[24px] h-full ${styles.swiperContainer}`}
      >
        {list.map((item, index) => (
          <SwiperSlide className="!w-fit max-w-[300px]" key={index}>
            <div className="w-full flex items-start gap-2 p-4 rounded-lg !bg-impo_Surface_SurfaceVariant">
              <item.Icon className="w-12 h-auto" />

              <div>
                <CustomTypography fontSize="Title_Small" className="pb-1 !text-impo_Neutral_OnBackground">
                  {item.title}
                </CustomTypography>

                <CustomTypography fontSize="Body_Small" className="!text-impo_Neutral_OnBackground">
                  {item.description}
                </CustomTypography>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute left-4 right-4 bottom-[6px] flex justify-between z-10">
        <ArrowGenerator isNextSlide={false} slidesHandler={slidesHandler} />
        <ArrowGenerator isNextSlide={true} slidesHandler={slidesHandler} />
      </div>
    </div>
  );
};

export default ValuesSmallScreen;

const ArrowGenerator = ({ isNextSlide, slidesHandler }: ArrowGeneratorTypes) => {
  return (
    <div
      onClick={() => slidesHandler(isNextSlide)}
      className="w-8 h-8 flex items-center justify-center rounded-full !bg-impo_Neutral_Surface"
    >
      <ArrowIcon
        style={{ fill: COLORS_LIST.Surface_InverseSurface }}
        className={`w-3 h-auto  ${isNextSlide ? '-rotate-90' : 'rotate-90'}`}
      />
    </div>
  );
};
