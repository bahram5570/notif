import { useEffect } from 'react';

import useApi from '@hooks/useApi';

import { FollowerResponseType, UseGetFollowerDataPropsType } from './type';

const useGetFollowerData = ({ userId }: UseGetFollowerDataPropsType) => {
  const api = `shareeexperience/v3/profile/followers/${userId}`;

  const { callApi, data, isLoading } = useApi<FollowerResponseType>({
    api,
    method: 'GET',
    queryKey: ['followersData'],
    fetchOnMount: false,
  });

  useEffect(() => {
    if (userId) {
      callApi();
    }
  }, [userId]);

  return { data, isLoading };
};

export default useGetFollowerData;
