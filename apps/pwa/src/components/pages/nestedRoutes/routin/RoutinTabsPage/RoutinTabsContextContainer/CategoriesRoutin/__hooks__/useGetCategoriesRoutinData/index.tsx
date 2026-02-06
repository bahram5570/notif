import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { CategorizedRoutinResponseType } from './type';

const useGetCategoriesRoutinData = () => {
  const { data, isLoading } = usePwaApi<CategorizedRoutinResponseType>({
    api: 'widgets/program/pages/categorized',
    method: 'GET',
    queryKey: ['categorizedRoutin'],
  });
  return { data, isLoading };
};

export default useGetCategoriesRoutinData;
