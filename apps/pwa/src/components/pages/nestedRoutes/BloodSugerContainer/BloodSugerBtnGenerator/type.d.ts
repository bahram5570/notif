import { InputValueType } from '../type';

export type BloodSugerBtnGeneratorPropsType = {
  value: string | number | null;
  name: keyof InputValueType;
  label: string;
  index: number;
};
