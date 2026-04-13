import { CalendarDraggingPanel } from '@repo/core/components/CalendarDraggingPanel';
import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CalendarContainer } from '@repo/core/components/calendar/CalendarContainer';
import { CalendarGuides } from '@repo/core/components/calendar/CalendarGuides';

import { FOOTER_HEIGHT, HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import CalendarSkeleton from '../CalendarSkeleton';
// import SignsChangedToast from '../SignsChangedToast';
import useCalendar from '../__hooks__/useCalendar';

const CalendarPage = () => {
  const { isLoading, calendarData, calendarGuideInfo, selectedDate, selectedDateHandler } = useCalendar();

  return (
    <MainPageLayout leftElement1="Profile" paddingTop={0}>
      {/* <SignsChangedToast /> */}

      <div
        style={{ paddingBottom: FOOTER_HEIGHT + 16, paddingTop: HEADER_HEIGHT + 16 }}
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
