import { useEffect, useState } from 'react';

import { LoginResponseTypes } from '@services/loginServices/types';
import { getFirebaseCookieToken } from '@utils/cookies';

import { getUserCookie } from '@actions/userCookies.actions';
import { APP_VERSION } from '@constants/app.constants';
import useApi from '@hooks/useApi';

const useGetData = () => {
  const [subscriptionLoading, setSubscriptionLoading] = useState(true);

  const subscriptionLoadingHandler = (b: boolean) => {
    setSubscriptionLoading(b);
  };

  const { callApi: getSubscription, data: subscriptionData } = useApi<LoginResponseTypes>({
    method: 'POST',
    api: 'CustomerAccount/Loginv6',
    onError: () => subscriptionLoadingHandler(false),
    onSuccess: () => subscriptionLoadingHandler(false),
  });

  useEffect(() => {
    const handleApi = async () => {
      const user = await getUserCookie();

      const payload = {
        phoneModel: '',
        channelVersion: '',
        version: APP_VERSION || '',
        identity: user?.identity || '',
        password: user?.password || '',
        deviceToken: getFirebaseCookieToken(),
      };

      getSubscription(payload);
    };

    handleApi();
  }, []);

  const hasSubscribtion = subscriptionData?.hasSubscribtion || false;

  return { subscriptionLoading, hasSubscribtion };
};

export default useGetData;
