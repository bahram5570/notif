import { FetchedUserTypes } from '../../types';
import { OtpStatusTypes } from './__hooks__/useOtpStatus/types';

export interface Otp2ContainerProps {
  onSubmitLogin: (v: FetchedUserTypes) => void;
  applyOtpStatus?: OtpStatusTypes;
  onSubmitRegister: () => void;
  isRegisterLoading?: boolean;
  isRegisterSuccess?: boolean;
}
