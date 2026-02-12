import { BabyCheckTypeEnums } from '../../../../providers/WidgetActionsProvider';

export interface TestKitModalsListsBabyCheckProps {
  data: { type: BabyCheckTypeEnums; result: number; createTime: string }[];
}
