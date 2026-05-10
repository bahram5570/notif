import { useEffect } from 'react';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { KnowledgeResponseType } from './type';

const useGetKnowledgeData = () => {
  const { callApi, isLoading, data } = usePwaApi<KnowledgeResponseType>({ api: 'info/posts', method: 'POST' });

  useEffect(() => {
    callApi({});
  }, []);

  return { isLoading, data };
};

export default useGetKnowledgeData;
