import { KitTestModuleTypeEnums } from '@repo/core/providers/WidgetActionsProvider';

export interface TestKitModalsContainerListProps {
  gregorianDate: string;
  moduleType: KitTestModuleTypeEnums;
}

export interface TestKitModalsPropsType {
  onComplete?: () => void;
}
