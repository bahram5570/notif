import { ResetKeyHandlerTypes } from '../__hooks__/useInitialSlide/types';
import { CalendarContainerProps } from '../type';

type Types = Pick<CalendarContainerProps, 'selectedDate'>;
export interface ResetBtnProps extends Types {
  resetKeyHandler: ResetKeyHandlerTypes;
}
