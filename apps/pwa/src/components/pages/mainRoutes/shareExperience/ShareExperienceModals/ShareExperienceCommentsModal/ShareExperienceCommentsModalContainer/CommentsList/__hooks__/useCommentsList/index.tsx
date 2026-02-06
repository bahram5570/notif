import { useEffect, useState } from 'react';

import { EXPERIENCES_COMMENTS_PAGE_SIZE } from '@components/pages/mainRoutes/shareExperience/constants';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import useShareExperiencePageNo from '../../../__hooks__/useShareExperiencePageNo';
import { CommentsIdTypes, CommentsResponseTypes } from './types';

const useCommentsList = (id: CommentsIdTypes) => {
  const [pageNo, setPageNo] = useState(0);
  const { updatePageNo: changePageNoHandler } = useShareExperiencePageNo(id);
  const { newQuery, updateQuery, getQuery } = useCustomReactQuery(['comments ' + id]);

  const commentsData = getQuery<CommentsResponseTypes>({ queryKey: ['comments ' + id] });

  const successHandler = (v: CommentsResponseTypes) => {
    if (commentsData) {
      const list = { ...v, comments: [...commentsData.comments, ...v.comments] };
      updateQuery({ queryKey: ['comments ' + id], payload: list });
    } else {
      newQuery({ payload: v, queryKey: ['comments ' + id] });
    }
  };

  const { callApi, isLoading } = usePwaApi<CommentsResponseTypes>({
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: ['comments' + pageNo + id],
    api: `shareeexperience/v3/experience/${id}/comments/${pageNo}/${EXPERIENCES_COMMENTS_PAGE_SIZE}`,
  });

  const updatePageNo = () => {
    setPageNo((prev) => prev + 1);
    changePageNoHandler(pageNo + 1);
  };

  useEffect(() => {
    callApi();
  }, [pageNo, id]);

  const isFirstLoad = isLoading && !commentsData;

  return { isLoading, commentsData, updatePageNo, pageNo, isFirstLoad };
};

export default useCommentsList;
