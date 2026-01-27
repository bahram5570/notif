import { RoutinResponseTypes } from '../__hooks__/useGetData/types';

type ItemType = Pick<RoutinResponseTypes, 'rate'>;
export interface RoutinFooterPropsType extends ItemType {}

export interface ReviewCommentPropsType extends RoutinFooterPropsType {}
