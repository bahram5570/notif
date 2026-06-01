import { useEffect, useState } from 'react';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';
import { useRouter } from 'next/navigation';

import { DataRepliesListTypes } from '../../../ShareExperienceCommentsModal/ShareExperienceCommentsModalContainer/CommentsList/CommentsGenerator/ReplyGenerator/__hooks__/useReplyList/types';
import { SuccessResponseType } from '../useCommentDelete/types';
import { IdInfoTypes } from './types';

const useReplyDelete = () => {
  const router = useRouter();
  const { updateQuery, getQuery } = useCustomReactQuery();
  const { accessOptionHandler } = useShareExperienceHandlers();
  const [idInfo, setIdInfo] = useState<null | IdInfoTypes>(null);

  const replyApplyHandler = ({ commentId, replyId, shareId }: IdInfoTypes) => {
    setIdInfo({ shareId, replyId, commentId });
  };

  const successHandler = (v: SuccessResponseType) => {
    if (v.access.isBan) {
      return accessOptionHandler({
        isBan: v.access.isBan,
        textMessage: v.access.textMessage,
        btnText: v.access.btnText,
      });
    }
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

  const api = `manshareeexperience/v3/experience/${idInfo?.shareId}/comment/${idInfo?.commentId}/reply/${idInfo?.replyId}`;
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
