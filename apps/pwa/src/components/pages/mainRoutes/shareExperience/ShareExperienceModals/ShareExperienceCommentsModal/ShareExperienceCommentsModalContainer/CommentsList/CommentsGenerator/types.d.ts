import { CommentsResponseTypes } from '../__hooks__/useCommentsList/types';

type CommentTypes = Pick<CommentsResponseTypes, 'comments'>['comments'][0];
type DataType = Pick<CommentsResponseTypes, 'CanSendReply'>;
export interface CommentsGeneratorProps extends CommentTypes, DataType {
  shareId: string;
  isFirstIndex: boolean;
}
