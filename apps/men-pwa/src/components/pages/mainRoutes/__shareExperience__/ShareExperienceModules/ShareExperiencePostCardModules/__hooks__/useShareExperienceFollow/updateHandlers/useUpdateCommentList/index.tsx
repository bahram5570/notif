import { CommentsResponseTypes } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

import { UpdateCommentListHandlerType } from './type';

const useUpdateCommentList = () => {
  const { updateQuery, getQuery } = useCustomReactQuery();

  const updateCommentListHandler: UpdateCommentListHandlerType = (v) => {
    const commentsData = getQuery<CommentsResponseTypes>({ queryKey: ['comments ' + v.experienceId] });
    if (commentsData) {
      updateQuery({
        queryKey: ['comments ' + v.experienceId],
        payload: { ...commentsData, isFollow: !commentsData.isFollow },
      });
    }
  };

  return { updateCommentListHandler };
};

export default useUpdateCommentList;
