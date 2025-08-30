import { RoutinItemsTypes } from '../../__hooks__/useGetData/types';
import { RoutinDietsProps } from '../types';

type ItemType = Pick<RoutinDietsProps, 'compeletItemType' | 'programId'>;

export interface RoutinDietsGeneratorProps extends ItemType {
  item: RoutinItemsTypes;
  index: number;
  isLastItem: boolean;
}

export type ClickHandlerType = {
  onClick: () => void;
};
