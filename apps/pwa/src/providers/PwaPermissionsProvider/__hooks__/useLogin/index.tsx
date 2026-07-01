import { useState } from 'react';

import { LoginResponseTypes } from '@services/loginServices/types';

import {
  UserCookieTypes,
  UserInfoCookieTypes,
  getUserCookie,
  setUserCookie,
  setUserInfoCookie,
} from '@actions/userCookies.actions';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { DataTypes } from './types';

const useLogin = () => {
  const [data, setData] = useState<DataTypes | null>(null);

  const successHandler = async (v: LoginResponseTypes) => {
    if (!data || !v.token) {
      return;
    }

    const userCookieValue: UserCookieTypes = {
      token: v.token,
      loginId: v.loginId,
      identity: data.identity,
      password: data.password,
    };

    const userInfoCookieValue: UserInfoCookieTypes = {
      name: v.name,
      cycleTheme: v.cycleTheme,
      installationPurpose: { periodStatus: v.periodStatus, status: v.status },
    };

    setUserCookie(userCookieValue);
    setUserInfoCookie(userInfoCookieValue);
  };

  const { callApi } = usePwaApi({
    method: 'POST',
    onSuccess: successHandler,
    api: 'CustomerAccount/Loginv6',
  });

  const loginHandler = async (firebaseToken: string) => {
    const user = await getUserCookie();

    if (user) {
      const payload: DataTypes = { deviceToken: firebaseToken, identity: user.identity, password: user.password };

      setData(payload);
      callApi(payload);
    }
  };

  return { loginHandler };
};

export default useLogin;
