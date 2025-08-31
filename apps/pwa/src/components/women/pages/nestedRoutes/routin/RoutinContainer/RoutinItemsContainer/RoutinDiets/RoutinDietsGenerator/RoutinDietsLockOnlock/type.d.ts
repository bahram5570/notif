import { ClickHandlerType, RoutinDietsGeneratorProps } from '../types';

type ItemType = Pick<RoutinDietsGeneratorProps, 'item'>;

export interface RoutinDietsLockOnlockPropsType extends ItemType, ClickHandlerType {}
