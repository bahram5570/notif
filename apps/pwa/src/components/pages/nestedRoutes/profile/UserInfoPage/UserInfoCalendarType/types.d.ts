import { CalendarTypeEnum } from '@constants/date.constants';

export interface UserInfoCalendarTypeTypes {
  value: CalendarTypeEnum;
  valueHandler: (v: CalendarTypeEnum) => void;
}
