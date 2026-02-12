import { BabyCheckTypeEnums, KitTestModuleTypeEnums } from '../../../providers/WidgetActionsProvider';

export interface TestKitModalsBabyCheckProps {
  moduleType: KitTestModuleTypeEnums;
  babyCheckType: BabyCheckTypeEnums;
  onComplete?: () => void;
  gregorianDate: string;
  AnalytisId?: string;
}
