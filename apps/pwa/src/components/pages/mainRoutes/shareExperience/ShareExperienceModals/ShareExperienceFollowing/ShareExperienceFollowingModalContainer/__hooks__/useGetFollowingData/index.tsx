import { useEffect } from 'react';

import useApi from '@hooks/useApi';

import { FollowingResponseType, UseGetFollowingDataPropsType } from './type';

const useGetFollowingData = ({ userId }: UseGetFollowingDataPropsType) => {
  const api = `shareeexperience/v3/profile/following/${userId}`;

  const { callApi, data, isLoading } = useApi<FollowingResponseType>({
    api,
    method: 'GET',
    queryKey: ['followingData'],
    fetchOnMount: false,
  });

  useEffect(() => {
    if (userId) {
      callApi();
    }
  }, [userId]);

  return { data, isLoading };
};

export default useGetFollowingData;
