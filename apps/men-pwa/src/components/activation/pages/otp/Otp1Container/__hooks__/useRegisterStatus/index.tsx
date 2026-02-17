import { OtpInfoTypes } from '@components/activation/pages/types';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { useRegisterStatusProps } from './types';

const useRegisterStatus = ({ identity, isPhone, otp1CompleteHandler }: useRegisterStatusProps) => {
  const successHandler = ({ isRegister }: { isRegister: boolean }) => {
    const info: OtpInfoTypes = {
      password: Math.random().toString().slice(2),
      isRegister,
      identity,
      isPhone,
    };

    otp1CompleteHandler(info);
  };

  const {
    isLoading: loading,
    callApi,
    data,
  } = usePwaApi({
    method: 'GET',
    fetchOnMount: false,
    queryKey: ['identity'],
    onSuccess: successHandler,
    api: `ManAccount/status/${identity}`,
  });

  const fetchHandler = () => {
    callApi();
  };

  const isLoading = loading || data ? true : false;

  return { fetchHandler, isLoading };
};

export default useRegisterStatus;
