import useAnalytics from '@hooks/useAnalytics';
import useApi from '@hooks/useApi';

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

    callEvent(location.pathname.slice(1));
    otp1CompleteHandler(info);
  };

  const {
    isLoading: loading,
    callApi,
    data,
  } = useApi({
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
