import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import { PeriodSettingsModalType } from '../../PeriodSettingsModals/enum';
import { PeriodSettingsValuesTypes } from '../useValues/types';

const useSubmit = () => {
  const router = useRouter();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { updateProfileData } = useGetProfileData();

  const successHandler = () => {
    router.back();
    updateProfileData();
  };

  const { callApi, isLoading: submitLoading } = usePwaApi({
    method: 'PUT',
    onSuccess: successHandler,
    api: 'profile/woman/cycleInfo',
  });

  const submitHandler = (values: PeriodSettingsValuesTypes) => {
    if (values.cycleLength > 35 || values.cycleLength < 21) {
      return newQueryParamsHandler({ [MODALS.USER_PERIOD_SETTINGS]: PeriodSettingsModalType.CycleLengthWarning });
    }
    callApi(values);
  };

  const acceptingChanges = (values: PeriodSettingsValuesTypes) => {
    callApi(values);
  };

  return { submitHandler, submitLoading, acceptingChanges };
};

export default useSubmit;
