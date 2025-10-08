import { currentDate } from '@utils/dates';

const { gYear, jYear } = currentDate();

export enum CalendarTypeEnum {
  Jalali = 0,
  Gregorian = 1,
}

export const DATE_SEPERATOR_REGEX = /[-\/]/;

export const JALALI_START_DATE = `${jYear - 54}/01/01`;
export const GREGORIAN_START_DATE = `${gYear - 55}-01-01`;

// # PREGNANCY_INTERVAL قبلا 280 روز بوده اما در انتخاب 280 روزمین وارد روز سفید میشدیم برای همون یک واحد کم کردیم که محدوده انتخاب درست شود
export const PREGNANCY_INTERVAL = 279;
export const PERIOD_INTERVAL = 180;

export const CALENDAR_CELL_SIZE = 36;

export const CALENDAR_JALALI_WEEK_NAMES = ['جمعه', 'پنج', 'چهار', 'سه', 'دو', 'یک', 'شنبه'];
export const WEEK_LIST = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'];
export const CALENDAR_GREGORIAN_FARSI_WEEK_NAMES = ['شنبه', 'جمعه', 'پنج', 'چهار', 'سه', 'دو', 'یک'];

export const JALALI_MONTH_LIST = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند',
];
export const GREGORIAN_FARSI_MONTH_LIST = [
  'ژانویه',
  'فوریه',
  'مارس',
  'آوریل',
  'مه',
  'ژوئن',
  'ژوئیه',
  'اوت',
  'سپتامبر',
  'اکتبر',
  'نوامبر',
  'دسامبر',
];
