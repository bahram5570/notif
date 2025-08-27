import { CommentsResponseTypes } from '../__hooks__/useGetCommentData/type';
import { RoutinCommentListPropsType } from '../type';

type ItemType = Pick<CommentsResponseTypes, 'items'>['items'][0];

export interface CommentItemPropsType extends ItemType {}
