import { UserInfoValuesTypes } from '../__hooks__/useValues/types';

export interface UserInfoBirthdateTypes {
  value: string;
  name: keyof UserInfoValuesTypes;
  valueHandler: (v: string) => void;
}
