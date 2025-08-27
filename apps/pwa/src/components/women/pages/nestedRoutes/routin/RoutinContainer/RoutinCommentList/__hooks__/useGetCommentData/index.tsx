import { useState } from 'react';

import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { PAGE_SIZE } from './constants';
import { CommentsResponseTypes, UseGetCommentDataPropsType } from './type';

const useGetCommentData = ({ programId }: UseGetCommentDataPropsType) => {
  const [pageNo, setPageNo] = useState(0);

  const { newQuery, updateQuery, getQuery } = useCustomReactQuery(['routinComments' + programId]);

  const commentsData = getQuery<CommentsResponseTypes>({ queryKey: ['routinComments' + programId] });

  const successHandler = (v: CommentsResponseTypes) => {
    if (commentsData) {
      const list = { ...v, comments: [...commentsData.items, ...v.items] };
      updateQuery({ queryKey: ['routinComments' + programId], payload: list });
    } else {
      newQuery({ payload: v, queryKey: ['routinComments' + programId] });
    }
  };

  const { callApi, isLoading } = useApi<CommentsResponseTypes>({
    api: `widgets/program/comment?programId=${programId}&pageNo=${pageNo}&pageSize=${PAGE_SIZE}`,
    method: 'GET',
    queryKey: ['routinComments' + programId],
    fetchOnMount: false,
    onSuccess: successHandler,
  });

  const updatePageNo = (page: number) => {
    setPageNo(page);
  };

  return { commentsData, isLoading, callApi, updatePageNo, pageNo };
};

export default useGetCommentData;
