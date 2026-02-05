import { useEffect, useState } from 'react';

import useApi from '@hooks/useApi';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

import { PAGE_SIZE } from './constants';
import { CommentsResponseTypes, UseGetCommentDataPropsType } from './type';

const useGetCommentData = ({ programId }: UseGetCommentDataPropsType) => {
  const [pageNo, setPageNo] = useState(0);

  const { newQuery, updateQuery, getQuery } = useCustomReactQuery(['routinComments' + programId]);

  const commentsData = getQuery<CommentsResponseTypes>({ queryKey: ['routinComments' + programId] });

  const successHandler = (v: CommentsResponseTypes) => {
    if (commentsData) {
      const list = { ...v, items: [...commentsData.items, ...v.items] };
      updateQuery({ queryKey: ['routinComments' + programId], payload: list });
    } else {
      newQuery({ payload: v, queryKey: ['routinComments' + programId] });
    }
  };

  const { callApi, isLoading } = useApi<CommentsResponseTypes>({
    api: `widgets/program/comment?programId=${programId}&pageNo=${pageNo}&pageSize=${PAGE_SIZE}`,
    method: 'GET',
    queryKey: ['routinComments'],
    onSuccess: successHandler,
    fetchOnMount: true,
  });

  const updatePageNo = () => {
    setPageNo((prev) => prev + 1);
  };

  useEffect(() => {
    callApi();
  }, [pageNo]);

  return { commentsData, isLoading, updatePageNo, pageNo };
};

export default useGetCommentData;
