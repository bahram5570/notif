import {
  CycleLoadingStatusEnum,
  WidgetCirculeCycleCardTypes,
  WidgetsListTypes,
} from '../../../../providers/WidgetActionsProvider';

export interface WidgetCirculeCycleCardProps {
  data: Pick<WidgetCirculeCycleCardTypes, 'data'>['data'] | null;
  insideCycleWidgetList: WidgetsListTypes | null;
  loadingStatus: CycleLoadingStatusEnum;
}
