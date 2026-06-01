import { useEffect, useState } from 'react';

import { PAGE_SIZE } from '@repo/core/constants/app.constants';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import { FollowQueryDataType, FollowResponseType, UseGetFollowingDataPropsType } from './type';

const useGetFollowData = ({ userId, pageType }: UseGetFollowingDataPropsType) => {
  const [pageNo, setPageNo] = useState(0);
  const { accessOptionHandler } = useShareExperienceHandlers();
  const { newQuery, updateQuery, getQuery } = useCustomReactQuery([`${pageType}Data${userId}`]);

  const followQueryData = getQuery<FollowQueryDataType>({ queryKey: [`${pageType}Data${userId}`] });

  const successHandler = (v: FollowResponseType) => {
    if (v.access.isBan) {
      return accessOptionHandler({
        isBan: v.access.isBan,
        textMessage: v.access.textMessage,
        btnText: v.access.btnText,
      });
    }
    if (followQueryData) {
      const list = { ...followQueryData, items: [...followQueryData.items, ...v.items] };
      updateQuery({ queryKey: [`${pageType}Data${userId}`], payload: list });
    } else {
      newQuery({ payload: v, queryKey: [`${pageType}Data${userId}`] });
    }
  };

  const api = `manshareeexperience/v3/profile/${pageType}/${userId}?pageSize=${PAGE_SIZE}&pageNo=${pageNo}`;

  const { callApi, data, isLoading } = usePwaApi<FollowResponseType>({
    api,
    method: 'GET',
    queryKey: [`${pageType}Data`],
    fetchOnMount: false,
    onSuccess: successHandler,
  });

  useEffect(() => {
    if (userId) {
      setPageNo(0);
    }
  }, [userId]);

  useEffect(() => {
    if (!userId) return;
    callApi();
  }, [pageNo]);

  const updatePageNo = () => {
    setPageNo((prev) => prev + 1);
  };

  const firstLoading = isLoading && pageNo === 0;
  return { data, isLoading, updatePageNo, pageNo, followQueryData, firstLoading };
};

export default useGetFollowData;
