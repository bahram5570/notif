import CustomModal from '@components/ui/CustomModal';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import { PeriodSettingsValuesTypes } from '../__hooks__/useValues/types';
import CycleLengthModal from './CycleLengthModal';
import PeriodLengthModal from './PeriodLengthModal';
import { PeriodSettingsModalsTypes } from './types';

const PeriodSettingsModals = ({ values, valuesHandler }: PeriodSettingsModalsTypes) => {
  const router = useRouter();
  const { getQueryParams } = useQueryParamsHandler();

  const closeHandler = () => {
    router.back();
  };

  const currentQuery = getQueryParams(MODALS.USER_PERIOD_SETTINGS) as null | keyof PeriodSettingsValuesTypes;
  const isOpen = currentQuery !== null;

  return (
    <CustomModal isOpen={isOpen} isSlidingMode={true}>
      <div className="w-full flex flex-col items-center">
        {currentQuery === 'periodLength' && (
          <PeriodLengthModal
            onClose={closeHandler}
            value={values.periodLength}
            totalCycleLength={values.cycleLength}
            valueHandler={(v) => valuesHandler('periodLength', v)}
          />
        )}

        {currentQuery === 'cycleLength' && (
          <CycleLengthModal
            onClose={closeHandler}
            value={values.cycleLength}
            valueHandler={(v) => valuesHandler('cycleLength', v)}
          />
        )}
      </div>
    </CustomModal>
  );
};

export default PeriodSettingsModals;
