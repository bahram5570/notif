import { WidgetOvulationHistoryCardTypes } from '@repo/core/providers/WidgetActionsProvider';

type DetailTypes = Pick<WidgetOvulationHistoryCardTypes, 'data'>['data']['items'][0]['details'][0];
export interface TestGeneratorProps extends DetailTypes {}
