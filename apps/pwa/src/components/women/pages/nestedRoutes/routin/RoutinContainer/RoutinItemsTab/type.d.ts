import { RoutinResponseTypes } from '../__hooks__/useGetData/types';

type ItemType = Pick<RoutinResponseTypes, 'items' | 'name'>;

export interface RoutinItemsTabPropsType extends ItemType {}
