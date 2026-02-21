import { useEffect } from 'react';

import useApi from '@hooks/useApi';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import Cookies from 'js-cookie';

const useAuth = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const userId = getQueryParams('userId');
  const authrizetoken = getQueryParams('authrizetoken');

  const successHandler = (data: { token: string }) => {
    if (data.token !== 'NOT FOUND') {
      Cookies.set('geneticToken', data.token);
    }
  };

  const { callApi } = useApi({
    onSuccess: successHandler,
    url: `CustomerAccount/identity/token`,
    method: 'POST',
  });

  useEffect(() => {
    if (!userId || !authrizetoken) return;

    const payload = {
      token: authrizetoken,
      identity: userId,
    };

    callApi(payload);
  }, [userId, authrizetoken]);

  return;
};

export default useAuth;
