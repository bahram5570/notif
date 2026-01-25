import { Fragment, useEffect, useRef } from 'react';

import { FOOTER_HEIGTH } from '@components/WomenFooter/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperTypes } from 'swiper/types';

import SignsListsContainer from './SignsListsContainer';
import useSignsListInfo from './__hooks__/useSignsListInfo';
import { SignsListsPros } from './types';

const SignsLists = ({ infoList, slide, slideHandler }: SignsListsPros) => {
  const swiperRef = useRef<SwiperTypes | null>(null);

  useEffect(() => {
    swiperRef.current?.slideTo(slide);
  }, [slide, swiperRef.current]);

  return (
    <div style={{ paddingBottom: FOOTER_HEIGTH, paddingTop: '1em' }} className="text-impo_Surface_SurfaceVariant">
      <Swiper
        onSlideChange={(s) => slideHandler(s.activeIndex)}
        onSwiper={(s) => (swiperRef.current = s)}
        allowTouchMove={false}
      >
        {infoList.map((infoData, slideIndex) => {
          const { isVisibleSlideIndex, info, selectHandler } = useSignsListInfo({ infoData, slideIndex, slide });

          return (
            <SwiperSlide key={`infoList-${slideIndex}`}>
              {isVisibleSlideIndex ? <SignsListsContainer info={info} selectHandler={selectHandler} /> : <Fragment />}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SignsLists;
