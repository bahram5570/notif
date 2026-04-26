import { useEffect, useState } from 'react';

import { LoginResponseTypes } from '@services/loginServices/types';

import { getFirebaseTokenCookie, getUserCookie } from '@actions/userCookies.actions';
import { APP_VERSION } from '@repo/core/constants/app.constants';
import { usePhoneModel } from '@repo/core/hooks/usePhoneModel';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

const useGetData = () => {
  const phoneModel = usePhoneModel();
  const [subscriptionLoading, setSubscriptionLoading] = useState(true);

  const subscriptionLoadingHandler = (b: boolean) => {
    setSubscriptionLoading(b);
  };

  const { callApi: getSubscription, data: subscriptionData } = usePwaApi<LoginResponseTypes>({
    method: 'POST',
    api: 'CustomerAccount/Loginv6',
    onError: () => subscriptionLoadingHandler(false),
    onSuccess: () => subscriptionLoadingHandler(false),
  });

  useEffect(() => {
    const handleApi = async () => {
      const user = await getUserCookie();
      const deviceToken = await getFirebaseTokenCookie();

      const payload = {
        phoneModel,
        deviceToken,
        channelVersion: '',
        version: APP_VERSION || '',
        identity: user?.identity || '',
        password: user?.password || '',
      };

      getSubscription(payload);
    };

    handleApi();
  }, []);

  const hasSubscribtion = subscriptionData?.hasSubscribtion || false;

  return { subscriptionLoading, hasSubscribtion };
};

export default useGetData;
