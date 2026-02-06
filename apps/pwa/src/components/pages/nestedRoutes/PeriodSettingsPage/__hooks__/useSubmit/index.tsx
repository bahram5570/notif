import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouter } from 'next/navigation';

import { PeriodSettingsValuesTypes } from '../useValues/types';

const useSubmit = () => {
  const router = useRouter();
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
    callApi(values);
  };

  return { submitHandler, submitLoading };
};

export default useSubmit;
