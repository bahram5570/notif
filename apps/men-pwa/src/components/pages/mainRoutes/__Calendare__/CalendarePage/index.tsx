'use client';

import { CalendarDraggingPanel } from '@repo/core/components/CalendarDraggingPanel';
import { MainPageLayout } from '@repo/core/components/MainPageLayout';

import CalendarSkeleton from './CalendarSkeleton';
import useCalendar from './__hooks__/useCalendar';

const CalendarePage = () => {
  const { isLoading, calendarData, calendarGuideInfo, selectedDate, selectedDateHandler } = useCalendar();

  return (
    <MainPageLayout paddingTop={0} paddingBottom={0} leftElement1="Profile" className="bg-impo_Neutral_Background">
      <>
        <CalendarSkeleton />
        {!isLoading && calendarData && selectedDate && (
          <CalendarDraggingPanel calendarData={calendarData} selectedDate={selectedDate} />
        )}
      </>
    </MainPageLayout>
  );
};

export default CalendarePage;
