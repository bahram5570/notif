import { WidgetBabyCheckHistoryCardTypes } from '@repo/core/providers/WidgetActionsProvider';

type DetailTypes = Pick<WidgetBabyCheckHistoryCardTypes, 'data'>['data']['items'][0]['details'][0];
export interface TestGeneratorProps extends DetailTypes {}
