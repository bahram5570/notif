import { DigitalBabyCheckEnum } from '../../../providers/WidgetActionsProvider';

export interface KitTestDigitalBabyCheckProps {
  submitHandler: (babyCheckResult: number) => void;
  AnalytisId?: string;
}

export type DigitalBabyCheckListTypes = { icon: string; title: string; babyCheckResult: DigitalBabyCheckEnum };
