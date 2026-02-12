import { KitTestModuleTypeEnums } from '../../../providers/WidgetActionsProvider';
import { KitTestsProps } from '../types';

export interface KitTestsContainerProps extends Pick<KitTestsProps, 'data' | 'gregorianDate'> {
  moduleType: KitTestModuleTypeEnums;
}

export type KitTestMainScriptsTypes = {
  [key in KitTestModuleTypeEnums]: {
    title: string;
    subTitle: string;
  };
};
