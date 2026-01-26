import { OtpDataResponseTypes } from '../__hooks__/useCode/types';

type DataType = Pick<OtpDataResponseTypes, 'info'>['info']['options'];
export type OptionListPropsType = {
  optionList: DataType;
  resetCodeHandler: (type: number) => void;
  isValidateLoading: boolean;
};
