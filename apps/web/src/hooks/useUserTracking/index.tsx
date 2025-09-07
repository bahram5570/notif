import { getUserTracking } from '@providers/UserTrackingProvider/__utils__';

import useApi from '@hooks/useApi';

const useUserTracking = () => {
  const { callApi } = useApi({ url: 'support/attribution', method: 'POST' });

  const callUserTracking = (downloadLink: string) => {
    const data = getUserTracking();

    if (data) {
      const payload = {
        downloadLink,
        ip: data.ip,
        urls: data.urls,
        username: data.username,
        userAgent: data.userAgent,
        macAddress: data.macAddress,
      };

      callApi(payload);
    }
  };

  return { callUserTracking };
};

export default useUserTracking;
