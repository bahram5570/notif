import { ClickHandlerType, RoutinDietsGeneratorProps } from '../types';

type ItemType = Pick<RoutinDietsGeneratorProps, 'item' | 'programId'>;

export interface RoutinDietsCheckboxPropsType extends ItemType, ClickHandlerType {}
