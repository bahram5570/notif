import { RoutinResponseTypes } from '../__hooks__/useGetData/types';

type ItemType = Pick<RoutinResponseTypes, 'items' | 'name' | 'cta'>;

export interface RoutinItemsTabPropsType extends ItemType {}
