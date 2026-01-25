import Dark_Spinner from '@components/ui/Dark_Spinner';
import Dark_Typography from '@components/ui/Dark_Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';

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
      {isLoading && <Dark_Spinner size={24} />}

      {!isLoading && (
        <Dark_Typography fontSize="Body_Large" className="text-impo_Surface_OnSurfaceVariant">
          {valueScript}
        </Dark_Typography>
      )}
    </div>
  );
};

export default PeriodSettingsLingthGenerator;
