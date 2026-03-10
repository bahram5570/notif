import { useState } from 'react';

import { pwaHttp } from '@repo/core/utils/pwaHttp';

import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';
import { useRouteSequence } from '@repo/core/hooks/useRouteSequence';

import { FreeSubscriptionResponseTypes } from './types';

const useFreeSubscription = () => {
  const { sequenceHandler } = useRouteSequence();
  const [freeLoading, setFreeLoading] = useState(false);

  const { updateProfileDateByDellay } = useGetProfileData(() => {
    sequenceHandler([`/protected/partner`, `/protected/partner`, `/protected/partner`]);
  });

  const getFreeSubscription = async (id: string) => {
    setFreeLoading(true);

    const { data } = await pwaHttp<FreeSubscriptionResponseTypes>({
      url: `info/subscribtions/free/${id}`,
      method: 'GET',
    });

    if (data?.valid) {
      updateProfileDateByDellay();
    }

    setFreeLoading(false);
  };

  return { getFreeSubscription, freeLoading };
};

export default useFreeSubscription;
