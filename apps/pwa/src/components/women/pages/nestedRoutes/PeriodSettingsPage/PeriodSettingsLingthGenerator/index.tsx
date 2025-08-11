import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
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
      {isLoading && <Spinner color="primary" width={24} />}

      {!isLoading && (
        <Typography scale="Body" size="Large" color="Surface_OnSurfaceVariant">
          {valueScript}
        </Typography>
      )}
    </div>
  );
};

export default PeriodSettingsLingthGenerator;
