import { CircleContainerProps } from '../types';

type DataTypes = NonNullable<Pick<CircleContainerProps, 'data'>['data']>;
type ItemsTypes = Pick<
  DataTypes,
  | 'cycleLength'
  | 'periodStart'
  | 'periodEnd'
  | 'hasFertility'
  | 'fertilityStart'
  | 'fertilityEnd'
  | 'hasOvulation'
  | 'ovulationDay'
  | 'hasPms'
  | 'pmsStart'
  | 'pmsEnd'
  | 'currentDay'
>;
export interface CircleContainerDaysProps extends ItemsTypes {}

export type DaysColorsTypes = {
  text: string;
  border: string;
  background: string;
};

export interface DayGeneratorProps extends Pick<CircleContainerDaysProps, 'cycleLength' | 'currentDay'> {
  day: number;
  ovulationDay?: number;
  colors: DaysColorsTypes;
}

export interface CurrentDayGeneratorProps extends Pick<CircleContainerDaysProps, 'cycleLength' | 'currentDay'> {
  colors: DaysColorsTypes;
}

export interface OvulationGeneratorProps extends Pick<
  CircleContainerDaysProps,
  'cycleLength' | 'currentDay' | 'ovulationDay'
> {
  colors: DaysColorsTypes;
}
