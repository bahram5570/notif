import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';

export interface UserInfoCalendarTypeTypes {
  value: CalendarTypeEnum;
  valueHandler: (v: CalendarTypeEnum) => void;
}
