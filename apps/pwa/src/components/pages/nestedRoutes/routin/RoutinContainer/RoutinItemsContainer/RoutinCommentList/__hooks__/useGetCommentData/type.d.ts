import { RoutinCommentListPropsType } from '../../type';

export type CommentItemType = {
  id: string;
  commentText: string;
  userId: string;
  rate: number;
  username: string;
  hasReply: boolean;
  reply: {
    writerName: string;
    wrtiterDescription: string;
    writerIcon: string;
    replyText: string;
  };
};

export type CommentsResponseTypes = {
  totalCount: number;
  items: CommentItemType[];
};

export interface UseGetCommentDataPropsType extends Pick<RoutinCommentListPropsType, 'programId'> {}
