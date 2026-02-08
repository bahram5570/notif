import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';

import { SingleDateTypes } from '../../__hooks__/useActivationCalendarData/types';
import { ActivationMonthGeneratorProps } from '../types';

export interface ActivationSingleDayProps extends Pick<ActivationMonthGeneratorProps, 'selectedDayHandler'> {
  isSelected: boolean;
  day: SingleDateTypes;
  calendarType: CalendarTypeEnum;
}
