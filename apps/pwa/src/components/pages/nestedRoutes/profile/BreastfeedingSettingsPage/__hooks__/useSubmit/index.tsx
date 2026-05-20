import { ChildTypeEnum } from '@constants/activation.constants';
import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';
import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { SubmitHandlerPropsType } from './type';

const useSubmit = ({ childBirthDate, childName, childType }: SubmitHandlerPropsType) => {
  const router = useCustomRouter();
  const { updateProfileData } = useGetProfileData();

  const successHandler = () => {
    updateProfileData();
    router.back();
  };

  const { callApi, isLoading } = usePwaApi({
    method: 'PUT',
    onSuccess: successHandler,
    api: 'info/breastfeeding/edit',
  });

  const submitHandler = () => {
    const payload = {
      ...(childType !== ChildTypeEnum.Twin && { childName }),
      birthDate: childBirthDate,
      childType,
    };

    callApi(payload);
  };

  return { submitHandler, isLoading };
};

export default useSubmit;
