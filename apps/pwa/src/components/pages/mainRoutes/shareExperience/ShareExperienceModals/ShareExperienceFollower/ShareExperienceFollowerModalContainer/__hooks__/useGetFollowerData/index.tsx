import { useEffect, useState } from 'react';

import { PAGE_SIZE } from '@components/infiniteScrollContainer/constatns';
import useApi from '@hooks/useApi';

import { FollowerResponseType, UseGetFollowerDataPropsType } from './type';

const useGetFollowerData = ({ userId }: UseGetFollowerDataPropsType) => {
  const [pageNo, setPageNo] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const api = `shareeexperience/v3/profile/followers/${userId}?pageSize=${PAGE_SIZE}&pageNo=${pageNo}`;

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

  const updatePageNo = () => {
    setPageNo((prev) => prev + 1);
  };

  const firstLoading = isLoading && pageNo === 0;

  return { data, isLoading, totalCount, pageNo, updatePageNo, firstLoading };
};

export default useGetFollowerData;
