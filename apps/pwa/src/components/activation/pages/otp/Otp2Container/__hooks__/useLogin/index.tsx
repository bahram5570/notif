import { useState } from 'react';

import { toEnglishNumbers } from '@repo/core/utils/numbers';
import { getFirebaseCookieToken } from '@utils/cookies';

import { UserCookieTypes, UserInfoCookieTypes } from '@actions/userCookies.actions';
import useCountDown from '@hooks/useCountDown';
import { APP_VERSION } from '@repo/core/constants/app.constants';
import { useCulture } from '@repo/core/hooks/useCulture';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { OTP_COUNT_DOWN_TIME } from '../../constants';
import { ForgotSuccessHandlerTypes, LoginSuccessHandlerTypes, UseLoginPros } from './types';

let userCookieValue: UserCookieTypes;
let userInfoCookieValue: UserInfoCookieTypes;

const useLogin = ({ identity, password, otpStatusHandler, onSubmitLogin }: UseLoginPros) => {
  const { cultureHandler } = useCulture();
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const { startCounter } = useCountDown({
    time: OTP_COUNT_DOWN_TIME,
    onCallBack: () => onSubmitLogin({ userCookie: userCookieValue, userInfoCookie: userInfoCookieValue }),
  });

  const loginSuccessHandler: LoginSuccessHandlerTypes = (v) => {
    userCookieValue = {
      identity: identity || '',
      password: password || '',
      loginId: v.loginId,
      token: v.token,
    };

    userInfoCookieValue = {
      cycleTheme: v.cycleTheme,
      installationPurpose: { periodStatus: v.periodStatus, status: v.status },
    };

    cultureHandler('calendarType', v.calendarType);
    otpStatusHandler('correct');
    setIsLoginSuccess(true);
    startCounter();
  };

  const { isLoading: isLoginLoading, callApi: callLoginApi } = usePwaApi({
    onError: () => otpStatusHandler('wrong'),
    api: 'CustomerAccount/Loginv6',
    onSuccess: loginSuccessHandler,
    method: 'POST',
  });

  const forgotSuccessHandler: ForgotSuccessHandlerTypes = ({ result }) => {
    if (result) {
      callLoginApi({
        identity,
        password,
        phoneModel: '',
        channelVersion: '',
        version: APP_VERSION,
        deviceToken: getFirebaseCookieToken(),
      });
    } else {
      otpStatusHandler('wrong');
    }
  };

  const { isLoading: forgotLoading, callApi: callForgetApi } = usePwaApi({
    onError: () => otpStatusHandler('wrong'),
    onSuccess: forgotSuccessHandler,
    api: 'CustomerAccount/forgot',
    method: 'POST',
  });

  const loginHandler = () => {
    const result = { identity: toEnglishNumbers(identity || '').toString(), password };
    callForgetApi(result);
  };

  const loginLoading = forgotLoading || isLoginLoading;

  return { loginHandler, loginLoading, isLoginSuccess };
};

export default useLogin;
