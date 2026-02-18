import { registerPayloadUpdater } from '@utils/register';

import {
  UserCookieTypes,
  UserInfoCookieTypes,
  getFirebaseTokenCookie,
  setUserCookie,
  setUserInfoCookie,
} from '@actions/userCookies.actions';
import { LoginSuccessHandlerTypes } from '@components/activation/pages/otp/Otp2Container/__hooks__/useLogin/types';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';
import { APP_VERSION } from '@repo/core/constants/app.constants';
import { useCulture } from '@repo/core/hooks/useCulture';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouter } from 'next/navigation';

const useMenPwaRegister = () => {
  const router = useRouter();
  const { culture } = useCulture();
  const { payload } = useActivationPayload();

  const loginSuccessHandler: LoginSuccessHandlerTypes = async (v) => {
    const userCookieValue: UserCookieTypes = {
      identity: payload.identity || '',
      password: payload.password || '',
      token: v.token,
    };

    const userInfoCookieValue: UserInfoCookieTypes = {};

    await setUserCookie(userCookieValue);
    await setUserInfoCookie(userInfoCookieValue);
    sessionStorage.clear();

    router.replace('/protected/partner');
  };

  const { callApi: callLoginApi, isLoading: loginLoading } = usePwaApi({
    method: 'POST',
    api: 'ManAccount/Loginv3',
    onSuccess: loginSuccessHandler,
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

  const { callApi, isLoading: registerLoading } = usePwaApi({
    method: 'POST',
    api: 'ManAccount/Registerv2',
    onSuccess: registerSuccessHandler,
  });

  const registerHandler = () => {
    const { updatedPayload } = registerPayloadUpdater(payload, culture.calendarType);
    callApi(updatedPayload);
  };

  const isLoading = loginLoading || registerLoading;

  return { registerHandler, isLoading };
};

export default useMenPwaRegister;
