import { CommentsResponseTypes } from '@repo/core/components/ShareExperience';

type CommentTypes = Pick<CommentsResponseTypes, 'comments'>['comments'][0];
type DataType = Pick<CommentsResponseTypes, 'canSendComment'>;
export interface CommentsGeneratorProps extends CommentTypes, DataType {
  shareId: string;
  isFirstIndex: boolean;
}
