import { useEffect, useState } from 'react';

import useApi from '@hooks/useApi';
import useRouteSequence from '@hooks/useRouteSequence';
import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';

import { FreeSubscriptionResponseTypes } from './types';

const useFreeSubscription = () => {
  const { sequenceHandler } = useRouteSequence();
  const [id, setId] = useState<string | null>(null);

  const { updateProfileDateByDellay } = useGetProfileData(() => {
    sequenceHandler([`/protected/cycle`, `/protected/cycle`, `/protected/cycle`]);
  });

  const getFreeSubscription = (v: string) => {
    setId(v);
  };

  const successHandler = ({ valid }: FreeSubscriptionResponseTypes) => {
    updateProfileDateByDellay();
  };

  const { isLoading, callApi, data } = useApi<FreeSubscriptionResponseTypes>({
    api: `info/subscribtions/free/${id}`,
    queryKey: ['freeSubscription'],
    onSuccess: successHandler,
    fetchOnMount: false,
    method: 'GET',
  });

  useEffect(() => {
    if (id !== null) {
      callApi();
    }
  }, [id]);

  const freeLoading = isLoading || data ? true : false;

  return { getFreeSubscription, freeLoading };
};

export default useFreeSubscription;
