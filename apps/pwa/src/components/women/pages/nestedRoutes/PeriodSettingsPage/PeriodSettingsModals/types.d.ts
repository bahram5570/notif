import { PeriodSettingsValuesHandlerTypes, PeriodSettingsValuesTypes } from '../__hooks__/useValues/types';

export interface PeriodSettingsModalsTypes {
  values: PeriodSettingsValuesTypes;
  valuesHandler: PeriodSettingsValuesHandlerTypes;
}

export interface PeriodLengthModalTypes {
  value: number;
  onClose: () => void;
  totalCycleLength: number;
  valueHandler: (v: number) => void;
}

export interface CycleLengthModalTypes {
  value: number;
  onClose: () => void;
  valueHandler: (v: number) => void;
}
