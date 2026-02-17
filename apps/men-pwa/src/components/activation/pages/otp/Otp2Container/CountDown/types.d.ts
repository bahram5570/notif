import { OtpDataResponseTypes } from '../__hooks__/useCode/types';

type InfoType = Pick<OtpDataResponseTypes, 'info'>['info'];
type DataType = Pick<InfoType, 'waitMessage' | 'waitTime'>;

export interface CountDownProps extends DataType {
  resetCodeHandler: () => void;
}
