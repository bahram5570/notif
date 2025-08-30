import { RoutinTabNameEnum } from '../RoutinTab/enum';
import { RoutinResponseTypes } from '../__hooks__/useGetData/types';

type ItemType = Pick<RoutinResponseTypes, 'programId' | 'commentPlaceholder'>;

export interface RoutinCommentListPropsType extends ItemType {}
