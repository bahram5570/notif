import { useAnalytics } from '@repo/core/hooks/useAnalytics';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { OtpInfoTypes } from '../../types';
import { useRegisterStatusProps } from './types';

const useRegisterStatus = ({ identity, isPhone, otp1CompleteHandler }: useRegisterStatusProps) => {
  const { callEvent } = useAnalytics();

  const successHandler = ({ isRegister }: { isRegister: boolean }) => {
    const info: OtpInfoTypes = {
      password: Math.random().toString().slice(2),
      isRegister,
      identity,
      isPhone,
    };

    otp1CompleteHandler(info);

    const pathList = location.pathname.split('/');
    callEvent(`${pathList[1]} ${pathList[2]}`);
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
    api: `customerAccount/status/${identity}`,
  });

  const fetchHandler = () => {
    callApi();
  };

  const isLoading = loading || data ? true : false;

  return { fetchHandler, isLoading };
};

export default useRegisterStatus;
