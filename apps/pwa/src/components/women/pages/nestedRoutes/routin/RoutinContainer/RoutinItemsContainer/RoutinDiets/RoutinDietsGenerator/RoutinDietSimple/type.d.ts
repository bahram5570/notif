import { ClickHandlerType, RoutinDietsGeneratorProps } from '../types';

type ItemType = Pick<RoutinDietsGeneratorProps, 'item'>;

export interface RoutinDietsSimplePropsType extends ItemType, ClickHandlerType {}
