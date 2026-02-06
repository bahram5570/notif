import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { RoutinResponseTypes } from '../../../../../__hooks__/useGetData/types';
import { CommentItemType, CommentsResponseTypes } from '../../../__hooks__/useGetCommentData/type';

const useSubmit = ({ programId }: { programId: string }) => {
  const { newQuery, updateQuery, getQuery } = useCustomReactQuery();
  const toast = useCustomToast();

  const commentsData = getQuery<CommentsResponseTypes>({ queryKey: ['routinComments' + programId] });
  const routinData = getQuery<RoutinResponseTypes>({ queryKey: ['routinItems'] });

  const successHandler = (v: CommentItemType) => {
    if (commentsData) {
      const list = { ...v, items: [{ ...v }, ...commentsData.items] };

      updateQuery({ queryKey: ['routinComments' + programId], payload: list });
    } else {
      newQuery({ payload: v, queryKey: ['routinComments' + programId] });
    }

    const routinPayload = { ...routinData, commentCount: routinData?.commentCount ? routinData.commentCount + 1 : 1 };
    updateQuery({ queryKey: ['routinItems'], payload: routinPayload });

    toast.notifyToastHandler({
      type: 'success',
      message: ' نظر شما با موفقیت ثبت شد',
      position: 'bottom-center',
      style: { margin: '15px' },
    });

    const container = document.getElementById('infiniteScrollContainer') as HTMLDivElement;
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const { callApi, isLoading } = usePwaApi({
    api: 'widgets/program/comment',
    method: 'POST',
    onSuccess: (v: CommentItemType) => successHandler(v),
  });

  const submitHandler = ({ commentText }: { commentText: string }) => {
    const payload = {
      programId,
      commentText,
    };

    callApi(payload);
  };

  return { submitHandler, isLoading };
};

export default useSubmit;
