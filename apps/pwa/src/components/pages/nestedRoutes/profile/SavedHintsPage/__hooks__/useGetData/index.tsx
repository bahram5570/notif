import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { SavedHintsResponseTypes } from './types';

const useGetData = () => {
  const { isLoading, data } = usePwaApi<SavedHintsResponseTypes>({
    method: 'GET',
    queryKey: ['savedHints'],
    api: 'archive/hint/bookmark',
  });

  return { isLoading, data };
};

export default useGetData;
