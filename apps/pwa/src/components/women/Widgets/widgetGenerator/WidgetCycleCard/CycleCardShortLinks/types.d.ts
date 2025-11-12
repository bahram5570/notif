import { CycleCardTypes } from '@providers/WidgetActionsProvider/widgetCards';

type ItemsTypes = Pick<CycleCardTypes, 'data'>['data']['shortcut'];
export interface CycleCardShortLinksProps extends ItemsTypes {}
