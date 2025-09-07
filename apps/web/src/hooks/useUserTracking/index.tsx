import { getUserTracking } from '@providers/UserTrackingProvider/__utils__';

import useApi from '@hooks/useApi';

const useUserTracking = () => {
  const { callApi } = useApi({ url: 'support/attribution', method: 'POST' });

  const callUserTracking = (downloadLink: string) => {
    const userTrackingData = getUserTracking();

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
