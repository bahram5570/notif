import { useEffect } from 'react';

import useApi from '@hooks/useApi';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import Cookies from 'js-cookie';

const useAuth = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const userId = getQueryParams('userId');

  const successHandler = (data: { token: string }) => {
    if (data.token) {
      Cookies.set('token', data.token);
    }
  };

  const { callApi } = useApi({
    onSuccess: successHandler,
    url: `getToken`, // sample
    method: 'POST',
  });

  useEffect(() => {
    if (userId) {
      callApi({ payload: { userId } });
    }
  }, [userId]);

  return;
};

export default useAuth;
