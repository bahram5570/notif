import { useMemo } from 'react';

import ArrowIcon from '@assets/icons/calendarArrow.svg';

import Dark_Typography from '@components/ui/Dark_Typography';
import {
  CALENDAR_CELL_SIZE,
  CalendarTypeEnum,
  DATE_SEPERATOR_REGEX,
  GREGORIAN_FARSI_MONTH_LIST,
  JALALI_MONTH_LIST,
} from '@constants/date.constants';
import moment from 'moment-jalaali';

import { ActivationCalendarHeadingProps } from './types';

const width = (CALENDAR_CELL_SIZE + 16) * 7;

const ActivationCalendarHeading = (props: ActivationCalendarHeadingProps) => {
  const monthScript = useMemo(() => {
    let year = '';
    let month = '';

    if (props.calendarType === CalendarTypeEnum.Gregorian) {
      const dateList = props.currentMonthInfo.gregorianDate.split(DATE_SEPERATOR_REGEX);
      year = dateList[0];
      month = GREGORIAN_FARSI_MONTH_LIST[Number(dateList[1]) - 1];
    }

    if (props.calendarType === CalendarTypeEnum.Jalali) {
      const dateList = props.currentMonthInfo.jalaliDate.split(DATE_SEPERATOR_REGEX);
      year = dateList[0];
      month = JALALI_MONTH_LIST[Number(dateList[1]) - 1];
    }

    return `${month} ${year}`;
  }, [props.calendarType, props.currentMonthInfo]);

  const selectedDayScript = useMemo(() => {
    if (props.selectedDay === '') {
      return 'آخرین پریودتو انتخاب کن';
    }

    let day = 0;
    let month = '';

    if (props.calendarType === CalendarTypeEnum.Gregorian) {
      const dateList = props.selectedDay.split(DATE_SEPERATOR_REGEX);
      day = Number(dateList[2]);
      month = GREGORIAN_FARSI_MONTH_LIST[Number(dateList[1]) - 1];
    }

    if (props.calendarType === CalendarTypeEnum.Jalali) {
      const dateList = moment(props.selectedDay, 'YYYY-MM-DD').format('jYYYY/jMM/jDD').split(DATE_SEPERATOR_REGEX);
      day = Number(dateList[2]);
      month = JALALI_MONTH_LIST[Number(dateList[1]) - 1];
    }

    return `(تاریخ انتخاب شده: ${day} ${month})`;
  }, [props.calendarType, props.selectedDay]);

  return (
    <div className="flex justify-between pb-5 mx-auto" style={{ width }}>
      <ArrowIcon
        data-testid={'btn_previous'}
        className="w-10 h-6 stroke-impo_Surface_Outline"
        onClick={() => props.currentSlideHandler('previousSlide')}
      />

      <div className="flex flex-col items-center gap-1">
        <Dark_Typography
          fontSize="Title_Small"
          testId={'calendar_month_title'}
          className="text-impo_Neutral_OnBackground"
        >
          {monthScript}
        </Dark_Typography>

        <Dark_Typography
          fontSize="Lable_Medium"
          className={`${props.selectedDay === '' ? 'text-impo_Surface_Outline' : 'text-impo_Primary_Primary'}`}
        >
          {selectedDayScript}
        </Dark_Typography>
      </div>

      <ArrowIcon
        className="w-10 h-6 stroke-impo_Surface_Outline rotate-180"
        onClick={() => props.currentSlideHandler('nextSlide')}
        data-testid={'btn_next'}
      />
    </div>
  );
};

export default ActivationCalendarHeading;
