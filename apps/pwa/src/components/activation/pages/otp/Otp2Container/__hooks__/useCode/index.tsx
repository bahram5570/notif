import { useEffect } from 'react';

import { toEnglishNumbers } from '@repo/core/utils/numbers';
import { getFirebaseCookieToken } from '@utils/cookies';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { OtpDataResponseTypes, UseCodeProps } from './types';

const useCode = ({ identity, isRegister }: UseCodeProps) => {
  const method = isRegister ? 'POST' : 'PUT';
  const payload = {
    token: '',
    phoneModel: '',
    deviceToken: getFirebaseCookieToken(),
    identity: toEnglishNumbers(identity || ''),
    otpTypes: null,
  };
  const api = isRegister ? 'CustomerAccount/v2/GetIdentity' : 'CustomerAccount/v2/setIdentity';

  const { data, callApi, isLoading } = usePwaApi<OtpDataResponseTypes>({
    method,
    api,
  });

  useEffect(() => {
    if (identity !== undefined) {
      callApi(payload);
    }
  }, [identity]);

  const resetCodeHandler = (type: number) => {
    const payload = {
      token: '',
      phoneModel: '',
      deviceToken: getFirebaseCookieToken(),
      identity: toEnglishNumbers(identity || ''),
      otpTypes: type,
    };
    callApi(payload);
  };

  const otpInfo = data?.info;

  return { resetCodeHandler, otpInfo, getDataLoading: isLoading };
};

export default useCode;
