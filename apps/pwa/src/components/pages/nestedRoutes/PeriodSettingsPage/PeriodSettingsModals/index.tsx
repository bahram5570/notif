import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import CycleLengthModal from './CycleLengthModal';
import CycleLengthWarningModal from './CycleLengthWarningModal';
import PeriodLengthModal from './PeriodLengthModal';
import { PeriodSettingsModalType } from './enum';
import { PeriodSettingsModalsTypes } from './types';

const PeriodSettingsModals = ({ values, valuesHandler, acceptingChanges }: PeriodSettingsModalsTypes) => {
  const router = useRouter();
  const { getQueryParams } = useQueryParamsHandler();

  const closeHandler = () => {
    router.back();
  };

  const currentQuery = getQueryParams(MODALS.USER_PERIOD_SETTINGS) as null | PeriodSettingsModalType;
  const isOpen = currentQuery !== null;

  return (
    <CustomModal
      isOpen={isOpen}
      isSlidingMode={currentQuery !== PeriodSettingsModalType.CycleLengthWarning}
      className={`${currentQuery === PeriodSettingsModalType.CycleLengthWarning && 'max-w-xs !pb-6'}`}
    >
      <div className="w-full flex flex-col items-center">
        {currentQuery === PeriodSettingsModalType.PeriodLength && (
          <PeriodLengthModal
            onClose={closeHandler}
            value={values.periodLength}
            totalCycleLength={values.cycleLength}
            valueHandler={(v) => valuesHandler('periodLength', v)}
          />
        )}

        {currentQuery === PeriodSettingsModalType.CycleLength && (
          <CycleLengthModal
            onClose={closeHandler}
            value={values.cycleLength}
            valueHandler={(v) => valuesHandler('cycleLength', v)}
          />
        )}
        {currentQuery === PeriodSettingsModalType.CycleLengthWarning && (
          <CycleLengthWarningModal acceptingChanges={acceptingChanges} values={values} />
        )}
      </div>
    </CustomModal>
  );
};

export default PeriodSettingsModals;
