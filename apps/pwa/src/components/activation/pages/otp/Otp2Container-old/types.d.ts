import { UserCookieTypes } from '@actions/userCookies.actions';

import { OtpStatusTypes } from './__hooks__/useOtpStatus/types';

export interface Otp2ContainerProps {
  isRegisterLoading?: boolean;
  isRegisterSuccess?: boolean;
  onSubmitRegister: () => void;
  applyOtpStatus?: OtpStatusTypes;
  onSubmitLogin: (v: UserCookieTypes) => void;
}
