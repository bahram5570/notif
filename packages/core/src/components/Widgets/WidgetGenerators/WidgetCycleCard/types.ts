import {
  CycleLoadingStatusEnum,
  WidgetCycleCardTypes,
  WidgetsListTypes,
} from '../../../../providers/WidgetActionsProvider';

export interface WidgetCycleCardProps {
  data: Pick<WidgetCycleCardTypes, 'data'>['data'] | null;
  insideCycleWidgetList: WidgetsListTypes | null;
  loadingStatus: CycleLoadingStatusEnum;
}
