import { BabyCheckTypeEnums } from '../../../../providers/WidgetActionsProvider';
import { KitTestsContainerProps } from '../KitTestsContainer/types';

export interface KitTestBabyCheckProps extends Pick<KitTestsContainerProps, 'gregorianDate' | 'moduleType'> {}

export type BabyCkeckListTypes = { icon: string; babyCheckType: BabyCheckTypeEnums; title: string };
