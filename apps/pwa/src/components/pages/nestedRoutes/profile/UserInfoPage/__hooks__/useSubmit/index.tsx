import { getUserInfoCookie, setUserInfoCookie } from '@actions/userCookies.actions';
import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouter } from 'next/navigation';

import { UserInfoValuesTypes } from '../useValues/types';

const useSubmit = () => {
  const router = useRouter();
  const { updateProfileDateByDellay } = useGetProfileData();

  const successHandler = () => {
    router.back();
    updateProfileDateByDellay();
  };

  const { callApi, isLoading: submitLoading } = usePwaApi({
    method: 'PUT',
    onSuccess: successHandler,
    api: 'profile/woman/infov2',
  });

  const submitHandler = async (values: UserInfoValuesTypes) => {
    callApi(values);
    const user = await getUserInfoCookie();
    if (user && user?.name) {
      const updatedUser = { ...user };
      updatedUser.name = values.name;
      await setUserInfoCookie(updatedUser);
    }
  };

  return { submitHandler, submitLoading };
};

export default useSubmit;
