import { CalendarSignsType } from '@repo/core/components/calendar';

import { SelectedDaySignsProps } from '../types';

export interface SelectedDaySignsContainerProps extends SelectedDaySignsProps {}

type SingleSignTypes = Pick<Pick<CalendarSignsType, 'data'>['data'], 'signs'>;

export interface SignsListProps extends SingleSignTypes {}
