import { WidgetCirculeCycleCardTypes } from '@repo/core/providers/WidgetActionsProvider';

type ItemsTypes = Pick<WidgetCirculeCycleCardTypes, 'data'>['data']['shortcut'];
export interface CycleCardShortLinksProps extends ItemsTypes {}
