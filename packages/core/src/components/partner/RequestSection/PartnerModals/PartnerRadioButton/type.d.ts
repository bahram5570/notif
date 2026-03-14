import { CommanPropsType } from '../type';

export type PartnerRadioButtonPropsType = Pick<CommanPropsType, 'isMan'> & {
  value: number;
  onChange: (value: number) => void;
};
