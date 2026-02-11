import { LoadingStatusEnum } from '@components/pages/mainRoutes/cycle/CycleContainer/__hooks__/useCycleLoadingStatus/loadingStatus.enum';
import { CycleWidgetListsTypes } from '@components/pages/mainRoutes/cycle/CycleContainer/__hooks__/useWidgetsListMaker/types';
import { WidgetCycleCardTypes } from '@repo/core/providers/WidgetActionsProvider';

export interface WidgetCycleCardProps {
  insideCycleWidgetList: CycleWidgetListsTypes | null;
  data: Pick<WidgetCycleCardTypes, 'data'>['data'] | null;
  loadingStatus: LoadingStatusEnum;
}
