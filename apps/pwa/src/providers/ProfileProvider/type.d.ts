import { CyclePhaseEnum } from '@repo/core/providers/WidgetActionsProvider';

import { ProfileResponseTypes } from './__hooks__/useGetProfileData/type';

export type ProfileContextTypes = {
  profileData: ProfileResponseTypes | undefined;
  phase: CyclePhaseEnum | undefined;
  isLoading: boolean;
};
