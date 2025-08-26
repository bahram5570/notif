import { useEffect } from 'react';

import { LoginResponseTypes } from '@services/loginServices/types';
import { getFirebaseCookieToken } from '@utils/cookies';

import { gggetUserCookie } from '@actions/cookie.actions';
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
    const handleApi = async () => {
      const user = await gggetUserCookie();

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
