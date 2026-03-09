import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { MemoriesDataType } from '../../../MemoryPage/__hooks__/useGetData/type';

const useGetData = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const memoryId = getQueryParams('memoryId');
  const { getQuery, refetchQuery } = useCustomReactQuery(['meories']);

  const memoriesData = getQuery<MemoriesDataType>({ queryKey: ['meories'] });
  const memoryData = memoriesData?.memories.find((memory) => memory.id === memoryId);

  const resteMemory = () => {
    refetchQuery({ queryKey: ['meories'] });
  };

  return { memoryData, resteMemory };
};

export default useGetData;
