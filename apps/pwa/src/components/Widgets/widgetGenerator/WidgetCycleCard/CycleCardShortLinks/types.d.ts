import { CycleCardTypes } from '@repo/core/providers/WidgetActionsProvider';

type ItemsTypes = Pick<CycleCardTypes, 'data'>['data']['shortcut'];
export interface CycleCardShortLinksProps extends ItemsTypes {}
