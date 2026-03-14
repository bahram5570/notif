import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { PAGE_NO } from '../../../MemoryPage/__hooks__/useGetData/constants';
import { ResponsePropsType } from '../../../MemoryPage/__hooks__/useGetData/type';

const useGetData = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { refetchQuery } = useCustomReactQuery(['meories']);

  const partnerName = getQueryParams('partnerName') || undefined;

  const memoryId = getQueryParams('memoryId');
  const pageNo = typeof sessionStorage === 'undefined' ? null : sessionStorage.getItem(PAGE_NO);
  const currentPage = pageNo ? pageNo : '0';

  const { data } = usePwaApi<ResponsePropsType>({
    api: `memory/${currentPage}/10`,
    method: 'GET',
    queryKey: ['memoryDetail'],
  });

  const memoryData = data?.memories.find((memory) => memory.id === memoryId);

  const resteMemory = () => {
    refetchQuery({ queryKey: ['meories'] });
  };

  return { memoryData, resteMemory, partnerName };
};

export default useGetData;
