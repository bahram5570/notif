import { LoadingStatusEnum } from '@components/pages/mainRoutes/cycle/CycleContainer/__hooks__/useCycleLoadingStatus/loadingStatus.enum';
import { CycleWidgetListsTypes } from '@components/pages/mainRoutes/cycle/CycleContainer/__hooks__/useWidgetsListMaker/types';
import { CycleCardTypes } from '@repo/core/providers/WidgetActionsProvider';

export interface WidgetCycleCardProps {
  insideCycleWidgetList: CycleWidgetListsTypes | null;
  data: Pick<CycleCardTypes, 'data'>['data'] | null;
  loadingStatus: LoadingStatusEnum;
}
