import { useEffect, useState } from 'react';

import { toEnglishNumbers } from '@repo/core/utils/numbers';

import { getFirebaseTokenCookie } from '@actions/userCookies.actions';
import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { usePhoneModel } from '@repo/core/hooks/usePhoneModel';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { SuccessHandlerTypes, UseCodeProps } from './types';

const useCode = ({ identity, isRegister }: UseCodeProps) => {
  const phoneModel = usePhoneModel();
  const { notifyToastHandler } = useCustomToast();
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

  const successHandler: SuccessHandlerTypes = ({ result }) => {
    if (result) {
      notifyToastHandler({ message: 'کد 6 رقمی ارسال شد' });
    }
  };

  const method = isRegister ? 'POST' : 'PUT';
  const api = isRegister ? 'customerAccount/GetIdentity' : 'customerAccount/setIdentity';

  const { callApi } = usePwaApi({ onSuccess: successHandler, method, api });

  useEffect(() => {
    if (payload) {
      callApi(payload);
    }
  }, [payload]);

  const resetCodeHandler = async (type?: number) => {
    const result = await payloadHandler(type);
    callApi(result);
  };

  return { resetCodeHandler };
};

export default useCode;
