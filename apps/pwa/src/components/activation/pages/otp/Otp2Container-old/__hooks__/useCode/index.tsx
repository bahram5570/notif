import { useEffect } from 'react';

import { toEnglishNumbers } from '@repo/core/utils/numbers';
import { getFirebaseCookieToken } from '@utils/cookies';

import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { SuccessHandlerTypes, UseCodeProps } from './types';

const useCode = ({ identity, isRegister }: UseCodeProps) => {
  const toast = useCustomToast();

  const successHandler: SuccessHandlerTypes = ({ result }) => {
    if (result) {
      toast.notifyToastHandler({ message: 'کد 6 رقمی ارسال شد' });
    }
  };

  const method = isRegister ? 'POST' : 'PUT';
  const payload = {
    token: '',
    phoneModel: '',
    deviceToken: getFirebaseCookieToken(),
    identity: toEnglishNumbers(identity || ''),
  };
  const api = isRegister ? 'customerAccount/GetIdentity' : 'customerAccount/setIdentity';

  const { callApi } = usePwaApi({
    onSuccess: successHandler,
    method,
    api,
  });

  useEffect(() => {
    if (identity !== undefined) {
      callApi(payload);
    }
  }, [identity]);

  const resetCodeHandler = () => {
    callApi(payload);
  };

  return { resetCodeHandler };
};

export default useCode;
