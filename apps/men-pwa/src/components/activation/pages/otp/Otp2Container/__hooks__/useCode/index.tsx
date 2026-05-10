import { useEffect, useState } from 'react';

import { toEnglishNumbers } from '@repo/core/utils/numbers';

import { getFirebaseTokenCookie } from '@actions/userCookies.actions';
import { usePhoneModel } from '@repo/core/hooks/usePhoneModel';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { OtpDataResponseTypes, UseCodeProps } from './types';

const useCode = ({ identity, isRegister }: UseCodeProps) => {
  const phoneModel = usePhoneModel();
  const [payload, setPayload] = useState<object | null>(null);

  const payloadHandler = async (otpTypes?: number) => {
    const token = await getFirebaseTokenCookie();

    const result = {
      token: '',
      phoneModel,
      deviceToken: token,
      identity: toEnglishNumbers(identity || ''),
      otpTypes: otpTypes === undefined ? null : otpTypes,
    };

    return result;
  };

  useEffect(() => {
    if (identity) {
      const handleData = async () => {
        const result = await payloadHandler();
        setPayload(result);
      };

      handleData();
    }
  }, [identity]);

  const method = isRegister ? 'POST' : 'PUT';
  const api = isRegister ? 'ManAccount/v2/GetIdentity' : 'ManAccount/v2/setIdentity';

  const { data, callApi, isLoading } = usePwaApi<OtpDataResponseTypes>({ method, api });

  useEffect(() => {
    if (payload) {
      callApi(payload);
    }
  }, [payload]);

  const resetCodeHandler = async (type: number) => {
    const result = await payloadHandler(type);
    callApi(result);
  };

  const otpInfo = data?.info;

  return { resetCodeHandler, otpInfo, getDataLoading: isLoading };
};

export default useCode;
