import { ClickHandlerType, RoutinDietsGeneratorProps } from '../types';

type ItemType = Pick<RoutinDietsGeneratorProps, 'item' | 'programId' | 'index'>;

export interface RoutinDietsCheckboxPropsType extends ItemType, ClickHandlerType {}
