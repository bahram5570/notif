import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { CommentItemType, CommentsResponseTypes } from '../../../__hooks__/useGetCommentData/type';

const useSubmit = ({ programId }: { programId: string }) => {
  const { newQuery, updateQuery, getQuery } = useCustomReactQuery(['routinComments' + programId]);

  const commentsData = getQuery<CommentsResponseTypes>({ queryKey: ['routinComments' + programId] });

  const successHandler = (v: CommentItemType) => {
    if (commentsData) {
      const list = { ...v, items: [...commentsData.items, { ...v }] };

      updateQuery({ queryKey: ['routinComments' + programId], payload: list });
    } else {
      newQuery({ payload: v, queryKey: ['routinComments' + programId] });
    }
  };

  const { callApi, isLoading } = useApi({
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
