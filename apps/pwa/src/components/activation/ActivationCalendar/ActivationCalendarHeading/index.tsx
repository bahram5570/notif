import { useMemo } from 'react';

import ArrowIcon from '@assets/icons/calendarArrow.svg';

import Typography from '@components/ui/Typography';
import {
  CALENDAR_CELL_SIZE,
  CalendarTypeEnum,
  DATE_SEPERATOR_REGEX,
  GREGORIAN_FARSI_MONTH_LIST,
  JALALI_MONTH_LIST,
} from '@constants/date.constants';
import useTheme from '@hooks/useTheme';
import moment from 'moment-jalaali';

import { ActivationCalendarHeadingProps } from './types';

const width = (CALENDAR_CELL_SIZE + 16) * 7;

const ActivationCalendarHeading = (props: ActivationCalendarHeadingProps) => {
  const { colors } = useTheme();

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
      return null;
    }

    let day = 0;
    let year = '';
    let month = '';

    if (props.calendarType === CalendarTypeEnum.Gregorian) {
      const dateList = props.selectedDay.split(DATE_SEPERATOR_REGEX);
      year = dateList[0];
      day = Number(dateList[2]);
      month = GREGORIAN_FARSI_MONTH_LIST[Number(dateList[1]) - 1];
    }

    if (props.calendarType === CalendarTypeEnum.Jalali) {
      const dateList = moment(props.selectedDay, 'YYYY-MM-DD').format('jYYYY/jMM/jDD').split(DATE_SEPERATOR_REGEX);
      year = dateList[0];
      day = Number(dateList[2]);
      month = JALALI_MONTH_LIST[Number(dateList[1]) - 1];
    }

    return `${day} ${month} ${year}`;
  }, [props.calendarType, props.selectedDay]);

  const headingScript = selectedDayScript || monthScript;

  return (
    <div className="flex justify-between pb-5 mx-auto" style={{ width }}>
      <ArrowIcon
        className="w-10 h-6"
        style={{ stroke: '#1C1B1E' }}
        onClick={() => props.currentSlideHandler('previousSlide')}
      />

      <Typography
        size="Small"
        scale="Title"
        color="FREE-STYLE"
        freeColor={selectedDayScript ? colors.PrimaryWoman_Primary : colors.Neutral_OnBackground}
      >
        {headingScript}
      </Typography>

      <ArrowIcon
        style={{ stroke: '#1C1B1E' }}
        className="w-10 h-6 rotate-180"
        onClick={() => props.currentSlideHandler('nextSlide')}
      />
    </div>
  );
};

export default ActivationCalendarHeading;
