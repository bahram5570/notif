import { useState } from 'react';

import { toEnglishNumbers } from '@repo/core/utils/numbers';

import { UserCookieTypes, UserInfoCookieTypes, getFirebaseTokenCookie } from '@actions/userCookies.actions';
import { APP_VERSION } from '@repo/core/constants/app.constants';
import { useCountDown } from '@repo/core/hooks/useCountDown';
import { useCulture } from '@repo/core/hooks/useCulture';
import { usePhoneModel } from '@repo/core/hooks/usePhoneModel';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { OTP_COUNT_DOWN_TIME } from '../../constants';
import { ForgotSuccessHandlerTypes, LoginSuccessHandlerTypes, UseLoginPros } from './types';

let userCookieValue: UserCookieTypes;
let userInfoCookieValue: UserInfoCookieTypes;

const useLogin = ({ identity, password, otpStatusHandler, onSubmitLogin }: UseLoginPros) => {
  const phoneModel = usePhoneModel();
  const { cultureHandler } = useCulture();
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const { startCounter } = useCountDown({
    time: OTP_COUNT_DOWN_TIME,
    onCallBack: () => onSubmitLogin(userCookieValue),
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
      name: v.name,
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

  const forgotSuccessHandler: ForgotSuccessHandlerTypes = async ({ result }) => {
    if (result) {
      const token = await getFirebaseTokenCookie();

      callLoginApi({
        identity,
        password,
        phoneModel,
        channelVersion: '',
        deviceToken: token,
        version: APP_VERSION,
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
