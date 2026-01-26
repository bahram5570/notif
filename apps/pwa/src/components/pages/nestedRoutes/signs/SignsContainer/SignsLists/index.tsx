import { Fragment, useEffect, useRef } from 'react';

import { FOOTER_HEIGTH } from '@components/MainFooter/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperTypes } from 'swiper/types';

import SignsListsContainer from './SignsListsContainer';
import useSignsListInfo from './__hooks__/useSignsListInfo';
import { SignsListsPros } from './types';

const SignsLists = ({ infoList, slide, slideHandler, updateSingSelectedList }: SignsListsPros) => {
  const swiperRef = useRef<SwiperTypes | null>(null);

  useEffect(() => {
    swiperRef.current?.slideTo(slide);
  }, [slide, swiperRef.current]);

  return (
    <div className="bg-impo_Neutral_Surface pt-4" style={{ paddingBottom: FOOTER_HEIGTH }}>
      <Swiper
        allowTouchMove={false}
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={(s) => slideHandler(s.activeIndex)}
      >
        {infoList.map((infoData, slideIndex) => {
          const { isVisibleSlideIndex, info, selectHandler } = useSignsListInfo({ infoData, slideIndex, slide });

          return (
            <SwiperSlide key={`infoList-${slideIndex}`}>
              {isVisibleSlideIndex ? (
                <SignsListsContainer
                  info={info}
                  selectHandler={selectHandler}
                  updateSingSelectedList={updateSingSelectedList}
                />
              ) : (
                <Fragment />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SignsLists;
