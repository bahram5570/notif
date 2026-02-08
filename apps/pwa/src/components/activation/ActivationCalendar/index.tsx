'use client';

import { useCulture } from '@repo/core/hooks/useCulture';
import { Swiper, SwiperSlide } from 'swiper/react';

import ActivationCalendarHeading from './ActivationCalendarHeading';
import ActivationCalendarWeekTitles from './ActivationCalendarWeekTitles';
import ActivationMonthGenerator from './ActivationMonthGenerator';
import useActivationCalendarData from './__hooks__/useActivationCalendarData';
import useActivationCalendarSelectedDay from './__hooks__/useActivationCalendarSelectedDay';
import useActivationCalendarSlide from './__hooks__/useActivationCalendarSlide';
import { ActivationCalendarTypes } from './types';

const ActivationCalendar = ({ endDate, startDate, valueHandler, testId }: ActivationCalendarTypes) => {
  const { culture } = useCulture();

  const { swiperRef, currentSlide, currentSlideHandler } = useActivationCalendarSlide();
  const { calendarData } = useActivationCalendarData({ startDate, endDate, calendarType: culture.calendarType });
  const { selectedDay, selectedDayHandler } = useActivationCalendarSelectedDay({
    endDate,
    valueHandler,
    calendarType: culture.calendarType,
  });

  return (
    <div className="relative w-full">
      {calendarData.length > 0 && (
        <>
          <ActivationCalendarHeading
            selectedDay={selectedDay}
            calendarType={culture.calendarType}
            currentSlideHandler={currentSlideHandler}
            currentMonthInfo={calendarData[currentSlide][0]}
          />

          <ActivationCalendarWeekTitles />

          <Swiper
            initialSlide={0}
            onSwiper={(s) => (swiperRef.current = s)}
            onSlideChange={(s) => currentSlideHandler(s.activeIndex)}
          >
            {calendarData.map((monthList, index) => (
              <SwiperSlide key={index} data-testid={`activation_month_${index}`}>
                <ActivationMonthGenerator
                  monthList={monthList}
                  selectedDay={selectedDay}
                  selectedDayHandler={selectedDayHandler}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </div>
  );
};

export default ActivationCalendar;
