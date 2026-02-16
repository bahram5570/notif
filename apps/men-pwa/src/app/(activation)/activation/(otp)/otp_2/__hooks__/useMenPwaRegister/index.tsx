import { registerPayloadUpdater } from '@utils/register';

import { UserCookieTypes, UserInfoCookieTypes, getFirebaseTokenCookie } from '@actions/userCookies.actions';
import { LoginSuccessHandlerTypes } from '@components/activation/pages/otp/Otp2Container/__hooks__/useLogin/types';
import { OTP_COUNT_DOWN_TIME } from '@components/activation/pages/otp/Otp2Container/constants';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';
import { APP_VERSION } from '@repo/core/constants/app.constants';
import { useCountDown } from '@repo/core/hooks/useCountDown';
import { useCulture } from '@repo/core/hooks/useCulture';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { UseMenPwaRegisterTypes } from './types';

let userCookieValue: UserCookieTypes;
let userInfoCookieValue: UserInfoCookieTypes;

const useMenPwaRegister = ({ completeHander, loginHandler }: UseMenPwaRegisterTypes) => {
  const { culture } = useCulture();
  const { payload } = useActivationPayload();

  const { startCounter } = useCountDown({
    time: OTP_COUNT_DOWN_TIME,
    onCallBack: () => loginHandler({ userCookie: userCookieValue, userInfoCookie: userInfoCookieValue }),
  });

  const loginSuccessHandler: LoginSuccessHandlerTypes = (v) => {
    userCookieValue = {
      identity: payload.identity || '',
      password: payload.password || '',
      token: v.token,
    };

    userInfoCookieValue = {};

    completeHander();
    startCounter();
  };

  const { callApi: callLoginApi } = usePwaApi({
    onSuccess: loginSuccessHandler,
    api: 'ManAccount/Loginv3',
    method: 'POST',
  });

  const registerSuccessHandler = async ({ result }: { result: boolean }) => {
    if (result) {
      const token = await getFirebaseTokenCookie();

      const result = {
        identity: payload.identity,
        password: payload.password,
        version: APP_VERSION,
        deviceToken: token,
        phoneModel: '',
      };

      callLoginApi(result);
    }
  };

  const { callApi } = usePwaApi({ api: 'ManAccount/Registerv2', method: 'POST', onSuccess: registerSuccessHandler });

  const registerHandler = () => {
    const { updatedPayload } = registerPayloadUpdater(payload, culture.calendarType);
    // todo: As a placeholder. Remove after 'birthDate' set up.
    updatedPayload.birthDate = '2000-01-01';
    callApi(updatedPayload);
  };

  return { registerHandler };
};

export default useMenPwaRegister;
