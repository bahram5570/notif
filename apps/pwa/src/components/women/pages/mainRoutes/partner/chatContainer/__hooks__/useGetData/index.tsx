import { useEffect } from 'react';

import useApi from '@hooks/useApi';
import { useRouter } from 'next/navigation';

import { ResponsePropsType, UseGetDataPropsType } from './type';

const useGetData = ({ id }: UseGetDataPropsType) => {
  const router = useRouter();

  const { data, isLoading } = useApi<ResponsePropsType>({
    api: `challenge/${id}/chat`,
    method: 'GET',
    queryKey: [`chat-${id}`],
  });

  useEffect(() => {
    if (!isLoading && !data) {
      router.replace('/not-found');
    }
  }, [isLoading, data]);

  return { data, isLoading };
};

export default useGetData;
