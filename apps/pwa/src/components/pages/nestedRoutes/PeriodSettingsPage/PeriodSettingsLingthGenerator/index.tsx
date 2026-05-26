import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MODALS } from '@constants/modals.constants';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { PeriodSettingsLingthGeneratorTypes } from './types';

const PeriodSettingsLingthGenerator = ({ name, values }: PeriodSettingsLingthGeneratorTypes) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, navigationLoadingId } = usePageNavigationLoading();

  const selectHandler = () => {
    newQueryParamsHandler({ [MODALS.USER_PERIOD_SETTINGS]: name });
    pageNavigationHandler({ id: name });
  };

  const isLoading = navigationLoadingId === name;
  const valueScript = values[name].toString();

  return (
    <div onClick={selectHandler} className="w-full flex justify-end items-center">
      {isLoading && <CustomSpinner size={24} />}

      {!isLoading && (
        <CustomTypography fontSize="Body_Large" className="text-impo_Surface_OnSurfaceVariant">
          {valueScript}
        </CustomTypography>
      )}
    </div>
  );
};

export default PeriodSettingsLingthGenerator;
