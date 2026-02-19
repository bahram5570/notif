import useProfileData from '@hooks/__profile__/useProfileData';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouter } from 'next/navigation';

import { UserInfoValuesTypes } from '../useValues/types';

const useSubmit = () => {
  const router = useRouter();
  const { updateProfileDateByDellay } = useProfileData();

  const successHandler = () => {
    router.back();
    updateProfileDateByDellay();
  };

  const { callApi, isLoading: submitLoading } = usePwaApi({
    method: 'POST',
    api: 'info/generalInfov3',
    onSuccess: successHandler,
  });

  const submitHandler = (values: UserInfoValuesTypes) => {
    callApi(values);
  };

  return { submitHandler, submitLoading };
};

export default useSubmit;
