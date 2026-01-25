import MainPageLayout from '@components/MainPageLayout';
import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';
import { FOOTER_HEIGTH } from '@components/WomenFooter/constants';

import CalendarContainer from '../CalendarContainer';
import CalendarDraggingPanel from '../CalendarDraggingPanel';
import CalendarGuides from '../CalendarGuides';
import CalendarSkeleton from '../CalendarSkeleton';
// import SignsChangedToast from '../SignsChangedToast';
import useCalendar from '../__hooks__/useCalendar';

const CalendarPage = () => {
  const { isLoading, calendarData, calendarGuideInfo, selectedDate, selectedDateHandler } = useCalendar();

  return (
    <MainPageLayout leftElement1="Profile" paddingTop={0}>
      {/* <SignsChangedToast /> */}

      <div
        style={{ paddingBottom: FOOTER_HEIGTH + 16, paddingTop: HEADER_HEIGHT + 16 }}
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
