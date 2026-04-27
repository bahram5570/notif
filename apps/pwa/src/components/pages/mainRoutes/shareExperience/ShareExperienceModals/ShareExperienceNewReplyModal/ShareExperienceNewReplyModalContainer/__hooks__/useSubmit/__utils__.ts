import { ShareExperienceStateEnum } from '@repo/core/components/ShareExperience';
import { currentDate } from '@repo/core/utils/dates';

import { CommentsListTypes } from '../../../../ShareExperienceCommentsModal/ShareExperienceCommentsModalContainer/CommentsList/__hooks__/useCommentsList/types';
import { NewCommentMakerTypes } from './types';

export const newCommentMaker: NewCommentMakerTypes = ({ avatar, name, text, commentId, shareId }) => {
  const { gDate, time } = currentDate();

  const result: CommentsListTypes[0] = {
    state: ShareExperienceStateEnum.None,
    createTime: `${gDate} ${time}`,
    approvedProfile: false,
    selfComment: true,
    isDelete: false,
    repliesCount: 0,
    userId: shareId,
    id: commentId,
    isEdit: false,
    likeCount: 0,
    disliked: 0,
    replies: [],
    image: '',
    avatar,
    name,
    text,
  };

  return result;
};
