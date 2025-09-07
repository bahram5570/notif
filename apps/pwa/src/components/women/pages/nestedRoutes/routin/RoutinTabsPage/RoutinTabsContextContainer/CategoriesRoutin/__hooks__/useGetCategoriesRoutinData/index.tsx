import useApi from '@hooks/useApi';

import { CategorizedRoutinResponseType } from './type';

const useGetCategoriesRoutinData = () => {
  const { data, isLoading } = useApi<CategorizedRoutinResponseType>({
    api: 'widgets/program/pages/categorized',
    method: 'GET',
    queryKey: ['categorizedRoutin'],
  });
  return { data, isLoading };
};

export default useGetCategoriesRoutinData;
