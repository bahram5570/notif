import { CalendarTypeEnum } from '@repo/core/constants/date.constants';

export interface UserInfoCalendarTypeTypes {
  value: CalendarTypeEnum;
  valueHandler: (v: CalendarTypeEnum) => void;
}
