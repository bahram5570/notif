import { useEffect, useState } from 'react';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { DataRepliesListTypes } from '../../../ShareExperienceCommentsModal/ShareExperienceCommentsModalContainer/CommentsList/CommentsGenerator/ReplyGenerator/__hooks__/useReplyList/types';
import { IdInfoTypes } from './types';

const useReplyDelete = () => {
  const router = useCustomRouter();
  const { updateQuery, getQuery } = useCustomReactQuery();
  const [idInfo, setIdInfo] = useState<null | IdInfoTypes>(null);

  const replyApplyHandler = ({ commentId, replyId, shareId }: IdInfoTypes) => {
    setIdInfo({ shareId, replyId, commentId });
  };

  const successHandler = () => {
    const repliesQueryKey: [string] = [`repliesList ${idInfo?.shareId} ${idInfo?.commentId}`];
    const repliesData = getQuery<DataRepliesListTypes>({ queryKey: repliesQueryKey });

    if (repliesData) {
      const newData = repliesData.repliesList.filter((item) => item.id !== idInfo?.replyId);
      repliesData.repliesList = newData;
      updateQuery({ queryKey: repliesQueryKey, payload: repliesData });
    }

    setIdInfo(null);
    router.back();
  };

  const errorHandler = () => {
    setIdInfo(null);
  };

  const api = `shareeexperience/v3/experience/${idInfo?.shareId}/comment/${idInfo?.commentId}/reply/${idInfo?.replyId}`;
  const { callApi, isLoading: isReplyLoading } = usePwaApi({
    api,
    method: 'DELETE',
    onError: errorHandler,
    onSuccess: successHandler,
  });

  useEffect(() => {
    if (idInfo !== null) {
      callApi({});
    }
  }, [idInfo]);

  return { replyApplyHandler, isReplyLoading };
};

export default useReplyDelete;
