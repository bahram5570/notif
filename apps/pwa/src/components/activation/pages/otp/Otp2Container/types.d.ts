import { UserCookieTypes, UserInfoCookieTypes } from '@actions/userCookies.actions';
import { FetchedUserTypes } from '@components/activation/CompleteRegisterContainer/types';

import { OtpStatusTypes } from './__hooks__/useOtpStatus/types';

export interface Otp2ContainerProps {
  isRegisterLoading?: boolean;
  isRegisterSuccess?: boolean;
  onSubmitRegister: () => void;
  applyOtpStatus?: OtpStatusTypes;
  onSubmitLogin: (v: FetchedUserTypes) => void;
}
