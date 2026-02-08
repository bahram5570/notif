import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';

import { ActivationCalendarTypes } from '../../types';

export interface UseActivationCalendarSelectedDayTypes extends Pick<
  ActivationCalendarTypes,
  'valueHandler' | 'endDate'
> {
  calendarType: CalendarTypeEnum;
}
