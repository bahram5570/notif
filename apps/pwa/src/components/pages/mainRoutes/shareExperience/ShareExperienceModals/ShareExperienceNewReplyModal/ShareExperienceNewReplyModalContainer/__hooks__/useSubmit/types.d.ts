import { AccessType } from '@repo/core/components/ShareExperience';

import {
  CommentsListTypes,
  CommentsRepliesTypes,
} from '../../../../ShareExperienceCommentsModal/ShareExperienceCommentsModalContainer/__hooks__/useCommentsList/types';
import { NewReplyQueriesTypes } from '../../../types';

export interface UseSubmitProps {
  text: string;
  data: NewReplyQueriesTypes;
}

export type NewCommentMakerTypes = (props: {
  commentId: string;
  shareId: string;
  avatar: string;
  text: string;
  name: string;
}) => CommentsListTypes[0];

export type NewReplyResponseTypes = AccessType & {
  reply: CommentsRepliesTypes[0];
};

export type NewCommentResponseTypes = AccessType & {
  commentId: string;
  toast: string;
  valid: boolean;
};
