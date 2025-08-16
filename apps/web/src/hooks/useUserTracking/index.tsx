import { useEffect, useState } from 'react';

import { getUserTracking } from '@providers/UserTrackingProvider/__utils__';

import useApi from '@hooks/useApi';
import { UserTrackingTypes } from '@providers/UserTrackingProvider/types';

const useUserTracking = () => {
  const [userTrackingData, setUserTrackingData] = useState<UserTrackingTypes | null>(null);

  useEffect(() => {
    const data = getUserTracking();

    if (data) {
      setUserTrackingData(data);
    }
  }, []);

  const { callApi } = useApi({ url: 'support/attribution', method: 'POST' });

  const callUserTracking = (downloadLink: string) => {
    if (userTrackingData) {
      const payload = {
        downloadLink,
        ip: userTrackingData.ip,
        urls: userTrackingData.urls,
        username: userTrackingData.username,
        userAgent: userTrackingData.userAgent,
        macAddress: userTrackingData.macAddress,
      };

      callApi(payload);
    }
  };

  return { callUserTracking };
};

export default useUserTracking;
