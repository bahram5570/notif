'use client';

import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperTypes } from 'swiper/types';

import ActivationCalendarHeading from './ActivationCalendarHeading';
import ActivationCalendarWeekTitles from './ActivationCalendarWeekTitles';
import ActivationMonthGenerator from './ActivationMonthGenerator';
import useActivationCalendarData from './__hooks__/useActivationCalendarData';
import useActivationSelectedDay from './__hooks__/useActivationSelectedDay';
import { ActivationCalendarTypes } from './types';

const ActivationCalendar = ({ periodEnd, periodStart }: ActivationCalendarTypes) => {
  const { selectedDay, selectedDayHandler } = useActivationSelectedDay();
  const { calendarData } = useActivationCalendarData({ periodStart, periodEnd });

  const swiperRef = useRef<SwiperTypes | null>(null);

  return (
    <div className="relative w-full">
      {calendarData && (
        <>
          <ActivationCalendarHeading headingScript="ffff" />
          <ActivationCalendarWeekTitles />

          <Swiper
            // key={resetKey}
            initialSlide={0}
            onSwiper={(s) => (swiperRef.current = s)}
            // onSlideChange={(s) => slideHandler(s.activeIndex)}
          >
            {calendarData.map((monthList, index) => (
              <SwiperSlide key={index}>
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
