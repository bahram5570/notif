import { CommentItemPropsType } from '../type';

type ItemType = Pick<CommentItemPropsType, 'rate'>;

export interface CommentRatePropsType extends ItemType {}
