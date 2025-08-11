import { useEffect } from 'react';

import { LoginResponseTypes } from '@services/loginServices/types';
import { getFirebaseCookieToken, getUserCookie } from '@utils/cookies';

import { APP_VERSION } from '@constants/app.constants';
import useApi from '@hooks/useApi';

const useGetData = () => {
  const {
    isLoading: subscriptionLoading,
    callApi: getSubscription,
    data: subscriptionData,
  } = useApi<LoginResponseTypes>({
    method: 'POST',
    api: 'CustomerAccount/Loginv6',
  });

  useEffect(() => {
    if (!subscriptionData) {
      const { user } = getUserCookie();

      const payload = {
        phoneModel: '',
        channelVersion: '',
        identity: user?.identity || '',
        password: user?.password || '',
        deviceToken: getFirebaseCookieToken(),
        version: APP_VERSION || '',
      };

      getSubscription(payload);
    }
  }, [subscriptionData]);

  const hasSubscribtion = subscriptionData?.hasSubscribtion || false;

  return { subscriptionLoading, hasSubscribtion };
};

export default useGetData;
