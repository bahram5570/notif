import { CyclePhaseEnum } from '@repo/core/providers/WidgetActionsProvider';

export type PregnancySettingsListTypes = {
  title: string;
  description: string;
  phaseType: CyclePhaseEnum;
}[];
