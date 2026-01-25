import { WidgetCirculeCycleCardTypes } from '@providers/WidgetActionsProvider/widgetCards';

type ItemsTypes = Pick<WidgetCirculeCycleCardTypes, 'data'>['data']['shortcut'];
export interface CycleCardShortLinksProps extends ItemsTypes {}
