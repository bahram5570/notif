import { OtpStatusTypes } from '../__hooks__/useOtpStatus/types';
import { SubmitHandlerTypes } from '../__hooks__/useValidation/types';

export interface CodesProps {
  submitHandler: SubmitHandlerTypes;
  otpStatus: OtpStatusTypes;
  isLoading: boolean;
}
