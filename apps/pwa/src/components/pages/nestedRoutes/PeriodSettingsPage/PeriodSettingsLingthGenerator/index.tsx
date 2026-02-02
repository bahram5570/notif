import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import { PeriodSettingsLingthGeneratorTypes } from './types';

const PeriodSettingsLingthGenerator = ({ name, values }: PeriodSettingsLingthGeneratorTypes) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const selectHandler = () => {
    newQueryParamsHandler({ [MODALS.USER_PERIOD_SETTINGS]: name });
    pageNavigationHandler({ showProgressBar: false, id: name });
  };

  const isLoading = pageNavigationLoading === name;
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
