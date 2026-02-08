import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';

import { SingleDateTypes } from '../__hooks__/useActivationCalendarData/types';
import { CurrentSlideHandlerTypes } from '../__hooks__/useActivationCalendarSlide/types';

export interface ActivationCalendarHeadingProps {
  selectedDay: string;
  calendarType: CalendarTypeEnum;
  currentMonthInfo: SingleDateTypes;
  currentSlideHandler: CurrentSlideHandlerTypes;
}
