import { UserInfoValuesTypes, ValuesHandlerTypes } from '../__hooks__/useValues/types';

export interface UserInfoModalsTypes {
  values: UserInfoValuesTypes;
  valuesHandler: ValuesHandlerTypes;
}

export interface BirthDateModalTypes {
  value: string;
  onClose: () => void;
  valueHandler: (v: string) => void;
}
