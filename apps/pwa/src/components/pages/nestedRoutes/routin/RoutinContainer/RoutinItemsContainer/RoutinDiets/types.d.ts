import { RoutinItemsContainerPropsType } from '../type';

export interface RoutinDietsProps extends Pick<
  RoutinItemsContainerPropsType,
  'name' | 'items' | 'compeletItemType' | 'programId'
> {}
