'use client';

import { CalendarDraggingPanel } from '@repo/core/components/CalendarDraggingPanel';
import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CalendarContainer } from '@repo/core/components/calendar/CalendarContainer';
import { CalendarGuides } from '@repo/core/components/calendar/CalendarGuides';

import { FOOTER_HEIGHT, HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import CalendarSkeleton from './CalendarSkeleton';
import useCalendar from './__hooks__/useCalendar';

const CalendarPage = () => {
  const { isLoading, calendarData, calendarGuideInfo, selectedDate, selectedDateHandler } = useCalendar();

  return (
    <MainPageLayout
      paddingTop={0}
      paddingBottom={0}
      leftElement1="Profile"
      className="bg-impo_Neutral_Background"
      rightElementScript="تقویم"
    >
      <div
        style={{ paddingBottom: FOOTER_HEIGHT + 16, paddingTop: 72 }}
        className="relative h-full min-h-[100dvh] max-h-[100dvh] overflow-hidden z-0"
      >
        {isLoading && <CalendarSkeleton />}

        {!isLoading && calendarData && selectedDate && (
          <>
            <CalendarContainer
              selectedDateHandler={selectedDateHandler}
              calendarData={calendarData}
              selectedDate={selectedDate}
              hasResetBtn
            />

            <CalendarGuides calendarGuideInfo={calendarGuideInfo} />
            <CalendarDraggingPanel calendarData={calendarData} selectedDate={selectedDate} />
          </>
        )}
      </div>
    </MainPageLayout>
  );
};

export default CalendarPage;
