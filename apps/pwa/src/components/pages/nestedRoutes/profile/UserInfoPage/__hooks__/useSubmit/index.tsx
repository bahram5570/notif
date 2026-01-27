import useApi from '@hooks/useApi';
import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';
import { useRouter } from 'next/navigation';

import { UserInfoValuesTypes } from '../useValues/types';

const useSubmit = () => {
  const router = useRouter();
  const { updateProfileDateByDellay } = useGetProfileData();

  const successHandler = () => {
    router.back();
    updateProfileDateByDellay();
  };

  const { callApi, isLoading: submitLoading } = useApi({
    method: 'PUT',
    onSuccess: successHandler,
    api: 'profile/woman/infov2',
  });

  const submitHandler = (values: UserInfoValuesTypes) => {
    callApi(values);
  };

  return { submitHandler, submitLoading };
};

export default useSubmit;
