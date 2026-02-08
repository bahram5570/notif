import { useCulture } from '@repo/core/hooks/useCulture';

import ActivationSingleDay from './ActivationSingleDay';
import EmptyCells from './EmptyCells';
import { ActivationMonthGeneratorProps } from './types';

const ActivationMonthGenerator = ({ monthList, selectedDay, selectedDayHandler }: ActivationMonthGeneratorProps) => {
  const { culture } = useCulture();

  return (
    <div className="w-fit grid grid-cols-7 justify-center gap-x-4 gap-y-3 mx-auto" style={{ direction: 'rtl' }}>
      <EmptyCells firstDayOfMonth={monthList[0]} />

      {monthList.map((day, index) => {
        const isSelected = selectedDay === day.gregorianDate;

        return (
          <ActivationSingleDay
            day={day}
            key={index}
            isSelected={isSelected}
            calendarType={culture.calendarType}
            selectedDayHandler={selectedDayHandler}
          />
        );
      })}
    </div>
  );
};

export default ActivationMonthGenerator;
