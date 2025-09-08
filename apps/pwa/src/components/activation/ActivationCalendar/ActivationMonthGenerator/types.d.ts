import { SingleDateTypes } from '../__hooks__/useActivationCalendarData/types';

export interface ActivationMonthGeneratorProps {
  selectedDay: string;
  monthList: SingleDateTypes[];
  selectedDayHandler: (v: string) => void;
}
