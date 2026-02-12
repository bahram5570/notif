import {
  WidgetCirculeCycleCardTypes,
  WidgetCycleCardTypes,
  WidgetsListTypes,
} from '@repo/core/providers/WidgetActionsProvider';

export interface UseWidgetsListMakerProps {
  widgets: WidgetsListTypes | undefined;
}

export type CycleWidgetListsTypes = WidgetsListTypes | null;

export type CycleCardDataTypes = Pick<WidgetCycleCardTypes, 'data'>['data'] | null;

export type CirculeCycleCardDataTypes = Pick<WidgetCirculeCycleCardTypes, 'data'>['data'] | null;
