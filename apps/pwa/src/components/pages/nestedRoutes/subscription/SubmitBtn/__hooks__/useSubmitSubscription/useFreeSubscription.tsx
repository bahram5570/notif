import { useEffect, useState } from 'react';

import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouteSequence } from '@repo/core/hooks/useRouteSequence';

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

  const { isLoading, callApi, data } = usePwaApi<FreeSubscriptionResponseTypes>({
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
