import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { RoutinResponseTypes } from '../../../../../__hooks__/useGetData/types';
import { CommentItemType, CommentsResponseTypes } from '../../../__hooks__/useGetCommentData/type';
import { SHOW_SUCCESS_CREATE_COMMENT } from '../../../constants';

const useSubmit = ({ programId }: { programId: string }) => {
  const { newQuery, updateQuery, getQuery } = useCustomReactQuery();

  const commentsData = getQuery<CommentsResponseTypes>({ queryKey: ['routinComments' + programId] });
  const routinData = getQuery<RoutinResponseTypes>({ queryKey: ['routinItems'] });

  const successHandler = (v: CommentItemType) => {
    localStorage.setItem(SHOW_SUCCESS_CREATE_COMMENT, 'true');
    if (commentsData) {
      const list = { ...v, items: [{ ...v }, ...commentsData.items] };

      updateQuery({ queryKey: ['routinComments' + programId], payload: list });
    } else {
      newQuery({ payload: v, queryKey: ['routinComments' + programId] });
    }

    const routinPayload = { ...routinData, commentCount: routinData?.commentCount ? routinData.commentCount + 1 : 1 };
    updateQuery({ queryKey: ['routinItems'], payload: routinPayload });
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
