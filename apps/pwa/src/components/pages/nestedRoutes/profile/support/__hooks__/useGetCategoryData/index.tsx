import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { SupportCategoryResponseTypes } from './types';

const useGetCategoryData = (categoryId?: string) => {
  const { isLoading: categoryLoading, data: categoryData } = usePwaApi<SupportCategoryResponseTypes>({
    method: 'GET',
    api: `support/category/${categoryId || ''}`,
    queryKey: [`support/category/${categoryId || ''}`],
  });

  return { categoryLoading, categoryData };
};

export default useGetCategoryData;
