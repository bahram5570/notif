import { CustomTypography } from '../../../components/ui/CustomTypography';

import { useSystem } from '../../../hooks/useSystem';
import { useCalendarDayInfo } from '../../calendar/__hooks__/useCalendarDayInfo';
import { SelectedDayStatusPorps } from './types';

export const SelectedDayStatus = ({ selectedDateInfo, monthName, day }: SelectedDayStatusPorps) => {
  const { appName } = useSystem();

  const { dayTitle, dayTypeColor } = useCalendarDayInfo(selectedDateInfo);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-1  ">
      <CustomTypography fontSize="Title_Medium" className="text-impo_Neutral_OnBackground">
        {`${day} ${monthName}`}
      </CustomTypography>
      {appName === 'PWA' && (
        <CustomTypography fontSize="Body_Large" className={`${dayTypeColor}`}>
          {dayTitle}
        </CustomTypography>
      )}
    </div>
  );
};
