import { useEffect } from 'react';

import useApi from '@hooks/useApi';
import { useRouter } from 'next/navigation';

import { PAGE_NO } from '../../../MemoryContainer/__hooks__/useGetData/constants';
import { ResponsePropsType } from '../../../MemoryContainer/__hooks__/useGetData/type';
import { UseGetDataPropsType } from './type';

const useGetData = ({ memoryId }: UseGetDataPropsType) => {
  const router = useRouter();
  const pageNo = sessionStorage.getItem(PAGE_NO);
  const currentPage = pageNo ? pageNo : '0';

  const { data, isLoading } = useApi<ResponsePropsType>({
    api: `memory/${currentPage}/10`,
    method: 'GET',
    queryKey: ['memoryDetail'],
  });

  const findCurrentMemory = data?.memories.find((memory) => memory.id === memoryId) ?? null;

  useEffect(() => {
    if (!isLoading && data && !findCurrentMemory) {
      router.replace('/not-found');
    }
  }, [isLoading, data, findCurrentMemory]);

  return { findCurrentMemory, isLoading };
};

export default useGetData;
