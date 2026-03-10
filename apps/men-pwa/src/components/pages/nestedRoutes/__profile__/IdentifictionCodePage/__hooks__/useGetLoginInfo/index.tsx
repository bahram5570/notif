import { useEffect, useState } from 'react';

import { LoginResponseTypes } from '@services/loginServices/types';

import { LoginSuccessHandlerTypes } from '@components/activation/pages/otp/Otp2Container/__hooks__/useLogin/types';
import { APP_VERSION } from '@repo/core/constants/app.constants';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { UserInfoLoginTypes } from '../../types';
import useGetUserInfo from '../useGetUserInfo';

const useGetLoginInfo = () => {
  const { userInfo } = useGetUserInfo();

  const [loginInfo, setLoginInfo] = useState<LoginResponseTypes>();

  const loginSuccessHandler: LoginSuccessHandlerTypes = async (value) => {
    setLoginInfo(value);
  };

  const { callApi: callLoginApi, isLoading } = usePwaApi({
    method: 'POST',
    api: 'ManAccount/Loginv3',
    onSuccess: loginSuccessHandler,
  });

  const getUserData = ({ identity, password, token }: UserInfoLoginTypes) => {
    const result = {
      identity: identity,
      password: password,
      version: APP_VERSION,
      deviceToken: token,
      phoneModel: '',
    };

    callLoginApi(result);
  };

  useEffect(() => {
    if (userInfo) getUserData(userInfo);
  }, [userInfo]);

  return { getUserData, isLoading, loginInfo };
};

export default useGetLoginInfo;
