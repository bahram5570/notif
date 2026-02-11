import { WidgetCycleCardTypes } from '@repo/core/providers/WidgetActionsProvider';

type ItemsTypes = Pick<WidgetCycleCardTypes, 'data'>['data']['shortcut'];
export interface CycleCardShortLinksProps extends ItemsTypes {}
