import { CalendarTypeEnum } from '@repo/core/constants/date.constants';

import { ActivationCalendarTypes } from '../../types';

export interface UseActivationCalendarSelectedDayTypes extends Pick<
  ActivationCalendarTypes,
  'valueHandler' | 'endDate'
> {
  calendarType: CalendarTypeEnum;
}
