import { memo } from 'react';

import GiveBirthIcon from '../../../../../../../assets/src/shared/icons/calendarGiveBirth.svg';

import { CALENDAR_CELL_SIZE, DATE_SEPERATOR_REGEX } from '../../../../../constants/date.constants';
import { CustomImage } from '../../../../ui/CustomImage';
import { CustomTypography } from '../../../../ui/CustomTypography';
import { useCalendarDayInfo } from '../../../__hooks__/useCalendarDayInfo';
import HasSignDot from './HasSignDot';
import { SingleDayProps } from './types';

const SingleDay = ({ isSelected, selectedDateHandler, day, dateType }: SingleDayProps) => {
  const { backgroundColor, dayColor, birthIconColor, isGiveBirth, isBirthday } = useCalendarDayInfo(day);

  return (
    <div
      onClick={() => selectedDateHandler(day[dateType])}
      style={{ height: CALENDAR_CELL_SIZE, width: CALENDAR_CELL_SIZE }}
      className={`
                  relative 
                  rounded-lg 
                  flex 
                  flex-col 
                  justify-center 
                  items-center 
                  outline-dashed 
                  outline-1 
                  outline-offset-1 
                  ${backgroundColor}
                  ${isSelected ? 'outline-impo_Neutral_OnSurface' : 'outline-impo_Transparent '}
                `}
    >
      <HasSignDot day={day} isSelected={isSelected} />

      {isBirthday && <CustomImage src={'/assets/images/birthdayCake.webp'} className="w-[18px] h-auto" />}

      {!isBirthday && (
        <>
          {isGiveBirth && <GiveBirthIcon className={`w-6 h-auto ${birthIconColor}`} />}

          {!isGiveBirth && (
            <>
              <CustomTypography fontSize="Body_Medium" className={`${dayColor} ${day.isToday && 'translate-y-1.5'}`}>
                {Number(day[dateType].split(DATE_SEPERATOR_REGEX)[2]).toString()}
              </CustomTypography>

              {day.isToday && (
                <CustomTypography fontSize="Body_Small" className={`${dayColor} -translate-y-1.5`}>
                  امروز
                </CustomTypography>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default memo(SingleDay, (prevProps, nextProps) => {
  return prevProps.isSelected === nextProps.isSelected;
});
