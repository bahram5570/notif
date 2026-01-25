import CalendarContainer from '@components/pages/mainRoutes/calendar/CalendarContainer';
import Dark_Button from '@components/ui/Dark_Button';

import CalendarSkeleton from './CalendarSkeleton';
import useCalendar from './__hooks__/useCalendar';
import { CalendarModalPropsType } from './type';

const CalendarModal = ({ dateTime, onChangeHandler, onCloseModalHandler }: CalendarModalPropsType) => {
  const { isLoading, calendarData, selectedDate, selectedDateHandler } = useCalendar({ dateTime });

  const applyHandler = () => {
    onChangeHandler(selectedDate, 'time');
    onCloseModalHandler();
  };

  return (
    <div>
      {isLoading && <CalendarSkeleton />}

      {!isLoading && calendarData && (
        <>
          <CalendarContainer
            selectedDateHandler={selectedDateHandler}
            calendarData={calendarData}
            selectedDate={selectedDate}
            hasResetBtn={false}
          />

          <div className="flex px-3 gap-2">
            <Dark_Button isLoading={isLoading} onClick={applyHandler} className="mt-auto">
              تایید
            </Dark_Button>

            <Dark_Button
              isLoading={isLoading}
              onClick={onCloseModalHandler}
              className="mt-auto !bg-impo_Neutral_Surface !border-impo_Neutral_Surface !text-impo_Neutral_OnSurface"
            >
              انصراف
            </Dark_Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CalendarModal;
