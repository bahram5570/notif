import { LoadingStatusEnum } from '@components/pages/mainRoutes/cycle/CycleContainer/__hooks__/useCycleLoadingStatus/loadingStatus.enum';
import { CycleWidgetListsTypes } from '@components/pages/mainRoutes/cycle/CycleContainer/__hooks__/useWidgetsListMaker/types';
import { WidgetCirculeCycleCardTypes } from '@repo/core/providers/WidgetActionsProvider';

export interface WidgetCirculeCycleCardProps {
  data: Pick<WidgetCirculeCycleCardTypes, 'data'>['data'] | null;
  insideCycleWidgetList: CycleWidgetListsTypes | null;
  loadingStatus: LoadingStatusEnum;
}
