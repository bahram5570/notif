import { PeriodSettingsValuesHandlerTypes, PeriodSettingsValuesTypes } from '../__hooks__/useValues/types';

export interface PeriodSettingsModalsTypes {
  values: PeriodSettingsValuesTypes;
  valuesHandler: PeriodSettingsValuesHandlerTypes;
  acceptingChanges: (v: PeriodSettingsValuesTypes) => void;
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

export type CycleLengthWarningModalType = Pick<PeriodSettingsModalsTypes, 'acceptingChanges' | 'values'>;
