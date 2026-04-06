import { CalendarSignsType } from '../../../calendar/type';
import { SelectedDaySignsProps } from '../types';

export interface SelectedDaySignsContainerProps extends SelectedDaySignsProps {}

type SingleSignTypes = Pick<Pick<CalendarSignsType, 'data'>['data'], 'signs'>;

export interface SignsListProps extends SingleSignTypes {}

export type SelectedDateHandlerTypes = (v: string) => void;
