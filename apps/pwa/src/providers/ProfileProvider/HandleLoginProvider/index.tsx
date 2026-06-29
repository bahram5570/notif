'use client';

import { useEffect, useRef, useState } from 'react';

import { isDevelopeMode } from '@repo/core/utils/system';
import { LoginResponseTypes } from '@services/loginServices/types';

import {
  UserCookieTypes,
  UserInfoCookieTypes,
  getFirebaseTokenCookie,
  getUserCookie,
  setUserCookie,
  setUserInfoCookie,
} from '@actions/userCookies.actions';
import { LOGGIN_CALLED } from '@constants/storage.constants';
import { APP_VERSION } from '@repo/core/constants/app.constants';
import { usePhoneModel } from '@repo/core/hooks/usePhoneModel';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { DataTypes } from './types';

const HandleLoginProvider = () => {
  const phoneModel = usePhoneModel();
  const isFirstTime = useRef(isDevelopeMode());
  const [data, setData] = useState<DataTypes | null>(null);

  const successHandler = async (v: LoginResponseTypes) => {
    if (!data || !v.token) {
      return;
    }

    const userCookieValue: UserCookieTypes = {
      identity: data.identity,
      password: data.password,
      loginId: v.loginId,
      token: v.token,
    };

    const userInfoCookieValue: UserInfoCookieTypes = {
      installationPurpose: { periodStatus: v.periodStatus, status: v.status },
      cycleTheme: v.cycleTheme,
      name: v.name,
    };

    setUserCookie(userCookieValue);
    setUserInfoCookie(userInfoCookieValue);
    sessionStorage.setItem(LOGGIN_CALLED, 'true');
  };

  const { callApi } = usePwaApi({
    method: 'POST',
    onSuccess: successHandler,
    api: 'CustomerAccount/Loginv6',
  });

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    const getData = async () => {
      const user = await getUserCookie();
      const deviceToken = await getFirebaseTokenCookie();
      const isLogginCalled = sessionStorage.getItem(LOGGIN_CALLED);

      if (user && deviceToken && !isLogginCalled) {
        const result = { deviceToken, identity: user.identity, password: user.password };
        setData(result);

        const payload = {
          phoneModel,
          channelVersion: '',
          identity: result.identity,
          password: result.password,
          version: APP_VERSION || '',
          deviceToken: result.deviceToken,
        };

        callApi(payload);
      }
    };

    getData();
  }, []);

  return null;
};

export default HandleLoginProvider;
