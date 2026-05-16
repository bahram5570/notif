import { useEffect } from 'react';

import { CommentsResponseTypes, EXPERIENCES_COMMENTS_PAGE_SIZE } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import useShareExperiencePageNo from '../../../__hooks__/useShareExperiencePageNo';
import { UseCommentsListProps } from './types';

const useCommentsList = ({ id }: UseCommentsListProps) => {
  const { updatePageNo: changePageNoHandler, pageNoInfo } = useShareExperiencePageNo(id);
  const { accessOptionHandler } = useShareExperienceHandlers();
  const { newQuery, updateQuery, getQuery } = useCustomReactQuery(['comments ' + id]);
  const commentsData = getQuery<CommentsResponseTypes>({ queryKey: ['comments ' + id] });
  const pageNo = pageNoInfo ? pageNoInfo.pageNo : 0;

  const successHandler = (v: CommentsResponseTypes) => {
    if (v.access.isBan) {
      return accessOptionHandler({
        isBan: v.access.isBan,
        textMessage: v.access.textMessage,
        btnText: v.access.btnText,
      });
    }

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
    changePageNoHandler(pageNo + 1);
  };

  useEffect(() => {
    if (!isLoading) {
      callApi();
    }
  }, [pageNo, id, isLoading]);

  const isFirstLoad = isLoading && !commentsData;

  return { isLoading, commentsData, updatePageNo, pageNo, isFirstLoad };
};

export default useCommentsList;
