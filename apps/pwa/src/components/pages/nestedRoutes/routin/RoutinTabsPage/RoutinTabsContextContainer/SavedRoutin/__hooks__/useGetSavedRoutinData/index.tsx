import useApi from '@hooks/useApi';

import { SavedRoutinResponseType } from './type';

const useGetSavedRoutinData = () => {
  const { data, isLoading } = useApi<SavedRoutinResponseType>({
    api: 'widgets/program/pages/bookmarked',
    method: 'GET',
    queryKey: ['savedRoutin'],
  });
  return { data, isLoading };
};

export default useGetSavedRoutinData;
