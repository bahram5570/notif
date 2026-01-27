import { useMemo } from 'react';

import ResetIcon from '@assets/icons/calendarReset.svg';
import { currentDate } from '@utils/dates';

import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';

import { RESET_BUTTON_MAX_HEIGHT } from './constants';
import { ResetBtnProps } from './types';

const { jDate, gDate } = currentDate();

const ResetBtn = ({ selectedDate, resetKeyHandler }: ResetBtnProps) => {
  const { culture } = useCulture();

  const dateType = useMemo(() => {
    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        return jDate;
      case CalendarTypeEnum.Gregorian:
        return gDate;
      default:
        return jDate;
    }
  }, [culture.calendarType]);

  const isTodaySelected = selectedDate === dateType;

  return (
    <div
      className="w-full flex justify-center pt-4 overflow-hidden duration-200"
      style={{ maxHeight: isTodaySelected ? 0 : RESET_BUTTON_MAX_HEIGHT }}
    >
      <Dark_Button
        className="!w-fit !h-8 border-impo_Surface_OutlineVariant !bg-impo_Neutral_Background"
        onClick={() => resetKeyHandler(dateType)}
      >
        <div className="flex items-center gap-1">
          <Dark_Typography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
            بازگشت به امروز
          </Dark_Typography>

          <ResetIcon className="w-4 stroke-impo_Neutral_OnBackground" />
        </div>
      </Dark_Button>
    </div>
  );
};

export default ResetBtn;
