import { CommanPropsType } from '../RequestSection/PartnerModals/type';

export type PartnerRadioButtonPropsType = Pick<CommanPropsType, 'isMan'> & {
  value: number;
  onChange: (value: number) => void;
};
