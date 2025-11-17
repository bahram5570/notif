import { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperTypes } from 'swiper/types';

import WheelPickerCellGenerator from './WheelPickerCellGenerator';
import useWheelPickerListData from './__hooks__/useWheelPickerListData';
import useWheelPickerReady from './__hooks__/useWheelPickerReady';
import {
  WHEEL_PICKER_CELL_HEIGHT,
  WHEEL_PICKER_EXTRA_CELLS,
  WHEEL_PICKER_HANDLE_INITIAL_SLIDE_DELAY,
  WHEEL_PICKER_MIN_ITEMS,
  WHEEL_PICKER_TOTAL_CELLS,
} from './constants';
import { WheelPickerProps } from './types';

const WheelPicker = ({ list, defaultValue, valueHandler, testId, onInitialValuesSteps }: WheelPickerProps) => {
  const { wheelPickerListData, listIsUpdated } = useWheelPickerListData({ list, defaultValue });
  const swiperRef = useRef<SwiperTypes | null>(null);
  const isInitialSlideSet = useRef(false);
  const { ready } = useWheelPickerReady();
  const [slide, setSlide] = useState(0);

  const swiperRefHandler = (s: SwiperTypes) => {
    swiperRef.current = s;

    if (wheelPickerListData) {
      const lastListSlide = wheelPickerListData.updatedList.length - 1;
      s.slideTo(lastListSlide);
    }
  };

  const slideHandler = (s: number) => {
    setSlide(s);

    if (wheelPickerListData) {
      const selectedValue = wheelPickerListData.updatedList[s + WHEEL_PICKER_EXTRA_CELLS].value;
      valueHandler(selectedValue);
    }
  };

  useEffect(() => {
    // # Scroll to default value
    const el = swiperRef.current;
    const initialSlide = wheelPickerListData?.initialSlide;
    const timeoutDelay = WHEEL_PICKER_HANDLE_INITIAL_SLIDE_DELAY * 1000;

    if (el && initialSlide !== undefined && !isInitialSlideSet.current) {
      isInitialSlideSet.current = true;
      el.slideTo(initialSlide);

      setTimeout(() => {
        if (onInitialValuesSteps) {
          onInitialValuesSteps();
        }
      }, timeoutDelay);
    }
  }, [wheelPickerListData?.initialSlide, swiperRef.current]);

  useEffect(() => {
    // # Select active index by changing the list
    const el = swiperRef.current;

    if (el) {
      slideHandler(el.activeIndex);
    }
  }, [listIsUpdated]);

  const isSingleItem = wheelPickerListData ? wheelPickerListData.updatedList.length <= WHEEL_PICKER_MIN_ITEMS : false;

  return (
    <div
      className="w-full"
      key={isSingleItem ? 'k1' : 'k2'}
      style={{ height: WHEEL_PICKER_CELL_HEIGHT * WHEEL_PICKER_TOTAL_CELLS }}
    >
      {wheelPickerListData && ready && (
        <Swiper
          loop={isSingleItem}
          data-testid={testId}
          direction={'vertical'}
          watchSlidesProgress={true}
          onSwiper={swiperRefHandler}
          slidesPerView={WHEEL_PICKER_TOTAL_CELLS}
          onSlideChange={(s) => slideHandler(s.activeIndex)}
          style={{ height: WHEEL_PICKER_CELL_HEIGHT * WHEEL_PICKER_TOTAL_CELLS }}
        >
          {wheelPickerListData.updatedList.map((item, index) => {
            const currentIndex = index - WHEEL_PICKER_EXTRA_CELLS;

            const isSelectedItem = slide === currentIndex;
            const isBeforeOrAfterSelectedItem = slide === currentIndex - 1 || slide === currentIndex + 1;

            return (
              <SwiperSlide
                key={index}
                style={{ height: WHEEL_PICKER_CELL_HEIGHT }}
                className="flex items-center justify-center select-none"
              >
                <WheelPickerCellGenerator
                  title={item.title}
                  isSelectedItem={isSelectedItem}
                  resetKey={wheelPickerListData.updatedList.length}
                  isBeforeOrAfterSelectedItem={isBeforeOrAfterSelectedItem}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default WheelPicker;
