import { RoutinCommentListPropsType } from '../type';

type ItemType = Pick<RoutinCommentListPropsType, 'commentPlaceholder' | 'programId'>;

export interface CreateCommentPropsType extends ItemType {}
