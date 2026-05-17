import { useEffect, useRef, useState } from 'react';

import { CommentsResponseTypes, PageInfoType } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import { UseCommentsListProps } from './types';

const useCommentsList = ({ id }: UseCommentsListProps) => {
  const [pageInfo, setPageInfo] = useState<PageInfoType | null>(null);
  const { accessOptionHandler } = useShareExperienceHandlers();
  const { newQuery, updateQuery, getQuery } = useCustomReactQuery(['comments ' + id]);
  const commentsData = getQuery<CommentsResponseTypes>({ queryKey: ['comments ' + id] });
  const requestLockRef = useRef(false);

  const successHandler = (v: CommentsResponseTypes) => {
    if (v.access.isBan) {
      return accessOptionHandler({
        isBan: v.access.isBan,
        textMessage: v.access.textMessage,
        btnText: v.access.btnText,
      });
    }

    requestLockRef.current = false;
    setPageInfo(v.page);
    if (commentsData) {
      const list = { ...v, comments: [...commentsData.comments, ...v.comments] };
      updateQuery({ queryKey: ['comments ' + id], payload: list });
    } else {
      newQuery({ payload: v, queryKey: ['comments ' + id] });
    }
  };

  const { callApi, isLoading: loading } = usePwaApi<CommentsResponseTypes>({
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: ['comments' + id],
    api: `shareeexperience/v3/experience/${id}/comments/first`,
  });

  const { callApi: getNextPage, isLoading: nextPageLoading } = usePwaApi<CommentsResponseTypes>({
    api: pageInfo?.lastId ? `shareeexperience/v3/experience/${id}/comments/nextpage/${pageInfo.lastId}` : '',
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: ['comments' + pageInfo?.lastId],
  });

  useEffect(() => {
    if (id) {
      callApi();
    }
  }, [id]);

  const updateList = () => {
    if (!pageInfo?.hasNext) return;

    if (requestLockRef.current) return;

    requestLockRef.current = true;

    getNextPage();
  };

  const isFirstLoad = loading && !commentsData;
  const isLoading = nextPageLoading || loading;

  return { isLoading, commentsData, updateList, isFirstLoad };
};

export default useCommentsList;
