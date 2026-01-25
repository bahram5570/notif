import { useMemo, useState } from 'react';

import PregnancyIcon from '@assets/icons/pregnancy.svg';
import { toGregorianData, toJalaliData } from '@utils/dates';

import DateModule from '@components/activation/DateModule';
import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';
import useDateIntervals from '@providers/__activation__/ActivationProvider/__hooks__/useDateIntervals';

import { ChildBirthDateModalPropsType } from './type';

const ChildBirthDate = ({ changeValueHandler, onCloseModal, childBirthDate }: ChildBirthDateModalPropsType) => {
  const { culture } = useCulture();
  const [selectedDate, setSelectedDate] = useState('');
  const { pregnancyPeriodStart, pregnancyPeriodEnd } = useDateIntervals();

  const valueHandler = (v: string) => {
    setSelectedDate(v);
  };

  const applyHandler = () => {
    let updatedDate = '';

    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        updatedDate = toGregorianData(selectedDate);
        break;
      case CalendarTypeEnum.Gregorian:
        updatedDate = selectedDate;
        break;
      default:
        updatedDate = toGregorianData(selectedDate);
        break;
    }

    changeValueHandler(updatedDate, 'childBirthDate');
    onCloseModal();
  };

  const defaultDate = useMemo(() => {
    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        return toJalaliData(childBirthDate);
      case CalendarTypeEnum.Gregorian:
        return childBirthDate;
      default:
        return toJalaliData(childBirthDate);
    }
  }, [culture.calendarType, childBirthDate]);

  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-center">
        <PregnancyIcon className="w-9 h-9" />

        <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          تاریخ زایمان
        </Dark_Typography>
      </div>

      <DateModule
        defaultDate={defaultDate}
        valueHandler={valueHandler}
        endDate={pregnancyPeriodEnd}
        startDate={pregnancyPeriodStart}
      />

      <Dark_Button onClick={applyHandler}>ذخیره</Dark_Button>
    </>
  );
};

export default ChildBirthDate;
