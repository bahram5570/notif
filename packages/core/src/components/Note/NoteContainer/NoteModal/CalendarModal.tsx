import { useRouter } from 'next/navigation';

import { CalendarContainer } from '../../../calendar/CalendarContainer';
import { CustomButton } from '../../../ui/CustomButton';
import { CalendarSkeleton } from './CalendarSkeleton';
import { useCalendar } from './__hooks__/useCalendar';
import { CalendarModalPropsType } from './type';

const CalendarModal = ({ dateTime, onChangeHandler }: CalendarModalPropsType) => {
  const router = useRouter();
  const { isLoading, calendarData, selectedDate, selectedDateHandler } = useCalendar({ dateTime });

  const onCloseModalHandler = () => {
    router.back();
  };

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
            <CustomButton isLoading={isLoading} onClick={applyHandler} className="mt-auto">
              تایید
            </CustomButton>

            <CustomButton
              isLoading={isLoading}
              onClick={onCloseModalHandler}
              className="mt-auto !bg-impo_Neutral_Surface !border-impo_Neutral_Surface !text-impo_Neutral_OnSurface"
            >
              انصراف
            </CustomButton>
          </div>
        </>
      )}
    </div>
  );
};

export default CalendarModal;
