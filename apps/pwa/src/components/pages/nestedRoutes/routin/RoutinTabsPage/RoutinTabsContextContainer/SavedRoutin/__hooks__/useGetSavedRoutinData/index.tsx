import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { SavedRoutinResponseType } from './type';

const useGetSavedRoutinData = () => {
  const { data, isLoading } = usePwaApi<SavedRoutinResponseType>({
    api: 'widgets/program/pages/bookmarked',
    method: 'GET',
    queryKey: ['savedRoutin'],
  });
  return { data, isLoading };
};

export default useGetSavedRoutinData;
