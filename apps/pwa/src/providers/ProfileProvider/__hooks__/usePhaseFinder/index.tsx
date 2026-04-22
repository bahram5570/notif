import { useMemo } from 'react';

import { InstallationPurposeEnum } from '@repo/core/constants/user.constants';
import { CyclePhaseEnum } from '@repo/core/providers/WidgetActionsProvider';

import { UsePhaseFinderTypes } from './types';

const usePhaseFinder = ({ periodStatus, status }: UsePhaseFinderTypes) => {
  const result = useMemo(() => {
    if (status !== undefined && periodStatus !== undefined) {
      if (
        status === InstallationPurposeEnum.tracker.status &&
        periodStatus === InstallationPurposeEnum.tracker.periodStatus
      ) {
        return CyclePhaseEnum.PeriodTracker;
      }

      if (
        status === InstallationPurposeEnum.intention.status &&
        periodStatus === InstallationPurposeEnum.intention.periodStatus
      ) {
        return CyclePhaseEnum.PeriodIntention;
      }

      if (
        status === InstallationPurposeEnum.prevention.status &&
        periodStatus === InstallationPurposeEnum.prevention.periodStatus
      ) {
        return CyclePhaseEnum.PeriodPrevention;
      }

      if (
        status === InstallationPurposeEnum.pregnancy.status &&
        periodStatus === InstallationPurposeEnum.pregnancy.periodStatus
      ) {
        return CyclePhaseEnum.Pregnancy;
      }

      if (
        status === InstallationPurposeEnum.breastfeeding.status &&
        periodStatus === InstallationPurposeEnum.breastfeeding.periodStatus
      ) {
        return CyclePhaseEnum.Breastfeeding;
      }
    }
  }, [status, periodStatus]);

  return result;
};

export default usePhaseFinder;
