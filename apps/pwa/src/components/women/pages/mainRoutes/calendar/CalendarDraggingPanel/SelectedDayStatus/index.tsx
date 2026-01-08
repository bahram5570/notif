import Dark_Typography from '@components/ui/Dark_Typography';

import useCalendarDayInfo from '../../CalendarContainer/__hooks__/useCalendarDayInfo';
import { SelectedDayStatusPorps } from './types';

const SelectedDayStatus = ({ selectedDateInfo, monthName, day }: SelectedDayStatusPorps) => {
  const { dayTitle, dayTypeColor } = useCalendarDayInfo(selectedDateInfo);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-1">
      <Dark_Typography fontSize="Title_Medium" className="text-impo_Neutral_OnBackground">
        {`${day} ${monthName}`}
      </Dark_Typography>

      <Dark_Typography fontSize="Body_Large" className={`${dayTypeColor}`}>
        {dayTitle}
      </Dark_Typography>
    </div>
  );
};

export default SelectedDayStatus;
