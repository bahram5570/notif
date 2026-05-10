import { SelectedDateHandlerTypes, SingleDateTypes } from '../../type';

export interface MonthGeneratorProps {
  selectedDateHandler: SelectedDateHandlerTypes;
  monthList: SingleDateTypes[];
  selectedDate: string;
}

export type MonthGeneratorDateTypesTypes = Extract<keyof SingleDateTypes, 'gregorianDate' | 'jalaaliDate'>;
