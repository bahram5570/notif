import { useMemo } from 'react';

import ResetIcon from '@assets/icons/calendarReset.svg';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { currentDate } from '@repo/core/utils/dates';

import useCulture from '@hooks/useCulture';
import { CalendarTypeEnum } from '@repo/core/constants/date.constants';

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
      <CustomButton
        className="!w-fit !h-8 border-impo_Surface_OutlineVariant !bg-impo_Neutral_Background"
        onClick={() => resetKeyHandler(dateType)}
      >
        <div className="flex items-center gap-1">
          <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
            بازگشت به امروز
          </CustomTypography>

          <ResetIcon className="w-4 stroke-impo_Neutral_OnBackground" />
        </div>
      </CustomButton>
    </div>
  );
};

export default ResetBtn;
