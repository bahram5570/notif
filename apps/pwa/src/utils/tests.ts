import {
  CalendarTypeEnum,
  DATE_SEPERATOR_REGEX,
  GREGORIAN_START_DATE,
  JALALI_START_DATE,
} from '@constants/date.constants';

export const applyDelay = async () => {
  return await new Promise((resolve) => setTimeout(resolve, 1000));
};

export const dateModuleFindSlide = (date: string, calendarType: CalendarTypeEnum) => {
  let startDate: string;

  switch (calendarType) {
    case CalendarTypeEnum.Jalali:
      startDate = JALALI_START_DATE;
      break;
    case CalendarTypeEnum.Gregorian:
      startDate = GREGORIAN_START_DATE;
    default:
      startDate = JALALI_START_DATE;
      break;
  }

  const dateParts = date.split(DATE_SEPERATOR_REGEX).map(Number);
  const startParts = startDate.split(DATE_SEPERATOR_REGEX).map(Number);

  const [yearSlide, monthSlide, daySlide] = dateParts.map((part, i) => part - startParts[i]);

  return { yearSlide, monthSlide, daySlide };
};
