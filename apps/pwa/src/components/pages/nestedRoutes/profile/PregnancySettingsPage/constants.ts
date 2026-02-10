import { CyclePhaseEnum } from '@repo/core/providers/WidgetActionsProvider';

import { PregnancySettingsListTypes } from './types';

export const PREGNANCY_SETTINGS_LIST: PregnancySettingsListTypes = [
  { phaseType: CyclePhaseEnum.EditPregnancyCycle, title: 'ویرایش بارداری', description: 'ویرایش سن و هفته بارداری' },
  { phaseType: CyclePhaseEnum.PeriodTracker, title: 'ختم بارداری', description: 'پایان بارداری و ورد به فاز قاعدگی' },
  { phaseType: CyclePhaseEnum.Breastfeeding, title: 'زایمان', description: 'زایمان و ورود به فاز پس‌ از زایمان' },
];
