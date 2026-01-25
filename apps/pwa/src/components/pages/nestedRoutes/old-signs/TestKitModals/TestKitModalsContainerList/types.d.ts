import { KitTestModuleTypeEnums } from '@components/KitTests/enum';

export interface TestKitModalsContainerListProps {
  gregorianDate: string;
  moduleType: KitTestModuleTypeEnums;
}

export interface TestKitModalsPropsType {
  onComplete?: () => void;
}
