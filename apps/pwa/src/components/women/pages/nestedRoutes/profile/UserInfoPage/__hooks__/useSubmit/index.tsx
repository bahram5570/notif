import useApi from '@hooks/useApi';
import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';
import { useRouter } from 'next/navigation';

import { UserInfoValuesTypes } from '../useValues/types';

const useSubmit = () => {
  const router = useRouter();
  const { updateProfileData } = useGetProfileData();

  const successHandler = () => {
    router.back();
    updateProfileData();
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
