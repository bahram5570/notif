import { CommentsResponseTypes } from '@repo/core/components/ShareExperience';

export type IdInfoTypes = { shareId: string; commentId: string; replyId: string };

type CommentTypes = Pick<CommentsResponseTypes, 'comments'>['comments'][0];
type DataType = Pick<CommentsResponseTypes, 'canSendComment'>;
export interface CommentsGeneratorProps extends CommentTypes, DataType {
  shareId: string;
  isFirstIndex: boolean;
}

type ItemsTypes = Pick<CommentsGeneratorProps, 'replies' | 'repliesCount' | 'userId'>;
export interface ReplyGeneratorProps extends ItemsTypes {
  shareId: string;
  commentId: string;
  commentName: string;
}
type RepliesListTypes = Pick<UseReplyListProps, 'replies'>['replies'];

export type DataRepliesListTypes = { repliesList: RepliesListTypes };

export type RepliesListResponseTypes = {
  valid: boolean;
  totalCount: number;
  replies: RepliesListTypes;
};
