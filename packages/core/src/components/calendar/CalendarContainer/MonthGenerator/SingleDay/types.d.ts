import { SingleDateTypes } from '../../../type';
import { MonthGeneratorDateTypesTypes, MonthGeneratorProps } from '../types';

export interface SingleDayProps extends Pick<MonthGeneratorProps, 'selectedDateHandler'> {
  isSelected: boolean;
  day: SingleDateTypes;
  dateType: MonthGeneratorDateTypesTypes;
}

export interface HasSignDotProps extends Pick<SingleDayProps, 'day' | 'isSelected'> {}
