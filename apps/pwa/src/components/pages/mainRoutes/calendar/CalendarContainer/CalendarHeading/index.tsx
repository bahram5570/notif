import ArrowIcon from '@assets/icons/calendarArrow.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { CALENDAR_CELL_SIZE } from '@repo/core/constants/date.constants';

import { CalendarHeadingProps } from './types';

const CalendarHeading = ({ headingScript, navigateHandler }: CalendarHeadingProps) => {
  const width = (CALENDAR_CELL_SIZE + 16) * 7;

  return (
    <div className="flex justify-between pb-5 mx-auto" style={{ width }}>
      <ArrowIcon className="w-10 h-6 stroke-impo_Surface_Outline" onClick={() => navigateHandler(false)} />

      <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
        {headingScript}
      </CustomTypography>

      <ArrowIcon className="w-10 h-6 stroke-impo_Surface_Outline rotate-180" onClick={() => navigateHandler(true)} />
    </div>
  );
};

export default CalendarHeading;
