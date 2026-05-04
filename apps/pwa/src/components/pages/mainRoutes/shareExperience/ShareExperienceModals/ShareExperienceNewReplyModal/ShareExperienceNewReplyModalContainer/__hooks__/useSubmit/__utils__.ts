import { CommentsListTypes, ShareExperienceStateEnum } from '@repo/core/components/ShareExperience';
import { currentDate } from '@repo/core/utils/dates';

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
